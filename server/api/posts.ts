import { promises as fs } from 'node:fs'
import { join } from 'node:path'

import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default defineEventHandler(async () => {
  const markdownDir = join(process.cwd(), 'markdown') // looks for markdown folder in project root dir

  const files = await fs.readdir(markdownDir)

  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const source = await fs.readFile(
          join(markdownDir, file),
          'utf8'
        )

        const { data, content } = matter(source)

        return {
          slug: file.replace('.md', ''),
          frontmatter: data,
          markdown: content,
          html: md.render(content)
        }
      })
  )

  return posts
})