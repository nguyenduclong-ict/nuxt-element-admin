import { sidebarItems } from '@/settings/router'
import { vToggle } from '~/lib/utils/vuex'

export const state = () => ({
  opened: true,
  items: sidebarItems,
})

export const getters = {
  items(state) {
    return state.items.map((item) => ({
      key: item.id || item.path || item.title,
      ...item,
    }))
  },
}

// Mutations
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'

export const mutations = {
  [TOGGLE_SIDEBAR]: vToggle('opened'),
}

export const actions = {}
