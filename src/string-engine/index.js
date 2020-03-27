/** @module StringEngine */

import {
  isString,
  isNumber
} from '@difference-engine/common'

import {
  getFromCharCode,
  getCharFromEntityCode,
  getCharFromEntityName,
  getEntityCodeFromChar,
  getEntityNameFromChar,
  entityNameFromCharMap
} from '@difference-engine/common/string'

var OCT = 8
var DEC = 10
var HEX = 16

var X = /\u0026[\w]+\u003b|\u0026\u0023(?:[1-9]+[\d]+|[1-9])\u003b+/g
var XCODE = /\u0026\u0023(?:[1-9]+[\d]+|[1-9]+)\u003b+/g
var XNAME = /\u0026[\w]+\u003b+/g
var A = '&' // String.fromCharCode(38) // '\u0026'
var N = 38

export function charAt (i, s) {
  if (isNumber(i) && isString(s)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    let v = s.charAt(i)
    if (v === A) {
      /*
       *  The character at position i is an ampersand. Examine the rest of the string with an HTML
       *  encoding pattern regular expression
       */
      X.lastIndex = i
      const m = X.exec(s)
      if (m === null) {
        /*
         *  The adjacent characters match the HTML encoding pattern so execution can return
         *  an ampersand
         */
        return A
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityName(v)) !== null) return c // eslint-disable-line
        if ((c = getCharFromEntityCode(v)) !== null) return c // eslint-disable-line
        return A
      }
    } else {
      /*
       * The character at position i is not an ampersand, so return it
       */
      return v
    }
  }
  return null
}

export function charCodeAt (i, s) {
  if (isNumber(i) && isString(s)) {
    /*
     *  "String.charCodeAt()" is fast so retrieve the character at position i and compare to
     *  the index of ampersand
     */
    let v = s.charCodeAt(i)
    if (v === N) {
      /*
       *  The character at position i is an ampersand. Examine the rest of the string with an HTML
       *  encoding pattern regular expression
       */
      X.lastIndex = i
      const m = X.exec(s)
      if (m === null) {
        /*
         *  The adjacent characters match the HTML encoding pattern so execution can return
         *  the index of ampersand
         */
        return N
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityName(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
        if ((c = getCharFromEntityCode(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
        return N
      }
    } else {
      /*
       * The index at position i is not the index of an ampersand, so return the index
       */
      return v
    }
  }
  return null
}

/*
 *  Either code or name
 */
export function entityAt (i, s) {
  if (isNumber(i) && isString(s)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    const v = s.charAt(i)
    if (v === A) {
      X.lastIndex = i
      const m = X.exec(s)
      /*
       *  Either the adjacent characters match the HTML encoding pattern so execution can return
       *  an ampersand or the adjacent characters match so execution can return them
       */
      return (m === null) ? A : m.shift()
    } else {
      return v
    }
  }
  return null
}

/*
 *  Code, ignore name
 */
export function entityCodeAt (i, s) {
  if (isNumber(i) && isString(s)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    let v = s.charAt(i)
    if (v === A) {
      const x = XCODE
      x.lastIndex = i
      const m = x.exec(s)
      if (m === null) {
        /*
         *  The adjacent characters match the HTML encoding pattern so execution can return
         *  an ampersand
         */
        return A
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityCode(v)) !== null) return c // eslint-disable-line
        return A
      }
    } else {
      return v
    }
  }
  return null
}

/*
 *  Name, ignore code
 */
export function entityNameAt (i, s) {
  if (isNumber(i) && isString(s)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    let v = s.charAt(i)
    if (v === A) {
      const x = XNAME
      x.lastIndex = i
      const m = x.exec(s)
      if (m === null) {
        /*
         *  The adjacent characters match the HTML encoding pattern so execution can return
         *  an ampersand
         */
        return A
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityName(v)) !== null) return c // eslint-disable-line
        return A
      }
    } else {
      return v
    }
  }
  return null
}

