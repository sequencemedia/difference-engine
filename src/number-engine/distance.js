import { isNumber } from '@difference-engine/common'

/*
 * Distance
 */

export function fromKmToMt (n) { // KM -> MT
  return isNumber(n) ? n * 1000 : NaN
}

export function fromKmToCm (n) { // KM -> MT -> CM
  return isNumber(n) ? (n * 1000) * 100 : NaN
}

export function fromKmToMm (n) { // KM -> MT -> CM -> MM
  return isNumber(n) ? ((n * 1000) * 100) * 10 : NaN
}

export function fromMtToKm (n) { // MT -> KM
  return isNumber(n) ? (n / 1000) : NaN
}

export function fromMtToCm (n) { // MT -> CM
  return isNumber(n) ? n * 100 : NaN
}

export function fromMtToMm (n) { // MT -> CM -> MM
  return isNumber(n) ? (n * 100) * 10 : NaN
}

export function fromCmToKm (n) { // CM -> MT -> KM
  return isNumber(n) ? (n / 100) / 1000 : NaN
}

export function fromCmToMt (n) { // CM -> MT
  return isNumber(n) ? n / 100 : NaN
}

export function fromCmToMm (n) { // CM -> MM
  return isNumber(n) ? n * 10 : NaN
}

export function fromMmToKm (n) { // MM -> CM -> MT -> KM
  return isNumber(n) ? ((n / 10) / 100) / 1000 : NaN
}

export function fromMmToMt (n) { // MM -> CM -> MT
  return isNumber(n) ? (n / 10) / 100 : NaN
}

export function fromMmToCm (n) { // MM -> CM
  return isNumber(n) ? n / 10 : NaN
}

export function fromInToFt (n) { // IN -> FT
  return isNumber(n) ? n / 12 : NaN
}

export function fromInToYd (n) { // IN -> FT -> YD
  return isNumber(n) ? (n / 12) / 3 : NaN
}

export function fromInToMi (n) { // IN -> FT -> YD -> MI
  return isNumber(n) ? ((n / 12) / 3) / 1760 : NaN
}

export function fromFtToIn (n) { // FT -> IN
  return isNumber(n) ? n * 12 : NaN
}

export function fromFtToYd (n) { // FT -> YD
  return isNumber(n) ? n / 3 : NaN
}

export function fromFtToMi (n) { // FT -> YD -> MI
  return isNumber(n) ? (n / 3) / 1760 : NaN
}

export function fromYdToIn (n) { // YD -> FT -> IN
  return isNumber(n) ? (n * 3) * 12 : NaN
}

export function fromYdToFt (n) { // YD -> FT
  return isNumber(n) ? n * 3 : NaN
}

export function fromYdToMi (n) { // YD -> MI
  return isNumber(n) ? n / 1760 : NaN
}

export function fromMiToYd (n) { // MI -> YD -> FT
  return isNumber(n) ? n * 1760 : NaN
}

export function fromMiToFt (n) { // MI -> YD -> FT
  return isNumber(n) ? (n * 1760) * 3 : NaN
}

export function fromMiToIn (n) { // MI -> YD -> FT -> IN
  return isNumber(n) ? ((n * 1760) * 3) * 12 : NaN
}

export default class Distance {
  static fromKmToMt = fromKmToMt
  static fromKmToCm = fromKmToCm
  static fromKmToMm = fromKmToMm

  static fromMtToKm = fromMtToKm
  static fromMtToCm = fromMtToCm
  static fromMtToMm = fromMtToMm

  static fromCmToKm = fromCmToKm
  static fromCmToMt = fromCmToMt
  static fromCmToMm = fromCmToMm

  static fromMmToKm = fromMmToKm
  static fromMmToMt = fromMmToMt
  static fromMmToCm = fromMmToCm

  static fromInToFt = fromInToFt
  static fromInToYd = fromInToYd
  static fromInToMi = fromInToMi

  static fromFtToIn = fromFtToIn
  static fromFtToYd = fromFtToYd
  static fromFtToMi = fromFtToMi

  static fromYdToIn = fromYdToIn
  static fromYdToFt = fromYdToFt
  static fromYdToMi = fromYdToMi

  static fromMiToIn = fromMiToIn
  static fromMiToFt = fromMiToFt
  static fromMiToYd = fromMiToYd

  static convert (amount) {
    return {
      fromKm: {
        toMt () {
          return fromKmToMt(amount)
        },
        toCm () {
          return fromKmToCm(amount)
        },
        toMm () {
          return fromKmToMm(amount)
        }
      },
      fromMt: {
        toKm () {
          return fromMtToKm(amount)
        },
        toCm () {
          return fromMtToCm(amount)
        },
        toMm () {
          return fromMtToMm(amount)
        }
      },
      fromCm: {
        toKm () {
          return fromCmToKm(amount)
        },
        toMt () {
          return fromCmToMt(amount)
        },
        toMm () {
          return fromCmToMm(amount)
        }
      },
      fromMm: {
        toKm () {
          return fromMmToKm(amount)
        },
        toMt () {
          return fromMmToMt(amount)
        },
        toCm () {
          return fromMmToCm(amount)
        }
      },
      fromIn: {
        toFt () {
          return fromInToFt(amount)
        },
        toYd () {
          return fromInToYd(amount)
        },
        toMi () {
          return fromInToMi(amount)
        }
      },
      fromFt: {
        toIn () {
          return fromFtToIn(amount)
        },
        toYd () {
          return fromFtToYd(amount)
        },
        toMi () {
          return fromFtToMi(amount)
        }
      },
      fromYd: {
        toIn () {
          return fromYdToIn(amount)
        },
        toFt () {
          return fromYdToFt(amount)
        },
        toMi () {
          return fromYdToMi(amount)
        }
      },
      fromMi: {
        toIn () {
          return fromMiToIn(amount)
        },
        toFt () {
          return fromMiToFt(amount)
        },
        toYd () {
          return fromMiToYd(amount)
        }
      }
    }
  }
}
