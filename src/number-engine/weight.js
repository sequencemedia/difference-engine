import { isNumber } from '@difference-engine/common'

const OZGR = 28.349523124662777 // ounce to gram (grams in an ounce)
const GROZ = 0.03527396195 // gram to ounce (ounces in a gram)

// 1 / 0.03527396195 = 28.349523124662777
// 28.349523124662777 * 0.03527396195 = 1

/*
 * Weight
 */

export function fromKgToGr (n) { // KG -> GR
  return isNumber(n) ? n * 1000 : NaN
}

export function fromKgToMg (n) { // KG -> GR -> MG
  return isNumber(n) ? (n * 1000) * 1000 : NaN
}

export function fromKgToOz (n) { // KG -> GR -> OZ
  return isNumber(n) ? (n * 1000) * GROZ : NaN
}

export function fromKgToLb (n) { // KG -> GR -> OZ -> LB
  return isNumber(n) ? ((n * 1000) * GROZ) / 16 : NaN
}

export function fromKgToSt (n) { // KG -> GR -> OZ -> LB -> ST
  return isNumber(n) ? (((n * 1000) * GROZ) / 16) / 14 : NaN
}

export function fromGrToKg (n) { // GR -> KG
  return isNumber(n) ? n / 1000 : NaN
}

export function fromGrToMg (n) { // GR -> KG
  return isNumber(n) ? n * 1000 : NaN
}

export function fromGrToOz (n) { // GR -> OZ
  return isNumber(n) ? n * GROZ : NaN
}

export function fromGrToLb (n) { // GR -> OZ -> LB
  return isNumber(n) ? (n * GROZ) / 16 : NaN
}

export function fromGrToSt (n) { // GR -> OZ -> LB -> ST
  return isNumber(n) ? ((n * GROZ) / 16) / 14 : NaN
}

export function fromMgToKg (n) { // MG -> GR -> KG
  return isNumber(n) ? (n / 1000) / 1000 : NaN
}

export function fromMgToGr (n) { // MG -> GR
  return isNumber(n) ? n / 1000 : NaN
}

export function fromMgToOz (n) { // MG -> GR -> OZ
  return isNumber(n) ? (n / 1000) * GROZ : NaN
}

export function fromMgToLb (n) { // MG -> GR -> OZ -> LB
  return isNumber(n) ? ((n / 1000) * GROZ) / 16 : NaN
}

export function fromMgToSt (n) { // MG -> GR -> OZ -> LB -> ST
  return isNumber(n) ? (((n / 1000) * GROZ) / 16) / 14 : NaN
}

export function fromOzToMg (n) { // OZ -> GR -> MG
  return isNumber(n) ? (n * OZGR) * 1000 : NaN
}

export function fromOzToSt (n) { // OZ -> ST
  return isNumber(n) ? (n / 16) / 14 : NaN
}

export function fromOzToLb (n) { // OZ -> LB
  return isNumber(n) ? n / 16 : NaN
}

export function fromLbToKg (n) { // LB -> OZ -> GR -> KG
  return isNumber(n) ? ((n * 16) * OZGR) / 1000 : NaN
}

export function fromLbToGr (n) { // LB -> OZ -> GR
  return isNumber(n) ? (n * 16) * OZGR : NaN
}

export function fromLbToMg (n) { // LB -> OZ -> GR -> MG
  return isNumber(n) ? ((n * 16) * OZGR) * 1000 : NaN
}

export function fromLbToSt (n) { // LB -> ST
  return isNumber(n) ? n / 14 : NaN
}

export function fromLbToOz (n) { // LB -> OZ
  return isNumber(n) ? n * 16 : NaN
}

export function fromStToKg (n) { // ST -> LB -> OZ -> GR -> KG
  return isNumber(n) ? (((n * 14) * 16) * OZGR) / 1000 : NaN
}

export function fromStToGr (n) { // ST -> LB -> OZ -> GR
  return isNumber(n) ? ((n * 14) * 16) * OZGR : NaN
}

