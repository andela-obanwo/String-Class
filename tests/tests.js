/* eslint-disable no-undef*/
describe('String Class Extra Methods', () => {
  describe('hasVowels', () => {
    const actuals = {
      upperCaseVowels: 'Testing',
      lowerCaseVowels: 'tstIng',
      noVowels: 'tstng'
    };
    it('Should return True if the string contains vowels', () => {
      expect(actuals.upperCaseVowels.hasVowels()).toBeTruthy();
      expect(actuals.lowerCaseVowels.hasVowels()).toBeTruthy();
    });
    it('Should return False if the string does not contain vowels', () => {
      expect(actuals.noVowels.hasVowels()).toBeFalsy();
    });
  });
  describe('toUpper', () => {
    const actuals = {
      firstLetterUpper: 'Testing',
      middleUpper: 'tsTing',
      allUpper: 'JINGLE',
      includesDigits: 'jingl55E'
    };
    it('Should return uppercase string for all passed in data', () => {
      expect(actuals.firstLetterUpper.toUpper()).toEqual('TESTING');
      expect(actuals.middleUpper.toUpper()).toEqual('TSTING');
      expect(actuals.allUpper.toUpper()).toEqual('JINGLE');
      expect(actuals.includesDigits.toUpper()).toEqual('JINGL55E');
    });
  });
  describe('toLower', () => {
    const actuals = {
      firstLetterUpper: 'Testing',
      middleUpper: 'tsTing',
      allUpper: 'JINGLE',
      includesDigits: 'jingl55E'
    };
    it('Should return a lowercase string for all passed in strings', () => {
      expect(actuals.firstLetterUpper.toLower()).toEqual('testing');
      expect(actuals.middleUpper.toLower()).toEqual('tsting');
      expect(actuals.allUpper.toLower()).toEqual('jingle');
      expect(actuals.includesDigits.toLower()).toEqual('jingl55e');
    });
  });
  describe('ucFirst', () => {
    const actuals = {
      firstLetterUpper: 'Testing',
      middleUpper: 'tsTing',
      allLower: 'jingle'
    };
    it('Should return string with first character in uppercase', () => {
      expect(actuals.firstLetterUpper.ucFirst()).toEqual('Testing');
      expect(actuals.middleUpper.ucFirst()).toEqual('TsTing');
      expect(actuals.allLower.ucFirst()).toEqual('Jingle');
    });
  });
  describe('isQuestion', () => {
    const actuals = {
      question: 'Testing?',
      multiWordQuestion: 'tsTing isn\'t it?',
      noQuestionMark: 'JINGLE',
      multipleQuestionMark: 'JING?le?',
      nonWords: '-!,.?'
    };
    it('Should return true if a string is a question', () => {
      expect(actuals.question.isQuestion()).toBeTruthy();
      expect(actuals.multiWordQuestion.isQuestion()).toBeTruthy();
    });
    it('Should return false if a string is not a question', () => {
      expect(actuals.noQuestionMark.isQuestion()).toBeFalsy();
      expect(actuals.multipleQuestionMark.isQuestion()).toBeFalsy();
      expect(actuals.nonWords.isQuestion()).toBeFalsy();
    });
  });
  describe('words', () => {
    const expected = {
      trailingSpace: ['Testing', 'of', 'the', 'properties'],
      multiWord: ['tsTing', 'of', 'the', 'world', 'is'],
      singleWord: ['JINGLe'],
      symbolFilled: ['Jingle',
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
      trailingSpace: 'Testing of the properties ',
      multiWord: 'tsTing of the world is',
      singleWord: 'JINGLe',
      symbolFilled: 'Jingle! Why would tammy, timmy & tola-zest be disobedient?'
    };
    it('Should return array of words contained in inputed string.', () => {
      expect(actuals.trailingSpace.words()).toEqual(expected.trailingSpace);
      expect(actuals.multiWord.words()).toEqual(expected.multiWord);
      expect(actuals.singleWord.words()).toEqual(expected.singleWord);
      expect(actuals.symbolFilled.words()).toEqual(expected.symbolFilled);
    });
  });
  describe('wordCount', () => {
    const actuals = {
      trailingSpace: 'Testing of the properties ',
      multiWord: 'tsTing of the world is',
      singleWord: 'JINGLe'
    };
    it('Should return count of words contained in entered string', () => {
      expect(actuals.trailingSpace.wordCount()).toEqual(4);
      expect(actuals.multiWord.wordCount()).toEqual(5);
      expect(actuals.singleWord.wordCount()).toEqual(1);
    });
    it('Should return \'number\' as data type for returned string', () => {
      expect(typeof (actuals.trailingSpace.wordCount())).toEqual('number');
    });
  });
  describe('toCurrency', () => {
    const actuals = {
      lessThanMillion: '111111.11',
      moreThanMillion: '100255452875.23',
      fiveDecimalPts: '100255452875.23456',
      noDecimalPt: '5006254',
      trailingDecimalPt: '5006254.',
      includesAlpha: '5OO6254',
      multiDecimalPtsJoined: '7767676..45',
      multiDecimalPtsSeparate: '7767676.66.45',
      includesComma: '7767676,6645'
    };
    it('Should return a currency representation of the String', () => {
      expect(actuals.lessThanMillion.toCurrency()).toEqual('111,111.11');
      expect(actuals.moreThanMillion.toCurrency())
      .toEqual('100,255,452,875.23');
      expect(actuals.fiveDecimalPts.toCurrency()).toEqual('100,255,452,875.23');
      expect(actuals.noDecimalPt.toCurrency()).toEqual('5,006,254.00');
      expect(actuals.trailingDecimalPt.toCurrency()).toEqual('5,006,254.00');
    });
    it('Should throw an Error for Bad numbers', () => {
      expect(actuals.includesAlpha.toCurrency)
      .toThrowError('Invalid String');
      expect(actuals.multiDecimalPtsJoined.toCurrency)
      .toThrowError('Invalid String');
      expect(actuals.multiDecimalPtsSeparate.toCurrency)
      .toThrowError('Invalid String');
      expect(actuals.includesComma.toCurrency)
      .toThrowError('Invalid String');
    });
  });
  describe('fromCurrency', () => {
    const actuals = {
      underAMillion: '111,111.11',
      overAMillion: '100,255,452,875.23',
      zeroDecimalValue: '5,006,254.00',
      noDecimalPoint: '5,006,254',
      oneDecimalPlace: '5,006,254.3',
      includesAlpha: '4,455,O00',
      threeDecimalPlaces: '4,455,000.000',
      wrongCommas: '3,342,2333,233.00'
    };
    it('Should return a string representation of the inputed currency', () => {
      expect(actuals.underAMillion.fromCurrency()).toEqual(111111.11);
      expect(actuals.overAMillion.fromCurrency()).toEqual(100255452875.23);
      expect(actuals.zeroDecimalValue.fromCurrency()).toEqual(5006254.00);
      expect(actuals.noDecimalPoint.fromCurrency()).toEqual(5006254);
      expect(actuals.oneDecimalPlace.fromCurrency()).toEqual(5006254.3);
    });
    it('Should confirm that data type of result is \'number\'', () => {
      expect(typeof (actuals.zeroDecimalValue.fromCurrency()))
      .toEqual('number');
    });
    it('Should throw an Error for Bad currency data', () => {
      expect(actuals.includesAlpha.fromCurrency)
      .toThrowError('Invalid String');
      expect(actuals.threeDecimalPlaces.fromCurrency)
      .toThrowError('Invalid String');
      expect(actuals.wrongCommas.fromCurrency)
      .toThrowError('Invalid String');
    });
  });
  describe('inverseCase', () => {
    const actuals = {
      allUpper: 'HALLELUYAH',
      allLower: 'halleluyah',
      mixedCase: 'halleLUYah',
      includesNonAlpha: '5,006,gfhYY254.00',
      noAlpha: '5,006.00'
    };
    it('Should return each letter as an inverse of its current case', () => {
      expect(actuals.allUpper.inverseCase()).toEqual('halleluyah');
      expect(actuals.allLower.inverseCase()).toEqual('HALLELUYAH');
      expect(actuals.mixedCase.inverseCase()).toEqual('HALLEluyAH');
      expect(actuals.includesNonAlpha.inverseCase())
      .toEqual('5,006,GFHyy254.00');
      expect(actuals.noAlpha.inverseCase()).toEqual('5,006.00');
    });
  });
  describe('alternatingCase', () => {
    const actuals = {
      allUpper: 'HALLELUYAH',
      allLower: 'halleluyah',
      mixedCase: 'halleLUYah',
      nonAlpha: '5,006,254.00',
      includesDigit: 'Ore0lUwa'
    };
    it('Should return the letters in alternating case', () => {
      expect(actuals.allUpper.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.allLower.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.mixedCase.alternatingCase()).toEqual('hAlLeLuYaH');
      expect(actuals.nonAlpha.alternatingCase())
      .toEqual('5,006,254.00');
      expect(actuals.includesDigit.alternatingCase())
      .toEqual('oRe0LuWa');
    });
  });
  describe('getMiddle', () => {
    const actuals = {
      evenStringUpper: 'HALLELUYAH',
      oddStringLower: 'halleluyahs',
      evenMixedCase: 'halleLUYah',
      evenNonAlpha: '5,006,254.00'
    };
    it('Should return the character(s) in the middle of the string', () => {
      expect(actuals.evenStringUpper.getMiddle()).toEqual('EL');
      expect(actuals.oddStringLower.getMiddle()).toEqual('l');
      expect(actuals.evenMixedCase.getMiddle()).toEqual('eL');
      expect(actuals.evenNonAlpha.getMiddle()).toEqual(',2');
    });
  });
  describe('numberWords', () => {
    const actuals = {
      three: '3',
      fiftyFour: '54',
      tripleZero: '000',
      allAlpha: 'HALLELUYAH',
      includesAlpha: '00f0'
    };
    it('Should return the numbers in words', () => {
      expect(actuals.three.numberWords()).toEqual('three');
      expect(actuals.fiftyFour.numberWords()).toEqual('five four');
      expect(actuals.tripleZero.numberWords()).toEqual('zero zero zero');
      expect(actuals.allAlpha.numberWords()).toEqual('HALLELUYAH');
      expect(actuals.includesAlpha.numberWords()).toEqual('zero zero fzero');
    });
  });
  describe('isDigit', () => {
    const actuals = {
      three: '3',
      zero: '0',
      fiftyFour: '54',
      allAlpha: 'TEST'
    };
    it('Should return true if the string is a single digit', () => {
      expect(actuals.three.isDigit()).toBeTruthy();
      expect(actuals.zero.isDigit()).toBeTruthy();
    });
    it('Should return false if the string is not a single digit', () => {
      expect(actuals.fiftyFour.isDigit()).toBeFalsy();
      expect(actuals.allAlpha.isDigit()).toBeFalsy();
    });
  });
  describe('doubleCheck', () => {
    const actuals = {
      doubleL: 'HALLELUYAH',
      three: '3',
      double7: '5477',
      doubleSpace: 'ore  banwo'
    };
    it('Should return true if a string contains double characters', () => {
      expect(actuals.doubleL.doubleCheck()).toBeTruthy();
      expect(actuals.double7.doubleCheck()).toBeTruthy();
      expect(actuals.doubleSpace.doubleCheck()).toBeTruthy();
    });
    it('Should return false if no double characters in string', () => {
      expect(actuals.three.doubleCheck()).toBeFalsy();
    });
  });
});
