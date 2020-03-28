# difference-engine

```sh
npm i -P difference-engine
```

## DifferenceEngine

```javascript
const { DifferenceEngine } = require('./lib')
```

### `inclusive`

Accepts two arrays. Returns an array containing items which appear in both arrays.

```javascript
const alpha = ['A', 'B', 'C']
const omega = ['C', 'D', 'E']

const array = DifferenceEngine.inclusive(alpha, omega) // returns ['C']
```

### `exclusive`

Accepts two arrays. Returns an array containing items which appear in the first array but not the second.

```javascript
const alpha = ['A', 'B', 'C']
const omega = ['C', 'D', 'E']

const array = DifferenceEngine.exclusive(alpha, omega) // returns ['A', 'B']
```

## ArrayEngine

```javascript
const { ArrayEngine } = require('./lib')
```

### `indexOf`

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

const index = ArrayEngine.indexOf(array, 'E') // returns 4
```

### `bite`

Accepts an array and two indexes. Returns a slice from the array.

#### Positive

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 0, 0) // returns ['A']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 0, 4) // returns ['A', 'B', 'C', 'D', 'E']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 4, 0) // returns ['E', 'D', 'C', 'B', 'A']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 4, 4) // returns ['E']
```

#### Negative

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, -4, 0) // returns ['A']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, -4, 4) // returns ['A', 'B', 'C', 'D', 'E']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, -4, -4) // returns ['E', 'D', 'C', 'B', 'A']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 4, -4) // returns ['E', 'D', 'C', 'B', 'A']
```

```javascript
const alpha = ['A', 'B', 'C', 'D', 'E']

const omega = ArrayEngine.bite(alpha, 0, -4) // returns ['A']
```

### `iterateForward`

Accepts an array and a function. Iterates from start to end.

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

ArrayEngine.iterateForward(array, () => {})
```

### `iterateReverse`

Accepts an array and a function. Iterates from end to start.

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

ArrayEngine.iterateReverse(array, () => {})
```

### `iterateBetween`

Accepts an array, a start index, an end index, and a function.

If the first index is less than the second index, it behaves as `iterateForward`.

If the first index is greater than the second index, it behaves as `iterateReverse`.

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

ArrayEngine.iterateBetween(array, 1, 3, () => {})
```

### `max`

Accepts an array. Returns the _largest_ item (when compared as a number).

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

const value = ArrayEngine.max(array) // returns 'E'
```

```javascript
const array = [1, 2, 3, 4, 5]

const value = ArrayEngine.max(array) // returns 5
```

### `min`

Accepts an array. Returns the _smallest_ item (when compared as a number).

```javascript
const array = ['A', 'B', 'C', 'D', 'E']

const value = ArrayEngine.min(array) // returns 'A'
```

```javascript
const array = [1, 2, 3, 4, 5]

const value = ArrayEngine.min(array) // returns 1
```

## NumberEngine

```javascript
const { NumberEngine } = require('./lib')
```

### `fibonacci`

Accepts an index. Returns the number in a Fibonacci sequence corresponding to the index.

```javascript
const fibonacci = NumberEngine.fibonacci(0) // returns 0
```

```javascript
const fibonacci = NumberEngine.fibonacci(1) // returns 1
```

```javascript
const fibonacci = NumberEngine.fibonacci(2) // returns 1
```

```javascript
const fibonacci = NumberEngine.fibonacci(3) // returns 2
```

### `haversine`

Accepts an object with fields describing latitude and longitude points `from` and `to`.

Returns a value in kilometres or miles.

```javascript
const points = { from: { lat: 51.4934, lng: 0.0098 }, to: { lat: 40.7128, lng: 74.0060 } }

const haversine = NumberEngine.haversine(points)

