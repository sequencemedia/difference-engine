require('babel-register')({ ignore: /!(DifferenceEngine\/lib\/es|difference-engine\/lib\/es)/ })

module.exports = require('./lib/es')
