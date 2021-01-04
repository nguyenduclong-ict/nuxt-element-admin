import mergeWith from 'lodash/mergeWith'
import get from 'lodash/get'
import unset from 'lodash/unset'
import set from 'lodash/set'
import throttle from 'lodash/throttle'
import defaultsDeep from 'lodash/defaultsDeep'
import debounce from 'lodash/debounce'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'
import uniq from 'lodash/uniq'
import uniqBy from 'lodash/uniqBy'
import uniqWith from 'lodash/uniqWith'
import merge from 'lodash/merge'
import omitBy from 'lodash/omitBy'
import omit from 'lodash/omit'
import has from 'lodash/has'
import forEach from 'lodash/forEach'
import isString from 'lodash/isString'
import isEmpty from 'lodash/isEmpty'
import flatMapDeep from 'lodash/flatMapDeep'
import flatMap from 'lodash/flatMap'
import isArray from 'lodash/isArray'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'

const assign = Object.assign

function isEqualWithKeys(a, b, keys) {
  return isEqual(customPick(a, keys), customPick(b, keys))
}

function customDefaultsMerge(objValue, srcValue) {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
}

function defaultsDeepWith(source, customizer = customDefaultsMerge, ...args) {
  args.push(undefined, source, customizer)
  return mergeWith.apply(undefined, args)
}

function customGet(source, path, defaultData) {
  if (path) {
    return get(source, path, defaultData)
  }
  return source
}

function customPick(source, path) {
  if (path && path.length) {
    return pick(source, path)
  }
  return source
}

export {
  throttle,
  isArray,
  omit,
  forEach,
  mergeWith,
  get,
  set,
  defaultsDeep,
  debounce,
  pick,
  cloneDeep,
  isEqual,
  uniq,
  uniqBy,
  uniqWith,
  merge,
  omitBy,
  unset,
  has,
  isString,
  pickBy,
  isNil,
  isEmpty,
  flatMapDeep,
  flatMap,
  isEqualWithKeys,
  assign,
  defaultsDeepWith,
  customGet,
  customDefaultsMerge,
  isNumber,
}

export default {
  throttle,
  isArray,
  omit,
  forEach,
  mergeWith,
  get,
  set,
  defaultsDeep,
  debounce,
  pick,
  cloneDeep,
  isEqual,
  uniq,
  uniqBy,
  uniqWith,
  merge,
  omitBy,
  unset,
  has,
  isString,
  pickBy,
  isNil,
  isEmpty,
  flatMapDeep,
  flatMap,
  isEqualWithKeys,
  assign,
  defaultsDeepWith,
  customGet,
  customDefaultsMerge,
  isNumber,
}
