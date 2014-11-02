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
var ArrayEngine	= (function () {

	"use strict";

	var i,
		j,
		lowerBound,
		upperBound,
		value,
		index,
		sequentialIndex,
		sequentialValue,
		sequentialIndexOf,
		ltr,
		m,
		ARRAY,
		max,
		min;

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
	function indexOf(v) {
		var a, x, y;
		if (value === v) {
			return index;
		} else if (upperBound || lowerBound) {
			a = ARRAY;
			x = 0;
			y = j;
			for (x, y; x < y; x = x + 1) {
				if (a[x] === v) {
					value = v;
					return (index = x);
				}
			}
		}
		return null;
	}

	sequentialIndexOf = (function () {
		function L(l, a, v) {
			/**
			 * Seek left to right.
			 * Either start at lowerBound or start at previous sequentialIndex + 1.
			 * According to jsperf.com, December 2012, assignment from a ternary
			 * performs faster than "Math.min".
			 */
			var n = (l === m ? lowerBound : (n = l + 1) > j ? j : n);
			for (n, j; n < j; n = n + 1) {
				if (a[n] === v) {
					sequentialValue = v;
					return (sequentialIndex = n);
				}
			}
			ltr = !ltr;
			return null;
		}
		function R(l, a, v) {
			/**
			 * Seek right to left.
			 * Either start at upperBound or start at previous sequentialIndex - 1.
			 * According to jsperf.com, December 2012, assignment from a ternary
			 * performs faster than "Math.max".
			 */
			var n = (l === m ? upperBound : (n = l - 1) > m ? n : m);
			for (n, m; n > m; n = n - 1) {
				if (a[n] === v) {
					sequentialValue = v;
					return (sequentialIndex = n);
				}
			}
			ltr = !ltr;
			return null;
		}
		return function (v) {
			var n, l = sequentialIndex, a;
			if (sequentialValue === v) {
				return l;
			} else if (upperBound || lowerBound) {
				a = ARRAY;
				return ltr ? (n = L(l, a, v)) === null ? R(l, a, v) : n : (n = R(l, a, v)) === null ? L(l, a, v) : n;
			}
			return null;
		};
	}());

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
	function begin(array) { //console.log("ArrayEngine.begin()", array);
		if ((array || false).constructor === Array) {
			i	= +0;
			j	= (ARRAY = array.slice()).length;
			m	= -1;
			lowerBound	= i;
			upperBound	= j - 1;
			index = sequentialIndex = m;
			value = sequentialValue = null;
			ltr = true;
			return this;
		} else {
			return this.reset();
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
	function reset() { //console.log("ArrayEngine.reset()");
		i	= +0;
		j	= (ARRAY = []).length;
		m	= -1;
		lowerBound	= i;
		upperBound	= m;
		index = sequentialIndex = m;
		value = sequentialValue = null;
		ltr = true;
		return this;
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
	function bite(x, y) {
		var pow, N, a, max, min, l, u, z;
		if (typeof x === "number") {
			pow	= Math.pow;
			N	= Number.NEGATIVE_INFINITY;
			a	= ARRAY;
			l	= lowerBound;
			u	= upperBound;
			if (typeof y === "number") {
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
					return a.slice(l).reverse();
				} else {
					x	= (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z;
					y	= (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z;
					return x > y ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);
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
				return a.slice(u);
			} else {
				x	= (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z;
				return a.slice(x);
			}
		}
		return [];
	}

	/*
	function bite(x, y) {
		var pow, N, a, max, min, l, u, z;
		if (typeof x === "number") {
			pow = Math.pow;
			N = Number.NEGATIVE_INFINITY;
			a = ARRAY;
			l = lowerBound;
			u = upperBound;
			if (typeof y === "number") {
				return pow(x, m) === N && pow(y, m) === N ? a.slice(l).reverse() : (x = (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z) > (y = (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z) ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);
			}
			return pow(x, m) === N ? a.slice(u) : a.slice((l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z);
		}
		return [];
	}

	function bite(x, y) {
		var pow, N, a, max, min, l, u, z;
		if (typeof x === "number") {
			pow = Math.pow;
			N = Number.NEGATIVE_INFINITY;
			a = ARRAY;
			max	= Math.max;
			min	= Math.min;
			l = lowerBound;
			u = upperBound;
			if (typeof y === "number") {
				if ((pow(x, m) === N) && (pow(y, m) === N)) {
					return a.slice(l).reverse();
				} else {
					x = max(l, min(u, x > m ? x : x + u));
					y = min(u, max(l, y > m ? y : y + u));
					return x > y ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);
				}
			}
			if (pow(x, m) === N) {
				return a.slice(u);
			} else {
				x	= max(l, min(u, x > m ? x : x + u));
				return a.slice(x);
			}
		}
		return [];
	}
	*/

	function map(method) { //console.log("ArrayEngine.map()", method);
		var z, array, a;
		if ((method || false).constructor === Function) {
			if ((z = lowerBound) < j) {
				array = [];
				a = ARRAY;
				do {
					array.push(method.call(a, z, a[z], j));
				} while (++z < j);
				return array;
			}
		}
		return [];
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
	max	= (function () {
		var z, max = Math.max, a;
		function MAX(a) {
			var x = a[0], z = 1, y;
			do {
				if ((y = a[z]) > x) x = y;
			} while (++z < j);
			return x;
		}
		return function () {
			return i < j ? isNaN(z = max.apply((a = ARRAY), a)) ? MAX(a) : z : null; //array.slice().sort().pop() : z;
		};
	}());

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
	min	= (function () {
		var z, min = Math.min, a;
		function MIN(a) {
			var x = a[0], z = 1, y;
			do {
				if ((y = a[z]) < x) x = y;
			} while (++z < j);
			return x;
		}
		return function () {
			return i < j ? isNaN(z = min.apply((a = ARRAY), a)) ? MIN(a) : z : null; //array.slice().sort().shift() : z;
		};
	}());

	function iterate(method) {
		if ((method || false).constructor === Function) {
			throw "Not implimented"; //return true;
		}
		return false;
	}

	/**
	 * Accepts one argument, "method", which is invoked within
	 * a forward iteration (zero to length) of "ARRAY".
	 *
	 * Invocation of "method" passes the arguments "z", which
	 * is the current index, "a[z]", which is the item at the
	 * current index, and "u" which is the upper bound (or "last
	 * index") of "ARRAY".
	 *
	 * @method iterateForward
	 * @param {Function} method
	 */
	function iterateForward(method) { //console.log("ArrayEngine.iterateForward()", method);
		var z, u, a;
		if ((method || false).constructor === Function) {
			if ((z = lowerBound) < j) {
				u = upperBound;
				a = ARRAY;
				do {
					method.call(a, z, a[z], u);
				} while (++z < j);
				return true;
			}
		}
		return false;
	}

	/**
	 * Accepts one argument, "method", which is invoked within
	 * a reverse iteration (upper bound to zero) of "ARRAY".
	 *
	 * Invocation of "method" passes the arguments "z", which
	 * is the current index, "a[z]", which is the item at the
	 * current index, and "u" which is the upper bound (or "last
	 * index") of "ARRAY".
	 *
	 * @method iterateReverse
	 * @param {Function} method
	 */
	function iterateReverse(method) { //console.log("ArrayEngine.iterateReverse()", method);
		var z, u, a;
		if ((method || false).constructor === Function) {
			if ((z = u = upperBound) < j) {
				a = ARRAY;
				do {
					method.call(a, z, a[z], u);
				} while (m < --z);
				return true;
			}
		}
		return false;
	}

	/**
	 * Accepts three arguments, "x", which is the start index,
	 * "y", which is the end index, and "method", which is invoked
	 * within a forward or reverse iteration of "ARRAY", the
	 * direction depending on the values of "x" and "y".
	 *
	 * Iternal calculations redefine the values of those variabes,
	 * such that "x" becomes the start and current index of the
	 * iteration, and "y" becomes the end index, which may also
	 * be the upper bound (or "last index") of "ARRAY".
	 *
	 * Invocation of "method" passes the arguments "x", which
	 * is the current index, "a[x]", which is the item at the
	 * current index, and "y" which is the upper bound (or "last
	 * index") of "ARRAY".
	 *
	 * @method iterateReverse
	 * @param {Function} method
	 */
	function iterateBetween(x, y, method) { //console.log("ArrayEngine.iterateBetween()", x, y); //, method);
		var a, l, u, z;
		if (typeof x === "number" && typeof y === "number" && (method || false).constructor === Function) {
			a	= ARRAY;
			l	= lowerBound;
			u	= upperBound;
			/*
			 * Generally, jsperf.com favours ternary over "Math.min()" or
			 * "Math.max()" although this specific implementation hasn't been
			 * compared
			 */
			x	= (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z;
			y	= (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z;
			if (x > y) {
				z = y - 1;
				do {
					method.call(a, x, a[x], y);
				} while (z < --x);
				return true;
			} else {
				z = y + 1;
				do {
					method.call(a, x, a[x], y);
				} while (++x < z);
				return true;
			}
		}
		return false;
	}

	/*
	function iterateBetween(x, y, method) {
		var a, l, u, z;
		if (typeof x === "number" && typeof y === "number" && (method || false).constructor === Function) {
			a	= ARRAY;
			l	= lowerBound;
			u	= upperBound;
			x	= max(l, min(u, x > m ? x : x + u));
			y	= min(u, max(l, y > m ? y : y + u));
			if (x > y) {
				z = y - 1;
				do {
					method.call(a, x, a[x], y);
				} while (z < --x);
				return true;
			} else {
				z = y + 1;
				do {
					method.call(a, x, a[x], y);
				} while (++x < z);
				return true;
			}
		}
		return false;
	}
	*/

	/* Constructor */

	function ArrayEngine(array) {
		return (array) ? this.begin(array) : this.reset();
	}

	ArrayEngine.prototype.indexOf	= indexOf;
	ArrayEngine.prototype.sequentialIndexOf	= sequentialIndexOf;

	ArrayEngine.prototype.begin		= begin;
	ArrayEngine.prototype.reset		= reset;

	ArrayEngine.prototype.bite		= bite;

	ArrayEngine.prototype.map		= map;
	ArrayEngine.prototype.max		= max;
	ArrayEngine.prototype.min		= min;

	ArrayEngine.prototype.iterate	= iterate;
	ArrayEngine.prototype.iterateForward	= iterateForward;
	ArrayEngine.prototype.iterateReverse	= iterateReverse;
	ArrayEngine.prototype.iterateBetween	= iterateBetween;

	return ArrayEngine;

}());