/* eslint-disable vue/no-reserved-keys */
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import VueClipboard from 'vue-clipboard2'
import _ from '~/lib/utils/external/lodash'
import numeral from '~/lib/utils/external/numeral'
import dayjs from '~/lib/utils/external/dayjs'

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

export default function ({ store }, inject) {}
