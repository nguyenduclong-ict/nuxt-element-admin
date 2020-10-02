import { get } from 'js-cookie'
import { routes } from '@/settings/router'
import { findRoute } from '../utils/router'
import { merge, pick } from '~/lib/utils/external/lodash'
import { ADD_ROUTE } from '~/store/router'

export default function (ctx, inject) {
  const { store, app } = ctx
  app.router.afterEach((to, from) => {
    const meta = get(to, 'meta[0]')
    const page = findRoute(routes, { path: to.path })
    merge(page, { meta })

    if (to.matched.length) {
      store.commit(`router/${ADD_ROUTE}`, {
        ...page,
        ...pick(to, 'name', 'query', 'params', 'fullPath'),
        pre: from,
      })
    }
  })
}
