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

const array = DifferenceEngine.exclusive(alpha, omega) // returns ['D', 'E']
```