import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeStringify from "rehype-stringify"
import { visit } from "unist-util-visit"
import { toString } from "hast-util-to-string"

const OPEN_TOKEN = "\x00HIDDENOPEN\x00"
const CLOSE_TOKEN = "\x00HIDDENCLOSE\x00"

const markdown = "```java\nwhile (x " + OPEN_TOKEN + "!=" + CLOSE_TOKEN + " 0){\n    int pop = x % 10;\n}\n```"

await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, { theme: { light: "github-light", dark: "github-dark" } })
    .use(() => (tree) => {
        visit(tree, "element", (node) => {
            const t = toString(node)
            if (t.includes(OPEN_TOKEN) || t.includes(CLOSE_TOKEN)) {
                console.log("TAG:", node.tagName)
                console.log("PROPS:", JSON.stringify(node.properties))
                console.log("TEXT:", JSON.stringify(t.slice(0, 120)))
                console.log("---")
            }
        })
    })
    .use(rehypeStringify)
    .process(markdown)

console.log("done")
