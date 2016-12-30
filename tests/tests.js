/* eslint-disable no-undef*/
describe('String Class Extra Methods', () => {
  it('Should return True if the string contains vowels', () => {
    expect('Testing'.hasVowels()).toEqual(true);
    expect('tstng'.hasVowels()).toEqual(false);
  });

  it('Should return uppercase string for all passed in data', () => {
    expect('Testing'.toUpper()).toEqual('TESTING');
    expect('tsTing'.toUpper()).toEqual('TSTING');
    expect('JINGLE'.toUpper()).toEqual('JINGLE');
    expect('jingl55E'.toUpper()).toEqual('JINGL55E');
  });

  it('Should return lowercase string for all passed in strings', () => {
    expect('testing'.toLower()).toEqual('testing');
    expect('tsTing'.toLower()).toEqual('tsting');
    expect('JINGLE'.toLower()).toEqual('jingle');
    expect('jiNgl55E'.toLower()).toEqual('jingl55e');
  });

  it('Should return string with first character in uppercase', () => {
    expect('Testing'.ucFirst()).toEqual('Testing');
    expect('tsTing'.ucFirst()).toEqual('TsTing');
    expect('jingle'.ucFirst()).toEqual('Jingle');
  });

  it('Should return true if a string is a question', () => {
    expect('Testing?'.isQuestion()).toEqual(true);
    expect('tsTing isn\'t it?'.isQuestion()).toEqual(true);
    expect('JINGLE'.isQuestion()).toEqual(false);
  });

  const wordsResult1 = ['Testing', 'of', 'the', 'properties'];
  const wordsResult2 = ['tsTing', 'of', 'the', 'world', 'is'];
  const wordsResult3 = ['JINGLe'];
  it('Should return an array of the words contained in inputed string.', () => {
    expect('Testing of the properties '.words()).toEqual(wordsResult1);
    expect('tsTing of the world is'.words()).toEqual(wordsResult2);
    expect('JINGLe'.words()).toEqual(wordsResult3);
  });

  it('Should return count of words contained in entered string', () => {
    expect('Testing of the properties '.wordCount()).toEqual(4);
    expect('tsTing of the world is'.wordCount()).toEqual(5);
    expect('JINGLe'.wordCount()).toEqual(1);
    expect(typeof ('tsing is the world'.wordCount())).toEqual('number');
  });

  it('Should return a currency representation of the String', () => {
    expect('111111.11'.toCurrency()).toEqual('111,111.11');
    expect('100255452875.23'.toCurrency()).toEqual('100,255,452,875.23');
    expect('5006254'.toCurrency()).toEqual('5,006,254.00');
  });

  it('Should return a string representation of the inputed currency', () => {
    expect('111,111.11'.fromCurrency()).toEqual(111111.11);
    expect('100,255,452,875.23'.fromCurrency()).toEqual(100255452875.23);
    expect('5,006,254.00'.fromCurrency()).toEqual(5006254.00);
    expect('5,006,254.00'.fromCurrency()).toEqual(5006254.00);
    expect(typeof ('3,555,33.00'.fromCurrency())).toEqual('number');
  });

  it('Should return each letter as an inverse of its current case', () => {
    expect('HALLELUYAH'.inverseCase()).toEqual('halleluyah');
    expect('halleluyah'.inverseCase()).toEqual('HALLELUYAH');
    expect('halleLUYah'.inverseCase()).toEqual('HALLEluyAH');
    expect('5,006,gfhYY254.00'.inverseCase()).toEqual('5,006,GFHyy254.00');
  });

  it('Should return the letters in alternating case', () => {
    expect('HALLELUYAH'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('halleluyah'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('halleLUYah'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('5,006,254.00'.alternatingCase()).toEqual('Invalid String');
  });

  it('Should return the character(s) in the middle of the string', () => {
    expect('HALLELUYAH'.getMiddle()).toEqual('EL');
    expect('halleluyahs'.getMiddle()).toEqual('l');
    expect('halleLUYah'.getMiddle()).toEqual('eL');
    expect('5,006,254.00'.getMiddle()).toEqual(',2');
  });

  it('Should return the numbers in words', () => {
    expect('HALLELUYAH'.numberWords()).toEqual('Invalid String');
    expect('3'.numberWords()).toEqual('three');
    expect('54'.numberWords()).toEqual('five four');
    expect('000'.numberWords()).toEqual('zero zero zero');
  });

  it('Should return true if the string is a single digit', () => {
    expect('HALLELUYAH'.isDigit()).toEqual(false);
    expect('3'.isDigit()).toEqual(true);
    expect('54'.isDigit()).toEqual(false);
    expect('0'.isDigit()).toEqual(true);
    expect('TEST'.isDigit()).toEqual(false);
  });

  it('Should return true if a string contains double characters', () => {
    expect('HALLELUYAH'.doubleCheck()).toEqual(true);
    expect('3'.doubleCheck()).toEqual(false);
    expect('5477'.doubleCheck()).toEqual(true);
    expect('ore  banwo'.doubleCheck()).toEqual(true);
  });
});
