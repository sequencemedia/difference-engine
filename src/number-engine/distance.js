import { isNumber } from '@difference-engine/common'

const MMIN = 0.03937007874 // milimetre to inch (inches in a milimetre)
const INMM = 25.4000000001016 // inch to milimetre (milimetres in an inch)

// 1 / 0.03937007874 = 25.4000000001016
// 25.4000000001016 * 0.03937007874 = 1

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

export function fromKmToIn (n) { // KM -> MT -> CM -> MM -> IN
  return isNumber(n) ? (((n * 10) * 100) * 1000) * MMIN : NaN
}

export function fromKmToFt (n) { // KM -> MT -> CM -> MM -> IN
  return isNumber(n) ? ((((n * 10) * 100) * 1000) * MMIN) / 12 : NaN
}

export function fromKmToYd (n) { // KM -> MT -> CM -> MM -> IN -> YD
  return isNumber(n) ? (((((n * 10) * 100) * 1000) * MMIN) / 12) / 3 : NaN
}

export function fromKmToMi (n) { // KM -> MT -> CM -> MM -> IN -> YD -> MI
  return isNumber(n) ? ((((((n * 10) * 100) * 1000) * MMIN) / 12) / 3) / 1760 : NaN
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

export function fromMtToIn (n) { // MT -> CM -> MM -> IN
  return isNumber(n) ? ((n * 10) * 100) * MMIN : NaN
}

export function fromMtToFt (n) { // MT -> CM -> MM -> IN
  return isNumber(n) ? (((n * 10) * 100) * MMIN) / 12 : NaN
}

export function fromMtToYd (n) { // MT -> CM -> MM -> IN -> YD
  return isNumber(n) ? ((((n * 10) * 100) * MMIN) / 12) / 3 : NaN
}

export function fromMtToMi (n) { // MT -> CM -> MM -> IN -> YD -> MI
  return isNumber(n) ? (((((n * 10) * 100) * MMIN) / 12) / 3) / 1760 : NaN
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

export function fromCmToIn (n) { // CM -> MM -> IN
  return isNumber(n) ? (n * 10) * MMIN : NaN
}

export function fromCmToFt (n) { // CM -> MM -> IN
  return isNumber(n) ? ((n * 10) * MMIN) / 12 : NaN
}

export function fromCmToYd (n) { // CM -> MM -> IN -> YD
  return isNumber(n) ? (((n * 10) * MMIN) / 12) / 3 : NaN
}

export function fromCmToMi (n) { // CM -> MM -> IN -> YD
  return isNumber(n) ? ((((n * 10) * MMIN) / 12) / 3) / 1760 : NaN
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

export function fromMmToIn (n) { // MM -> IN
  return isNumber(n) ? n * MMIN : NaN
}

export function fromMmToFt (n) { // MM -> IN -> FT
  return isNumber(n) ? (n * MMIN) / 12 : NaN
}

export function fromMmToYd (n) { // MM -> IN -> FT -> YD
  return isNumber(n) ? ((n * MMIN) / 12) / 3 : NaN
}

export function fromMmToMi (n) { // MM -> IN -> FT -> YD -> MI
  return isNumber(n) ? (((n * MMIN) / 12) / 3) / 1760 : NaN
}

export function fromInToKm (n) { // IN -> MM -> CM -> MT -> KM
  return isNumber(n) ? (((n * INMM) / 10) / 100) / 1000 : NaN
}

export function fromInToMt (n) { // IN -> MM -> CM -> MT
  return isNumber(n) ? ((n * INMM) / 10) / 100 : NaN
}

export function fromInToCm (n) { // IN -> MM -> CM
  return isNumber(n) ? (n * INMM) / 10 : NaN
}

export function fromInToMm (n) { // IN -> MM
  return isNumber(n) ? n * INMM : NaN
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

export function fromFtToKm (n) { // FT -> IN -> MM -> CM -> MT -> KM
  return isNumber(n) ? ((((n * 12) * INMM) / 10) / 100) / 1000 : NaN
}

export function fromFtToMt (n) { // FT -> IN -> MM -> CM -> MT
  return isNumber(n) ? (((n * 12) * INMM) / 10) / 100 : NaN
}

export function fromFtToCm (n) { // FT -> IN -> MM -> CM
  return isNumber(n) ? ((n * 12) * INMM) / 10 : NaN
}

export function fromFtToMm (n) { // FT -> IN -> MM
  return isNumber(n) ? (n * 12) * INMM : NaN
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

export function fromYdToKm (n) { // YD -> FT -> IN -> MM -> CM -> MT -> KM
  return isNumber(n) ? (((((n * 3) * 12) * INMM) / 10) / 100) / 1000 : NaN
}

export function fromYdToMt (n) { // YD -> FT -> IN -> MM -> CM -> MT
  return isNumber(n) ? ((((n * 3) * 12) * INMM) / 10) / 100 : NaN
}

export function fromYdToCm (n) { // YD -> FT -> IN -> MM -> CM
  return isNumber(n) ? (((n * 3) * 12) * INMM) / 10 : NaN
}

export function fromYdToMm (n) { // YD -> FT -> IN -> MM
  return isNumber(n) ? ((n * 3) * 12) * INMM : NaN
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

export function fromMiToKm (n) { // MI -> YD -> FT -> IN -> MM -> CM -> MT -> KM
  return isNumber(n) ? ((((((n * 1760) * 3) * 12) * INMM) / 10) / 100) / 1000 : NaN
}

export function fromMiToMt (n) { // MI -> YD -> FT -> IN -> MM -> CM -> MT
  return isNumber(n) ? (((((n * 1760) * 3) * 12) * INMM) / 10) / 100 : NaN
}

export function fromMiToCm (n) { // MI -> YD -> FT -> IN -> MM -> CM
  return isNumber(n) ? ((((n * 1760) * 3) * 12) * INMM) / 10 : NaN
}

export function fromMiToMm (n) { // MI -> YD -> FT -> IN -> MM
  return isNumber(n) ? (((n * 1760) * 3) * 12) * INMM : NaN
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

/**
 * @class Distance
 */
export default class Distance {
  static fromKmToMt = fromKmToMt
  static fromKmToCm = fromKmToCm
  static fromKmToMm = fromKmToMm
  static fromKmToIn = fromKmToIn
  static fromKmToFt = fromKmToFt
  static fromKmToYd = fromKmToYd
  static fromKmToMi = fromKmToMi

  static fromMtToKm = fromMtToKm
  static fromMtToCm = fromMtToCm
  static fromMtToMm = fromMtToMm
  static fromMtToIn = fromMtToIn
  static fromMtToFt = fromMtToFt
  static fromMtToYd = fromMtToYd
  static fromMtToMi = fromMtToMi

  static fromCmToKm = fromCmToKm
  static fromCmToMt = fromCmToMt
  static fromCmToMm = fromCmToMm
  static fromCmToIn = fromCmToIn
  static fromCmToFt = fromCmToFt
  static fromCmToYd = fromCmToYd
  static fromCmToMi = fromCmToMi

  static fromMmToKm = fromMmToKm
  static fromMmToMt = fromMmToMt
  static fromMmToCm = fromMmToCm
  static fromMmToIn = fromMmToIn
  static fromMmToFt = fromMmToFt
  static fromMmToYd = fromMmToYd
  static fromMmToMi = fromMmToMi

  static fromInToKm = fromInToKm
  static fromInToMt = fromInToMt
  static fromInToCm = fromInToCm
  static fromInToMm = fromInToMm
  static fromInToFt = fromInToFt
  static fromInToYd = fromInToYd
  static fromInToMi = fromInToMi

  static fromFtToKm = fromFtToKm
  static fromFtToMt = fromFtToMt
  static fromFtToCm = fromFtToCm
  static fromFtToMm = fromFtToMm
  static fromFtToIn = fromFtToIn
  static fromFtToYd = fromFtToYd
  static fromFtToMi = fromFtToMi

  static fromYdToKm = fromYdToKm
  static fromYdToMt = fromYdToMt
  static fromYdToCm = fromYdToCm
  static fromYdToMm = fromYdToMm
  static fromYdToIn = fromYdToIn
  static fromYdToFt = fromYdToFt
  static fromYdToMi = fromYdToMi

  static fromMiToKm = fromMiToKm
  static fromMiToMt = fromMiToMt
  static fromMiToCm = fromMiToCm
  static fromMiToMm = fromMiToMm
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
        },
        toIn () {
          return fromKmToIn(amount)
        },
        toFt () {
          return fromKmToFt(amount)
        },
        toYd () {
          return fromKmToYd(amount)
        },
        toMi () {
          return fromKmToMi(amount)
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
        },
        toIn () {
          return fromMtToIn(amount)
        },
        toFt () {
          return fromMtToFt(amount)
        },
        toYd () {
          return fromMtToYd(amount)
        },
        toMi () {
          return fromMtToMi(amount)
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
        },
        toIn () {
          return fromCmToIn(amount)
        },
        toFt () {
          return fromCmToFt(amount)
        },
        toYd () {
          return fromCmToYd(amount)
        },
        toMi () {
          return fromCmToMi(amount)
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
        },
        toIn () {
          return fromMmToIn(amount)
        },
        toFt () {
          return fromMmToFt(amount)
        },
        toYd () {
          return fromMmToYd(amount)
        },
        toMi () {
          return fromMmToMi(amount)
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
        },
        toKm () {
          return fromInToKm(amount)
        },
        toMt () {
          return fromInToMt(amount)
        },
        toCm () {
          return fromInToCm(amount)
        },
        toMm () {
          return fromInToMm(amount)
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
        },
        toKm () {
          return fromFtToKm(amount)
        },
        toMt () {
          return fromFtToMt(amount)
        },
        toCm () {
          return fromFtToCm(amount)
        },
        toMm () {
          return fromFtToMm(amount)
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
        },
        toKm () {
          return fromYdToKm(amount)
        },
        toMt () {
          return fromYdToMt(amount)
        },
        toCm () {
          return fromYdToCm(amount)
        },
        toMm () {
          return fromYdToMm(amount)
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
        },
        toKm () {
          return fromMiToKm(amount)
        },
        toMt () {
          return fromMiToMt(amount)
        },
        toCm () {
          return fromMiToCm(amount)
        },
        toMm () {
          return fromMiToMm(amount)
        }
      }
    }
  }
}