export function fromStToMg (n) { // ST -> LB -> OZ -> GR -> MG
  return isNumber(n) ? (((n * 14) * 16) * OZGR) * 1000 : NaN
}

export function fromStToOz (n) { // ST -> LB -> OZ
  return isNumber(n) ? (n * 14) * 16 : NaN
}

export function fromStToLb (n) { // ST -> LB
  return isNumber(n) ? n * 14 : NaN
}

export function fromOzToKg (n) { // OZ -> GR -> KG
  return isNumber(n) ? (n * OZGR) / 1000 : NaN
}

export function fromOzToGr (n) { // OZ -> GR
  return isNumber(n) ? n * OZGR : NaN
}

/**
 * @class Weight
 */
export default class Weight {
  static fromKgToGr = fromKgToGr
  static fromKgToMg = fromKgToMg
  static fromKgToOz = fromKgToOz
  static fromKgToLb = fromKgToLb
  static fromKgToSt = fromKgToSt

  static fromGrToKg = fromGrToKg
  static fromGrToMg = fromGrToMg
  static fromGrToOz = fromGrToOz
  static fromGrToLb = fromGrToLb
  static fromGrToSt = fromGrToSt

  static fromMgToKg = fromMgToKg
  static fromMgToGr = fromMgToGr
  static fromMgToOz = fromMgToOz
  static fromMgToLb = fromMgToLb
  static fromMgToSt = fromMgToSt

  static fromOzToKg = fromOzToKg
  static fromOzToGr = fromOzToGr
  static fromOzToMg = fromOzToMg
  static fromOzToLb = fromOzToLb
  static fromOzToSt = fromOzToSt

  static fromLbToKg = fromLbToKg
  static fromLbToGr = fromLbToGr
  static fromLbToMg = fromLbToMg
  static fromLbToOz = fromLbToOz
  static fromLbToSt = fromLbToSt

  static fromStToKg = fromStToKg
  static fromStToGr = fromStToGr
  static fromStToMg = fromStToMg
  static fromStToLb = fromStToLb
  static fromStToOz = fromStToOz

  static convert (amount) {
    return {
      fromKg: {
        toGr () {
          return fromKgToGr(amount)
        },
        toMg () {
          return fromKgToMg(amount)
        },
        toOz () {
          return fromKgToOz(amount)
        },
        toLb () {
          return fromKgToLb(amount)
        },
        toSt () {
          return fromKgToSt(amount)
        }
      },
      fromGr: {
        toKg () {
          return fromGrToKg(amount)
        },
        toMg () {
          return fromGrToMg(amount)
        },
        toOz () {
          return fromGrToOz(amount)
        },
        toLb () {
          return fromGrToLb(amount)
        },
        toSt () {
          return fromGrToSt(amount)
        }
      },
      fromMg: {
        toKg () {
          return fromMgToKg(amount)
        },
        toGr () {
          return fromMgToGr(amount)
        },
        toOz () {
          return fromMgToOz(amount)
        },
        toLb () {
          return fromMgToLb(amount)
        },
        toSt () {
          return fromMgToSt(amount)
        }
      },
      fromOz: {
        toKg () {
          return fromOzToKg(amount)
        },
        toGr () {
          return fromOzToGr(amount)
        },
        toMg () {
          return fromOzToMg(amount)
        },
        toLb () {
          return fromOzToLb(amount)
        },
        toSt () {
          return fromOzToSt(amount)
        }
      },
      fromLb: {
        toKg () {
          return fromLbToKg(amount)
        },
        toGr () {
          return fromLbToGr(amount)
        },
        toMg () {
          return fromLbToMg(amount)
        },
        toOz () {
          return fromLbToOz(amount)
        },
        toSt () {
          return fromLbToSt(amount)
        }
      },
      fromSt: {
        toKg () {
          return fromStToKg(amount)
        },
        toGr () {
          return fromStToGr(amount)
        },
        toMg () {
          return fromStToMg(amount)
        },
        toLb () {
          return fromStToLb(amount)
        },
        toOz () {
          return fromStToOz(amount)
        }
      }
    }
  }
}
