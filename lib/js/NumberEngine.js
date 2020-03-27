'use strict'

/*
 *  Copyright © 2012 Jonathan Perry and Sequence Media Limited
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */
var NumberEngine = (function () { // eslint-disable-line
  var numberEngine
  var temperature
  var weight
  var distance

  var OCT = 8
  // var DEC = 10
  var HEX = 16

  var OZGR = 28.3495231
  var GROZ = 0.0352739619

  var fib
  var hav

  function isObject (v) {
    return ((v || false)
      .constructor === Object && !isArray(v))
  }

  function isArray (v) {
    return ((v || false)
      .constructor === Array)
  }

  function isString (v) {
    return (typeof v === 'string')
  }

  function isNumber (v) {
    return (typeof v === 'number')
  }

  fib = (function () {
    var FIBONACCI = [0, 1]
    var fibonacci

    function positive (n) {
      return (typeof (fibonacci = FIBONACCI[n]) === 'number') ? fibonacci : (FIBONACCI[n] = (positive(n - 1) + positive(n - 2)))
    }

    return function (n) {
      /*
       *  Conditions where truth is explicit generally perform faster than
       *  conditions where truthiness is implied; so (n > 0) is better than (n)
       */
      return isNumber(n) ? (n > 0) ? positive(n) : 0 : NaN
    }
  }())

  hav = (function () {
    var sin = Math.sin
    var cos = Math.cos
    var atan2 = Math.atan2
    var sqrt = Math.sqrt
    var PI = Math.PI

    function radians (n) {
      return (n * PI) / 180
    }

    function haversine (points, radius) {
      var to,
        from,
        LAT,
        LNG,
        lat,
        lng,
        a, c
      if (isObject(points)) {
        to = points.to
        from = points.from
        if (isObject(to) && isObject(from)) {
          LAT = radians(to.lat - from.lat)
          LNG = radians(to.lng - from.lng)
          lat = LAT / 2
          lng = LNG / 2
          a = sin(lat) * sin(lat) + cos(radians(from.lat)) * cos(radians(to.lat)) * sin(lng) * sin(lng)
          c = 2 * atan2(sqrt(a), sqrt(1 - a))
          return (radius * c).toFixed(2)
        }
      }
      return NaN
    }

    return function (points) {
      return {
        km: function () {
          return haversine(points, 6378)
        },
        mi: function () {
          return haversine(points, 3963)
        }
      }
    }
  }())

  function fromHexToDec (v) {
    return isString(v) ? parseInt(v, HEX) : isNumber(v) ? v : NaN
  }

  function fromOctToDec (v) {
    return isString(v) ? parseInt(v, OCT) : isNumber(v) ? v : NaN
  }

  /*
   * Temperature
   */

  function fromFToC (n) {
    return isNumber(n) ? (n - 32) / 1.8 : NaN
  }

  function fromCToF (n) {
    return isNumber(n) ? (n * 1.8) + 32 : NaN
  }

  function Temperature () {
    return temperature || (this instanceof Temperature ? temperature = this : new Temperature())
  }

  Temperature.prototype.fromFToC = fromFToC
  Temperature.prototype.fromCToF = fromCToF
  Temperature.prototype.convert = function convert (amount) {
    return {
      fromF: {
        toC: function toC () {
          return fromFToC(amount)
        }
      },
      fromC: {
        toF: function toF () {
          return fromCToF(amount)
        }
      }
    }
  }

  /*
   * Weight
   */

  function fromKgToGr (n) { // KG -> GR
    return isNumber(n) ? n * 1000 : NaN
  }

  function fromKgToMg (n) { // KG -> GR -> MG
    return isNumber(n) ? (n * 1000) * 1000 : NaN
  }

  function fromKgToOz (n) { // KG -> GR -> OZ
    return isNumber(n) ? (n * 1000) * GROZ : NaN
  }

  function fromKgToLb (n) { // KG -> GR -> OZ -> LB
    return isNumber(n) ? ((n * 1000) * GROZ) / 16 : NaN
  }

  function fromKgToSt (n) { // KG -> GR -> OZ -> LB -> ST
    return isNumber(n) ? (((n * 1000) * GROZ) / 16) / 14 : NaN
  }

  function fromGrToKg (n) { // GR -> KG
    return isNumber(n) ? n / 1000 : NaN
  }

  function fromGrToMg (n) { // GR -> KG
    return isNumber(n) ? n * 1000 : NaN
  }

  function fromGrToOz (n) { // GR -> OZ
    return isNumber(n) ? n * GROZ : NaN
  }

  function fromGrToLb (n) { // GR -> OZ -> LB
    return isNumber(n) ? (n * GROZ) / 16 : NaN
  }

  function fromGrToSt (n) { // GR -> OZ -> LB -> ST
    return isNumber(n) ? ((n * GROZ) / 16) / 14 : NaN
  }

  function fromMgToKg (n) { // MG -> GR -> KG
    return isNumber(n) ? (n / 1000) / 1000 : NaN
  }

  function fromMgToGr (n) { // MG -> GR
    return isNumber(n) ? n / 1000 : NaN
  }

  function fromMgToOz (n) { // MG -> GR -> OZ
    return isNumber(n) ? (n / 1000) * GROZ : NaN
  }

  function fromMgToLb (n) { // MG -> GR -> OZ -> LB
    return isNumber(n) ? ((n / 1000) * GROZ) / 16 : NaN
  }

  function fromMgToSt (n) { // MG -> GR -> OZ -> LB -> ST
    return isNumber(n) ? (((n / 1000) * GROZ) / 16) / 14 : NaN
  }

  function fromOzToMg (n) { // OZ -> GR -> MG
    return isNumber(n) ? (n * OZGR) * 1000 : NaN
  }

  function fromOzToSt (n) { // OZ -> ST
    return isNumber(n) ? (n / 16) / 14 : NaN
  }

  function fromOzToLb (n) { // OZ -> LB
    return isNumber(n) ? n / 16 : NaN
  }

  function fromLbToKg (n) { // LB -> OZ -> GR -> KG
    return isNumber(n) ? ((n * 16) * OZGR) / 1000 : NaN
  }

  function fromLbToGr (n) { // LB -> OZ -> GR
    return isNumber(n) ? (n * 16) * OZGR : NaN
  }

  function fromLbToMg (n) { // LB -> OZ -> GR -> MG
    return isNumber(n) ? ((n * 16) * OZGR) * 1000 : NaN
  }

  function fromLbToSt (n) { // LB -> ST
    return isNumber(n) ? n / 14 : NaN
  }

  function fromLbToOz (n) { // LB -> OZ
    return isNumber(n) ? n * 16 : NaN
  }

  function fromStToKg (n) { // ST -> LB -> OZ -> GR -> KG
    return isNumber(n) ? (((n * 14) * 16) * OZGR) / 1000 : NaN
  }

  function fromStToGr (n) { // ST -> LB -> OZ -> GR
    return isNumber(n) ? ((n * 14) * 16) * OZGR : NaN
  }

  function fromStToMg (n) { // ST -> LB -> OZ -> GR -> MG
    return isNumber(n) ? (((n * 14) * 16) * OZGR) * 1000 : NaN
  }

  function fromStToOz (n) { // ST -> LB -> OZ
    return isNumber(n) ? (n * 14) * 16 : NaN
  }

  function fromStToLb (n) { // ST -> LB
    return isNumber(n) ? n * 14 : NaN
  }

  function fromOzToKg (n) { // OZ -> GR -> KG
    return isNumber(n) ? (n * OZGR) / 1000 : NaN
  }

  function fromOzToGr (n) { // OZ -> GR
    return isNumber(n) ? n * OZGR : NaN
  }

  function Weight () {
    return weight || (this instanceof Weight ? weight = this : new Weight())
  }

  Weight.prototype.fromKgToGr = fromKgToGr
  Weight.prototype.fromKgToMg = fromKgToMg
  Weight.prototype.fromKgToOz = fromKgToOz
  Weight.prototype.fromKgToLb = fromKgToLb
  Weight.prototype.fromKgToSt = fromKgToSt

  Weight.prototype.fromGrToKg = fromGrToKg
  Weight.prototype.fromGrToMg = fromGrToMg
  Weight.prototype.fromGrToOz = fromGrToOz
  Weight.prototype.fromGrToLb = fromGrToLb
  Weight.prototype.fromGrToSt = fromGrToSt

  Weight.prototype.fromMgToKg = fromMgToKg
  Weight.prototype.fromMgToGr = fromMgToGr
  Weight.prototype.fromMgToOz = fromMgToOz
  Weight.prototype.fromMgToLb = fromMgToLb
  Weight.prototype.fromMgToSt = fromMgToSt

  Weight.prototype.fromOzToKg = fromOzToKg
  Weight.prototype.fromOzToGr = fromOzToGr
  Weight.prototype.fromOzToMg = fromOzToMg
  Weight.prototype.fromOzToLb = fromOzToLb
  Weight.prototype.fromOzToSt = fromOzToSt

  Weight.prototype.fromLbToKg = fromLbToKg
  Weight.prototype.fromLbToGr = fromLbToGr
  Weight.prototype.fromLbToMg = fromLbToMg
  Weight.prototype.fromLbToOz = fromLbToOz
  Weight.prototype.fromLbToSt = fromLbToSt

  Weight.prototype.fromStToKg = fromStToKg
  Weight.prototype.fromStToGr = fromStToGr
  Weight.prototype.fromStToMg = fromStToMg
  Weight.prototype.fromStToLb = fromStToLb
  Weight.prototype.fromStToOz = fromStToOz

  Weight.prototype.convert = function convert (amount) {
    return {
      fromKg: {
        toGr: function toGr () {
          return fromKgToGr(amount)
        },
        toMg: function toMg () {
          return fromKgToMg(amount)
        },
        toOz: function toOz () {
          return fromKgToOz(amount)
        },
        toLb: function toLb () {
          return fromKgToLb(amount)
        },
        toSt: function toSt () {
          return fromKgToSt(amount)
        }
      },
      fromGr: {
        toKg: function toKg () {
          return fromGrToKg(amount)
        },
        toMg: function toMg () {
          return fromGrToMg(amount)
        },
        toOz: function toOz () {
          return fromGrToOz(amount)
        },
        toLb: function toLb () {
          return fromGrToLb(amount)
        },
        toSt: function toSt () {
          return fromGrToSt(amount)
        }
      },
      fromMg: {
        toKg: function toKg () {
          return fromMgToKg(amount)
        },
        toGr: function toGr () {
          return fromMgToGr(amount)
        },
        toOz: function toOz () {
          return fromMgToOz(amount)
        },
        toLb: function toLb () {
          return fromMgToLb(amount)
        },
        toSt: function toSt () {
          return fromMgToSt(amount)
        }
      },
      fromOz: {
        toKg: function toKg () {
          return fromOzToKg(amount)
        },
        toGr: function toGr () {
          return fromOzToGr(amount)
        },
        toMg: function toMg () {
          return fromOzToMg(amount)
        },
        toLb: function toLb () {
          return fromOzToLb(amount)
        },
        toSt: function toSt () {
          return fromOzToSt(amount)
        }
      },
      fromLb: {
        toKg: function toKg () {
          return fromLbToKg(amount)
        },
        toGr: function toGr () {
          return fromLbToGr(amount)
        },
        toMg: function toMg () {
          return fromLbToMg(amount)
        },
        toOz: function toOz () {
          return fromLbToOz(amount)
        },
        toSt: function toSt () {
          return fromLbToSt(amount)
        }
      },
      fromSt: {
        toKg: function toKg () {
          return fromStToKg(amount)
        },
        toGr: function toGr () {
          return fromStToGr(amount)
        },
        toMg: function toMg () {
          return fromStToMg(amount)
        },
        toLb: function toLb () {
          return fromStToLb(amount)
        },
        toOz: function toOz () {
          return fromStToOz(amount)
        }
      }
    }
  }

  /*
   * Distance
   */

  function fromKmToMt (n) { // KM -> MT
    return isNumber(n) ? n * 1000 : NaN
  }

  function fromKmToCm (n) { // KM -> MT -> CM
    return isNumber(n) ? (n * 1000) * 100 : NaN
  }

  function fromKmToMm (n) { // KM -> MT -> CM -> MM
    return isNumber(n) ? ((n * 1000) * 100) * 10 : NaN
  }

  function fromMtToKm (n) { // MT -> KM
    return isNumber(n) ? (n / 1000) : NaN
  }

  function fromMtToCm (n) { // MT -> CM
    return isNumber(n) ? n * 100 : NaN
  }

  function fromMtToMm (n) { // MT -> CM -> MM
    return isNumber(n) ? (n * 100) * 10 : NaN
  }

  function fromCmToKm (n) { // CM -> MT -> KM
    return isNumber(n) ? (n / 100) / 1000 : NaN
  }

  function fromCmToMt (n) { // CM -> MT
    return isNumber(n) ? n / 100 : NaN
  }

  function fromCmToMm (n) { // CM -> MM
    return isNumber(n) ? n * 10 : NaN
  }

  function fromMmToKm (n) { // MM -> CM -> MT -> KM
    return isNumber(n) ? ((n / 10) / 100) / 1000 : NaN
  }

  function fromMmToMt (n) { // MM -> CM -> MT
    return isNumber(n) ? (n / 10) / 100 : NaN
  }

  function fromMmToCm (n) { // MM -> CM
    return isNumber(n) ? n / 10 : NaN
  }

  function fromInToFt (n) { // IN -> FT
    return isNumber(n) ? n / 12 : NaN
  }

  function fromInToYd (n) { // IN -> FT -> YD
    return isNumber(n) ? (n / 12) / 3 : NaN
  }

  function fromInToMi (n) { // IN -> FT -> YD -> MI
    return isNumber(n) ? ((n / 12) / 3) / 1760 : NaN
  }

  function fromFtToIn (n) { // FT -> IN
    return isNumber(n) ? n * 12 : NaN
  }

  function fromFtToYd (n) { // FT -> YD
    return isNumber(n) ? n / 3 : NaN
  }

  function fromFtToMi (n) { // FT -> YD -> MI
    return isNumber(n) ? (n / 3) / 1760 : NaN
  }

  function fromYdToIn (n) { // YD -> FT -> IN
    return isNumber(n) ? (n * 3) * 12 : NaN
  }

  function fromYdToFt (n) { // YD -> FT
    return isNumber(n) ? n * 3 : NaN
  }

  function fromYdToMi (n) { // YD -> MI
    return isNumber(n) ? n / 1760 : NaN
  }

  function Distance () {
    return distance || (this instanceof Distance ? distance = this : new Distance())
  }

  Distance.prototype.fromKmToMt = fromKmToMt
  Distance.prototype.fromKmToCm = fromKmToCm
  Distance.prototype.fromKmToMm = fromKmToMm

  Distance.prototype.fromMtToKm = fromMtToKm
  Distance.prototype.fromMtToCm = fromMtToCm
  Distance.prototype.fromMtToMm = fromMtToMm

  Distance.prototype.fromCmToKm = fromCmToKm
  Distance.prototype.fromCmToMt = fromCmToMt
  Distance.prototype.fromCmToMm = fromCmToMm

  Distance.prototype.fromMmToKm = fromMmToKm
  Distance.prototype.fromMmToMt = fromMmToMt
  Distance.prototype.fromMmToCm = fromMmToCm

  Distance.prototype.fromInToFt = fromInToFt
  Distance.prototype.fromInToYd = fromInToYd
  Distance.prototype.fromInToMi = fromInToMi

  Distance.prototype.fromFtToIn = fromFtToIn
  Distance.prototype.fromFtToYd = fromFtToYd
  Distance.prototype.fromFtToMi = fromFtToMi

  Distance.prototype.fromYdToIn = fromYdToIn
  Distance.prototype.fromYdToFt = fromYdToFt
  Distance.prototype.fromYdToMi = fromYdToMi

  Distance.prototype.convert = function convert (amount) {
    return {
      fromKm: {
        toMt: function toMt () {
          return fromKmToMt(amount)
        },
        toCm: function toCm () {
          return fromKmToCm(amount)
        },
        toMm: function toMm () {
          return fromKmToMm(amount)
        }
      },
      fromMt: {
        toKm: function toKm () {
          return fromMtToKm(amount)
        },
        toCm: function toCm () {
          return fromMtToCm(amount)
        },
        toMm: function toMm () {
          return fromMtToMm(amount)
        }
      },
      fromCm: {
        toKm: function toKm () {
          return fromCmToKm(amount)
        },
        toMt: function toMt () {
          return fromCmToMt(amount)
        },
        toMm: function toMm () {
          return fromCmToMm(amount)
        }
      },
      fromMm: {
        toKm: function toKm () {
          return fromMmToKm(amount)
        },
        toMt: function toMt () {
          return fromMmToMt(amount)
        },
        toCm: function toCm () {
          return fromMmToCm(amount)
        }
      },
      fromIn: {
        toFt: function toFt () {
          return fromInToFt(amount)
        },
        toYd: function toYd () {
          return fromInToYd(amount)
        },
        toMi: function toMi () {
          return fromInToMi(amount)
        }
      },
      fromFt: {
        toIn: function toIn () {
          return fromFtToIn(amount)
        },
        toYd: function toYd () {
          return fromFtToYd(amount)
        },
        toMi: function toMi () {
          return fromFtToMi(amount)
        }
      },
      fromYd: {
        toIn: function toIn () {
          return fromYdToIn(amount)
        },
        toFt: function toFt () {
          return fromYdToFt(amount)
        },
        toMi: function toMi () {
          return fromYdToMi(amount)
        }
      }
    }
  }

  function NumberEngine () {
    return numberEngine || (this instanceof NumberEngine ? numberEngine = this : new NumberEngine())
  }

  NumberEngine.prototype.fib = fib
  NumberEngine.prototype.hav = hav

  NumberEngine.prototype.fromHexToDec = fromHexToDec
  NumberEngine.prototype.fromOctToDec = fromOctToDec

  NumberEngine.prototype.Temperature = Temperature
  NumberEngine.prototype.Weight = Weight
  NumberEngine.prototype.Distance = Distance

  NumberEngine.prototype.convert = function convert (amount) {
    throw new Error('Not implemented')
  }

  return NumberEngine
}())
