// Unused
// 11-23-2026
//
// This could be used to parse .md files from a folder within app (~, in this context)
// I think it would run on the client/browser though
// I am parsing my .md files on the server side so that gray-matter and markdown-it don't have to be bundled and served with the webapp
// That happens in /server/api/posts.ts instead of here

// export async function useMarkdownPosts() {
//   const modules = import.meta.glob(
//     '~/markdown/*.md',
//     {
//       query: '?raw',
//       import: 'default'
//     }
//   )

//   return await Promise.all(
//     Object.entries(modules).map(
//       async ([path, loader]) => {
//         const content = await loader()

//         let slug = path
//           .split('/')
//           .pop()!
//           .replace('.md', '')

//         return {
//           slug,
//           content,
//         }
//       }
//     )
//   )
// }