import {
  expect
} from 'chai'

import Temperature, {
  fromFToC,
  fromCToF
} from '#number-engine/temperature'

describe('Temperature', () => {
  it('is a class', () => expect(Temperature).to.be.a('function'))

  describe('`Temperature.fromFToC()`', () => {
    it('gets farenheit from celcius', () => {
      expect(Temperature.fromFToC(32)).to.equal(0)

      expect(Temperature.fromFToC(50)).to.equal(10)

      expect(Temperature.fromFToC(392)).to.equal(200)

      expect(Temperature.fromFToC(5432)).to.equal(3000)

      expect(Temperature.fromFToC(72032)).to.equal(40000)
    })
  })

  describe('`Temperature.fromCToF()`', () => {
    it('gets celcius from farenheit', () => {
      expect(Temperature.fromCToF(0)).to.equal(32)

      expect(Temperature.fromCToF(10)).to.equal(50)

      expect(Temperature.fromCToF(200)).to.equal(392)

      expect(Temperature.fromCToF(3000)).to.equal(5432)

      expect(Temperature.fromCToF(40000)).to.equal(72032)
    })
  })

  describe('`fromFToC()`', () => {
    it('gets farenheit from celcius', () => {
      expect(fromFToC(32)).to.equal(0)

      expect(fromFToC(50)).to.equal(10)

      expect(fromFToC(392)).to.equal(200)

      expect(fromFToC(5432)).to.equal(3000)

      expect(fromFToC(72032)).to.equal(40000)
    })
  })

  describe('`fromCToF()`', () => {
    it('gets celcius from farenheit', () => {
      expect(fromCToF(0)).to.equal(32)

      expect(fromCToF(10)).to.equal(50)

      expect(fromCToF(200)).to.equal(392)

      expect(fromCToF(3000)).to.equal(5432)

      expect(fromCToF(40000)).to.equal(72032)
    })
  })
})