const KM = haversine.km() // returns the distance in kilometres
const MI = haversine.mi() // returns the distance in miles
```

### `fromOctToDec`

Accepts a string representing an octal. Returns a decimal.

```javascript
const decimal = Weight.fromOctToDec('20') // returns 16
```

### `fromHexToDec`

Accepts a string representing a hexadecimal. Returns a decimal.

```javascript
const decimal = Weight.fromHexToDec('10') // returns 16
```
### `Weight`

Convert a number from one unit to another.

```javascript
const { NumberEngine: { Weight } } = require('./lib')
```

#### Kilogram

- `fromKgToGr`
- `fromKgToMg`
- `fromKgToOz`
- `fromKgToLb`
- `fromKgToSt`

```javascript
const value = Weight.fromKgToGr(10)
```

```javascript
const value = Weight.fromKgToMg(10)
```

```javascript
const value = Weight.fromKgToOz(10)
```

```javascript
const value = Weight.fromKgToLb(10)
```

```javascript
const value = Weight.fromKgToSt(10)
```
Or, using `convert`.

- `fromKg.toGr`
- `fromKg.toMg`
- `fromKg.toOz`
- `fromKg.toLb`
- `fromKg.toSt`

```javascript
const value = Weight.convert(10).fromKg.toGr()
```

```javascript
const value = Weight.convert(10).fromKg.toMg()
```

```javascript
const value = Weight.convert(10).fromKg.toOz()
```

```javascript
const value = Weight.convert(10).fromKg.toLb()
```

```javascript
const value = Weight.convert(10).fromKg.toSt()
```

#### Gram

- `fromGrToKg`
- `fromGrToMg`
- `fromGrToOz`
- `fromGrToLb`
- `fromGrToSt`

```javascript
const value = Weight.fromGrToKg(10)
```

```javascript
const value = Weight.fromGrToMg(10)
```

```javascript
const value = Weight.fromGrToOz(10)
```

```javascript
const value = Weight.fromGrToLb(10)
```

```javascript
const value = Weight.fromGrToSt(10)
```

Or, using `convert`.

- `fromGr.toKg`
- `fromGr.toMg`
- `fromGr.toOz`
- `fromGr.toLb`
- `fromGr.toSt`

```javascript
const value = Weight.convert(10).fromGr.toKg()
```

```javascript
const value = Weight.convert(10).fromGr.toMg()
```

```javascript
const value = Weight.convert(10).fromGr.toOz()
```

```javascript
const value = Weight.convert(10).fromGr.toLb()
```

```javascript
const value = Weight.convert(10).fromGr.toSt()
```

#### Miligram

- `fromMgToKg`
- `fromMgToGr`
- `fromMgToOz`
- `fromMgToLb`
- `fromMgToSt`

```javascript
const value = Weight.fromMgToKg(10)
```

```javascript
const value = Weight.fromMgToGr(10)
```

```javascript
const value = Weight.fromMgToOz(10)
```

```javascript
const value = Weight.fromMgToLb(10)
```

```javascript
const value = Weight.fromMgToSt(10)
```

Or, using `convert`.

- `fromMg.toKg`
- `fromMg.toGr`
- `fromMg.toOz`
- `fromMg.toLb`
- `fromMg.toSt`

```javascript
const value = Weight.convert(10).fromMg.toKg()
```

```javascript
const value = Weight.convert(10).fromMg.toGr()
```

```javascript
const value = Weight.convert(10).fromMg.toOz()
```

```javascript
const value = Weight.convert(10).fromMg.toLb()
```

```javascript
const value = Weight.convert(10).fromMg.toSt()
```

#### Ounce

- `fromOzToKg`
- `fromOzToGr`
- `fromOzToMg`
- `fromOzToLb`
- `fromOzToSt`

```javascript
const value = Weight.fromOzToKg(10)
```

```javascript
const value = Weight.fromOzToGr(10)
```

```javascript
const value = Weight.fromOzToMg(10)
```

```javascript
const value = Weight.fromOzToLb(10)
```

```javascript
const value = Weight.fromOzToSt(10)
```

Or, using `convert`.

- `fromOz.toKg`
- `fromOz.toGr`
- `fromOz.toMg`
- `fromOz.toLb`
- `fromOz.toSt`

```javascript
const value = Weight.convert(10).fromOz.toKg()
```

```javascript
const value = Weight.convert(10).fromOz.toGr()
```

```javascript
const value = Weight.convert(10).fromOz.toMg()
```

```javascript
const value = Weight.convert(10).fromOz.toLb()
```

```javascript
const value = Weight.convert(10).fromOz.toSt()
```

#### Pound

- `fromLbToKg`
- `fromLbToGr`
- `fromLbToMg`
- `fromLbToOz`
- `fromLbToSt`

```javascript
const value = Weight.fromLbToKg(10)
```

```javascript
const value = Weight.fromLbToGr(10)
```

```javascript
const value = Weight.fromLbToMg(10)
```

```javascript
const value = Weight.fromLbToOz(10)
```

```javascript
const value = Weight.fromLbToSt(10)
```

Or, using `convert`.

- `fromLb.toKg`
- `fromLb.toGr`
- `fromLb.toMg`
- `fromLb.toOz`
- `fromLb.toSt`

```javascript
const value = Weight.convert(10).fromLb.toKg()
```

```javascript
const value = Weight.convert(10).fromLb.toGr()
```

```javascript
const value = Weight.convert(10).fromLb.toMg()
```

```javascript
const value = Weight.convert(10).fromLb.toOz()
```

```javascript
const value = Weight.convert(10).fromLb.toSt()
```

#### Stone

- `fromStToKg`
- `fromStToGr`
- `fromStToMg`
- `fromStToLb`
- `fromStToOz`

```javascript
const value = Weight.fromStToKg(10)
```

```javascript
const value = Weight.fromStToGr(10)
```

```javascript
const value = Weight.fromStToMg(10)
```

```javascript
const value = Weight.fromStToLb(10)
```

```javascript
const value = Weight.fromStToOz(10)
```

Or, using `convert`.

- `fromSt.toKg`
- `fromSt.toGr`
- `fromSt.toMg`
- `fromSt.toLb`
- `fromSt.toOz`

```javascript
const value = Weight.convert(10).fromSt.toKg()
```

```javascript
const value = Weight.convert(10).fromSt.toGr()
```

```javascript
const value = Weight.convert(10).fromSt.toMg()
```

```javascript
const value = Weight.convert(10).fromSt.toLb()
```

```javascript
const value = Weight.convert(10).fromSt.toOz()
```

### `Temperature`

Convert a number from one unit to another.

```javascript
const { NumberEngine: { Temperature } } = require('./lib')
```

- `fromCToF`
- `fromFToC`

```javascript
const value = Temperature.fromCToF(10)
```

```javascript
const value = Temperature.fromFToC(10)
```

### `Distance`

Convert a number from one unit to another.

```javascript
const { NumberEngine: { Distance } } = require('./lib')
```

#### Kilometre

- `fromKmToMt`
- `fromKmToCm`
- `fromKmToMm`
- `fromKmToIn`
- `fromKmToFt`
- `fromKmToYd`
- `fromKmToMi`

```javascript
const value = Distance.fromKmToMt(10)
```

```javascript
const value = Distance.fromKmToCm(10)
```

```javascript
const value = Distance.fromKmToMm(10)
```

```javascript
const value = Distance.fromKmToIn(10)
```

```javascript
const value = Distance.fromKmToFt(10)
```

```javascript
const value = Distance.fromKmToYd(10)
```

```javascript
const value = Distance.fromKmToMi(10)
```

Or, using `convert`.

- `fromKm.toMt`
- `fromKm.toCm`
- `fromKm.toMm`
- `fromKm.toIn`
- `fromKm.toFt`
- `fromKm.toYd`
- `fromKm.toMi`

```javascript
const value = Distance.convert(10).fromKm.toMt()
```

```javascript
const value = Distance.convert(10).fromKm.toCm()
```

```javascript
const value = Distance.convert(10).fromKm.toMm()
```

```javascript
const value = Distance.convert(10).fromKm.toIn()
```

```javascript
const value = Distance.convert(10).fromKm.toFt()
```

```javascript
const value = Distance.convert(10).fromKm.toYd()
```

```javascript
const value = Distance.convert(10).fromKm.toMi()
```

#### Metre

- `fromMtToKm`
- `fromMtToCm`
- `fromMtToMm`
- `fromMtToIn`
- `fromMtToFt`
- `fromMtToYd`
- `fromMtToMi`

```javascript
const value = Distance.fromMtToKm(10)
```

```javascript
const value = Distance.fromMtToCm(10)
```

```javascript
const value = Distance.fromMtToMm(10)
```

```javascript
const value = Distance.fromMtToIn(10)
```

```javascript
const value = Distance.fromMtToFt(10)
```

```javascript
const value = Distance.fromMtToYd(10)
```

```javascript
const value = Distance.fromMtToMi(10)
```

Or, using `convert`.

- `fromMt.toKm`
- `fromMt.toCm`
- `fromMt.toMm`
- `fromMt.toIn`
- `fromMt.toFt`
- `fromMt.toYd`
- `fromMt.toMi`

```javascript
const value = Distance.convert(10).fromMt.toKm()
```

```javascript
const value = Distance.convert(10).fromMt.toCm()
```

```javascript
const value = Distance.convert(10).fromMt.toMm()
```

```javascript
const value = Distance.convert(10).fromMt.toIn()
```

```javascript
const value = Distance.convert(10).fromMt.toFt()
```

```javascript
const value = Distance.convert(10).fromMt.toYd()
```

```javascript
const value = Distance.convert(10).fromMt.toMi()
```

#### Centimetre

- `fromCmToKm`
- `fromCmToMt`
- `fromCmToMm`
- `fromCmToIn`
- `fromCmToFt`
- `fromCmToYd`
- `fromCmToMi`

```javascript
const value = Distance.fromCmToKm(10)
```

```javascript
const value = Distance.fromCmToMt(10)
```

```javascript
const value = Distance.fromCmToMm(10)
```

```javascript
const value = Distance.fromCmToIn(10)
```

```javascript
const value = Distance.fromCmToFt(10)
```

```javascript
const value = Distance.fromCmToYd(10)
```

```javascript
const value = Distance.fromCmToMi(10)
```

Or, using `convert`.

- `fromCm.toKm`
- `fromCm.toMt`
- `fromCm.toMm`
- `fromCm.toIn`
- `fromCm.toFt`
- `fromCm.toYd`
- `fromCm.toMi`

```javascript
const value = Distance.convert(10).fromCm.toKm()
```

```javascript
const value = Distance.convert(10).fromCm.toMt()
```

```javascript
const value = Distance.convert(10).fromCm.toMm()
```

```javascript
const value = Distance.convert(10).fromCm.toIn()
```

```javascript
const value = Distance.convert(10).fromCm.toFt()
```

```javascript
const value = Distance.convert(10).fromCm.toYd()
```

```javascript
const value = Distance.convert(10).fromCm.toMi()
```

#### Milimetre

- `fromMmToKm`
- `fromMmToMt`
- `fromMmToCm`
- `fromMmToIn`
- `fromMmToFt`
- `fromMmToYd`
- `fromMmToMi`

```javascript
const value = Distance.fromMmToKm(10)
```

```javascript
const value = Distance.fromMmToMt(10)
```

```javascript
const value = Distance.fromMmToCm(10)
```

```javascript
const value = Distance.fromMmToIn(10)
```

```javascript
const value = Distance.fromMmToFt(10)
```

```javascript
const value = Distance.fromMmToYd(10)
```

```javascript
const value = Distance.fromMmToMi(10)
```

Or, using `convert`.

- `fromMm.toKm`
- `fromMm.toMt`
- `fromMm.toCm`
- `fromMm.toIn`
- `fromMm.toFt`
- `fromMm.toYd`
- `fromMm.toMi`

```javascript
const value = Distance.convert(10).fromMm.toKm()
```

```javascript
const value = Distance.convert(10).fromMm.toMt()
```

```javascript
const value = Distance.convert(10).fromMm.toCm()
```

```javascript
const value = Distance.convert(10).fromMm.toIn()
```

```javascript
const value = Distance.convert(10).fromMm.toFt()
```

```javascript
const value = Distance.convert(10).fromMm.toYd()
```

```javascript
const value = Distance.convert(10).fromMm.toMi()
```

#### Inch

- `fromInToKm`
- `fromInToMt`
- `fromInToCm`
- `fromInToMm`
- `fromInToFt`
- `fromInToYd`
- `fromInToMi`

```javascript
const value = Distance.fromInToKm(10)
```

```javascript
const value = Distance.fromInToMt(10)
```

```javascript
const value = Distance.fromInToCm(10)
```

```javascript
const value = Distance.fromInToMm(10)
```

```javascript
const value = Distance.fromInToFt(10)
```

```javascript
const value = Distance.fromInToYd(10)
```

```javascript
const value = Distance.fromInToMi(10)
```

Or, using `convert`.

- `fromIn.toKm`
- `fromIn.toMt`
- `fromIn.toCm`
- `fromIn.toMm`
- `fromIn.toFt`
- `fromIn.toYd`
- `fromIn.toMi`

```javascript
const value = Distance.convert(10).fromIn.toKm()
```

```javascript
const value = Distance.convert(10).fromIn.toMt()
```

```javascript
const value = Distance.convert(10).fromIn.toCm()
```

```javascript
const value = Distance.convert(10).fromIn.toMm()
```

```javascript
const value = Distance.convert(10).fromIn.toFt()
```

```javascript
const value = Distance.convert(10).fromIn.toYd()
```

```javascript
const value = Distance.convert(10).fromIn.toMi()
```

#### Feet

- `fromFtToKm`
- `fromFtToMt`
- `fromFtToCm`
- `fromFtToMm`
- `fromFtToIn`
- `fromFtToYd`
- `fromFtToMi`

```javascript
const value = Distance.fromFtToKm(10)
```

```javascript
const value = Distance.fromFtToMt(10)
```

```javascript
const value = Distance.fromFtToCm(10)
```

```javascript
const value = Distance.fromFtToMm(10)
```

```javascript
const value = Distance.fromFtToIn(10)
```

```javascript
const value = Distance.fromFtToYd(10)
```

```javascript
const value = Distance.fromFtToMi(10)
```

Or, using `convert`.

- `fromFt.toKm`
- `fromFt.toMt`
- `fromFt.toCm`
- `fromFt.toMm`
- `fromFt.toIn`
- `fromFt.toYd`
- `fromFt.toMi`

```javascript
const value = Distance.convert(10).fromFt.toKm()
```

```javascript
const value = Distance.convert(10).fromFt.toMt()
```

```javascript
const value = Distance.convert(10).fromFt.toCm()
```

```javascript
const value = Distance.convert(10).fromFt.toMm()
```

```javascript
const value = Distance.convert(10).fromFt.toIn()
```

```javascript
const value = Distance.convert(10).fromFt.toYd()
```

```javascript
const value = Distance.convert(10).fromFt.toMi()
```

#### Yard

- `fromYdToKm`
- `fromYdToMt`
- `fromYdToCm`
- `fromYdToMm`
- `fromYdToIn`
- `fromYdToFt`
- `fromYdToMi`

```javascript
const value = Distance.fromYdToKm(10)
```

```javascript
const value = Distance.fromYdToMt(10)
```

```javascript
const value = Distance.fromYdToCm(10)
```

```javascript
const value = Distance.fromYdToMm(10)
```

```javascript
const value = Distance.fromYdToIn(10)
```

```javascript
const value = Distance.fromYdToFt(10)
```

```javascript
const value = Distance.fromYdToMi(10)
```

Or, using `convert`.

- `fromYd.toKm`
- `fromYd.toMt`
- `fromYd.toCm`
- `fromYd.toMm`
- `fromYd.toIn`
- `fromYd.toFt`
- `fromYd.toMi`

```javascript
const value = Distance.convert(10).fromYd.toKm()
```

```javascript
const value = Distance.convert(10).fromYd.toMt()
```

```javascript
const value = Distance.convert(10).fromYd.toCm()
```

```javascript
const value = Distance.convert(10).fromYd.toMm()
```

```javascript
const value = Distance.convert(10).fromYd.toIn()
```

```javascript
const value = Distance.convert(10).fromYd.toFt()
```

```javascript
const value = Distance.convert(10).fromYd.toMi()
```

#### Mile

- `fromMiToKm`
- `fromMiToMt`
- `fromMiToCm`
- `fromMiToMm`
- `fromMiToIn`
- `fromMiToFt`
- `fromMiToYd`

```javascript
const value = Distance.fromMiToKm(10)
```

```javascript
const value = Distance.fromMiToMt(10)
```

```javascript
const value = Distance.fromMiToCm(10)
```

```javascript
const value = Distance.fromMiToMm(10)
```

```javascript
const value = Distance.fromMiToIn(10)
```

```javascript
const value = Distance.fromMiToFt(10)
```

```javascript
const value = Distance.fromMiToYd(10)
```

Or, using `convert`.

- `fromMi.toKm`
- `fromMi.toMt`
- `fromMi.toCm`
- `fromMi.toMm`
- `fromMi.toIn`
- `fromMi.toFt`
- `fromMi.toYd`

```javascript
const value = Distance.convert(10).fromMi.toKm()
```

```javascript
const value = Distance.convert(10).fromMi.toMt()
```

```javascript
const value = Distance.convert(10).fromMi.toCm()
```

```javascript
const value = Distance.convert(10).fromMi.toMm()
```

```javascript
const value = Distance.convert(10).fromMi.toIn()
```

```javascript
const value = Distance.convert(10).fromMi.toFt()
```

```javascript
const value = Distance.convert(10).fromMi.toYd()
```
