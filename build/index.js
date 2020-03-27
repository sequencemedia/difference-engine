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

const URL = 'https://dev.w3.org/html5/html-author/charref'
const NOW = moment().format('MMMM Do YYYY, h:mm:ss')
const X = /<td class="named"><code>(?:(?:&amp;(\w+);\s?)*)<\/code>.*<td class="dec"><code>&amp;#(\d+);<\/code>.*<td class="desc">(.+)/

function transformEntityToHtmlNameFrom (decimal, value, label) {
  return `[String.fromCharCode(${decimal})]: '&${value};' /* ${label} */`
}

function transformEntityToFromHtmlName (value, decimal, label) {
  return `'&${value};': String.fromCharCode(${decimal}) /* ${label} */`
}

function transformToHtmlNameFrom (a = []) {
  return (`/*
 *  ${URL}
 *
 *  ${NOW}
 */

export default {
${a.map(({ decimal, value, label }) => transformEntityToHtmlNameFrom(decimal, value, label)).join(String.fromCharCode(44).concat(String.fromCharCode(10)))}
}
`)
}

function transformToFromHtmlName (a = []) {
  return (`/*
 *  ${URL}
 *
 *  ${NOW}
 */

export default {
${a.map(({ value, decimal, label }) => transformEntityToFromHtmlName(value, decimal, label)).join(String.fromCharCode(44).concat(String.fromCharCode(10)))}
}
`)
}

export default async () => {
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

      return accumulator.concat(entitites.split(String.fromCharCode(32)).reduce((accumulator, value) => ({ value, decimal, label }), []))
    }, [])

    if (a.length) {
      await writeFile('./lib/es/common/string/html-name-from.js', transformToHtmlNameFrom(a))
      await writeFile('./lib/es/common/string/from-html-name.js', transformToFromHtmlName(a))
    }
  }
}
