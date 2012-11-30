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

		indexOf;

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
				 * Either start at 0 or start at previous i (which is n)
				 */
				for (i = (n === m ? 0 : i + 1 > j ? j : i + 1); i < j; i = i + 1) {
					KEY = ARRAY[i];
					if (KEY === key) {
						return (n = i);
					}
				}

				/*
				 * Seek R - L
				 * Either start at j - 1 or start at previous i (which is n) - 1
				 */
				for (i = (n === m ? j - 1 : n - 1 > m ? n - 1 : j - 1); i > m; i = i - 1) {
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
			j	= array.length;
			n	= -1;
			m	= -1;

			ARRAY	= array;

			return this;

		} else {

			return reset();

		}

	}

	function reset() {

		i	= 0;
		j	= 0;
		n	= -1;
		m	= -1;

		ARRAY	= [];

		return this;

	}

	/* Constructor */

	function ArrayEngine(array) {

		return (array) ? begin(array) : reset() ;

	}

	ArrayEngine.prototype.indexOf	= indexOf;

	ArrayEngine.prototype.begin		= begin;
	ArrayEngine.prototype.reset		= reset;

	return ArrayEngine;

}());