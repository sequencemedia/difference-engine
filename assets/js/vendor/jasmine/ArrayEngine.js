describe("ArrayEngine", function () {

	var ARRAY,
		arrayEngine;

	beforeEach(function () {

		ARRAY       = [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z" ];
		arrayEngine = new ArrayEngine(ARRAY);

	});

	describe("Assigning an array to the instance, and removing that assignment", function () {

		it("Accepts an array and returns the instance", function () {

			spyOn(arrayEngine, "begin").andCallThrough();
			spyOn(arrayEngine, "reset");

			expect(arrayEngine.begin(ARRAY)).toBe(arrayEngine);
			expect(arrayEngine.reset).not.toHaveBeenCalled();

		});

		it("Does not accept any other data type but returns the instance", function () {

			spyOn(arrayEngine, "begin").andCallThrough();
			spyOn(arrayEngine, "reset").andCallThrough();

			expect(arrayEngine.begin(jasmine.any(Object))).toBe(arrayEngine);
			expect(arrayEngine.reset).toHaveBeenCalled();

			expect(arrayEngine.begin(jasmine.any(Number))).toBe(arrayEngine);
			expect(arrayEngine.reset).toHaveBeenCalled();

			expect(arrayEngine.begin(jasmine.any(String))).toBe(arrayEngine);
			expect(arrayEngine.reset).toHaveBeenCalled();

			expect(arrayEngine.begin(jasmine.any(Boolean))).toBe(arrayEngine);
			expect(arrayEngine.reset).toHaveBeenCalled();

		});

	});

	describe("Array item comparison", function () {

		it("Finds the item with the largest value", function () {

			expect(arrayEngine.max()).toBe("Z");

		});

		it("Finds the item with the smallest value", function () {

			expect(arrayEngine.min()).toBe("A");

		});

	});

	describe("Array item mapping", function () {

		it("Calls the callback function", function () {

			var spy = jasmine.createSpy();
			arrayEngine.map(spy);
			expect(spy).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(String), ARRAY.length);
			expect(spy.callCount).toBe(ARRAY.length);

		});

		it("Maps the value of an item to another value", function () {

			expect(arrayEngine.map(function (i, v, j) { return i % 2; })).toEqual([ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1 ]);

		});

	});

	describe("Array item iteration", function () {

		var forward,
			reverse;

		it("Calls the callback function", function () {

			var spy = jasmine.createSpy();
			arrayEngine.map(spy);
			expect(spy).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(String), ARRAY.length);
			expect(spy.callCount).toBe(ARRAY.length);

		});

		it("Iterates forward from the start to the end", function () {

			forward = [];
			expect(arrayEngine.iterateForward(function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
			expect(forward).toEqual([
				{ i: 0, v: "A", j: 25 },
				{ i: 1, v: "B", j: 25 },
				{ i: 2, v: "C", j: 25 },
				{ i: 3, v: "D", j: 25 },
				{ i: 4, v: "E", j: 25 },
				{ i: 5, v: "F", j: 25 },
				{ i: 6, v: "G", j: 25 },
				{ i: 7, v: "H", j: 25 },
				{ i: 8, v: "I", j: 25 },
				{ i: 9, v: "J", j: 25 },
				{ i: 10, v: "K", j: 25 },
				{ i: 11, v: "L", j: 25 },
				{ i: 12, v: "M", j: 25 },
				{ i: 13, v: "N", j: 25 },
				{ i: 14, v: "O", j: 25 },
				{ i: 15, v: "P", j: 25 },
				{ i: 16, v: "Q", j: 25 },
				{ i: 17, v: "R", j: 25 },
				{ i: 18, v: "S", j: 25 },
				{ i: 19, v: "T", j: 25 },
				{ i: 20, v: "U", j: 25 },
				{ i: 21, v: "V", j: 25 },
				{ i: 22, v: "W", j: 25 },
				{ i: 23, v: "X", j: 25 },
				{ i: 24, v: "Y", j: 25 },
				{ i: 25, v: "Z", j: 25 }
			]);

		});

		it("Iterates reverse from the end to the start", function () {

			reverse = [];
			expect(arrayEngine.iterateReverse(function (i, v, j) { reverse.push({ i: i, v: v, j: j }); })).toBe(true);
			expect(reverse).toEqual([
				{ i: 25, v: "Z", j: 25 },
				{ i: 24, v: "Y", j: 25 },
				{ i: 23, v: "X", j: 25 },
				{ i: 22, v: "W", j: 25 },
				{ i: 21, v: "V", j: 25 },
				{ i: 20, v: "U", j: 25 },
				{ i: 19, v: "T", j: 25 },
				{ i: 18, v: "S", j: 25 },
				{ i: 17, v: "R", j: 25 },
				{ i: 16, v: "Q", j: 25 },
				{ i: 15, v: "P", j: 25 },
				{ i: 14, v: "O", j: 25 },
				{ i: 13, v: "N", j: 25 },
				{ i: 12, v: "M", j: 25 },
				{ i: 11, v: "L", j: 25 },
				{ i: 10, v: "K", j: 25 },
				{ i: 9, v: "J", j: 25 },
				{ i: 8, v: "I", j: 25 },
				{ i: 7, v: "H", j: 25 },
				{ i: 6, v: "G", j: 25 },
				{ i: 5, v: "F", j: 25 },
				{ i: 4, v: "E", j: 25 },
				{ i: 3, v: "D", j: 25 },
				{ i: 2, v: "C", j: 25 },
				{ i: 1, v: "B", j: 25 },
				{ i: 0, v: "A", j: 25 }
			]);

		});

		describe("Iterating between the first and second index", function () {

			describe("Iterating forward if the first index is smaller than the second", function () {

				var forward, reverse;

				it("Returns all items between the first and second index inclusive", function () {

					forward = [];
					expect(arrayEngine.iterateBetween(0, 25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 0, v: "A", j: 25 },
						{ i: 1, v: "B", j: 25 },
						{ i: 2, v: "C", j: 25 },
						{ i: 3, v: "D", j: 25 },
						{ i: 4, v: "E", j: 25 },
						{ i: 5, v: "F", j: 25 },
						{ i: 6, v: "G", j: 25 },
						{ i: 7, v: "H", j: 25 },
						{ i: 8, v: "I", j: 25 },
						{ i: 9, v: "J", j: 25 },
						{ i: 10, v: "K", j: 25 },
						{ i: 11, v: "L", j: 25 },
						{ i: 12, v: "M", j: 25 },
						{ i: 13, v: "N", j: 25 },
						{ i: 14, v: "O", j: 25 },
						{ i: 15, v: "P", j: 25 },
						{ i: 16, v: "Q", j: 25 },
						{ i: 17, v: "R", j: 25 },
						{ i: 18, v: "S", j: 25 },
						{ i: 19, v: "T", j: 25 },
						{ i: 20, v: "U", j: 25 },
						{ i: 21, v: "V", j: 25 },
						{ i: 22, v: "W", j: 25 },
						{ i: 23, v: "X", j: 25 },
						{ i: 24, v: "Y", j: 25 },
						{ i: 25, v: "Z", j: 25 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(2, 23, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 2, v: "C", j: 23 },
						{ i: 3, v: "D", j: 23 },
						{ i: 4, v: "E", j: 23 },
						{ i: 5, v: "F", j: 23 },
						{ i: 6, v: "G", j: 23 },
						{ i: 7, v: "H", j: 23 },
						{ i: 8, v: "I", j: 23 },
						{ i: 9, v: "J", j: 23 },
						{ i: 10, v: "K", j: 23 },
						{ i: 11, v: "L", j: 23 },
						{ i: 12, v: "M", j: 23 },
						{ i: 13, v: "N", j: 23 },
						{ i: 14, v: "O", j: 23 },
						{ i: 15, v: "P", j: 23 },
						{ i: 16, v: "Q", j: 23 },
						{ i: 17, v: "R", j: 23 },
						{ i: 18, v: "S", j: 23 },
						{ i: 19, v: "T", j: 23 },
						{ i: 20, v: "U", j: 23 },
						{ i: 21, v: "V", j: 23 },
						{ i: 22, v: "W", j: 23 },
						{ i: 23, v: "X", j: 23 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(21, 25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 21, v: "V", j: 25 },
						{ i: 22, v: "W", j: 25 },
						{ i: 23, v: "X", j: 25 },
						{ i: 24, v: "Y", j: 25 },
						{ i: 25, v: "Z", j: 25 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(23, 25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 23, v: "X", j: 25 },
						{ i: 24, v: "Y", j: 25 },
						{ i: 25, v: "Z", j: 25 }
					]);

				});

				it("Returns the first item if both indexes are the first index", function () {

					/*
					 * Positive or negative zero should be irrelevant, here.
					 */

					forward = [];
					expect(arrayEngine.iterateBetween(-0, -0, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([{ i: 0, v: "A", j: 0 }]);

					forward = [];
					expect(arrayEngine.iterateBetween(-0, +0, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([{ i: 0, v: "A", j: 0 }]);

					forward = [];
					expect(arrayEngine.iterateBetween(+0, +0, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([{ i: 0, v: "A", j: 0 }]);

				});

				it("Returns the last item if both indexes are the last index", function () {

					forward = [];
					expect(arrayEngine.iterateBetween(25, 25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([{ i: 25, v: "Z", j: 25 }]);

				});

				it("Resolves both the first and second index to positive numbers if they are negative numbers and returns all items between the first and second index inclusive", function () {

					forward = [];
					expect(arrayEngine.iterateBetween(-5, -1, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 20, v: "U", j: 24 },
						{ i: 21, v: "V", j: 24 },
						{ i: 22, v: "W", j: 24 },
						{ i: 23, v: "X", j: 24 },
						{ i: 24, v: "Y", j: 24 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-5, -3, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 20, v: "U", j: 22 },
						{ i: 21, v: "V", j: 22 },
						{ i: 22, v: "W", j: 22 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-25, -21, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 0, v: "A", j: 4 },
						{ i: 1, v: "B", j: 4 },
						{ i: 2, v: "C", j: 4 },
						{ i: 3, v: "D", j: 4 },
						{ i: 4, v: "E", j: 4 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-25, -23, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 0, v: "A", j: 2 },
						{ i: 1, v: "B", j: 2 },
						{ i: 2, v: "C", j: 2 }
					]);

				});

			});

			describe("Iterating reverse if the first index is larger than the second", function () {

				it("Returns all items between the second and first items inclusive", function () {

					reverse = [];
					expect(arrayEngine.iterateBetween(25, 0, function (i, v, j) { reverse.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(reverse).toEqual([
						{ i: 25, v: "Z", j: 0 },
						{ i: 24, v: "Y", j: 0 },
						{ i: 23, v: "X", j: 0 },
						{ i: 22, v: "W", j: 0 },
						{ i: 21, v: "V", j: 0 },
						{ i: 20, v: "U", j: 0 },
						{ i: 19, v: "T", j: 0 },
						{ i: 18, v: "S", j: 0 },
						{ i: 17, v: "R", j: 0 },
						{ i: 16, v: "Q", j: 0 },
						{ i: 15, v: "P", j: 0 },
						{ i: 14, v: "O", j: 0 },
						{ i: 13, v: "N", j: 0 },
						{ i: 12, v: "M", j: 0 },
						{ i: 11, v: "L", j: 0 },
						{ i: 10, v: "K", j: 0 },
						{ i: 9, v: "J", j: 0 },
						{ i: 8, v: "I", j: 0 },
						{ i: 7, v: "H", j: 0 },
						{ i: 6, v: "G", j: 0 },
						{ i: 5, v: "F", j: 0 },
						{ i: 4, v: "E", j: 0 },
						{ i: 3, v: "D", j: 0 },
						{ i: 2, v: "C", j: 0 },
						{ i: 1, v: "B", j: 0 },
						{ i: 0, v: "A", j: 0 }
					]);

				});

				it("Resolves both the second and first index to positive numbers if they are negative numbers and returns all items between the second and first index inclusive", function () {

					forward = [];
					expect(arrayEngine.iterateBetween(-1, -5, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 24, v: "Y", j: 20 },
						{ i: 23, v: "X", j: 20 },
						{ i: 22, v: "W", j: 20 },
						{ i: 21, v: "V", j: 20 },
						{ i: 20, v: "U", j: 20 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-3, -5, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 22, v: "W", j: 20 },
						{ i: 21, v: "V", j: 20 },
						{ i: 20, v: "U", j: 20 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-21, -25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 4, v: "E", j: 0 },
						{ i: 3, v: "D", j: 0 },
						{ i: 2, v: "C", j: 0 },
						{ i: 1, v: "B", j: 0 },
						{ i: 0, v: "A", j: 0 }
					]);

					forward = [];
					expect(arrayEngine.iterateBetween(-23, -25, function (i, v, j) { forward.push({ i: i, v: v, j: j }); })).toBe(true);
					expect(forward).toEqual([
						{ i: 2, v: "C", j: 0 },
						{ i: 1, v: "B", j: 0 },
						{ i: 0, v: "A", j: 0 }
					]);

				});

			});

		});

	});

	describe("Array item seeking", function () {

		it("Returns the index of the first item to match the argument", function () {

			var i, j;

			/*
			 * Forward
			 */
			i = 0;
			j = ARRAY.length;

			do {

				expect(arrayEngine.indexOf(ARRAY[i])).toBe(i);

			} while (++i < j);

			/*
			 * Reverse
			 */
			i = ARRAY.length - 1;
			j = -1;
			do {

				expect(arrayEngine.indexOf(ARRAY[i])).toBe(i);

			} while (--i > j);

		});

		it("Returns \"null\" if the argument cannot be found", function () {

			expect(arrayEngine.indexOf(jasmine.any(Object))).toBe(null);
			expect(arrayEngine.indexOf(jasmine.any(String))).toBe(null);
			expect(arrayEngine.indexOf(jasmine.any(Number))).toBe(null);
			expect(arrayEngine.indexOf(jasmine.any(Boolean))).toBe(null);

		});

	});

});
