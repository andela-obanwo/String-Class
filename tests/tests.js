/* eslint-disable no-undef*/
describe('String Class Extra Methods', () => {
  describe('hasVowels', () => {
    const actuals = {
      hasVowels1: 'Testing',
      hasVowels2: 'tstIng',
      hasVowels3: 'tstng'
    };
    it('Should return True if the string contains vowels', () => {
      expect(actuals.hasVowels1.hasVowels()).toBeTruthy();
      expect(actuals.hasVowels2.hasVowels()).toBeTruthy();
    });
    it('Should return False if the string does not contain vowels', () => {
      expect(actuals.hasVowels3.hasVowels()).toBeFalsy();
    });
  });
  describe('toUpper', () => {
    const actuals = {
      toUpper1: 'Testing',
      toUpper2: 'tsTing',
      toUpper3: 'JINGLE',
      toUpper4: 'jingl55E'
    };
    it('Should return uppercase string for all passed in data', () => {
      expect(actuals.toUpper1.toUpper()).toEqual('TESTING');
      expect(actuals.toUpper2.toUpper()).toEqual('TSTING');
      expect(actuals.toUpper3.toUpper()).toEqual('JINGLE');
      expect(actuals.toUpper4.toUpper()).toEqual('JINGL55E');
    });
  });
  describe('toLower', () => {
    const actuals = {
      toLower1: 'Testing',
      toLower2: 'tsTing',
      toLower3: 'JINGLE',
      toLower4: 'jingl55E'
    };
    it('Should return a lowercase string for all passed in strings', () => {
      expect(actuals.toLower1.toLower()).toEqual('testing');
      expect(actuals.toLower2.toLower()).toEqual('tsting');
      expect(actuals.toLower3.toLower()).toEqual('jingle');
      expect(actuals.toLower4.toLower()).toEqual('jingl55e');
    });
  });
  describe('ucFirst', () => {
    const actuals = {
      ucFirst1: 'Testing',
      ucFirst2: 'tsTing',
      ucFirst3: 'jingle'
    };
    it('Should return string with first character in uppercase', () => {
      expect(actuals.ucFirst1.ucFirst()).toEqual('Testing');
      expect(actuals.ucFirst2.ucFirst()).toEqual('TsTing');
      expect(actuals.ucFirst3.ucFirst()).toEqual('Jingle');
    });
  });
  describe('isQuestion', () => {
    const actuals = {
      isQuestion1: 'Testing?',
      isQuestion2: 'tsTing isn\'t it?',
      isQuestion3: 'JINGLE',
      isQuestion4: 'JING?le?',
      isQuestion5: '-!,.?'
    };
    it('Should return true if a string is a question', () => {
      expect(actuals.isQuestion1.isQuestion()).toBeTruthy();
      expect(actuals.isQuestion2.isQuestion()).toBeTruthy();
    });
    it('Should return false if a string is not a question', () => {
      expect(actuals.isQuestion3.isQuestion()).toBeFalsy();
      expect(actuals.isQuestion4.isQuestion()).toBeFalsy();
      expect(actuals.isQuestion5.isQuestion()).toBeFalsy();
    });
  });
  describe('words', () => {
    const expected = {
      words1: ['Testing', 'of', 'the', 'properties'],
      words2: ['tsTing', 'of', 'the', 'world', 'is'],
      words3: ['JINGLe'],
      words4: ['Jingle',
               'Why',
               'would',
               'tammy',
               'timmy',
               'tola',
               'zest',
               'be',
               'disobedient']
    };
    const actuals = {
      words1: 'Testing of the properties ',
      words2: 'tsTing of the world is',
      words3: 'JINGLe',
      words4: 'Jingle! Why would tammy, timmy & tola-zest be disobedient?'
    };
    it('Should return array of words contained in inputed string.', () => {
      expect(actuals.words1.words()).toEqual(expected.words1);
      expect(actuals.words2.words()).toEqual(expected.words2);
      expect(actuals.words3.words()).toEqual(expected.words3);
      expect(actuals.words4.words()).toEqual(expected.words4);
    });
  });
  describe('wordCount', () => {
    const actuals = {
      wordCount1: 'Testing of the properties ',
      wordCount2: 'tsTing of the world is',
      wordCount3: 'JINGLe'
    };
    it('Should return count of words contained in entered string', () => {
      expect(actuals.wordCount1.wordCount()).toEqual(4);
      expect(actuals.wordCount2.wordCount()).toEqual(5);
      expect(actuals.wordCount3.wordCount()).toEqual(1);
    });
    it('Should return \'number\' as data type for returned string', () => {
      expect(typeof (actuals.wordCount1.wordCount())).toEqual('number');
    });
  });
  describe('toCurrency', () => {
    const actuals = {
      toCurrency1: '111111.11',
      toCurrency2: '100255452875.23',
      toCurrency3: '100255452875.23456',
      toCurrency4: '5006254',
      toCurrency5: '5006254.',
      toCurrency6: '5OO6254',
      toCurrency7: '7767676..45',
      toCurrency8: '7767676.66.45',
      toCurrency9: '7767676,6645'
    };
    it('Should return a currency representation of the String', () => {
      expect(actuals.toCurrency1.toCurrency()).toEqual('111,111.11');
      expect(actuals.toCurrency2.toCurrency()).toEqual('100,255,452,875.23');
      expect(actuals.toCurrency3.toCurrency()).toEqual('100,255,452,875.23');
      expect(actuals.toCurrency4.toCurrency()).toEqual('5,006,254.00');
      expect(actuals.toCurrency5.toCurrency()).toEqual('5,006,254.00');
    });
    it('Should throw an Error for Bad numbers', () => {
      
      expect(actuals.toCurrency6.toCurrency).toThrow();
      expect(actuals.toCurrency7.toCurrency).toThrow();
      expect(actuals.toCurrency8.toCurrency).toThrow();
      expect(actuals.toCurrency9.toCurrency).toThrow();
    });
  });
  describe('fromCurrency', () => {
    const actuals = {
      fromCurrency1: '111,111.11',
      fromCurrency2: '100,255,452,875.23',
      fromCurrency3: '5,006,254.00',
      fromCurrency4: '5,006,254',
      fromCurrency5: '4,455,O00',
      fromCurrency6: '4,455,000.000',
      fromCurrency7: '3,342,2333,233.00'
    };
    it('Should return a string representation of the inputed currency', () => {
      expect(actuals.fromCurrency1.fromCurrency()).toEqual(111111.11);
      expect(actuals.fromCurrency2.fromCurrency()).toEqual(100255452875.23);
      expect(actuals.fromCurrency3.fromCurrency()).toEqual(5006254.00);
    });
    it('Should confirm that data type of result is \'number\'', () => {
      expect(typeof (actuals.fromCurrency3.fromCurrency())).toEqual('number');
    });
    it('Should throw an Error for Bad currency data', () => {
      expect(actuals.fromCurrency4.fromCurrency).toThrow();
      expect(actuals.fromCurrency5.fromCurrency).toThrow();
      expect(actuals.fromCurrency6.fromCurrency).toThrow();
      expect(actuals.fromCurrency7.fromCurrency).toThrow();
    });
  });
  describe('inverseCase', () => {
    const actuals = {
      inverseCase1: 'HALLELUYAH',
      inverseCase2: 'halleluyah',
      inverseCase3: 'halleLUYah',
      inverseCase4: '5,006,gfhYY254.00',
      inverseCase5: '5,006.00'
    };
    it('Should return each letter as an inverse of its current case', () => {
      expect(actuals.inverseCase1.inverseCase()).toEqual('halleluyah');
      expect(actuals.inverseCase2.inverseCase()).toEqual('HALLELUYAH');
      expect(actuals.inverseCase3.inverseCase()).toEqual('HALLEluyAH');
      expect(actuals.inverseCase4.inverseCase()).toEqual('5,006,GFHyy254.00');
      expect(actuals.inverseCase5.inverseCase()).toEqual('5,006.00');
    });
  });
  describe('alternatingCase', () => {
    const actuals = {
      alternatingCase1: 'HALLELUYAH',
      alternatingCase2: 'halleluyah',
      alternatingCase3: 'halleLUYah',
      alternatingCase4: '5,006,254.00',
      alternatingCase5: 'Ore0lUwa'
    };
    it('Should return the letters in alternating case', () => {
      expect(actuals.alternatingCase1.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.alternatingCase2.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.alternatingCase3.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.alternatingCase4.alternatingCase())
      .toEqual('5,006,254.00');
      expect(actuals.alternatingCase5.alternatingCase())
      .toEqual('oRe0LuWa');
      });
  });
  describe('getMiddle', () => {
    const actuals = {
      getMiddle1: 'HALLELUYAH',
      getMiddle2: 'halleluyahs',
      getMiddle3: 'halleLUYah',
      getMiddle4: '5,006,254.00'
    };
    it('Should return the character(s) in the middle of the string', () => {
      expect(actuals.getMiddle1.getMiddle()).toEqual('EL');
      expect(actuals.getMiddle2.getMiddle()).toEqual('l');
      expect(actuals.getMiddle3.getMiddle()).toEqual('eL');
      expect(actuals.getMiddle4.getMiddle()).toEqual(',2');
    });
  });
  describe('numberWords', () => {
    const actuals = {
      numberWords1: '3',
      numberWords2: '54',
      numberWords3: '000',
      numberWords4: 'HALLELUYAH',
      numberWords5: '00f0'
    };
    it('Should return the numbers in words', () => {
      expect(actuals.numberWords1.numberWords()).toEqual('three');
      expect(actuals.numberWords2.numberWords()).toEqual('five four');
      expect(actuals.numberWords3.numberWords()).toEqual('zero zero zero');
      expect(actuals.numberWords4.numberWords()).toEqual('HALLELUYAH');
      expect(actuals.numberWords5.numberWords()).toEqual('zero zero fzero');
    });
  });
  describe('isDigit', () => {
    const actuals = {
      isDigit1: '3',
      isDigit2: '0',
      isDigit3: '54',
      isDigit4: 'TEST'
    };
    it('Should return true if the string is a single digit', () => {
      expect(actuals.isDigit1.isDigit()).toBeTruthy();
      expect(actuals.isDigit2.isDigit()).toBeTruthy();
    });
    it('Should return false if the string is not a single digit', () => {
      expect(actuals.isDigit3.isDigit()).toBeFalsy();
      expect(actuals.isDigit4.isDigit()).toBeFalsy();
    });
  });
  describe('doubleCheck', () => {
    const actuals = {
      doubleCheck1: 'HALLELUYAH',
      doubleCheck2: '3',
      doubleCheck3: '5477',
      doubleCheck4: 'ore  banwo'
    };
    it('Should return true if a string contains double characters', () => {
      expect(actuals.doubleCheck1.doubleCheck()).toBeTruthy();
      expect(actuals.doubleCheck3.doubleCheck()).toBeTruthy();
      expect(actuals.doubleCheck4.doubleCheck()).toBeTruthy();
    });
    it('Should return false if no double characters in string', () => {
      expect(actuals.doubleCheck2.doubleCheck()).toBeFalsy();
    });
  });
});
