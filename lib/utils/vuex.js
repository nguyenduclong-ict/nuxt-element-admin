import Vue from 'vue'
import { removeItem } from '.'
import { set, isNil } from '~/lib/utils/external/lodash'

const nothing = () => undefined

export function vToggle(prop, callback = nothing) {
  return function (state, value, rootState) {
    set(state, prop, isNil(value) ? !state[prop] : value)
    return callback(state, value, rootState)
  }
}

export function vSet(prop, callback = nothing) {
  return function (state, value, rootState) {
    set(state, prop, value)
    return callback(state, value, rootState)
  }
}

export function vRemove(prop, callback = nothing, compare) {
  return function (state, value, rootState) {
    removeItem(state[prop], value, compare)
    return callback(state, value, rootState)
  }
}

// Vue
export function inject(name, value) {
  Vue.prototype['$' + name] = value
}
