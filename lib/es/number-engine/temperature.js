import { isNumber } from '@difference-engine/common'

/*
 * Temperature
 */

function fromFToC (n) {
  return isNumber(n) ? (n - 32) / 1.8 : NaN
}

function fromCToF (n) {
  return isNumber(n) ? (n * 1.8) + 32 : NaN
}

export default class Temperature {
  static fromFToC = fromFToC

  static fromCToF = fromCToF
}
