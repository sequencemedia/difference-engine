/**
 * @module common/string
 */

import CHAR_FROM_ENTITY_NAME from './char-from-entity-name.mjs'
import ENTITY_NAME_FROM_CHAR from './entity-name-from-char.mjs'

export const fromCodePointMap = new Map()

export const charFromEntityCodeMap = new Map()
export const charFromEntityNameMap = new Map(Object.entries(CHAR_FROM_ENTITY_NAME))

export const entityCodeFromCharMap = new Map()
export const entityNameFromCharMap = new Map(Object.entries(ENTITY_NAME_FROM_CHAR))

export {
  CHAR_FROM_ENTITY_NAME,
  ENTITY_NAME_FROM_CHAR
}

export function getFromCodePoint (index) {
  if (fromCodePointMap.has(index)) return fromCodePointMap.get(index)

  const char = String.fromCodePoint(index)
  fromCodePointMap.set(index, char)
  return char
}

export function getCharFromEntityCode (entityCode) {
  if (charFromEntityCodeMap.has(entityCode)) return charFromEntityCodeMap.get(entityCode)

  const a = entityCode.match(/#(\d+);/)

  if (a) {
    const [
      m,
      v
    ] = a

    const n = m && Number(v)
    if (!isNaN(n)) {
      const char = String.fromCodePoint(n)
      charFromEntityCodeMap.set(entityCode, char)
      return char
    }
  }

  return null
}

export function getCharFromEntityName (entityName) {
  if (charFromEntityNameMap.has(entityName)) return charFromEntityNameMap.get(entityName)

  return null
}

export function getEntityCodeFromChar (char) {
  if (entityCodeFromCharMap.has(char)) return entityCodeFromCharMap.get(char)

  const n = char.codePointAt(0)

  if (n !== undefined) {
    const entityCode = `&#${n};`
    entityCodeFromCharMap.set(char, entityCode)
    return entityCode
  }

  return null
}

export function getEntityNameFromChar (char) {
  if (entityNameFromCharMap.has(char)) return entityNameFromCharMap.get(char)

  return null
}