export function charOf (s) {
  if (isString(s)) {
    if (s.length < 4) {
      return s.charAt(0)
    } else {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      let v = s.charAt(0)
      if (v === A) {
        /*
         *  The character at position i is an ampersand. Examine the rest of the string with an HTML
         *  encoding pattern regular expression
         */
        X.lastIndex = 0
        const m = X.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  an ampersand
           */
          return A
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          let c

          if ((c = getCharFromEntityName(v)) !== null) return c // eslint-disable-line
          if ((c = getCharFromEntityCode(v)) !== null) return c // eslint-disable-line
          return A
        }
      } else {
        /*
         * The character at position i is not an ampersand, so return it
         */
        return v
      }
    }
  }
  return null
}

export function entityOf (s) {
  throw new Error('Not implemented') // return null;
}

/*
 *  Character from index
 */
export function fromCharCode (i) {
  return isNumber(i) ? getFromCharCode(i) : null
}

/*
 *  Character from HTML code
 */
export function charFromEntityCode (s) {
  return isString(s) ? getCharFromEntityCode(s) : null
}

/*
 *  Character from HTML name
 */
export function charFromEntityName (s) {
  return isString(s) ? getCharFromEntityName(s) : null
}

/*
 * Characters to HTML code
 */
export function toEntityCode (s) {
  if (isString(s)) {
    let i = 0
    const j = s.length
    let c, h
    let r = ''
    for (i, j; i < j; i = i + 1) {
      c = s.charAt(i)
      h = getEntityCodeFromChar(c)
      r = r + (h === null ? c : h)
    }
    return r
  }
  return null
}

/*
 * Characters to HTML name
 */
export function toEntityName (s) {
  if (isString(s)) {
    let i = 0
    const j = s.length
    let c, h
    let r = ''
    for (i, j; i < j; i = i + 1) {
      c = s.charAt(i)
      h = getEntityNameFromChar(c)
      r = r + (h === null ? c : h)
    }
    return r
  }
  return null
}

/*
 *  HTML code from character
 */
export function entityCodeFromChar (s) {
  return isString(s) && s.length === 1 ? getEntityCodeFromChar(s) : null
}

/*
 *  HTML name from chracter
 */
export function entityNameFromChar (s) { // returns the char when null
  return isString(s) && s.length === 1 ? entityNameFromCharMap.has(s) ? entityNameFromCharMap.get(s) : s : null
}

/*
 *  As "entityCodeFromChar"
 */
export function entityCodeOf (s) {
  return isString(s) && s.length === 1 ? getEntityCodeFromChar(s) : null
}

/*
 *  As "entityNameFromChar"
 */
export function entityNameOf (s) { // returns the char when null
  return isString(s) && s.length === 1 ? entityNameFromCharMap.has(s) ? entityNameFromCharMap.get(s) : s : null
}

export function fromDecToHex (v) {
  return isNumber(v) ? v.toString(HEX) : isString(v) ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(HEX) : null
}

export function fromDecToOct (v) {
  return isNumber(v) ? v.toString(OCT) : isString(v) ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(OCT) : null
}

export function reverse (string) {
  if (isString(string)) {
    let s = ''
    let i = string.length
    /*
     *  According to jsperf.com, April 2013, concatenating "s" with operator "+=" is favoured
     *  by a small measure in Safari but not elsewhere. Similarly, decrementing "i" on a separate line is
     *  favoured by FF by a larger measure: this formulation is a reasonable compromise
     */
    do {
      s = s + string.charAt(--i)
    } while (i > 0)

    return s
  }
  return null
}

/**
 * @class ObjectEngine
 */
export default class StringEngine {
  static charAt = charAt
  static charCodeAt = charCodeAt
  static charOf = charOf

  static entityAt = entityAt
  static entityCodeAt = entityCodeAt
  static entityNameAt = entityNameAt
  static entityOf = entityOf

  static fromCharCode = fromCharCode
  static charFromEntityCode = charFromEntityCode
  static charFromEntityName = charFromEntityName

  static toEntityCode = toEntityCode
  static toEntityName = toEntityName

  static entityCodeFromChar = entityCodeFromChar
  static entityNameFromChar = entityNameFromChar

  static entityCodeOf = entityCodeOf
  static entityNameOf = entityNameOf

  static fromDecToHex = fromDecToHex
  static fromDecToOct = fromDecToOct

  static reverse = reverse
}
