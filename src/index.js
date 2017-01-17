
const extendStringClass = {

  /**
   * Returns true if the string contains vowels.
   * @return {Boolean} returns a boolean of the strings 'hasVowels' status
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * Returns an Array of the upper and lower case alphabets.
   * @return {Array} returns an Array of the english alphabets
   */
  characters() {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('');
  },

  /**
   * Returns the String in question but with all characters in upper case.
   * @return {String} returns an uppercase string version of input
   */
  toUpper() {
    return this.replace(/[a-z]/g, char =>
      ''.characters()[''.characters().indexOf(char) + 26]
    );
  },

  /**
   * Returns the String in question but with all characters in lower case.
   * @return {String} returns a lowercase string version of input
   */
  toLower() {
    return this.replace(/[A-Z]/g, char =>
      ''.characters()[''.characters().indexOf(char) - 26]);
  },

  /**
   * Returns the String in question but with the first characters in upper case.
   * @return {String} Returns a string with an Uppercase first character
   */
  ucFirst() {
    return this.replace(/[A-Z]/i, char => char.toUpper());
  },

  /**
   * Return true if the string is a question.
   * @return {Boolean} Returns a boolean of the strings 'isQuestion' status
   */
  isQuestion() {
    return /^\w+[^?]*\?$/.test(this);
  },

  /**
   * Returns a list of the words in the string
   * @return {Array} retruns an Array of words in string
   */
  words() {
    return this.match(/\w+/g);
  },

  /**
   * Returns the number of words in the string
   * @return {Number} returns a number representing count of words
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * Returns a currency representation of the String
   * @return {String} returns the currency representation of entered string
   */
  toCurrency() {
    if (/[^\d.]/.test(this) || /\..*\./.test(this)) {
      throw new Error('Invalid String');
    }
    return Number(this).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },

  /**
   * Returns a number representation of the Currency String
   * @return {Number} returns the number version of entered currency
   */
  fromCurrency() {
    if (/[^\d,.]/.test(this) ||
    !((/(\d{1,3},)(?=(\d{3})+(\.\d{1,2}$)?)/g).test(this))) {
      throw new Error('Invalid String');
    } else {
      return parseFloat(this.replace(/,/g, ''));
    }
  },

  /**
   * Returns each letter as an inverse of its current case
   * @return {String} returns a string with the case of every letter inverted
   */
  inverseCase() {
    return this.replace(/[a-z]/ig, (char) => {
      if (/[a-z]/.test(char)) {
        return char.toUpper();
      }
      return char.toLower();
    });
  },

  /**
   * Returns the letters in alternating case
   * @return {String} returns input String in a sequence of lower and Upper Case
   */
  alternatingCase() {
    let lower = true;
    return this.replace(/[a-z]/ig, (char) => {
      if (lower) {
        lower = !lower;
        return char.toLower();
      }
      lower = !lower;
      return char.toUpper();
    });
  },

  /**
   * Returns the character(s) in the middle of the string
   * @return {String} returns single or double middle character(s) of string
   */
  getMiddle() {
    const length = this.length;
    const halfLength = length / 2;
    if (length % 2 === 0) {
      const middle = [halfLength, halfLength - 1];
      return this.replace(/./g, (char, count) =>
        (count === middle[0] || count === middle[1] ?
        char : '')
      );
    }
    const middle = Math.floor(halfLength);
    return this.replace(/./g, (char, count) =>
      (count === middle ? char : '')
    );
  },

  /**
   * Returns the numbers in words
   * @return {String} returns a text representation of entered digits
   */
  numberWords() {
    const matchTable = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      0: 'zero'
    };
    const length = this.length;
    return this.replace(/[0-9]/g, (char, count) =>
      (length === 1 || count === length - 1 ?
        matchTable[char] : `${matchTable[char]} `)
    );
  },

  /**
   * Returns true if the string is a digit
   * @return {Boolean} rreturns a boolean of the strings 'isDigit' status
   */
  isDigit() {
    return /\d?/.test(this) && this.length === 1;
  },

  /**
   * Returns true if a string contains double characters
   * @return {Boolean} returns a boolean of the strings 'doubleCheck' status
   */
  doubleCheck() {
    return /(.)\1/g.test(this);
  }

};

Object.assign(String.prototype, extendStringClass);
