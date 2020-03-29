/** @module NumberEngine */

import {
  isString,
  isNumber
} from '@difference-engine/common'

import fibonacci from './fibonacci'
import haversine from './haversine'

import Weight from './weight'

import Temperature from './temperature'

import Distance from './distance'

const OCT = 8
const HEX = 16

export function fromHexToDec (v) {
  return isString(v) ? parseInt(v, HEX) : isNumber(v) ? v : NaN
}

export function fromOctToDec (v) {
  return isString(v) ? parseInt(v, OCT) : isNumber(v) ? v : NaN
}

export {
  fibonacci,
  haversine,
  Weight,
  Temperature,
  Distance
}

/**
 * @class NumberEngine
 */
export default class NumberEngine {
  static fibonacci = fibonacci
  static haversine = haversine

  static fromHexToDec = fromHexToDec
  static fromOctToDec = fromOctToDec

  static Temperature = Temperature
  static Weight = Weight
  static Distance = Distance
}
