import Cookies from 'js-cookie'
import { vToggle } from '~/lib/utils/vuex'
export const state = () => ({
  device: 'desktop',
  size: 'medium',
  tagsView: false,
})

export const TOGGLE_DEVICE = 'TOGGLE_DEVICE'
export const SET_SIZE = 'SET_SIZE'
export const TOGGLE_TAGS_VIEW = 'TOGGLE_TAGS_VIEW'

export const mutations = {
  [TOGGLE_DEVICE]: (state, device) => {
    state.device = device
  },
  [TOGGLE_TAGS_VIEW]: vToggle('tagsView'),
  [SET_SIZE]: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  },
}
