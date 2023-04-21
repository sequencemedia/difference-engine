import {
  isNumber
} from '#common'

const FIBONACCI = [0, 1, 1]

let fibonacci

/*
 *  Faster than a Map
 */
export function getFibonacciFor (n) {
  return isNumber(fibonacci = FIBONACCI[n]) ? fibonacci : (FIBONACCI[n] = (getFibonacciFor(n - 1) + getFibonacciFor(n - 2)))
}

/*
 *  Truthfulness is generally faster than truthiness, so (n > 0) is better than (n)
 */
export default function toFibonacci (n) {
  return isNumber(n) ? (n > 0) ? getFibonacciFor(n) : 0 : NaN
}
