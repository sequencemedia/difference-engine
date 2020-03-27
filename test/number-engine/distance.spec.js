import {
  expect
} from 'chai'

import Distance from '@difference-engine/number-engine/distance'

describe('Distance', () => {
  it('is a class', () => expect(Distance).to.be.a('function'))

  describe('`fromKmToMt()`', () => {
    it('converts kilometre to metre', () => {
      expect(Distance.fromKmToMt(0)).to.equal(0)

      expect(Distance.fromKmToMt(10)).to.equal(10000)

      expect(Distance.fromKmToMt(200)).to.equal(200000)

      expect(Distance.fromKmToMt(3000)).to.equal(3000000)

      expect(Distance.fromKmToMt(40000)).to.equal(40000000)
    })
  })

  describe('`fromKmToCm()`', () => {
    it('converts kilometre to centimetre', () => {
      expect(Distance.fromKmToCm(0)).to.equal(0)

      expect(Distance.fromKmToCm(10)).to.equal(1000000)

      expect(Distance.fromKmToCm(200)).to.equal(20000000)

      expect(Distance.fromKmToCm(3000)).to.equal(300000000)

      expect(Distance.fromKmToCm(40000)).to.equal(4000000000)
    })
  })

  describe('`fromKmToMm()`', () => {
    it('converts kilometre to milimetre', () => {
      expect(Distance.fromKmToMm(0)).to.equal(0)

      expect(Distance.fromKmToMm(10)).to.equal(10000000)

      expect(Distance.fromKmToMm(200)).to.equal(200000000)

      expect(Distance.fromKmToMm(3000)).to.equal(3000000000)

      expect(Distance.fromKmToMm(40000)).to.equal(40000000000)
    })
  })

  xdescribe('`fromKmToMi()`', () => {
    it('converts kilometre to mile', () => {
      expect(Distance.fromKmToMi(0)).to.equal(0)

      expect(Distance.fromKmToMi(10)).to.equal(352.739619)

      expect(Distance.fromKmToMi(200)).to.equal(7054.79238)

      expect(Distance.fromKmToMi(3000)).to.equal(105821.8857)

      expect(Distance.fromKmToMi(40000)).to.equal(1410958.4759999998)
    })
  })

  xdescribe('`fromKmToYd()`', () => {
    it('converts kilometre to yard', () => {
      expect(Distance.fromKmToYd(0)).to.equal(0)

      expect(Distance.fromKmToYd(10)).to.equal(22.0462261875)

      expect(Distance.fromKmToYd(200)).to.equal(440.92452375)

      expect(Distance.fromKmToYd(3000)).to.equal(6613.86785625)

      expect(Distance.fromKmToYd(40000)).to.equal(88184.90474999999)
    })
  })

  xdescribe('`fromKmToFt()`', () => {
    it('converts kilometre to feet', () => {
      expect(Distance.fromKmToFt(0)).to.equal(0)

      expect(Distance.fromKmToFt(10)).to.equal(1.5747304419642858)

      expect(Distance.fromKmToFt(200)).to.equal(31.494608839285714)

      expect(Distance.fromKmToFt(3000)).to.equal(472.4191325892857)

      expect(Distance.fromKmToFt(40000)).to.equal(6298.921767857142)
    })
  })

  xdescribe('`fromKmToIn()`', () => {
    it('converts kilometre to inch', () => {
      expect(Distance.fromKmToIn(0)).to.equal(0)

      expect(Distance.fromKmToIn(10)).to.equal(1.5747304419642858)

      expect(Distance.fromKmToIn(200)).to.equal(31.494608839285714)

      expect(Distance.fromKmToIn(3000)).to.equal(472.4191325892857)

      expect(Distance.fromKmToIn(40000)).to.equal(6298.921767857142)
    })
  })

  describe('`fromMtToKm()`', () => {
    it('converts metre to kilometre', () => {
      expect(Distance.fromMtToKm(0)).to.equal(0)

      expect(Distance.fromMtToKm(10)).to.equal(0.01)

      expect(Distance.fromMtToKm(200)).to.equal(0.2)

      expect(Distance.fromMtToKm(3000)).to.equal(3)

      expect(Distance.fromMtToKm(40000)).to.equal(40)
    })
  })

  describe('`fromMtToCm()`', () => {
    it('converts metre to centimetre', () => {
      expect(Distance.fromMtToCm(0)).to.equal(0)

      expect(Distance.fromMtToCm(10)).to.equal(1000)

      expect(Distance.fromMtToCm(200)).to.equal(20000)

      expect(Distance.fromMtToCm(3000)).to.equal(300000)

      expect(Distance.fromMtToCm(40000)).to.equal(4000000)
    })
  })

  describe('`fromMtToMm()`', () => {
    it('converts metre to milimetre', () => {
      expect(Distance.fromMtToMm(0)).to.equal(0)

      expect(Distance.fromMtToMm(10)).to.equal(10000)

      expect(Distance.fromMtToMm(200)).to.equal(200000)

      expect(Distance.fromMtToMm(3000)).to.equal(3000000)

      expect(Distance.fromMtToMm(40000)).to.equal(40000000)
    })
  })

  xdescribe('`fromMtToMi()`', () => {
    it('converts metre to mile', () => {
      expect(Distance.fromMtToMi(0)).to.equal(0)

      expect(Distance.fromMtToMi(10)).to.equal(0.35273961899999995)

      expect(Distance.fromMtToMi(200)).to.equal(7.054792379999999)

      expect(Distance.fromMtToMi(3000)).to.equal(105.8218857)

      expect(Distance.fromMtToMi(40000)).to.equal(1410.958476)
    })
  })

  xdescribe('`fromMtToYd()`', () => {
    it('converts metre to yard', () => {
      expect(Distance.fromMtToYd(0)).to.equal(0)

      expect(Distance.fromMtToYd(10)).to.equal(0.022046226187499997)

      expect(Distance.fromMtToYd(200)).to.equal(0.44092452374999996)

      expect(Distance.fromMtToYd(3000)).to.equal(6.61386785625)

      expect(Distance.fromMtToYd(40000)).to.equal(88.18490475)
    })
  })

  xdescribe('`fromMtToFt()`', () => {
    it('converts metre to feet', () => {
      expect(Distance.fromMtToFt(0)).to.equal(0)

      expect(Distance.fromMtToFt(10)).to.equal(0.0015747304419642856)

      expect(Distance.fromMtToFt(200)).to.equal(0.03149460883928571)

      expect(Distance.fromMtToFt(3000)).to.equal(0.4724191325892857)

      expect(Distance.fromMtToFt(40000)).to.equal(6.298921767857143)
    })
  })

  xdescribe('`fromMtToIn()`', () => {
    it('converts metre to inch', () => {
      expect(Distance.fromMtToIn(0)).to.equal(0)

      expect(Distance.fromMtToIn(10)).to.equal(0.0015747304419642856)

      expect(Distance.fromMtToIn(200)).to.equal(0.03149460883928571)

      expect(Distance.fromMtToIn(3000)).to.equal(0.4724191325892857)

      expect(Distance.fromMtToIn(40000)).to.equal(6.298921767857143)
    })
  })

  describe('`fromCmToKm()`', () => {
    it('converts centimetre to kilometre', () => {
      expect(Distance.fromCmToKm(0)).to.equal(0)

      expect(Distance.fromCmToKm(10)).to.equal(0.0001)

      expect(Distance.fromCmToKm(200)).to.equal(0.002)

      expect(Distance.fromCmToKm(3000)).to.equal(0.03)

      expect(Distance.fromCmToKm(40000)).to.equal(0.4)
    })
  })

  describe('`fromCmToMt()`', () => {
    it('converts centimetre to metre', () => {
      expect(Distance.fromCmToMt(0)).to.equal(0)

      expect(Distance.fromCmToMt(10)).to.equal(0.1)

      expect(Distance.fromCmToMt(200)).to.equal(2)

      expect(Distance.fromCmToMt(3000)).to.equal(30)

      expect(Distance.fromCmToMt(40000)).to.equal(400)
    })
  })

  describe('`fromCmToMm()`', () => {
    it('converts centimetre to metre', () => {
      expect(Distance.fromCmToMm(0)).to.equal(0)

      expect(Distance.fromCmToMm(10)).to.equal(100)

      expect(Distance.fromCmToMm(200)).to.equal(2000)

      expect(Distance.fromCmToMm(3000)).to.equal(30000)

      expect(Distance.fromCmToMm(40000)).to.equal(400000)
    })
  })

  xdescribe('`fromCmToMi()`', () => {
    it('converts centimetre to mile', () => {
      expect(Distance.fromCmToMi(0)).to.equal(0)

      expect(Distance.fromCmToMi(10)).to.equal(0.000352739619)

      expect(Distance.fromCmToMi(200)).to.equal(0.00705479238)

      expect(Distance.fromCmToMi(3000)).to.equal(0.10582188569999999)

      expect(Distance.fromCmToMi(40000)).to.equal(1.4109584759999998)
    })
  })

  xdescribe('`fromCmToYd()`', () => {
    it('converts centimetre to yard', () => {
      expect(Distance.fromCmToYd(0)).to.equal(0)

      expect(Distance.fromCmToYd(10)).to.equal(0.0000220462261875)

      expect(Distance.fromCmToYd(200)).to.equal(0.00044092452375)

      expect(Distance.fromCmToYd(3000)).to.equal(0.0066138678562499996)

      expect(Distance.fromCmToYd(40000)).to.equal(0.08818490474999999)
    })
  })

  xdescribe('`fromCmToFt()`', () => {
    it('converts centimetre to feet', () => {
      expect(Distance.fromCmToFt(0)).to.equal(0)

      expect(Distance.fromCmToFt(10)).to.equal(0.0000015747304419642857)

      expect(Distance.fromCmToFt(200)).to.equal(0.000031494608839285716)

      expect(Distance.fromCmToFt(3000)).to.equal(0.0004724191325892857)

      expect(Distance.fromCmToFt(40000)).to.equal(0.006298921767857142)
    })
  })

  xdescribe('`fromCmToIn()`', () => {
    it('converts centimetre to inch', () => {
      expect(Distance.fromCmToIn(0)).to.equal(0)

      expect(Distance.fromCmToIn(10)).to.equal(0.0000015747304419642857)

      expect(Distance.fromCmToIn(200)).to.equal(0.000031494608839285716)

      expect(Distance.fromCmToIn(3000)).to.equal(0.0004724191325892857)

      expect(Distance.fromCmToIn(40000)).to.equal(0.006298921767857142)
    })
  })

  describe('`fromMmToKm()`', () => {
    it('converts milimetre to kilometre', () => {
      expect(Distance.fromMmToKm(0)).to.equal(0)

      expect(Distance.fromMmToKm(10)).to.equal(0.00001)

      expect(Distance.fromMmToKm(200)).to.equal(0.0002)

      expect(Distance.fromMmToKm(3000)).to.equal(0.003)

      expect(Distance.fromMmToKm(40000)).to.equal(0.04)
    })
  })

  describe('`fromMmToMt()`', () => {
    it('converts milimetre to metre', () => {
      expect(Distance.fromMmToMt(0)).to.equal(0)

      expect(Distance.fromMmToMt(10)).to.equal(0.01)

      expect(Distance.fromMmToMt(200)).to.equal(0.2)

      expect(Distance.fromMmToMt(3000)).to.equal(3)

      expect(Distance.fromMmToMt(40000)).to.equal(40)
    })
  })

  describe('`fromMmToCm()`', () => {
    it('converts milimetre to centimetre', () => {
      expect(Distance.fromMmToCm(0)).to.equal(0)

      expect(Distance.fromMmToCm(10)).to.equal(1)

      expect(Distance.fromMmToCm(200)).to.equal(20)

      expect(Distance.fromMmToCm(3000)).to.equal(300)

      expect(Distance.fromMmToCm(40000)).to.equal(4000)
    })
  })

  xdescribe('`fromMmToMi()`', () => {
    it('converts centimetre to mile', () => {
      expect(Distance.fromMmToMi(0)).to.equal(0)

      expect(Distance.fromMmToMi(10)).to.equal(0.000352739619)

      expect(Distance.fromMmToMi(200)).to.equal(0.00705479238)

      expect(Distance.fromMmToMi(3000)).to.equal(0.10582188569999999)

      expect(Distance.fromMmToMi(40000)).to.equal(1.4109584759999998)
    })
  })

  xdescribe('`fromMmToYd()`', () => {
    it('converts centimetre to yard', () => {
      expect(Distance.fromMmToYd(0)).to.equal(0)

      expect(Distance.fromMmToYd(10)).to.equal(0.0000220462261875)

      expect(Distance.fromMmToYd(200)).to.equal(0.00044092452375)

      expect(Distance.fromMmToYd(3000)).to.equal(0.0066138678562499996)

      expect(Distance.fromMmToYd(40000)).to.equal(0.08818490474999999)
    })
  })

  xdescribe('`fromMmToFt()`', () => {
    it('converts centimetre to feet', () => {
      expect(Distance.fromMmToFt(0)).to.equal(0)

      expect(Distance.fromMmToFt(10)).to.equal(0.0000015747304419642857)

      expect(Distance.fromMmToFt(200)).to.equal(0.000031494608839285716)

      expect(Distance.fromMmToFt(3000)).to.equal(0.0004724191325892857)

      expect(Distance.fromMmToFt(40000)).to.equal(0.006298921767857142)
    })
  })

  xdescribe('`fromMmToIn()`', () => {
    it('converts centimetre to inch', () => {
      expect(Distance.fromMmToIn(0)).to.equal(0)

      expect(Distance.fromMmToIn(10)).to.equal(0.0000015747304419642857)

      expect(Distance.fromMmToIn(200)).to.equal(0.000031494608839285716)

      expect(Distance.fromMmToIn(3000)).to.equal(0.0004724191325892857)

      expect(Distance.fromMmToIn(40000)).to.equal(0.006298921767857142)
    })
  })

  xdescribe('`fromMiToKm()`', () => {
    it('converts mile to kilometre', () => {
      expect(Distance.fromMiToKm(0)).to.equal(0)

      expect(Distance.fromMiToKm(10)).to.equal(0.283495231)

      expect(Distance.fromMiToKm(200)).to.equal(5.66990462)

      expect(Distance.fromMiToKm(3000)).to.equal(85.0485693)

      expect(Distance.fromMiToKm(40000)).to.equal(1133.980924)
    })
  })

  xdescribe('`fromMiToMt()`', () => {
    it('converts mile to metre', () => {
      expect(Distance.fromMiToMt(0)).to.equal(0)

      expect(Distance.fromMiToMt(10)).to.equal(283.495231)

      expect(Distance.fromMiToMt(200)).to.equal(5669.904619999999)

      expect(Distance.fromMiToMt(3000)).to.equal(85048.5693)

      expect(Distance.fromMiToMt(40000)).to.equal(1133980.9239999999)
    })
  })

  xdescribe('`fromMiToCm()`', () => {
    it('converts mile to centimetre', () => {
      expect(Distance.fromMiToCm(0)).to.equal(0)

      expect(Distance.fromMiToCm(10)).to.equal(283495.23099999997)

      expect(Distance.fromMiToCm(200)).to.equal(5669904.619999999)

      expect(Distance.fromMiToCm(3000)).to.equal(85048569.3)

      expect(Distance.fromMiToCm(40000)).to.equal(1133980924)
    })
  })

  xdescribe('`fromMiToMm()`', () => {
    it('converts mile to milimetre', () => {
      expect(Distance.fromMiToMm(0)).to.equal(0)

      expect(Distance.fromMiToMm(10)).to.equal(283495.23099999997)

      expect(Distance.fromMiToMm(200)).to.equal(5669904.619999999)

      expect(Distance.fromMiToMm(3000)).to.equal(85048569.3)

      expect(Distance.fromMiToMm(40000)).to.equal(1133980924)
    })
  })

  describe('`fromMiToYd()`', () => {
    it('converts mile to yard', () => {
      expect(Distance.fromMiToYd(0)).to.equal(0)

      expect(Distance.fromMiToYd(10)).to.equal(17600)

      expect(Distance.fromMiToYd(200)).to.equal(352000)

      expect(Distance.fromMiToYd(3000)).to.equal(5280000)

      expect(Distance.fromMiToYd(40000)).to.equal(70400000)
    })
  })

  describe('`fromMiToFt()`', () => {
    it('converts mile to feet', () => {
      expect(Distance.fromMiToFt(0)).to.equal(0)

      expect(Distance.fromMiToFt(10)).to.equal(52800)

      expect(Distance.fromMiToFt(200)).to.equal(1056000)

      expect(Distance.fromMiToFt(3000)).to.equal(15840000)

      expect(Distance.fromMiToFt(40000)).to.equal(211200000)
    })
  })

  describe('`fromMiToIn()`', () => {
    it('converts mile to inch', () => {
      expect(Distance.fromMiToIn(0)).to.equal(0)

      expect(Distance.fromMiToIn(10)).to.equal(633600)

      expect(Distance.fromMiToIn(200)).to.equal(12672000)

      expect(Distance.fromMiToIn(3000)).to.equal(190080000)

      expect(Distance.fromMiToIn(40000)).to.equal(2534400000)
    })
  })

  xdescribe('`fromYdToKm()`', () => {
    it('converts yard to kilometre', () => {
      expect(Distance.fromYdToKm(0)).to.equal(0)

      expect(Distance.fromYdToKm(10)).to.equal(4.535923696)

      expect(Distance.fromYdToKm(200)).to.equal(90.71847392)

      expect(Distance.fromYdToKm(3000)).to.equal(1360.7771088)

      expect(Distance.fromYdToKm(40000)).to.equal(18143.694784)
    })
  })

  xdescribe('`fromYdToMt()`', () => {
    it('converts yard to metre', () => {
      expect(Distance.fromYdToMt(0)).to.equal(0)

      expect(Distance.fromYdToMt(10)).to.equal(4535.923696)

      expect(Distance.fromYdToMt(200)).to.equal(90718.47391999999)

      expect(Distance.fromYdToMt(3000)).to.equal(1360777.1088)

      expect(Distance.fromYdToMt(40000)).to.equal(18143694.783999998)
    })
  })

  xdescribe('`fromYdToCm()`', () => {
    it('converts yard to centimetre', () => {
      expect(Distance.fromYdToCm(0)).to.equal(0)

      expect(Distance.fromYdToCm(10)).to.equal(4535923.6959999995)

      expect(Distance.fromYdToCm(200)).to.equal(90718473.91999999)

      expect(Distance.fromYdToCm(3000)).to.equal(1360777108.8)

      expect(Distance.fromYdToCm(40000)).to.equal(18143694784)
    })
  })

  xdescribe('`fromYdToMm()`', () => {
    it('converts yard to miliimetre', () => {
      expect(Distance.fromYdToMm(0)).to.equal(0)

      expect(Distance.fromYdToMm(10)).to.equal(4535923.6959999995)

      expect(Distance.fromYdToMm(200)).to.equal(90718473.91999999)

      expect(Distance.fromYdToMm(3000)).to.equal(1360777108.8)

      expect(Distance.fromYdToMm(40000)).to.equal(18143694784)
    })
  })

  describe('`fromYdToMi()`', () => {
    it('converts yard to yard', () => {
      expect(Distance.fromYdToMi(0)).to.equal(0)

      expect(Distance.fromYdToMi(10)).to.equal(0.005681818181818182)

      expect(Distance.fromYdToMi(200)).to.equal(0.11363636363636363)

      expect(Distance.fromYdToMi(3000)).to.equal(1.7045454545454546)

      expect(Distance.fromYdToMi(40000)).to.equal(22.727272727272727)
    })
  })

  describe('`fromYdToFt()`', () => {
    it('converts yard to feet', () => {
      expect(Distance.fromYdToFt(0)).to.equal(0)

      expect(Distance.fromYdToFt(10)).to.equal(30)

      expect(Distance.fromYdToFt(200)).to.equal(600)

      expect(Distance.fromYdToFt(3000)).to.equal(9000)

      expect(Distance.fromYdToFt(40000)).to.equal(120000)
    })
  })

  describe('`fromYdToIn()`', () => {
    it('converts yard to inch', () => {
      expect(Distance.fromYdToIn(0)).to.equal(0)

      expect(Distance.fromYdToIn(10)).to.equal(360)

      expect(Distance.fromYdToIn(200)).to.equal(7200)

      expect(Distance.fromYdToIn(3000)).to.equal(108000)

      expect(Distance.fromYdToIn(40000)).to.equal(1440000)
    })
  })

  xdescribe('`fromFtToKm()`', () => {
    it('converts feet to kilometre', () => {
      expect(Distance.fromFtToKm(0)).to.equal(0)

      expect(Distance.fromFtToKm(10)).to.equal(63.502931744)

      expect(Distance.fromFtToKm(200)).to.equal(1270.05863488)

      expect(Distance.fromFtToKm(3000)).to.equal(19050.879523199997)

      expect(Distance.fromFtToKm(40000)).to.equal(254011.72697599998)
    })
  })

  xdescribe('`fromFtToMt()`', () => {
    it('converts feet to metre', () => {
      expect(Distance.fromFtToMt(0)).to.equal(0)

      expect(Distance.fromFtToMt(10)).to.equal(63502.931744)

      expect(Distance.fromFtToMt(200)).to.equal(1270058.63488)

      expect(Distance.fromFtToMt(3000)).to.equal(19050879.523199998)

      expect(Distance.fromFtToMt(40000)).to.equal(254011726.97599998)
    })
  })

  xdescribe('`fromFtToCm()`', () => {
    it('converts feet to centimetre', () => {
      expect(Distance.fromFtToCm(0)).to.equal(0)

      expect(Distance.fromFtToCm(10)).to.equal(63502931.744)

      expect(Distance.fromFtToCm(200)).to.equal(1270058634.88)

      expect(Distance.fromFtToCm(3000)).to.equal(19050879523.199997)

      expect(Distance.fromFtToCm(40000)).to.equal(254011726975.99997)
    })
  })

  xdescribe('`fromFtToMm()`', () => {
    it('converts feet to milimetre', () => {
      expect(Distance.fromFtToMm(0)).to.equal(0)

      expect(Distance.fromFtToMm(10)).to.equal(63502931.744)

      expect(Distance.fromFtToMm(200)).to.equal(1270058634.88)

      expect(Distance.fromFtToMm(3000)).to.equal(19050879523.199997)

      expect(Distance.fromFtToMm(40000)).to.equal(254011726975.99997)
    })
  })

  describe('`fromFtToMi()`', () => {
    it('converts feet to mile', () => {
      expect(Distance.fromFtToMi(0)).to.equal(0)

      expect(Distance.fromFtToMi(10)).to.equal(0.001893939393939394)

      expect(Distance.fromFtToMi(200)).to.equal(0.03787878787878788)

      expect(Distance.fromFtToMi(3000)).to.equal(0.5681818181818182)

      expect(Distance.fromFtToMi(40000)).to.equal(7.575757575757576)
    })
  })

  describe('`fromFtToYd()`', () => {
    it('converts feet to yard', () => {
      expect(Distance.fromFtToYd(0)).to.equal(0)

      expect(Distance.fromFtToYd(10)).to.equal(3.3333333333333335)

      expect(Distance.fromFtToYd(200)).to.equal(66.66666666666667)

      expect(Distance.fromFtToYd(3000)).to.equal(1000)

      expect(Distance.fromFtToYd(40000)).to.equal(13333.333333333334)
    })
  })

  describe('`fromFtToIn()`', () => {
    it('converts feet to inch', () => {
      expect(Distance.fromFtToIn(0)).to.equal(0)

      expect(Distance.fromFtToIn(10)).to.equal(120)

      expect(Distance.fromFtToIn(200)).to.equal(2400)

      expect(Distance.fromFtToIn(3000)).to.equal(36000)

      expect(Distance.fromFtToIn(40000)).to.equal(480000)
    })
  })

  describe('`fromInToMi()`', () => {
    it('converts inch to mile', () => {
      expect(Distance.fromInToMi(0)).to.equal(0)

      expect(Distance.fromInToMi(10)).to.equal(0.00015782828282828284)

      expect(Distance.fromInToMi(200)).to.equal(0.003156565656565657)

      expect(Distance.fromInToMi(3000)).to.equal(0.04734848484848485)

      expect(Distance.fromInToMi(40000)).to.equal(0.6313131313131313)
    })
  })

  describe('`fromInToYd()`', () => {
    it('converts inch to yard', () => {
      expect(Distance.fromInToYd(0)).to.equal(0)

      expect(Distance.fromInToYd(10)).to.equal(0.2777777777777778)

      expect(Distance.fromInToYd(200)).to.equal(5.555555555555556)

      expect(Distance.fromInToYd(1000)).to.equal(27.777777777777775)

      expect(Distance.fromInToYd(40000)).to.equal(1111.111111111111)
    })
  })

  describe('`fromInToFt()`', () => {
    it('converts inch to feet', () => {
      expect(Distance.fromInToFt(0)).to.equal(0)

      expect(Distance.fromInToFt(120)).to.equal(10)

      expect(Distance.fromInToFt(2400)).to.equal(200)

      expect(Distance.fromInToFt(36000)).to.equal(3000)

      expect(Distance.fromInToFt(480000)).to.equal(40000)
    })
  })

  describe('`convert()`', () => {
    describe('`fromKm.toMt()`', () => {
      it('converts kilometre to metre', () => {
        expect(Distance.convert(0).fromKm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMt()).to.equal(10000)

        expect(Distance.convert(200).fromKm.toMt()).to.equal(200000)

        expect(Distance.convert(3000).fromKm.toMt()).to.equal(3000000)

        expect(Distance.convert(40000).fromKm.toMt()).to.equal(40000000)
      })
    })

    describe('`fromKm.toCm()`', () => {
      it('converts kilometre to centimetre', () => {
        expect(Distance.convert(0).fromKm.toCm()).to.equal(0)

        expect(Distance.convert(10).fromKm.toCm()).to.equal(1000000)

        expect(Distance.convert(200).fromKm.toCm()).to.equal(20000000)

        expect(Distance.convert(3000).fromKm.toCm()).to.equal(300000000)

        expect(Distance.convert(40000).fromKm.toCm()).to.equal(4000000000)
      })
    })

    describe('`fromKm.toMm()`', () => {
      it('converts kilometre to milimetre', () => {
        expect(Distance.convert(0).fromKm.toMm()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMm()).to.equal(10000000)

        expect(Distance.convert(200).fromKm.toMm()).to.equal(200000000)

        expect(Distance.convert(3000).fromKm.toMm()).to.equal(3000000000)

        expect(Distance.convert(40000).fromKm.toMm()).to.equal(40000000000)
      })
    })

    xdescribe('`fromKm.toMi()`', () => {
      it('converts kilometre to mile', () => {
        expect(Distance.convert(0).fromKm.toMi()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMi()).to.equal(352.739619)

        expect(Distance.convert(200).fromKm.toMi()).to.equal(7054.79238)

        expect(Distance.convert(3000).fromKm.toMi()).to.equal(105821.8857)

        expect(Distance.convert(40000).fromKm.toMi()).to.equal(1410958.4759999998)
      })
    })

    xdescribe('`fromKm.toYd()`', () => {
      it('converts kilometre to yard', () => {
        expect(Distance.convert(0).fromKm.toYd()).to.equal(0)

        expect(Distance.convert(10).fromKm.toYd()).to.equal(22.0462261875)

        expect(Distance.convert(200).fromKm.toYd()).to.equal(440.92452375)

        expect(Distance.convert(3000).fromKm.toYd()).to.equal(6613.86785625)

        expect(Distance.convert(40000).fromKm.toYd()).to.equal(88184.90474999999)
      })
    })

    xdescribe('`fromKm.toFt()`', () => {
      it('converts kilometre to feet', () => {
        expect(Distance.convert(0).fromKm.toFt()).to.equal(0)

        expect(Distance.convert(10).fromKm.toFt()).to.equal(1.5747304419642858)

        expect(Distance.convert(200).fromKm.toFt()).to.equal(31.494608839285714)

        expect(Distance.convert(3000).fromKm.toFt()).to.equal(472.4191325892857)

        expect(Distance.convert(40000).fromKm.toFt()).to.equal(6298.921767857142)
      })
    })

    xdescribe('`fromKm.toIn()`', () => {
      it('converts kilometre to inch', () => {
        expect(Distance.convert(0).fromKm.toIn()).to.equal(0)

        expect(Distance.convert(10).fromKm.toIn()).to.equal(1.5747304419642858)

        expect(Distance.convert(200).fromKm.toIn()).to.equal(31.494608839285714)

        expect(Distance.convert(3000).fromKm.toIn()).to.equal(472.4191325892857)

        expect(Distance.convert(40000).fromKm.toIn()).to.equal(6298.921767857142)
      })
    })

    describe('`fromMt.toKm()`', () => {
      it('converts metre to kilometre', () => {
        expect(Distance.convert(0).fromMt.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toKm()).to.equal(0.01)

        expect(Distance.convert(200).fromMt.toKm()).to.equal(0.2)

        expect(Distance.convert(3000).fromMt.toKm()).to.equal(3)

        expect(Distance.convert(40000).fromMt.toKm()).to.equal(40)
      })
    })

    describe('`fromMt.toCm()`', () => {
      it('converts metre to centimetre', () => {
        expect(Distance.convert(0).fromMt.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toCm()).to.equal(1000)

        expect(Distance.convert(200).fromMt.toCm()).to.equal(20000)

        expect(Distance.convert(3000).fromMt.toCm()).to.equal(300000)

        expect(Distance.convert(40000).fromMt.toCm()).to.equal(4000000)
      })
    })

    describe('`fromMt.toMm()`', () => {
      it('converts metre to milimetre', () => {
        expect(Distance.convert(0).fromMt.toMm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toMm()).to.equal(10000)

        expect(Distance.convert(200).fromMt.toMm()).to.equal(200000)

        expect(Distance.convert(3000).fromMt.toMm()).to.equal(3000000)

        expect(Distance.convert(40000).fromMt.toMm()).to.equal(40000000)
      })
    })

    xdescribe('`fromMt.toMi()`', () => {
      it('converts metre to mile', () => {
        expect(Distance.convert(0).fromMt.toMi()).to.equal(0)

        expect(Distance.convert(10).fromMt.toMi()).to.equal(0.35273961899999995)

        expect(Distance.convert(200).fromMt.toMi()).to.equal(7.054792379999999)

        expect(Distance.convert(3000).fromMt.toMi()).to.equal(105.8218857)

        expect(Distance.convert(40000).fromMt.toMi()).to.equal(1410.958476)
      })
    })

    xdescribe('`fromMt.toYd()`', () => {
      it('converts metre to yard', () => {
        expect(Distance.convert(0).fromMt.toYd()).to.equal(0)

        expect(Distance.convert(10).fromMt.toYd()).to.equal(0.022046226187499997)

        expect(Distance.convert(200).fromMt.toYd()).to.equal(0.44092452374999996)

        expect(Distance.convert(3000).fromMt.toYd()).to.equal(6.61386785625)

        expect(Distance.convert(40000).fromMt.toYd()).to.equal(88.18490475)
      })
    })

    xdescribe('`fromMt.toFt()`', () => {
      it('converts metre to feet', () => {
        expect(Distance.convert(0).fromMt.toFt()).to.equal(0)

        expect(Distance.convert(10).fromMt.toFt()).to.equal(0.0015747304419642856)

        expect(Distance.convert(200).fromMt.toFt()).to.equal(0.03149460883928571)

        expect(Distance.convert(3000).fromMt.toFt()).to.equal(0.4724191325892857)

        expect(Distance.convert(40000).fromMt.toFt()).to.equal(6.298921767857143)
      })
    })

    xdescribe('`fromMt.toIn()`', () => {
      it('converts metre to inch', () => {
        expect(Distance.convert(0).fromMt.toIn()).to.equal(0)

        expect(Distance.convert(10).fromMt.toIn()).to.equal(0.0015747304419642856)

        expect(Distance.convert(200).fromMt.toIn()).to.equal(0.03149460883928571)

        expect(Distance.convert(3000).fromMt.toIn()).to.equal(0.4724191325892857)

        expect(Distance.convert(40000).fromMt.toIn()).to.equal(6.298921767857143)
      })
    })

    describe('`fromCm.toKm()`', () => {
      it('converts centimetre to kilometre', () => {
        expect(Distance.convert(0).fromCm.toKm()).to.equal(0)

        expect(Distance.convert(10).fromCm.toKm()).to.equal(0.0001)

        expect(Distance.convert(200).fromCm.toKm()).to.equal(0.002)

        expect(Distance.convert(3000).fromCm.toKm()).to.equal(0.03)

        expect(Distance.convert(40000).fromCm.toKm()).to.equal(0.4)
      })
    })

    describe('`fromCm.toMt()`', () => {
      it('converts centimetre to metre', () => {
        expect(Distance.convert(0).fromCm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMt()).to.equal(0.1)

        expect(Distance.convert(200).fromCm.toMt()).to.equal(2)

        expect(Distance.convert(3000).fromCm.toMt()).to.equal(30)

        expect(Distance.convert(40000).fromCm.toMt()).to.equal(400)
      })
    })

    describe('`fromCm.toMm()`', () => {
      it('converts centimetre to milimetre', () => {
        expect(Distance.convert(0).fromCm.toMm()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMm()).to.equal(100)

        expect(Distance.convert(200).fromCm.toMm()).to.equal(2000)

        expect(Distance.convert(3000).fromCm.toMm()).to.equal(30000)

        expect(Distance.convert(40000).fromCm.toMm()).to.equal(400000)
      })
    })

    xdescribe('`fromCm.toMi()`', () => {
      it('converts centimetre to mile', () => {
        expect(Distance.convert(0).fromCm.toMi()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMi()).to.equal(0.000352739619)

        expect(Distance.convert(200).fromCm.toMi()).to.equal(0.00705479238)

        expect(Distance.convert(3000).fromCm.toMi()).to.equal(0.10582188569999999)

        expect(Distance.convert(40000).fromCm.toMi()).to.equal(1.4109584759999998)
      })
    })

    xdescribe('`fromCm.toYd()`', () => {
      it('converts centimetre to yard', () => {
        expect(Distance.convert(0).fromCm.toYd()).to.equal(0)

        expect(Distance.convert(10).fromCm.toYd()).to.equal(0.0000220462261875)

        expect(Distance.convert(200).fromCm.toYd()).to.equal(0.00044092452375)

        expect(Distance.convert(3000).fromCm.toYd()).to.equal(0.0066138678562499996)

        expect(Distance.convert(40000).fromCm.toYd()).to.equal(0.08818490474999999)
      })
    })

    xdescribe('`fromCm.toFt()`', () => {
      it('converts centimetre to feet', () => {
        expect(Distance.convert(0).fromCm.toFt()).to.equal(0)

        expect(Distance.convert(10).fromCm.toFt()).to.equal(0.0000015747304419642857)

        expect(Distance.convert(200).fromCm.toFt()).to.equal(0.000031494608839285716)

        expect(Distance.convert(3000).fromCm.toFt()).to.equal(0.0004724191325892857)

        expect(Distance.convert(40000).fromCm.toFt()).to.equal(0.006298921767857142)
      })
    })

    xdescribe('`fromCm.toIn()`', () => {
      it('converts centimetre to inch', () => {
        expect(Distance.convert(0).fromCm.toIn()).to.equal(0)

        expect(Distance.convert(10).fromCm.toIn()).to.equal(0.0000015747304419642857)

        expect(Distance.convert(200).fromCm.toIn()).to.equal(0.000031494608839285716)

        expect(Distance.convert(3000).fromCm.toIn()).to.equal(0.0004724191325892857)

        expect(Distance.convert(40000).fromCm.toIn()).to.equal(0.006298921767857142)
      })
    })

    xdescribe('`fromMi.toKm()`', () => {
      it('converts mile to kilometre', () => {
        expect(Distance.convert(0).fromMi.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toKm()).to.equal(0.283495231)

        expect(Distance.convert(200).fromMi.toKm()).to.equal(5.66990462)

        expect(Distance.convert(3000).fromMi.toKm()).to.equal(85.0485693)

        expect(Distance.convert(40000).fromMi.toKm()).to.equal(1133.980924)
      })
    })

    xdescribe('`fromMi.toMt()`', () => {
      it('converts mile to metre', () => {
        expect(Distance.convert(0).fromMi.toMt()).to.equal(0)

        expect(Distance.convert(10).fromMi.toMt()).to.equal(283.495231)

        expect(Distance.convert(200).fromMi.toMt()).to.equal(5669.904619999999)

        expect(Distance.convert(3000).fromMi.toMt()).to.equal(85048.5693)

        expect(Distance.convert(40000).fromMi.toMt()).to.equal(1133980.9239999999)
      })
    })

    xdescribe('`fromMi.toCm()`', () => {
      it('converts mile to centimetre', () => {
        expect(Distance.convert(0).fromMi.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toCm()).to.equal(283495.23099999997)

        expect(Distance.convert(200).fromMi.toCm()).to.equal(5669904.619999999)

        expect(Distance.convert(3000).fromMi.toCm()).to.equal(85048569.3)

        expect(Distance.convert(40000).fromMi.toCm()).to.equal(1133980924)
      })
    })

    xdescribe('`fromMi.toMm()`', () => {
      it('converts mile to milimetre', () => {
        expect(Distance.convert(0).fromMi.toMm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toMm()).to.equal(283495.23099999997)

        expect(Distance.convert(200).fromMi.toMm()).to.equal(5669904.619999999)

        expect(Distance.convert(3000).fromMi.toMm()).to.equal(85048569.3)

        expect(Distance.convert(40000).fromMi.toMm()).to.equal(1133980924)
      })
    })

    describe('`fromMmToKm()`', () => {
      it('converts milimetre to kilometre', () => {
        expect(Distance.convert(0).fromMm.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMm.toKm()).to.equal(0.00001)

        expect(Distance.convert(200).fromMm.toKm()).to.equal(0.0002)

        expect(Distance.convert(3000).fromMm.toKm()).to.equal(0.003)

        expect(Distance.convert(40000).fromMm.toKm()).to.equal(0.04)
      })
    })

    describe('`fromMmToMt()`', () => {
      it('converts milimetre to metre', () => {
        expect(Distance.convert(0).fromMm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromMm.toMt()).to.equal(0.01)

        expect(Distance.convert(200).fromMm.toMt()).to.equal(0.2)

        expect(Distance.convert(3000).fromMm.toMt()).to.equal(3)

        expect(Distance.convert(40000).fromMm.toMt()).to.equal(40)
      })
    })

    describe('`fromMmToCm()`', () => {
      it('converts milimetre to centimetre', () => {
        expect(Distance.convert(0).fromMm.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMm.toCm()).to.equal(1)

        expect(Distance.convert(200).fromMm.toCm()).to.equal(20)

        expect(Distance.convert(3000).fromMm.toCm()).to.equal(300)

        expect(Distance.convert(40000).fromMm.toCm()).to.equal(4000)
      })
    })

    describe('`fromMi.toYd()`', () => {
      it('converts mile to yard', () => {
        expect(Distance.convert(0).fromMi.toYd()).to.equal(0)

        expect(Distance.convert(10).fromMi.toYd()).to.equal(17600)

        expect(Distance.convert(200).fromMi.toYd()).to.equal(352000)

        expect(Distance.convert(3000).fromMi.toYd()).to.equal(5280000)

        expect(Distance.convert(40000).fromMi.toYd()).to.equal(70400000)
      })
    })

    describe('`fromMi.toFt()`', () => {
      it('converts mile to feet', () => {
        expect(Distance.convert(0).fromMi.toFt()).to.equal(0)

        expect(Distance.convert(10).fromMi.toFt()).to.equal(52800)

        expect(Distance.convert(200).fromMi.toFt()).to.equal(1056000)

        expect(Distance.convert(3000).fromMi.toFt()).to.equal(15840000)

        expect(Distance.convert(40000).fromMi.toFt()).to.equal(211200000)
      })
    })

    describe('`fromMi.toIn()`', () => {
      it('converts mile to inch', () => {
        expect(Distance.convert(0).fromMi.toIn()).to.equal(0)

        expect(Distance.convert(10).fromMi.toIn()).to.equal(633600)

        expect(Distance.convert(200).fromMi.toIn()).to.equal(12672000)

        expect(Distance.convert(3000).fromMi.toIn()).to.equal(190080000)

        expect(Distance.convert(40000).fromMi.toIn()).to.equal(2534400000)
      })
    })

    xdescribe('`fromYd.toKm()`', () => {
      it('converts yard to kilometre', () => {
        expect(Distance.convert(0).fromYd.toKm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toKm()).to.equal(4.535923696)

        expect(Distance.convert(200).fromYd.toKm()).to.equal(90.71847392)

        expect(Distance.convert(3000).fromYd.toKm()).to.equal(1360.7771088)

        expect(Distance.convert(40000).fromYd.toKm()).to.equal(18143.694784)
      })
    })

    xdescribe('`fromYd.toMt()`', () => {
      it('converts yard to metre', () => {
        expect(Distance.convert(0).fromYd.toMt()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMt()).to.equal(4535.923696)

        expect(Distance.convert(200).fromYd.toMt()).to.equal(90718.47391999999)

        expect(Distance.convert(3000).fromYd.toMt()).to.equal(1360777.1088)

        expect(Distance.convert(40000).fromYd.toMt()).to.equal(18143694.783999998)
      })
    })

    xdescribe('`fromYd.toCm()`', () => {
      it('converts yard to centimetre', () => {
        expect(Distance.convert(0).fromYd.toCm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toCm()).to.equal(4535923.6959999995)

        expect(Distance.convert(200).fromYd.toCm()).to.equal(90718473.91999999)

        expect(Distance.convert(3000).fromYd.toCm()).to.equal(1360777108.8)

        expect(Distance.convert(40000).fromYd.toCm()).to.equal(18143694784)
      })
    })

    xdescribe('`fromYd.toMm()`', () => {
      it('converts yard to milimetre', () => {
        expect(Distance.convert(0).fromYd.toMm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMm()).to.equal(4535923.6959999995)

        expect(Distance.convert(200).fromYd.toMm()).to.equal(90718473.91999999)

        expect(Distance.convert(3000).fromYd.toMm()).to.equal(1360777108.8)

        expect(Distance.convert(40000).fromYd.toMm()).to.equal(18143694784)
      })
    })

    describe('`fromYd.toMi()`', () => {
      it('converts yard to mile', () => {
        expect(Distance.convert(0).fromYd.toMi()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMi()).to.equal(0.005681818181818182)

        expect(Distance.convert(200).fromYd.toMi()).to.equal(0.11363636363636363)

        expect(Distance.convert(3000).fromYd.toMi()).to.equal(1.7045454545454546)

        expect(Distance.convert(40000).fromYd.toMi()).to.equal(22.727272727272727)
      })
    })

    describe('`fromYd.toFt()`', () => {
      it('converts yard to feet', () => {
        expect(Distance.convert(0).fromYd.toFt()).to.equal(0)

        expect(Distance.convert(10).fromYd.toFt()).to.equal(30)

        expect(Distance.convert(200).fromYd.toFt()).to.equal(600)

        expect(Distance.convert(3000).fromYd.toFt()).to.equal(9000)

        expect(Distance.convert(40000).fromYd.toFt()).to.equal(120000)
      })
    })

    describe('`fromYd.toIn()`', () => {
      it('converts yard to inch', () => {
        expect(Distance.convert(0).fromYd.toIn()).to.equal(0)

        expect(Distance.convert(10).fromYd.toIn()).to.equal(360)

        expect(Distance.convert(200).fromYd.toIn()).to.equal(7200)

        expect(Distance.convert(3000).fromYd.toIn()).to.equal(108000)

        expect(Distance.convert(40000).fromYd.toIn()).to.equal(1440000)
      })
    })

    xdescribe('`fromFt.toKm()`', () => {
      it('converts feet to kilometre', () => {
        expect(Distance.convert(0).fromFt.toKm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toKm()).to.equal(63.502931744)

        expect(Distance.convert(200).fromFt.toKm()).to.equal(1270.05863488)

        expect(Distance.convert(3000).fromFt.toKm()).to.equal(19050.879523199997)

        expect(Distance.convert(40000).fromFt.toKm()).to.equal(254011.72697599998)
      })
    })

    xdescribe('`fromFt.toMt()`', () => {
      it('converts feet to metre', () => {
        expect(Distance.convert(0).fromFt.toMt()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMt()).to.equal(63502.931744)

        expect(Distance.convert(200).fromFt.toMt()).to.equal(1270058.63488)

        expect(Distance.convert(3000).fromFt.toMt()).to.equal(19050879.523199998)

        expect(Distance.convert(40000).fromFt.toMt()).to.equal(254011726.97599998)
      })
    })

    xdescribe('`fromFt.toCm()`', () => {
      it('converts feet to centimetre', () => {
        expect(Distance.convert(0).fromFt.toCm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toCm()).to.equal(63502931.744)

        expect(Distance.convert(200).fromFt.toCm()).to.equal(1270058634.88)

        expect(Distance.convert(3000).fromFt.toCm()).to.equal(19050879523.199997)

        expect(Distance.convert(40000).fromFt.toCm()).to.equal(254011726975.99997)
      })
    })

    xdescribe('`fromFt.toMm()`', () => {
      it('converts feet to milimetre', () => {
        expect(Distance.convert(0).fromFt.toMm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMm()).to.equal(63502931.744)

        expect(Distance.convert(200).fromFt.toMm()).to.equal(1270058634.88)

        expect(Distance.convert(3000).fromFt.toMm()).to.equal(19050879523.199997)

        expect(Distance.convert(40000).fromFt.toMm()).to.equal(254011726975.99997)
      })
    })

    describe('`fromFt.toMi()`', () => {
      it('converts feet to mile', () => {
        expect(Distance.convert(0).fromFt.toMi()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMi()).to.equal(0.001893939393939394)

        expect(Distance.convert(200).fromFt.toMi()).to.equal(0.03787878787878788)

        expect(Distance.convert(3000).fromFt.toMi()).to.equal(0.5681818181818182)

        expect(Distance.convert(40000).fromFt.toMi()).to.equal(7.575757575757576)
      })
    })

    describe('`fromFt.toYd()`', () => {
      it('converts feet to yard', () => {
        expect(Distance.convert(0).fromFt.toYd()).to.equal(0)

        expect(Distance.convert(10).fromFt.toYd()).to.equal(3.3333333333333335)

        expect(Distance.convert(200).fromFt.toYd()).to.equal(66.66666666666667)

        expect(Distance.convert(3000).fromFt.toYd()).to.equal(1000)

        expect(Distance.convert(40000).fromFt.toYd()).to.equal(13333.333333333334)
      })
    })

    describe('`fromFt.toIn()`', () => {
      it('converts feet to inch', () => {
        expect(Distance.convert(0).fromFt.toIn()).to.equal(0)

        expect(Distance.convert(10).fromFt.toIn()).to.equal(120)

        expect(Distance.convert(200).fromFt.toIn()).to.equal(2400)

        expect(Distance.convert(3000).fromFt.toIn()).to.equal(36000)

        expect(Distance.convert(40000).fromFt.toIn()).to.equal(480000)
      })
    })

    describe('`fromInToMi()`', () => {
      it('converts inch to mile', () => {
        expect(Distance.convert(0).fromIn.toMi()).to.equal(0)

        expect(Distance.convert(10).fromIn.toMi()).to.equal(0.00015782828282828284)

        expect(Distance.convert(200).fromIn.toMi()).to.equal(0.003156565656565657)

        expect(Distance.convert(3000).fromIn.toMi()).to.equal(0.04734848484848485)

        expect(Distance.convert(40000).fromIn.toMi()).to.equal(0.6313131313131313)
      })
    })

    describe('`fromInToYd()`', () => {
      it('converts inch to yard', () => {
        expect(Distance.convert(0).fromIn.toYd()).to.equal(0)

        expect(Distance.convert(10).fromIn.toYd()).to.equal(0.2777777777777778)

        expect(Distance.convert(200).fromIn.toYd()).to.equal(5.555555555555556)

        expect(Distance.convert(1000).fromIn.toYd()).to.equal(27.777777777777775)

        expect(Distance.convert(40000).fromIn.toYd()).to.equal(1111.111111111111)
      })
    })

    describe('`fromInToFt()`', () => {
      it('converts inch to feet', () => {
        expect(Distance.convert(0).fromIn.toFt()).to.equal(0)

        expect(Distance.convert(120).fromIn.toFt()).to.equal(10)

        expect(Distance.convert(2400).fromIn.toFt()).to.equal(200)

        expect(Distance.convert(36000).fromIn.toFt()).to.equal(3000)

        expect(Distance.convert(480000).fromIn.toFt()).to.equal(40000)
      })
    })
  })
})
