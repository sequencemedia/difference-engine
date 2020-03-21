'use strict'

/*
 * Copyright © 2012 Jonathan Perry and Sequence Media Limited
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/**
 * "ArrayEngine" defines methods for manipulating arrays. Some of those methods
 * already exist within the global context: the methods of "ArrayEngine" probably
 * perform faster.
 *
 * @class ArrayEngine
 * @constructor
 */
var ArrayEngine = (function () {
  var i
  var j
  var lowerBound
  var upperBound
  var value
  var index
  var ltr = false // eslint-disable-line
  var m
  var ARRAY
  var max
  var min

  function isArray (v) {
    return ((v || false)
      .constructor === Array)
  }

  function isObject (v) { // eslint-disable-line
    return ((v || false)
      .constructor === Object)
  }

  function isFunction (v) {
    return ((v || false)
      .constructor === Function)
  }

  function isString (v) { // eslint-disable-line
    return (typeof v === 'string')
  }

  function isNumber (v) {
    return (typeof v === 'number')
  }

  /**
   * Accepts one string or number searches "ARRAY" for the first
   * element to match, returning the index.
   *
   * @method indexOf
   * @param {String, Number} v
   * @return {Number} Returns integer or null
   *
   * According to jsperf, May 2013, "ArrayEngine.indexOf()" performs
   * significantly faster "DifferenceEngine.indexOf()" when items sought
   * are neighbours, and at least three times faster than the native
   * "Array.indexOf()" method in the same case.
   *
   * It performs moderately faster than
   * "DifferenceEngine.indexOf()" if the same value is sought
   * repeatedly (because the previous index is memoised with each
   * invocation).
   *
   * It performs signicantly slower than
   * "DifferenceEngine.indexOf()" if the values sought are at opposite
   * ends of the array (in which case, the memoisation mechanisms slow
   * it down).
   *
   * According to jsperf.com, December 2012, "for" performs faster
   * than "do".
   */
  function indexOf (v) {
    var a, x, y
    if (value === v) {
      return index
    } else if (upperBound || lowerBound) {
      a = ARRAY
      x = 0
      y = j
      for (x, y; x < y; x = x + 1) {
        if (a[x] === v) {
          value = v
          return (index = x)
        }
      }
    }
    return null
  }

  /**
   * Accepts one array to be assigned to the privately scoped variable
   * "ARRAY". Assigns useful values to other privately scoped variables
   * according to the properties of "ARRAY".
   *
   * @method begin
   * @param {Array} array
   * @return {Object} Instance of "ArrayEngine"
   * @chainable
   *
   * Where no array has been passed, the method invokes "reset".
   */
  function begin (array) { // console.log("ArrayEngine.begin()", array);
    if (isArray(array)) {
      i = +0
      j = (ARRAY = array.slice()).length
      m = -1
      lowerBound = i
      upperBound = j - 1
      index = m
      value = null
      ltr = true
      return this
    } else {
      return this.reset()
    }
  }

  /**
   * Accepts no arguments. Resets privately scoped variables to
   * initial values.
   *
   * @method reset
   * @return {Object} Instance of "ArrayEngine"
   * @chainable
   */
  function reset () { // console.log("ArrayEngine.reset()");
    i = +0
    j = (ARRAY = []).length
    m = -1
    lowerBound = i
    upperBound = m
    index = m
    value = null
    ltr = true
    return this
  }

  /*
   * According to jsperf.com, December 2012, the less idiosyncratic
   * multiple-line ternary performs slightly better than the more idiosyncratic
   * single-line ternary across a range of values and, surprisingly,
   * the formulation with "Math.min()" and "Math.max()" remains competitive.
   *
   * According to jsperf.com, December 2012 again, direct comparison of
   * ternary and "Math.max" with "Math.min" formulations favours ternary
   * significantly. Since "Array.slice()" is a slow operation presumably it
   * consumes gains made elsewhere.
   */
  function bite (x, y) {
    var pow, N, a, l, u, z
    if (isNumber(x)) {
      pow = Math.pow
      N = Number.NEGATIVE_INFINITY
      a = ARRAY
      l = lowerBound
      u = upperBound
      if (isNumber(y)) {
        /**
         * Negative zero slices lower bound 0
         *
         * Massage x and y to acceptable values
         * l is lower bound 0
         * u is upper bound (j - 1)
         *
         * Massage the second argument to slice
         */
        if (pow(x, m) === N && pow(y, m) === N) {
          return a.slice(l).reverse()
        } else {
          x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z
          y = (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z
          return x > y ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1)
        }
      }
      /**
       * Negative zero slices upper bound (j - 1)
       * Positive zero slices lower bound 0
       *
       * Massage x to an acceptable value
       * l is lower bound 0
       * u is upper bound (j - 1)
       */
      if (pow(x, m) === N) {
        return a.slice(u)
      } else {
        x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z
        return a.slice(x)
      }
    }
    return []
  }

  function map (f) { // console.log("ArrayEngine.map()", f);
    var z, array, a
    if (isFunction(f)) {
      if ((z = lowerBound) < j) {
        array = []
        a = ARRAY
        do {
          array.push(f.call(a, a[z], z, j))
        } while (++z < j)
        return array
      }
    }
    return []
  }

  function reduce (f, v) { // console.log("ArrayEngine.reduce()", f, v);
    var z, a
    if (isFunction(f)) {
      if ((z = lowerBound) < j) {
        a = ARRAY
        do {
          v = f.call(a, v, a[z], z, j)
        } while (++z < j)
        return v
      }
    }
    return v
  }

  /**
   * Accepts no arguments. Returns the largest item in "ARRAY" by
   * simple comparison.
   *
   * @method max
   * @return {Number, String} The largest item in "ARRAY"
   *
   * While "Array.sort().pop()" performs significantly faster at identifying the "largest"
   * string value than an iterative comparison, using "Array.slice()" to duplicate the array
   * negates that benefit.
   *
   * According to jsperf.com, December 2012, IE and FF favour variables scoped within the
   * self-executing function. Chrome outperforms them regardless.
   */
  max = (function () {
    var z; var max = Math.max; var a
    function MAX (a) {
      var x = a[0]; var z = 1; var y
      do {
        if ((y = a[z]) > x) x = y
      } while (++z < j)
      return x
    }
    return function () {
      return i < j ? isNaN(z = max.apply((a = ARRAY), a)) ? MAX(a) : z : null // array.slice().sort().pop() : z;
    }
  }())

  /**
   * Accepts no arguments. Returns the smallest item in "ARRAY" by
   * simple comparison.
   *
   * @method min
   * @return {Number, String} The smallest item in "ARRAY"
   *
   * While "Array.sort().shift()" performs significantly faster at identifying the "smallest"
   * string value than an iterative comparison, using "Array.slice()" to duplicate the array
   * negates that benefit
   *
   * According to jsperf.com, December 2012, IE and FF favour variables scoped within the
   * self-executing function. Chrome outperforms them regardless
   */
  min = (function () {
    var z; var min = Math.min; var a
    function MIN (a) {
      var x = a[0]; var z = 1; var y
      do {
        if ((y = a[z]) < x) x = y
      } while (++z < j)
      return x
    }
    return function () {
      return i < j ? isNaN(z = min.apply((a = ARRAY), a)) ? MIN(a) : z : null // array.slice().sort().shift() : z;
    }
  }())

  function iterate (f) {
    if (isFunction(f)) {
      throw new Error('Not implemented') // return true;
    }
    return false
  }

  /**
   * Accepts one argument, "f", which is invoked within
   * a forward iteration (zero to length) of "ARRAY".
   *
   * Invocation of "f" passes the arguments "z", which
   * is the current index, "a[z]", which is the item at the
   * current index, and "u" which is the upper bound (or "last
   * index") of "ARRAY".
   *
   * @method iterateForward
   * @param {Function} f
   */
  function iterateForward (f) { // console.log("ArrayEngine.iterateForward()", f);
    var z, u, a
    if (isFunction(f)) {
      if ((z = lowerBound) < j) {
        u = upperBound
        a = ARRAY
        do {
          f.call(a, a[z], z, u)
        } while (++z < j)
        return true
      }
    }
    return false
  }

  /**
   * Accepts one argument, "f", which is invoked within
   * a reverse iteration (upper bound to zero) of "ARRAY".
   *
   * Invocation of "f" passes the arguments "z", which
   * is the current index, "a[z]", which is the item at the
   * current index, and "u" which is the upper bound (or "last
   * index") of "ARRAY".
   *
   * @method iterateReverse
   * @param {Function} f
   */
  function iterateReverse (f) { // console.log("ArrayEngine.iterateReverse()", f);
    var z, u, a
    if (isFunction(f)) {
      if ((z = u = upperBound) < j) {
        a = ARRAY
        do {
          f.call(a, a[z], z, u)
        } while (m < --z)
        return true
      }
    }
    return false
  }

  /**
   * Accepts three arguments, "x", which is the start index,
   * "y", which is the end index, and "f", which is invoked
   * within a forward or reverse iteration of "ARRAY", the
   * direction depending on the values of "x" and "y".
   *
   * Iternal calculations redefine the values of those variabes,
   * such that "x" becomes the start and current index of the
   * iteration, and "y" becomes the end index, which may also
   * be the upper bound (or "last index") of "ARRAY".
   *
   * Invocation of "f" passes the arguments "x", which
   * is the current index, "a[x]", which is the item at the
   * current index, and "y" which is the upper bound (or "last
   * index") of "ARRAY".
   *
   * @method iterateReverse
   * @param {Function} f
   */
  function iterateBetween (x, y, f) { // console.log("ArrayEngine.iterateBetween()", x, y); //, f);
    var a, l, u, z
    if (isNumber(x) && isNumber(y) && isFunction(f)) {
      a = ARRAY
      l = lowerBound
      u = upperBound
      /*
       * Generally, jsperf.com favours ternary over "Math.min()" or
       * "Math.max()" although this specific implementation hasn't been
       * compared
       */
      x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z
      y = (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z
      if (x > y) {
        z = y - 1
        do {
          f.call(a, a[x], x, y)
        } while (z < --x)
        return true
      } else {
        z = y + 1
        do {
          f.call(a, a[x], x, y)
        } while (++x < z)
        return true
      }
    }
    return false
  }

  /* Constructor */

  function ArrayEngine (array) {
    return (array) ? this.begin(array) : this.reset()
  }

  ArrayEngine.prototype.indexOf = indexOf

  ArrayEngine.prototype.begin = begin
  ArrayEngine.prototype.reset = reset

  ArrayEngine.prototype.bite = bite

  ArrayEngine.prototype.map = map
  ArrayEngine.prototype.reduce = reduce

  ArrayEngine.prototype.max = max
  ArrayEngine.prototype.min = min

  ArrayEngine.prototype.iterate = iterate
  ArrayEngine.prototype.iterateForward = iterateForward
  ArrayEngine.prototype.iterateReverse = iterateReverse
  ArrayEngine.prototype.iterateBetween = iterateBetween

  return ArrayEngine
}())
