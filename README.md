# difference-engine

```sh
npm i -P difference-engine
```

## DifferenceEngine

Features are available as static methods on the class:

```javascript
const { DifferenceEngine } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: DifferenceEngine,
  inclusive,
  exclusive
} = require('./lib/difference-engine')
```

Examples use the _static_ form.

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

Features are available as static methods on the class:

```javascript
const { ArrayEngine } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: ArrayEngine,
  indexOf,
  iterateForward,
  iterateReverse,
  iterateBetween,
  max,
  min,
  bite
} = require('./lib/array-engine')
```

Examples use the _static_ form.

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

Features are available as static methods on the class:

```javascript
const { NumberEngine } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: NumberEngine,
  fibonacci,
  haversine,
  fromOctToDec,
  fromHexToDec,
  Weight,
  Temperature,
  Distance
} = require('./lib/number-engine')
```

Examples use the _static_ form.

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

const km = NumberEngine.haversine(points).km() // returns the distance in kilometres
const mi = NumberEngine.haversine(points).mi() // returns the distance in miles
```

### `fromOctToDec`

Accepts a string representing an octal. Returns a decimal.

```javascript
const dec = NumberEngine.fromOctToDec('20') // returns 16
```

### `fromHexToDec`

Accepts a string representing a hexadecimal. Returns a decimal.

```javascript
const dec = NumberEngine.fromHexToDec('10') // returns 16
```

### `Weight`

Convert a number from one unit to another.

As static methods on the class:

```javascript
const { NumberEngine: { Weight } } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: Weight,

  fromKgToGr,
  fromKgToMg,
  fromKgToOz,
  fromKgToLb,
  fromKgToSt,

  fromGrToKg,
  fromGrToMg,
  fromGrToOz,
  fromGrToLb,
  fromGrToSt,

  fromMgToKg,
  fromMgToGr,
  fromMgToOz,
  fromMgToLb,
  fromMgToSt,

  fromOzToKg,
  fromOzToGr,
  fromOzToMg,
  fromOzToLb,
  fromOzToSt,

  fromLbToKg,
  fromLbToGr,
  fromLbToMg,
  fromLbToOz,
  fromLbToSt,

  fromStToKg,
  fromStToGr,
  fromStToMg,
  fromStToLb,
  fromStToOz,

  convert
} = require('./lib/number-engine/weight')
```

Examples use the _static_ form.

#### Kilogram

```javascript
const gr = Weight.fromKgToGr(10)
```

```javascript
const mg = Weight.fromKgToMg(10)
```

```javascript
const oz = Weight.fromKgToOz(10)
```

```javascript
const lb = Weight.fromKgToLb(10)
```

```javascript
const st = Weight.fromKgToSt(10)
```
Or, using `convert`.

```javascript
const gr = Weight.convert(10).fromKg.toGr()
```

```javascript
const mg = Weight.convert(10).fromKg.toMg()
```

```javascript
const oz = Weight.convert(10).fromKg.toOz()
```

```javascript
const lb = Weight.convert(10).fromKg.toLb()
```

```javascript
const st = Weight.convert(10).fromKg.toSt()
```

#### Gram

```javascript
const kg = Weight.fromGrToKg(10)
```

```javascript
const mg = Weight.fromGrToMg(10)
```

```javascript
const oz = Weight.fromGrToOz(10)
```

```javascript
const lb = Weight.fromGrToLb(10)
```

```javascript
const st = Weight.fromGrToSt(10)
```

Or, using `convert`.

```javascript
const kg = Weight.convert(10).fromGr.toKg()
```

```javascript
const mg = Weight.convert(10).fromGr.toMg()
```

```javascript
const oz = Weight.convert(10).fromGr.toOz()
```

```javascript
const lb = Weight.convert(10).fromGr.toLb()
```

```javascript
const st = Weight.convert(10).fromGr.toSt()
```

#### Miligram

```javascript
const kg = Weight.fromMgToKg(10)
```

```javascript
const gr = Weight.fromMgToGr(10)
```

```javascript
const oz = Weight.fromMgToOz(10)
```

```javascript
const lb = Weight.fromMgToLb(10)
```

```javascript
const st = Weight.fromMgToSt(10)
```

Or, using `convert`.

```javascript
const kg = Weight.convert(10).fromMg.toKg()
```

```javascript
const gr = Weight.convert(10).fromMg.toGr()
```

```javascript
const oz = Weight.convert(10).fromMg.toOz()
```

```javascript
const lb = Weight.convert(10).fromMg.toLb()
```

```javascript
const st = Weight.convert(10).fromMg.toSt()
```

#### Ounce

```javascript
const kg = Weight.fromOzToKg(10)
```

```javascript
const gr = Weight.fromOzToGr(10)
```

```javascript
const mg = Weight.fromOzToMg(10)
```

```javascript
const lb = Weight.fromOzToLb(10)
```

```javascript
const st = Weight.fromOzToSt(10)
```

Or, using `convert`.

```javascript
const kg = Weight.convert(10).fromOz.toKg()
```

```javascript
const gr = Weight.convert(10).fromOz.toGr()
```

```javascript
const mg = Weight.convert(10).fromOz.toMg()
```

```javascript
const lb = Weight.convert(10).fromOz.toLb()
```

```javascript
const st = Weight.convert(10).fromOz.toSt()
```

#### Pound

```javascript
const kg = Weight.fromLbToKg(10)
```

```javascript
const gr = Weight.fromLbToGr(10)
```

```javascript
const mg = Weight.fromLbToMg(10)
```

```javascript
const oz = Weight.fromLbToOz(10)
```

```javascript
const st = Weight.fromLbToSt(10)
```

Or, using `convert`.

```javascript
const kg = Weight.convert(10).fromLb.toKg()
```

```javascript
const gr = Weight.convert(10).fromLb.toGr()
```

```javascript
const mg = Weight.convert(10).fromLb.toMg()
```

```javascript
const oz = Weight.convert(10).fromLb.toOz()
```

```javascript
const st = Weight.convert(10).fromLb.toSt()
```

#### Stone

```javascript
const kg = Weight.fromStToKg(10)
```

```javascript
const gr = Weight.fromStToGr(10)
```

```javascript
const mg = Weight.fromStToMg(10)
```

```javascript
const lb = Weight.fromStToLb(10)
```

```javascript
const oz = Weight.fromStToOz(10)
```

Or, using `convert`.

```javascript
const kg = Weight.convert(10).fromSt.toKg()
```

```javascript
const gr = Weight.convert(10).fromSt.toGr()
```

```javascript
const mg = Weight.convert(10).fromSt.toMg()
```

```javascript
const lb = Weight.convert(10).fromSt.toLb()
```

```javascript
const oz = Weight.convert(10).fromSt.toOz()
```

### `Temperature`

Convert a number from one unit to another.

As static methods on the class:

```javascript
const { NumberEngine: { Temperature } } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: Temperature,

  fromCToF,
  fromFToC
} = require('./lib/number-engine/temperature')
```

Examples use the _static_ form.

```javascript
const value = Temperature.fromCToF(10)
```

```javascript
const value = Temperature.fromFToC(10)
```

### `Distance`

Convert a number from one unit to another.

As static methods on the class:

```javascript
const { NumberEngine: { Distance } } = require('./lib')
```

And as functions exported from the module:

```javascript
const {
  default: Distance,

  fromKmToMt,
  fromKmToCm,
  fromKmToMm,
  fromKmToIn,
  fromKmToFt,
  fromKmToYd,
  fromKmToMi,

  fromMtToKm,
  fromMtToCm,
  fromMtToMm,
  fromMtToIn,
  fromMtToFt,
  fromMtToYd,
  fromMtToMi,

  fromCmToKm,
  fromCmToMt,
  fromCmToMm,
  fromCmToIn,
  fromCmToFt,
  fromCmToYd,
  fromCmToMi,

  fromMmToKm,
  fromMmToMt,
  fromMmToCm,
  fromMmToIn,
  fromMmToFt,
  fromMmToYd,
  fromMmToMi,

  fromInToKm,
  fromInToMt,
  fromInToCm,
  fromInToMm,
  fromInToFt,
  fromInToYd,
  fromInToMi,

  fromFtToKm,
  fromFtToMt,
  fromFtToCm,
  fromFtToMm,
  fromFtToIn,
  fromFtToYd,
  fromFtToMi,

  fromYdToKm,
  fromYdToMt,
  fromYdToCm,
  fromYdToMm,
  fromYdToIn,
  fromYdToFt,
  fromYdToMi,

  fromMiToKm,
  fromMiToMt,
  fromMiToCm,
  fromMiToMm,
  fromMiToIn,
  fromMiToFt,
  fromMiToYd,

  convert
} = require('./lib/number-engine/distance')
```

Examples use the _static_ form.

#### Kilometre

```javascript
const mt = Distance.fromKmToMt(10)
```

```javascript
const cm = Distance.fromKmToCm(10)
```

```javascript
const mm = Distance.fromKmToMm(10)
```

```javascript
const in = Distance.fromKmToIn(10)
```

```javascript
const ft = Distance.fromKmToFt(10)
```

```javascript
const yd = Distance.fromKmToYd(10)
```

```javascript
const mi = Distance.fromKmToMi(10)
```

Or, using `convert`.

```javascript
const mt = Distance.convert(10).fromKm.toMt()
```

```javascript
const cm = Distance.convert(10).fromKm.toCm()
```

```javascript
const mm = Distance.convert(10).fromKm.toMm()
```

```javascript
const in = Distance.convert(10).fromKm.toIn()
```

```javascript
const ft = Distance.convert(10).fromKm.toFt()
```

```javascript
const yd = Distance.convert(10).fromKm.toYd()
```

```javascript
const mi = Distance.convert(10).fromKm.toMi()
```

#### Metre

```javascript
const km = Distance.fromMtToKm(10)
```

```javascript
const cm = Distance.fromMtToCm(10)
```

```javascript
const mm = Distance.fromMtToMm(10)
```

```javascript
const in = Distance.fromMtToIn(10)
```

```javascript
const ft = Distance.fromMtToFt(10)
```

```javascript
const yd = Distance.fromMtToYd(10)
```

```javascript
const mi = Distance.fromMtToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromMt.toKm()
```

```javascript
const cm = Distance.convert(10).fromMt.toCm()
```

```javascript
const mm = Distance.convert(10).fromMt.toMm()
```

```javascript
const in = Distance.convert(10).fromMt.toIn()
```

```javascript
const ft = Distance.convert(10).fromMt.toFt()
```

```javascript
const yd = Distance.convert(10).fromMt.toYd()
```

```javascript
const mi = Distance.convert(10).fromMt.toMi()
```

#### Centimetre

```javascript
const km = Distance.fromCmToKm(10)
```

```javascript
const mt = Distance.fromCmToMt(10)
```

```javascript
const mm = Distance.fromCmToMm(10)
```

```javascript
const in = Distance.fromCmToIn(10)
```

```javascript
const ft = Distance.fromCmToFt(10)
```

```javascript
const yd = Distance.fromCmToYd(10)
```

```javascript
const mi = Distance.fromCmToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromCm.toKm()
```

```javascript
const mt = Distance.convert(10).fromCm.toMt()
```

```javascript
const mm = Distance.convert(10).fromCm.toMm()
```

```javascript
const in = Distance.convert(10).fromCm.toIn()
```

```javascript
const ft = Distance.convert(10).fromCm.toFt()
```

```javascript
const yd = Distance.convert(10).fromCm.toYd()
```

```javascript
const mi = Distance.convert(10).fromCm.toMi()
```

#### Milimetre

```javascript
const km = Distance.fromMmToKm(10)
```

```javascript
const mt = Distance.fromMmToMt(10)
```

```javascript
const cm = Distance.fromMmToCm(10)
```

```javascript
const in = Distance.fromMmToIn(10)
```

```javascript
const ft = Distance.fromMmToFt(10)
```

```javascript
const yd = Distance.fromMmToYd(10)
```

```javascript
const mi = Distance.fromMmToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromMm.toKm()
```

```javascript
const mt = Distance.convert(10).fromMm.toMt()
```

```javascript
const cm = Distance.convert(10).fromMm.toCm()
```

```javascript
const in = Distance.convert(10).fromMm.toIn()
```

```javascript
const ft = Distance.convert(10).fromMm.toFt()
```

```javascript
const yd = Distance.convert(10).fromMm.toYd()
```

```javascript
const mi = Distance.convert(10).fromMm.toMi()
```

#### Inch

```javascript
const km = Distance.fromInToKm(10)
```

```javascript
const mt = Distance.fromInToMt(10)
```

```javascript
const cm = Distance.fromInToCm(10)
```

```javascript
const mm = Distance.fromInToMm(10)
```

```javascript
const ft = Distance.fromInToFt(10)
```

```javascript
const yd = Distance.fromInToYd(10)
```

```javascript
const mi = Distance.fromInToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromIn.toKm()
```

```javascript
const mt = Distance.convert(10).fromIn.toMt()
```

```javascript
const cm = Distance.convert(10).fromIn.toCm()
```

```javascript
const mm = Distance.convert(10).fromIn.toMm()
```

```javascript
const ft = Distance.convert(10).fromIn.toFt()
```

```javascript
const yd = Distance.convert(10).fromIn.toYd()
```

```javascript
const mi = Distance.convert(10).fromIn.toMi()
```

#### Feet

```javascript
const km = Distance.fromFtToKm(10)
```

```javascript
const mt = Distance.fromFtToMt(10)
```

```javascript
const cm = Distance.fromFtToCm(10)
```

```javascript
const mm = Distance.fromFtToMm(10)
```

```javascript
const in = Distance.fromFtToIn(10)
```

```javascript
const yd = Distance.fromFtToYd(10)
```

```javascript
const mi = Distance.fromFtToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromFt.toKm()
```

```javascript
const mt = Distance.convert(10).fromFt.toMt()
```

```javascript
const cm = Distance.convert(10).fromFt.toCm()
```

```javascript
const mm = Distance.convert(10).fromFt.toMm()
```

```javascript
const in = Distance.convert(10).fromFt.toIn()
```

```javascript
const yd = Distance.convert(10).fromFt.toYd()
```

```javascript
const mi = Distance.convert(10).fromFt.toMi()
```

#### Yard

```javascript
const km = Distance.fromYdToKm(10)
```

```javascript
const mt = Distance.fromYdToMt(10)
```

```javascript
const cm = Distance.fromYdToCm(10)
```

```javascript
const mm = Distance.fromYdToMm(10)
```

```javascript
const in = Distance.fromYdToIn(10)
```

```javascript
const ft = Distance.fromYdToFt(10)
```

```javascript
const mi = Distance.fromYdToMi(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromYd.toKm()
```

```javascript
const mt = Distance.convert(10).fromYd.toMt()
```

```javascript
const cm = Distance.convert(10).fromYd.toCm()
```

```javascript
const mm = Distance.convert(10).fromYd.toMm()
```

```javascript
const in = Distance.convert(10).fromYd.toIn()
```

```javascript
const ft = Distance.convert(10).fromYd.toFt()
```

```javascript
const mi = Distance.convert(10).fromYd.toMi()
```

#### Mile

```javascript
const km = Distance.fromMiToKm(10)
```

```javascript
const mt = Distance.fromMiToMt(10)
```

```javascript
const cm = Distance.fromMiToCm(10)
```

```javascript
const mm = Distance.fromMiToMm(10)
```

```javascript
const in = Distance.fromMiToIn(10)
```

```javascript
const ft = Distance.fromMiToFt(10)
```

```javascript
const yd = Distance.fromMiToYd(10)
```

Or, using `convert`.

```javascript
const km = Distance.convert(10).fromMi.toKm()
```

```javascript
const mt = Distance.convert(10).fromMi.toMt()
```

```javascript
const cm = Distance.convert(10).fromMi.toCm()
```

```javascript
const mm = Distance.convert(10).fromMi.toMm()
```

```javascript
const in = Distance.convert(10).fromMi.toIn()
```

```javascript
const ft = Distance.convert(10).fromMi.toFt()
```

```javascript
const yd = Distance.convert(10).fromMi.toYd()
```

## StringEngine

```javascript
const { StringEngine } = require('./lib')
```

### `charAt`

Accepts a string and a number which is an index. Returns the character for the entity at the index.

```javascript
const string = StringEngine.charAt('Hello&#44; World', 5) // returns ','
```

```javascript
const string = StringEngine.charAt('Hello&comma; World', 5) // returns ','
```

### `charCodeAt`

Accepts a string and a number which is an index. Returns the character code for the entity at the index.

```javascript
const number = StringEngine.charCodeAt('Hello&#44; World', 5) // returns 44
```

```javascript
const number = StringEngine.charCodeAt('Hello&comma; World', 5) // returns 44
```

### `charOf`

Accepts a string which is an HTML entity. Returns the character for the entity.

```javascript
const string = StringEngine.charOf('&#44;') // returns ','
```

```javascript
const string = StringEngine.charOf('&comma;') // returns ','
```

### `charCodeOf`

Accepts a string which is an HTML entity. Returns the character code for the entity.

```javascript
const number = StringEngine.charCodeOf('&#44;') // returns 44
```

```javascript
const number = StringEngine.charCodeOf('&comma;') // returns 44
```

### `entityAt`

Accepts a string and a number which is an index.

Where the character at the index is an entity, it returns the entity.

```javascript
const string = StringEngine.entityAt('Hello&comma; World', 5) // returns '&comma;'
```

```javascript
const string = StringEngine.entityAt('Hello,&#32;World', 6) // returns '&#32;'
```

Where the character at the index has an entity name, it returns the entity name.

```javascript
const string = StringEngine.entityAt('Hello, World', 5) // returns '&comma;'
```

Where the character at the index has an entity code, it returns the entity code.

```javascript
const string = StringEngine.entityAt('Hello, World', 6) // returns '&#32;'
```

### `entityCodeAt`

Accepts a string and a number which is an index.

Where the character at the index has an entity code, it returns the entity code.

```javascript
const string = StringEngine.entityCodeAt('Hello, World', 5) // returns '&#44;'
```

Where the character at the index _is_ an entity code, it returns the entity code.

```javascript
const string = StringEngine.entityCodeAt('Hello&#44; World', 5) // returns '&#44;'
```

Where the character at the index is an entity name, it returns the entity code for the char at the index.

```javascript
const string = StringEngine.entityCodeAt('Hello&comma; World', 5) // returns '&#38;'
```

### `entityNameAt`

Accepts a string and a number which is an index.

Where the character at the index has an entity name, it returns the entity name.

```javascript
const string = StringEngine.entityNameAt('Hello, World', 5) // returns '&comma;'
```

Where the character at the index _is_ an entity name, it returns the entity name.

```javascript
const string = StringEngine.entityNameAt('Hello&comma; World', 5) // returns '&comma;'
```

Where the character at the index is an entity code, it returns the entity name for the char at the index.

```javascript
const string = StringEngine.entityNameAt('Hello&#44; World', 5) // returns '&amp;'
```

### `entityOf`

Accepts a string and a number which is an index.

Where the character at the index is an entity, it returns the entity.

```javascript
const string = StringEngine.entityOf(',') // returns '&comma;'
```

```javascript
const string = StringEngine.entityOf(' ') // returns '&#32;'
```

### `fromCharCode`

Accepts a number which is a character code. Returns the character for that code.

```javascript
const string = StringEngine.charFromEntityCode('&#43;') // returns '+'
```

### `charFromEntityCode`

Accepts a string which is an HTML entity code. Returns the character for that entity.

```javascript
const string = StringEngine.charFromEntityCode('&#43;') // returns '+'
```

### `charFromEntityName`

Accepts a string which is an HTML entity name. Returns the character for that entity.

```javascript
const string = StringEngine.charFromEntityCode('&plus;') // returns '+'
```

### `toEntityCode`

Accepts a string. Returns a string replaced with the HTML entity code for each character.

```javascript
const string = StringEngine.toEntityCode('Hello, World') // returns '&#72;&#101;&#108;&#108;&#111;&#44;&#32;&#87;&#111;&#114;&#108;&#100;'
```

### `toEntityName`

Accepts a string. Returns a string replaced with the HTML entity name for each character where it is known, otherwise the character is not replaced.

```javascript
const string = StringEngine.toEntityName('Hello, World') // returns 'Hello&comma; World'
```

### `entityCodeFromChar`

Accepts a single-character string. Returns a string representing the HTML entity code for that character.

```javascript
const entityCode = StringEngine.entityCodeFromChar('+') // returns '&#43;'
```

The entity is computed from the character code point.

### `entityNameFromChar`

Accepts a single-character string. Returns a string representing the HTML entity code for that character.

```javascript
const entityName = StringEngine.entityNameFromChar('+') // returns '&plus;'
```

Where the character has no entity or the entity is not known it returns the character.

### `entityCodeOf`

See `entityCodeFromChar`.

### `entityNameOf`

See `entityNameFromChar`.

### `fromDecToOct`

Accepts number. Returns a string representing an octal.

```javascript
const oct = StringEngine.fromDecToOct(16) // returns '20'
```

### `fromDecToHex`

Accepts number. Returns a string representing a hexadecimal.

```javascript
const hex = StringEngine.fromDecToHex(16) // returns '10'
```

### `reverse`

Accepts a string. Returns the string with characters in reverse order.

```javascript
const string = StringEngine.reverse('ABCDE') // returns 'EDCBA'
```
