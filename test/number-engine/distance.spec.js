import {
  expect
} from 'chai'

import Distance, {
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
} from '@difference-engine/number-engine/distance'

describe('Distance', () => {
  it('is a class', () => expect(Distance).to.be.a('function'))

  describe('`Distance.fromKmToMt()`', () => {
    it('converts kilometre to metre', () => {
      expect(Distance.fromKmToMt(0)).to.equal(0)

      expect(Distance.fromKmToMt(10)).to.equal(10000)

      expect(Distance.fromKmToMt(200)).to.equal(200000)

      expect(Distance.fromKmToMt(3000)).to.equal(3000000)

      expect(Distance.fromKmToMt(40000)).to.equal(40000000)
    })
  })

  describe('`Distance.fromKmToCm()`', () => {
    it('converts kilometre to centimetre', () => {
      expect(Distance.fromKmToCm(0)).to.equal(0)

      expect(Distance.fromKmToCm(10)).to.equal(1000000)

      expect(Distance.fromKmToCm(200)).to.equal(20000000)

      expect(Distance.fromKmToCm(3000)).to.equal(300000000)

      expect(Distance.fromKmToCm(40000)).to.equal(4000000000)
    })
  })

  describe('`Distance.fromKmToMm()`', () => {
    it('converts kilometre to milimetre', () => {
      expect(Distance.fromKmToMm(0)).to.equal(0)

      expect(Distance.fromKmToMm(10)).to.equal(10000000)

      expect(Distance.fromKmToMm(200)).to.equal(200000000)

      expect(Distance.fromKmToMm(3000)).to.equal(3000000000)

      expect(Distance.fromKmToMm(40000)).to.equal(40000000000)
    })
  })

  describe('`Distance.fromKmToMi()`', () => {
    it('converts kilometre to mile', () => {
      expect(Distance.fromKmToMi(0)).to.equal(0)

      expect(Distance.fromKmToMi(10)).to.equal(6.213711922348486)

      expect(Distance.fromKmToMi(200)).to.equal(124.2742384469697)

      expect(Distance.fromKmToMi(3000)).to.equal(1864.1135767045455)

      expect(Distance.fromKmToMi(40000)).to.equal(24854.84768939394)
    })
  })

  describe('`Distance.fromKmToYd()`', () => {
    it('converts kilometre to yard', () => {
      expect(Distance.fromKmToYd(0)).to.equal(0)

      expect(Distance.fromKmToYd(10)).to.equal(10936.132983333335)

      expect(Distance.fromKmToYd(200)).to.equal(218722.65966666667)

      expect(Distance.fromKmToYd(3000)).to.equal(3280839.895)

      expect(Distance.fromKmToYd(40000)).to.equal(43744531.93333334)
    })
  })

  describe('`Distance.fromKmToFt()`', () => {
    it('converts kilometre to feet', () => {
      expect(Distance.fromKmToFt(0)).to.equal(0)

      expect(Distance.fromKmToFt(10)).to.equal(32808.39895)

      expect(Distance.fromKmToFt(200)).to.equal(656167.979)

      expect(Distance.fromKmToFt(3000)).to.equal(9842519.685)

      expect(Distance.fromKmToFt(40000)).to.equal(131233595.80000001)
    })
  })

  describe('`Distance.fromKmToIn()`', () => {
    it('converts kilometre to inch', () => {
      expect(Distance.fromKmToIn(0)).to.equal(0)

      expect(Distance.fromKmToIn(10)).to.equal(393700.78740000003)

      expect(Distance.fromKmToIn(200)).to.equal(7874015.748000001)

      expect(Distance.fromKmToIn(3000)).to.equal(118110236.22)

      expect(Distance.fromKmToIn(40000)).to.equal(1574803149.6000001)
    })
  })

  describe('`Distance.fromMtToKm()`', () => {
    it('converts metre to kilometre', () => {
      expect(Distance.fromMtToKm(0)).to.equal(0)

      expect(Distance.fromMtToKm(10)).to.equal(0.01)

      expect(Distance.fromMtToKm(200)).to.equal(0.2)

      expect(Distance.fromMtToKm(3000)).to.equal(3)

      expect(Distance.fromMtToKm(40000)).to.equal(40)
    })
  })

  describe('`Distance.fromMtToCm()`', () => {
    it('converts metre to centimetre', () => {
      expect(Distance.fromMtToCm(0)).to.equal(0)

      expect(Distance.fromMtToCm(10)).to.equal(1000)

      expect(Distance.fromMtToCm(200)).to.equal(20000)

      expect(Distance.fromMtToCm(3000)).to.equal(300000)

      expect(Distance.fromMtToCm(40000)).to.equal(4000000)
    })
  })

  describe('`Distance.fromMtToMm()`', () => {
    it('converts metre to milimetre', () => {
      expect(Distance.fromMtToMm(0)).to.equal(0)

      expect(Distance.fromMtToMm(10)).to.equal(10000)

      expect(Distance.fromMtToMm(200)).to.equal(200000)

      expect(Distance.fromMtToMm(3000)).to.equal(3000000)

      expect(Distance.fromMtToMm(40000)).to.equal(40000000)
    })
  })

  describe('`Distance.fromMtToMi()`', () => {
    it('converts metre to mile', () => {
      expect(Distance.fromMtToMi(0)).to.equal(0)

      expect(Distance.fromMtToMi(10)).to.equal(0.006213711922348486)

      expect(Distance.fromMtToMi(200)).to.equal(0.1242742384469697)

      expect(Distance.fromMtToMi(3000)).to.equal(1.8641135767045458)

      expect(Distance.fromMtToMi(40000)).to.equal(24.854847689393942)
    })
  })

  describe('`Distance.fromMtToYd()`', () => {
    it('converts metre to yard', () => {
      expect(Distance.fromMtToYd(0)).to.equal(0)

      expect(Distance.fromMtToYd(10)).to.equal(10.936132983333335)

      expect(Distance.fromMtToYd(200)).to.equal(218.7226596666667)

      expect(Distance.fromMtToYd(3000)).to.equal(3280.8398950000005)

      expect(Distance.fromMtToYd(40000)).to.equal(43744.53193333334)
    })
  })

  describe('`Distance.fromMtToFt()`', () => {
    it('converts metre to feet', () => {
      expect(Distance.fromMtToFt(0)).to.equal(0)

      expect(Distance.fromMtToFt(10)).to.equal(32.808398950000004)

      expect(Distance.fromMtToFt(200)).to.equal(656.1679790000001)

      expect(Distance.fromMtToFt(3000)).to.equal(9842.519685000001)

      expect(Distance.fromMtToFt(40000)).to.equal(131233.5958)
    })
  })

  describe('`Distance.fromMtToIn()`', () => {
    it('converts metre to inch', () => {
      expect(Distance.fromMtToIn(0)).to.equal(0)

      expect(Distance.fromMtToIn(10)).to.equal(393.7007874)

      expect(Distance.fromMtToIn(200)).to.equal(7874.015748000001)

      expect(Distance.fromMtToIn(3000)).to.equal(118110.23622)

      expect(Distance.fromMtToIn(40000)).to.equal(1574803.1496000001)
    })
  })

  describe('`Distance.fromCmToKm()`', () => {
    it('converts centimetre to kilometre', () => {
      expect(Distance.fromCmToKm(0)).to.equal(0)

      expect(Distance.fromCmToKm(10)).to.equal(0.0001)

      expect(Distance.fromCmToKm(200)).to.equal(0.002)

      expect(Distance.fromCmToKm(3000)).to.equal(0.03)

      expect(Distance.fromCmToKm(40000)).to.equal(0.4)
    })
  })

  describe('`Distance.fromCmToMt()`', () => {
    it('converts centimetre to metre', () => {
      expect(Distance.fromCmToMt(0)).to.equal(0)

      expect(Distance.fromCmToMt(10)).to.equal(0.1)

      expect(Distance.fromCmToMt(200)).to.equal(2)

      expect(Distance.fromCmToMt(3000)).to.equal(30)

      expect(Distance.fromCmToMt(40000)).to.equal(400)
    })
  })

  describe('`Distance.fromCmToMm()`', () => {
    it('converts centimetre to metre', () => {
      expect(Distance.fromCmToMm(0)).to.equal(0)

      expect(Distance.fromCmToMm(10)).to.equal(100)

      expect(Distance.fromCmToMm(200)).to.equal(2000)

      expect(Distance.fromCmToMm(3000)).to.equal(30000)

      expect(Distance.fromCmToMm(40000)).to.equal(400000)
    })
  })

  describe('`Distance.fromCmToMi()`', () => {
    it('converts centimetre to mile', () => {
      expect(Distance.fromCmToMi(0)).to.equal(0)

      expect(Distance.fromCmToMi(10)).to.equal(0.00006213711922348485)

      expect(Distance.fromCmToMi(200)).to.equal(0.001242742384469697)

      expect(Distance.fromCmToMi(3000)).to.equal(0.018641135767045458)

      expect(Distance.fromCmToMi(40000)).to.equal(0.2485484768939394)
    })
  })

  describe('`Distance.fromCmToYd()`', () => {
    it('converts centimetre to yard', () => {
      expect(Distance.fromCmToYd(0)).to.equal(0)

      expect(Distance.fromCmToYd(10)).to.equal(0.10936132983333334)

      expect(Distance.fromCmToYd(200)).to.equal(2.1872265966666666)

      expect(Distance.fromCmToYd(3000)).to.equal(32.808398950000004)

      expect(Distance.fromCmToYd(40000)).to.equal(437.4453193333334)
    })
  })

  describe('`Distance.fromCmToFt()`', () => {
    it('converts centimetre to feet', () => {
      expect(Distance.fromCmToFt(0)).to.equal(0)

      expect(Distance.fromCmToFt(10)).to.equal(0.3280839895)

      expect(Distance.fromCmToFt(200)).to.equal(6.56167979)

      expect(Distance.fromCmToFt(3000)).to.equal(98.42519685)

      expect(Distance.fromCmToFt(40000)).to.equal(1312.3359580000001)
    })
  })

  describe('`Distance.fromCmToIn()`', () => {
    it('converts centimetre to inch', () => {
      expect(Distance.fromCmToIn(0)).to.equal(0)

      expect(Distance.fromCmToIn(10)).to.equal(3.9370078740000003)

      expect(Distance.fromCmToIn(200)).to.equal(78.74015748000001)

      expect(Distance.fromCmToIn(3000)).to.equal(1181.1023622)

      expect(Distance.fromCmToIn(40000)).to.equal(15748.031496000001)
    })
  })

  describe('`Distance.fromMmToKm()`', () => {
    it('converts milimetre to kilometre', () => {
      expect(Distance.fromMmToKm(0)).to.equal(0)

      expect(Distance.fromMmToKm(10)).to.equal(0.00001)

      expect(Distance.fromMmToKm(200)).to.equal(0.0002)

      expect(Distance.fromMmToKm(3000)).to.equal(0.003)

      expect(Distance.fromMmToKm(40000)).to.equal(0.04)
    })
  })

  describe('`Distance.fromMmToMt()`', () => {
    it('converts milimetre to metre', () => {
      expect(Distance.fromMmToMt(0)).to.equal(0)

      expect(Distance.fromMmToMt(10)).to.equal(0.01)

      expect(Distance.fromMmToMt(200)).to.equal(0.2)

      expect(Distance.fromMmToMt(3000)).to.equal(3)

      expect(Distance.fromMmToMt(40000)).to.equal(40)
    })
  })

  describe('`Distance.fromMmToCm()`', () => {
    it('converts milimetre to centimetre', () => {
      expect(Distance.fromMmToCm(0)).to.equal(0)

      expect(Distance.fromMmToCm(10)).to.equal(1)

      expect(Distance.fromMmToCm(200)).to.equal(20)

      expect(Distance.fromMmToCm(3000)).to.equal(300)

      expect(Distance.fromMmToCm(40000)).to.equal(4000)
    })
  })

  describe('`Distance.fromMmToMi()`', () => {
    it('converts milimetre to mile', () => {
      expect(Distance.fromMmToMi(0)).to.equal(0)

      expect(Distance.fromMmToMi(10)).to.equal(0.000006213711922348486)

      expect(Distance.fromMmToMi(200)).to.equal(0.0001242742384469697)

      expect(Distance.fromMmToMi(3000)).to.equal(0.0018641135767045456)

      expect(Distance.fromMmToMi(40000)).to.equal(0.024854847689393944)
    })
  })

  describe('`Distance.fromMmToYd()`', () => {
    it('converts milimetre to yard', () => {
      expect(Distance.fromMmToYd(0)).to.equal(0)

      expect(Distance.fromMmToYd(10)).to.equal(0.010936132983333334)

      expect(Distance.fromMmToYd(200)).to.equal(0.21872265966666668)

      expect(Distance.fromMmToYd(3000)).to.equal(3.280839895)

      expect(Distance.fromMmToYd(40000)).to.equal(43.74453193333334)
    })
  })

  describe('`Distance.fromMmToFt()`', () => {
    it('converts milimetre to feet', () => {
      expect(Distance.fromMmToFt(0)).to.equal(0)

      expect(Distance.fromMmToFt(10)).to.equal(0.032808398950000005)

      expect(Distance.fromMmToFt(200)).to.equal(0.656167979)

      expect(Distance.fromMmToFt(3000)).to.equal(9.842519685000001)

      expect(Distance.fromMmToFt(40000)).to.equal(131.23359580000002)
    })
  })

  describe('`Distance.fromMmToIn()`', () => {
    it('converts milimetre to inch', () => {
      expect(Distance.fromMmToIn(0)).to.equal(0)

      expect(Distance.fromMmToIn(10)).to.equal(0.39370078740000003)

      expect(Distance.fromMmToIn(200)).to.equal(7.874015748000001)

      expect(Distance.fromMmToIn(3000)).to.equal(118.11023622)

      expect(Distance.fromMmToIn(40000)).to.equal(1574.8031496)
    })
  })

  describe('`Distance.fromMiToKm()`', () => {
    it('converts mile to kilometre', () => {
      expect(Distance.fromMiToKm(0)).to.equal(0)

      expect(Distance.fromMiToKm(10)).to.equal(16.093440000064373)

      expect(Distance.fromMiToKm(200)).to.equal(321.86880000128747)

      expect(Distance.fromMiToKm(3000)).to.equal(4828.032000019311)

      expect(Distance.fromMiToKm(40000)).to.equal(64373.76000025749)
    })
  })

  describe('`Distance.fromMiToMt()`', () => {
    it('converts mile to metre', () => {
      expect(Distance.fromMiToMt(0)).to.equal(0)

      expect(Distance.fromMiToMt(10)).to.equal(16093.440000064373)

      expect(Distance.fromMiToMt(200)).to.equal(321868.8000012875)

      expect(Distance.fromMiToMt(3000)).to.equal(4828032.000019312)

      expect(Distance.fromMiToMt(40000)).to.equal(64373760.00025749)
    })
  })

  describe('`Distance.fromMiToCm()`', () => {
    it('converts mile to centimetre', () => {
      expect(Distance.fromMiToCm(0)).to.equal(0)

      expect(Distance.fromMiToCm(10)).to.equal(1609344.0000064373)

      expect(Distance.fromMiToCm(200)).to.equal(32186880.000128746)

      expect(Distance.fromMiToCm(3000)).to.equal(482803200.0019312)

      expect(Distance.fromMiToCm(40000)).to.equal(6437376000.025749)
    })
  })

  describe('`Distance.fromMiToMm()`', () => {
    it('converts mile to milimetre', () => {
      expect(Distance.fromMiToMm(0)).to.equal(0)

      expect(Distance.fromMiToMm(10)).to.equal(16093440.000064373)

      expect(Distance.fromMiToMm(200)).to.equal(321868800.00128746)

      expect(Distance.fromMiToMm(3000)).to.equal(4828032000.019312)

      expect(Distance.fromMiToMm(40000)).to.equal(64373760000.25749)
    })
  })

  describe('`Distance.fromMiToYd()`', () => {
    it('converts mile to yard', () => {
      expect(Distance.fromMiToYd(0)).to.equal(0)

      expect(Distance.fromMiToYd(10)).to.equal(17600)

      expect(Distance.fromMiToYd(200)).to.equal(352000)

      expect(Distance.fromMiToYd(3000)).to.equal(5280000)

      expect(Distance.fromMiToYd(40000)).to.equal(70400000)
    })
  })

  describe('`Distance.fromMiToFt()`', () => {
    it('converts mile to feet', () => {
      expect(Distance.fromMiToFt(0)).to.equal(0)

      expect(Distance.fromMiToFt(10)).to.equal(52800)

      expect(Distance.fromMiToFt(200)).to.equal(1056000)

      expect(Distance.fromMiToFt(3000)).to.equal(15840000)

      expect(Distance.fromMiToFt(40000)).to.equal(211200000)
    })
  })

  describe('`Distance.fromMiToIn()`', () => {
    it('converts mile to inch', () => {
      expect(Distance.fromMiToIn(0)).to.equal(0)

      expect(Distance.fromMiToIn(10)).to.equal(633600)

      expect(Distance.fromMiToIn(200)).to.equal(12672000)

      expect(Distance.fromMiToIn(3000)).to.equal(190080000)

      expect(Distance.fromMiToIn(40000)).to.equal(2534400000)
    })
  })

  describe('`Distance.fromYdToKm()`', () => {
    it('converts yard to kilometre', () => {
      expect(Distance.fromYdToKm(0)).to.equal(0)

      expect(Distance.fromYdToKm(10)).to.equal(0.009144000000036578)

      expect(Distance.fromYdToKm(200)).to.equal(0.1828800000007315)

      expect(Distance.fromYdToKm(3000)).to.equal(2.743200000010973)

      expect(Distance.fromYdToKm(40000)).to.equal(36.57600000014631)
    })
  })

  describe('`Distance.fromYdToMt()`', () => {
    it('converts yard to metre', () => {
      expect(Distance.fromYdToMt(0)).to.equal(0)

      expect(Distance.fromYdToMt(10)).to.equal(9.144000000036577)

      expect(Distance.fromYdToMt(200)).to.equal(182.8800000007315)

      expect(Distance.fromYdToMt(3000)).to.equal(2743.200000010973)

      expect(Distance.fromYdToMt(40000)).to.equal(36576.000000146305)
    })
  })

  describe('`Distance.fromYdToCm()`', () => {
    it('converts yard to centimetre', () => {
      expect(Distance.fromYdToCm(0)).to.equal(0)

      expect(Distance.fromYdToCm(10)).to.equal(914.4000000036576)

      expect(Distance.fromYdToCm(200)).to.equal(18288.000000073152)

      expect(Distance.fromYdToCm(3000)).to.equal(274320.0000010973)

      expect(Distance.fromYdToCm(40000)).to.equal(3657600.00001463)
    })
  })

  describe('`Distance.fromYdToMm()`', () => {
    it('converts yard to miliimetre', () => {
      expect(Distance.fromYdToMm(0)).to.equal(0)

      expect(Distance.fromYdToMm(10)).to.equal(9144.000000036576)

      expect(Distance.fromYdToMm(200)).to.equal(182880.00000073152)

      expect(Distance.fromYdToMm(3000)).to.equal(2743200.000010973)

      expect(Distance.fromYdToMm(40000)).to.equal(36576000.0001463)
    })
  })

  describe('`Distance.fromYdToMi()`', () => {
    it('converts yard to yard', () => {
      expect(Distance.fromYdToMi(0)).to.equal(0)

      expect(Distance.fromYdToMi(10)).to.equal(0.005681818181818182)

      expect(Distance.fromYdToMi(200)).to.equal(0.11363636363636363)

      expect(Distance.fromYdToMi(3000)).to.equal(1.7045454545454546)

      expect(Distance.fromYdToMi(40000)).to.equal(22.727272727272727)
    })
  })

  describe('`Distance.fromYdToFt()`', () => {
    it('converts yard to feet', () => {
      expect(Distance.fromYdToFt(0)).to.equal(0)

      expect(Distance.fromYdToFt(10)).to.equal(30)

      expect(Distance.fromYdToFt(200)).to.equal(600)

      expect(Distance.fromYdToFt(3000)).to.equal(9000)

      expect(Distance.fromYdToFt(40000)).to.equal(120000)
    })
  })

  describe('`Distance.fromYdToIn()`', () => {
    it('converts yard to inch', () => {
      expect(Distance.fromYdToIn(0)).to.equal(0)

      expect(Distance.fromYdToIn(10)).to.equal(360)

      expect(Distance.fromYdToIn(200)).to.equal(7200)

      expect(Distance.fromYdToIn(3000)).to.equal(108000)

      expect(Distance.fromYdToIn(40000)).to.equal(1440000)
    })
  })

  describe('`Distance.fromFtToKm()`', () => {
    it('converts feet to kilometre', () => {
      expect(Distance.fromFtToKm(0)).to.equal(0)

      expect(Distance.fromFtToKm(10)).to.equal(0.003048000000012192)

      expect(Distance.fromFtToKm(200)).to.equal(0.06096000000024384)

      expect(Distance.fromFtToKm(3000)).to.equal(0.9144000000036575)

      expect(Distance.fromFtToKm(40000)).to.equal(12.192000000048768) // (12.192000000048769)
    })
  })

  describe('`Distance.fromFtToMt()`', () => {
    it('converts feet to metre', () => {
      expect(Distance.fromFtToMt(0)).to.equal(0)

      expect(Distance.fromFtToMt(10)).to.equal(3.048000000012192)

      expect(Distance.fromFtToMt(200)).to.equal(60.96000000024384)

      expect(Distance.fromFtToMt(3000)).to.equal(914.4000000036575)

      expect(Distance.fromFtToMt(40000)).to.equal(12192.000000048769)
    })
  })

  describe('`Distance.fromFtToCm()`', () => {
    it('converts feet to centimetre', () => {
      expect(Distance.fromFtToCm(0)).to.equal(0)

      expect(Distance.fromFtToCm(10)).to.equal(304.8000000012192)

      expect(Distance.fromFtToCm(200)).to.equal(6096.000000024384)

      expect(Distance.fromFtToCm(3000)).to.equal(91440.00000036575)

      expect(Distance.fromFtToCm(40000)).to.equal(1219200.0000048769)
    })
  })

  describe('`Distance.fromFtToMm()`', () => {
    it('converts feet to milimetre', () => {
      expect(Distance.fromFtToMm(0)).to.equal(0)

      expect(Distance.fromFtToMm(10)).to.equal(3048.000000012192)

      expect(Distance.fromFtToMm(200)).to.equal(60960.00000024384)

      expect(Distance.fromFtToMm(3000)).to.equal(914400.0000036575)

      expect(Distance.fromFtToMm(40000)).to.equal(12192000.000048768)
    })
  })

  describe('`Distance.fromFtToMi()`', () => {
    it('converts feet to mile', () => {
      expect(Distance.fromFtToMi(0)).to.equal(0)

      expect(Distance.fromFtToMi(10)).to.equal(0.001893939393939394)

      expect(Distance.fromFtToMi(200)).to.equal(0.03787878787878788)

      expect(Distance.fromFtToMi(3000)).to.equal(0.5681818181818182)

      expect(Distance.fromFtToMi(40000)).to.equal(7.575757575757576)
    })
  })

  describe('`Distance.fromFtToYd()`', () => {
    it('converts feet to yard', () => {
      expect(Distance.fromFtToYd(0)).to.equal(0)

      expect(Distance.fromFtToYd(10)).to.equal(3.3333333333333335)

      expect(Distance.fromFtToYd(200)).to.equal(66.66666666666667)

      expect(Distance.fromFtToYd(3000)).to.equal(1000)

      expect(Distance.fromFtToYd(40000)).to.equal(13333.333333333334)
    })
  })

  describe('`Distance.fromFtToIn()`', () => {
    it('converts feet to inch', () => {
      expect(Distance.fromFtToIn(0)).to.equal(0)

      expect(Distance.fromFtToIn(10)).to.equal(120)

      expect(Distance.fromFtToIn(200)).to.equal(2400)

      expect(Distance.fromFtToIn(3000)).to.equal(36000)

      expect(Distance.fromFtToIn(40000)).to.equal(480000)
    })
  })

  describe('`Distance.fromInToMi()`', () => {
    it('converts inch to mile', () => {
      expect(Distance.fromInToMi(0)).to.equal(0)

      expect(Distance.fromInToMi(10)).to.equal(0.00015782828282828284)

      expect(Distance.fromInToMi(200)).to.equal(0.003156565656565657)

      expect(Distance.fromInToMi(3000)).to.equal(0.04734848484848485)

      expect(Distance.fromInToMi(40000)).to.equal(0.6313131313131313)
    })
  })

  describe('`Distance.fromInToYd()`', () => {
    it('converts inch to yard', () => {
      expect(Distance.fromInToYd(0)).to.equal(0)

      expect(Distance.fromInToYd(10)).to.equal(0.2777777777777778)

      expect(Distance.fromInToYd(200)).to.equal(5.555555555555556)

      expect(Distance.fromInToYd(1000)).to.equal(27.777777777777775)

      expect(Distance.fromInToYd(40000)).to.equal(1111.111111111111)
    })
  })

  describe('`Distance.fromInToFt()`', () => {
    it('converts inch to feet', () => {
      expect(Distance.fromInToFt(0)).to.equal(0)

      expect(Distance.fromInToFt(120)).to.equal(10)

      expect(Distance.fromInToFt(2400)).to.equal(200)

      expect(Distance.fromInToFt(36000)).to.equal(3000)

      expect(Distance.fromInToFt(480000)).to.equal(40000)
    })
  })

  describe('`Distance.fromInToMm()`', () => {
    it('converts inch to milimetre', () => {
      expect(Distance.fromInToMm(0)).to.equal(0)

      expect(Distance.fromInToMm(120)).to.equal(3048.000000012192)

      expect(Distance.fromInToMm(2400)).to.equal(60960.00000024384)

      expect(Distance.fromInToMm(36000)).to.equal(914400.0000036575)

      expect(Distance.fromInToMm(480000)).to.equal(12192000.000048768)
    })
  })

  describe('`Distance.fromInToCm()`', () => {
    it('converts inch to centimetre', () => {
      expect(Distance.fromInToCm(0)).to.equal(0)

      expect(Distance.fromInToCm(120)).to.equal(304.8000000012192)

      expect(Distance.fromInToCm(2400)).to.equal(6096.000000024384)

      expect(Distance.fromInToCm(36000)).to.equal(91440.00000036575)

      expect(Distance.fromInToCm(480000)).to.equal(1219200.0000048769)
    })
  })

  describe('`Distance.fromInToMt()`', () => {
    it('converts inch to metre', () => {
      expect(Distance.fromInToMt(0)).to.equal(0)

      expect(Distance.fromInToMt(120)).to.equal(3.048000000012192)

      expect(Distance.fromInToMt(2400)).to.equal(60.96000000024384)

      expect(Distance.fromInToMt(36000)).to.equal(914.4000000036575)

      expect(Distance.fromInToMt(480000)).to.equal(12192.000000048769)
    })
  })

  describe('`Distance.fromInToKm()`', () => {
    it('converts inch to kilometre', () => {
      expect(Distance.fromInToKm(0)).to.equal(0)

      expect(Distance.fromInToKm(120)).to.equal(0.003048000000012192)

      expect(Distance.fromInToKm(2400)).to.equal(0.06096000000024384)

      expect(Distance.fromInToKm(36000)).to.equal(0.9144000000036575)

      expect(Distance.fromInToKm(480000)).to.equal(12.192000000048768)
    })
  })

  describe('`Distance.convert()`', () => {
    describe('`Distance.convert(n).fromKm.toMt()`', () => {
      it('converts kilometre to metre', () => {
        expect(Distance.convert(0).fromKm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMt()).to.equal(10000)

        expect(Distance.convert(200).fromKm.toMt()).to.equal(200000)

        expect(Distance.convert(3000).fromKm.toMt()).to.equal(3000000)

        expect(Distance.convert(40000).fromKm.toMt()).to.equal(40000000)
      })
    })

    describe('`Distance.convert(n).fromKm.toCm()`', () => {
      it('converts kilometre to centimetre', () => {
        expect(Distance.convert(0).fromKm.toCm()).to.equal(0)

        expect(Distance.convert(10).fromKm.toCm()).to.equal(1000000)

        expect(Distance.convert(200).fromKm.toCm()).to.equal(20000000)

        expect(Distance.convert(3000).fromKm.toCm()).to.equal(300000000)

        expect(Distance.convert(40000).fromKm.toCm()).to.equal(4000000000)
      })
    })

    describe('`Distance.convert(n).fromKm.toMm()`', () => {
      it('converts kilometre to milimetre', () => {
        expect(Distance.convert(0).fromKm.toMm()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMm()).to.equal(10000000)

        expect(Distance.convert(200).fromKm.toMm()).to.equal(200000000)

        expect(Distance.convert(3000).fromKm.toMm()).to.equal(3000000000)

        expect(Distance.convert(40000).fromKm.toMm()).to.equal(40000000000)
      })
    })

    describe('`Distance.convert(n).fromKm.toMi()`', () => {
      it('converts kilometre to mile', () => {
        expect(Distance.convert(0).fromKm.toMi()).to.equal(0)

        expect(Distance.convert(10).fromKm.toMi()).to.equal(6.213711922348486)

        expect(Distance.convert(200).fromKm.toMi()).to.equal(124.2742384469697)

        expect(Distance.convert(3000).fromKm.toMi()).to.equal(1864.1135767045455)

        expect(Distance.convert(40000).fromKm.toMi()).to.equal(24854.84768939394)
      })
    })

    describe('`Distance.convert(n).fromKm.toYd()`', () => {
      it('converts kilometre to yard', () => {
        expect(Distance.convert(0).fromKm.toYd()).to.equal(0)

        expect(Distance.convert(10).fromKm.toYd()).to.equal(10936.132983333335)

        expect(Distance.convert(200).fromKm.toYd()).to.equal(218722.65966666667)

        expect(Distance.convert(3000).fromKm.toYd()).to.equal(3280839.895)

        expect(Distance.convert(40000).fromKm.toYd()).to.equal(43744531.93333334)
      })
    })

    describe('`Distance.convert(n).fromKm.toFt()`', () => {
      it('converts kilometre to feet', () => {
        expect(Distance.convert(0).fromKm.toFt()).to.equal(0)

        expect(Distance.convert(10).fromKm.toFt()).to.equal(32808.39895)

        expect(Distance.convert(200).fromKm.toFt()).to.equal(656167.979)

        expect(Distance.convert(3000).fromKm.toFt()).to.equal(9842519.685)

        expect(Distance.convert(40000).fromKm.toFt()).to.equal(131233595.80000001)
      })
    })

    describe('`Distance.convert(n).fromKm.toIn()`', () => {
      it('converts kilometre to inch', () => {
        expect(Distance.convert(0).fromKm.toIn()).to.equal(0)

        expect(Distance.convert(10).fromKm.toIn()).to.equal(393700.78740000003)

        expect(Distance.convert(200).fromKm.toIn()).to.equal(7874015.748000001)

        expect(Distance.convert(3000).fromKm.toIn()).to.equal(118110236.22)

        expect(Distance.convert(40000).fromKm.toIn()).to.equal(1574803149.6000001)
      })
    })

    describe('`Distance.convert(n).fromMt.toKm()`', () => {
      it('converts metre to kilometre', () => {
        expect(Distance.convert(0).fromMt.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toKm()).to.equal(0.01)

        expect(Distance.convert(200).fromMt.toKm()).to.equal(0.2)

        expect(Distance.convert(3000).fromMt.toKm()).to.equal(3)

        expect(Distance.convert(40000).fromMt.toKm()).to.equal(40)
      })
    })

    describe('`Distance.convert(n).fromMt.toCm()`', () => {
      it('converts metre to centimetre', () => {
        expect(Distance.convert(0).fromMt.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toCm()).to.equal(1000)

        expect(Distance.convert(200).fromMt.toCm()).to.equal(20000)

        expect(Distance.convert(3000).fromMt.toCm()).to.equal(300000)

        expect(Distance.convert(40000).fromMt.toCm()).to.equal(4000000)
      })
    })

    describe('`Distance.convert(n).fromMt.toMm()`', () => {
      it('converts metre to milimetre', () => {
        expect(Distance.convert(0).fromMt.toMm()).to.equal(0)

        expect(Distance.convert(10).fromMt.toMm()).to.equal(10000)

        expect(Distance.convert(200).fromMt.toMm()).to.equal(200000)

        expect(Distance.convert(3000).fromMt.toMm()).to.equal(3000000)

        expect(Distance.convert(40000).fromMt.toMm()).to.equal(40000000)
      })
    })

    describe('`Distance.convert(n).fromMt.toMi()`', () => {
      it('converts metre to mile', () => {
        expect(Distance.convert(0).fromMt.toMi()).to.equal(0)

        expect(Distance.convert(10).fromMt.toMi()).to.equal(0.006213711922348486)

        expect(Distance.convert(200).fromMt.toMi()).to.equal(0.1242742384469697)

        expect(Distance.convert(3000).fromMt.toMi()).to.equal(1.8641135767045458)

        expect(Distance.convert(40000).fromMt.toMi()).to.equal(24.854847689393942)
      })
    })

    describe('`Distance.convert(n).fromMt.toYd()`', () => {
      it('converts metre to yard', () => {
        expect(Distance.convert(0).fromMt.toYd()).to.equal(0)

        expect(Distance.convert(10).fromMt.toYd()).to.equal(10.936132983333335)

        expect(Distance.convert(200).fromMt.toYd()).to.equal(218.7226596666667)

        expect(Distance.convert(3000).fromMt.toYd()).to.equal(3280.8398950000005)

        expect(Distance.convert(40000).fromMt.toYd()).to.equal(43744.53193333334)
      })
    })

    describe('`Distance.convert(n).fromMt.toFt()`', () => {
      it('converts metre to feet', () => {
        expect(Distance.convert(0).fromMt.toFt()).to.equal(0)

        expect(Distance.convert(10).fromMt.toFt()).to.equal(32.808398950000004)

        expect(Distance.convert(200).fromMt.toFt()).to.equal(656.1679790000001)

        expect(Distance.convert(3000).fromMt.toFt()).to.equal(9842.519685000001)

        expect(Distance.convert(40000).fromMt.toFt()).to.equal(131233.5958)
      })
    })

    describe('`Distance.convert(n).fromMt.toIn()`', () => {
      it('converts metre to inch', () => {
        expect(Distance.convert(0).fromMt.toIn()).to.equal(0)

        expect(Distance.convert(10).fromMt.toIn()).to.equal(393.7007874)

        expect(Distance.convert(200).fromMt.toIn()).to.equal(7874.015748000001)

        expect(Distance.convert(3000).fromMt.toIn()).to.equal(118110.23622)

        expect(Distance.convert(40000).fromMt.toIn()).to.equal(1574803.1496000001)
      })
    })

    describe('`Distance.convert(n).fromCm.toKm()`', () => {
      it('converts centimetre to kilometre', () => {
        expect(Distance.convert(0).fromCm.toKm()).to.equal(0)

        expect(Distance.convert(10).fromCm.toKm()).to.equal(0.0001)

        expect(Distance.convert(200).fromCm.toKm()).to.equal(0.002)

        expect(Distance.convert(3000).fromCm.toKm()).to.equal(0.03)

        expect(Distance.convert(40000).fromCm.toKm()).to.equal(0.4)
      })
    })

    describe('`Distance.convert(n).fromCm.toMt()`', () => {
      it('converts centimetre to metre', () => {
        expect(Distance.convert(0).fromCm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMt()).to.equal(0.1)

        expect(Distance.convert(200).fromCm.toMt()).to.equal(2)

        expect(Distance.convert(3000).fromCm.toMt()).to.equal(30)

        expect(Distance.convert(40000).fromCm.toMt()).to.equal(400)
      })
    })

    describe('`Distance.convert(n).fromCm.toMm()`', () => {
      it('converts centimetre to milimetre', () => {
        expect(Distance.convert(0).fromCm.toMm()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMm()).to.equal(100)

        expect(Distance.convert(200).fromCm.toMm()).to.equal(2000)

        expect(Distance.convert(3000).fromCm.toMm()).to.equal(30000)

        expect(Distance.convert(40000).fromCm.toMm()).to.equal(400000)
      })
    })

    describe('`Distance.convert(n).fromCm.toMi()`', () => {
      it('converts centimetre to mile', () => {
        expect(Distance.convert(0).fromCm.toMi()).to.equal(0)

        expect(Distance.convert(10).fromCm.toMi()).to.equal(0.00006213711922348485)

        expect(Distance.convert(200).fromCm.toMi()).to.equal(0.001242742384469697)

        expect(Distance.convert(3000).fromCm.toMi()).to.equal(0.018641135767045458)

        expect(Distance.convert(40000).fromCm.toMi()).to.equal(0.2485484768939394)
      })
    })

    describe('`Distance.convert(n).fromCm.toYd()`', () => {
      it('converts centimetre to yard', () => {
        expect(Distance.convert(0).fromCm.toYd()).to.equal(0)

        expect(Distance.convert(10).fromCm.toYd()).to.equal(0.10936132983333334)

        expect(Distance.convert(200).fromCm.toYd()).to.equal(2.1872265966666666)

        expect(Distance.convert(3000).fromCm.toYd()).to.equal(32.808398950000004)

        expect(Distance.convert(40000).fromCm.toYd()).to.equal(437.4453193333334)
      })
    })

    describe('`Distance.convert(n).fromCm.toFt()`', () => {
      it('converts centimetre to feet', () => {
        expect(Distance.convert(0).fromCm.toFt()).to.equal(0)

        expect(Distance.convert(10).fromCm.toFt()).to.equal(0.3280839895)

        expect(Distance.convert(200).fromCm.toFt()).to.equal(6.56167979)

        expect(Distance.convert(3000).fromCm.toFt()).to.equal(98.42519685)

        expect(Distance.convert(40000).fromCm.toFt()).to.equal(1312.3359580000001)
      })
    })

    describe('`Distance.convert(n).fromCm.toIn()`', () => {
      it('converts centimetre to inch', () => {
        expect(Distance.convert(0).fromCm.toIn()).to.equal(0)

        expect(Distance.convert(10).fromCm.toIn()).to.equal(3.9370078740000003)

        expect(Distance.convert(200).fromCm.toIn()).to.equal(78.74015748000001)

        expect(Distance.convert(3000).fromCm.toIn()).to.equal(1181.1023622)

        expect(Distance.convert(40000).fromCm.toIn()).to.equal(15748.031496000001)
      })
    })

    describe('`Distance.convert(n).fromMm.toMi()`', () => {
      it('converts milimetre to mile', () => {
        expect(Distance.convert(0).fromMm.toMi()).to.equal(0)

        expect(Distance.convert(10).fromMm.toMi()).to.equal(0.000006213711922348486)

        expect(Distance.convert(200).fromMm.toMi()).to.equal(0.0001242742384469697)

        expect(Distance.convert(3000).fromMm.toMi()).to.equal(0.0018641135767045456)

        expect(Distance.convert(40000).fromMm.toMi()).to.equal(0.024854847689393944)
      })
    })

    describe('`Distance.convert(n).fromMm.toYd()`', () => {
      it('converts milimetre to yard', () => {
        expect(Distance.convert(0).fromMm.toYd()).to.equal(0)

        expect(Distance.convert(10).fromMm.toYd()).to.equal(0.010936132983333334)

        expect(Distance.convert(200).fromMm.toYd()).to.equal(0.21872265966666668)

        expect(Distance.convert(3000).fromMm.toYd()).to.equal(3.280839895)

        expect(Distance.convert(40000).fromMm.toYd()).to.equal(43.74453193333334)
      })
    })

    describe('`Distance.convert(n).fromMm.toFt()`', () => {
      it('converts milimetre to feet', () => {
        expect(Distance.convert(0).fromMm.toFt()).to.equal(0)

        expect(Distance.convert(10).fromMm.toFt()).to.equal(0.032808398950000005)

        expect(Distance.convert(200).fromMm.toFt()).to.equal(0.656167979)

        expect(Distance.convert(3000).fromMm.toFt()).to.equal(9.842519685000001)

        expect(Distance.convert(40000).fromMm.toFt()).to.equal(131.23359580000002)
      })
    })

    describe('`Distance.convert(n).fromMm.toIn()`', () => {
      it('converts milimetre to inch', () => {
        expect(Distance.convert(0).fromMm.toIn()).to.equal(0)

        expect(Distance.convert(10).fromMm.toIn()).to.equal(0.39370078740000003)

        expect(Distance.convert(200).fromMm.toIn()).to.equal(7.874015748000001)

        expect(Distance.convert(3000).fromMm.toIn()).to.equal(118.11023622)

        expect(Distance.convert(40000).fromMm.toIn()).to.equal(1574.8031496)
      })
    })

    describe('`Distance.convert(n).fromMi.toKm()`', () => {
      it('converts mile to kilometre', () => {
        expect(Distance.convert(0).fromMi.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toKm()).to.equal(16.093440000064373)

        expect(Distance.convert(200).fromMi.toKm()).to.equal(321.86880000128747)

        expect(Distance.convert(3000).fromMi.toKm()).to.equal(4828.032000019311)

        expect(Distance.convert(40000).fromMi.toKm()).to.equal(64373.76000025749)
      })
    })

    describe('`Distance.convert(n).fromMi.toMt()`', () => {
      it('converts mile to metre', () => {
        expect(Distance.convert(0).fromMi.toMt()).to.equal(0)

        expect(Distance.convert(10).fromMi.toMt()).to.equal(16093.440000064373)

        expect(Distance.convert(200).fromMi.toMt()).to.equal(321868.8000012875)

        expect(Distance.convert(3000).fromMi.toMt()).to.equal(4828032.000019312)

        expect(Distance.convert(40000).fromMi.toMt()).to.equal(64373760.00025749)
      })
    })

    describe('`Distance.convert(n).fromMi.toCm()`', () => {
      it('converts mile to centimetre', () => {
        expect(Distance.convert(0).fromMi.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toCm()).to.equal(1609344.0000064373)

        expect(Distance.convert(200).fromMi.toCm()).to.equal(32186880.000128746)

        expect(Distance.convert(3000).fromMi.toCm()).to.equal(482803200.0019312)

        expect(Distance.convert(40000).fromMi.toCm()).to.equal(6437376000.025749)
      })
    })

    describe('`Distance.convert(n).fromMi.toMm()`', () => {
      it('converts mile to milimetre', () => {
        expect(Distance.convert(0).fromMi.toMm()).to.equal(0)

        expect(Distance.convert(10).fromMi.toMm()).to.equal(16093440.000064373)

        expect(Distance.convert(200).fromMi.toMm()).to.equal(321868800.00128746)

        expect(Distance.convert(3000).fromMi.toMm()).to.equal(4828032000.019312)

        expect(Distance.convert(40000).fromMi.toMm()).to.equal(64373760000.25749)
      })
    })

    describe('`Distance.convert(n).fromMm.toKm()`', () => {
      it('converts milimetre to kilometre', () => {
        expect(Distance.convert(0).fromMm.toKm()).to.equal(0)

        expect(Distance.convert(10).fromMm.toKm()).to.equal(0.00001)

        expect(Distance.convert(200).fromMm.toKm()).to.equal(0.0002)

        expect(Distance.convert(3000).fromMm.toKm()).to.equal(0.003)

        expect(Distance.convert(40000).fromMm.toKm()).to.equal(0.04)
      })
    })

    describe('`Distance.convert(n).fromMm.toMt()`', () => {
      it('converts milimetre to metre', () => {
        expect(Distance.convert(0).fromMm.toMt()).to.equal(0)

        expect(Distance.convert(10).fromMm.toMt()).to.equal(0.01)

        expect(Distance.convert(200).fromMm.toMt()).to.equal(0.2)

        expect(Distance.convert(3000).fromMm.toMt()).to.equal(3)

        expect(Distance.convert(40000).fromMm.toMt()).to.equal(40)
      })
    })

    describe('`Distance.convert(n).fromMm.toCm()`', () => {
      it('converts milimetre to centimetre', () => {
        expect(Distance.convert(0).fromMm.toCm()).to.equal(0)

        expect(Distance.convert(10).fromMm.toCm()).to.equal(1)

        expect(Distance.convert(200).fromMm.toCm()).to.equal(20)

        expect(Distance.convert(3000).fromMm.toCm()).to.equal(300)

        expect(Distance.convert(40000).fromMm.toCm()).to.equal(4000)
      })
    })

    describe('`Distance.convert(n).fromMi.toYd()`', () => {
      it('converts mile to yard', () => {
        expect(Distance.convert(0).fromMi.toYd()).to.equal(0)

        expect(Distance.convert(10).fromMi.toYd()).to.equal(17600)

        expect(Distance.convert(200).fromMi.toYd()).to.equal(352000)

        expect(Distance.convert(3000).fromMi.toYd()).to.equal(5280000)

        expect(Distance.convert(40000).fromMi.toYd()).to.equal(70400000)
      })
    })

    describe('`Distance.convert(n).fromMi.toFt()`', () => {
      it('converts mile to feet', () => {
        expect(Distance.convert(0).fromMi.toFt()).to.equal(0)

        expect(Distance.convert(10).fromMi.toFt()).to.equal(52800)

        expect(Distance.convert(200).fromMi.toFt()).to.equal(1056000)

        expect(Distance.convert(3000).fromMi.toFt()).to.equal(15840000)

        expect(Distance.convert(40000).fromMi.toFt()).to.equal(211200000)
      })
    })

    describe('`Distance.convert(n).fromMi.toIn()`', () => {
      it('converts mile to inch', () => {
        expect(Distance.convert(0).fromMi.toIn()).to.equal(0)

        expect(Distance.convert(10).fromMi.toIn()).to.equal(633600)

        expect(Distance.convert(200).fromMi.toIn()).to.equal(12672000)

        expect(Distance.convert(3000).fromMi.toIn()).to.equal(190080000)

        expect(Distance.convert(40000).fromMi.toIn()).to.equal(2534400000)
      })
    })

    describe('`Distance.convert(n).fromYd.toKm()`', () => {
      it('converts yard to kilometre', () => {
        expect(Distance.convert(0).fromYd.toKm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toKm()).to.equal(0.009144000000036578)

        expect(Distance.convert(200).fromYd.toKm()).to.equal(0.1828800000007315)

        expect(Distance.convert(3000).fromYd.toKm()).to.equal(2.743200000010973)

        expect(Distance.convert(40000).fromYd.toKm()).to.equal(36.57600000014631)
      })
    })

    describe('`Distance.convert(n).fromYd.toMt()`', () => {
      it('converts yard to metre', () => {
        expect(Distance.convert(0).fromYd.toMt()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMt()).to.equal(9.144000000036577)

        expect(Distance.convert(200).fromYd.toMt()).to.equal(182.8800000007315)

        expect(Distance.convert(3000).fromYd.toMt()).to.equal(2743.200000010973)

        expect(Distance.convert(40000).fromYd.toMt()).to.equal(36576.000000146305)
      })
    })

    describe('`Distance.convert(n).fromYd.toCm()`', () => {
      it('converts yard to centimetre', () => {
        expect(Distance.convert(0).fromYd.toCm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toCm()).to.equal(914.4000000036576)

        expect(Distance.convert(200).fromYd.toCm()).to.equal(18288.000000073152)

        expect(Distance.convert(3000).fromYd.toCm()).to.equal(274320.0000010973)

        expect(Distance.convert(40000).fromYd.toCm()).to.equal(3657600.00001463)
      })
    })

    describe('`Distance.convert(n).fromYd.toMm()`', () => {
      it('converts yard to milimetre', () => {
        expect(Distance.convert(0).fromYd.toMm()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMm()).to.equal(9144.000000036576)

        expect(Distance.convert(200).fromYd.toMm()).to.equal(182880.00000073152)

        expect(Distance.convert(3000).fromYd.toMm()).to.equal(2743200.000010973)

        expect(Distance.convert(40000).fromYd.toMm()).to.equal(36576000.0001463)
      })
    })

    describe('`Distance.convert(n).fromYd.toMi()`', () => {
      it('converts yard to mile', () => {
        expect(Distance.convert(0).fromYd.toMi()).to.equal(0)

        expect(Distance.convert(10).fromYd.toMi()).to.equal(0.005681818181818182)

        expect(Distance.convert(200).fromYd.toMi()).to.equal(0.11363636363636363)

        expect(Distance.convert(3000).fromYd.toMi()).to.equal(1.7045454545454546)

        expect(Distance.convert(40000).fromYd.toMi()).to.equal(22.727272727272727)
      })
    })

    describe('`Distance.convert(n).fromYd.toFt()`', () => {
      it('converts yard to feet', () => {
        expect(Distance.convert(0).fromYd.toFt()).to.equal(0)

        expect(Distance.convert(10).fromYd.toFt()).to.equal(30)

        expect(Distance.convert(200).fromYd.toFt()).to.equal(600)

        expect(Distance.convert(3000).fromYd.toFt()).to.equal(9000)

        expect(Distance.convert(40000).fromYd.toFt()).to.equal(120000)
      })
    })

    describe('`Distance.convert(n).fromYd.toIn()`', () => {
      it('converts yard to inch', () => {
        expect(Distance.convert(0).fromYd.toIn()).to.equal(0)

        expect(Distance.convert(10).fromYd.toIn()).to.equal(360)

        expect(Distance.convert(200).fromYd.toIn()).to.equal(7200)

        expect(Distance.convert(3000).fromYd.toIn()).to.equal(108000)

        expect(Distance.convert(40000).fromYd.toIn()).to.equal(1440000)
      })
    })

    describe('`Distance.convert(n).fromFt.toKm()`', () => {
      it('converts feet to kilometre', () => {
        expect(Distance.convert(0).fromFt.toKm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toKm()).to.equal(0.003048000000012192)

        expect(Distance.convert(200).fromFt.toKm()).to.equal(0.06096000000024384)

        expect(Distance.convert(3000).fromFt.toKm()).to.equal(0.9144000000036575)

        expect(Distance.convert(40000).fromFt.toKm()).to.equal(12.192000000048768) // (12.192000000048769)
      })
    })

    describe('`Distance.convert(n).fromFt.toMt()`', () => {
      it('converts feet to metre', () => {
        expect(Distance.convert(0).fromFt.toMt()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMt()).to.equal(3.048000000012192)

        expect(Distance.convert(200).fromFt.toMt()).to.equal(60.96000000024384)

        expect(Distance.convert(3000).fromFt.toMt()).to.equal(914.4000000036575)

        expect(Distance.convert(40000).fromFt.toMt()).to.equal(12192.000000048769)
      })
    })

    describe('`Distance.convert(n).fromFt.toCm()`', () => {
      it('converts feet to centimetre', () => {
        expect(Distance.convert(0).fromFt.toCm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toCm()).to.equal(304.8000000012192)

        expect(Distance.convert(200).fromFt.toCm()).to.equal(6096.000000024384)

        expect(Distance.convert(3000).fromFt.toCm()).to.equal(91440.00000036575)

        expect(Distance.convert(40000).fromFt.toCm()).to.equal(1219200.0000048769)
      })
    })

    describe('`Distance.convert(n).fromFt.toMm()`', () => {
      it('converts feet to milimetre', () => {
        expect(Distance.convert(0).fromFt.toMm()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMm()).to.equal(3048.000000012192)

        expect(Distance.convert(200).fromFt.toMm()).to.equal(60960.00000024384)

        expect(Distance.convert(3000).fromFt.toMm()).to.equal(914400.0000036575)

        expect(Distance.convert(40000).fromFt.toMm()).to.equal(12192000.000048768)
      })
    })

    describe('`Distance.convert(n).fromFt.toMi()`', () => {
      it('converts feet to mile', () => {
        expect(Distance.convert(0).fromFt.toMi()).to.equal(0)

        expect(Distance.convert(10).fromFt.toMi()).to.equal(0.001893939393939394)

        expect(Distance.convert(200).fromFt.toMi()).to.equal(0.03787878787878788)

        expect(Distance.convert(3000).fromFt.toMi()).to.equal(0.5681818181818182)

        expect(Distance.convert(40000).fromFt.toMi()).to.equal(7.575757575757576)
      })
    })

    describe('`Distance.convert(n).fromFt.toYd()`', () => {
      it('converts feet to yard', () => {
        expect(Distance.convert(0).fromFt.toYd()).to.equal(0)

        expect(Distance.convert(10).fromFt.toYd()).to.equal(3.3333333333333335)

        expect(Distance.convert(200).fromFt.toYd()).to.equal(66.66666666666667)

        expect(Distance.convert(3000).fromFt.toYd()).to.equal(1000)

        expect(Distance.convert(40000).fromFt.toYd()).to.equal(13333.333333333334)
      })
    })

    describe('`Distance.convert(n).fromFt.toIn()`', () => {
      it('converts feet to inch', () => {
        expect(Distance.convert(0).fromFt.toIn()).to.equal(0)

        expect(Distance.convert(10).fromFt.toIn()).to.equal(120)

        expect(Distance.convert(200).fromFt.toIn()).to.equal(2400)

        expect(Distance.convert(3000).fromFt.toIn()).to.equal(36000)

        expect(Distance.convert(40000).fromFt.toIn()).to.equal(480000)
      })
    })

    describe('`Distance.convert(n).fromIn.toMi()`', () => {
      it('converts inch to mile', () => {
        expect(Distance.convert(0).fromIn.toMi()).to.equal(0)

        expect(Distance.convert(10).fromIn.toMi()).to.equal(0.00015782828282828284)

        expect(Distance.convert(200).fromIn.toMi()).to.equal(0.003156565656565657)

        expect(Distance.convert(3000).fromIn.toMi()).to.equal(0.04734848484848485)

        expect(Distance.convert(40000).fromIn.toMi()).to.equal(0.6313131313131313)
      })
    })

    describe('`Distance.convert(n).fromIn.toYd()`', () => {
      it('converts inch to yard', () => {
        expect(Distance.convert(0).fromIn.toYd()).to.equal(0)

        expect(Distance.convert(10).fromIn.toYd()).to.equal(0.2777777777777778)

        expect(Distance.convert(200).fromIn.toYd()).to.equal(5.555555555555556)

        expect(Distance.convert(1000).fromIn.toYd()).to.equal(27.777777777777775)

        expect(Distance.convert(40000).fromIn.toYd()).to.equal(1111.111111111111)
      })
    })

    describe('`Distance.convert(n).fromIn.toFt()`', () => {
      it('converts inch to feet', () => {
        expect(Distance.convert(0).fromIn.toFt()).to.equal(0)

        expect(Distance.convert(120).fromIn.toFt()).to.equal(10)

        expect(Distance.convert(2400).fromIn.toFt()).to.equal(200)

        expect(Distance.convert(36000).fromIn.toFt()).to.equal(3000)

        expect(Distance.convert(480000).fromIn.toFt()).to.equal(40000)
      })
    })

    describe('`Distance.convert(n).fromIn.toMm()`', () => {
      it('converts inch to milimetre', () => {
        expect(Distance.convert(0).fromIn.toMm()).to.equal(0)

        expect(Distance.convert(120).fromIn.toMm()).to.equal(3048.000000012192)

        expect(Distance.convert(2400).fromIn.toMm()).to.equal(60960.00000024384)

        expect(Distance.convert(36000).fromIn.toMm()).to.equal(914400.0000036575)

        expect(Distance.convert(480000).fromIn.toMm()).to.equal(12192000.000048768)
      })
    })

    describe('`Distance.convert(n).fromIn.toCm()`', () => {
      it('converts inch to centimetre', () => {
        expect(Distance.convert(0).fromIn.toCm()).to.equal(0)

        expect(Distance.convert(120).fromIn.toCm()).to.equal(304.8000000012192)

        expect(Distance.convert(2400).fromIn.toCm()).to.equal(6096.000000024384)

        expect(Distance.convert(36000).fromIn.toCm()).to.equal(91440.00000036575)

        expect(Distance.convert(480000).fromIn.toCm()).to.equal(1219200.0000048769)
      })
    })

    describe('`Distance.convert(n).fromIn.toMt()`', () => {
      it('converts inch to metre', () => {
        expect(Distance.convert(0).fromIn.toMt()).to.equal(0)

        expect(Distance.convert(120).fromIn.toMt()).to.equal(3.048000000012192)

        expect(Distance.convert(2400).fromIn.toMt()).to.equal(60.96000000024384)

        expect(Distance.convert(36000).fromIn.toMt()).to.equal(914.4000000036575)

        expect(Distance.convert(480000).fromIn.toMt()).to.equal(12192.000000048769)
      })
    })

    describe('`Distance.convert(n).fromIn.toKm()`', () => {
      it('converts inch to kilometre', () => {
        expect(Distance.convert(0).fromIn.toKm()).to.equal(0)

        expect(Distance.convert(120).fromIn.toKm()).to.equal(0.003048000000012192)

        expect(Distance.convert(2400).fromIn.toKm()).to.equal(0.06096000000024384)

        expect(Distance.convert(36000).fromIn.toKm()).to.equal(0.9144000000036575)

        expect(Distance.convert(480000).fromIn.toKm()).to.equal(12.192000000048768)
      })
    })
  })

  describe('`fromKmToMt()`', () => {
    it('converts kilometre to metre', () => {
      expect(fromKmToMt(0)).to.equal(0)

      expect(fromKmToMt(10)).to.equal(10000)

      expect(fromKmToMt(200)).to.equal(200000)

      expect(fromKmToMt(3000)).to.equal(3000000)

      expect(fromKmToMt(40000)).to.equal(40000000)
    })
  })

  describe('`fromKmToCm()`', () => {
    it('converts kilometre to centimetre', () => {
      expect(fromKmToCm(0)).to.equal(0)

      expect(fromKmToCm(10)).to.equal(1000000)

      expect(fromKmToCm(200)).to.equal(20000000)

      expect(fromKmToCm(3000)).to.equal(300000000)

      expect(fromKmToCm(40000)).to.equal(4000000000)
    })
  })

  describe('`fromKmToMm()`', () => {
    it('converts kilometre to milimetre', () => {
      expect(fromKmToMm(0)).to.equal(0)

      expect(fromKmToMm(10)).to.equal(10000000)

      expect(fromKmToMm(200)).to.equal(200000000)

      expect(fromKmToMm(3000)).to.equal(3000000000)

      expect(fromKmToMm(40000)).to.equal(40000000000)
    })
  })

  describe('`fromKmToMi()`', () => {
    it('converts kilometre to mile', () => {
      expect(fromKmToMi(0)).to.equal(0)

      expect(fromKmToMi(10)).to.equal(6.213711922348486)

      expect(fromKmToMi(200)).to.equal(124.2742384469697)

      expect(fromKmToMi(3000)).to.equal(1864.1135767045455)

      expect(fromKmToMi(40000)).to.equal(24854.84768939394)
    })
  })

  describe('`fromKmToYd()`', () => {
    it('converts kilometre to yard', () => {
      expect(fromKmToYd(0)).to.equal(0)

      expect(fromKmToYd(10)).to.equal(10936.132983333335)

      expect(fromKmToYd(200)).to.equal(218722.65966666667)

      expect(fromKmToYd(3000)).to.equal(3280839.895)

      expect(fromKmToYd(40000)).to.equal(43744531.93333334)
    })
  })

  describe('`fromKmToFt()`', () => {
    it('converts kilometre to feet', () => {
      expect(fromKmToFt(0)).to.equal(0)

      expect(fromKmToFt(10)).to.equal(32808.39895)

      expect(fromKmToFt(200)).to.equal(656167.979)

      expect(fromKmToFt(3000)).to.equal(9842519.685)

      expect(fromKmToFt(40000)).to.equal(131233595.80000001)
    })
  })

  describe('`fromKmToIn()`', () => {
    it('converts kilometre to inch', () => {
      expect(fromKmToIn(0)).to.equal(0)

      expect(fromKmToIn(10)).to.equal(393700.78740000003)

      expect(fromKmToIn(200)).to.equal(7874015.748000001)

      expect(fromKmToIn(3000)).to.equal(118110236.22)

      expect(fromKmToIn(40000)).to.equal(1574803149.6000001)
    })
  })

  describe('`fromMtToKm()`', () => {
    it('converts metre to kilometre', () => {
      expect(fromMtToKm(0)).to.equal(0)

      expect(fromMtToKm(10)).to.equal(0.01)

      expect(fromMtToKm(200)).to.equal(0.2)

      expect(fromMtToKm(3000)).to.equal(3)

      expect(fromMtToKm(40000)).to.equal(40)
    })
  })

  describe('`fromMtToCm()`', () => {
    it('converts metre to centimetre', () => {
      expect(fromMtToCm(0)).to.equal(0)

      expect(fromMtToCm(10)).to.equal(1000)

      expect(fromMtToCm(200)).to.equal(20000)

      expect(fromMtToCm(3000)).to.equal(300000)

      expect(fromMtToCm(40000)).to.equal(4000000)
    })
  })

  describe('`fromMtToMm()`', () => {
    it('converts metre to milimetre', () => {
      expect(fromMtToMm(0)).to.equal(0)

      expect(fromMtToMm(10)).to.equal(10000)

      expect(fromMtToMm(200)).to.equal(200000)

      expect(fromMtToMm(3000)).to.equal(3000000)

      expect(fromMtToMm(40000)).to.equal(40000000)
    })
  })

  describe('`fromMtToMi()`', () => {
    it('converts metre to mile', () => {
      expect(fromMtToMi(0)).to.equal(0)

      expect(fromMtToMi(10)).to.equal(0.006213711922348486)

      expect(fromMtToMi(200)).to.equal(0.1242742384469697)

      expect(fromMtToMi(3000)).to.equal(1.8641135767045458)

      expect(fromMtToMi(40000)).to.equal(24.854847689393942)
    })
  })

  describe('`fromMtToYd()`', () => {
    it('converts metre to yard', () => {
      expect(fromMtToYd(0)).to.equal(0)

      expect(fromMtToYd(10)).to.equal(10.936132983333335)

      expect(fromMtToYd(200)).to.equal(218.7226596666667)

      expect(fromMtToYd(3000)).to.equal(3280.8398950000005)

      expect(fromMtToYd(40000)).to.equal(43744.53193333334)
    })
  })

  describe('`fromMtToFt()`', () => {
    it('converts metre to feet', () => {
      expect(fromMtToFt(0)).to.equal(0)

      expect(fromMtToFt(10)).to.equal(32.808398950000004)

      expect(fromMtToFt(200)).to.equal(656.1679790000001)

      expect(fromMtToFt(3000)).to.equal(9842.519685000001)

      expect(fromMtToFt(40000)).to.equal(131233.5958)
    })
  })

  describe('`fromMtToIn()`', () => {
    it('converts metre to inch', () => {
      expect(fromMtToIn(0)).to.equal(0)

      expect(fromMtToIn(10)).to.equal(393.7007874)

      expect(fromMtToIn(200)).to.equal(7874.015748000001)

      expect(fromMtToIn(3000)).to.equal(118110.23622)

      expect(fromMtToIn(40000)).to.equal(1574803.1496000001)
    })
  })

  describe('`fromCmToKm()`', () => {
    it('converts centimetre to kilometre', () => {
      expect(fromCmToKm(0)).to.equal(0)

      expect(fromCmToKm(10)).to.equal(0.0001)

      expect(fromCmToKm(200)).to.equal(0.002)

      expect(fromCmToKm(3000)).to.equal(0.03)

      expect(fromCmToKm(40000)).to.equal(0.4)
    })
  })

  describe('`fromCmToMt()`', () => {
    it('converts centimetre to metre', () => {
      expect(fromCmToMt(0)).to.equal(0)

      expect(fromCmToMt(10)).to.equal(0.1)

      expect(fromCmToMt(200)).to.equal(2)

      expect(fromCmToMt(3000)).to.equal(30)

      expect(fromCmToMt(40000)).to.equal(400)
    })
  })

  describe('`fromCmToMm()`', () => {
    it('converts centimetre to metre', () => {
      expect(fromCmToMm(0)).to.equal(0)

      expect(fromCmToMm(10)).to.equal(100)

      expect(fromCmToMm(200)).to.equal(2000)

      expect(fromCmToMm(3000)).to.equal(30000)

      expect(fromCmToMm(40000)).to.equal(400000)
    })
  })

  describe('`fromCmToMi()`', () => {
    it('converts centimetre to mile', () => {
      expect(fromCmToMi(0)).to.equal(0)

      expect(fromCmToMi(10)).to.equal(0.00006213711922348485)

      expect(fromCmToMi(200)).to.equal(0.001242742384469697)

      expect(fromCmToMi(3000)).to.equal(0.018641135767045458)

      expect(fromCmToMi(40000)).to.equal(0.2485484768939394)
    })
  })

  describe('`fromCmToYd()`', () => {
    it('converts centimetre to yard', () => {
      expect(fromCmToYd(0)).to.equal(0)

      expect(fromCmToYd(10)).to.equal(0.10936132983333334)

      expect(fromCmToYd(200)).to.equal(2.1872265966666666)

      expect(fromCmToYd(3000)).to.equal(32.808398950000004)

      expect(fromCmToYd(40000)).to.equal(437.4453193333334)
    })
  })

  describe('`fromCmToFt()`', () => {
    it('converts centimetre to feet', () => {
      expect(fromCmToFt(0)).to.equal(0)

      expect(fromCmToFt(10)).to.equal(0.3280839895)

      expect(fromCmToFt(200)).to.equal(6.56167979)

      expect(fromCmToFt(3000)).to.equal(98.42519685)

      expect(fromCmToFt(40000)).to.equal(1312.3359580000001)
    })
  })

  describe('`fromCmToIn()`', () => {
    it('converts centimetre to inch', () => {
      expect(fromCmToIn(0)).to.equal(0)

      expect(fromCmToIn(10)).to.equal(3.9370078740000003)

      expect(fromCmToIn(200)).to.equal(78.74015748000001)

      expect(fromCmToIn(3000)).to.equal(1181.1023622)

      expect(fromCmToIn(40000)).to.equal(15748.031496000001)
    })
  })

  describe('`fromMmToKm()`', () => {
    it('converts milimetre to kilometre', () => {
      expect(fromMmToKm(0)).to.equal(0)

      expect(fromMmToKm(10)).to.equal(0.00001)

      expect(fromMmToKm(200)).to.equal(0.0002)

      expect(fromMmToKm(3000)).to.equal(0.003)

      expect(fromMmToKm(40000)).to.equal(0.04)
    })
  })

  describe('`fromMmToMt()`', () => {
    it('converts milimetre to metre', () => {
      expect(fromMmToMt(0)).to.equal(0)

      expect(fromMmToMt(10)).to.equal(0.01)

      expect(fromMmToMt(200)).to.equal(0.2)

      expect(fromMmToMt(3000)).to.equal(3)

      expect(fromMmToMt(40000)).to.equal(40)
    })
  })

  describe('`fromMmToCm()`', () => {
    it('converts milimetre to centimetre', () => {
      expect(fromMmToCm(0)).to.equal(0)

      expect(fromMmToCm(10)).to.equal(1)

      expect(fromMmToCm(200)).to.equal(20)

      expect(fromMmToCm(3000)).to.equal(300)

      expect(fromMmToCm(40000)).to.equal(4000)
    })
  })

  describe('`fromMmToMi()`', () => {
    it('converts milimetre to mile', () => {
      expect(fromMmToMi(0)).to.equal(0)

      expect(fromMmToMi(10)).to.equal(0.000006213711922348486)

      expect(fromMmToMi(200)).to.equal(0.0001242742384469697)

      expect(fromMmToMi(3000)).to.equal(0.0018641135767045456)

      expect(fromMmToMi(40000)).to.equal(0.024854847689393944)
    })
  })

  describe('`fromMmToYd()`', () => {
    it('converts milimetre to yard', () => {
      expect(fromMmToYd(0)).to.equal(0)

      expect(fromMmToYd(10)).to.equal(0.010936132983333334)

      expect(fromMmToYd(200)).to.equal(0.21872265966666668)

      expect(fromMmToYd(3000)).to.equal(3.280839895)

      expect(fromMmToYd(40000)).to.equal(43.74453193333334)
    })
  })

  describe('`fromMmToFt()`', () => {
    it('converts milimetre to feet', () => {
      expect(fromMmToFt(0)).to.equal(0)

      expect(fromMmToFt(10)).to.equal(0.032808398950000005)

      expect(fromMmToFt(200)).to.equal(0.656167979)

      expect(fromMmToFt(3000)).to.equal(9.842519685000001)

      expect(fromMmToFt(40000)).to.equal(131.23359580000002)
    })
  })

  describe('`fromMmToIn()`', () => {
    it('converts milimetre to inch', () => {
      expect(fromMmToIn(0)).to.equal(0)

      expect(fromMmToIn(10)).to.equal(0.39370078740000003)

      expect(fromMmToIn(200)).to.equal(7.874015748000001)

      expect(fromMmToIn(3000)).to.equal(118.11023622)

      expect(fromMmToIn(40000)).to.equal(1574.8031496)
    })
  })

  describe('`fromMiToKm()`', () => {
    it('converts mile to kilometre', () => {
      expect(fromMiToKm(0)).to.equal(0)

      expect(fromMiToKm(10)).to.equal(16.093440000064373)

      expect(fromMiToKm(200)).to.equal(321.86880000128747)

      expect(fromMiToKm(3000)).to.equal(4828.032000019311)

      expect(fromMiToKm(40000)).to.equal(64373.76000025749)
    })
  })

  describe('`fromMiToMt()`', () => {
    it('converts mile to metre', () => {
      expect(fromMiToMt(0)).to.equal(0)

      expect(fromMiToMt(10)).to.equal(16093.440000064373)

      expect(fromMiToMt(200)).to.equal(321868.8000012875)

      expect(fromMiToMt(3000)).to.equal(4828032.000019312)

      expect(fromMiToMt(40000)).to.equal(64373760.00025749)
    })
  })

  describe('`fromMiToCm()`', () => {
    it('converts mile to centimetre', () => {
      expect(fromMiToCm(0)).to.equal(0)

      expect(fromMiToCm(10)).to.equal(1609344.0000064373)

      expect(fromMiToCm(200)).to.equal(32186880.000128746)

      expect(fromMiToCm(3000)).to.equal(482803200.0019312)

      expect(fromMiToCm(40000)).to.equal(6437376000.025749)
    })
  })

  describe('`fromMiToMm()`', () => {
    it('converts mile to milimetre', () => {
      expect(fromMiToMm(0)).to.equal(0)

      expect(fromMiToMm(10)).to.equal(16093440.000064373)

      expect(fromMiToMm(200)).to.equal(321868800.00128746)

      expect(fromMiToMm(3000)).to.equal(4828032000.019312)

      expect(fromMiToMm(40000)).to.equal(64373760000.25749)
    })
  })

  describe('`fromMiToYd()`', () => {
    it('converts mile to yard', () => {
      expect(fromMiToYd(0)).to.equal(0)

      expect(fromMiToYd(10)).to.equal(17600)

      expect(fromMiToYd(200)).to.equal(352000)

      expect(fromMiToYd(3000)).to.equal(5280000)

      expect(fromMiToYd(40000)).to.equal(70400000)
    })
  })

  describe('`fromMiToFt()`', () => {
    it('converts mile to feet', () => {
      expect(fromMiToFt(0)).to.equal(0)

      expect(fromMiToFt(10)).to.equal(52800)

      expect(fromMiToFt(200)).to.equal(1056000)

      expect(fromMiToFt(3000)).to.equal(15840000)

      expect(fromMiToFt(40000)).to.equal(211200000)
    })
  })

  describe('`fromMiToIn()`', () => {
    it('converts mile to inch', () => {
      expect(fromMiToIn(0)).to.equal(0)

      expect(fromMiToIn(10)).to.equal(633600)

      expect(fromMiToIn(200)).to.equal(12672000)

      expect(fromMiToIn(3000)).to.equal(190080000)

      expect(fromMiToIn(40000)).to.equal(2534400000)
    })
  })

  describe('`fromYdToKm()`', () => {
    it('converts yard to kilometre', () => {
      expect(fromYdToKm(0)).to.equal(0)

      expect(fromYdToKm(10)).to.equal(0.009144000000036578)

      expect(fromYdToKm(200)).to.equal(0.1828800000007315)

      expect(fromYdToKm(3000)).to.equal(2.743200000010973)

      expect(fromYdToKm(40000)).to.equal(36.57600000014631)
    })
  })

  describe('`fromYdToMt()`', () => {
    it('converts yard to metre', () => {
      expect(fromYdToMt(0)).to.equal(0)

      expect(fromYdToMt(10)).to.equal(9.144000000036577)

      expect(fromYdToMt(200)).to.equal(182.8800000007315)

      expect(fromYdToMt(3000)).to.equal(2743.200000010973)

      expect(fromYdToMt(40000)).to.equal(36576.000000146305)
    })
  })

  describe('`fromYdToCm()`', () => {
    it('converts yard to centimetre', () => {
      expect(fromYdToCm(0)).to.equal(0)

      expect(fromYdToCm(10)).to.equal(914.4000000036576)

      expect(fromYdToCm(200)).to.equal(18288.000000073152)

      expect(fromYdToCm(3000)).to.equal(274320.0000010973)

      expect(fromYdToCm(40000)).to.equal(3657600.00001463)
    })
  })

  describe('`fromYdToMm()`', () => {
    it('converts yard to miliimetre', () => {
      expect(fromYdToMm(0)).to.equal(0)

      expect(fromYdToMm(10)).to.equal(9144.000000036576)

      expect(fromYdToMm(200)).to.equal(182880.00000073152)

      expect(fromYdToMm(3000)).to.equal(2743200.000010973)

      expect(fromYdToMm(40000)).to.equal(36576000.0001463)
    })
  })

  describe('`fromYdToMi()`', () => {
    it('converts yard to yard', () => {
      expect(fromYdToMi(0)).to.equal(0)

      expect(fromYdToMi(10)).to.equal(0.005681818181818182)

      expect(fromYdToMi(200)).to.equal(0.11363636363636363)

      expect(fromYdToMi(3000)).to.equal(1.7045454545454546)

      expect(fromYdToMi(40000)).to.equal(22.727272727272727)
    })
  })

  describe('`fromYdToFt()`', () => {
    it('converts yard to feet', () => {
      expect(fromYdToFt(0)).to.equal(0)

      expect(fromYdToFt(10)).to.equal(30)

      expect(fromYdToFt(200)).to.equal(600)

      expect(fromYdToFt(3000)).to.equal(9000)

      expect(fromYdToFt(40000)).to.equal(120000)
    })
  })

  describe('`fromYdToIn()`', () => {
    it('converts yard to inch', () => {
      expect(fromYdToIn(0)).to.equal(0)

      expect(fromYdToIn(10)).to.equal(360)

      expect(fromYdToIn(200)).to.equal(7200)

      expect(fromYdToIn(3000)).to.equal(108000)

      expect(fromYdToIn(40000)).to.equal(1440000)
    })
  })

  describe('`fromFtToKm()`', () => {
    it('converts feet to kilometre', () => {
      expect(fromFtToKm(0)).to.equal(0)

      expect(fromFtToKm(10)).to.equal(0.003048000000012192)

      expect(fromFtToKm(200)).to.equal(0.06096000000024384)

      expect(fromFtToKm(3000)).to.equal(0.9144000000036575)

      expect(fromFtToKm(40000)).to.equal(12.192000000048768) // (12.192000000048769)
    })
  })

  describe('`fromFtToMt()`', () => {
    it('converts feet to metre', () => {
      expect(fromFtToMt(0)).to.equal(0)

      expect(fromFtToMt(10)).to.equal(3.048000000012192)

      expect(fromFtToMt(200)).to.equal(60.96000000024384)

      expect(fromFtToMt(3000)).to.equal(914.4000000036575)

      expect(fromFtToMt(40000)).to.equal(12192.000000048769)
    })
  })

  describe('`fromFtToCm()`', () => {
    it('converts feet to centimetre', () => {
      expect(fromFtToCm(0)).to.equal(0)

      expect(fromFtToCm(10)).to.equal(304.8000000012192)

      expect(fromFtToCm(200)).to.equal(6096.000000024384)

      expect(fromFtToCm(3000)).to.equal(91440.00000036575)

      expect(fromFtToCm(40000)).to.equal(1219200.0000048769)
    })
  })

  describe('`fromFtToMm()`', () => {
    it('converts feet to milimetre', () => {
      expect(fromFtToMm(0)).to.equal(0)

      expect(fromFtToMm(10)).to.equal(3048.000000012192)

      expect(fromFtToMm(200)).to.equal(60960.00000024384)

      expect(fromFtToMm(3000)).to.equal(914400.0000036575)

      expect(fromFtToMm(40000)).to.equal(12192000.000048768)
    })
  })

  describe('`fromFtToMi()`', () => {
    it('converts feet to mile', () => {
      expect(fromFtToMi(0)).to.equal(0)

      expect(fromFtToMi(10)).to.equal(0.001893939393939394)

      expect(fromFtToMi(200)).to.equal(0.03787878787878788)

      expect(fromFtToMi(3000)).to.equal(0.5681818181818182)

      expect(fromFtToMi(40000)).to.equal(7.575757575757576)
    })
  })

  describe('`fromFtToYd()`', () => {
    it('converts feet to yard', () => {
      expect(fromFtToYd(0)).to.equal(0)

      expect(fromFtToYd(10)).to.equal(3.3333333333333335)

      expect(fromFtToYd(200)).to.equal(66.66666666666667)

      expect(fromFtToYd(3000)).to.equal(1000)

      expect(fromFtToYd(40000)).to.equal(13333.333333333334)
    })
  })

  describe('`fromFtToIn()`', () => {
    it('converts feet to inch', () => {
      expect(fromFtToIn(0)).to.equal(0)

      expect(fromFtToIn(10)).to.equal(120)

      expect(fromFtToIn(200)).to.equal(2400)

      expect(fromFtToIn(3000)).to.equal(36000)

      expect(fromFtToIn(40000)).to.equal(480000)
    })
  })

  describe('`fromInToMi()`', () => {
    it('converts inch to mile', () => {
      expect(fromInToMi(0)).to.equal(0)

      expect(fromInToMi(10)).to.equal(0.00015782828282828284)

      expect(fromInToMi(200)).to.equal(0.003156565656565657)

      expect(fromInToMi(3000)).to.equal(0.04734848484848485)

      expect(fromInToMi(40000)).to.equal(0.6313131313131313)
    })
  })

  describe('`fromInToYd()`', () => {
    it('converts inch to yard', () => {
      expect(fromInToYd(0)).to.equal(0)

      expect(fromInToYd(10)).to.equal(0.2777777777777778)

      expect(fromInToYd(200)).to.equal(5.555555555555556)

      expect(fromInToYd(1000)).to.equal(27.777777777777775)

      expect(fromInToYd(40000)).to.equal(1111.111111111111)
    })
  })

  describe('`fromInToFt()`', () => {
    it('converts inch to feet', () => {
      expect(fromInToFt(0)).to.equal(0)

      expect(fromInToFt(120)).to.equal(10)

      expect(fromInToFt(2400)).to.equal(200)

      expect(fromInToFt(36000)).to.equal(3000)

      expect(fromInToFt(480000)).to.equal(40000)
    })
  })

  describe('`fromInToMm()`', () => {
    it('converts inch to milimetre', () => {
      expect(fromInToMm(0)).to.equal(0)

      expect(fromInToMm(120)).to.equal(3048.000000012192)

      expect(fromInToMm(2400)).to.equal(60960.00000024384)

      expect(fromInToMm(36000)).to.equal(914400.0000036575)

      expect(fromInToMm(480000)).to.equal(12192000.000048768)
    })
  })

  describe('`fromInToCm()`', () => {
    it('converts inch to centimetre', () => {
      expect(fromInToCm(0)).to.equal(0)

      expect(fromInToCm(120)).to.equal(304.8000000012192)

      expect(fromInToCm(2400)).to.equal(6096.000000024384)

      expect(fromInToCm(36000)).to.equal(91440.00000036575)

      expect(fromInToCm(480000)).to.equal(1219200.0000048769)
    })
  })

  describe('`fromInToMt()`', () => {
    it('converts inch to metre', () => {
      expect(fromInToMt(0)).to.equal(0)

      expect(fromInToMt(120)).to.equal(3.048000000012192)

      expect(fromInToMt(2400)).to.equal(60.96000000024384)

      expect(fromInToMt(36000)).to.equal(914.4000000036575)

      expect(fromInToMt(480000)).to.equal(12192.000000048769)
    })
  })

  describe('`fromInToKm()`', () => {
    it('converts inch to kilometre', () => {
      expect(fromInToKm(0)).to.equal(0)

      expect(fromInToKm(120)).to.equal(0.003048000000012192)

      expect(fromInToKm(2400)).to.equal(0.06096000000024384)

      expect(fromInToKm(36000)).to.equal(0.9144000000036575)

      expect(fromInToKm(480000)).to.equal(12.192000000048768)
    })
  })

  describe('`convert()`', () => {
    describe('`convert(n).fromKm.toMt()`', () => {
      it('converts kilometre to metre', () => {
        expect(convert(0).fromKm.toMt()).to.equal(0)

        expect(convert(10).fromKm.toMt()).to.equal(10000)

        expect(convert(200).fromKm.toMt()).to.equal(200000)

        expect(convert(3000).fromKm.toMt()).to.equal(3000000)

        expect(convert(40000).fromKm.toMt()).to.equal(40000000)
      })
    })

    describe('`convert(n).fromKm.toCm()`', () => {
      it('converts kilometre to centimetre', () => {
        expect(convert(0).fromKm.toCm()).to.equal(0)

        expect(convert(10).fromKm.toCm()).to.equal(1000000)

        expect(convert(200).fromKm.toCm()).to.equal(20000000)

        expect(convert(3000).fromKm.toCm()).to.equal(300000000)

        expect(convert(40000).fromKm.toCm()).to.equal(4000000000)
      })
    })

    describe('`convert(n).fromKm.toMm()`', () => {
      it('converts kilometre to milimetre', () => {
        expect(convert(0).fromKm.toMm()).to.equal(0)

        expect(convert(10).fromKm.toMm()).to.equal(10000000)

        expect(convert(200).fromKm.toMm()).to.equal(200000000)

        expect(convert(3000).fromKm.toMm()).to.equal(3000000000)

        expect(convert(40000).fromKm.toMm()).to.equal(40000000000)
      })
    })

    describe('`convert(n).fromKm.toMi()`', () => {
      it('converts kilometre to mile', () => {
        expect(convert(0).fromKm.toMi()).to.equal(0)

        expect(convert(10).fromKm.toMi()).to.equal(6.213711922348486)

        expect(convert(200).fromKm.toMi()).to.equal(124.2742384469697)

        expect(convert(3000).fromKm.toMi()).to.equal(1864.1135767045455)

        expect(convert(40000).fromKm.toMi()).to.equal(24854.84768939394)
      })
    })

    describe('`convert(n).fromKm.toYd()`', () => {
      it('converts kilometre to yard', () => {
        expect(convert(0).fromKm.toYd()).to.equal(0)

        expect(convert(10).fromKm.toYd()).to.equal(10936.132983333335)

        expect(convert(200).fromKm.toYd()).to.equal(218722.65966666667)

        expect(convert(3000).fromKm.toYd()).to.equal(3280839.895)

        expect(convert(40000).fromKm.toYd()).to.equal(43744531.93333334)
      })
    })

    describe('`convert(n).fromKm.toFt()`', () => {
      it('converts kilometre to feet', () => {
        expect(convert(0).fromKm.toFt()).to.equal(0)

        expect(convert(10).fromKm.toFt()).to.equal(32808.39895)

        expect(convert(200).fromKm.toFt()).to.equal(656167.979)

        expect(convert(3000).fromKm.toFt()).to.equal(9842519.685)

        expect(convert(40000).fromKm.toFt()).to.equal(131233595.80000001)
      })
    })

    describe('`convert(n).fromKm.toIn()`', () => {
      it('converts kilometre to inch', () => {
        expect(convert(0).fromKm.toIn()).to.equal(0)

        expect(convert(10).fromKm.toIn()).to.equal(393700.78740000003)

        expect(convert(200).fromKm.toIn()).to.equal(7874015.748000001)

        expect(convert(3000).fromKm.toIn()).to.equal(118110236.22)

        expect(convert(40000).fromKm.toIn()).to.equal(1574803149.6000001)
      })
    })

    describe('`convert(n).fromMt.toKm()`', () => {
      it('converts metre to kilometre', () => {
        expect(convert(0).fromMt.toKm()).to.equal(0)

        expect(convert(10).fromMt.toKm()).to.equal(0.01)

        expect(convert(200).fromMt.toKm()).to.equal(0.2)

        expect(convert(3000).fromMt.toKm()).to.equal(3)

        expect(convert(40000).fromMt.toKm()).to.equal(40)
      })
    })

    describe('`convert(n).fromMt.toCm()`', () => {
      it('converts metre to centimetre', () => {
        expect(convert(0).fromMt.toCm()).to.equal(0)

        expect(convert(10).fromMt.toCm()).to.equal(1000)

        expect(convert(200).fromMt.toCm()).to.equal(20000)

        expect(convert(3000).fromMt.toCm()).to.equal(300000)

        expect(convert(40000).fromMt.toCm()).to.equal(4000000)
      })
    })

    describe('`convert(n).fromMt.toMm()`', () => {
      it('converts metre to milimetre', () => {
        expect(convert(0).fromMt.toMm()).to.equal(0)

        expect(convert(10).fromMt.toMm()).to.equal(10000)

        expect(convert(200).fromMt.toMm()).to.equal(200000)

        expect(convert(3000).fromMt.toMm()).to.equal(3000000)

        expect(convert(40000).fromMt.toMm()).to.equal(40000000)
      })
    })

    describe('`convert(n).fromMt.toMi()`', () => {
      it('converts metre to mile', () => {
        expect(convert(0).fromMt.toMi()).to.equal(0)

        expect(convert(10).fromMt.toMi()).to.equal(0.006213711922348486)

        expect(convert(200).fromMt.toMi()).to.equal(0.1242742384469697)

        expect(convert(3000).fromMt.toMi()).to.equal(1.8641135767045458)

        expect(convert(40000).fromMt.toMi()).to.equal(24.854847689393942)
      })
    })

    describe('`convert(n).fromMt.toYd()`', () => {
      it('converts metre to yard', () => {
        expect(convert(0).fromMt.toYd()).to.equal(0)

        expect(convert(10).fromMt.toYd()).to.equal(10.936132983333335)

        expect(convert(200).fromMt.toYd()).to.equal(218.7226596666667)

        expect(convert(3000).fromMt.toYd()).to.equal(3280.8398950000005)

        expect(convert(40000).fromMt.toYd()).to.equal(43744.53193333334)
      })
    })

    describe('`convert(n).fromMt.toFt()`', () => {
      it('converts metre to feet', () => {
        expect(convert(0).fromMt.toFt()).to.equal(0)

        expect(convert(10).fromMt.toFt()).to.equal(32.808398950000004)

        expect(convert(200).fromMt.toFt()).to.equal(656.1679790000001)

        expect(convert(3000).fromMt.toFt()).to.equal(9842.519685000001)

        expect(convert(40000).fromMt.toFt()).to.equal(131233.5958)
      })
    })

    describe('`convert(n).fromMt.toIn()`', () => {
      it('converts metre to inch', () => {
        expect(convert(0).fromMt.toIn()).to.equal(0)

        expect(convert(10).fromMt.toIn()).to.equal(393.7007874)

        expect(convert(200).fromMt.toIn()).to.equal(7874.015748000001)

        expect(convert(3000).fromMt.toIn()).to.equal(118110.23622)

        expect(convert(40000).fromMt.toIn()).to.equal(1574803.1496000001)
      })
    })

    describe('`convert(n).fromCm.toKm()`', () => {
      it('converts centimetre to kilometre', () => {
        expect(convert(0).fromCm.toKm()).to.equal(0)

        expect(convert(10).fromCm.toKm()).to.equal(0.0001)

        expect(convert(200).fromCm.toKm()).to.equal(0.002)

        expect(convert(3000).fromCm.toKm()).to.equal(0.03)

        expect(convert(40000).fromCm.toKm()).to.equal(0.4)
      })
    })

    describe('`convert(n).fromCm.toMt()`', () => {
      it('converts centimetre to metre', () => {
        expect(convert(0).fromCm.toMt()).to.equal(0)

        expect(convert(10).fromCm.toMt()).to.equal(0.1)

        expect(convert(200).fromCm.toMt()).to.equal(2)

        expect(convert(3000).fromCm.toMt()).to.equal(30)

        expect(convert(40000).fromCm.toMt()).to.equal(400)
      })
    })

    describe('`convert(n).fromCm.toMm()`', () => {
      it('converts centimetre to milimetre', () => {
        expect(convert(0).fromCm.toMm()).to.equal(0)

        expect(convert(10).fromCm.toMm()).to.equal(100)

        expect(convert(200).fromCm.toMm()).to.equal(2000)

        expect(convert(3000).fromCm.toMm()).to.equal(30000)

        expect(convert(40000).fromCm.toMm()).to.equal(400000)
      })
    })

    describe('`convert(n).fromCm.toMi()`', () => {
      it('converts centimetre to mile', () => {
        expect(convert(0).fromCm.toMi()).to.equal(0)

        expect(convert(10).fromCm.toMi()).to.equal(0.00006213711922348485)

        expect(convert(200).fromCm.toMi()).to.equal(0.001242742384469697)

        expect(convert(3000).fromCm.toMi()).to.equal(0.018641135767045458)

        expect(convert(40000).fromCm.toMi()).to.equal(0.2485484768939394)
      })
    })

    describe('`convert(n).fromCm.toYd()`', () => {
      it('converts centimetre to yard', () => {
        expect(convert(0).fromCm.toYd()).to.equal(0)

        expect(convert(10).fromCm.toYd()).to.equal(0.10936132983333334)

        expect(convert(200).fromCm.toYd()).to.equal(2.1872265966666666)

        expect(convert(3000).fromCm.toYd()).to.equal(32.808398950000004)

        expect(convert(40000).fromCm.toYd()).to.equal(437.4453193333334)
      })
    })

    describe('`convert(n).fromCm.toFt()`', () => {
      it('converts centimetre to feet', () => {
        expect(convert(0).fromCm.toFt()).to.equal(0)

        expect(convert(10).fromCm.toFt()).to.equal(0.3280839895)

        expect(convert(200).fromCm.toFt()).to.equal(6.56167979)

        expect(convert(3000).fromCm.toFt()).to.equal(98.42519685)

        expect(convert(40000).fromCm.toFt()).to.equal(1312.3359580000001)
      })
    })

    describe('`convert(n).fromCm.toIn()`', () => {
      it('converts centimetre to inch', () => {
        expect(convert(0).fromCm.toIn()).to.equal(0)

        expect(convert(10).fromCm.toIn()).to.equal(3.9370078740000003)

        expect(convert(200).fromCm.toIn()).to.equal(78.74015748000001)

        expect(convert(3000).fromCm.toIn()).to.equal(1181.1023622)

        expect(convert(40000).fromCm.toIn()).to.equal(15748.031496000001)
      })
    })

    describe('`convert(n).fromMm.toMi()`', () => {
      it('converts milimetre to mile', () => {
        expect(convert(0).fromMm.toMi()).to.equal(0)

        expect(convert(10).fromMm.toMi()).to.equal(0.000006213711922348486)

        expect(convert(200).fromMm.toMi()).to.equal(0.0001242742384469697)

        expect(convert(3000).fromMm.toMi()).to.equal(0.0018641135767045456)

        expect(convert(40000).fromMm.toMi()).to.equal(0.024854847689393944)
      })
    })

    describe('`convert(n).fromMm.toYd()`', () => {
      it('converts milimetre to yard', () => {
        expect(convert(0).fromMm.toYd()).to.equal(0)

        expect(convert(10).fromMm.toYd()).to.equal(0.010936132983333334)

        expect(convert(200).fromMm.toYd()).to.equal(0.21872265966666668)

        expect(convert(3000).fromMm.toYd()).to.equal(3.280839895)

        expect(convert(40000).fromMm.toYd()).to.equal(43.74453193333334)
      })
    })

    describe('`convert(n).fromMm.toFt()`', () => {
      it('converts milimetre to feet', () => {
        expect(convert(0).fromMm.toFt()).to.equal(0)

        expect(convert(10).fromMm.toFt()).to.equal(0.032808398950000005)

        expect(convert(200).fromMm.toFt()).to.equal(0.656167979)

        expect(convert(3000).fromMm.toFt()).to.equal(9.842519685000001)

        expect(convert(40000).fromMm.toFt()).to.equal(131.23359580000002)
      })
    })

    describe('`convert(n).fromMm.toIn()`', () => {
      it('converts milimetre to inch', () => {
        expect(convert(0).fromMm.toIn()).to.equal(0)

        expect(convert(10).fromMm.toIn()).to.equal(0.39370078740000003)

        expect(convert(200).fromMm.toIn()).to.equal(7.874015748000001)

        expect(convert(3000).fromMm.toIn()).to.equal(118.11023622)

        expect(convert(40000).fromMm.toIn()).to.equal(1574.8031496)
      })
    })

    describe('`convert(n).fromMi.toKm()`', () => {
      it('converts mile to kilometre', () => {
        expect(convert(0).fromMi.toKm()).to.equal(0)

        expect(convert(10).fromMi.toKm()).to.equal(16.093440000064373)

        expect(convert(200).fromMi.toKm()).to.equal(321.86880000128747)

        expect(convert(3000).fromMi.toKm()).to.equal(4828.032000019311)

        expect(convert(40000).fromMi.toKm()).to.equal(64373.76000025749)
      })
    })

    describe('`convert(n).fromMi.toMt()`', () => {
      it('converts mile to metre', () => {
        expect(convert(0).fromMi.toMt()).to.equal(0)

        expect(convert(10).fromMi.toMt()).to.equal(16093.440000064373)

        expect(convert(200).fromMi.toMt()).to.equal(321868.8000012875)

        expect(convert(3000).fromMi.toMt()).to.equal(4828032.000019312)

        expect(convert(40000).fromMi.toMt()).to.equal(64373760.00025749)
      })
    })

    describe('`convert(n).fromMi.toCm()`', () => {
      it('converts mile to centimetre', () => {
        expect(convert(0).fromMi.toCm()).to.equal(0)

        expect(convert(10).fromMi.toCm()).to.equal(1609344.0000064373)

        expect(convert(200).fromMi.toCm()).to.equal(32186880.000128746)

        expect(convert(3000).fromMi.toCm()).to.equal(482803200.0019312)

        expect(convert(40000).fromMi.toCm()).to.equal(6437376000.025749)
      })
    })

    describe('`convert(n).fromMi.toMm()`', () => {
      it('converts mile to milimetre', () => {
        expect(convert(0).fromMi.toMm()).to.equal(0)

        expect(convert(10).fromMi.toMm()).to.equal(16093440.000064373)

        expect(convert(200).fromMi.toMm()).to.equal(321868800.00128746)

        expect(convert(3000).fromMi.toMm()).to.equal(4828032000.019312)

        expect(convert(40000).fromMi.toMm()).to.equal(64373760000.25749)
      })
    })

    describe('`convert(n).fromMm.toKm()`', () => {
      it('converts milimetre to kilometre', () => {
        expect(convert(0).fromMm.toKm()).to.equal(0)

        expect(convert(10).fromMm.toKm()).to.equal(0.00001)

        expect(convert(200).fromMm.toKm()).to.equal(0.0002)

        expect(convert(3000).fromMm.toKm()).to.equal(0.003)

        expect(convert(40000).fromMm.toKm()).to.equal(0.04)
      })
    })

    describe('`convert(n).fromMm.toMt()`', () => {
      it('converts milimetre to metre', () => {
        expect(convert(0).fromMm.toMt()).to.equal(0)

        expect(convert(10).fromMm.toMt()).to.equal(0.01)

        expect(convert(200).fromMm.toMt()).to.equal(0.2)

        expect(convert(3000).fromMm.toMt()).to.equal(3)

        expect(convert(40000).fromMm.toMt()).to.equal(40)
      })
    })

    describe('`convert(n).fromMm.toCm()`', () => {
      it('converts milimetre to centimetre', () => {
        expect(convert(0).fromMm.toCm()).to.equal(0)

        expect(convert(10).fromMm.toCm()).to.equal(1)

        expect(convert(200).fromMm.toCm()).to.equal(20)

        expect(convert(3000).fromMm.toCm()).to.equal(300)

        expect(convert(40000).fromMm.toCm()).to.equal(4000)
      })
    })

    describe('`convert(n).fromMi.toYd()`', () => {
      it('converts mile to yard', () => {
        expect(convert(0).fromMi.toYd()).to.equal(0)

        expect(convert(10).fromMi.toYd()).to.equal(17600)

        expect(convert(200).fromMi.toYd()).to.equal(352000)

        expect(convert(3000).fromMi.toYd()).to.equal(5280000)

        expect(convert(40000).fromMi.toYd()).to.equal(70400000)
      })
    })

    describe('`convert(n).fromMi.toFt()`', () => {
      it('converts mile to feet', () => {
        expect(convert(0).fromMi.toFt()).to.equal(0)

        expect(convert(10).fromMi.toFt()).to.equal(52800)

        expect(convert(200).fromMi.toFt()).to.equal(1056000)

        expect(convert(3000).fromMi.toFt()).to.equal(15840000)

        expect(convert(40000).fromMi.toFt()).to.equal(211200000)
      })
    })

    describe('`convert(n).fromMi.toIn()`', () => {
      it('converts mile to inch', () => {
        expect(convert(0).fromMi.toIn()).to.equal(0)

        expect(convert(10).fromMi.toIn()).to.equal(633600)

        expect(convert(200).fromMi.toIn()).to.equal(12672000)

        expect(convert(3000).fromMi.toIn()).to.equal(190080000)

        expect(convert(40000).fromMi.toIn()).to.equal(2534400000)
      })
    })

    describe('`convert(n).fromYd.toKm()`', () => {
      it('converts yard to kilometre', () => {
        expect(convert(0).fromYd.toKm()).to.equal(0)

        expect(convert(10).fromYd.toKm()).to.equal(0.009144000000036578)

        expect(convert(200).fromYd.toKm()).to.equal(0.1828800000007315)

        expect(convert(3000).fromYd.toKm()).to.equal(2.743200000010973)

        expect(convert(40000).fromYd.toKm()).to.equal(36.57600000014631)
      })
    })

    describe('`convert(n).fromYd.toMt()`', () => {
      it('converts yard to metre', () => {
        expect(convert(0).fromYd.toMt()).to.equal(0)

        expect(convert(10).fromYd.toMt()).to.equal(9.144000000036577)

        expect(convert(200).fromYd.toMt()).to.equal(182.8800000007315)

        expect(convert(3000).fromYd.toMt()).to.equal(2743.200000010973)

        expect(convert(40000).fromYd.toMt()).to.equal(36576.000000146305)
      })
    })

    describe('`convert(n).fromYd.toCm()`', () => {
      it('converts yard to centimetre', () => {
        expect(convert(0).fromYd.toCm()).to.equal(0)

        expect(convert(10).fromYd.toCm()).to.equal(914.4000000036576)

        expect(convert(200).fromYd.toCm()).to.equal(18288.000000073152)

        expect(convert(3000).fromYd.toCm()).to.equal(274320.0000010973)

        expect(convert(40000).fromYd.toCm()).to.equal(3657600.00001463)
      })
    })

    describe('`convert(n).fromYd.toMm()`', () => {
      it('converts yard to milimetre', () => {
        expect(convert(0).fromYd.toMm()).to.equal(0)

        expect(convert(10).fromYd.toMm()).to.equal(9144.000000036576)

        expect(convert(200).fromYd.toMm()).to.equal(182880.00000073152)

        expect(convert(3000).fromYd.toMm()).to.equal(2743200.000010973)

        expect(convert(40000).fromYd.toMm()).to.equal(36576000.0001463)
      })
    })

    describe('`convert(n).fromYd.toMi()`', () => {
      it('converts yard to mile', () => {
        expect(convert(0).fromYd.toMi()).to.equal(0)

        expect(convert(10).fromYd.toMi()).to.equal(0.005681818181818182)

        expect(convert(200).fromYd.toMi()).to.equal(0.11363636363636363)

        expect(convert(3000).fromYd.toMi()).to.equal(1.7045454545454546)

        expect(convert(40000).fromYd.toMi()).to.equal(22.727272727272727)
      })
    })

    describe('`convert(n).fromYd.toFt()`', () => {
      it('converts yard to feet', () => {
        expect(convert(0).fromYd.toFt()).to.equal(0)

        expect(convert(10).fromYd.toFt()).to.equal(30)

        expect(convert(200).fromYd.toFt()).to.equal(600)

        expect(convert(3000).fromYd.toFt()).to.equal(9000)

        expect(convert(40000).fromYd.toFt()).to.equal(120000)
      })
    })

    describe('`convert(n).fromYd.toIn()`', () => {
      it('converts yard to inch', () => {
        expect(convert(0).fromYd.toIn()).to.equal(0)

        expect(convert(10).fromYd.toIn()).to.equal(360)

        expect(convert(200).fromYd.toIn()).to.equal(7200)

        expect(convert(3000).fromYd.toIn()).to.equal(108000)

        expect(convert(40000).fromYd.toIn()).to.equal(1440000)
      })
    })

    describe('`convert(n).fromFt.toKm()`', () => {
      it('converts feet to kilometre', () => {
        expect(convert(0).fromFt.toKm()).to.equal(0)

        expect(convert(10).fromFt.toKm()).to.equal(0.003048000000012192)

        expect(convert(200).fromFt.toKm()).to.equal(0.06096000000024384)

        expect(convert(3000).fromFt.toKm()).to.equal(0.9144000000036575)

        expect(convert(40000).fromFt.toKm()).to.equal(12.192000000048768) // (12.192000000048769)
      })
    })

    describe('`convert(n).fromFt.toMt()`', () => {
      it('converts feet to metre', () => {
        expect(convert(0).fromFt.toMt()).to.equal(0)

        expect(convert(10).fromFt.toMt()).to.equal(3.048000000012192)

        expect(convert(200).fromFt.toMt()).to.equal(60.96000000024384)

        expect(convert(3000).fromFt.toMt()).to.equal(914.4000000036575)

        expect(convert(40000).fromFt.toMt()).to.equal(12192.000000048769)
      })
    })

    describe('`convert(n).fromFt.toCm()`', () => {
      it('converts feet to centimetre', () => {
        expect(convert(0).fromFt.toCm()).to.equal(0)

        expect(convert(10).fromFt.toCm()).to.equal(304.8000000012192)

        expect(convert(200).fromFt.toCm()).to.equal(6096.000000024384)

        expect(convert(3000).fromFt.toCm()).to.equal(91440.00000036575)

        expect(convert(40000).fromFt.toCm()).to.equal(1219200.0000048769)
      })
    })

    describe('`convert(n).fromFt.toMm()`', () => {
      it('converts feet to milimetre', () => {
        expect(convert(0).fromFt.toMm()).to.equal(0)

        expect(convert(10).fromFt.toMm()).to.equal(3048.000000012192)

        expect(convert(200).fromFt.toMm()).to.equal(60960.00000024384)

        expect(convert(3000).fromFt.toMm()).to.equal(914400.0000036575)

        expect(convert(40000).fromFt.toMm()).to.equal(12192000.000048768)
      })
    })

    describe('`convert(n).fromFt.toMi()`', () => {
      it('converts feet to mile', () => {
        expect(convert(0).fromFt.toMi()).to.equal(0)

        expect(convert(10).fromFt.toMi()).to.equal(0.001893939393939394)

        expect(convert(200).fromFt.toMi()).to.equal(0.03787878787878788)

        expect(convert(3000).fromFt.toMi()).to.equal(0.5681818181818182)

        expect(convert(40000).fromFt.toMi()).to.equal(7.575757575757576)
      })
    })

    describe('`convert(n).fromFt.toYd()`', () => {
      it('converts feet to yard', () => {
        expect(convert(0).fromFt.toYd()).to.equal(0)

        expect(convert(10).fromFt.toYd()).to.equal(3.3333333333333335)

        expect(convert(200).fromFt.toYd()).to.equal(66.66666666666667)

        expect(convert(3000).fromFt.toYd()).to.equal(1000)

        expect(convert(40000).fromFt.toYd()).to.equal(13333.333333333334)
      })
    })

    describe('`convert(n).fromFt.toIn()`', () => {
      it('converts feet to inch', () => {
        expect(convert(0).fromFt.toIn()).to.equal(0)

        expect(convert(10).fromFt.toIn()).to.equal(120)

        expect(convert(200).fromFt.toIn()).to.equal(2400)

        expect(convert(3000).fromFt.toIn()).to.equal(36000)

        expect(convert(40000).fromFt.toIn()).to.equal(480000)
      })
    })

    describe('`convert(n).fromIn.toMi()`', () => {
      it('converts inch to mile', () => {
        expect(convert(0).fromIn.toMi()).to.equal(0)

        expect(convert(10).fromIn.toMi()).to.equal(0.00015782828282828284)

        expect(convert(200).fromIn.toMi()).to.equal(0.003156565656565657)

        expect(convert(3000).fromIn.toMi()).to.equal(0.04734848484848485)

        expect(convert(40000).fromIn.toMi()).to.equal(0.6313131313131313)
      })
    })

    describe('`convert(n).fromIn.toYd()`', () => {
      it('converts inch to yard', () => {
        expect(convert(0).fromIn.toYd()).to.equal(0)

        expect(convert(10).fromIn.toYd()).to.equal(0.2777777777777778)

        expect(convert(200).fromIn.toYd()).to.equal(5.555555555555556)

        expect(convert(1000).fromIn.toYd()).to.equal(27.777777777777775)

        expect(convert(40000).fromIn.toYd()).to.equal(1111.111111111111)
      })
    })

    describe('`convert(n).fromIn.toFt()`', () => {
      it('converts inch to feet', () => {
        expect(convert(0).fromIn.toFt()).to.equal(0)

        expect(convert(120).fromIn.toFt()).to.equal(10)

        expect(convert(2400).fromIn.toFt()).to.equal(200)

        expect(convert(36000).fromIn.toFt()).to.equal(3000)

        expect(convert(480000).fromIn.toFt()).to.equal(40000)
      })
    })

    describe('`convert(n).fromIn.toMm()`', () => {
      it('converts inch to milimetre', () => {
        expect(convert(0).fromIn.toMm()).to.equal(0)

        expect(convert(120).fromIn.toMm()).to.equal(3048.000000012192)

        expect(convert(2400).fromIn.toMm()).to.equal(60960.00000024384)

        expect(convert(36000).fromIn.toMm()).to.equal(914400.0000036575)

        expect(convert(480000).fromIn.toMm()).to.equal(12192000.000048768)
      })
    })

    describe('`convert(n).fromIn.toCm()`', () => {
      it('converts inch to centimetre', () => {
        expect(convert(0).fromIn.toCm()).to.equal(0)

        expect(convert(120).fromIn.toCm()).to.equal(304.8000000012192)

        expect(convert(2400).fromIn.toCm()).to.equal(6096.000000024384)

        expect(convert(36000).fromIn.toCm()).to.equal(91440.00000036575)

        expect(convert(480000).fromIn.toCm()).to.equal(1219200.0000048769)
      })
    })

    describe('`convert(n).fromIn.toMt()`', () => {
      it('converts inch to metre', () => {
        expect(convert(0).fromIn.toMt()).to.equal(0)

        expect(convert(120).fromIn.toMt()).to.equal(3.048000000012192)

        expect(convert(2400).fromIn.toMt()).to.equal(60.96000000024384)

        expect(convert(36000).fromIn.toMt()).to.equal(914.4000000036575)

        expect(convert(480000).fromIn.toMt()).to.equal(12192.000000048769)
      })
    })

    describe('`convert(n).fromIn.toKm()`', () => {
      it('converts inch to kilometre', () => {
        expect(convert(0).fromIn.toKm()).to.equal(0)

        expect(convert(120).fromIn.toKm()).to.equal(0.003048000000012192)

        expect(convert(2400).fromIn.toKm()).to.equal(0.06096000000024384)

        expect(convert(36000).fromIn.toKm()).to.equal(0.9144000000036575)

        expect(convert(480000).fromIn.toKm()).to.equal(12.192000000048768)
      })
    })
  })
})
