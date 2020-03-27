/** @module DifferenceEngine */

import { isArray } from '@difference-engine/common'

/*
 *  Accepts one array, "array" and one value, "value";
 *  Returns a boolean which describes if "array" contains "value"
 *  @param {array} array
 *    [ "A", "B", "C", "D" ]
 *  @param {string, number} value
 *    "A"
 */
function has (array, value) {
  let i = 0
  const j = array.length
  for (i, j; i < j; i = i + 1) {
    if (array[i] === value) {
      return true
    }
  }
  return null
}

/*
 *  Accepts two arrays, "alpha" and "omega";
 *  Returns an array containing items
 *    1) in "alpha" AND "omega" IF "condition" is "true"
 *    2) in "alpha" NOT "omega" IF "condition" is "null"
 *  @param {array} alpha
 *    [ "A", "B", "D" ]
 *  @param {array} omega
 *    [ "A", "B", "C" ]
 */
function getInclusiveItems (alpha, omega) {
  let i = 0
  const j = alpha.length
  let value
  const items = []
  for (i, j; i < j; i = i + 1) {
    if (has(omega, (value = alpha[i])) === true) {
      items.push(value)
    }
  }
  return items
}

/*
 *  Accepts two arrays, "alpha" and "omega";
 *  Returns an array containing items in "alpha" NOT in "omega"
 *  @param {array} alpha
 *    [ "A", "B", "D" ]
 *  @param {array} omega
 *    [ "A", "B", "C" ]
 */
function getExclusiveItems (alpha, omega) {
  let i = 0
  const j = alpha.length
  let value
  const items = []
  for (i, j; i < j; i = i + 1) {
    if (has(omega, (value = alpha[i])) === null) {
      items.push(value)
    }
  }
  return items
}

/*
 *  Accepts two arrays, "alpha" and "omega";
 *  Returns an array containing items in "alpha" AND in "omega"
 *  @param {array} alpha
 *    [ "A", "B", "D" ]
 *  @param {array} omega
 *    [ "A", "B", "C" ]
 */
export function inclusive (alpha, omega) {
  if (isArray(alpha) && isArray(omega)) {
    return getInclusiveItems(alpha, omega)
  }

  return []
}

/*
   *  Accepts two arrays, "alpha" and "omega";
   *  Returns an array containing items in "alpha" NOT "omega"
   *  @param {array} alpha
   *    [ "A", "B", "D" ]
   *  @param {array} omega
   *    [ "A", "B", "C" ]
   */
export function exclusive (alpha, omega) {
  if (isArray(alpha) && isArray(omega)) {
    return getExclusiveItems(alpha, omega)
  }

  return []
}

/**
 * @class DifferenceEngine
 */
export default class DifferenceEngine {
  static inclusive = inclusive
  static exclusive = exclusive
}
