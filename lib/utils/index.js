/* eslint-disable unicorn/number-literal-case */
import { get, isNumber } from '~/lib/utils/external/lodash'
/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

export function parseJson(text) {
  if (typeof text !== 'string') {
    return text
  }
  return JSON.parse(text)
}

// Array
export function updateItem(arr = [], item, compare) {
  let index
  if (typeof compare === 'function') {
    index = arr.findIndex(compare)
  } else {
    compare = compare || 'id'
    index = arr.findIndex((e) => get(e, compare) === get(item, compare))
  }
  if (index >= 0) {
    arr.splice(index, 1, item)
  }
}

export function removeItem(arr = [], item, compare) {
  let index
  if (typeof compare === 'function') {
    index = arr.findIndex(compare)
  } else if (typeof compare === 'string') {
    index = arr.findIndex((e) => get(e, compare) === get(item, compare))
  } else {
    index = arr.indexOf(item)
  }
  if (index >= 0) {
    arr.splice(index, 1)
  }
}

export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export function isPromise(func) {
  return ['Promise', 'AsyncFunction'].includes(func.constructor.name)
}

export function parseBool(value) {
  const smap = {
    TRUE: true,
    true: true,
    false: false,
    FALSE: false,
    0: false,
    NaN: false,
  }
  value = typeof value === 'string' ? smap[value] : value
  return Boolean(value)
}

export function parseCookie(str) {
  return str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      return acc
    }, {})
}

export function isMobileAgent(userAgent) {
  return (
    /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(userAgent) ||
    /\b(Android|Windows Phone|iPad|iPod)\b/i.test(userAgent)
  )
}

export function isMobile() {
  const { body } = document
  const WIDTH = 768 // refer to Bootstrap's responsive design
  const rect = body.getBoundingClientRect()
  return rect.width - 1 < WIDTH
}

export function imageObj(data) {
  return {
    url: get(data, 'url', data),
    alt: get(data, 'alt'),
    title: get(data, 'title'),
  }
}

export function cssValue(value) {
  if (typeof value === 'number' || isNumber(value)) {
    return value + 'px'
  }

  return value
}

export function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration)
  })
}

// Chart
/**
 *  Create gradient color
 * @param {*} color Hex color
 */
export function createGradient(color = '#409EFF', step = [0.5, 0.25, 0]) {
  const intToHex = (n) => {
    let num = parseInt(n).toString(16)
    if (num.length % 2) {
      num = '0' + num
    }
    return num.toUpperCase()
  }
  const alpha = (n) => intToHex(Math.floor(255 * n))
  const canvas = document.createElement('canvas')
  const gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
  gradient.addColorStop(0, `${color}${alpha(step[0])}`)
  gradient.addColorStop(0.5, `${color}${alpha(step[1])}`)
  gradient.addColorStop(1, `${color}${alpha(step[2])}`)
  return gradient
}
