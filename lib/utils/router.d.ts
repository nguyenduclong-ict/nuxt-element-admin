interface RouterItem {
  id: string
  title: string
  path: string
  redirect: string
  children: RouterItem[]
  exact: boolean
  sidebar: boolean
  root: boolean
  pined: boolean
  meta: {
    role: string | string[]
    permission: string | string[]
    condition: {
      role: 'all' | 'some'
      permission: 'all' | 'some'
    }
  }
}

export declare function createRouter(items: RouterItem[]): RouterItem[]

export declare function getSidebar(routes: RouterItem[]): RouterItem[]

export declare function findRoute(routes: RouterItem[], condition): RouterItem

export declare function findHistoryRoute(
  routes: RouterItem[],
  condition
): RouterItem[]
