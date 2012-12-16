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
var ArrayEngine	= (function () {

	"use strict";

	var i,
		j,

		lowerBound,
		upperBound,

		lastValue,
		lastIndex,

		m,

		ARRAY,

		map,
		max,
		min;

	/*
	 *	Accepts one string or number, "v";
	 *	Searches "ARRAY" for "v"
	 *	@param {string, number} v
	 *		"D"
	 *
	 *	Performs moderately slower than "DifferenceEngine.indexFor()"
	 *	According to jsperf.com, December 2012, "for" performs faster
	 *	than "do"
	 */
	function indexOf(v) {

		var a, i;

		if (lastValue === v) {

			return lastIndex;

		} else {

			a = ARRAY;

			/*
			 *	Seek L - R
			 *	Either start at lowerBound or start at previous lastIndex + 1
			 *	According to jsperf.com, December 2012, assignment
			 *	from a ternary performs faster than "Math.min"
			 */
			i = (lastIndex === m ? lowerBound : (i = lastIndex + 1) > j ? j : i); //Math.min(j, lastIndex + 1))
			for (i = i; i < j; i = i + 1) {

				if (a[i] === v) {
					lastValue = v;
					return (lastIndex = i);
				}

			}

			/*
			 *	Seek R - L
			 *	Either start at upperBound or start at previous lastIndex - 1
			 *	According to jsperf.com, December 2012, assignment
			 *	from a ternary performs faster than "Math.max"
			 */
			i = (lastIndex === m ? upperBound : (i = lastIndex - 1) > m ? i : m); //Math.max(m, lastIndex - 1)); //(i = lastIndex - 1) > m ? i : m);
			for (i = i; i > m; i = i - 1) {

				if (a[i] === v) {
					lastValue = v;
					return (lastIndex = i);
				}

			}

			return null;

		}

	}

	function begin(array) {

		if ((array || false).constructor === Array) {

			i	= 0;
			j	= (ARRAY = array.slice()).length;

			lowerBound	= 0;
			upperBound	= j - 1;

			lastIndex	= -1;
			lastValue	= null;

			m	= -1;

			return this;

		} else {

			return reset();

		}

	}

	function reset() {

		i	= 0;
		j	= (ARRAY = []).length;

		lowerBound	= 0;
		upperBound	= j - 1;

		lastIndex	= -1;
		lastValue	= null;

		m	= -1;

		return this;

	}

	function bite(x, y) {

		var a = ARRAY, pow = Math.pow, N = Number.NEGATIVE_INFINITY, max = Math.max, min = Math.min, l = lowerBound, u = upperBound;

		if (typeof x === "number") {

			if (typeof y === "number") {

				/*
				 *	Negative zero slices lower bound 0
				 *
				 *	Massage x and y to acceptable values
				 *	l is lower bound 0
				 *	u is upper bound (j - 1)
				 *
				 *	Massage the second argument to slice
				 */
				return pow(x, m) === N && pow(y, m) === N ? a.slice(0).reverse() : (x = max(l, min(u, x > m ? x : x + u))) > (y = min(u, max(l, y > m ? y : y + u))) ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);

			}

			/*
			 *	Negative zero slices upper bound (j - 1)
			 *	Positive zero slices lower bound 0
			 *
			 *	Massage x to an acceptable value
			 *	l is lower bound 0
			 *	u is upper bound (j - 1)
			 */
			return pow(x, m) === N ? a.slice(u) : a.slice(max(l, min(u, x > m ? x : x + u)));

		}

		return [];

	}

	/*
	function bite(x, y) {

		var a = ARRAY, max = Math.max, min = Math.min, pow = Math.pow, N = Number.NEGATIVE_INFINITY, l = 0, u = (j - 1);

		if (typeof x === "number") {

			if (typeof y === "number") {

				if ((pow(x, m) === N) && (pow(y, m) === N)) {
					*/
					/*
					 *	Negative zero slices lower bound 0
					 *//*
					return a.slice(0).reverse();

				} else {
					*/
					/*
					 *	Massage x and y to acceptable values
					 *	l is lower bound 0
					 *	u is upper bound (j - 1)
					 *//*
					x = max(l, min(u, x > m ? x : x + u));
					y = min(u, max(l, y > m ? y : y + u));
					*/
					/*
					 *	Massage the second argument to slice
					 *//*
					return x > y ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);

				}

			}

			if (pow(x, m) === N) {
				*/
				/*
				 *	Negative zero slices upper bound (j - 1)
				 *	Positive zero slices lower bound 0
				 *//*
				return a.slice(u);

			} else {
				*/
				/*
				 *	Massage x to an acceptable value
				 *	l is lower bound 0
				 *	u is upper bound (j - 1)
				 *//*
				return a.slice(max(l, min(u, x > m ? x : x + u)));

			}

		}

		return [];

	}
	*/

	/*
	 * Safari performs significantly faster with anonymous functions returned from
	 * the self-executing function according to jsperf.com, December 2012. FF and
	 * Chrome moderately favour named functions (but the difference to Safari is an
	 * order of magnitude)
	 */
	map = (function () {

		var z, array;

		return function (method) {

			if ((method || false).constructor === Function) {

				if ((z = lowerBound) < j) {

					array = [];
					do {

						array.push(method.call(ARRAY, z, ARRAY[z], j));

					} while (++z < j);
					return array;

				}

			}

			return [];

		}

	}());

	/*
	 * While array.sort().pop() performs significantly faster at identifying the "largest"
	 * string value than an iterative comparison, using array.slice() to duplicate the array
	 * negates that benefit
	 */
	max	= (function () {

		var x, y, z;

		function MAX() {

			x = ARRAY[0];
			z = 1;
			do {

				if ((y = ARRAY[z]) > x) x = y;

			} while (++z < j);
			return x;

		}

		return function () {

			return isNaN(z = Math.max.apply(ARRAY, ARRAY)) ? MAX() : z ; //array.slice().sort().pop() : z ;

		}

	}());

	/*
	 * While array.sort().shift() performs significantly faster at identifying the "smallest"
	 * string value than an iterative comparison, using array.slice() to duplicate the array
	 * negates that benefit
	 */
	min	= (function () {

		var x, y, z;

		function MIN() {

			x = ARRAY[0];
			z = 1;
			do {

				if ((y = ARRAY[z]) < x) x = y;

			} while (++z < j);
			return x;

		}

		return function () {

			return isNaN(z = Math.min.apply(ARRAY, ARRAY)) ? MIN() : z ; //array.slice().sort().shift() : z ;

		}

	}());

	function iterate(method) {

		if ((method || false).constructor === Function) {

			throw "Not Implimented";
			return true;

		}

		return false;

	}

	function iterateForward(method) {

		var z;

		if ((method || false).constructor === Function) {

			if ((z = lowerBound) < j) {

				do {

					method.call(ARRAY, z, ARRAY[z], j);

				} while (++z < j);
				return true;

			}

		}

		return false;

	}

	function iterateReverse(method) {

		var z;

		if ((method || false).constructor === Function) {

			if ((z = upperBound) > m) {

				do {

					method.call(ARRAY, z, ARRAY[z], j);

				} while (m < --z);
				return true;

			}

		}

		return false;

	}

	function iterateBetween(x, y, method) {

		var z, max = Math.max, min = Math.min;

		if (typeof x === "number" && typeof y === "number" && (method || false).constructor === Function) {

			if (x < y) {

				x = max(0, x);
				y = max(0, min(j, y));
				z = min(j, (y + 1));

				do {

					method.call(ARRAY, x, ARRAY[x], y);

				} while (++x < z);

				/*
				do {

					if (method.call(ARRAY, x, ARRAY[x], y) === false)  {

						return false;

					}

				} while (++x < z);
				*/

			} else {

				x = max(m, min(j, x));
				y = max(m, y);
				z = max(m, (y - 1));

				do {

					method.call(ARRAY, x, ARRAY[x], y);

				} while (z < --x);

				/*
				do {

					if (method.call(ARRAY, x, ARRAY[x], y) === false) {

						return false;

					}

				} while (z < --x);
				*/

			}

			return true;

		}

		return false;

	}

	/* Constructor */

	function ArrayEngine(array) {

		return (array) ? begin(array) : reset() ;

	}

	ArrayEngine.prototype.indexOf	= indexOf;

	ArrayEngine.prototype.begin		= begin;
	ArrayEngine.prototype.reset		= reset;

	ArrayEngine.prototype.bite		= bite;

	ArrayEngine.prototype.map		= map;
	ArrayEngine.prototype.max		= max;
	ArrayEngine.prototype.min		= min;

	ArrayEngine.prototype.iterate 	= iterate;
	ArrayEngine.prototype.iterateForward	= iterateForward;
	ArrayEngine.prototype.iterateReverse	= iterateReverse;
	ArrayEngine.prototype.iterateBetween	= iterateBetween;

	return ArrayEngine;

}());