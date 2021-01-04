import { SET_SIZE, TOGGLE_DEVICE, TOGGLE_TAGS_VIEW } from './app'
import { TOGGLE_FIXED } from './navbar'
import { TOGGLE_SIDEBAR } from './sidebar'
import { isMobileAgent, parseBool, parseCookie } from '~/lib/utils'
import { vSet } from '~/lib/utils/vuex'

export const state = () => ({
  locations: [],
})

export const SET_LOCATIONS = 'SET_LOCATIONS'
export const mutations = {
  [SET_LOCATIONS]: vSet('locations'),
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    // Init defalut config app
    const isMobile = isMobileAgent(req.headers['user-agent'])
    const cookies = parseCookie(req.headers.cookie)
    const size = cookies.size || 'default'
    const tagsView = parseBool(cookies.tagsView)
    const fixedHeader = parseBool(cookies.fixedHeader)

    commit(`app/${SET_SIZE}`, size)
    commit(`app/${TOGGLE_TAGS_VIEW}`, tagsView)
    commit(`navbar/${TOGGLE_FIXED}`, fixedHeader)
    commit(`app/${TOGGLE_DEVICE}`, isMobile ? 'mobile' : 'desktop')
    commit(`sidebar/${TOGGLE_SIDEBAR}`, !isMobile)
  },
}
