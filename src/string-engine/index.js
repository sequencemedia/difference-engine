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

const OCT = 8
const DEC = 10
const HEX = 16

const X = /\u0026[\w]+\u003b|\u0026\u0023(?:[1-9]+[\d]+|[1-9])\u003b+/g
const XCODE = /\u0026\u0023(?:[1-9]+[\d]+|[1-9]+)\u003b+/g
const XNAME = /\u0026[\w]+\u003b+/g
const ACHAR = '&' // String.fromCharCode(38) // '\u0026'
const ACHARCODE = 38
const AENTITYNAME = '&amp;'
const AENTITYCODE = '&#38;'

/*
 *  Char
 */
export function charAt (s, i) {
  if (isString(s) && isNumber(i)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    let v = s.charAt(i)
    if (v === ACHAR) {
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
        return ACHAR
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityName(v)) !== null) return c // eslint-disable-line
        if ((c = getCharFromEntityCode(v)) !== null) return c // eslint-disable-line
        return ACHAR
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

/*
 *  Char code
 */
export function charCodeAt (s, i) {
  if (isString(s) && isNumber(i)) {
    /*
     *  "String.charCodeAt()" is fast so retrieve the character at position i and compare to
     *  the index of ampersand
     */
    let v = s.charCodeAt(i)
    if (v === ACHARCODE) {
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
        return ACHARCODE
      } else {
        /*
         *  The regular expression must have a match. Retrieve it
         */
        v = m.shift()
        let c

        if ((c = getCharFromEntityName(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
        if ((c = getCharFromEntityCode(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
        return ACHARCODE
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
 *  Char
 */
export function charOf (s) {
  if (isString(s)) {
    if (s.length < 4) {
      return s.charAt(0)
    } else {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      let v = s.charAt(0)
      if (v === ACHAR) {
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
          return ACHAR
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          let c

          if ((c = getCharFromEntityName(v)) !== null) return c // eslint-disable-line
          if ((c = getCharFromEntityCode(v)) !== null) return c // eslint-disable-line
          return ACHAR
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

/*
 *  Char code
 */
export function charCodeOf (s) {
  if (isString(s)) {
    if (s.length < 4) {
      return s.charCodeAt(0)
    } else {
      /*
       *  "String.charCodeAt()" is fast so retrieve the character at position i and compare to
       *  the index of ampersand
       */
      let v = s.charCodeAt(0)
      if (v === ACHARCODE) {
        /*
         *  The character at position i is an ampersand. Examine the rest of the string with an HTML
         *  encoding pattern regular expression
         */
        X.lastIndex = 0
        const m = X.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  the index of ampersand
           */
          return ACHARCODE
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          let c

          if ((c = getCharFromEntityName(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
          if ((c = getCharFromEntityCode(v)) !== null) return c.charCodeAt(0) // eslint-disable-line
          return ACHARCODE
        }
      } else {
        /*
         * The index at position i is not the index of an ampersand, so return the index
         */
        return v
      }
    }
  }
  return null
}

/*
 *  Either code or name or char
 */
export function entityAt (s, i) {
  if (isString(s) && isNumber(i)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    const v = s.charAt(i)
    if (v === ACHAR) {
      X.lastIndex = i
      const m = X.exec(s)
      /*
       *  Either the adjacent characters match the HTML encoding pattern so execution can return
       *  an ampersand or the adjacent characters match so execution can return them
       */
      return (m === null) ? AENTITYNAME : m.shift()
    } else {
      let c

      if ((c = getEntityNameFromChar(v)) !== null) return c // eslint-disable-line
      if ((c = getEntityCodeFromChar(v)) !== null) return c // eslint-disable-line
      return v
    }
  }
  return null
}

/*
 *  Code, ignore name
 */
export function entityCodeAt (s, i) {
  if (isString(s) && isNumber(i)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    const v = s.charAt(i)
    if (v === ACHAR) {
      XCODE.lastIndex = i
      const m = XCODE.exec(s)

      /*
       *  Either the adjacent characters match the HTML encoding pattern so execution can return
       *  an ampersand entity code, or the adjacent characters match so execution can return them
       */
      return (m === null) ? AENTITYCODE : m.shift()
    } else {
      let c

      if ((c = getEntityCodeFromChar(v)) !== null) return c // eslint-disable-line
      return v
    }
  }
  return null
}

/*
 *  Name, ignore code
 */
export function entityNameAt (s, i) {
  if (isString(s) && isNumber(i)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    const v = s.charAt(i)
    if (v === ACHAR) {
      XNAME.lastIndex = i
      const m = XNAME.exec(s)

      /*
       *  Either the adjacent characters match the HTML encoding pattern so execution can return
       *  an ampersand entity name, or the adjacent characters match so execution can return them
       */
      return (m === null) ? AENTITYNAME : m.shift()
    } else {
      let c

      if ((c = getEntityNameFromChar(v)) !== null) return c // eslint-disable-line
      return v
    }
  }
  return null
}

/*
 *  Either code or name or char
 */
export function entityOf (s) {
  if (isString(s)) {
    /*
     *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
     */
    const v = s.charAt(0)
    if (v === ACHAR) {
      X.lastIndex = 0
      const m = X.exec(s)
      /*
       *  Either the adjacent characters match the HTML encoding pattern so execution can return
       *  an ampersand entity name, or the adjacent characters match so execution can return them
       */
      return (m === null) ? AENTITYNAME : m.shift()
    } else {
      let c

      if ((c = getEntityNameFromChar(v)) !== null) return c // eslint-disable-line
      if ((c = getEntityCodeFromChar(v)) !== null) return c // eslint-disable-line
      return v
    }
  }
  return null
}

/*
 *  Char from char code
 */
export function fromCharCode (i) {
  return isNumber(i) ? getFromCharCode(i) : null
}

/*
 *  Char from entity code
 */
export function charFromEntityCode (s) {
  return isString(s) ? getCharFromEntityCode(s) : null
}

/*
 *  Char from entity name
 */
export function charFromEntityName (s) {
  return isString(s) ? getCharFromEntityName(s) : null
}

/*
 * Chars to entity codes
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
 * Chars to entity names
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
 *  Entity code from char
 */
export function entityCodeFromChar (s) {
  return isString(s) && s.length === 1 ? getEntityCodeFromChar(s) : null
}

/*
 *  Entity name from char
 */
export function entityNameFromChar (s) {
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
export function entityNameOf (s) {
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
  static charCodeOf = charCodeOf

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
