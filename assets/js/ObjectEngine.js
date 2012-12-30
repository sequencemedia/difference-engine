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
var ObjectEngine	= (function () {

	var objectEngine,

		HASOWNPROPERTY = Object.prototype.hasOwnProperty,

		mix;

	mix = (function () {

		function MIX(o) {

			var keys	= Object.keys(o), k, v, O = {};

			while (keys.length > 0) {

				k = keys.shift();
				v = o[k];
				v = ((v || false).constructor === Object) ? merge(v) : ((v || false).constructor === Array) ? v.slice() : v
				O[k] = v;

			}

			return O ;

		}

		return function (alpha, omega) {

			var keys, k, v;

			if ((alpha || false).constructor === Object && (omega || false).constructor === Object) {

				/*
				 *	According to jsperf.com, December 2012, "do" performs faster in Safari for both more and less populated objects,
				 *	while "Array.shift()" performs significantly better for more populated objects in Chrome, FF and Maxthon. Safari
				 *	performs faster than each of them, but "do" is superior in that browser
				 *
				 *	Assigning the value of the property to an intermediary variable offers no benefit, except in Maxthon, and some
				 *	detriment to FF and Safari
				 */
				keys	= Object.keys(omega);

				while (keys.length > 0) {

					k = keys.shift();
					v = omega[k];
					v = ((v || false).constructor === Object) ? MIX(v) : ((v || false).constructor === Array) ? v.slice() : v ;
					alpha[k] = v;

				}

				return alpha ;

			}

			return null ;

		}

	}());

	function hasProperty(key, object) {

		if ((object || false).constructor === Object) {

			return (key in object);

		}

	}


	function hasProperties(object) {

		var key;

		if ((object || false).constructor === Object) {

			for (key in object) return true ;
			return false ;

		}

		return false ;

	}

	function hasOwnProperty(key, object) {

		if ((object || false).constructor === Object) {

			return HASOWNPROPERTY.call(object, key);

		}

	}

	function ObjectEngine() {

		return objectEngine || (this instanceof ObjectEngine ? objectEngine = this : new ObjectEngine());

	}

	ObjectEngine.prototype.mix				= mix;

	ObjectEngine.prototype.hasProperty		= hasProperty ;
	ObjectEngine.prototype.hasProperties	= hasProperties ;
	ObjectEngine.prototype.hasOwnProperty	= hasOwnProperty ;

	return ObjectEngine;

}());