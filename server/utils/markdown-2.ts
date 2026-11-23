import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export interface BlogPost {
  slug: string
  title: string
  description: string
  published: string
  html: string
}

export function parsePost(
  slug: string,
  source: string
): BlogPost {
  const { data, content } = matter(source)

  return {
    slug,
    title: data.title,
    description: data.description,
    published: data.published,
    html: md.render(content),
  }
}