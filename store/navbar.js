import Cookies from 'js-cookie'
import { vToggle } from '~/lib/utils/vuex'

export const state = () => ({
  fixed: true,
})

export const getters = {
  items(state) {
    return state.items
  },
}

// Mutations
export const TOGGLE_FIXED = 'TOGGLE_FIXED'

export const mutations = {
  [TOGGLE_FIXED]: vToggle('fixed', (state) => {
    Cookies.set('fixedHeader', state.fixed)
  }),
}

export const actions = {}
