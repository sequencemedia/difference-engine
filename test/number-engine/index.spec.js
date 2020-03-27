import {
  expect
} from 'chai'

import NumberEngine from '@difference-engine/number-engine'

describe('NumberEngine', () => {
  it('is a class', () => expect(NumberEngine).to.be.a('function'))

  it('has `Weight`', () => expect(NumberEngine.Weight).to.be.a('function'))

  it('has `Temperature`', () => expect(NumberEngine.Temperature).to.be.a('function'))

  it('has `Distance`', () => expect(NumberEngine.Distance).to.be.a('function'))

  describe('`fromHexToDec()`', () => {
    it('gets the dec for the hex', () => {
      expect(NumberEngine.fromHexToDec('0')).to.equal(0)

      expect(NumberEngine.fromHexToDec('1')).to.equal(1)

      expect(NumberEngine.fromHexToDec('2')).to.equal(2)

      expect(NumberEngine.fromHexToDec('3')).to.equal(3)

      expect(NumberEngine.fromHexToDec('4')).to.equal(4)

      expect(NumberEngine.fromHexToDec('5')).to.equal(5)

      expect(NumberEngine.fromHexToDec('6')).to.equal(6)

      expect(NumberEngine.fromHexToDec('7')).to.equal(7)

      expect(NumberEngine.fromHexToDec('8')).to.equal(8)

      expect(NumberEngine.fromHexToDec('9')).to.equal(9)

      expect(NumberEngine.fromHexToDec('a')).to.equal(10)

      expect(NumberEngine.fromHexToDec('b')).to.equal(11)

      expect(NumberEngine.fromHexToDec('c')).to.equal(12)

      expect(NumberEngine.fromHexToDec('d')).to.equal(13)

      expect(NumberEngine.fromHexToDec('e')).to.equal(14)

      expect(NumberEngine.fromHexToDec('f')).to.equal(15)
    })
  })

  describe('`fromOctToDec()`', () => {
    it('gets the dec for the hex', () => {
      expect(NumberEngine.fromOctToDec('0')).to.equal(0)

      expect(NumberEngine.fromOctToDec('1')).to.equal(1)

      expect(NumberEngine.fromOctToDec('2')).to.equal(2)

      expect(NumberEngine.fromOctToDec('3')).to.equal(3)

      expect(NumberEngine.fromOctToDec('4')).to.equal(4)

      expect(NumberEngine.fromOctToDec('5')).to.equal(5)

      expect(NumberEngine.fromOctToDec('6')).to.equal(6)

      expect(NumberEngine.fromOctToDec('7')).to.equal(7)

      expect(NumberEngine.fromOctToDec('10')).to.equal(8)

      expect(NumberEngine.fromOctToDec('11')).to.equal(9)

      expect(NumberEngine.fromOctToDec('12')).to.equal(10)

      expect(NumberEngine.fromOctToDec('13')).to.equal(11)

      expect(NumberEngine.fromOctToDec('14')).to.equal(12)

      expect(NumberEngine.fromOctToDec('15')).to.equal(13)

      expect(NumberEngine.fromOctToDec('16')).to.equal(14)

      expect(NumberEngine.fromOctToDec('17')).to.equal(15)
    })
  })

  describe('`fibonacci()`', () => {
    it('gets the fibonacci for the index', () => {
      expect(NumberEngine.fibonacci(0)).to.equal(0)

      expect(NumberEngine.fibonacci(1)).to.equal(1)

      expect(NumberEngine.fibonacci(2)).to.equal(1)

      expect(NumberEngine.fibonacci(3)).to.equal(2)

      expect(NumberEngine.fibonacci(4)).to.equal(3)
    })
  })

  describe('`haversine()`', () => {
    it('gets the haversine for the points', () => {
      expect(NumberEngine.haversine({ from: { lat: 51.4934, lng: 0.0098 }, to: { lat: 40.7128, lng: 74.0060 } }).km()).to.equal(5584.5936848728625)

      expect(NumberEngine.haversine({ from: { lat: 51.4934, lng: 0.0098 }, to: { lat: 40.7128, lng: 74.0060 } }).mi()).to.equal(3470.0132914943797)

      expect(NumberEngine.haversine({ to: { lat: 51.4934, lng: 0.0098 }, from: { lat: 40.7128, lng: 74.0060 } }).km()).to.equal(5584.5936848728625)

      expect(NumberEngine.haversine({ to: { lat: 51.4934, lng: 0.0098 }, from: { lat: 40.7128, lng: 74.0060 } }).mi()).to.equal(3470.0132914943797)
    })
  })
})
