import Cookies from 'js-cookie'
import { vSet, vToggle } from '~/lib/utils/vuex'
export const state = () => ({
  device: 'mobile',
  size: 'medium',
  tagsView: true,
})

export const TOGGLE_DEVICE = 'TOGGLE_DEVICE'
export const SET_SIZE = 'SET_SIZE'
export const TOGGLE_TAGS_VIEW = 'TOGGLE_TAGS_VIEW'

export const mutations = {
  [TOGGLE_DEVICE]: vToggle('device'),
  [TOGGLE_TAGS_VIEW]: vToggle('tagsView', (state) => {
    Cookies.set('tagsView', state.tagsView)
  }),
  [SET_SIZE]: vSet('size', (state) => {
    Cookies.set('size', state.size)
  }),
}
