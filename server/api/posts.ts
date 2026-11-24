import { promises as fs } from 'node:fs'
import { join } from 'node:path'

import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const markdownIt = new MarkdownIt({
  html: true, // allows raw HTML inside Markdown files - HTML with custom classes can be used as well
  breaks: true, // treats a single newline as a line break
  linkify: true, // automatically converts URLs into links
})

export default defineEventHandler(async () => {
  const markdownDir = join(process.cwd(), 'markdown') // looks for markdown folder in project root dir

  const files = await fs.readdir(markdownDir) // read directory

  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md')) // filter for .md files only
      .map(async file => {
        const source = await fs.readFile(
          join(markdownDir, file),
          'utf8' // returns a string (instead of a Buffer)
        )

        const { data, content } = matter(source) // parse .md file into front matter (data) and markdown (content)

        return {
          slug: file.replace('.md', ''),
          frontmatter: data,
          markdown: content, // markdown portion of .md file
          html: markdownIt.render(content) // html parsed markdown 
        }
      })
  )

  return posts
})