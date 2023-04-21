import {
  isNumber
} from '#common'

/*
 * Temperature
 */

export function fromFToC (n) {
  return isNumber(n) ? (n - 32) / 1.8 : NaN
}

export function fromCToF (n) {
  return isNumber(n) ? (n * 1.8) + 32 : NaN
}

/**
 * @class Temperature
 */
export default class Temperature {
  static fromFToC = fromFToC

  static fromCToF = fromCToF
}
