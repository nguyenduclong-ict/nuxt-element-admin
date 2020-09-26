import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import Cookies from 'js-cookie'

const size = Cookies.get('size') || 'default'
Vue.use(Element, { locale, size })
