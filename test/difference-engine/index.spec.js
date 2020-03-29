import {
  expect
} from 'chai'

import DifferenceEngine, { inclusive, exclusive } from '@difference-engine/difference-engine'

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

describe('DifferenceEngine', () => {
  it('is a class', () => expect(DifferenceEngine).to.be.a('function'))

  describe('`DifferenceEngine.inclusive()`', () => {
    it('gets the items in the first and the and second array', () => {
      expect(DifferenceEngine.inclusive(ARRAY, ['A', 'B', 'C'])).to.eql(['A', 'B', 'C'])

      expect(DifferenceEngine.inclusive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2])).to.eql([0, 1, 2])
    })
  })

  describe('`DifferenceEngine.exclusive()`', () => {
    it('gets the item in the first but not in the and second array', () => {
      expect(DifferenceEngine.exclusive(ARRAY, ['A', 'B', 'C'])).to.eql([
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

      expect(DifferenceEngine.exclusive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2])).to.eql([3, 4, 5, 6, 7, 8, 9])
    })
  })

  describe('`inclusive()`', () => {
    it('gets the items in the first and the and second array', () => {
      expect(inclusive(ARRAY, ['A', 'B', 'C'])).to.eql(['A', 'B', 'C'])

      expect(inclusive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2])).to.eql([0, 1, 2])
    })
  })

  describe('`exclusive()`', () => {
    it('gets the item in the first but not in the and second array', () => {
      expect(exclusive(ARRAY, ['A', 'B', 'C'])).to.eql([
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

      expect(exclusive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [0, 1, 2])).to.eql([3, 4, 5, 6, 7, 8, 9])
    })
  })
})
