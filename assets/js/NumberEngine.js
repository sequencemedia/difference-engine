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
var NumberEngine	= (function () {

	"use strict";

	var numberEngine,

		OCT = 8,
		DEC = 10,
		HEX = 16,

		fib,
		hav;

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

	hav = (function () {

		var sin 	= Math.sin,
			cos 	= Math.cos,
			atan2	= Math.atan2,
			sqrt	= Math.sqrt,

			PI 		= Math.PI;

		function radians(n) {

			return (n * PI) / 180;

		}

		function haversine(points, radius) {

			var to,
				from,
				LAT,
				LNG,
				lat,
				lng,
				a, c;

			if ((points || false).constructor === Object) {

				to 		= points.to;
				from 	= points.from;

				if ((to || false).constructor === Object && (from || false).constructor === Object) {

					LAT 	= radians(to.lat - from.lat);
					LNG 	= radians(to.lng - from.lng);
					lat 	= LAT / 2;
					lng 	= LNG / 2;

					a = sin(lat) * sin(lat) + cos(radians(from.lat)) * cos(radians(to.lat)) * sin(lng) * sin(lng),
					c = 2 * atan2(sqrt(a), sqrt(1 - a));

					return (radius * c).toFixed(2);

				}

			}

			return NaN;

		}

		return function (points) {

			return {

				km: function () {

					return haversine(points, 6378);

				},

				mi: function () {

					return haversine(points, 3963);

				}

			}

		}

	}());

	function fromHexToDec(v) {
		return (typeof v === "string") ? parseInt(v, HEX) : (typeof v === "number") ? v : NaN ;
	}

	function fromOctToDec(v) {
		return (typeof v === "string") ? parseInt(v, OCT) : (typeof v === "number") ? v : NaN ;
	}

	function NumberEngine() {

		return numberEngine || (this instanceof NumberEngine ? numberEngine = this : new NumberEngine());

	}

	NumberEngine.prototype.fib = fib;
	NumberEngine.prototype.hav = hav;
	NumberEngine.prototype.fromHexToDec = fromHexToDec;
	NumberEngine.prototype.fromOctToDec = fromOctToDec;

	return NumberEngine;

}());