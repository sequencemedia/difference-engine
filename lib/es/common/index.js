/**
 * @module common
 */

export const isArray = (v) => (
  (v || false)
    .constructor === Array)

export const isObject = (v) => (
  (v || false)
    .constructor === Object && !isArray(v))

export const isFunction = (v) => (
  (v || false)
    .constructor === Function)

export const isString = (v) => (typeof v === 'string')

export const isNumber = (v) => (typeof v === 'number')
