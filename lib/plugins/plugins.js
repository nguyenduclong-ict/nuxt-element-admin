/* eslint-disable vue/no-reserved-keys */
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import Cookies from 'js-cookie'
import VueClipboard from 'vue-clipboard2'
import { isMobile, parseBool } from '../utils'
import * as _ from '~/lib/utils/external/lodash'
import { throttle } from '~/lib/utils/external/lodash'
import numeral from '~/lib/utils/external/numeral'
import dayjs from '~/lib/utils/external/dayjs'
import { TOGGLE_SIDEBAR } from '~/store/sidebar'
import { TOGGLE_DEVICE, SET_SIZE, TOGGLE_TAGS_VIEW } from '~/store/app'
import { TOGGLE_FIXED } from '~/store/navbar'

// Vue clipboard
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)

// Tynimce
Vue.component('editor', Editor, {
  init: {
    plugins: [],
  },
})

// Global mixin
Vue.mixin({
  filters: {
    date(value, format = 'DD/MM/YYYY') {
      return dayjs(value).format(format)
    },
    number(value, format) {
      return numeral(value).format(format)
    },
  },
  data() {
    return {
      _,
    }
  },
})

export default function ({ store }, inject) {
  if (!process.server) {
    const sidebar = store.state.sidebar
    const size = Cookies.get('size') || 'default'
    const tagsView = parseBool(Cookies.get('tagsView'))
    const fixedHeader = parseBool(Cookies.get('fixedHeader'))
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
  }
}
