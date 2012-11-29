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
var DifferenceEngine	= (function () {

	"use strict";

	var indexFor,

		mapKey,

		sequence,

		extract;

	indexFor = (function () {

		var i,
			j,
			KEY;

		/*
		 *	Accepts one array, "array", and one string or number, "key";
		 *	Searches "array" for "key"
		 *	@param {array} array
		 *		[ "A", "B", "C", "D" ]
		 *	@param {string, number} key
		 *		"D"
		 *
		 *	Performs moderately faster than "array.indexOf()" in Chrome, and
		 *	performs significantly faster than that method in FF
		 *	as at 24 November 2012.
		 */

		return function indexFor(array, key) {

			i = 0;
			j = array.length;
			for (i = i; i < j; i = i + 1) {
				KEY = array[i];
				if (KEY === key) {
					return i;
				}
			}
			return null;

		};

	}());

	mapKey = (function () {

		var index,
			total,
			value,

			L,
			R;

		L = (function () {

			var j,
				n,
				KEY;

			/*
			 *	Accepts one integer, "i", and two arrays, "alpha" and "omega";
			 *	Searches "alpha" to the left for the nearest sibling in "omega"
			 *	@param {number} i
			 *		3
			 *	@param {array} alpha
			 *		[ "A", "B", "C", "D" ]
			 *	@param {array} omega
			 *		[ "A", "B", "C" ]
			 *
			 *	This has the potential to be re-written as an implementation of "array.indexOf()"
			 *	pending performance comparisons. Presently, this method is assumed to be faster than the
			 *	native array method because "indexFor" performs better than "array.indexOf()".
			 */

			return function L(i, alpha, omega) {

				j = 0;
				while (i > j) {
					i = i - 1;
					KEY = alpha[i];
					if ((n = indexFor(omega, KEY)) !== null) {
						return n;
					}
				}
				return null;

			};

		}());

		R = (function () {

			var j,
				n,
				KEY;

			/*
			 *	Accepts one integer, "i", and two arrays, "alpha" and "omega";
			 *	Searches "alpha" to the right for the nearest sibling in "omega"
			 *	@param {number} i
			 *		3
			 *	@param {array} alpha
			 *		[ "A", "B", "C", "D" ]
			 *	@param {array} omega
			 *		[ "A", "B", "C" ]
			 *
			 *	This has the potential to be re-written as an implementation of "array.lastIndexOf()"
			 *	pending performance comparisons. Presently, this method is assumed to be faster than the
			 *	native array method because "indexFor" performs better than "array.indexOf()".
			 */

			return function R(i, alpha, omega) {

				j = (alpha.length - 1);
				while (i < j) {
					i = i + 1;
					KEY = alpha[i];
					if ((n = indexFor(omega, KEY)) !== null) {
						return n;
					}
				}
				return null;

			};

		}());

		/*
		 *	Accepts two arrays, "alpha" and "omega";
		 *	Returns an object which describes how to splice "key"
		 *	which appears in "alpha" into "omega"
		 *	@param {array} alpha
		 *		[ "A", "B", "C", "D" ]
		 *	@param {array} omega
		 *		[ "A", "B", "C" ]
		 *	@param {string, number}
		 *		"D"
		 */

		return function mapKey(alpha, omega, key) {

			if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {

				if ((index = indexFor(alpha, key)) !== null) {

					total = omega.length;

					return (index === 0) ? {

							index: 0,
							total: (total + 1),
							first: true,
							last: total === 0,
							only: total === 0,
							alpha: null,
							omega: omega[0] || null

						} : ((value = L(index, alpha, omega, key)) !== null) ? {

								index: (value + 1),
								total: (total + 1),
								first: total === 0,
								last: total === (value + 1),
								only: total === 0,
								alpha: omega[value] || null,
								omega: omega[value + 1] || null

							} : ((value = R(index, alpha, omega, key)) !== null) ? {

									index: value,
									total: (total + 1),
									first: value === 0,
									last: total === 0,
									only: total === 0,
									alpha: omega[value - 1] || null,
									omega: omega[value] || null

								} : (index < total) ? {

										index: 0,
										total: (total + 1),
										first: true,
										last: total === 0,
										only: total === 0,
										alpha: null,
										omega: omega[0] || null

									} : {

										index: total,
										total: (total + 1),
										first: total === 0,
										last: true,
										only: total === 0,
										alpha: omega[total - 1] || null,
										omega: null

									} ;

				}

			}
			return null;

		};

	}());

	/*
	 *	Accepts two arrays, "alpha" and "omega";
	 *	Returns an array containing elements in "alpha" AND "omega"
	 * 	NOT in order
	 *	@param {array} alpha
	 *		[ "A", "B", "D" ]
	 *	@param {array} omega
	 *		[ "A", "B", "C" ]
	 */

	sequence = (function () {

		var extract = (function () {

			var i,
				j,
				n,
				ALPHA,
				OMEGA;

			/*
			 *	Accepts three arrays, "alpha", "omega" and "extracted";
			 *	Returns an array containing elements in "alpha" and "omega"
			 *	NOT in order
			 *	@param {array} alpha
			 *		[ "A", "B", "C", "D" ]
			 *	@param {array} omega
			 *		[ "A", "B", "D", "C" ]
			 *	@param {array} extracted
			 *		[ ]
			 */

			return function extract(alpha, omega, extracted) {

				i = 0;
				j = alpha.length;
				n = 0;
				for (i = i; i < j; i = i + 1) {
					ALPHA = alpha[i];
					OMEGA = omega[n];
					if (ALPHA === OMEGA) {
						n = n + 1;
					} else {
						extracted.push(ALPHA);
						n = ((n = indexFor(omega, ALPHA)) !== null) ? n + 1 : i + 1;
					}

				}
				return extracted;

			};

		}());

		return function sequence(alpha, omega) {

			if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
				return extract(alpha, omega, []);
			}
			return [];

		};

	}());

	extract	= (function () {

		var i,
			j,
			KEY,

			hasKey;


		hasKey = (function () {

			var i,
				j,
				KEY;

			/*
			 *	Accepts one array, "array" and one string, "key";
			 *	Returns a boolean which describes if "array" contains element "key"
			 *	@param {array} array
			 *		[ "A", "B", "C", "D" ]
			 *	@param {array} key
			 *		"A"
			 */

			return function hasKey(array, key) {

				i = 0;
				j = array.length;
				for (i = i; i < j; i = i + 1) {
					KEY = array[i];
					if (KEY === key) {
						return true;
					}
				}

				return null;

			};

		}());

		/*
		 *	Accepts two arrays, "alpha" and "omega";
		 *	Returns an array containing elements
		 *		1) in "alpha" AND "omega" IF "condition" is "true"
		 *		2) in "alpha" NOT "omega" IF "condition" is "null"
		 *	@param {array} alpha
		 *		[ "A", "B", "D" ]
		 *	@param {array} omega
		 *		[ "A", "B", "C" ]
		 *	@param {true, null}
		 *		true, null
		 *	@param {array} extracted
		 *		[ ]
		 */

		return function extract(alpha, omega, condition, extracted) {

			i = 0;
			j = alpha.length;
			for (i = i; i < j; i = i + 1) {
				KEY = alpha[i];
				if (hasKey(omega, KEY) === condition) {
					extracted.push(KEY);
				}
			}
			return extracted;

		};

	}());

	/*
	 *	Accepts two arrays, "alpha" and "omega";
	 *	Returns an array containing elements in "alpha" AND "omega"
	 *	@param {array} alpha
	 *		[ "A", "B", "D" ]
	 *	@param {array} omega
	 *		[ "A", "B", "C" ]
	 */

	function positive(alpha, omega) {

		if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
			return extract(alpha, omega, true, []);
		}
		return [];

	}

	/*
	 *	Accepts two arrays, "alpha" and "omega";
	 *	Returns an array containing elements in "alpha" NOT "omega"
	 *	@param {array} alpha
	 *		[ "A", "B", "D" ]
	 *	@param {array} omega
	 *		[ "A", "B", "C" ]
	 */

	function negative(alpha, omega) {

		if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
			return extract(alpha, omega, null, []);
		}
		return [];

	}

	/* Constructor */

	function DifferenceEngine() { }

	DifferenceEngine.prototype.mapKey	= mapKey;

	DifferenceEngine.prototype.sequence	= sequence;
	DifferenceEngine.prototype.positive	= positive;
	DifferenceEngine.prototype.negative	= negative;

	return DifferenceEngine;

}());