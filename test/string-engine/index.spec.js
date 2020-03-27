import {
  expect
} from 'chai'

import StringEngine from '@difference-engine/string-engine'

describe('StringEngine', () => {
  it('is a class', () => expect(StringEngine).to.be.a('function'))

  describe('`charAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char for the entity at the index', () => {
          expect(StringEngine.charAt(0, '&amp;')).to.equal('&')

          expect(StringEngine.charAt(0, '&#65;')).to.equal('A')
        })
      })

      describe('The index is not zero', () => {
        it('gets the char at the index', () => {
          expect(StringEngine.charAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.charAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char at the index', () => {
        expect(StringEngine.charAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.charAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.charAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.charAt(0, '&  ')).to.equal('&')

        expect(StringEngine.charAt(1, ' & ')).to.equal('&')

        expect(StringEngine.charAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`charCodeAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char code for the entity at the index', () => {
          expect(StringEngine.charCodeAt(0, '&amp;')).to.equal(38)

          expect(StringEngine.charCodeAt(0, '&#65;')).to.equal(65)
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code for the char at the index', () => {
          expect(StringEngine.charCodeAt(1, '&amp;')).to.equal(97)

          expect(StringEngine.charCodeAt(2, '&#65;')).to.equal(54)
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.charCodeAt(0, 'ABCDE')).to.equal(65)

        expect(StringEngine.charCodeAt(2, 'ABCDE')).to.equal(67)

        expect(StringEngine.charCodeAt(4, 'ABCDE')).to.equal(69)

        expect(StringEngine.charCodeAt(0, '&  ')).to.equal(38)

        expect(StringEngine.charCodeAt(1, ' & ')).to.equal(38)

        expect(StringEngine.charCodeAt(2, '  &')).to.equal(38)
      })
    })
  })

  describe('`entityAt()`', () => {
    describe('The sting is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the entity at the index', () => {
          expect(StringEngine.entityAt(0, '&amp;')).to.equal('&amp;')

          expect(StringEngine.entityAt(0, '&#65;')).to.equal('&#65;')
        })
      })

      describe('The index is not zero', () => {
        it('gets the char at the index', () => {
          expect(StringEngine.entityAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.entityAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char at the index', () => {
        expect(StringEngine.entityAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.entityAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.entityAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.entityAt(0, '&  ')).to.equal('&')

        expect(StringEngine.entityAt(1, ' & ')).to.equal('&')

        expect(StringEngine.entityAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`entityCodeAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char for the entity name at the index', () => {
          expect(StringEngine.entityCodeAt(0, '&amp;')).to.equal('&') // name (first char)
        })

        it('gets the char for the char code at the index', () => {
          expect(StringEngine.entityCodeAt(0, '&#65;')).to.equal('A') // code
        })
      })

      describe('The index is not zero', () => {
        it('gets the char at the index', () => {
          expect(StringEngine.entityCodeAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.entityCodeAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.entityCodeAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.entityCodeAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.entityCodeAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.entityCodeAt(0, '&  ')).to.equal('&')

        expect(StringEngine.entityCodeAt(1, ' & ')).to.equal('&')

        expect(StringEngine.entityCodeAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`entityNameAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char for the entity name at the index', () => {
          expect(StringEngine.entityNameAt(0, '&amp;')).to.equal('&') // name
        })

        it('gets the char for the char code at the index', () => {
          expect(StringEngine.entityNameAt(0, '&#65;')).to.equal('&') // code
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code at the index', () => {
          expect(StringEngine.entityNameAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.entityNameAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char at the index', () => {
        expect(StringEngine.entityNameAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.entityNameAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.entityNameAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.entityNameAt(0, '&  ')).to.equal('&')

        expect(StringEngine.entityNameAt(1, ' & ')).to.equal('&')

        expect(StringEngine.entityNameAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`charOf()`', () => {
    describe('The string is an HTML entity', () => {
      it('gets the char code for the entity name of the entity', () => {
        expect(StringEngine.charOf('&amp;')).to.equal('&')

        expect(StringEngine.charOf('&#65;')).to.equal('A')
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.charOf('ABCDE')).to.equal('A')

        expect(StringEngine.charOf('&  ')).to.equal('&')

        expect(StringEngine.charOf(' & ')).to.equal(' ')

        expect(StringEngine.charOf('  &')).to.equal(' ')
      })
    })
  })

  describe('`entityOf()`', () => {
    it('throws', () => {
      expect(() => StringEngine.entityOf()).to.throw(Error, 'Not implemented')
    })
  })

  describe('`fromCharCode()`', () => {
    it('gets the char for the index', () => {
      expect(StringEngine.fromCharCode(0)).to.equal(String.fromCharCode(0))

      expect(StringEngine.fromCharCode(1000)).to.equal(String.fromCharCode(1000))

      expect(StringEngine.fromCharCode(1000000)).to.equal(String.fromCharCode(1000000))
    })
  })

  describe('`charFromEntityCode()`', () => {
    it('gets the char for the entity code', () => {
      expect(StringEngine.charFromEntityCode('&#0;')).to.equal(String.fromCharCode(0))

      expect(StringEngine.charFromEntityCode('&#1000;')).to.equal(String.fromCharCode(1000))

      expect(StringEngine.charFromEntityCode('&#1000000;')).to.equal(String.fromCharCode(1000000))
    })
  })

  describe('`charFromEntityName()`', () => {
    it('gets the char for the entity name', () => {
      expect(StringEngine.charFromEntityName('&Tab;')).to.equal(String.fromCharCode(9))

      expect(StringEngine.charFromEntityName('&nsub;')).to.equal(String.fromCharCode(8836))

      expect(StringEngine.charFromEntityName('&nsup;')).to.equal(String.fromCharCode(8837))

      expect(StringEngine.charFromEntityName('&zopf;')).to.equal(String.fromCharCode(120171))
    })
  })

  describe('`toEntityCode()`', () => {
    it('gets the entity code for each char', () => {
      expect(StringEngine.toEntityCode('&+.{}ACE')).to.equal('&#38;&#43;&#46;&#123;&#125;&#65;&#67;&#69;') // code
    })
  })

  describe('`toEntityName()`', () => {
    it('gets the entity name for each char', () => {
      expect(StringEngine.toEntityName('&+.{}ACE')).to.equal('&AMP;&plus;&period;&lbrace;&rbrace;ACE') // code
    })
  })

  describe('`entityCodeFromChar()`', () => {
    it('gets the entity code for for the char', () => {
      expect(StringEngine.entityCodeFromChar('&')).to.equal('&#38;') // code

      expect(StringEngine.entityCodeFromChar('+')).to.equal('&#43;') // code

      expect(StringEngine.entityCodeFromChar('-')).to.equal('&#45;') // code

      expect(StringEngine.entityCodeFromChar('{')).to.equal('&#123;') // code

      expect(StringEngine.entityCodeFromChar('}')).to.equal('&#125;') // code

      expect(StringEngine.entityCodeFromChar('A')).to.equal('&#65;') // code

      expect(StringEngine.entityCodeFromChar('C')).to.equal('&#67;') // code

      expect(StringEngine.entityCodeFromChar('E')).to.equal('&#69;') // code
    })
  })

  describe('`entityNameFromChar()`', () => {
    describe('The char has an HTML entity', () => {
      it('gets the entity name for for the char', () => {
        expect(StringEngine.entityNameFromChar('&')).to.equal('&AMP;') // name

        expect(StringEngine.entityNameFromChar('+')).to.equal('&plus;') // name

        expect(StringEngine.entityNameFromChar('.')).to.equal('&period;') // name

        expect(StringEngine.entityNameFromChar('{')).to.equal('&lbrace;') // name

        expect(StringEngine.entityNameFromChar('}')).to.equal('&rbrace;') // name
      })
    })

    describe('The char does not have an HTML entity', () => {
      it('returns the char', () => {
        expect(StringEngine.entityNameFromChar('A')).to.equal('A')

        expect(StringEngine.entityNameFromChar('C')).to.equal('C')

        expect(StringEngine.entityNameFromChar('E')).to.equal('E')
      })
    })
  })

  describe('`entityCodeOf()`', () => {
    it('gets the entity code for for the char', () => {
      expect(StringEngine.entityCodeOf('&')).to.equal('&#38;') // code

      expect(StringEngine.entityCodeOf('+')).to.equal('&#43;') // code

      expect(StringEngine.entityCodeOf('-')).to.equal('&#45;') // code

      expect(StringEngine.entityCodeOf('{')).to.equal('&#123;') // code

      expect(StringEngine.entityCodeOf('}')).to.equal('&#125;') // code

      expect(StringEngine.entityCodeOf('A')).to.equal('&#65;') // code

      expect(StringEngine.entityCodeOf('C')).to.equal('&#67;') // code

      expect(StringEngine.entityCodeOf('E')).to.equal('&#69;') // code
    })
  })

  describe('`entityNameOf()`', () => {
    describe('The char has an HTML entity', () => {
      it('gets the entity name for for the char', () => {
        expect(StringEngine.entityNameOf('&')).to.equal('&AMP;') // name

        expect(StringEngine.entityNameOf('+')).to.equal('&plus;') // name

        expect(StringEngine.entityNameOf('.')).to.equal('&period;') // name

        expect(StringEngine.entityNameOf('{')).to.equal('&lbrace;') // name

        expect(StringEngine.entityNameOf('}')).to.equal('&rbrace;') // name
      })
    })

    describe('The char does not have an HTML entity', () => {
      it('returns the char', () => {
        expect(StringEngine.entityNameOf('A')).to.equal('A')

        expect(StringEngine.entityNameOf('C')).to.equal('C')

        expect(StringEngine.entityNameOf('E')).to.equal('E')
      })
    })
  })

  describe('`fromDecToHex()`', () => {
    describe('The argument is a number', () => {
      it('returns a string representation of the number converted from `dec` to `hex`', () => {
        expect(StringEngine.fromDecToHex(0)).to.equal('0')

        expect(StringEngine.fromDecToHex(9)).to.equal('9')

        expect(StringEngine.fromDecToHex(50)).to.equal('32')

        expect(StringEngine.fromDecToHex(59)).to.equal('3b')

        expect(StringEngine.fromDecToHex(100)).to.equal('64')

        expect(StringEngine.fromDecToHex(109)).to.equal('6d')
      })
    })

    describe('The argument is a string', () => {
      it('returns a string converted from `dec` to `hex`', () => {
        expect(StringEngine.fromDecToHex('0')).to.equal('0')

        expect(StringEngine.fromDecToHex('9')).to.equal('9')

        expect(StringEngine.fromDecToHex('50')).to.equal('32')

        expect(StringEngine.fromDecToHex('59')).to.equal('3b')

        expect(StringEngine.fromDecToHex('100')).to.equal('64')

        expect(StringEngine.fromDecToHex('109')).to.equal('6d')
      })
    })
  })

  describe('`fromDecToOct()`', () => {
    describe('The argument is a number', () => {
      it('returns a string representation of the number converted from `dec` to `hex`', () => {
        expect(StringEngine.fromDecToOct(0)).to.equal('0')

        expect(StringEngine.fromDecToOct(9)).to.equal('11')

        expect(StringEngine.fromDecToOct(50)).to.equal('62')

        expect(StringEngine.fromDecToOct(59)).to.equal('73')

        expect(StringEngine.fromDecToOct(100)).to.equal('144')

        expect(StringEngine.fromDecToOct(109)).to.equal('155')
      })
    })

    describe('The argument is a string', () => {
      it('returns a string converted from `dec` to `hex`', () => {
        expect(StringEngine.fromDecToOct('0')).to.equal('0')

        expect(StringEngine.fromDecToOct('9')).to.equal('11')

        expect(StringEngine.fromDecToOct('50')).to.equal('62')

        expect(StringEngine.fromDecToOct('59')).to.equal('73')

        expect(StringEngine.fromDecToOct('100')).to.equal('144')

        expect(StringEngine.fromDecToOct('109')).to.equal('155')
      })
    })
  })

  describe('`reverse()`', () => {
    describe('The string is an HTML entity', () => {
      it('gets the string', () => {
        expect(StringEngine.reverse('&amp;')).to.equal(';pma&')

        expect(StringEngine.reverse('&#65;')).to.equal(';56#&')
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.reverse('ABCDE')).to.equal('EDCBA')

        expect(StringEngine.reverse('&  ')).to.equal('  &')

        expect(StringEngine.reverse(' & ')).to.equal(' & ')

        expect(StringEngine.reverse('  &')).to.equal('&  ')
      })
    })
  })
})
