import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Element, Root, ElementContent } from "hast"
import { toString } from "hast-util-to-string"

const OPEN_TOKEN = "\u0000HIDDENOPEN\u0000"
const CLOSE_TOKEN = "\u0000HIDDENCLOSE\u0000"

const USER_OPEN = "~~~hidden"
const USER_CLOSE = "hidden~~~"

function rehypeHiddenCode() {
    return (tree: Root) => {
        // DEBUG: find any elements containing our tokens
        visit(tree, "element", (elem: Element) => {
            const t = toString(elem)
            if (t.includes(OPEN_TOKEN) || t.includes(CLOSE_TOKEN)) {
                // Check properties for data-line variants
                const p = elem.properties ?? {}
                const isLine = "dataLine" in p || "data-line" in p
                if (isLine) {
                    elem.children = rebuildLine(elem.children as Element[])
                }
            }
        })
    }
}

function hasToken(node: Element): boolean {
    const text = toString(node)
    return text.includes(OPEN_TOKEN) || text.includes(CLOSE_TOKEN)
}

function rebuildLine(children: Element[]): ElementContent[] {
    type Segment = { props: Element["properties"]; text: string }
    const segments: Segment[] = []

    for (const child of children) {
        if (child.type !== "element") continue
        const text = toString(child)
        if (text.length === 0) continue
        segments.push({ props: child.properties, text })
    }

    type Chunk = { segIdx: number; start: number; end: number }
    const chunkMap: Chunk[] = []
    const parts: string[] = []
    let pos = 0
    for (let si = 0; si < segments.length; si++) {
        const t = segments[si].text
        chunkMap.push({ segIdx: si, start: pos, end: pos + t.length })
        parts.push(t)
        pos += t.length
    }
    const full = parts.join("")

    type HiddenRange = { open: number; close: number }
    const ranges: HiddenRange[] = []
    let search = 0
    while (search < full.length) {
        const openIdx = full.indexOf(OPEN_TOKEN, search)
        if (openIdx === -1) break
        const afterOpen = openIdx + OPEN_TOKEN.length
        const closeIdx = full.indexOf(CLOSE_TOKEN, afterOpen)
        if (closeIdx === -1) {
            ranges.push({ open: openIdx, close: full.length })
            break
        }
        ranges.push({ open: openIdx, close: closeIdx })
        search = closeIdx + CLOSE_TOKEN.length
    }

    if (ranges.length === 0) return children

    const isHidden = (i: number): boolean => ranges.some((r) => i >= r.open && i < r.close)

    const tokenAt = (i: number): number => {
        if (full.startsWith(OPEN_TOKEN, i)) return OPEN_TOKEN.length
        if (full.startsWith(CLOSE_TOKEN, i)) return CLOSE_TOKEN.length
        return 0
    }

    const result: ElementContent[] = []

    for (const chunk of chunkMap) {
        const { props } = segments[chunk.segIdx]
        let i = chunk.start
        const end = chunk.end

        while (i < end) {
            const tLen = tokenAt(i)
            if (tLen > 0) {
                i += tLen
                continue
            }

            const hidden = isHidden(i)
            let j = i + 1
            while (j < end) {
                if (tokenAt(j) > 0) break
                if (isHidden(j) !== hidden) break
                j++
            }

            const sliceText = full.slice(i, j)
            if (sliceText.length > 0) {
                if (hidden) {
                    result.push({
                        type: "element",
                        tagName: "span",
                        properties: { className: ["hidden-code"] },
                        children: [{ type: "text", value: sliceText }],
                    })
                } else {
                    result.push({
                        type: "element",
                        tagName: "span",
                        properties: { ...(props ?? {}) },
                        children: [{ type: "text", value: sliceText }],
                    })
                }
            }
            i = j
        }
    }

    return result
}

export const HiddenCode: QuartzTransformerPlugin = () => {
    return {
        name: "HiddenCode",

        textTransform(_ctx, src) {
            return src.replaceAll(USER_OPEN, OPEN_TOKEN).replaceAll(USER_CLOSE, CLOSE_TOKEN)
        },

        htmlPlugins() {
            return [rehypeHiddenCode]
        },

        externalResources() {
            return {
                css: [{ content: hiddenCodeCSS }],
            }
        },
    }
}

const hiddenCodeCSS = `
/* ── HiddenCode plugin ──────────────────────────────────────────────────── */
.hidden-code {
  color: transparent !important;
  background: transparent !important;
  user-select: text;
  -webkit-user-select: text;
  cursor: text;
}
`
