#
# Copyright © 2012 Jonathan Perry and Sequence Media Limited
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#
#
# "ArrayEngine" defines methods for manipulating arrays. Some of those methods
# already exist within the global context. This is a port from JavaScript to 
# LiveScript: for performance use the JS version.
#
# @class ArrayEngine
# @constructor
#
class ArrayEngine 
	"use strict"
	(array) ->
		if array
			@begin array
		else
			@reset!
	var ARRAY, 
		i, 
		j, 
		m, 
		lowerBound, 
		upperBound, 
		lastIndex, 
		lastValue
	window.ArrayEngine = ArrayEngine
	indexOf : (v) ->
		if lastValue == v 
			return lastIndex
		else if upperBound or lowerBound
			x = Math.min y = j, lastIndex + 1
			for n from x to y by +1
				if ARRAY[n] == v
					lastValue := v
					return lastIndex := n
			x = Math.max y = m, lastIndex - 1
			for n from x to y by -1
				if ARRAY[n] == v
					lastValue := v
					return lastIndex := n
		null
	begin : (array) ->
		if (array || false).constructor == Array 
			then
				i := +0
				j := (ARRAY := array.slice!).length
				m := -1
				lowerBound := i
				upperBound := j - 1
				lastIndex := m
				lastValue := null
			else @reset!
		@
	reset : ->
		i := +0
		j := (ARRAY := []).length
		m := -1
		lowerBound := i
		upperBound := m
		lastIndex := m
		lastValue := null
		@
	bite : (x, y) ->
		if typeof x == "number"
			pow = Math.pow
			N = Number.NEGATIVE_INFINITY
			max	= Math.max
			min	= Math.min
			l = lowerBound
			u = upperBound
			if typeof y == "number"
				if (pow x, m) == N && (pow y, m) == N
					return ARRAY.slice l .reverse!
				else
					x = max l, min u, if x > m then x else x + u
					y = min u, max l, if y > m then y else y + u
					return if x > y then ARRAY.slice y, x + 1 .reverse! else ARRAY.slice x, y + 1
			if (pow x, m) == N
				return ARRAY.slice u
			else
				x = max l, min u, if x > m then x else x + u
				return ARRAY.slice x
		[]
	map : (method) ->
		if (method || false).constructor == Function
			then 
				if ((z = lowerBound) < j) 
					then
						array = []
						do 
							array.push method.call ARRAY, z, ARRAY[z], j
						while ++z < j
						return array
		[]
	max	: do ->
		max = Math.max
		MAX = (a) ->
			x = a[0] 
			z = 1
			do 
				if (y = a[z]) > x then x = y
			while ++z < j
			return x
		->
			return if i < j then (if isNaN z = max.apply (a = ARRAY), a then MAX(a) else z) else null
	min	: do ->
		min = Math.min;
		MIN = (a) ->
			x = a[0]
			z = 1
			do 
				if (y = a[z]) < x then x = y
			while ++z < j
			return x
		->
			return if i < j then (if isNaN z = min.apply (a = ARRAY), a then MIN(a) else z) else null
	iterate : (method) ->
		if (method || false).constructor == Function
			throw "Not implimented"
		false
	iterateForward : (method) ->
		if (method || false).constructor == Function			
			if (z = lowerBound) < j
				u = upperBound
				do
					method.call ARRAY, z, ARRAY[z], u
				while ++z < j
				return true
		false
	iterateReverse : (method) ->
		if (method || false).constructor == Function
			if (z = u = upperBound) < j				
				do 
					method.call ARRAY, z, ARRAY[z], u
				while m < --z
				return true
		false
	iterateBetween : (x, y, method) ->
		if typeof x == "number" && typeof y == "number" && (method || false).constructor == Function
			a	= ARRAY
			l	= lowerBound
			u	= upperBound
			max	= Math.max
			min	= Math.min
			x	= max l, min u, if x > m then x else x + u
			y	= min u, max l, if y > m then y else y + u
			if x > y
				z = y - 1;
				do
					method.call a, x, a[x], y
				while z < --x
				return true
			else
				z = y + 1
				do
					method.call a, x, a[x], y
				while ++x < z
				return true
		false