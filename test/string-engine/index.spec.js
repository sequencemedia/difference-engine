import {
  expect
} from 'chai'

import StringEngine from '@difference-engine/string-engine'

describe('StringEngine', () => {
  it('is a class', () => expect(StringEngine).to.be.a('function'))

  describe('`charAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char code for the char name of the entity', () => {
          expect(StringEngine.charAt(0, '&amp;')).to.equal('&')

          expect(StringEngine.charAt(0, '&#65;')).to.equal('A')
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code at the index', () => {
          expect(StringEngine.charAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.charAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
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
        it('gets the char code for the char name of the entity', () => {
          expect(StringEngine.charCodeAt(0, '&amp;')).to.equal(38)

          expect(StringEngine.charCodeAt(0, '&#65;')).to.equal(65)
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code at the index', () => {
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

  describe('`htmlAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char code for the char name of the entity', () => {
          expect(StringEngine.htmlAt(0, '&amp;')).to.equal('&amp;')

          expect(StringEngine.htmlAt(0, '&#65;')).to.equal('&#65;')
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code at the index', () => {
          expect(StringEngine.htmlAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.htmlAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.htmlAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.htmlAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.htmlAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.htmlAt(0, '&  ')).to.equal('&')

        expect(StringEngine.htmlAt(1, ' & ')).to.equal('&')

        expect(StringEngine.htmlAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`htmlCodeAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char for the char name at the index', () => {
          expect(StringEngine.htmlCodeAt(0, '&amp;')).to.equal('&') // name (first char)
        })

        it('gets the char for the char code at the index', () => {
          expect(StringEngine.htmlCodeAt(0, '&#65;')).to.equal('A') // code
        })
      })

      describe('The index is not zero', () => {
        it('gets the char at the index', () => {
          expect(StringEngine.htmlCodeAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.htmlCodeAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char code at the index', () => {
        expect(StringEngine.htmlCodeAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.htmlCodeAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.htmlCodeAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.htmlCodeAt(0, '&  ')).to.equal('&')

        expect(StringEngine.htmlCodeAt(1, ' & ')).to.equal('&')

        expect(StringEngine.htmlCodeAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`htmlNameAt()`', () => {
    describe('The string is an HTML entity', () => {
      describe('The index is zero', () => {
        it('gets the char for the char name at the index', () => {
          expect(StringEngine.htmlNameAt(0, '&amp;')).to.equal('&') // name
        })

        it('gets the char for the char code at the index', () => {
          expect(StringEngine.htmlNameAt(0, '&#65;')).to.equal('&') // code
        })
      })

      describe('The index is not zero', () => {
        it('gets the char code at the index', () => {
          expect(StringEngine.htmlNameAt(1, '&amp;')).to.equal('a')

          expect(StringEngine.htmlNameAt(2, '&#65;')).to.equal('6')
        })
      })
    })

    describe('The string is not an HTML entity', () => {
      it('gets the char at the index', () => {
        expect(StringEngine.htmlNameAt(0, 'ABCDE')).to.equal('A')

        expect(StringEngine.htmlNameAt(2, 'ABCDE')).to.equal('C')

        expect(StringEngine.htmlNameAt(4, 'ABCDE')).to.equal('E')

        expect(StringEngine.htmlNameAt(0, '&  ')).to.equal('&')

        expect(StringEngine.htmlNameAt(1, ' & ')).to.equal('&')

        expect(StringEngine.htmlNameAt(2, '  &')).to.equal('&')
      })
    })
  })

  describe('`charOf()`', () => {
    describe('The string is an HTML entity', () => {
      it('gets the char code for the char name of the entity', () => {
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

  describe('`htmlOf()`', () => {
    it('throws', () => {
      expect(() => StringEngine.htmlOf()).to.throw(Error, 'Not implemented')
    })
  })

  describe('`fromCharCode()`', () => {
    it('gets the char for the index', () => {
      expect(StringEngine.fromCharCode(0)).to.equal(String.fromCharCode(0))

      expect(StringEngine.fromCharCode(1000)).to.equal(String.fromCharCode(1000))

      expect(StringEngine.fromCharCode(1000000)).to.equal(String.fromCharCode(1000000))
    })
  })

  describe('`fromHtmlCode()`', () => {
    it('gets the char for the entity code', () => {
      expect(StringEngine.fromHtmlCode('&#0;')).to.equal(String.fromCharCode(0))

      expect(StringEngine.fromHtmlCode('&#1000;')).to.equal(String.fromCharCode(1000))

      expect(StringEngine.fromHtmlCode('&#1000000;')).to.equal(String.fromCharCode(1000000))
    })
  })

  describe('`fromHtmlName()`', () => {
    it('gets the char for the entity name', () => {
      expect(StringEngine.fromHtmlName('&Tab;')).to.equal(String.fromCharCode(9))

      expect(StringEngine.fromHtmlName('&nsub;')).to.equal(String.fromCharCode(8836))

      expect(StringEngine.fromHtmlName('&nsup;')).to.equal(String.fromCharCode(8837))

      expect(StringEngine.fromHtmlName('&zopf;')).to.equal(String.fromCharCode(120171))
    })
  })

  describe('`toHtmlCode()`', () => {
    it('gets the entity code for each char', () => {
      expect(StringEngine.toHtmlCode('&+.{}ACE')).to.equal('&#38;&#43;&#46;&#123;&#125;&#65;&#67;&#69;') // code
    })
  })

  describe('`toHtmlName()`', () => {
    it('gets the entity name for each char', () => {
      expect(StringEngine.toHtmlName('&+.{}ACE')).to.equal('&AMP;&plus;&period;&lbrace;&rbrace;ACE') // code
    })
  })

  describe('`htmlCodeFrom()`', () => {
    it('gets the entity code for for the char', () => {
      expect(StringEngine.htmlCodeFrom('&')).to.equal('&#38;') // code

      expect(StringEngine.htmlCodeFrom('+')).to.equal('&#43;') // code

      expect(StringEngine.htmlCodeFrom('-')).to.equal('&#45;') // code

      expect(StringEngine.htmlCodeFrom('{')).to.equal('&#123;') // code

      expect(StringEngine.htmlCodeFrom('}')).to.equal('&#125;') // code

      expect(StringEngine.htmlCodeFrom('A')).to.equal('&#65;') // code

      expect(StringEngine.htmlCodeFrom('C')).to.equal('&#67;') // code

      expect(StringEngine.htmlCodeFrom('E')).to.equal('&#69;') // code
    })
  })

  describe('`htmlNameFrom()`', () => {
    describe('The char has an HTML entity', () => {
      it('gets the entity name for for the char', () => {
        expect(StringEngine.htmlNameFrom('&')).to.equal('&AMP;') // name

        expect(StringEngine.htmlNameFrom('+')).to.equal('&plus;') // name

        expect(StringEngine.htmlNameFrom('.')).to.equal('&period;') // name

        expect(StringEngine.htmlNameFrom('{')).to.equal('&lbrace;') // name

        expect(StringEngine.htmlNameFrom('}')).to.equal('&rbrace;') // name
      })
    })

    describe('The char does not have an HTML entity', () => {
      it('returns the char', () => {
        expect(StringEngine.htmlNameFrom('A')).to.equal('A')

        expect(StringEngine.htmlNameFrom('C')).to.equal('C')

        expect(StringEngine.htmlNameFrom('E')).to.equal('E')
      })
    })
  })

  describe('`htmlCodeOf()`', () => {
    it('gets the entity code for for the char', () => {
      expect(StringEngine.htmlCodeOf('&')).to.equal('&#38;') // code

      expect(StringEngine.htmlCodeOf('+')).to.equal('&#43;') // code

      expect(StringEngine.htmlCodeOf('-')).to.equal('&#45;') // code

      expect(StringEngine.htmlCodeOf('{')).to.equal('&#123;') // code

      expect(StringEngine.htmlCodeOf('}')).to.equal('&#125;') // code

      expect(StringEngine.htmlCodeOf('A')).to.equal('&#65;') // code

      expect(StringEngine.htmlCodeOf('C')).to.equal('&#67;') // code

      expect(StringEngine.htmlCodeOf('E')).to.equal('&#69;') // code
    })
  })

  describe('`htmlNameOf()`', () => {
    describe('The char has an HTML entity', () => {
      it('gets the entity name for for the char', () => {
        expect(StringEngine.htmlNameOf('&')).to.equal('&AMP;') // name

        expect(StringEngine.htmlNameOf('+')).to.equal('&plus;') // name

        expect(StringEngine.htmlNameOf('.')).to.equal('&period;') // name

        expect(StringEngine.htmlNameOf('{')).to.equal('&lbrace;') // name

        expect(StringEngine.htmlNameOf('}')).to.equal('&rbrace;') // name
      })
    })

    describe('The char does not have an HTML entity', () => {
      it('returns the char', () => {
        expect(StringEngine.htmlNameOf('A')).to.equal('A')

        expect(StringEngine.htmlNameOf('C')).to.equal('C')

        expect(StringEngine.htmlNameOf('E')).to.equal('E')
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
