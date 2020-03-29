import sinon from 'sinon'

import {
  expect
} from 'chai'

import ArrayEngine, {
  max,
  min,
  bite,
  iterateForward,
  iterateReverse,
  iterateBetween,
  indexOf
} from '@difference-engine/array-engine'

const ARRAY = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

describe('ArrayEngine', () => {
  it('is a class', () => expect(ArrayEngine).to.be.a('function'))

  describe('`ArrayEngine.max()`', () => {
    it('gets the item with the largest value', () => {
      expect(ArrayEngine.max(ARRAY)).to.equal('Z')

      expect(ArrayEngine.max([1, 2, 3])).to.equal(3)
    })
  })

  describe('`ArrayEngine.min()`', () => {
    it('gets the item with the smallest value', () => {
      expect(ArrayEngine.min(ARRAY)).to.equal('A')

      expect(ArrayEngine.min([1, 2, 3])).to.equal(1)
    })
  })

  describe('`ArrayEngine.bite()`', () => {
    describe('Forward', () => {
      describe('Positive indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +0]', () => {
            expect(ArrayEngine.bite(ARRAY, +0, +0)).to.eql(['A'])

            expect(ArrayEngine.bite([1, 2, 3], +0, +0)).to.eql([1])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +25]', () => {
            expect(ArrayEngine.bite(ARRAY, +0, +25)).to.eql([
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
              'U',
              'V',
              'W',
              'X',
              'Y',
              'Z'
            ])

            expect(ArrayEngine.bite([1, 2, 3], +0, +2)).to.eql([1, 2, 3])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [-25, -25]', () => {
            expect(ArrayEngine.bite(ARRAY, -25, -25)).to.eql(['A'])

            expect(ArrayEngine.bite([1, 2, 3], -25, -25)).to.eql([1])
          })
        })

        describe('The first index is larger than the second', () => {
          it('gets the items between the first index and second index inclusive [-0, -25]', () => {
            expect(ArrayEngine.bite(ARRAY, -0, -25)).to.eql(['A'])

            expect(ArrayEngine.bite([1, 2, 3], -0, -2)).to.eql([1])
          })
        })
      })
    })

    describe('Reverse', () => {
      describe('Positive indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +0]', () => {
            expect(ArrayEngine.bite(ARRAY, +0, +0)).to.eql(['A'])

            expect(ArrayEngine.bite([1, 2, 3], +0, +0)).to.eql([1])
          })
        })

        describe('The first index is larger than the second', () => {
          it('gets the items between the first index and second index inclusive [+25, +0]', () => {
            expect(ArrayEngine.bite(ARRAY, +25, +0)).to.eql([
              'Z',
              'Y',
              'X',
              'W',
              'V',
              'U',
              'T',
              'S',
              'R',
              'Q',
              'P',
              'O',
              'N',
              'M',
              'L',
              'K',
              'J',
              'I',
              'H',
              'G',
              'F',
              'E',
              'D',
              'C',
              'B',
              'A'
            ])

            expect(ArrayEngine.bite([1, 2, 3], +2, +0)).to.eql([3, 2, 1])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [-0, -0]', () => {
            expect(ArrayEngine.bite(ARRAY, -0, -0)).to.eql([
              'Z',
              'Y',
              'X',
              'W',
              'V',
              'U',
              'T',
              'S',
              'R',
              'Q',
              'P',
              'O',
              'N',
              'M',
              'L',
              'K',
              'J',
              'I',
              'H',
              'G',
              'F',
              'E',
              'D',
              'C',
              'B',
              'A'
            ])

            expect(ArrayEngine.bite([1, 2, 3], -0, -0)).to.eql([3, 2, 1])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('gets the items between the first index and second index inclusive [-25, -0]', () => {
            expect(ArrayEngine.bite(ARRAY, -25, -0)).to.eql(['A'])

            expect(ArrayEngine.bite([1, 2, 3], -2, -0)).to.eql([1])
          })
        })
      })
    })
  })

  describe('`ArrayEngine.iterateForward()`', () => {
    describe('The array has one item', () => {
      it('iterates for one item', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateForward(['A'], spy)

        expect(spy.callCount).to.equal(1)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for one item', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateForward(['A'], spy)

        expect(spy.callCount).to.equal(1)

        expect(spy.args).to.eql([
          ['A', 0, 0, ['A']]
        ])
      })
    })

    describe('The array has more than one item', () => {
      it('iterates for each item', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateForward(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for each item', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateForward(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        expect(spy.args).to.eql([
          ['A', 0, 25, ARRAY],
          ['B', 1, 25, ARRAY],
          ['C', 2, 25, ARRAY],
          ['D', 3, 25, ARRAY],
          ['E', 4, 25, ARRAY],
          ['F', 5, 25, ARRAY],
          ['G', 6, 25, ARRAY],
          ['H', 7, 25, ARRAY],
          ['I', 8, 25, ARRAY],
          ['J', 9, 25, ARRAY],
          ['K', 10, 25, ARRAY],
          ['L', 11, 25, ARRAY],
          ['M', 12, 25, ARRAY],
          ['N', 13, 25, ARRAY],
          ['O', 14, 25, ARRAY],
          ['P', 15, 25, ARRAY],
          ['Q', 16, 25, ARRAY],
          ['R', 17, 25, ARRAY],
          ['S', 18, 25, ARRAY],
          ['T', 19, 25, ARRAY],
          ['U', 20, 25, ARRAY],
          ['V', 21, 25, ARRAY],
          ['W', 22, 25, ARRAY],
          ['X', 23, 25, ARRAY],
          ['Y', 24, 25, ARRAY],
          ['Z', 25, 25, ARRAY]
        ])
      })
    })

    describe('The array has no items', () => {
      it('does not iterate', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        return expect(returnValue).to.be.false
      })

      it('does not call the callback', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        expect(spy.args).to.eql([])
      })
    })
  })

  describe('`ArrayEngine.iterateReverse()`', () => {
    describe('The array has one item', () => {
      it('iterates for one item', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateReverse(['Z'], spy)

        expect(spy.callCount).to.equal(1)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for one item', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateReverse(['Z'], spy)

        expect(spy.args).to.eql([
          ['Z', 0, 0, ['Z']]
        ])
      })
    })

    describe('The array has many items', () => {
      it('iterates for each item', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateReverse(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for each item', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateReverse(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        expect(spy.args).to.eql([
          ['Z', 25, 25, ARRAY],
          ['Y', 24, 25, ARRAY],
          ['X', 23, 25, ARRAY],
          ['W', 22, 25, ARRAY],
          ['V', 21, 25, ARRAY],
          ['U', 20, 25, ARRAY],
          ['T', 19, 25, ARRAY],
          ['S', 18, 25, ARRAY],
          ['R', 17, 25, ARRAY],
          ['Q', 16, 25, ARRAY],
          ['P', 15, 25, ARRAY],
          ['O', 14, 25, ARRAY],
          ['N', 13, 25, ARRAY],
          ['M', 12, 25, ARRAY],
          ['L', 11, 25, ARRAY],
          ['K', 10, 25, ARRAY],
          ['J', 9, 25, ARRAY],
          ['I', 8, 25, ARRAY],
          ['H', 7, 25, ARRAY],
          ['G', 6, 25, ARRAY],
          ['F', 5, 25, ARRAY],
          ['E', 4, 25, ARRAY],
          ['D', 3, 25, ARRAY],
          ['C', 2, 25, ARRAY],
          ['B', 1, 25, ARRAY],
          ['A', 0, 25, ARRAY]
        ])
      })
    })

    describe('The array has no items', () => {
      it('does not iterate', () => {
        const spy = sinon.spy()

        const returnValue = ArrayEngine.iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        return expect(returnValue).to.be.false
      })

      it('does not call the callback', () => {
        const spy = sinon.spy()

        ArrayEngine.iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        expect(spy.args).to.eql([])
      })
    })
  })

  describe('`ArrayEngine.iterateBetween()`', () => {
    describe('Forward', () => {
      describe('Positive indexes', () => {
        describe('The first index is equal to the second', () => {
          it('iterates between the first index and second index inclusive [+0, +0]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +0, +0, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [+13, +13]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +13, +13, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [+25, +25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +25, +25, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('calls the callback for each item between the first index and second index inclusive [+0, +0]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +0, +0, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+13, +13]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +13, +13, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['N', 13, 13, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +25, +25, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['Z', 25, 25, ARRAY]
            ])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('iterates between the first index and second index inclusive [+0, +1]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +0, +1, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+1, +3]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +1, +3, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+0, +25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +0, +25, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 25

          it('iterates between the first index and second index inclusive [+24, +25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +24, +25, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+22, +24]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +22, +24, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+2, +23]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +2, +23, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [+0, +1]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +0, +1, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['A', 0, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+1, +3]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +1, +3, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['B', 1, 3, ARRAY],
              ['C', 2, 3, ARRAY],
              ['D', 3, 3, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+0, +25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +0, +25, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['A', 0, 25, ARRAY],
              ['B', 1, 25, ARRAY],
              ['C', 2, 25, ARRAY],
              ['D', 3, 25, ARRAY],
              ['E', 4, 25, ARRAY],
              ['F', 5, 25, ARRAY],
              ['G', 6, 25, ARRAY],
              ['H', 7, 25, ARRAY],
              ['I', 8, 25, ARRAY],
              ['J', 9, 25, ARRAY],
              ['K', 10, 25, ARRAY],
              ['L', 11, 25, ARRAY],
              ['M', 12, 25, ARRAY],
              ['N', 13, 25, ARRAY],
              ['O', 14, 25, ARRAY],
              ['P', 15, 25, ARRAY],
              ['Q', 16, 25, ARRAY],
              ['R', 17, 25, ARRAY],
              ['S', 18, 25, ARRAY],
              ['T', 19, 25, ARRAY],
              ['U', 20, 25, ARRAY],
              ['V', 21, 25, ARRAY],
              ['W', 22, 25, ARRAY],
              ['X', 23, 25, ARRAY],
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+24, +25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +24, +25, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+22, +24]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +22, +24, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['W', 22, 24, ARRAY],
              ['X', 23, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+2, +23]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +2, +23, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['C', 2, 23, ARRAY],
              ['D', 3, 23, ARRAY],
              ['E', 4, 23, ARRAY],
              ['F', 5, 23, ARRAY],
              ['G', 6, 23, ARRAY],
              ['H', 7, 23, ARRAY],
              ['I', 8, 23, ARRAY],
              ['J', 9, 23, ARRAY],
              ['K', 10, 23, ARRAY],
              ['L', 11, 23, ARRAY],
              ['M', 12, 23, ARRAY],
              ['N', 13, 23, ARRAY],
              ['O', 14, 23, ARRAY],
              ['P', 15, 23, ARRAY],
              ['Q', 16, 23, ARRAY],
              ['R', 17, 23, ARRAY],
              ['S', 18, 23, ARRAY],
              ['T', 19, 23, ARRAY],
              ['U', 20, 23, ARRAY],
              ['V', 21, 23, ARRAY],
              ['W', 22, 23, ARRAY],
              ['X', 23, 23, ARRAY]
            ])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first index is equal to the second', () => {
          it('iterates between the first index and second index inclusive [-0, -0]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -0, -0, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [-13, -13]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -13, -13, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [-25, -25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -25, -25, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('calls the callback for each item between the first index and second index inclusive [-0, -0]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -0, -0, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['A', -0, -0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-13, -13]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -13, -13, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['N', 13, 13, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-25, -25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -25, -25, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['B', 1, 1, ARRAY]
            ])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('iterates between the first index and second index inclusive [-26, -25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -26, -25, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-25, -23]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -25, -23, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-26, -1]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -26, -1, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [-2, -1]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -2, -1, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-4, -2]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -4, -2, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-24, -3]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -24, -3, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [-26, -25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -26, -25, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['A', 0, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-25, -23]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -25, -23, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['B', 1, 3, ARRAY],
              ['C', 2, 3, ARRAY],
              ['D', 3, 3, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-26, -1]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -26, -1, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['A', 0, 25, ARRAY],
              ['B', 1, 25, ARRAY],
              ['C', 2, 25, ARRAY],
              ['D', 3, 25, ARRAY],
              ['E', 4, 25, ARRAY],
              ['F', 5, 25, ARRAY],
              ['G', 6, 25, ARRAY],
              ['H', 7, 25, ARRAY],
              ['I', 8, 25, ARRAY],
              ['J', 9, 25, ARRAY],
              ['K', 10, 25, ARRAY],
              ['L', 11, 25, ARRAY],
              ['M', 12, 25, ARRAY],
              ['N', 13, 25, ARRAY],
              ['O', 14, 25, ARRAY],
              ['P', 15, 25, ARRAY],
              ['Q', 16, 25, ARRAY],
              ['R', 17, 25, ARRAY],
              ['S', 18, 25, ARRAY],
              ['T', 19, 25, ARRAY],
              ['U', 20, 25, ARRAY],
              ['V', 21, 25, ARRAY],
              ['W', 22, 25, ARRAY],
              ['X', 23, 25, ARRAY],
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-2, -1]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -2, -1, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-4, -2]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -4, -2, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['W', 22, 24, ARRAY],
              ['X', 23, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-24, -3]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -24, -3, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['C', 2, 23, ARRAY],
              ['D', 3, 23, ARRAY],
              ['E', 4, 23, ARRAY],
              ['F', 5, 23, ARRAY],
              ['G', 6, 23, ARRAY],
              ['H', 7, 23, ARRAY],
              ['I', 8, 23, ARRAY],
              ['J', 9, 23, ARRAY],
              ['K', 10, 23, ARRAY],
              ['L', 11, 23, ARRAY],
              ['M', 12, 23, ARRAY],
              ['N', 13, 23, ARRAY],
              ['O', 14, 23, ARRAY],
              ['P', 15, 23, ARRAY],
              ['Q', 16, 23, ARRAY],
              ['R', 17, 23, ARRAY],
              ['S', 18, 23, ARRAY],
              ['T', 19, 23, ARRAY],
              ['U', 20, 23, ARRAY],
              ['V', 21, 23, ARRAY],
              ['W', 22, 23, ARRAY],
              ['X', 23, 23, ARRAY]
            ])
          })
        })
      })
    })

    describe('Reverse', () => {
      describe('Positive indexes', () => {
        describe('The first index is greater than the second', () => {
          it('iterates between the first index and second index inclusive [+1, +0]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +1, +0, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+3, +1]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +3, +1, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+25, +0]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +25, +0, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [+25, +24]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +25, +24, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+24, +22]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +24, +22, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+23, +2]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, +23, +2, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [+1, +0]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +1, +0, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+3, +1]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +3, +1, spy)

            expect(spy.args).to.eql([
              ['D', 3, 1, ARRAY],
              ['C', 2, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +0]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +25, +0, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['Z', 25, 0, ARRAY],
              ['Y', 24, 0, ARRAY],
              ['X', 23, 0, ARRAY],
              ['W', 22, 0, ARRAY],
              ['V', 21, 0, ARRAY],
              ['U', 20, 0, ARRAY],
              ['T', 19, 0, ARRAY],
              ['S', 18, 0, ARRAY],
              ['R', 17, 0, ARRAY],
              ['Q', 16, 0, ARRAY],
              ['P', 15, 0, ARRAY],
              ['O', 14, 0, ARRAY],
              ['N', 13, 0, ARRAY],
              ['M', 12, 0, ARRAY],
              ['L', 11, 0, ARRAY],
              ['K', 10, 0, ARRAY],
              ['J', 9, 0, ARRAY],
              ['I', 8, 0, ARRAY],
              ['H', 7, 0, ARRAY],
              ['G', 6, 0, ARRAY],
              ['F', 5, 0, ARRAY],
              ['E', 4, 0, ARRAY],
              ['D', 3, 0, ARRAY],
              ['C', 2, 0, ARRAY],
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +24]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +25, +24, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Z', 25, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+24, +22]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +24, +22, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['Y', 24, 22, ARRAY],
              ['X', 23, 22, ARRAY],
              ['W', 22, 22, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+23, +2]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, +23, +2, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['X', 23, 2, ARRAY],
              ['W', 22, 2, ARRAY],
              ['V', 21, 2, ARRAY],
              ['U', 20, 2, ARRAY],
              ['T', 19, 2, ARRAY],
              ['S', 18, 2, ARRAY],
              ['R', 17, 2, ARRAY],
              ['Q', 16, 2, ARRAY],
              ['P', 15, 2, ARRAY],
              ['O', 14, 2, ARRAY],
              ['N', 13, 2, ARRAY],
              ['M', 12, 2, ARRAY],
              ['L', 11, 2, ARRAY],
              ['K', 10, 2, ARRAY],
              ['J', 9, 2, ARRAY],
              ['I', 8, 2, ARRAY],
              ['H', 7, 2, ARRAY],
              ['G', 6, 2, ARRAY],
              ['F', 5, 2, ARRAY],
              ['E', 4, 2, ARRAY],
              ['D', 3, 2, ARRAY],
              ['C', 2, 2, ARRAY]
            ])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first index is greater than the second', () => {
          it('iterates between the first index and second index inclusive [-25, -26]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -25, -26, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-23, -25]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -23, -25, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-1, -0]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -1, -0, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [-1, -2]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -1, -2, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-2, -4]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -2, -4, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-3, -24]', () => {
            const spy = sinon.spy()

            const returnValue = ArrayEngine.iterateBetween(ARRAY, -3, -24, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [-25, -26]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -25, -26, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-23, -25]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -23, -25, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['D', 3, 1, ARRAY],
              ['C', 2, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-1, -0]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -1, -0, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['Z', 25, -0, ARRAY],
              ['Y', 24, -0, ARRAY],
              ['X', 23, -0, ARRAY],
              ['W', 22, -0, ARRAY],
              ['V', 21, -0, ARRAY],
              ['U', 20, -0, ARRAY],
              ['T', 19, -0, ARRAY],
              ['S', 18, -0, ARRAY],
              ['R', 17, -0, ARRAY],
              ['Q', 16, -0, ARRAY],
              ['P', 15, -0, ARRAY],
              ['O', 14, -0, ARRAY],
              ['N', 13, -0, ARRAY],
              ['M', 12, -0, ARRAY],
              ['L', 11, -0, ARRAY],
              ['K', 10, -0, ARRAY],
              ['J', 9, -0, ARRAY],
              ['I', 8, -0, ARRAY],
              ['H', 7, -0, ARRAY],
              ['G', 6, -0, ARRAY],
              ['F', 5, -0, ARRAY],
              ['E', 4, -0, ARRAY],
              ['D', 3, -0, ARRAY],
              ['C', 2, -0, ARRAY],
              ['B', 1, -0, ARRAY],
              ['A', 0, -0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-1, -2]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -1, -2, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Z', 25, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-2, -4]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -2, -4, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['Y', 24, 22, ARRAY],
              ['X', 23, 22, ARRAY],
              ['W', 22, 22, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-3, -24]', () => {
            const spy = sinon.spy()

            ArrayEngine.iterateBetween(ARRAY, -3, -24, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['X', 23, 2, ARRAY],
              ['W', 22, 2, ARRAY],
              ['V', 21, 2, ARRAY],
              ['U', 20, 2, ARRAY],
              ['T', 19, 2, ARRAY],
              ['S', 18, 2, ARRAY],
              ['R', 17, 2, ARRAY],
              ['Q', 16, 2, ARRAY],
              ['P', 15, 2, ARRAY],
              ['O', 14, 2, ARRAY],
              ['N', 13, 2, ARRAY],
              ['M', 12, 2, ARRAY],
              ['L', 11, 2, ARRAY],
              ['K', 10, 2, ARRAY],
              ['J', 9, 2, ARRAY],
              ['I', 8, 2, ARRAY],
              ['H', 7, 2, ARRAY],
              ['G', 6, 2, ARRAY],
              ['F', 5, 2, ARRAY],
              ['E', 4, 2, ARRAY],
              ['D', 3, 2, ARRAY],
              ['C', 2, 2, ARRAY]
            ])
          })
        })
      })
    })
  })

  describe('`ArrayEngine.indexOf()`', () => {
    it('Gets the index of the argument in the array', () => {
      var i, j

      /*
       * Forward
       */
      i = 0
      j = ARRAY.length

      do {
        expect(ArrayEngine.indexOf(ARRAY, ARRAY[i])).to.equal(i)
      } while (++i < j)

      /*
       * Reverse
       */
      i = ARRAY.length - 1
      j = -1
      do {
        expect(ArrayEngine.indexOf(ARRAY, ARRAY[i])).to.equal(i)
      } while (--i > j)
    })

    it('Returns `null` if the argument is an object and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, {})).to.be.null)
    it('Returns `null` if the argument is an array and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, [])).to.be.null)
    it('Returns `null` if the argument is a string and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, '')).to.be.null)
    it('Returns `null` if the argument is a number and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, 1)).to.be.null)
    it('Returns `null` if the argument is a boolean and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, true)).to.be.null)
    it('Returns `null` if the argument is `null` and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, null)).to.be.null)
    it('Returns `null` if the argument is `undefined` and it is not in the array', () => expect(ArrayEngine.indexOf(ARRAY, undefined)).to.be.null)
  })

  describe('`max()`', () => {
    it('gets the item with the largest value', () => {
      expect(max(ARRAY)).to.equal('Z')

      expect(max([1, 2, 3])).to.equal(3)
    })
  })

  describe('`min()`', () => {
    it('gets the item with the smallest value', () => {
      expect(min(ARRAY)).to.equal('A')

      expect(min([1, 2, 3])).to.equal(1)
    })
  })

  describe('`bite()`', () => {
    describe('Forward', () => {
      describe('Positive indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +0]', () => {
            expect(bite(ARRAY, +0, +0)).to.eql(['A'])

            expect(bite([1, 2, 3], +0, +0)).to.eql([1])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +25]', () => {
            expect(bite(ARRAY, +0, +25)).to.eql([
              'A',
              'B',
              'C',
              'D',
              'E',
              'F',
              'G',
              'H',
              'I',
              'J',
              'K',
              'L',
              'M',
              'N',
              'O',
              'P',
              'Q',
              'R',
              'S',
              'T',
              'U',
              'V',
              'W',
              'X',
              'Y',
              'Z'
            ])

            expect(bite([1, 2, 3], +0, +2)).to.eql([1, 2, 3])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [-25, -25]', () => {
            expect(bite(ARRAY, -25, -25)).to.eql(['A'])

            expect(bite([1, 2, 3], -25, -25)).to.eql([1])
          })
        })

        describe('The first index is larger than the second', () => {
          it('gets the items between the first index and second index inclusive [-0, -25]', () => {
            expect(bite(ARRAY, -0, -25)).to.eql(['A'])

            expect(bite([1, 2, 3], -0, -2)).to.eql([1])
          })
        })
      })
    })

    describe('Reverse', () => {
      describe('Positive indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [+0, +0]', () => {
            expect(bite(ARRAY, +0, +0)).to.eql(['A'])

            expect(bite([1, 2, 3], +0, +0)).to.eql([1])
          })
        })

        describe('The first index is larger than the second', () => {
          it('gets the items between the first index and second index inclusive [+25, +0]', () => {
            expect(bite(ARRAY, +25, +0)).to.eql([
              'Z',
              'Y',
              'X',
              'W',
              'V',
              'U',
              'T',
              'S',
              'R',
              'Q',
              'P',
              'O',
              'N',
              'M',
              'L',
              'K',
              'J',
              'I',
              'H',
              'G',
              'F',
              'E',
              'D',
              'C',
              'B',
              'A'
            ])

            expect(bite([1, 2, 3], +2, +0)).to.eql([3, 2, 1])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first item is equal to the second', () => {
          it('gets the items between the first index and second index inclusive [-0, -0]', () => {
            expect(bite(ARRAY, -0, -0)).to.eql([
              'Z',
              'Y',
              'X',
              'W',
              'V',
              'U',
              'T',
              'S',
              'R',
              'Q',
              'P',
              'O',
              'N',
              'M',
              'L',
              'K',
              'J',
              'I',
              'H',
              'G',
              'F',
              'E',
              'D',
              'C',
              'B',
              'A'
            ])

            expect(bite([1, 2, 3], -0, -0)).to.eql([3, 2, 1])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('gets the items between the first index and second index inclusive [-25, -0]', () => {
            expect(bite(ARRAY, -25, -0)).to.eql(['A'])

            expect(bite([1, 2, 3], -2, -0)).to.eql([1])
          })
        })
      })
    })
  })

  describe('`iterateForward()`', () => {
    describe('The array has one item', () => {
      it('iterates for one item', () => {
        const spy = sinon.spy()

        const returnValue = iterateForward(['A'], spy)

        expect(spy.callCount).to.equal(1)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for one item', () => {
        const spy = sinon.spy()

        iterateForward(['A'], spy)

        expect(spy.callCount).to.equal(1)

        expect(spy.args).to.eql([
          ['A', 0, 0, ['A']]
        ])
      })
    })

    describe('The array has more than one item', () => {
      it('iterates for each item', () => {
        const spy = sinon.spy()

        const returnValue = iterateForward(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for each item', () => {
        const spy = sinon.spy()

        iterateForward(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        expect(spy.args).to.eql([
          ['A', 0, 25, ARRAY],
          ['B', 1, 25, ARRAY],
          ['C', 2, 25, ARRAY],
          ['D', 3, 25, ARRAY],
          ['E', 4, 25, ARRAY],
          ['F', 5, 25, ARRAY],
          ['G', 6, 25, ARRAY],
          ['H', 7, 25, ARRAY],
          ['I', 8, 25, ARRAY],
          ['J', 9, 25, ARRAY],
          ['K', 10, 25, ARRAY],
          ['L', 11, 25, ARRAY],
          ['M', 12, 25, ARRAY],
          ['N', 13, 25, ARRAY],
          ['O', 14, 25, ARRAY],
          ['P', 15, 25, ARRAY],
          ['Q', 16, 25, ARRAY],
          ['R', 17, 25, ARRAY],
          ['S', 18, 25, ARRAY],
          ['T', 19, 25, ARRAY],
          ['U', 20, 25, ARRAY],
          ['V', 21, 25, ARRAY],
          ['W', 22, 25, ARRAY],
          ['X', 23, 25, ARRAY],
          ['Y', 24, 25, ARRAY],
          ['Z', 25, 25, ARRAY]
        ])
      })
    })

    describe('The array has no items', () => {
      it('does not iterate', () => {
        const spy = sinon.spy()

        const returnValue = iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        return expect(returnValue).to.be.false
      })

      it('does not call the callback', () => {
        const spy = sinon.spy()

        iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        expect(spy.args).to.eql([])
      })
    })
  })

  describe('`iterateReverse()`', () => {
    describe('The array has one item', () => {
      it('iterates for one item', () => {
        const spy = sinon.spy()

        const returnValue = iterateReverse(['Z'], spy)

        expect(spy.callCount).to.equal(1)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for one item', () => {
        const spy = sinon.spy()

        iterateReverse(['Z'], spy)

        expect(spy.args).to.eql([
          ['Z', 0, 0, ['Z']]
        ])
      })
    })

    describe('The array has many items', () => {
      it('iterates for each item', () => {
        const spy = sinon.spy()

        const returnValue = iterateReverse(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        return expect(returnValue).to.be.true
      })

      it('calls the callback for each item', () => {
        const spy = sinon.spy()

        iterateReverse(ARRAY, spy)

        expect(spy.callCount).to.equal(26)

        expect(spy.args).to.eql([
          ['Z', 25, 25, ARRAY],
          ['Y', 24, 25, ARRAY],
          ['X', 23, 25, ARRAY],
          ['W', 22, 25, ARRAY],
          ['V', 21, 25, ARRAY],
          ['U', 20, 25, ARRAY],
          ['T', 19, 25, ARRAY],
          ['S', 18, 25, ARRAY],
          ['R', 17, 25, ARRAY],
          ['Q', 16, 25, ARRAY],
          ['P', 15, 25, ARRAY],
          ['O', 14, 25, ARRAY],
          ['N', 13, 25, ARRAY],
          ['M', 12, 25, ARRAY],
          ['L', 11, 25, ARRAY],
          ['K', 10, 25, ARRAY],
          ['J', 9, 25, ARRAY],
          ['I', 8, 25, ARRAY],
          ['H', 7, 25, ARRAY],
          ['G', 6, 25, ARRAY],
          ['F', 5, 25, ARRAY],
          ['E', 4, 25, ARRAY],
          ['D', 3, 25, ARRAY],
          ['C', 2, 25, ARRAY],
          ['B', 1, 25, ARRAY],
          ['A', 0, 25, ARRAY]
        ])
      })
    })

    describe('The array has no items', () => {
      it('does not iterate', () => {
        const spy = sinon.spy()

        const returnValue = iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        return expect(returnValue).to.be.false
      })

      it('does not call the callback', () => {
        const spy = sinon.spy()

        iterateForward([], spy)

        expect(spy.callCount).to.equal(0)

        expect(spy.args).to.eql([])
      })
    })
  })

  describe('`iterateBetween()`', () => {
    describe('Forward', () => {
      describe('Positive indexes', () => {
        describe('The first index is equal to the second', () => {
          it('iterates between the first index and second index inclusive [+0, +0]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +0, +0, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [+13, +13]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +13, +13, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [+25, +25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +25, +25, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('calls the callback for each item between the first index and second index inclusive [+0, +0]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +0, +0, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+13, +13]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +13, +13, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['N', 13, 13, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +25, +25, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['Z', 25, 25, ARRAY]
            ])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('iterates between the first index and second index inclusive [+0, +1]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +0, +1, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+1, +3]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +1, +3, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+0, +25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +0, +25, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 25

          it('iterates between the first index and second index inclusive [+24, +25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +24, +25, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+22, +24]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +22, +24, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+2, +23]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +2, +23, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [+0, +1]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +0, +1, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['A', 0, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+1, +3]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +1, +3, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['B', 1, 3, ARRAY],
              ['C', 2, 3, ARRAY],
              ['D', 3, 3, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+0, +25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +0, +25, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['A', 0, 25, ARRAY],
              ['B', 1, 25, ARRAY],
              ['C', 2, 25, ARRAY],
              ['D', 3, 25, ARRAY],
              ['E', 4, 25, ARRAY],
              ['F', 5, 25, ARRAY],
              ['G', 6, 25, ARRAY],
              ['H', 7, 25, ARRAY],
              ['I', 8, 25, ARRAY],
              ['J', 9, 25, ARRAY],
              ['K', 10, 25, ARRAY],
              ['L', 11, 25, ARRAY],
              ['M', 12, 25, ARRAY],
              ['N', 13, 25, ARRAY],
              ['O', 14, 25, ARRAY],
              ['P', 15, 25, ARRAY],
              ['Q', 16, 25, ARRAY],
              ['R', 17, 25, ARRAY],
              ['S', 18, 25, ARRAY],
              ['T', 19, 25, ARRAY],
              ['U', 20, 25, ARRAY],
              ['V', 21, 25, ARRAY],
              ['W', 22, 25, ARRAY],
              ['X', 23, 25, ARRAY],
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+24, +25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +24, +25, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+22, +24]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +22, +24, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['W', 22, 24, ARRAY],
              ['X', 23, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+2, +23]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +2, +23, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['C', 2, 23, ARRAY],
              ['D', 3, 23, ARRAY],
              ['E', 4, 23, ARRAY],
              ['F', 5, 23, ARRAY],
              ['G', 6, 23, ARRAY],
              ['H', 7, 23, ARRAY],
              ['I', 8, 23, ARRAY],
              ['J', 9, 23, ARRAY],
              ['K', 10, 23, ARRAY],
              ['L', 11, 23, ARRAY],
              ['M', 12, 23, ARRAY],
              ['N', 13, 23, ARRAY],
              ['O', 14, 23, ARRAY],
              ['P', 15, 23, ARRAY],
              ['Q', 16, 23, ARRAY],
              ['R', 17, 23, ARRAY],
              ['S', 18, 23, ARRAY],
              ['T', 19, 23, ARRAY],
              ['U', 20, 23, ARRAY],
              ['V', 21, 23, ARRAY],
              ['W', 22, 23, ARRAY],
              ['X', 23, 23, ARRAY]
            ])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first index is equal to the second', () => {
          it('iterates between the first index and second index inclusive [-0, -0]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -0, -0, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [-13, -13]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -13, -13, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('iterates between the first index and second index inclusive [-25, -25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -25, -25, spy)

            expect(spy.callCount).to.equal(1)

            return expect(returnValue).to.be.true
          })

          it('calls the callback for each item between the first index and second index inclusive [-0, -0]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -0, -0, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['A', -0, -0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-13, -13]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -13, -13, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['N', 13, 13, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-25, -25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -25, -25, spy)

            expect(spy.callCount).to.equal(1)

            expect(spy.args).to.eql([
              ['B', 1, 1, ARRAY]
            ])
          })
        })

        describe('The first index is smaller than the second', () => {
          it('iterates between the first index and second index inclusive [-26, -25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -26, -25, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-25, -23]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -25, -23, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-26, -1]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -26, -1, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [-2, -1]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -2, -1, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-4, -2]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -4, -2, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-24, -3]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -24, -3, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [-26, -25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -26, -25, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['A', 0, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-25, -23]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -25, -23, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['B', 1, 3, ARRAY],
              ['C', 2, 3, ARRAY],
              ['D', 3, 3, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-26, -1]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -26, -1, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['A', 0, 25, ARRAY],
              ['B', 1, 25, ARRAY],
              ['C', 2, 25, ARRAY],
              ['D', 3, 25, ARRAY],
              ['E', 4, 25, ARRAY],
              ['F', 5, 25, ARRAY],
              ['G', 6, 25, ARRAY],
              ['H', 7, 25, ARRAY],
              ['I', 8, 25, ARRAY],
              ['J', 9, 25, ARRAY],
              ['K', 10, 25, ARRAY],
              ['L', 11, 25, ARRAY],
              ['M', 12, 25, ARRAY],
              ['N', 13, 25, ARRAY],
              ['O', 14, 25, ARRAY],
              ['P', 15, 25, ARRAY],
              ['Q', 16, 25, ARRAY],
              ['R', 17, 25, ARRAY],
              ['S', 18, 25, ARRAY],
              ['T', 19, 25, ARRAY],
              ['U', 20, 25, ARRAY],
              ['V', 21, 25, ARRAY],
              ['W', 22, 25, ARRAY],
              ['X', 23, 25, ARRAY],
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-2, -1]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -2, -1, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Y', 24, 25, ARRAY],
              ['Z', 25, 25, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-4, -2]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -4, -2, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['W', 22, 24, ARRAY],
              ['X', 23, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-24, -3]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -24, -3, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['C', 2, 23, ARRAY],
              ['D', 3, 23, ARRAY],
              ['E', 4, 23, ARRAY],
              ['F', 5, 23, ARRAY],
              ['G', 6, 23, ARRAY],
              ['H', 7, 23, ARRAY],
              ['I', 8, 23, ARRAY],
              ['J', 9, 23, ARRAY],
              ['K', 10, 23, ARRAY],
              ['L', 11, 23, ARRAY],
              ['M', 12, 23, ARRAY],
              ['N', 13, 23, ARRAY],
              ['O', 14, 23, ARRAY],
              ['P', 15, 23, ARRAY],
              ['Q', 16, 23, ARRAY],
              ['R', 17, 23, ARRAY],
              ['S', 18, 23, ARRAY],
              ['T', 19, 23, ARRAY],
              ['U', 20, 23, ARRAY],
              ['V', 21, 23, ARRAY],
              ['W', 22, 23, ARRAY],
              ['X', 23, 23, ARRAY]
            ])
          })
        })
      })
    })

    describe('Reverse', () => {
      describe('Positive indexes', () => {
        describe('The first index is greater than the second', () => {
          it('iterates between the first index and second index inclusive [+1, +0]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +1, +0, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+3, +1]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +3, +1, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+25, +0]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +25, +0, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [+25, +24]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +25, +24, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [+24, +22]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +24, +22, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [+23, +2]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, +23, +2, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [+1, +0]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +1, +0, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+3, +1]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +3, +1, spy)

            expect(spy.args).to.eql([
              ['D', 3, 1, ARRAY],
              ['C', 2, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +0]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +25, +0, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['Z', 25, 0, ARRAY],
              ['Y', 24, 0, ARRAY],
              ['X', 23, 0, ARRAY],
              ['W', 22, 0, ARRAY],
              ['V', 21, 0, ARRAY],
              ['U', 20, 0, ARRAY],
              ['T', 19, 0, ARRAY],
              ['S', 18, 0, ARRAY],
              ['R', 17, 0, ARRAY],
              ['Q', 16, 0, ARRAY],
              ['P', 15, 0, ARRAY],
              ['O', 14, 0, ARRAY],
              ['N', 13, 0, ARRAY],
              ['M', 12, 0, ARRAY],
              ['L', 11, 0, ARRAY],
              ['K', 10, 0, ARRAY],
              ['J', 9, 0, ARRAY],
              ['I', 8, 0, ARRAY],
              ['H', 7, 0, ARRAY],
              ['G', 6, 0, ARRAY],
              ['F', 5, 0, ARRAY],
              ['E', 4, 0, ARRAY],
              ['D', 3, 0, ARRAY],
              ['C', 2, 0, ARRAY],
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+25, +24]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +25, +24, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Z', 25, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+24, +22]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +24, +22, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['Y', 24, 22, ARRAY],
              ['X', 23, 22, ARRAY],
              ['W', 22, 22, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [+23, +2]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, +23, +2, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['X', 23, 2, ARRAY],
              ['W', 22, 2, ARRAY],
              ['V', 21, 2, ARRAY],
              ['U', 20, 2, ARRAY],
              ['T', 19, 2, ARRAY],
              ['S', 18, 2, ARRAY],
              ['R', 17, 2, ARRAY],
              ['Q', 16, 2, ARRAY],
              ['P', 15, 2, ARRAY],
              ['O', 14, 2, ARRAY],
              ['N', 13, 2, ARRAY],
              ['M', 12, 2, ARRAY],
              ['L', 11, 2, ARRAY],
              ['K', 10, 2, ARRAY],
              ['J', 9, 2, ARRAY],
              ['I', 8, 2, ARRAY],
              ['H', 7, 2, ARRAY],
              ['G', 6, 2, ARRAY],
              ['F', 5, 2, ARRAY],
              ['E', 4, 2, ARRAY],
              ['D', 3, 2, ARRAY],
              ['C', 2, 2, ARRAY]
            ])
          })
        })
      })

      describe('Negative indexes', () => {
        describe('The first index is greater than the second', () => {
          it('iterates between the first index and second index inclusive [-25, -26]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -25, -26, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-23, -25]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -23, -25, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-1, -0]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -1, -0, spy)

            expect(spy.callCount).to.equal(26)

            return expect(returnValue).to.be.true
          }) // 26

          it('iterates between the first index and second index inclusive [-1, -2]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -1, -2, spy)

            expect(spy.callCount).to.equal(2)

            return expect(returnValue).to.be.true
          }) // 2

          it('iterates between the first index and second index inclusive [-2, -4]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -2, -4, spy)

            expect(spy.callCount).to.equal(3)

            return expect(returnValue).to.be.true
          }) // 3

          it('iterates between the first index and second index inclusive [-3, -24]', () => {
            const spy = sinon.spy()

            const returnValue = iterateBetween(ARRAY, -3, -24, spy)

            expect(spy.callCount).to.equal(22)

            return expect(returnValue).to.be.true
          }) // 22

          it('calls the callback for each item between the first index and second index inclusive [-25, -26]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -25, -26, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['B', 1, 0, ARRAY],
              ['A', 0, 0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-23, -25]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -23, -25, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['D', 3, 1, ARRAY],
              ['C', 2, 1, ARRAY],
              ['B', 1, 1, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-1, -0]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -1, -0, spy)

            expect(spy.callCount).to.equal(26)

            expect(spy.args).to.eql([
              ['Z', 25, -0, ARRAY],
              ['Y', 24, -0, ARRAY],
              ['X', 23, -0, ARRAY],
              ['W', 22, -0, ARRAY],
              ['V', 21, -0, ARRAY],
              ['U', 20, -0, ARRAY],
              ['T', 19, -0, ARRAY],
              ['S', 18, -0, ARRAY],
              ['R', 17, -0, ARRAY],
              ['Q', 16, -0, ARRAY],
              ['P', 15, -0, ARRAY],
              ['O', 14, -0, ARRAY],
              ['N', 13, -0, ARRAY],
              ['M', 12, -0, ARRAY],
              ['L', 11, -0, ARRAY],
              ['K', 10, -0, ARRAY],
              ['J', 9, -0, ARRAY],
              ['I', 8, -0, ARRAY],
              ['H', 7, -0, ARRAY],
              ['G', 6, -0, ARRAY],
              ['F', 5, -0, ARRAY],
              ['E', 4, -0, ARRAY],
              ['D', 3, -0, ARRAY],
              ['C', 2, -0, ARRAY],
              ['B', 1, -0, ARRAY],
              ['A', 0, -0, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-1, -2]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -1, -2, spy)

            expect(spy.callCount).to.equal(2)

            expect(spy.args).to.eql([
              ['Z', 25, 24, ARRAY],
              ['Y', 24, 24, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-2, -4]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -2, -4, spy)

            expect(spy.callCount).to.equal(3)

            expect(spy.args).to.eql([
              ['Y', 24, 22, ARRAY],
              ['X', 23, 22, ARRAY],
              ['W', 22, 22, ARRAY]
            ])
          })

          it('calls the callback for each item between the first index and second index inclusive [-3, -24]', () => {
            const spy = sinon.spy()

            iterateBetween(ARRAY, -3, -24, spy)

            expect(spy.callCount).to.equal(22)

            expect(spy.args).to.eql([
              ['X', 23, 2, ARRAY],
              ['W', 22, 2, ARRAY],
              ['V', 21, 2, ARRAY],
              ['U', 20, 2, ARRAY],
              ['T', 19, 2, ARRAY],
              ['S', 18, 2, ARRAY],
              ['R', 17, 2, ARRAY],
              ['Q', 16, 2, ARRAY],
              ['P', 15, 2, ARRAY],
              ['O', 14, 2, ARRAY],
              ['N', 13, 2, ARRAY],
              ['M', 12, 2, ARRAY],
              ['L', 11, 2, ARRAY],
              ['K', 10, 2, ARRAY],
              ['J', 9, 2, ARRAY],
              ['I', 8, 2, ARRAY],
              ['H', 7, 2, ARRAY],
              ['G', 6, 2, ARRAY],
              ['F', 5, 2, ARRAY],
              ['E', 4, 2, ARRAY],
              ['D', 3, 2, ARRAY],
              ['C', 2, 2, ARRAY]
            ])
          })
        })
      })
    })
  })

  describe('`indexOf()`', () => {
    it('Gets the index of the argument in the array', () => {
      var i, j

      /*
       * Forward
       */
      i = 0
      j = ARRAY.length

      do {
        expect(indexOf(ARRAY, ARRAY[i])).to.equal(i)
      } while (++i < j)

      /*
       * Reverse
       */
      i = ARRAY.length - 1
      j = -1
      do {
        expect(indexOf(ARRAY, ARRAY[i])).to.equal(i)
      } while (--i > j)
    })

    it('Returns `null` if the argument is an object and it is not in the array', () => expect(indexOf(ARRAY, {})).to.be.null)
    it('Returns `null` if the argument is an array and it is not in the array', () => expect(indexOf(ARRAY, [])).to.be.null)
    it('Returns `null` if the argument is a string and it is not in the array', () => expect(indexOf(ARRAY, '')).to.be.null)
    it('Returns `null` if the argument is a number and it is not in the array', () => expect(indexOf(ARRAY, 1)).to.be.null)
    it('Returns `null` if the argument is a boolean and it is not in the array', () => expect(indexOf(ARRAY, true)).to.be.null)
    it('Returns `null` if the argument is `null` and it is not in the array', () => expect(indexOf(ARRAY, null)).to.be.null)
    it('Returns `null` if the argument is `undefined` and it is not in the array', () => expect(indexOf(ARRAY, undefined)).to.be.null)
  })
})
