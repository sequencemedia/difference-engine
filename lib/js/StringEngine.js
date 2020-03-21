'use strict'

/*
 *  Copyright © 2012 Jonathan Perry and Sequence Media Limited
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */
var StringEngine = (function () {
  var stringEngine

  var FROMCHARCODE = []
  var FROMHTMLCODE = {

    '&#32;': '\u0020',
    '&#33;': '\u0021',

    '&#34;': '\u0022',

    '&#35;': '\u0023',
    '&#36;': '\u0024',
    '&#37;': '\u0025',

    '&#38;': '\u0026',

    '&#39;': '\u0027',
    '&#40;': '\u0028',
    '&#41;': '\u0029',
    '&#42;': '\u002a',
    '&#43;': '\u002b',
    '&#44;': '\u002c',
    '&#45;': '\u002d',
    '&#46;': '\u002e',
    '&#47;': '\u002f',

    '&#48;': '\u0030',
    '&#49;': '\u0031',
    '&#50;': '\u0032',
    '&#51;': '\u0033',
    '&#52;': '\u0034',
    '&#53;': '\u0035',
    '&#54;': '\u0036',
    '&#55;': '\u0037',
    '&#56;': '\u0038',
    '&#57;': '\u0039',
    '&#58;': '\u003a',
    '&#59;': '\u003b',

    '&#60;': '\u003c',

    '&#61;': '\u003d',

    '&#62;': '\u003e',

    '&#63;': '\u003f',

    '&#64;': '\u0040',
    '&#65;': '\u0041',
    '&#66;': '\u0042',
    '&#67;': '\u0043',
    '&#68;': '\u0044',
    '&#69;': '\u0045',
    '&#70;': '\u0046',
    '&#71;': '\u0047',
    '&#72;': '\u0048',
    '&#73;': '\u0049',
    '&#74;': '\u004a',
    '&#75;': '\u004b',
    '&#76;': '\u004c',
    '&#77;': '\u004d',
    '&#78;': '\u004e',
    '&#79;': '\u004f',

    '&#80;': '\u0050',
    '&#81;': '\u0051',
    '&#82;': '\u0052',
    '&#83;': '\u0053',
    '&#84;': '\u0054',
    '&#85;': '\u0055',
    '&#86;': '\u0056',
    '&#87;': '\u0057',
    '&#88;': '\u0058',
    '&#89;': '\u0059',
    '&#90;': '\u005a',
    '&#91;': '\u005b',
    '&#92;': '\u005c',
    '&#93;': '\u005d',
    '&#94;': '\u005e',
    '&#95;': '\u005f',

    '&#96;': '\u0060',
    '&#97;': '\u0061',
    '&#98;': '\u0062',
    '&#99;': '\u0063',
    '&#100;': '\u0064',
    '&#101;': '\u0065',
    '&#102;': '\u0066',
    '&#103;': '\u0067',
    '&#104;': '\u0068',
    '&#105;': '\u0069',
    '&#106;': '\u006a',
    '&#107;': '\u006b',
    '&#108;': '\u006c',
    '&#109;': '\u006d',
    '&#110;': '\u006e',
    '&#111;': '\u006f',

    '&#112;': '\u0070',
    '&#113;': '\u0071',
    '&#114;': '\u0072',
    '&#115;': '\u0073',
    '&#116;': '\u0074',
    '&#117;': '\u0075',
    '&#118;': '\u0076',
    '&#119;': '\u0077',
    '&#120;': '\u0078',
    '&#121;': '\u0079',
    '&#122;': '\u007a',
    '&#123;': '\u007b',
    '&#124;': '\u007c',
    '&#125;': '\u007d',
    '&#126;': '\u007e',
    '&#127;': '\u007f',

    '&#128;': '\u0080',
    '&#129;': '\u0081',
    '&#130;': '\u0082',
    '&#131;': '\u0083',
    '&#132;': '\u0084',
    '&#133;': '\u0085',
    '&#134;': '\u0086',
    '&#135;': '\u0087',
    '&#136;': '\u0088',
    '&#137;': '\u0089',
    '&#138;': '\u008a',
    '&#139;': '\u008b',
    '&#140;': '\u008c',
    '&#141;': '\u008d',
    '&#142;': '\u008e',
    '&#143;': '\u008f',

    '&#144;': '\u0090',
    '&#145;': '\u0091',
    '&#146;': '\u0092',
    '&#147;': '\u0093',
    '&#148;': '\u0094',
    '&#149;': '\u0095',

    '&#150;': '\u0096',
    '&#151;': '\u0097',

    '&#152;': '\u0098',
    '&#153;': '\u0099',
    '&#154;': '\u009a',
    '&#155;': '\u009b',
    '&#156;': '\u009c',
    '&#157;': '\u009d',
    '&#158;': '\u009e',
    '&#159;': '\u009f',

    '&#160;': '\u00a0',
    '&#161;': '\u00a1',
    '&#162;': '\u00a2',
    '&#163;': '\u00a3',
    '&#164;': '\u00a4',
    '&#165;': '\u00a5',
    '&#166;': '\u00a6',
    '&#167;': '\u00a7',
    '&#168;': '\u00a8',
    '&#169;': '\u00a9',
    '&#170;': '\u00aa',
    '&#171;': '\u00ab',
    '&#172;': '\u00ac',
    '&#173;': '­\u00ad',
    '&#174;': '\u00ae',
    '&#175;': '\u00af',

    '&#176;': '\u00b0',
    '&#177;': '\u00b1',
    '&#178;': '\u00b2',
    '&#179;': '\u00b3',
    '&#180;': '\u00b4',
    '&#181;': '\u00b5',
    '&#182;': '\u00b6',
    '&#183;': '\u00b7',
    '&#184;': '\u00b8',
    '&#185;': '\u00b9',
    '&#186;': '\u00ba',
    '&#187;': '\u00bb',
    '&#188;': '\u00bc',
    '&#189;': '\u00bd',
    '&#190;': '\u00be',
    '&#191;': '\u00bf',

    '&#192;': '\u00c0',
    '&#193;': '\u00c1',
    '&#194;': '\u00c2',
    '&#195;': '\u00c3',
    '&#196;': '\u00c4',
    '&#197;': '\u00c5',
    '&#198;': '\u00c6',
    '&#199;': '\u00c7',
    '&#200;': '\u00c8',
    '&#201;': '\u00c9',
    '&#202;': '\u00ca',
    '&#203;': '\u00cb',
    '&#204;': '\u00cc',
    '&#205;': '\u00cd',
    '&#206;': '\u00ce',
    '&#207;': '\u00cf',

    '&#208;': '\u00d0',
    '&#209;': '\u00d1',
    '&#210;': '\u00d2',
    '&#211;': '\u00d3',
    '&#212;': '\u00d4',
    '&#213;': '\u00d5',
    '&#214;': '\u00d6',
    '&#215;': '\u00d7',
    '&#216;': '\u00d8',
    '&#217;': '\u00d9',
    '&#218;': '\u00da',
    '&#219;': '\u00db',
    '&#220;': '\u00dc',
    '&#221;': '\u00dd',
    '&#222;': '\u00de',
    '&#223;': '\u00df',

    '&#224;': '\u00e0',
    '&#225;': '\u00e1',
    '&#226;': '\u00e2',
    '&#227;': '\u00e3',
    '&#228;': '\u00e4',
    '&#229;': '\u00e5',
    '&#230;': '\u00e6',
    '&#231;': '\u00e7',
    '&#232;': '\u00e8',
    '&#233;': '\u00e9',
    '&#234;': '\u00ea',
    '&#235;': '\u00eb',
    '&#236;': '\u00ec',
    '&#237;': '\u00ed',
    '&#238;': '\u00ee',
    '&#239;': '\u00ef',

    '&#240;': '\u00f0',
    '&#241;': '\u00f1',
    '&#242;': '\u00f2',
    '&#243;': '\u00f3',
    '&#244;': '\u00f4',
    '&#245;': '\u00f5',
    '&#246;': '\u00f6',
    '&#247;': '\u00f7',
    '&#248;': '\u00f8',
    '&#249;': '\u00f9',
    '&#250;': '\u00fa',
    '&#251;': '\u00fb',
    '&#252;': '\u00fc',
    '&#253;': '\u00fd',
    '&#254;': '\u00fe',
    '&#255;': '\u00ff',

    '&#8364;': '\u20ac'

  }
  var FROMHTMLNAME = {

    '&quot;': '\u0022',

    '&amp;': '\u0026',

    '&lt;': '\u003c',
    '&gt;': '\u003e',

    '&ndash;': '\u0096',
    '&mdash;': '\u0097',

    '&nbsp;': '\u00a0',
    '&iexcl;': '\u00a1',
    '&cent;': '\u00a2',
    '&pound;': '\u00a3',
    '&curren;': '\u00a4',
    '&yen;': '\u00a5',
    '&brvbar;': '\u00a6',
    '&sect;': '\u00a7',
    '&uml;': '\u00a8',
    '&copy;': '\u00a9',
    '&ordf;': '\u00aa',
    '&laquo;': '\u00ab',
    '&not;': '\u00ac',
    '&shy;': '­\u00ad',
    '&reg;': '\u00ae',
    '&macr;': '\u00af',

    '&deg;': '\u00b0',
    '&plusmn;': '\u00b1',
    '&sup2;': '\u00b2',
    '&sup3;': '\u00b3',
    '&acute;': '\u00b4',
    '&micro;': '\u00b5',
    '&para;': '\u00b6',
    '&middot;': '\u00b7',
    '&cedil;': '\u00b8',
    '&sup1;': '\u00b9',
    '&ordm;': '\u00ba',
    '&raquo;': '\u00bb',
    '&frac14;': '\u00bc',
    '&frac12;': '\u00bd',
    '&frac34;': '\u00be',
    '&iquest;': '\u00bf',

    '&Agrave;': '\u00c0',
    '&Aacute;': '\u00c1',
    '&Acirc;': '\u00c2',
    '&Atilde;': '\u00c3',
    '&Auml;': '\u00c4',
    '&Aring;': '\u00c5',
    '&AElig;': '\u00c6',
    '&Ccedil;': '\u00c7',
    '&Egrave;': '\u00c8',
    '&Eacute;': '\u00c9',
    '&Ecirc;': '\u00ca',
    '&Euml;': '\u00cb',
    '&Igrave;': '\u00cc',
    '&Iacute;': '\u00cd',
    '&Icirc;': '\u00ce',
    '&Iuml;': '\u00cf',

    '&ETH;': '\u00d0',
    '&Ntilde;': '\u00d1',
    '&Ograve;': '\u00d2',
    '&Oacute;': '\u00d3',
    '&Ocirc;': '\u00d4',
    '&Otilde;': '\u00d5',
    '&Ouml;': '\u00d6',
    '&times;': '\u00d7',
    '&Oslash;': '\u00d8',
    '&Ugrave;': '\u00d9',
    '&Uacute;': '\u00da',
    '&Ucirc;': '\u00db',
    '&Uuml;': '\u00dc',
    '&Yacute;': '\u00dd',
    '&THORN;': '\u00de',
    '&szlig;': '\u00df',

    '&agrave;': '\u00e0',
    '&aacute;': '\u00e1',
    '&acirc;': '\u00e2',
    '&atilde;': '\u00e3',
    '&auml;': '\u00e4',
    '&aring;': '\u00e5',
    '&aelig;': '\u00e6',
    '&ccedil;': '\u00e7',
    '&egrave;': '\u00e8',
    '&eacute;': '\u00e9',
    '&ecirc;': '\u00ea',
    '&euml;': '\u00eb',
    '&igrave;': '\u00ec',
    '&iacute;': '\u00ed',
    '&icirc;': '\u00ee',
    '&iuml;': '\u00ef',

    '&eth;': '\u00f0',
    '&ntilde;': '\u00f1',
    '&ograve;': '\u00f2',
    '&oacute;': '\u00f3',
    '&ocirc;': '\u00f4',
    '&otilde;': '\u00f5',
    '&ouml;': '\u00f6',
    '&divide;': '\u00f7',
    '&oslash;': '\u00f8',
    '&ugrave;': '\u00f9',
    '&uacute;': '\u00fa',
    '&ucirc;': '\u00fb',
    '&uuml;': '\u00fc',
    '&yacute;': '\u00fd',
    '&thorn;': '\u00fe',
    '&yuml;': '\u00ff',

    '&euro;': '\u20ac'

  }
  var HTMLCODEFROM = {

    '\u0020': '&#32;',
    '\u0021': '&#33;',

    '\u0022': '&#34;',

    '\u0023': '&#35;',
    $: '&#36;',
    '\u0025': '&#37;',

    '\u0026': '&#38;',

    '\u0027': '&#39;',
    '\u0028': '&#40;',
    '\u0029': '&#41;',
    '\u002a': '&#42;',
    '\u002b': '&#43;',
    '\u002c': '&#44;',
    '\u002d': '&#45;',
    '\u002e': '&#46;',
    '\u002f': '&#47;',

    0: '&#48;',
    1: '&#49;',
    2: '&#50;',
    3: '&#51;',
    4: '&#52;',
    5: '&#53;',
    6: '&#54;',
    7: '&#55;',
    8: '&#56;',
    9: '&#57;',
    '\u003a': '&#58;',
    '\u003b': '&#59;',

    '\u003c': '&#60;',

    '\u003d': '&#61;',

    '\u003e': '&#62;',

    '\u003f': '&#63;',

    '\u0040': '&#64;',
    A: '&#65;',
    B: '&#66;',
    C: '&#67;',
    D: '&#68;',
    E: '&#69;',
    F: '&#70;',
    G: '&#71;',
    H: '&#72;',
    I: '&#73;',
    J: '&#74;',
    K: '&#75;',
    L: '&#76;',
    M: '&#77;',
    N: '&#78;',
    O: '&#79;',

    P: '&#80;',
    Q: '&#81;',
    R: '&#82;',
    S: '&#83;',
    T: '&#84;',
    U: '&#85;',
    V: '&#86;',
    W: '&#87;',
    X: '&#88;',
    Y: '&#89;',
    Z: '&#90;',
    '\u005b': '&#91;',
    '\u005c': '&#92;',
    '\u005d': '&#93;',
    '\u005e': '&#94;',
    _: '&#95;',

    '\u0060': '&#96;',
    a: '&#97;',
    b: '&#98;',
    c: '&#99;',
    d: '&#100;',
    e: '&#101;',
    f: '&#102;',
    g: '&#103;',
    h: '&#104;',
    i: '&#105;',
    j: '&#106;',
    k: '&#107;',
    l: '&#108;',
    m: '&#109;',
    n: '&#110;',
    o: '&#111;',

    p: '&#112;',
    q: '&#113;',
    r: '&#114;',
    s: '&#115;',
    t: '&#116;',
    u: '&#117;',
    v: '&#118;',
    w: '&#119;',
    x: '&#120;',
    y: '&#121;',
    z: '&#122;',
    '\u007b': '&#123;',
    '\u007c': '&#124;',
    '\u007d': '&#125;',
    '\u007e': '&#126;',
    '\u007f': '&#127;',

    '\u0080': '&#128;',
    '\u0081': '&#129;',
    '\u0082': '&#130;',
    '\u0083': '&#131;',
    '\u0084': '&#132;',
    '\u0085': '&#133;',
    '\u0086': '&#134;',
    '\u0087': '&#135;',
    '\u0088': '&#136;',
    '\u0089': '&#137;',
    '\u008a': '&#138;',
    '\u008b': '&#139;',
    '\u008c': '&#140;',
    '\u008d': '&#141;',
    '\u008e': '&#142;',
    '\u008f': '&#143;',

    '\u0090': '&#144;',
    '\u0091': '&#145;',
    '\u0092': '&#146;',
    '\u0093': '&#147;',
    '\u0094': '&#148;',
    '\u0095': '&#149;',

    '\u0096': '&#150;',
    '\u0097': '&#151;',

    '\u0098': '&#152;',
    '\u0099': '&#153;',
    '\u009a': '&#154;',
    '\u009b': '&#155;',
    '\u009c': '&#156;',
    '\u009d': '&#157;',
    '\u009e': '&#158;',
    '\u009f': '&#159;',

    '\u00a0': '&#160;',
    '\u00a1': '&#161;',
    '\u00a2': '&#162;',
    '\u00a3': '&#163;',
    '\u00a4': '&#164;',
    '\u00a5': '&#165;',
    '\u00a6': '&#166;',
    '\u00a7': '&#167;',
    '\u00a8': '&#168;',
    '\u00a9': '&#169;',
    ª: '&#170;',
    '\u00ab': '&#171;',
    '\u00ac': '&#172;',
    '­\u00ad': '&#173;',
    '\u00ae': '&#174;',
    '\u00af': '&#175;',

    '\u00b0': '&#176;',
    '\u00b1': '&#177;',
    '\u00b2': '&#178;',
    '\u00b3': '&#179;',
    '\u00b4': '&#180;',
    µ: '&#181;',
    '\u00b6': '&#182;',
    '\u00b7': '&#183;',
    '\u00b8': '&#184;',
    '\u00b9': '&#185;',
    º: '&#186;',
    '\u00bb': '&#187;',
    '\u00bc': '&#188;',
    '\u00bd': '&#189;',
    '\u00be': '&#190;',
    '\u00bf': '&#191;',

    À: '&#192;',
    Á: '&#193;',
    Â: '&#194;',
    Ã: '&#195;',
    Ä: '&#196;',
    Å: '&#197;',
    Æ: '&#198;',
    Ç: '&#199;',
    È: '&#200;',
    É: '&#201;',
    Ê: '&#202;',
    Ë: '&#203;',
    Ì: '&#204;',
    Í: '&#205;',
    Î: '&#206;',
    Ï: '&#207;',

    Ð: '&#208;',
    Ñ: '&#209;',
    Ò: '&#210;',
    Ó: '&#211;',
    Ô: '&#212;',
    Õ: '&#213;',
    Ö: '&#214;',
    '\u00d7': '&#215;',
    Ø: '&#216;',
    Ù: '&#217;',
    Ú: '&#218;',
    Û: '&#219;',
    Ü: '&#220;',
    Ý: '&#221;',
    Þ: '&#222;',
    ß: '&#223;',

    à: '&#224;',
    á: '&#225;',
    â: '&#226;',
    ã: '&#227;',
    ä: '&#228;',
    å: '&#229;',
    æ: '&#230;',
    ç: '&#231;',
    è: '&#232;',
    é: '&#233;',
    ê: '&#234;',
    ë: '&#235;',
    ì: '&#236;',
    í: '&#237;',
    î: '&#238;',
    ï: '&#239;',

    ð: '&#240;',
    ñ: '&#241;',
    ò: '&#242;',
    ó: '&#243;',
    ô: '&#244;',
    õ: '&#245;',
    ö: '&#246;',
    '\u00f7': '&#247;',
    ø: '&#248;',
    ù: '&#249;',
    ú: '&#250;',
    û: '&#251;',
    ü: '&#252;',
    ý: '&#253;',
    þ: '&#254;',
    ÿ: '&#255;',

    '\u20ac': '&#8364;'

  }
  var HTMLNAMEFROM = {

    '\u0022': '&quot;',

    '\u0026': '&amp;',

    '\u003c': '&lt;',
    '\u003e': '&gt;',

    '\u0096': '&ndash;',
    '\u0097': '&mdash;',

    '\u00a0': '&nbsp;',
    '\u00a1': '&iexcl;',
    '\u00a2': '&cent;',
    '\u00a3': '&pound;',
    '\u00a4': '&curren;',
    '\u00a5': '&yen;',
    '\u00a6': '&brvbar;',
    '\u00a7': '&sect;',
    '\u00a8': '&uml;',
    '\u00a9': '&copy;',
    ª: '&ordf;',
    '\u00ab': '&laquo;',
    '\u00ac': '&not;',
    '­\u00ad': '&shy;',
    '\u00ae': '&reg;',
    '\u00af': '&macr;',

    '\u00b0': '&deg;',
    '\u00b1': '&plusmn;',
    '\u00b2': '&sup2;',
    '\u00b3': '&sup3;',
    '\u00b4': '&acute;',
    µ: '&micro;',
    '\u00b6': '&para;',
    '\u00b7': '&middot;',
    '\u00b8': '&cedil;',
    '\u00b9': '&sup1;',
    º: '&ordm;',
    '\u00bb': '&raquo;',
    '\u00bc': '&frac14;',
    '\u00bd': '&frac12;',
    '\u00be': '&frac34;',
    '\u00bf': '&iquest;',

    À: '&Agrave;',
    Á: '&Aacute;',
    Â: '&Acirc;',
    Ã: '&Atilde;',
    Ä: '&Auml;',
    Å: '&Aring;',
    Æ: '&AElig;',
    Ç: '&Ccedil;',
    È: '&Egrave;',
    É: '&Eacute;',
    Ê: '&Ecirc;',
    Ë: '&Euml;',
    Ì: '&Igrave;',
    Í: '&Iacute;',
    Î: '&Icirc;',
    Ï: '&Iuml;',

    Ð: '&ETH;',
    Ñ: '&Ntilde;',
    Ò: '&Ograve;',
    Ó: '&Oacute;',
    Ô: '&Ocirc;',
    Õ: '&Otilde;',
    Ö: '&Ouml;',
    '\u00d7': '&times;',
    Ø: '&Oslash;',
    Ù: '&Ugrave;',
    Ú: '&Uacute;',
    Û: '&Ucirc;',
    Ü: '&Uuml;',
    Ý: '&Yacute;',
    Þ: '&THORN;',
    ß: '&szlig;',

    à: '&agrave;',
    á: '&aacute;',
    â: '&acirc;',
    ã: '&atilde;',
    ä: '&auml;',
    å: '&aring;',
    æ: '&aelig;',
    ç: '&ccedil;',
    è: '&egrave;',
    é: '&eacute;',
    ê: '&ecirc;',
    ë: '&euml;',
    ì: '&igrave;',
    í: '&iacute;',
    î: '&icirc;',
    ï: '&iuml;',

    ð: '&eth;',
    ñ: '&ntilde;',
    ò: '&ograve;',
    ó: '&oacute;',
    ô: '&ocirc;',
    õ: '&otilde;',
    ö: '&ouml;',
    '\u00f7': '&divide;',
    ø: '&oslash;',
    ù: '&ugrave;',
    ú: '&uacute;',
    û: '&ucirc;',
    ü: '&uuml;',
    ý: '&yacute;',
    þ: '&thorn;',
    ÿ: '&yuml;',

    '\u20ac': '&euro;'

  }

  var OCT = 8
  var DEC = 10
  var HEX = 16

  var X = /\u0026[\w]+\u003b|\u0026\u0023(?:[1-9]+[\d]+|[1-9])\u003b+/g
  var XCODE = /\u0026\u0023(?:[1-9]+[\d]+|[1-9]+)\u003b+/g
  var XNAME = /\u0026[\w]+\u003b+/g
  var XC = /\u0026\u0023(?:[1-9]+[\d]+|[1-9]+)\u003b+/
  // var XN = /\u0026[\w]+\u003b+/
  var XNUMBER = /[1-9]+[\d]+|[1-9]+/
  // var XSTRING = /[\w]+/
  var A = '\u0026'; var N = 38

  function isString (v) {
    return (typeof v === 'string')
  }

  function isNumber (v) {
    return (typeof v === 'number')
  }

  function charAt (i, s) {
    var v, a, x, m, c
    if (isNumber(i) && isString(s)) {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      v = s.charAt(i)
      a = A
      if (v === a) {
        /*
         *  The character at position i is an ampersand. Examine the rest of the string with an HTML
         *  encoding pattern regular expression
         */
        x = X
        x.lastIndex = i
        m = x.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  an ampersand
           */
          return a
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          if (isString(c = FROMHTMLNAME[v]) || isString(c = FROMHTMLCODE[v])) return c
          /*
           *  Valid patterns are:
           *      &#1; ... etc
           *      &a;
           *      &aa; ... etc
           *  If the match has failed to find a character in the arrays then either it is not
           *  an HTML name or it is an HTML code that has not been seen before
           */
          x = XC
          if (x.test(v)) {
            x = XNUMBER
            i = parseInt(x.exec(v).shift(), 10)
            return (
              FROMHTMLCODE[v] = String.fromCharCode(i)
            )
          } else {
            return a
          }
        }
      } else {
        /*
         * The character at position i is not an ampersand, so return it
         */
        return v
      }
    }
    return null
  }

  function charCodeAt (i, s) {
    var v, n, x, m, c
    if (isNumber(i) && isString(s)) {
      /*
       *  "String.charCodeAt()" is fast so retrieve the character at position i and compare to
       *  the index of ampersand
       */
      v = s.charCodeAt(i)
      n = N
      if (v === n) {
        /*
         *  The character at position i is an ampersand. Examine the rest of the string with an HTML
         *  encoding pattern regular expression
         */
        x = X
        x.lastIndex = i
        m = x.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  the index of ampersand
           */
          return n
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          if (isString(c = FROMHTMLNAME[v]) || isString(c = FROMHTMLCODE[v])) return c.charCodeAt(0)
          return n
        }
      } else {
        /*
         * The index at position i is not the index of an ampersand, so return the index
         */
        return v
      }
    }
    return null
  }

  /*
   *  Either code or name
   */
  function htmlAt (i, s) {
    var v, a, x, m
    if (isNumber(i) && isString(s)) {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      v = s.charAt(i)
      a = A
      if (v === a) {
        x = X
        x.lastIndex = i
        m = x.exec(s)
        /*
         *  Either the adjacent characters match the HTML encoding pattern so execution can return
         *  an ampersand or the adjacent characters match so execution can return them
         */
        return (m === null) ? a : m.shift()
      } else {
        return v
      }
    }
    return null
  }

  /*
   *  Code, ignore name
   */
  function htmlCodeAt (i, s) {
    var v, a, x, m, c
    if (isNumber(i) && isString(s)) {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      v = s.charAt(i)
      a = A
      if (v === a) {
        x = XCODE
        x.lastIndex = i
        m = x.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  an ampersand
           */
          return a
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          if (isString(c = FROMHTMLCODE[v])) return c
          /*
           *  Valid patterns are:
           *      &#1; ... etc
           *      &a;
           *      &aa; ... etc
           *  If the match has failed to find a character in the arrays then either it is not
           *  an HTML name or it is an HTML code that has not been seen before
           */
          x = XC
          if (x.test(v)) {
            x = XNUMBER
            i = parseInt(x.exec(v).shift(), 10)
            return (
              FROMHTMLCODE[v] = String.fromCharCode(i)
            )
          } else {
            return a
          }
        }
      } else {
        return v
      }
    }
    return null
  }

  /*
   *  Name, ignore code
   */
  function htmlNameAt (i, s) {
    var v, a, x, m, c
    if (isNumber(i) && isString(s)) {
      /*
       *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
       */
      v = s.charAt(i)
      a = A
      if (v === a) {
        x = XNAME
        x.lastIndex = i
        m = x.exec(s)
        if (m === null) {
          /*
           *  The adjacent characters match the HTML encoding pattern so execution can return
           *  an ampersand
           */
          return a
        } else {
          /*
           *  The regular expression must have a match. Retrieve it
           */
          v = m.shift()
          if (isString(c = FROMHTMLNAME[v])) return c
          return a
        }
      } else {
        return v
      }
    }
    return null
  }

  function charOf (s) {
    var v, a, x, m, c, i
    if (isString(s)) {
      if (s.length < 4) {
        return s.charAt(0)
      } else {
        /*
         *  "String.charAt()" is fast so retrieve the character at position i and compare to an ampersand
         */
        v = s.charAt(0)
        a = A
        if (v === A) {
          /*
           *  The character at position i is an ampersand. Examine the rest of the string with an HTML
           *  encoding pattern regular expression
           */
          x = X
          x.lastIndex = 0
          m = x.exec(s)
          if (m === null) {
            /*
             *  The adjacent characters match the HTML encoding pattern so execution can return
             *  an ampersand
             */
            return a
          } else {
            /*
             *  The regular expression must have a match. Retrieve it
             */
            v = m.shift()
            if (isString(c = FROMHTMLNAME[v]) || isString(c = FROMHTMLCODE[v])) return c
            /*
             *  Valid patterns are:
             *      &#1; ... etc
             *      &a;
             *      &aa; ... etc
             *  If the match has failed to find a character in the arrays then either it is not
             *  an HTML name or it is an HTML code that has not been seen before
             */
            x = XC
            if (x.test(v)) {
              x = XNUMBER
              i = parseInt(x.exec(v).shift(), 10)
              return (
                FROMHTMLCODE[v] = String.fromCharCode(i)
              )
            } else {
              return a
            }
          }
        } else {
          /*
           * The character at position i is not an ampersand, so return it
           */
          return v
        }
      }
    }
    return null
  }

  function htmlOf (s) {
    throw new Error('Not implemented') // return null;
  }

  /*
   *  Character from index
   */
  function fromCharCode (i) {
    var s
    return isNumber(i) ? isString(s = FROMCHARCODE[i]) ? s : FROMCHARCODE[i] = String.fromCharCode(i) : null
  }

  /*
   *  Character from HTML code
   */
  function fromHtmlCode (s) {
    var c; var i; var xc = XC; var xn = XNUMBER; var a = A
    return isString(s) ? isString(c = FROMHTMLCODE[s]) ? c : xc.test(s) ? isNaN(i = parseInt(xn.exec(s).shift(), 10)) ? a : FROMHTMLCODE[s] = String.fromCharCode(i) : a : null
  }

  /*
   *  Character from HTML name
   */
  function fromHtmlName (s) {
    var c
    return isString(s) ? isString(c = FROMHTMLNAME[s]) ? c : s : null
  }

  /*
   * Characters to HTML code
   */
  function toHtmlCode (s) {
    var i, j, c, h, r
    if (isString(s)) {
      i = 0
      j = s.length
      r = ''
      for (i, j; i < j; i = i + 1) {
        c = s.charAt(i)
        h = isString(h = HTMLCODEFROM[c]) ? h : c
        r = r + h
      }
      return r
    }
    return null
  }

  /*
   * Characters to HTML name
   */
  function toHtmlName (s) {
    var i, j, c, h, r
    if (isString(s)) {
      i = 0
      j = s.length
      r = ''
      for (i, j; i < j; i = i + 1) {
        c = s.charAt(i)
        h = isString(h = HTMLNAMEFROM[c]) ? h : c
        r = r + h
      }
      return r
    }
    return null
  }

  /*
   *  HTML code from character
   */
  function htmlCodeFrom (s) {
    var c
    return isString(s) && s.length === 1 ? isString(c = HTMLCODEFROM[s]) ? c : s : null
  }

  /*
   *  HTML name from chracter
   */
  function htmlNameFrom (s) {
    var c
    return isString(s) && s.length === 1 ? isString(c = HTMLNAMEFROM[s]) ? c : s : null
  }

  /*
   *  As "htmlCodeFrom"
   */
  function htmlCodeOf (s) {
    var c
    return isString(s) && s.length === 1 ? isString(c = HTMLCODEFROM[s]) ? c : s : null
  }

  /*
   *  As "htmlNameFrom"
   */
  function htmlNameOf (s) {
    var c
    return isString(s) && s.length === 1 ? isString(c = HTMLNAMEFROM[s]) ? c : s : null
  }

  function fromDecToHex (v) {
    return isNumber(v) ? v.toString(HEX) : isString(v) ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(HEX) : null
  }

  function fromDecToOct (v) {
    return isNumber(v) ? v.toString(OCT) : isString(v) ? isNaN(v = parseInt(v, DEC)) ? null : v.toString(OCT) : null
  }

  function truncate () {
    throw new Error('Not implemented') // return null;
  }

  function reverse (string) {
    var s, i
    if (isString(string)) {
      s = ''
      i = string.length
      /*
       *  According to jsperf.com, April 2013, concatenating "s" with operator "+=" is favoured
       *  by a small measure in Safari but not elsewhere. Similarly, decrementing "i" on a separate line is
       *  favoured by FF by a larger measure: the formulation I have selected is a reasonable compromise.
       */
      do {
        s = s + string.charAt(--i)
      } while (i > 0)
      return s
    }
    return null
  }

  /*
   *  According to jsperf.com, December 2012, sequential access of sparse arrays (zero to length)
   *  degrades performance: but sparse arrays perform better than populated arrays where elements
   *  are accessed within unsparse sections.
   */
  function extend (RANGES) {
    var range, i, j
    if ((RANGES || false).constructor === Array) {
      while (((range = RANGES.shift()) || false).constructor === Object) {
        i = isNumber(i = range.from) ? i : 0
        j = isNumber(j = range.to) ? j : i + 1
        do {
          /*
           *  Arrays coerce numbers represented as strings to numbers
           *  so numbers represented as strings cannot be used as keys
           */
          FROMCHARCODE[i] = String.fromCharCode(i)
        } while (i++ < j)
      }
      return true
    }
    return null
  }

  function StringEngine () {
    function initialise () {
      extend([{ from: 32, to: 126 }, { from: 150, to: 151 }, { from: 160, to: 255 }])
    }

    return stringEngine || (this instanceof StringEngine ? stringEngine = (initialise() || this) : new StringEngine())
  }

  StringEngine.prototype.charOf = charOf
  StringEngine.prototype.htmlOf = htmlOf

  StringEngine.prototype.charAt = charAt
  StringEngine.prototype.charCodeAt = charCodeAt

  StringEngine.prototype.htmlAt = htmlAt
  StringEngine.prototype.htmlCodeAt = htmlCodeAt
  StringEngine.prototype.htmlNameAt = htmlNameAt

  StringEngine.prototype.fromCharCode = fromCharCode
  StringEngine.prototype.fromHtmlCode = fromHtmlCode
  StringEngine.prototype.fromHtmlName = fromHtmlName

  StringEngine.prototype.toHtmlCode = toHtmlCode
  StringEngine.prototype.toHtmlName = toHtmlName

  StringEngine.prototype.htmlCodeFrom = htmlCodeFrom
  StringEngine.prototype.htmlNameFrom = htmlNameFrom

  StringEngine.prototype.htmlCodeOf = htmlCodeOf
  StringEngine.prototype.htmlNameOf = htmlNameOf

  StringEngine.prototype.fromDecToHex = fromDecToHex
  StringEngine.prototype.fromDecToOct = fromDecToOct

  StringEngine.prototype.truncate = truncate

  StringEngine.prototype.reverse = reverse

  StringEngine.prototype.extend = extend

  return StringEngine
}())
