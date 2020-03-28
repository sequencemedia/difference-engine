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
