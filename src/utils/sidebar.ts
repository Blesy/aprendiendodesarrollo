import { getCollection } from 'astro:content'
import type { Sidebar } from '../consts'

type SidebarItem = { text: string; link: string; order: number }
type SidebarDraft = Record<string, Record<string, SidebarItem[]>>

// Builds the left sidebar nav from each blog post's `rutas`/`group`/`order`/`navTitle` frontmatter.
export async function getSidebar(): Promise<Sidebar> {
  const posts = await getCollection('blog')
  const draft: SidebarDraft = {}

  for (const post of posts) {
    const { rutas, group, order, navTitle, title } = post.data
    for (const ruta of rutas) {
      draft[ruta] ??= {}
      draft[ruta][group] ??= []
      draft[ruta][group].push({ text: navTitle ?? title, link: `${ruta}/${post.id}`, order })
    }
  }

  const sidebar: Sidebar = {}
  for (const [ruta, groups] of Object.entries(draft)) {
    sidebar[ruta] = {}
    for (const [group, items] of Object.entries(groups)) {
      sidebar[ruta][group] = items
        .slice()
        .sort((a, b) => a.order - b.order)
        .map(({ text, link }) => ({ text, link }))
    }
  }

  return sidebar
}
