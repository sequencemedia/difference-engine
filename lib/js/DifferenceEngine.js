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
var DifferenceEngine	= (function () {

	"use strict";

	var describe,
		sequence,
		extract;

	/*
	 *	Accepts one array, "array", and one string or number, "value";
	 *	Searches "array" for "value"
	 *	@param {array} array
	 *		[ "A", "B", "C", "D" ]
	 *	@param {string, number} value
	 *		"D"
	 *
	 *	Performs moderately faster than "array.indexOf()" in Chrome, and
	 *	performs significantly faster than that method in FF
	 *	as at 24 November 2012.
	 */
	function indexOf(array, value) {
		var i = 0,
			j = array.length;
		/*
		 *	According to jsperf.com, December 2012, "for" performs
		 *	faster than "while" or "do"
		 */
		for (i = i; i < j; i = i + 1) {
			if (array[i] === value) {
				return i;
			}
		}
		return null;
	}

	describe = (function () {

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
		 *	native array method because "indexOf" performs better than "array.indexOf()".
		 */
		function L(i, alpha, omega) {
			var j = 0, n;
			/*
			 *	According to jsperf.com, December 2012, "while" performs
			 *	faster than "for" or "do"
			 */
			while (--i > j) {
				if ((n = indexOf(omega, alpha[i])) !== null) {
					return n;
				}
			}
			return null;
		}

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
		 *	native array method because "indexOf" performs better than "array.indexOf()".
		 */
		function R(i, alpha, omega) {
			var j = (alpha.length - 1), n;
			/*
			 *	According to jsperf.com, December 2012, "while" performs
			 *	faster than "for" or "do"
			 */
			while (++i < j) {
				if ((n = indexOf(omega, alpha[i])) !== null) {
					return n;
				}
			}
			return null;
		}

		/*
		 *	Accepts two arrays, "alpha" and "omega";
		 *	Returns an object which describes how to splice "item"
		 *	which appears in "alpha" into "omega"
		 *	@param {array} alpha
		 *		[ "A", "B", "C", "D" ]
		 *	@param {array} omega
		 *		[ "A", "B", "C" ]
		 *	@param {string, number}
		 *		"D"
		 */
		return function (alpha, omega, item) {
			var index,
				total,
				value;
			if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
				if ((index = indexOf(alpha, item)) !== null) {
					total = omega.length;
					return (index === 0) ? {
							index: 0,
							total: (total + 1),
							first: true,
							last: total === 0,
							only: total === 0,
							alpha: null,
							omega: omega[0] || null
						} : ((value = L(index, alpha, omega, item)) !== null) ? {
								index: (value + 1),
								total: (total + 1),
								first: total === 0,
								last: total === (value + 1),
								only: total === 0,
								alpha: omega[value] || null,
								omega: omega[value + 1] || null
							} : ((value = R(index, alpha, omega, item)) !== null) ? {
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
									};
				}
			}
			return null;
		};

	}());

	/*
	 *	@param {array} alpha
	 *		[ "A", "B", "C" ]
	 *	@param {array} omega
	 *		[ "A", "B", "D", "C" ]
	 */
	sequence = (function () {

		/*
		 *	@param {array} alpha
		 *		[ "A", "B", "C", "D" ]
		 *	@param {array} omega
		 *		[ "A", "B", "E", "C", "D" ]
		 *	@param {array} extracted
		 *		[ "C" ]
		 */
		function extract(alpha, omega, extracted) {
			var i = 0,
				j = alpha.length,
				n = 0,
				ALPHA;
			for (i = i; i < j; i = i + 1) {
				/*
				 *	Are the items at "i" and "n" identical?
				 */
				if ((ALPHA = alpha[i]) === omega[n]) {
					/*
					 *	Yes, they are. Ignore them.
					 *
					 *  Index "i" is incremented by the "for" declaration;
					 *	but index "n" must be incremented manually
					 */
					n = n + 1;
				} else {
					/*
					 *	No, they are not.
					 *
					 *	ALPHA is a new item or an old item at a different index.
					 *	Index "n" is incremented after the index of the same item
					 *	in "omega", or to be equal with "i" at the next iteration
					 *
					 */
					extracted.push(ALPHA);
					n = ((n = indexOf(omega, ALPHA)) !== null) ? n + 1 : i + 1;
				}
			}
			return extracted;
		}

		return function (alpha, omega) {
			if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
				return extract(alpha, omega, []);
			}
			return [];

		};

	}());

	extract	= (function () {

		/*
		 *	Accepts one array, "array" and one value, "value";
		 *	Returns a boolean which describes if "array" contains "value"
		 *	@param {array} array
		 *		[ "A", "B", "C", "D" ]
		 *	@param {string, number} value
		 *		"A"
		 */
		function has(array, value) {
			var i = 0,
				j = array.length;
			for (i = i; i < j; i = i + 1) {
				if (array[i] === value) {
					return true;
				}
			}
			return null;
		}

		/*
		 *	Accepts two arrays, "alpha" and "omega";
		 *	Returns an array containing items
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
		return function (alpha, omega, condition, extracted) {
			var i = 0,
				j = alpha.length,
				ALPHA;
			for (i = i; i < j; i = i + 1) {
				if (has(omega, (ALPHA = alpha[i])) === condition) {
					extracted.push(ALPHA);
				}
			}
			return extracted;
		};

	}());

	/*
	 *	Accepts two arrays, "alpha" and "omega";
	 *	Returns an array containing items in "alpha" AND "omega"
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
	 *	Returns an array containing items in "alpha" NOT "omega"
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

	/*	Constructor */

	function DifferenceEngine() { }

	DifferenceEngine.prototype.describe	= describe;
	DifferenceEngine.prototype.sequence	= sequence;
	DifferenceEngine.prototype.positive	= positive;
	DifferenceEngine.prototype.negative	= negative;

	return DifferenceEngine;

}());