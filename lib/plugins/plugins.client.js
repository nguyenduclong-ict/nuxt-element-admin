import Vue from 'vue'
import ImageCropper from 'vue-image-crop-upload'
import Cookies from 'js-cookie'
import { isMobile, parseBool } from '../utils'
import { throttle } from '~/lib/utils/external/lodash'
import { TOGGLE_SIDEBAR } from '~/store/sidebar'
import { TOGGLE_DEVICE, SET_SIZE, TOGGLE_TAGS_VIEW } from '~/store/app'
import { TOGGLE_FIXED } from '~/store/navbar'

Vue.component('image-cropper', ImageCropper)

export default function ({ store }) {
  const sidebar = store.state.sidebar
  const size = Cookies.get('size') || 'default'
  const tagsView = parseBool(Cookies.get('tagsView'))
  const fixedHeader = parseBool(Cookies.get('fixedHeader'))

  // resize handle
  const onResize = throttle(() => {
    if (window.innerWidth < 768 && sidebar.opened) {
      store.commit('sidebar/' + TOGGLE_SIDEBAR, false)
    } else if (window.innerWidth > 768 && !sidebar.opened) {
      store.commit('sidebar/' + TOGGLE_SIDEBAR, true)
    }
    store.commit(`app/${TOGGLE_DEVICE}`, isMobile() ? 'mobile' : 'desktop')
  }, 100)
  window.addEventListener('resize', onResize)
  window.onNuxtReady(() => {
    onResize()
    store.commit(`app/${SET_SIZE}`, size)
    store.commit(`app/${TOGGLE_TAGS_VIEW}`, tagsView)
    store.commit(`navbar/${TOGGLE_FIXED}`, fixedHeader)
    store.commit(`app/${SET_SIZE}`, size)
  })
  onResize()
}
