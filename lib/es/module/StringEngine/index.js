/** @module module/StringEngine */

import {
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber
} from '../../common'

/*
console.log({
  isArray,
  isObject,
  isFunction,
  isString,
  isNumber
})
*/

import {
  FROMCHARCODE,
  FROMHTMLCODE,
  FROMHTMLNAME,
  HTMLCODEFROM,
  HTMLNAMEFROM
} from '../../common/string'

/**
 * @class ObjectEngine
 */
export class StringEngine {

  charOf () { }
  htmlOf () { }

  charAt () { }
  charCodeAt () { }

  htmlAt () { }
  htmlCodeAt () { }
  htmlNameAt () { }

  fromCharCode () { }
  fromHtmlCode () { }
  fromHtmlName () { }

  toHtmlCode () { }
  toHtmlName () { }

  htmlCodeFrom () { }
  htmlNameFrom () { }

  htmlCodeOf () { }
  htmlNameOf () { }

  fromDecToHex () { }
  fromDecToOct () { }

  truncate () { }

  reverse () { }

}
