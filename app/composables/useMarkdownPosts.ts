export async function useMarkdownPosts() {
  const modules = import.meta.glob(
    '~/markdown/*.md',
    {
      query: '?raw',
      import: 'default'
    }
  )

  return await Promise.all(
    Object.entries(modules).map(
      async ([path, loader]) => {
        const content = await loader()

        let slug = path
          .split('/')
          .pop()!
          .replace('.md', '')

        return {
          slug,
          content,
        }
      }
    )
  )
}