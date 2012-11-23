var DifferenceEngine	= (function () {

	"use strict";

	var has,

		model,
		order,

		extract;

	has = (function () {

		var i,
			j,
			key;

		return function has(array, KEY) {

			i = 0;
			j = array.length;
			for (i = i; i < j; i = i + 1) {
				key = array[i];
				if (key === KEY) {
					return true;
				}
			}

			return null;

		};

	}());

	model = (function () {

		var index,
			total,
			value,
			find,
			L,
			R;

		find = (function () {

			var i,
				j,
				IDENTIFIER;

			return function find(collection, identifier) {

				i = 0;
				j = collection.length;
				for (i = i; i < j; i = i + 1) {
					IDENTIFIER = collection[i];
					if (IDENTIFIER === identifier) {
						return i;
					}
				}
				return null;

			};
		}());

		L = (function () {

			var j,
				n,
				IDENTIFIER;

			return function L(i, positive, negative) {

				j = 0;
				while (i > j) {
					i = i - 1;
					IDENTIFIER = positive[i];
					if ((n = (find(negative, IDENTIFIER))) !== null) {
						return n;
					}
				}
				return null;

			};

		}());

		R = (function () {

			var j,
				n,
				IDENTIFIER;

			return function R(i, positive, negative) {

				j = (positive.length - 1);
				while (i < j) {
					i = i + 1;
					IDENTIFIER = positive[i];
					if ((n = (find(negative, IDENTIFIER))) !== null) {
						return n;
					}
				}
				return null;

			};

		}());

		return function model(positive, negative, identifier) {

			if (((positive || false).constructor === Array) && ((negative || false).constructor === Array)) {

				if ((index = (find(positive, identifier))) !== null) {

					total = negative.length;
					if (index === 0) {

						return {
							step: "first",
							index: 0,
							total: total + 1,
							first: true,
							last: total === 0,
							only: total === 0,
							alpha: null,
							omega: negative[0] || null,
							model: positive[identifier] || null
						};

					} else {

						if ((value = (L(index, positive, negative, identifier))) !== null) {

							return {
								step: "insert, L",
								index: (value + 1),
								total: (total + 1),
								first: total === 0,
								last: total === (value + 1),
								only: total === 0,
								alpha: negative[value] || null,
								omega: negative[value + 1] || null,
								model: positive[identifier] || null
							};

						} else {

							if ((value = (R(index, positive, negative, identifier))) !== null) {

								return {
									step: "insert, R",
									index: value,
									total: total + 1,
									first: value === 0,
									last: total === 0,
									only: total === 0,
									alpha: negative[value - 1] || null,
									omega: negative[value] || null,
									model: positive[identifier] || null
								};

							} else {

								if (index < total) {

									return {
										step: "before",
										index: 0,
										total: total + 1,
										first: true,
										last: total === 0,
										only: total === 0,
										alpha: null,
										omega: negative[0] || null,
										model: positive[identifier] || null
									};

								} else {

									return {
										step: "append",
										index: total,
										total: total + 1,
										first: total === 0,
										last: true,
										only: total === 0,
										alpha: negative[total - 1] || null,
										omega: null,
										model: positive[identifier] || null
									};

								}

							}

						}

					}

				}

			}
			return null;

		};

	}());

	order = (function () {

		var extract = (function () {

			var i,
				j,
				n,
				ALPHA,
				OMEGA;

			return function extract(alpha, omega, extracted) {

				i = 0;
				j = alpha.length;
				n = 0;
				for (i = i; i < j; i = i + 1) {
					ALPHA = alpha[i];
					OMEGA = omega[n];
					if (ALPHA !== OMEGA) {
						extracted.push(ALPHA);
					} else {
						n = n + 1;
					}
				}
				return extracted;

			};

		}());

		return function order(positive, negative) {

			if (((positive || false).constructor === Array) && ((negative || false).constructor === Array)) {
				return extract(positive, negative, []);
			}
			return [];

		};

	}());

	extract	= (function () {

		var i,
			j,
			key;

		return function extract(alpha, omega, condition, extracted) {

			i = 0;
			j = alpha.length;
			for (i = i; i < j; i = i + 1) {
				key = alpha[i];
				if (has(omega, key) === condition) {
					extracted.push(key);
				}
			}
			return extracted;

		};

	}());

	function positive(alpha, omega) {

		if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
			return extract(alpha, omega, true, []);
		}
		return [];

	}

	function negative(alpha, omega) {

		if (((alpha || false).constructor === Array) && ((omega || false).constructor === Array)) {
			return extract(alpha, omega, null, []);
		}
		return [];

	}

	function DifferenceEngine() {

		this.model	= model;
		this.order	= order;
		
		this.positive	= positive;
		this.negative	= negative;
		
		return this;

	}

	return DifferenceEngine;

}());