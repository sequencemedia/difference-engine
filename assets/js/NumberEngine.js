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
var NumberEngine	= (function () {

	"use strict";

	var numberEngine,

		fib;

	fib = (function () {

		var FIBONACCI = [ 0, 1 ],
			fibonacci;

		/*
		 *	No implementation for negative fibonacci numbers (yet)
		 */
		function negative(n) {

			throw "Not implemented";
			return 0;

		}

		function positive(n) {

			return (typeof (fibonacci = FIBONACCI[n]) === "number") ? fibonacci : (FIBONACCI[n] = (positive(n - 1) + positive(n - 2)));

		}

		return function (n) {

			/*
			 *	Conditions where truth is explicit generally perform faster than
			 *	conditions where truthiness is implied; so (n > 0) is better than (n)
			 */
			return (typeof n === "number") ? (n > 0) ? positive(n) : 0 : null;

		};

	}());

	function fromHexToDec(s) {
		return (typeof s === "string") ? parseInt(s, 16) : null;
	}

	function fromOctToDec(s) {
		return (typeof s === "string") ? parseInt(s, 8) : null;
	}

	function NumberEngine() {

		return numberEngine || (this instanceof NumberEngine ? numberEngine = this : new NumberEngine());

	}

	NumberEngine.prototype.fib = fib;
	NumberEngine.prototype.fromHexToDec = fromHexToDec;
	NumberEngine.prototype.fromOctToDec = fromOctToDec;

	return NumberEngine;

}());