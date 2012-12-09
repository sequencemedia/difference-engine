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
		min,

		iterate,
		iterateForward,
		iterateReverse,
		iterateBetween;

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

		return function indexOf(key) {

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
			j	= (ARRAY = array).length;
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

	map = (function () {

		var z, array;

		return function map(method) {

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

	max	= (function () {

		var x, y, z;

		function MAX() {

			x = ARRAY[0];
			z = 1;
			do { //console.log("MAX", z, ARRAY[z], x, ARRAY[z] > x);

				if ((y = ARRAY[z]) > x) x = y;

			} while (++z < j);
			return x;

		}

		return function max() {

			return isNaN(z = Math.max.apply(ARRAY, ARRAY)) ? MAX() : z ; //array.slice().sort().pop() : z ;

		}

	}());

	min	= (function () {

		var x, y, z;

		function MIN() {

			x = ARRAY[0];
			z = 1;
			do { //console.log("MIN", z, ARRAY[z], x, ARRAY[z] < x);

				if ((y = ARRAY[z]) < x) x = y;

			} while (++z < j);
			return x;

		}

		return function min() {

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

	iterateForward = (function () {

		var z;

		return function iterateForward(method) {

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

	}());

	iterateReverse	= (function () {

		var z;

		return function iterateReverse(method) {

			if ((method || false).constructor === Function) {

				if ((z = (j - 1)) > m) {

					do {

						method.call(ARRAY, z, ARRAY[z], j);

					} while (m < --z);
					return true;

				}

			}

			return false;

		};

	}());

	iterateBetween	= (function () {

		var z;

		return function iterateBetween(x, y, method) {

			if (typeof x === "number" && typeof y === "number" && (method || false).constructor === Function) {

				if (x < y) {

					x = Math.max(0, x);
					y = Math.max(0, Math.min(j, y));
					z = Math.min(j, (y + 1));

					do {

						method.call(ARRAY, x, ARRAY[x], y);

					} while (++x < z);

					/*
					x = Math.max(0, x);
					y = Math.max(0, Math.min(j, y));
					z = Math.min(j, (y + 1));

					do {

						if (method.call(ARRAY, x, ARRAY[x], y) === false)  {

							return false;

						}

					} while (++x < z);
					*/

				} else {

					x = Math.max(m, Math.min(j, x));
					y = Math.max(m, y);
					z = Math.max(m, (y - 1));

					do {

						method.call(ARRAY, x, ARRAY[x], y);

					} while (z < --x);

					/*
					x = Math.max(m, Math.min(j, x));
					y = Math.max(m, y);
					z = Math.max(m, (y - 1));

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

	}());

	/* Constructor */

	function ArrayEngine(array) {

		return (array) ? begin(array) : reset() ;

	}

	ArrayEngine.prototype.indexOf	= indexOf;

	ArrayEngine.prototype.begin		= begin;
	ArrayEngine.prototype.reset		= reset;

	ArrayEngine.prototype.map		= map;
	ArrayEngine.prototype.max		= max;
	ArrayEngine.prototype.min		= min;

	ArrayEngine.prototype.iterate 	= iterate;
	ArrayEngine.prototype.iterateForward	= iterateForward;
	ArrayEngine.prototype.iterateReverse	= iterateReverse;
	ArrayEngine.prototype.iterateBetween	= iterateBetween;

	return ArrayEngine;

}());