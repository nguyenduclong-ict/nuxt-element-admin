import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import numeral from '~/lib/utils/numeral'
import dayjs from '~/lib/utils/dayjs'

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
})
