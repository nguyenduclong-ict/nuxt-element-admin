import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Cookies from 'js-cookie'
import { SET_SIZE } from '~/store/app'

const size = Cookies.get('size')
Vue.use(Element, { locale, size })

export default function ({ store }) {
  store.commit(`app/${SET_SIZE}`, size)
}
