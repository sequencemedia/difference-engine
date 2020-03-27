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
var ObjectEngine = (function () { // eslint-disable-line
  var objectEngine
  var has = Object.prototype.hasOwnProperty

  function isObject (v) {
    return ((v || false)
      .constructor === Object && !isArray())
  }

  function isArray (v) {
    return ((v || false)
      .constructor === Array)
  }

  function notBoolean (v) {
    return ((v || false)
      .constructor !== Boolean)
  }

  function O (a, o) {
    var k, v
    for (k in o) {
      v = o[k]
      v = isObject(v) ? O({}, v) : isArray(v) ? A([], v) : v
      a[k] = v
    }
    return a
  }

  function A (a, o) {
    /*
     *  A simple way to clone o would be to return o.slice()
     *  but that would create an array containing all of the same
     *  items (including other arrays and objects)
     */
    var v; var i = 0; var j = o.length
    for (i, j; i < j; i = i + 1) {
      v = o[i]
      v = isObject(v) ? O({}, v) : isArray(v) ? A([], v) : v
      /*
       *  On the one hand, we can save ourselves a splice operation with:
       *
       *  if (a[i] !== v) {
       *    a.splice(i, 1, v)
       *  }
       *
       *  On the other hand, if a[i] is undefined because a.length < o.length,
       *  but v is undefined because that's the value of o[i], then we won't splice
       *  o[i] into a[i] -- which would be incorrect
       *
       *  If
       *    a = [1, 2, 3]
       *    o = [4, 2, 5, undefined, 6]
       *  Then
       *    a = [4, 2, 5, undefined, 6]
       */
      a.splice(i, 1, v)
    }
    return a
  }

  function merge (alpha, omega) {
    var value
    if (isObject(alpha) && isObject(omega)) {
      value = O({}, alpha)
      return O(value, omega)
    }
    if (isArray(alpha) && isArray(omega)) {
      value = A([], alpha)
      return A(value, omega)
    }
    return null
  }

  function clone (value) {
    if (isObject(value)) {
      return O({}, value)
    }
    if (isArray(value)) {
      return A([], value)
    }
    return null
  }

  function hasProperty (object, key) {
    if (isObject(object)) {
      return (key in object)
    }
    return false
  }

  function hasProperties (object) {
    var key
    if (isObject(object)) {
      for (key in object) return true
    }
    return false
  }

  function hasOwnProperty (object, key) {
    if (notBoolean(object)) {
      return has.call(object, key)
    }
    return false
  }

  function hasOwnProperties (object) {
    var key
    if (notBoolean(object)) {
      for (key in object) if (has.call(object, key)) return true
    }
    return false
  }

  function ObjectEngine () {
    return objectEngine || (this instanceof ObjectEngine ? objectEngine = this : new ObjectEngine())
  }

  ObjectEngine.prototype.merge = merge
  ObjectEngine.prototype.clone = clone
  ObjectEngine.prototype.hasProperty = hasProperty
  ObjectEngine.prototype.hasProperties = hasProperties
  ObjectEngine.prototype.hasOwnProperty = hasOwnProperty
  ObjectEngine.prototype.hasOwnProperties = hasOwnProperties

  return ObjectEngine
}())
