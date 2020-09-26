import { removeItem } from '.'
import { set, isNil } from '~/lib/utils/lodash'

export function vToggle(prop) {
  return function (state, value) {
    set(state, prop, isNil(value) ? !state.opened : value)
  }
}

export function vSet(prop) {
  return function (state, value) {
    set(state, prop, value)
  }
}

export function vRemove(prop) {
  return function (state, value) {
    removeItem(state[prop], value)
  }
}
