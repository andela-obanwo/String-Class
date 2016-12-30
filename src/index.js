
const extendStringClass = {
  /**
   * Returns true if the string contains vowels.
   * @return {Boolean}
   */

  hasVowels() {
    return /[aeiou]/.test(this);
  },

  /**
   * Returns the String in question but with all characters in upper case.
   * @return {String}
   */

  toUpper() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersar = characters.split('');
    return this.replace(/[a-z]/g, m =>
      charactersar[charactersar.indexOf(m) + 26]
    );
  },

  /**
   * Returns the String in question but with all characters in lower case.
   * @return {String}
   */

  toLower() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersar = characters.split('');
    return this.replace(/[A-Z]/g, m =>
      charactersar[charactersar.indexOf(m) - 26]);
  },
  /**
   * Returns the String in question but with the first characters in upper case.
   * @return {String}
   */

  ucFirst() {
    return this.replace(/[A-Z]/i, m => m.toUpper());
  },
  /**
   * Return true if the string is a question.
   * @return {String}
   */

  isQuestion() {
    return /\?$/.test(this);
  },
  /**
   * Returns a list of the words in the string
   * @return {String};
   */

  words() {
    return this.match(/\w+/g);
  },
  /**
   * Returns the number of words in the string
   * @return {Number}
   */

  wordCount() {
    return this.words().length;
  },
  /**
   * Returns a currency representation of the String
   * @return {String}
   */

  toCurrency() {
    if (/\.\d\d$/.test(this)) {
      return this.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
    const thiss = `${this}.00`;
    return thiss.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },

  /**
   * Returns a number representation of the Currency String
   * @return {Number}
   */

  fromCurrency() {
    return parseFloat(this.replace(/,/g, ''));
  },
  /**
   * Returns each letter as an inverse of its current case
   * @return {String}
   */

  inverseCase() {
    return this.replace(/[a-zA-Z]/g, (m) => {
      if (/[a-z]/.test(m)) {
        return m.toUpper();
      }
      return m.toLower();
    });
  },
  /**
   * Returns the letters in alternating case
   * @return {String}
   */

  alternatingCase() {
    if (/[^a-zA-Z]/.test(this)) {
      return 'Invalid String';
    }
    let lower = true;
    return this.replace(/[a-zA-Z]/g, (m) => {
      if (lower) {
        lower = !lower;
        return m.toLower();
      }
      lower = !lower;
      return m.toUpper();
    });
  },
  /**
   * Returns the character(s) in the middle of the string
   * @return {String}
   */

  getMiddle() {
    if (this.length % 2 === 0) {
      const middle = [this.length / 2, (this.length / 2) - 1];
      let count = 0;
      return this.replace(/./g, (m) => {
        if (count === middle[0] || count === middle[1]) {
          count += 1;
          return m;
        }
        count += 1;
        return '';
      });
    }
    const middle = Math.floor(this.length / 2);
    let count = 0;
    return this.replace(/./g, (m) => {
      if (count === middle) {
        count += 1;
        return m;
      }
      count += 1;
      return '';
    });
  },
  /**
   * Returns the numbers in words
   * @return {String}
   */

  numberWords() {
    if (/[a-zA-Z]/.test(this)) {
      return 'Invalid String';
    }
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
    let count = 1;
    const thiss = this;
    return this.replace(/[0-9]/g, (m) => {
      if (thiss.length > 1) {
        if (count === thiss.length) {
          return `${matchTable[m]}`;
        }
        count += 1;
        return `${matchTable[m]} `;
      }
      return matchTable[m];
    });
  },

/**
 * Returns true if the string is a digit
 * @return {Boolean}
 */

  isDigit() {
    if (/\d?/.test(this) && this.length === 1) {
      return true;
    }
    return false;
  },
  /**
   * Returns true if a string contains double characters
   * @return {Boolean}
   */

  doubleCheck() {
    return /(.)\1/g.test(this);
  }

};

Object.assign(String.prototype, extendStringClass);
