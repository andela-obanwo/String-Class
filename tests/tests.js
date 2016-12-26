
// Methods
// hasVowels (typeof Boolean): Returns true if the string contains vowels. This method must implement Regular Expression.
describe("String Class Extra Methods", () => {
  it("Should return True if the string contains vowels", () => {
    expect('Testing'.hasVowels()).toEqual(true);
    expect('tsting'.hasVowels()).toEqual(false);
  });

  // toUpper (typeof String): Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of the toUpperCase internal methods.
  it("Should return uppercase string for all passed in data", () => {
    expect('Testing'.toUpper()).toEqual("TESTING");
    expect('tsTing'.toUpper()).toEqual("TSTING");
    expect('JINGLE'.toUpper()).toEqual("JINGLE");
    expect('jingl55E'.toUpper()).toEqual("JINGL55E");

  });

  // toLower (typeof String): Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of the toLowerCase internal methods.
  it("Should return lowercase string for all passed in strings", () => {
    expect('testing'.toLower()).toEqual("testing");
    expect('tsTing'.toLower()).toEqual("tsting");
    expect('JINGLE'.toLower()).toEqual("jingle");
    expect('jiNgl55E'.toUpper()).toEqual("jingl55e");
  });
  // ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
  it("Should return string with first character in uppercase", () => {
    expect('Testing'.ucFirst()).toEqual("TESTING");
    expect('tsTing'.ucFirst()).toEqual("TSTING");
    expect('jingle'.ucFirst()).toEqual("JINGLE");
  });
  // isQuestion (typeof Boolean): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
  it("Should return true if a string is a question", () => {
    expect('Testing?'.isQuestion()).toEqual(true);
    expect('tsTing isn\'t it?'.isQuestion()).toEqual(true);
    expect('JINGLE'.isQuestion()).toEqual(false);
  });
  // words (typeof Object, instanceof Array): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
     const wordsResult1 = ['Testing', 'of', 'the', 'properties'];
     const wordsResult2 = ['tsTing', 'of', 'the', 'world', 'is'];
     const wordsResult3 = ['JINGLe'];
  it("Should return an array of the words contained in inputed string.", () => {
    expect('Testing of the properties '.words()).toEqual(wordsResult1);
    expect('tsTing of the world is'.words()).toEqual(wordsResult2);
    expect('JINGLe'.words()).toEqual(wordsResult3);
  });
  // wordCount (typeof Number): Returns the number of words in the string. It must make use of the words method above.
  it("Should return count of words contained in entered string", () => {
    expect('Testing of the properties '.wordCount()).toEqual(4);
    expect('tsTing of the world is'.wordCount()).toEqual(5);
    expect('JINGLe'.wordCount()).toEqual(1);
  });
  // toCurrency (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.
  it("Should return a currency representation of the String", () => {
    expect('111111.11'.toCurrency()).toEqual('111,111.11');
    expect('100255452875.23'.toCurrency()).toEqual('100,255,452,875.23');
    expect('5006254'.toCurrency()).toEqual('5,006,254.00');
  });
  // fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
  it("Should return a string representation of the inputed currency", () => {
    expect('111,111.11'.fromCurrency()).toEqual('111111.11');
    expect('100,255,452,875.23'.fromCurrency()).toEqual('100255452875.23');
    expect('5,006,254.00'.fromCurrency()).toEqual('5006254.00');
    expect('5,006,254.00'.fromCurrency()).toEqual('5006254.00');
  });
  // inverseCase (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
  it("Should return each letter in the string as an inverse of its current case", () => {
    expect('HALLELUYAH'.inverseCase()).toEqual('halleluyah');
    expect('halleluyah'.inverseCase()).toEqual('HALLELUYAH');
    expect('halleLUYah'.inverseCase()).toEqual('HALLEluyAH');
    expect('5,006,254.00'.inverseCase()).toEqual('5006254.00');
  });
  // alternatingCase (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
  it("Should return each letter in the string as an inverse of its current case", () => {
    expect('HALLELUYAH'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('halleluyah'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('halleLUYah'.alternatingCase()).toEqual('hAlLeLuYaH');
    expect('5,006,254.00'.alternatingCase()).toEqual('Invalid String');
  });
  // getMiddle (typeof String): Returns the character(s) in the middle of the string e.g read should return ea and reads should return a.
  it("Should return each letter in the string as an inverse of its current case", () => {
    expect('HALLELUYAH'.getMiddle()).toEqual('EL');
    expect('halleluyahs'.getMiddle()).toEqual('l');
    expect('halleLUYah'.getMiddle()).toEqual('eL');
    expect('5,006,254.00'.getMiddle()).toEqual(',2');
  });
  // numberWords (typeof String): Returns the numbers in words e.g 325 should return three two five.
  it("Should return the numbers in words", () => {
    expect('HALLELUYAH'.numberWords()).toEqual('Invalid String');
    expect('3'.numberWords()).toEqual('three');
    expect('54'.numberWords()).toEqual('five four');
    expect('000'.numberWords()).toEqual('zero zero zero');
  });
  // isDigit (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.
  it("Should return true if the string is a single digit", () => {
    expect('HALLELUYAH'.numberWords()).toEqual(false);
    expect('3'.numberWords()).toEqual(true);
    expect('54'.numberWords()).toEqual(false);
    expect('0'.numberWords()).toEqual(true);
  });

  // doubleCheck (typeof Boolean): Returns true if a string contains double characters(including whitespace character) e.g aa, !!, should return true.
  it("Should return true if a string contains double characters", () => {
    expect('HALLELUYAH'.doubleCheck()).toEqual(true);
    expect('3'.doubleCheck()).toEqual(false);
    expect('5477'.doubleCheck()).toEqual(true);
    expect('ore  banwo'.doubleCheck()).toEqual(true);
  });
});