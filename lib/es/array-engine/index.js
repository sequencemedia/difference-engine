/** @module ArrayEngine */

import { isNumber } from '@difference-engine/common'

export function bite (a = [], x = 0, y = 0) {
  if (isNumber(x)) {
    const l = 0 // lower bound
    const u = a.length - 1 // upper bound

    const m = -1
    let z = 0
    if (isNumber(y)) {
      /**
       * Negative zero slices lower bound 0
       *
       * Coerce x and y to acceptable values
       * l is lower bound 0
       * u is upper bound (j - 1)
       *
       * Coerce the second argument to slice
       */
      if (Math.pow(x, m) === Number.NEGATIVE_INFINITY && Math.pow(y, m) === Number.NEGATIVE_INFINITY) {
        return a.slice(l).slice().reverse()
      } else {
        x = ((l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z)
        y = ((u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z)

        return x > y ? a.slice(y, x + 1).slice().reverse() : a.slice(x, y + 1)
      }
    }

    /**
     * Negative zero slices upper bound (j - 1)
     * Positive zero slices lower bound 0
     *
     * Coerce x to an acceptable value
     * l is lower bound 0
     * u is upper bound (j - 1)
     */
    if (Math.pow(x, m) === Number.NEGATIVE_INFINITY) {
      return a.slice(u)
    } else {
      x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z
      return a.slice(x)
    }
  }

  return []
}

export function indexOf (a = [], v, i = 0, j = a.length) {
  for (i, j; i < j; i = i + 1) {
    if (a[i] === v) {
      return i
    }
  }

  return null
}

export function iterateForward (a = [], f = () => {}) {
  const j = a.length

  if (j) {
    let x = 0
    const y = j - 1

    do {
      f.call(a, a[x], x, y, a)
    } while ((x = x + 1) < j)

    return true
  }

  return false
}

export function iterateReverse (a = [], f = () => {}) {
  const j = a.length

  if (j) {
    let x = j - 1
    const y = x

    do {
      f.call(a, a[x], x, y, a)
    } while ((x = x - 1) >= 0)

    return true
  }

  return false
}

export function iterateBetween (a = [], x = 0, y = 0, f = () => {}) {
  if (isNumber(x) && isNumber(y)) {
    const l = +0 // lower bound
    const u = a.length // upper bound

    const m = -1
    let z = 0

    x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z
    y = (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z

    if (x > y) {
      const n = y - 1

      do {
        f.call(a, a[x], x, y, a)
      } while (n < --x)
    } else {
      const n = y + 1

      do {
        f.call(a, a[x], x, y, a)
      } while (++x < n)
    }

    return true
  }

  return false
}

export function max (a = [], j = a.length) {
  if (j) {
    let [
      x
    ] = a

    let z = 1

    while (z < j) {
      const y = a[z]

      if (y > x) x = y

      z = z + 1
    }

    return x
  }

  return null
}

export function min (a = [], j = a.length) {
  if (j) {
    let [
      x
    ] = a

    let z = 1

    while (z < j) {
      const y = a[z]

      if (y < x) x = y

      z = z + 1
    }

    return x
  }

  return null
}

/**
 * "ArrayEngine" defines methods for manipulating arrays
 *
 * @class ArrayEngine
 */
export default class ArrayEngine {
  static indexOf (a = [], v, i = 0) {
    const j = a.length

    if (j) {
      return indexOf(a, v, i, j)
    }

    return null
  }

  static bite = bite

  map () { }
  reduce () { }

  static max (a = []) {
    const j = a.length

    if (j) {
      const z = Math.max(...a)

      return isNaN(z)
        ? max(a, j)
        : z
    }

    return null
  }

  static min (a = []) {
    const j = a.length

    if (j) {
      const z = Math.min(...a)

      return isNaN(z)
        ? min(a, j)
        : z
    }

    return null
  }

  static iterateForward = iterateForward
  static iterateReverse = iterateReverse
  static iterateBetween = iterateBetween
}
