/**
 * @module common/string
 */

import FROMHTMLNAME from './from-html-name'
import HTMLNAMEFROM from './html-name-from'

export const fromCharCodeMap = new Map()

export const fromHtmlCodeMap = new Map()
export const fromHtmlNameMap = new Map(Object.entries(FROMHTMLNAME))

export const htmlCodeFromMap = new Map()
export const htmlNameFromMap = new Map(Object.entries(HTMLNAMEFROM))

export FROMHTMLNAME from './from-html-name'
export HTMLNAMEFROM from './html-name-from'

export function getFromHtmlCode (htmlCode) {
  if (fromHtmlCodeMap.has(htmlCode)) return fromHtmlCodeMap.get(htmlCode)

  const a = htmlCode.match(/#(\d+);/)

  if (a) {
    const [
      m,
      v
    ] = a

    const n = m && Number(v)
    if (!isNaN(n)) {
      const s = String.fromCharCode(n)
      fromHtmlCodeMap.set(htmlCode, s)
      return s
    }
  }

  return null
}

export function getHtmlCodeFrom (char) {
  if (htmlCodeFromMap.has(char)) return htmlCodeFromMap.get(char)

  const n = char.codePointAt(0)

  if (n !== undefined) {
    const s = `&#${n};`
    htmlCodeFromMap.set(char, s)
    return s
  }

  return null
}

export function getFromCharCode (index) {
  if (fromCharCodeMap.has(index)) return fromCharCodeMap.get(index)

  const char = String.fromCharCode(index)
  fromCharCodeMap.set(index, char)
  return char
}

export function getFromHtmlName (htmlName) {
  if (fromHtmlNameMap.has(htmlName)) return fromHtmlNameMap.get(htmlName)

  return null
}

export function getHtmlNameFrom (char) {
  if (htmlNameFromMap.has(char)) return htmlNameFromMap.get(char)

  return null
}
