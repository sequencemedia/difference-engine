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

		n,
		m,

		ARRAY,

		indexOf,

		map,
		max,
		min;

	indexOf = (function () {

		var KEY;

		/*
		 *	Accepts one string or number, "key";
		 *	Searches "ARRAY" for "key"
		 *	@param {string, number} key
		 *		"D"
		 *
		 *	Performs moderately slower than "DifferenceEngine.indexFor()"
		 */

		return function (key) {

			if (KEY === key) {

				return i;

			} else {

				/*
				 * Seek L - R
				 * Either start at 0 or start at previous n + 1
				 */
				i = (n === m ? 0 : n + 1 > j ? j : n + 1);
				for (i = i; i < j; i = i + 1) {
					KEY = ARRAY[i];
					if (KEY === key) {
						return (n = i);
					}
				}

				/*
				 * Seek R - L
				 * Either start at j - 1 or start at previous n - 1
				 */
				i = (n === m ? j - 1 : n - 1 > m ? n - 1 : m);
				for (i = i; i > m; i = i - 1) {
					KEY = ARRAY[i];
					if (KEY === key) {
						return (n = i);
					}
				}

				return null;

			}

		};

	}());

	function begin(array) {

		if ((array || false).constructor === Array) {

			i	= 0;
			j	= (ARRAY = array.slice()).length;
			n	= -1;
			m	= -1;

			return this;

		} else {

			return reset();

		}

	}

	function reset() {

		i	= 0;
		j	= (ARRAY = []).length;
		n	= -1;
		m	= -1;

		return this;

	}

	function bite(x, y) {

		var a = ARRAY, max = Math.max, min = Math.min, pow = Math.pow, N = Number.NEGATIVE_INFINITY, l = 0, u = (j - 1);

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

				if ((z = 0) < j) {

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

			if ((z = 0) < j) {

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

			if ((z = (j - 1)) > m) {

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