/*
 *	Copyright © 2012 Jonathan Perry and Sequence Media Limited
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:
 *
 *	The above copyright notice and this permission notice shall be included in
 *	all copies or substantial portions of the Software.
 *
 *	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *	SOFTWARE.
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

		var a, i, l;

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
			i = ((l = lastIndex) === m ? lowerBound : (i = l + 1) > j ? j : i); //Math.min(j, lastIndex + 1))
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
			i = ((l = lastIndex) === m ? upperBound : (i = l - 1) > m ? i : m); //Math.max(m, lastIndex - 1));
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

			lowerBound	= i;
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

		lowerBound	= i;
		upperBound	= j - 1;

		lastIndex	= -1;
		lastValue	= null;

		m	= -1;

		return this;

	}

	/*
	 *	According to jsperf.com, December 2012, the less idiosyncratic
	 *	multiple-line ternary performs slightly better than the more idiosyncratic
	 *	single-line ternary across a range of values and, surprisingly,
	 *	the formulation with "Math.min()" and "Math.max()" remains competitive.
	 *
	 *	According to jsperf.com, December 2012 again, direct comparison of
	 *	ternary and "Math.max" with "Math.min" formulations favours ternary
	 *	significantly. Since "Array.slice()" is a slow operation presumably it
	 *	consumes gains made elsewhere.
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

				/*
				 *	Negative zero slices lower bound 0
				 *
				 *	Massage x and y to acceptable values
				 *	l is lower bound 0
				 *	u is upper bound (j - 1)
				 *
				 *	Massage the second argument to slice
				 */

				if (pow(x, m) === N && pow(y, m) === N) {

					return a.slice(l).reverse();

				} else {

					x	= (l > (z = (u < (z = (x > m ? x : x + u)) ? u : z))) ? l : z;
					y	= (u < (z = (l > (z = (y > m ? y : y + u)) ? l : z))) ? u : z;

					return x > y ? a.slice(y, x + 1).reverse() : a.slice(x, y + 1);

				}

			}

			/*
			 *	Negative zero slices upper bound (j - 1)
			 *	Positive zero slices lower bound 0
			 *
			 *	Massage x to an acceptable value
			 *	l is lower bound 0
			 *	u is upper bound (j - 1)
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

	function map(method) {

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

	/*
	 *	While "Array.sort().pop()" performs significantly faster at identifying the "largest"
	 *	string value than an iterative comparison, using "Array.slice()" to duplicate the array
	 *	negates that benefit
	 *
	 *	According to jsperf.com, December 2012, IE and FF favour variables scoped within the
	 *	self-executing function. Chrome outperforms them regardless
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

			return isNaN(z = max.apply((a = ARRAY), a)) ? MAX(a) : z ; //array.slice().sort().pop() : z ;

		}

	}());

	/*
	 *	While "Array.sort().shift()" performs significantly faster at identifying the "smallest"
	 *	string value than an iterative comparison, using "Array.slice()" to duplicate the array
	 *	negates that benefit
	 *
	 *	According to jsperf.com, December 2012, IE and FF favour variables scoped within the
	 *	self-executing function. Chrome outperforms them regardless
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

			return isNaN(z = min.apply((a = ARRAY), a)) ? MIN(a) : z ; //array.slice().sort().shift() : z ;

		}

	}());

	function iterate(method) {

		if ((method || false).constructor === Function) {

			throw "Not implimented";
			return true;

		}

		return false;

	}

	function iterateForward(method) {

		var z, a;

		if ((method || false).constructor === Function) {

			if ((z = lowerBound) < j) {

				a = ARRAY;
				do {

					method.call(a, z, a[z], j);

				} while (++z < j);
				return true;

			}

		}

		return false;

	}

	function iterateReverse(method) {

		var z, a;

		if ((method || false).constructor === Function) {

			if ((z = upperBound) > m) {

				a = ARRAY;
				do {

					method.call(a, z, a[z], j);

				} while (m < --z);
				return true;

			}

		}

		return false;

	}

	function iterateBetween(x, y, method) {

		var l, u, z, a; //, max = Math.max, min = Math.min;

		if (typeof x === "number" && typeof y === "number" && (method || false).constructor === Function) {

			l = lowerBound;
			u = upperBound;

			if (x < y) {

				x = (l > x) ? l : x;
				y = (l > (z = (j < y ? j : y))) ? l : z;
				z = (j < (z = (y + 1))) ? j : z;

				a = ARRAY;
				do {

					method.call(a, x, a[x], y);

				} while (++x < z);
				return true;

				/*
				x = max(l, x);
				y = max(l, min(j, y));
				z = min(j, (y + 1));

				a = ARRAY;
				do {

					if (method.call(a, x, a[x], y) === false)  {

						return false;

					}

				} while (++x < z);
				return true;
				*/

			} else {

				x = (m > (z = (u < x ? u : x))) ? m : z;
				y = (m > y) ? m : y;
				z = (m > (z = (y - 1))) ? m : z;

				a = ARRAY;
				do {

					method.call(a, x, a[x], y);

				} while (z < --x);
				return true;

				/*
				x = max(m, min(u, x));
				y = max(m, y);
				z = max(m, (y - 1));

				a = ARRAY;
				do {

					if (method.call(a, x, a[x], y) === false) {

						return false;

					}

				} while (z < --x);
				return true;
				*/

			}

		}

		return false;

	}

	/*	Constructor */

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