import {
  exec
} from 'child_process'

import moment from 'moment'

import {
  writeFile
} from 'sacred-fs'

const curl = (url) => (
  new Promise((resolve, reject) => {
    exec(`curl ${url}`, (e, v) => (!e) ? resolve(v) : reject(e))
  })
)

const lint = () => (
  new Promise((resolve, reject) => {
    exec('npx eslint . --fix', (e, v) => (!e) ? resolve(v) : reject(e))
  })
)

const URL = 'https://dev.w3.org/html5/html-author/charref'
const NOW = moment().format('MMMM Do YYYY, h:mm:ss')
const X = /<td class="named"><code>(?:(?:&amp;(\w+);\s?)*)<\/code>.*<td class="dec"><code>&amp;#(\d+);<\/code>.*<td class="desc">(.+)/
const JOIN = String.fromCodePoint(44).concat(String.fromCodePoint(10))

function getEntityNameFromCharFor (decimal, value, label) {
  return `[String.fromCodePoint(${decimal})]: '&${value};' /* ${label} */`
}

function getCharFromEntityNameFor (value, decimal, label) {
  return `'&${value};': String.fromCodePoint(${decimal}) /* ${label} */`
}

function mapEntityNameFromCharFor ({ decimal, value, label }) {
  return getEntityNameFromCharFor(decimal, value, label)
}

function mapCharFromEntityNameFor ({ value, decimal, label }) {
  return getCharFromEntityNameFor(value, decimal, label)
}

function transformToEntityNameFromChar (a = []) {
  return (`/*
 *  ${URL}
 *
 *  ${NOW}
 */

export default {
${a.map(mapEntityNameFromCharFor).join(JOIN)}
}
`)
}

function transformToCharFromEntityName (a = []) {
  return (`/*
 *  ${URL}
 *
 *  ${NOW}
 */

export default {
${a.map(mapCharFromEntityNameFor).join(JOIN)}
}
`)
}

export default async function preCommit () {
  const v = await curl(URL)
  const x = new RegExp(X, 'g')
  const m = v.match(x)
  if (Array.isArray(m)) {
    const a = m.reduce((accumulator, v) => {
      const [,
        entitites,
        decimal,
        label
      ] = v.match(X)

      return accumulator.concat(entitites.split(String.fromCodePoint(32)).reduce((accumulator, value) => ({ value, decimal, label }), []))
    }, [])

    if (a.length) {
      await writeFile('./src/common/string/entity-name-from-char.js', transformToEntityNameFromChar(a))
      await writeFile('./src/common/string/char-from-entity-name.js', transformToCharFromEntityName(a))
      await lint()
    }
  }
}
