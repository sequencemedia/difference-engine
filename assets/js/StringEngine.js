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
var StringEngine	= (function () {

	"use strict";

	var stringEngine,

		CHARCODE = [],
		HTMLCODE = [],
		HTMLNAME = [],

		OCT = 8,
		DEC = 10,
		HEX = 16;

	function charCodeFor(i) {

		throw "Not implemented";
		return null;

	}

	function htmlCodeFor(s) {

		throw "Not implemented";
		return null;

	}

	function htmlNameFor(s) {

		throw "Not implemented";
		return null;

	}

	function charOf(s) {

		throw "Not implemented";
		return null;

	}

	function htmlOf(s) {

		throw "Not implemented";
		return null;

	}

	function charAt(i) {

		throw "Not implemented";
		return null;

	}

	function htmlAt(i) {

		throw "Not implemented";
		return null;

	}

	function fromCharCode(i) {

		return CHARCODE[i] || (CHARCODE[i] = charCodeFor(i));

	}

	function fromHtmlCode(s) {

		return HTMLCODE[s] || (HTMLCODE[s] = htmlCodeFor(s));

	}

	function fromHtmlName(s) {

		return HTMLNAME[s] || (HTMLNAME[s] = htmlNameFor(s));

	}

	function fromDecToHex(v) {
		return (typeof v === "number") ? v.toString(HEX) : (typeof v === "string") ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(HEX) : null;
	}

	function fromDecToOct(v) {
		return (typeof v === "number") ? v.toString(OCT) : (typeof v === "string") ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(OCT) : null;
	}

	function StringEngine() {

		return stringEngine || (this instanceof StringEngine ? stringEngine = this : new StringEngine());

	}

	StringEngine.prototype.charOf	= charOf;
	StringEngine.prototype.htmlOf	= htmlOf;
	StringEngine.prototype.charAt	= charAt;
	StringEngine.prototype.htmlAt	= htmlAt;

	StringEngine.prototype.fromCharCode	= fromCharCode;
	StringEngine.prototype.fromHtmlCode	= fromHtmlCode;
	StringEngine.prototype.fromHtmlName	= fromHtmlName;

	StringEngine.prototype.fromDecToHex	= fromDecToHex;
	StringEngine.prototype.fromDecToOct	= fromDecToOct;

	return StringEngine;

}());