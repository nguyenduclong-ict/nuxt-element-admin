import { vRemove, vSet } from '~/lib/utils/vuex'

export const state = () => ({
  history: [],
  current: null,
})

export const ADD_ROUTE = 'ADD_ROUTE'
export const REMOVE_ROUTE = 'REMOVE_ROUTE'
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE'

export const mutations = {
  [ADD_ROUTE](state, value) {
    const index = state.history.findIndex((item) => item.path === value.path)
    if (index >= 0) {
      state.history[index] = value
    } else {
      state.history.push(value)
    }
    state.current = value
  },
  [REMOVE_ROUTE]: vRemove('history', undefined, 'path'),
  [SET_CURRENT_ROUTE]: vSet('current'),
}
