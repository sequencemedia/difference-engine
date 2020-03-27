import {
  expect
} from 'chai'

import Weight from '@difference-engine/number-engine/weight'

describe('Weight', () => {
  it('is a class', () => expect(Weight).to.be.a('function'))

  describe('`fromKgToGr()`', () => {
    it('converts kilogram to gram', () => {
      expect(Weight.fromKgToGr(0)).to.equal(0)

      expect(Weight.fromKgToGr(10)).to.equal(10000)

      expect(Weight.fromKgToGr(200)).to.equal(200000)

      expect(Weight.fromKgToGr(3000)).to.equal(3000000)

      expect(Weight.fromKgToGr(40000)).to.equal(40000000)
    })
  })

  describe('`fromKgToMg()`', () => {
    it('converts kilogram to miligram', () => {
      expect(Weight.fromKgToMg(0)).to.equal(0)

      expect(Weight.fromKgToMg(10)).to.equal(10000000)

      expect(Weight.fromKgToMg(200)).to.equal(200000000)

      expect(Weight.fromKgToMg(3000)).to.equal(3000000000)

      expect(Weight.fromKgToMg(40000)).to.equal(40000000000)
    })
  })

  describe('`fromKgToOz()`', () => {
    it('converts kilogram to ounce', () => {
      expect(Weight.fromKgToOz(0)).to.equal(0)

      expect(Weight.fromKgToOz(10)).to.equal(352.739619)

      expect(Weight.fromKgToOz(200)).to.equal(7054.79238)

      expect(Weight.fromKgToOz(3000)).to.equal(105821.8857)

      expect(Weight.fromKgToOz(40000)).to.equal(1410958.4759999998)
    })
  })

  describe('`fromKgToLb()`', () => {
    it('converts kilogram to pound', () => {
      expect(Weight.fromKgToLb(0)).to.equal(0)

      expect(Weight.fromKgToLb(10)).to.equal(22.0462261875)

      expect(Weight.fromKgToLb(200)).to.equal(440.92452375)

      expect(Weight.fromKgToLb(3000)).to.equal(6613.86785625)

      expect(Weight.fromKgToLb(40000)).to.equal(88184.90474999999)
    })
  })

  describe('`fromKgToSt()`', () => {
    it('converts kilogram to stone', () => {
      expect(Weight.fromKgToSt(0)).to.equal(0)

      expect(Weight.fromKgToSt(10)).to.equal(1.5747304419642858)

      expect(Weight.fromKgToSt(200)).to.equal(31.494608839285714)

      expect(Weight.fromKgToSt(3000)).to.equal(472.4191325892857)

      expect(Weight.fromKgToSt(40000)).to.equal(6298.921767857142)
    })
  })

  describe('`fromGrToKg()`', () => {
    it('converts gram to kilogram', () => {
      expect(Weight.fromGrToKg(0)).to.equal(0)

      expect(Weight.fromGrToKg(10)).to.equal(0.01)

      expect(Weight.fromGrToKg(200)).to.equal(0.2)

      expect(Weight.fromGrToKg(3000)).to.equal(3)

      expect(Weight.fromGrToKg(40000)).to.equal(40)
    })
  })

  describe('`fromGrToMg()`', () => {
    it('converts gram to miligram', () => {
      expect(Weight.fromGrToMg(0)).to.equal(0)

      expect(Weight.fromGrToMg(10)).to.equal(10000)

      expect(Weight.fromGrToMg(200)).to.equal(200000)

      expect(Weight.fromGrToMg(3000)).to.equal(3000000)

      expect(Weight.fromGrToMg(40000)).to.equal(40000000)
    })
  })

  describe('`fromGrToOz()`', () => {
    it('converts gram to ounce', () => {
      expect(Weight.fromGrToOz(0)).to.equal(0)

      expect(Weight.fromGrToOz(10)).to.equal(0.35273961899999995)

      expect(Weight.fromGrToOz(200)).to.equal(7.054792379999999)

      expect(Weight.fromGrToOz(3000)).to.equal(105.8218857)

      expect(Weight.fromGrToOz(40000)).to.equal(1410.958476)
    })
  })

  describe('`fromGrToLb()`', () => {
    it('converts gram to pound', () => {
      expect(Weight.fromGrToLb(0)).to.equal(0)

      expect(Weight.fromGrToLb(10)).to.equal(0.022046226187499997)

      expect(Weight.fromGrToLb(200)).to.equal(0.44092452374999996)

      expect(Weight.fromGrToLb(3000)).to.equal(6.61386785625)

      expect(Weight.fromGrToLb(40000)).to.equal(88.18490475)
    })
  })

  describe('`fromGrToSt()`', () => {
    it('converts gram to stone', () => {
      expect(Weight.fromGrToSt(0)).to.equal(0)

      expect(Weight.fromGrToSt(10)).to.equal(0.0015747304419642856)

      expect(Weight.fromGrToSt(200)).to.equal(0.03149460883928571)

      expect(Weight.fromGrToSt(3000)).to.equal(0.4724191325892857)

      expect(Weight.fromGrToSt(40000)).to.equal(6.298921767857143)
    })
  })

  describe('`fromMgToKg()`', () => {
    it('converts miligram to kilogram', () => {
      expect(Weight.fromMgToKg(0)).to.equal(0)

      expect(Weight.fromMgToKg(10)).to.equal(0.00001)

      expect(Weight.fromMgToKg(200)).to.equal(0.0002)

      expect(Weight.fromMgToKg(3000)).to.equal(0.003)

      expect(Weight.fromMgToKg(40000)).to.equal(0.04)
    })
  })

  describe('`fromMgToGr()`', () => {
    it('converts miligram to gram', () => {
      expect(Weight.fromMgToGr(0)).to.equal(0)

      expect(Weight.fromMgToGr(10)).to.equal(0.01)

      expect(Weight.fromMgToGr(200)).to.equal(0.2)

      expect(Weight.fromMgToGr(3000)).to.equal(3)

      expect(Weight.fromMgToGr(40000)).to.equal(40)
    })
  })

  describe('`fromMgToOz()`', () => {
    it('converts miligram to ounce', () => {
      expect(Weight.fromMgToOz(0)).to.equal(0)

      expect(Weight.fromMgToOz(10)).to.equal(0.000352739619)

      expect(Weight.fromMgToOz(200)).to.equal(0.00705479238)

      expect(Weight.fromMgToOz(3000)).to.equal(0.10582188569999999)

      expect(Weight.fromMgToOz(40000)).to.equal(1.4109584759999998)
    })
  })

  describe('`fromMgToLb()`', () => {
    it('converts miligram to pound', () => {
      expect(Weight.fromMgToLb(0)).to.equal(0)

      expect(Weight.fromMgToLb(10)).to.equal(0.0000220462261875)

      expect(Weight.fromMgToLb(200)).to.equal(0.00044092452375)

      expect(Weight.fromMgToLb(3000)).to.equal(0.0066138678562499996)

      expect(Weight.fromMgToLb(40000)).to.equal(0.08818490474999999)
    })
  })

  describe('`fromMgToSt()`', () => {
    it('converts miligram to stone', () => {
      expect(Weight.fromMgToSt(0)).to.equal(0)

      expect(Weight.fromMgToSt(10)).to.equal(0.0000015747304419642857)

      expect(Weight.fromMgToSt(200)).to.equal(0.000031494608839285716)

      expect(Weight.fromMgToSt(3000)).to.equal(0.0004724191325892857)

      expect(Weight.fromMgToSt(40000)).to.equal(0.006298921767857142)
    })
  })

  describe('`fromOzToKg()`', () => {
    it('converts ounce to kilogram', () => {
      expect(Weight.fromOzToKg(0)).to.equal(0)

      expect(Weight.fromOzToKg(10)).to.equal(0.283495231)

      expect(Weight.fromOzToKg(200)).to.equal(5.66990462)

      expect(Weight.fromOzToKg(3000)).to.equal(85.0485693)

      expect(Weight.fromOzToKg(40000)).to.equal(1133.980924)
    })
  })

  describe('`fromOzToGr()`', () => {
    it('converts ounce to gram', () => {
      expect(Weight.fromOzToGr(0)).to.equal(0)

      expect(Weight.fromOzToGr(10)).to.equal(283.495231)

      expect(Weight.fromOzToGr(200)).to.equal(5669.904619999999)

      expect(Weight.fromOzToGr(3000)).to.equal(85048.5693)

      expect(Weight.fromOzToGr(40000)).to.equal(1133980.9239999999)
    })
  })

  describe('`fromOzToMg()`', () => {
    it('converts ounce to miligram', () => {
      expect(Weight.fromOzToMg(0)).to.equal(0)

      expect(Weight.fromOzToMg(10)).to.equal(283495.23099999997)

      expect(Weight.fromOzToMg(200)).to.equal(5669904.619999999)

      expect(Weight.fromOzToMg(3000)).to.equal(85048569.3)

      expect(Weight.fromOzToMg(40000)).to.equal(1133980924)
    })
  })

  describe('`fromOzToLb()`', () => {
    it('converts ounce to pound', () => {
      expect(Weight.fromOzToLb(0)).to.equal(0)

      expect(Weight.fromOzToLb(10)).to.equal(0.625)

      expect(Weight.fromOzToLb(200)).to.equal(12.5)

      expect(Weight.fromOzToLb(3000)).to.equal(187.5)

      expect(Weight.fromOzToLb(40000)).to.equal(2500)
    })
  })

  describe('`fromOzToSt()`', () => {
    it('converts ounce to stone', () => {
      expect(Weight.fromOzToSt(0)).to.equal(0)

      expect(Weight.fromOzToSt(10)).to.equal(0.044642857142857144)

      expect(Weight.fromOzToSt(200)).to.equal(0.8928571428571429)

      expect(Weight.fromOzToSt(3000)).to.equal(13.392857142857142)

      expect(Weight.fromOzToSt(40000)).to.equal(178.57142857142858)
    })
  })

  describe('`fromLbToKg()`', () => {
    it('converts pound to kilogram', () => {
      expect(Weight.fromLbToKg(0)).to.equal(0)

      expect(Weight.fromLbToKg(10)).to.equal(4.535923696)

      expect(Weight.fromLbToKg(200)).to.equal(90.71847392)

      expect(Weight.fromLbToKg(3000)).to.equal(1360.7771088)

      expect(Weight.fromLbToKg(40000)).to.equal(18143.694784)
    })
  })

  describe('`fromLbToGr()`', () => {
    it('converts pound to gram', () => {
      expect(Weight.fromLbToGr(0)).to.equal(0)

      expect(Weight.fromLbToGr(10)).to.equal(4535.923696)

      expect(Weight.fromLbToGr(200)).to.equal(90718.47391999999)

      expect(Weight.fromLbToGr(3000)).to.equal(1360777.1088)

      expect(Weight.fromLbToGr(40000)).to.equal(18143694.783999998)
    })
  })

  describe('`fromLbToMg()`', () => {
    it('converts pound to miligram', () => {
      expect(Weight.fromLbToMg(0)).to.equal(0)

      expect(Weight.fromLbToMg(10)).to.equal(4535923.6959999995)

      expect(Weight.fromLbToMg(200)).to.equal(90718473.91999999)

      expect(Weight.fromLbToMg(3000)).to.equal(1360777108.8)

      expect(Weight.fromLbToMg(40000)).to.equal(18143694784)
    })
  })

  describe('`fromLbToOz()`', () => {
    it('converts pound to pound', () => {
      expect(Weight.fromLbToOz(0)).to.equal(0)

      expect(Weight.fromLbToOz(10)).to.equal(160)

      expect(Weight.fromLbToOz(200)).to.equal(3200)

      expect(Weight.fromLbToOz(3000)).to.equal(48000)

      expect(Weight.fromLbToOz(40000)).to.equal(640000)
    })
  })

  describe('`fromLbToSt()`', () => {
    it('converts pound to stone', () => {
      expect(Weight.fromLbToSt(0)).to.equal(0)

      expect(Weight.fromLbToSt(10)).to.equal(0.7142857142857143)

      expect(Weight.fromLbToSt(200)).to.equal(14.285714285714286)

      expect(Weight.fromLbToSt(3000)).to.equal(214.28571428571428)

      expect(Weight.fromLbToSt(40000)).to.equal(2857.1428571428573)
    })
  })

  describe('`fromStToKg()`', () => {
    it('converts stone to kilogram', () => {
      expect(Weight.fromStToKg(0)).to.equal(0)

      expect(Weight.fromStToKg(10)).to.equal(63.502931744)

      expect(Weight.fromStToKg(200)).to.equal(1270.05863488)

      expect(Weight.fromStToKg(3000)).to.equal(19050.879523199997)

      expect(Weight.fromStToKg(40000)).to.equal(254011.72697599998)
    })
  })

  describe('`fromStToGr()`', () => {
    it('converts stone to gram', () => {
      expect(Weight.fromStToGr(0)).to.equal(0)

      expect(Weight.fromStToGr(10)).to.equal(63502.931744)

      expect(Weight.fromStToGr(200)).to.equal(1270058.63488)

      expect(Weight.fromStToGr(3000)).to.equal(19050879.523199998)

      expect(Weight.fromStToGr(40000)).to.equal(254011726.97599998)
    })
  })

  describe('`fromStToMg()`', () => {
    it('converts stone to miligram', () => {
      expect(Weight.fromStToMg(0)).to.equal(0)

      expect(Weight.fromStToMg(10)).to.equal(63502931.744)

      expect(Weight.fromStToMg(200)).to.equal(1270058634.88)

      expect(Weight.fromStToMg(3000)).to.equal(19050879523.199997)

      expect(Weight.fromStToMg(40000)).to.equal(254011726975.99997)
    })
  })

  describe('`fromStToOz()`', () => {
    it('converts stone to pound', () => {
      expect(Weight.fromStToOz(0)).to.equal(0)

      expect(Weight.fromStToOz(10)).to.equal(2240)

      expect(Weight.fromStToOz(200)).to.equal(44800)

      expect(Weight.fromStToOz(3000)).to.equal(672000)

      expect(Weight.fromStToOz(40000)).to.equal(8960000)
    })
  })

  describe('`fromStToLb()`', () => {
    it('converts stone to pound', () => {
      expect(Weight.fromStToLb(0)).to.equal(0)

      expect(Weight.fromStToLb(10)).to.equal(140)

      expect(Weight.fromStToLb(200)).to.equal(2800)

      expect(Weight.fromStToLb(3000)).to.equal(42000)

      expect(Weight.fromStToLb(40000)).to.equal(560000)
    })
  })

  describe('`convert()`', () => {
    describe('`fromKg.toGr()`', () => {
      it('converts kilogram to gram', () => {
        expect(Weight.convert(0).fromKg.toGr()).to.equal(0)

        expect(Weight.convert(10).fromKg.toGr()).to.equal(10000)

        expect(Weight.convert(200).fromKg.toGr()).to.equal(200000)

        expect(Weight.convert(3000).fromKg.toGr()).to.equal(3000000)

        expect(Weight.convert(40000).fromKg.toGr()).to.equal(40000000)
      })
    })

    describe('`fromKg.toMg()`', () => {
      it('converts kilogram to miligram', () => {
        expect(Weight.convert(0).fromKg.toMg()).to.equal(0)

        expect(Weight.convert(10).fromKg.toMg()).to.equal(10000000)

        expect(Weight.convert(200).fromKg.toMg()).to.equal(200000000)

        expect(Weight.convert(3000).fromKg.toMg()).to.equal(3000000000)

        expect(Weight.convert(40000).fromKg.toMg()).to.equal(40000000000)
      })
    })

    describe('`fromKg.toOz()`', () => {
      it('converts kilogram to ounce', () => {
        expect(Weight.convert(0).fromKg.toOz()).to.equal(0)

        expect(Weight.convert(10).fromKg.toOz()).to.equal(352.739619)

        expect(Weight.convert(200).fromKg.toOz()).to.equal(7054.79238)

        expect(Weight.convert(3000).fromKg.toOz()).to.equal(105821.8857)

        expect(Weight.convert(40000).fromKg.toOz()).to.equal(1410958.4759999998)
      })
    })

    describe('`fromKg.toLb()`', () => {
      it('converts kilogram to pound', () => {
        expect(Weight.convert(0).fromKg.toLb()).to.equal(0)

        expect(Weight.convert(10).fromKg.toLb()).to.equal(22.0462261875)

        expect(Weight.convert(200).fromKg.toLb()).to.equal(440.92452375)

        expect(Weight.convert(3000).fromKg.toLb()).to.equal(6613.86785625)

        expect(Weight.convert(40000).fromKg.toLb()).to.equal(88184.90474999999)
      })
    })

    describe('`fromKg.toSt()`', () => {
      it('converts kilogram to stone', () => {
        expect(Weight.convert(0).fromKg.toSt()).to.equal(0)

        expect(Weight.convert(10).fromKg.toSt()).to.equal(1.5747304419642858)

        expect(Weight.convert(200).fromKg.toSt()).to.equal(31.494608839285714)

        expect(Weight.convert(3000).fromKg.toSt()).to.equal(472.4191325892857)

        expect(Weight.convert(40000).fromKg.toSt()).to.equal(6298.921767857142)
      })
    })

    describe('`fromGr.toKg()`', () => {
      it('converts gram to kilogram', () => {
        expect(Weight.convert(0).fromGr.toKg()).to.equal(0)

        expect(Weight.convert(10).fromGr.toKg()).to.equal(0.01)

        expect(Weight.convert(200).fromGr.toKg()).to.equal(0.2)

        expect(Weight.convert(3000).fromGr.toKg()).to.equal(3)

        expect(Weight.convert(40000).fromGr.toKg()).to.equal(40)
      })
    })

    describe('`fromGr.toMg()`', () => {
      it('converts gram to miligram', () => {
        expect(Weight.convert(0).fromGr.toMg()).to.equal(0)

        expect(Weight.convert(10).fromGr.toMg()).to.equal(10000)

        expect(Weight.convert(200).fromGr.toMg()).to.equal(200000)

        expect(Weight.convert(3000).fromGr.toMg()).to.equal(3000000)

        expect(Weight.convert(40000).fromGr.toMg()).to.equal(40000000)
      })
    })

    describe('`fromGr.toOz()`', () => {
      it('converts gram to ounce', () => {
        expect(Weight.convert(0).fromGr.toOz()).to.equal(0)

        expect(Weight.convert(10).fromGr.toOz()).to.equal(0.35273961899999995)

        expect(Weight.convert(200).fromGr.toOz()).to.equal(7.054792379999999)

        expect(Weight.convert(3000).fromGr.toOz()).to.equal(105.8218857)

        expect(Weight.convert(40000).fromGr.toOz()).to.equal(1410.958476)
      })
    })

    describe('`fromGr.toLb()`', () => {
      it('converts gram to pound', () => {
        expect(Weight.convert(0).fromGr.toLb()).to.equal(0)

        expect(Weight.convert(10).fromGr.toLb()).to.equal(0.022046226187499997)

        expect(Weight.convert(200).fromGr.toLb()).to.equal(0.44092452374999996)

        expect(Weight.convert(3000).fromGr.toLb()).to.equal(6.61386785625)

        expect(Weight.convert(40000).fromGr.toLb()).to.equal(88.18490475)
      })
    })

    describe('`fromGr.toSt()`', () => {
      it('converts gram to stone', () => {
        expect(Weight.convert(0).fromGr.toSt()).to.equal(0)

        expect(Weight.convert(10).fromGr.toSt()).to.equal(0.0015747304419642856)

        expect(Weight.convert(200).fromGr.toSt()).to.equal(0.03149460883928571)

        expect(Weight.convert(3000).fromGr.toSt()).to.equal(0.4724191325892857)

        expect(Weight.convert(40000).fromGr.toSt()).to.equal(6.298921767857143)
      })
    })

    describe('`fromMg.toKg()`', () => {
      it('converts miligram to kilogram', () => {
        expect(Weight.convert(0).fromMg.toKg()).to.equal(0)

        expect(Weight.convert(10).fromMg.toKg()).to.equal(0.00001)

        expect(Weight.convert(200).fromMg.toKg()).to.equal(0.0002)

        expect(Weight.convert(3000).fromMg.toKg()).to.equal(0.003)

        expect(Weight.convert(40000).fromMg.toKg()).to.equal(0.04)
      })
    })

    describe('`fromMg.toGr()`', () => {
      it('converts miligram to gram', () => {
        expect(Weight.convert(0).fromMg.toGr()).to.equal(0)

        expect(Weight.convert(10).fromMg.toGr()).to.equal(0.01)

        expect(Weight.convert(200).fromMg.toGr()).to.equal(0.2)

        expect(Weight.convert(3000).fromMg.toGr()).to.equal(3)

        expect(Weight.convert(40000).fromMg.toGr()).to.equal(40)
      })
    })

    describe('`fromMg.toOz()`', () => {
      it('converts miligram to ounce', () => {
        expect(Weight.convert(0).fromMg.toOz()).to.equal(0)

        expect(Weight.convert(10).fromMg.toOz()).to.equal(0.000352739619)

        expect(Weight.convert(200).fromMg.toOz()).to.equal(0.00705479238)

        expect(Weight.convert(3000).fromMg.toOz()).to.equal(0.10582188569999999)

        expect(Weight.convert(40000).fromMg.toOz()).to.equal(1.4109584759999998)
      })
    })

    describe('`fromMg.toLb()`', () => {
      it('converts miligram to pound', () => {
        expect(Weight.convert(0).fromMg.toLb()).to.equal(0)

        expect(Weight.convert(10).fromMg.toLb()).to.equal(0.0000220462261875)

        expect(Weight.convert(200).fromMg.toLb()).to.equal(0.00044092452375)

        expect(Weight.convert(3000).fromMg.toLb()).to.equal(0.0066138678562499996)

        expect(Weight.convert(40000).fromMg.toLb()).to.equal(0.08818490474999999)
      })
    })

    describe('`fromMg.toSt()`', () => {
      it('converts miligram to stone', () => {
        expect(Weight.convert(0).fromMg.toSt()).to.equal(0)

        expect(Weight.convert(10).fromMg.toSt()).to.equal(0.0000015747304419642857)

        expect(Weight.convert(200).fromMg.toSt()).to.equal(0.000031494608839285716)

        expect(Weight.convert(3000).fromMg.toSt()).to.equal(0.0004724191325892857)

        expect(Weight.convert(40000).fromMg.toSt()).to.equal(0.006298921767857142)
      })
    })

    describe('`fromOz.toKg()`', () => {
      it('converts ounce to kilogram', () => {
        expect(Weight.convert(0).fromOz.toKg()).to.equal(0)

        expect(Weight.convert(10).fromOz.toKg()).to.equal(0.283495231)

        expect(Weight.convert(200).fromOz.toKg()).to.equal(5.66990462)

        expect(Weight.convert(3000).fromOz.toKg()).to.equal(85.0485693)

        expect(Weight.convert(40000).fromOz.toKg()).to.equal(1133.980924)
      })
    })

    describe('`fromOz.toGr()`', () => {
      it('converts ounce to gram', () => {
        expect(Weight.convert(0).fromOz.toGr()).to.equal(0)

        expect(Weight.convert(10).fromOz.toGr()).to.equal(283.495231)

        expect(Weight.convert(200).fromOz.toGr()).to.equal(5669.904619999999)

        expect(Weight.convert(3000).fromOz.toGr()).to.equal(85048.5693)

        expect(Weight.convert(40000).fromOz.toGr()).to.equal(1133980.9239999999)
      })
    })

    describe('`fromOz.toMg()`', () => {
      it('converts ounce to miligram', () => {
        expect(Weight.convert(0).fromOz.toMg()).to.equal(0)

        expect(Weight.convert(10).fromOz.toMg()).to.equal(283495.23099999997)

        expect(Weight.convert(200).fromOz.toMg()).to.equal(5669904.619999999)

        expect(Weight.convert(3000).fromOz.toMg()).to.equal(85048569.3)

        expect(Weight.convert(40000).fromOz.toMg()).to.equal(1133980924)
      })
    })

    describe('`fromOz.toLb()`', () => {
      it('converts ounce to pound', () => {
        expect(Weight.convert(0).fromOz.toLb()).to.equal(0)

        expect(Weight.convert(10).fromOz.toLb()).to.equal(0.625)

        expect(Weight.convert(200).fromOz.toLb()).to.equal(12.5)

        expect(Weight.convert(3000).fromOz.toLb()).to.equal(187.5)

        expect(Weight.convert(40000).fromOz.toLb()).to.equal(2500)
      })
    })

    describe('`fromOz.toSt()`', () => {
      it('converts ounce to stone', () => {
        expect(Weight.convert(0).fromOz.toSt()).to.equal(0)

        expect(Weight.convert(10).fromOz.toSt()).to.equal(0.044642857142857144)

        expect(Weight.convert(200).fromOz.toSt()).to.equal(0.8928571428571429)

        expect(Weight.convert(3000).fromOz.toSt()).to.equal(13.392857142857142)

        expect(Weight.convert(40000).fromOz.toSt()).to.equal(178.57142857142858)
      })
    })

    describe('`fromLb.toKg()`', () => {
      it('converts pound to kilogram', () => {
        expect(Weight.convert(0).fromLb.toKg()).to.equal(0)

        expect(Weight.convert(10).fromLb.toKg()).to.equal(4.535923696)

        expect(Weight.convert(200).fromLb.toKg()).to.equal(90.71847392)

        expect(Weight.convert(3000).fromLb.toKg()).to.equal(1360.7771088)

        expect(Weight.convert(40000).fromLb.toKg()).to.equal(18143.694784)
      })
    })

    describe('`fromLb.toGr()`', () => {
      it('converts pound to gram', () => {
        expect(Weight.convert(0).fromLb.toGr()).to.equal(0)

        expect(Weight.convert(10).fromLb.toGr()).to.equal(4535.923696)

        expect(Weight.convert(200).fromLb.toGr()).to.equal(90718.47391999999)

        expect(Weight.convert(3000).fromLb.toGr()).to.equal(1360777.1088)

        expect(Weight.convert(40000).fromLb.toGr()).to.equal(18143694.783999998)
      })
    })

    describe('`fromLb.toMg()`', () => {
      it('converts pound to miligram', () => {
        expect(Weight.convert(0).fromLb.toMg()).to.equal(0)

        expect(Weight.convert(10).fromLb.toMg()).to.equal(4535923.6959999995)

        expect(Weight.convert(200).fromLb.toMg()).to.equal(90718473.91999999)

        expect(Weight.convert(3000).fromLb.toMg()).to.equal(1360777108.8)

        expect(Weight.convert(40000).fromLb.toMg()).to.equal(18143694784)
      })
    })

    describe('`fromLb.toOz()`', () => {
      it('converts pound to pound', () => {
        expect(Weight.convert(0).fromLb.toOz()).to.equal(0)

        expect(Weight.convert(10).fromLb.toOz()).to.equal(160)

        expect(Weight.convert(200).fromLb.toOz()).to.equal(3200)

        expect(Weight.convert(3000).fromLb.toOz()).to.equal(48000)

        expect(Weight.convert(40000).fromLb.toOz()).to.equal(640000)
      })
    })

    describe('`fromLb.toSt()`', () => {
      it('converts pound to stone', () => {
        expect(Weight.convert(0).fromLb.toSt()).to.equal(0)

        expect(Weight.convert(10).fromLb.toSt()).to.equal(0.7142857142857143)

        expect(Weight.convert(200).fromLb.toSt()).to.equal(14.285714285714286)

        expect(Weight.convert(3000).fromLb.toSt()).to.equal(214.28571428571428)

        expect(Weight.convert(40000).fromLb.toSt()).to.equal(2857.1428571428573)
      })
    })

    describe('`fromSt.toKg()`', () => {
      it('converts stone to kilogram', () => {
        expect(Weight.convert(0).fromSt.toKg()).to.equal(0)

        expect(Weight.convert(10).fromSt.toKg()).to.equal(63.502931744)

        expect(Weight.convert(200).fromSt.toKg()).to.equal(1270.05863488)

        expect(Weight.convert(3000).fromSt.toKg()).to.equal(19050.879523199997)

        expect(Weight.convert(40000).fromSt.toKg()).to.equal(254011.72697599998)
      })
    })

    describe('`fromSt.toGr()`', () => {
      it('converts stone to gram', () => {
        expect(Weight.convert(0).fromSt.toGr()).to.equal(0)

        expect(Weight.convert(10).fromSt.toGr()).to.equal(63502.931744)

        expect(Weight.convert(200).fromSt.toGr()).to.equal(1270058.63488)

        expect(Weight.convert(3000).fromSt.toGr()).to.equal(19050879.523199998)

        expect(Weight.convert(40000).fromSt.toGr()).to.equal(254011726.97599998)
      })
    })

    describe('`fromSt.toMg()`', () => {
      it('converts stone to miligram', () => {
        expect(Weight.convert(0).fromSt.toMg()).to.equal(0)

        expect(Weight.convert(10).fromSt.toMg()).to.equal(63502931.744)

        expect(Weight.convert(200).fromSt.toMg()).to.equal(1270058634.88)

        expect(Weight.convert(3000).fromSt.toMg()).to.equal(19050879523.199997)

        expect(Weight.convert(40000).fromSt.toMg()).to.equal(254011726975.99997)
      })
    })

    describe('`fromSt.toOz()`', () => {
      it('converts stone to ounce', () => {
        expect(Weight.convert(0).fromSt.toOz()).to.equal(0)

        expect(Weight.convert(10).fromSt.toOz()).to.equal(2240)

        expect(Weight.convert(200).fromSt.toOz()).to.equal(44800)

        expect(Weight.convert(3000).fromSt.toOz()).to.equal(672000)

        expect(Weight.convert(40000).fromSt.toOz()).to.equal(8960000)
      })
    })

    describe('`fromSt.toLb()`', () => {
      it('converts stone to pound', () => {
        expect(Weight.convert(0).fromSt.toLb()).to.equal(0)

        expect(Weight.convert(10).fromSt.toLb()).to.equal(140)

        expect(Weight.convert(200).fromSt.toLb()).to.equal(2800)

        expect(Weight.convert(3000).fromSt.toLb()).to.equal(42000)

        expect(Weight.convert(40000).fromSt.toLb()).to.equal(560000)
      })
    })
  })
})
