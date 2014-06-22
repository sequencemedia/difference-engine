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
		temperature,
		weight,
		distance,

		OCT = 8,
		DEC = 10,
		HEX = 16,

		OZGR = 28.3495231,
		GROZ = 0.0352739619,

		fib,
		hav;

	fib = (function () {

		var FIBONACCI = [ 0, 1 ],
			fibonacci;

		/*
		 *	No implementation for negative fibonacci numbers (yet)
		 */
		function negative(n) {
			throw "Not implemented"; //return 0;
		}

		function positive(n) {
			return (typeof (fibonacci = FIBONACCI[n]) === "number") ? fibonacci : (FIBONACCI[n] = (positive(n - 1) + positive(n - 2)));
		}

		return function (n) {
			/*
			 *	Conditions where truth is explicit generally perform faster than
			 *	conditions where truthiness is implied; so (n > 0) is better than (n)
			 */
			return (typeof n === "number") ? (n > 0) ? positive(n) : 0 : NaN;
		};

	}());

	hav = (function () {

		var sin		= Math.sin,
			cos		= Math.cos,
			atan2	= Math.atan2,
			sqrt	= Math.sqrt,
			PI		= Math.PI;

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
				to		= points.to;
				from	= points.from;
				if ((to || false).constructor === Object && (from || false).constructor === Object) {
					LAT		= radians(to.lat - from.lat);
					LNG		= radians(to.lng - from.lng);
					lat		= LAT / 2;
					lng		= LNG / 2;
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
			};
		};

	}());

	function fromHexToDec(v) {
		return (typeof v === "string") ? parseInt(v, HEX) : (typeof v === "number") ? v : NaN;
	}

	function fromOctToDec(v) {
		return (typeof v === "string") ? parseInt(v, OCT) : (typeof v === "number") ? v : NaN;
	}

	/*
	 * Temperature
	 */

	function fromFToC(n) {
		return (typeof n === "number") ? (n - 32) / 1.8 : NaN;
	}

	function fromCToF(n) {
		return (typeof n === "number") ? (n * 1.8) + 32 : NaN;
	}

	function Temperature() {
		return temperature || (this instanceof Temperature ? temperature = this : new Temperature());
	}

	Temperature.prototype.fromFToC = fromFToC;
	Temperature.prototype.fromCToF = fromCToF;
	Temperature.prototype.convert = function (amount) {
		return {
			fromF: {
				toC: function () {
					return fromFToC(amount);
				}
			},
			fromC: {
				toF: function () {
					return fromCToF(amount);
				}
			}
		};
	};

	/*
	 * Weight
	 */

	function fromKgToGr(n) { // KG -> GR
		return (typeof n === "number") ? n * 1000 : NaN;
	}

	function fromKgToMg(n) { // KG -> GR -> MG
		return (typeof n === "number") ? (n * 1000) * 1000 : NaN;
	}

	function fromKgToOz(n) { // KG -> GR -> OZ
		return (typeof n === "number") ? (n * 1000) * GROZ : NaN;
	}

	function fromKgToLb(n) { // KG -> GR -> OZ -> LB
		return (typeof n === "number") ? ((n * 1000) * GROZ) / 16 : NaN;
	}

	function fromKgToSt(n) { // KG -> GR -> OZ -> LB -> ST
		return (typeof n === "number") ? (((n * 1000) * GROZ) / 16) / 14 : NaN;
	}

	function fromGrToKg(n) { // GR -> KG
		return (typeof n === "number") ? n / 1000 : NaN;
	}

	function fromGrToMg(n) { // GR -> KG
		return (typeof n === "number") ? n * 1000 : NaN;
	}

	function fromGrToOz(n) { // GR -> OZ
		return (typeof n === "number") ? n * GROZ : NaN;
	}

	function fromGrToLb(n) { // GR -> OZ -> LB
		return (typeof n === "number") ? (n * GROZ) / 16 : NaN;
	}

	function fromGrToSt(n) { // GR -> OZ -> LB -> ST
		return (typeof n === "number") ? ((n * GROZ) / 16) / 14 : NaN;
	}

	function fromMgToKg(n) { // MG -> GR -> KG
		return (typeof n === "number") ? (n / 1000) / 1000 : NaN;
	}

	function fromMgToGr(n) { // MG -> GR
		return (typeof n === "number") ? n / 1000 : NaN;
	}

	function fromMgToOz(n) { // MG -> GR -> OZ
		return (typeof n === "number") ? (n / 1000) * GROZ : NaN;
	}

	function fromMgToLb(n) { // MG -> GR -> OZ -> LB
		return (typeof n === "number") ? ((n / 1000) * GROZ) / 16 : NaN;
	}

	function fromMgToSt(n) { // MG -> GR -> OZ -> LB -> ST
		return (typeof n === "number") ? (((n / 1000) * GROZ) / 16) / 14 : NaN;
	}

	function fromOzToMg(n) { // OZ -> GR -> MG
		return (typeof n === "number") ? (n * OZGR) * 1000 : NaN;
	}

	function fromOzToSt(n) { // OZ -> ST
		return (typeof n === "number") ? (n / 16) / 14 : NaN;
	}

	function fromOzToLb(n) { // OZ -> LB
		return (typeof n === "number") ? n / 16 : NaN;
	}

	function fromLbToKg(n) { //LB -> OZ -> GR -> KG
		return (typeof n === "number") ? ((n * 16) * OZGR) / 1000 : NaN;
	}

	function fromLbToGr(n) { // LB -> OZ -> GR
		return (typeof n === "number") ? (n * 16) * OZGR : NaN;
	}

	function fromLbToMg(n) { // LB -> OZ -> GR -> MG
		return (typeof n === "number") ? ((n * 16) * OZGR) * 1000 : NaN;
	}

	function fromLbToSt(n) { // LB -> ST
		return (typeof n === "number") ? n / 14 : NaN;
	}

	function fromLbToOz(n) { // LB -> OZ
		return (typeof n === "number") ? n * 16 : NaN;
	}

	function fromStToKg(n) { // ST -> LB -> OZ -> GR -> KG
		return (typeof n === "number") ? (((n * 14) * 16) * OZGR) / 1000 : NaN;
	}

	function fromStToGr(n) { // ST -> LB -> OZ -> GR
		return (typeof n === "number") ? ((n * 14) * 16) * OZGR : NaN;
	}

	function fromStToMg(n) { // ST -> LB -> OZ -> GR -> MG
		return (typeof n === "number") ? (((n * 14) * 16) * OZGR) * 1000 : NaN;
	}

	function fromStToOz(n) { // ST -> LB -> OZ
		return (typeof n === "number") ? (n * 14) * 16 : NaN;
	}

	function fromStToLb(n) { // ST -> LB
		return (typeof n === "number") ? n * 14 : NaN;
	}

	function fromOzToKg(n) { // OZ -> GR -> KG
		return (typeof n === "number") ? (n * OZGR) / 1000 : NaN;
	}

	function fromOzToGr(n) { // OZ -> GR
		return (typeof n === "number") ? n * OZGR : NaN;
	}

	function Weight() {
		return weight || (this instanceof Weight ? weight = this : new Weight());
	}

	Weight.prototype.fromKgToGr = fromKgToGr;
	Weight.prototype.fromKgToMg = fromKgToMg;
	Weight.prototype.fromKgToOz = fromKgToOz;
	Weight.prototype.fromKgToLb = fromKgToLb;
	Weight.prototype.fromKgToSt = fromKgToSt;

	Weight.prototype.fromGrToKg = fromGrToKg;
	Weight.prototype.fromGrToMg = fromGrToMg;
	Weight.prototype.fromGrToOz = fromGrToOz;
	Weight.prototype.fromGrToLb = fromGrToLb;
	Weight.prototype.fromGrToSt = fromGrToSt;

	Weight.prototype.fromMgToKg = fromMgToKg;
	Weight.prototype.fromMgToGr = fromMgToGr;
	Weight.prototype.fromMgToOz = fromMgToOz;
	Weight.prototype.fromMgToLb = fromMgToLb;
	Weight.prototype.fromMgToSt = fromMgToSt;

	Weight.prototype.fromOzToKg = fromOzToKg;
	Weight.prototype.fromOzToGr = fromOzToGr;
	Weight.prototype.fromOzToMg = fromOzToMg;
	Weight.prototype.fromOzToLb = fromOzToLb;
	Weight.prototype.fromOzToSt = fromOzToSt;

	Weight.prototype.fromLbToKg = fromLbToKg;
	Weight.prototype.fromLbToGr = fromLbToGr;
	Weight.prototype.fromLbToMg = fromLbToMg;
	Weight.prototype.fromLbToOz = fromLbToOz;
	Weight.prototype.fromLbToSt = fromLbToSt;

	Weight.prototype.fromStToKg = fromStToKg;
	Weight.prototype.fromStToGr = fromStToGr;
	Weight.prototype.fromStToMg = fromStToMg;
	Weight.prototype.fromStToLb = fromStToLb;
	Weight.prototype.fromStToOz = fromStToOz;

	Weight.prototype.convert = function (amount) {
		return {
			fromKg: {
				toGr: function () {
					return fromKgToGr(amount);
				},
				toMg: function () {
					return fromKgToMg(amount);
				},
				toOz: function () {
					return fromKgToOz(amount);
				},
				toLb: function () {
					return fromKgToLb(amount);
				},
				toSt: function () {
					return fromKgToSt(amount);
				}
			},
			fromGr: {
				toKg: function () {
					return fromGrToKg(amount);
				},
				toMg: function () {
					return fromGrToMg(amount);
				},
				toOz: function () {
					return fromGrToOz(amount);
				},
				toLb: function () {
					return fromGrToLb(amount);
				},
				toSt: function () {
					return fromGrToSt(amount);
				}
			},
			fromMg: {
				toKg: function () {
					return fromMgToKg(amount);
				},
				toGr: function () {
					return fromMgToGr(amount);
				},
				toOz: function () {
					return fromMgToOz(amount);
				},
				toLb: function () {
					return fromMgToLb(amount);
				},
				toSt: function () {
					return fromMgToSt(amount);
				}
			},
			fromOz: {
				toKg: function () {
					return fromOzToKg(amount);
				},
				toGr: function () {
					return fromOzToGr(amount);
				},
				toMg: function () {
					return fromOzToMg(amount);
				},
				toLb: function () {
					return fromOzToLb(amount);
				},
				toSt: function () {
					return fromOzToSt(amount);
				}
			},
			fromLb: {
				toKg: function () {
					return fromLbToKg(amount);
				},
				toGr: function () {
					return fromLbToGr(amount);
				},
				toMg: function () {
					return fromLbToMg(amount);
				},
				toOz: function () {
					return fromLbToOz(amount);
				},
				toSt: function () {
					return fromLbToSt(amount);
				}
			},
			fromSt: {
				toKg: function () {
					return fromStToKg(amount);
				},
				toGr: function () {
					return fromStToGr(amount);
				},
				toMg: function () {
					return fromStToMg(amount);
				},
				toLb: function () {
					return fromStToLb(amount);
				},
				toOz: function () {
					return fromStToOz(amount);
				}
			}
		};
	};

	/*
	 * Distance
	 */

	function fromKmToMt(n) { // KM -> MT
		return (typeof n === "number") ? n * 1000 : NaN;
	}

	function fromKmToCm(n) { // KM -> MT -> CM
		return (typeof n === "number") ? (n * 1000) * 100 : NaN;
	}

	function fromKmToMm(n) { // KM -> MT -> CM -> MM
		return (typeof n === "number") ? ((n * 1000) * 100) * 10 : NaN;
	}

	function fromMtToKm(n) { // MT -> KM
		return (typeof n === "number") ? (n / 1000) : NaN;
	}

	function fromMtToCm(n) { // MT -> CM
		return (typeof n === "number") ? n * 100 : NaN;
	}

	function fromMtToMm(n) { // MT -> CM -> MM
		return (typeof n === "number") ? (n * 100) * 10 : NaN;
	}

	function fromCmToKm(n) { // CM -> MT -> KM
		return (typeof n === "number") ? (n / 100) / 1000 : NaN;
	}

	function fromCmToMt(n) { // CM -> MT
		return (typeof n === "number") ? n / 100 : NaN;
	}

	function fromCmToMm(n) { // CM -> MM
		return (typeof n === "number") ? n * 10 : NaN;
	}

	function fromMmToKm(n) { // MM -> CM -> MT -> KM
		return (typeof n === "number") ? ((n / 10) / 100) / 1000 : NaN;
	}

	function fromMmToMt(n) { // MM -> CM -> MT
		return (typeof n === "number") ? (n / 10) / 100 : NaN;
	}

	function fromMmToCm(n) { // MM -> CM
		return (typeof n === "number") ? n / 10 : NaN;
	}

	function fromInToFt(n) { // IN -> FT
		return (typeof n === "number") ? n / 12 : NaN;
	}

	function fromInToYd(n) { // IN -> FT -> YD
		return (typeof n === "number") ? (n / 12) / 3 : NaN;
	}

	function fromInToMi(n) { // IN -> FT -> YD -> MI
		return (typeof n === "number") ? ((n / 12) / 3) / 1760 : NaN;
	}

	function fromFtToIn(n) { // FT -> IN
		return (typeof n === "number") ? n * 12 : NaN;
	}

	function fromFtToYd(n) { // FT -> YD
		return (typeof n === "number") ? n / 3 : NaN;
	}

	function fromFtToMi(n) { // FT -> YD -> MI
		return (typeof n === "number") ? (n / 3) / 1760 : NaN;
	}

	function fromYdToIn(n) { // YD -> FT -> IN
		return (typeof n === "number") ? (n * 3) * 12 : NaN;
	}

	function fromYdToFt(n) { // YD -> FT
		return (typeof n === "number") ? n * 3 : NaN;
	}

	function fromYdToMi(n) { // YD -> MI
		return (typeof n === "number") ? n / 1760 : NaN;
	}

	function Distance() {
		return distance || (this instanceof Distance ? distance = this : new Distance());
	}

	Distance.prototype.fromKmToMt = fromKmToMt;
	Distance.prototype.fromKmToCm = fromKmToCm;
	Distance.prototype.fromKmToMm = fromKmToMm;

	Distance.prototype.fromMtToKm = fromMtToKm;
	Distance.prototype.fromMtToCm = fromMtToCm;
	Distance.prototype.fromMtToMm = fromMtToMm;

	Distance.prototype.fromCmToKm = fromCmToKm;
	Distance.prototype.fromCmToMt = fromCmToMt;
	Distance.prototype.fromCmToMm = fromCmToMm;

	Distance.prototype.fromMmToKm = fromMmToKm;
	Distance.prototype.fromMmToMt = fromMmToMt;
	Distance.prototype.fromMmToCm = fromMmToCm;

	Distance.prototype.fromInToFt = fromInToFt;
	Distance.prototype.fromInToYd = fromInToYd;
	Distance.prototype.fromInToMi = fromInToMi;

	Distance.prototype.fromFtToIn = fromFtToIn;
	Distance.prototype.fromFtToYd = fromFtToYd;
	Distance.prototype.fromFtToMi = fromFtToMi;

	Distance.prototype.fromYdToIn = fromYdToIn;
	Distance.prototype.fromYdToFt = fromYdToFt;
	Distance.prototype.fromYdToMi = fromYdToMi;

	Distance.prototype.convert = function (amount) {
		return {
			fromKm: {
				toMt: function () {
					return fromKmToMt(amount);
				},
				toCm: function () {
					return fromKmToCm(amount);
				},
				toMm: function () {
					return fromKmToMm(amount);
				}
			},
			fromMt: {
				toKm: function () {
					return fromMtToKm(amount);
				},
				toCm: function () {
					return fromMtToCm(amount);
				},
				toMm: function () {
					return fromMtToMm(amount);
				}
			},
			fromCm: {
				toKm: function () {
					return fromCmToKm(amount);
				},
				toMt: function () {
					return fromCmToMt(amount);
				},
				toMm: function () {
					return fromCmToMm(amount);
				}
			},
			fromMm: {
				toKm: function () {
					return fromMmToKm(amount);
				},
				toMt: function () {
					return fromMmToMt(amount);
				},
				toCm: function () {
					return fromMmToCm(amount);
				}
			},
			fromIn: {
				toFt: function () {
					return fromInToFt(amount);
				},
				toYd: function () {
					return fromInToYd(amount);
				},
				toMi: function () {
					return fromInToMi(amount);
				}
			},
			fromFt: {
				toIn: function () {
					return fromFtToIn(amount);
				},
				toYd: function () {
					return fromFtToYd(amount);
				},
				toMi: function () {
					return fromFtToMi(amount);
				}
			},
			fromYd: {
				toIn: function () {
					return fromYdToIn(amount);
				},
				toFt: function () {
					return fromYdToFt(amount);
				},
				toMi: function () {
					return fromYdToMi(amount);
				}
			}
		};
	};

	function NumberEngine() {
		return numberEngine || (this instanceof NumberEngine ? numberEngine = this : new NumberEngine());
	}

	NumberEngine.prototype.fib = fib;
	NumberEngine.prototype.hav = hav;

	NumberEngine.prototype.fromHexToDec = fromHexToDec;
	NumberEngine.prototype.fromOctToDec = fromOctToDec;

	/*
	NumberEngine.prototype.fromFToC = fromFToC;
	NumberEngine.prototype.fromCToF = fromCToF;

	NumberEngine.prototype.fromKgToGr = fromKgToGr;
	NumberEngine.prototype.fromKgToMg = fromKgToMg;
	NumberEngine.prototype.fromKgToOz = fromKgToOz;
	NumberEngine.prototype.fromKgToLb = fromKgToLb;
	NumberEngine.prototype.fromKgToSt = fromKgToSt;

	NumberEngine.prototype.fromGrToKg = fromGrToKg;
	NumberEngine.prototype.fromGrToMg = fromGrToMg;
	NumberEngine.prototype.fromGrToOz = fromGrToOz;
	NumberEngine.prototype.fromGrToLb = fromGrToLb;
	NumberEngine.prototype.fromGrToSt = fromGrToSt;

	NumberEngine.prototype.fromMgToKg = fromMgToKg;
	NumberEngine.prototype.fromMgToGr = fromMgToGr;
	NumberEngine.prototype.fromMgToOz = fromMgToOz;
	NumberEngine.prototype.fromMgToLb = fromMgToLb;
	NumberEngine.prototype.fromMgToSt = fromMgToSt;

	NumberEngine.prototype.fromOzToKg = fromOzToKg;
	NumberEngine.prototype.fromOzToGr = fromOzToGr;
	NumberEngine.prototype.fromOzToMg = fromOzToMg;
	NumberEngine.prototype.fromOzToLb = fromOzToLb;
	NumberEngine.prototype.fromOzToSt = fromOzToSt;

	NumberEngine.prototype.fromLbToKg = fromLbToKg;
	NumberEngine.prototype.fromLbToGr = fromLbToGr;
	NumberEngine.prototype.fromLbToMg = fromLbToMg;
	NumberEngine.prototype.fromLbToOz = fromLbToOz;
	NumberEngine.prototype.fromLbToSt = fromLbToSt;

	NumberEngine.prototype.fromStToKg = fromStToKg;
	NumberEngine.prototype.fromStToGr = fromStToGr;
	NumberEngine.prototype.fromStToMg = fromStToMg;
	NumberEngine.prototype.fromStToLb = fromStToLb;
	NumberEngine.prototype.fromStToOz = fromStToOz;

	NumberEngine.prototype.fromKmToMt = fromKmToMt;
	NumberEngine.prototype.fromKmToCm = fromKmToCm;
	NumberEngine.prototype.fromKmToMm = fromKmToMm;

	NumberEngine.prototype.fromMtToKm = fromMtToKm;
	NumberEngine.prototype.fromMtToCm = fromMtToCm;
	NumberEngine.prototype.fromMtToMm = fromMtToMm;

	NumberEngine.prototype.fromCmToKm = fromCmToKm;
	NumberEngine.prototype.fromCmToMt = fromCmToMt;
	NumberEngine.prototype.fromCmToMm = fromCmToMm;

	NumberEngine.prototype.fromMmToKm = fromMmToKm;
	NumberEngine.prototype.fromMmToMt = fromMmToMt;
	NumberEngine.prototype.fromMmToCm = fromMmToCm;

	NumberEngine.prototype.fromInToFt = fromInToFt;
	NumberEngine.prototype.fromInToYd = fromInToYd;
	NumberEngine.prototype.fromInToMi = fromInToMi;

	NumberEngine.prototype.fromFtToIn = fromFtToIn;
	NumberEngine.prototype.fromFtToYd = fromFtToYd;
	NumberEngine.prototype.fromFtToMi = fromFtToMi;

	NumberEngine.prototype.fromYdToIn = fromYdToIn;
	NumberEngine.prototype.fromYdToFt = fromYdToFt;
	NumberEngine.prototype.fromYdToMi = fromYdToMi;
	*/

	NumberEngine.prototype.Temperature = Temperature;
	NumberEngine.prototype.Weight = Weight;
	NumberEngine.prototype.Distance = Distance;

	NumberEngine.prototype.convert = function (amount) {
		throw "Not implemented";
	};

	return NumberEngine;

}());