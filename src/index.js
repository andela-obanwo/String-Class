
const extendStringClass = {
  
  hasVowels() {
   return /[aeiou]/.test(this);
  },
  
//   Methods
// hasVowels (typeof Boolean): Returns true if the string contains vowels. This method must implement Regular Expression.

// toUpper (typeof String): Returns the String in question but with all characters in upper cases as applicable. This method should be implemented without the use of the toUpperCase internal methods.
  toUpper() {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersar = characters.split('');
    return this.replace(/[a-z]/g, function(m){
     return charactersar[charactersar.indexOf(m)+ 26];
   });
  },

// toLower (typeof String): Returns the String in question but with all characters in their lower cases as applicable. This method should be implemented without the use of the toLowerCase internal methods.
  toLower() {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersar = characters.split('');
    return this.replace(/[A-Z]/g, function(m){
     return charactersar[charactersar.indexOf(m)- 26];
   });
  },
// ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. Make use of your toUpper method above to implement this method or a one-liner.
ucFirst() {
    return this.replace(/[A-Z]/i, function(m){
     return m.toUpper();
   });
  },

// isQuestion (typeof Boolean): Return true if the string is a question (ending with a question mark). This method must implement Regular Expression.
isQuestion() {
    return /\?$/.test(this);
  },
// words (typeof Object, instanceof Array): Returns a list of the words in the string, as an Array. This method must implement Regular Expression.
words() {
  return this.match(/\w+/g);

},

// wordCount (typeof Number): Returns the number of words in the string. It must make use of the words method above.
wordCount() {
  return this.words().length;
},
// toCurrency (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.
toCurrency() {
   if (/\.\d\d$/.test(this)){
      return this.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }else {
      let thiss = `${this}.00`;
   return thiss.replace(/(\d)(?=(\d{3})+\.)/g, '$1,'); 
    }
},
// fromCurrency (typeof Number): Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11
fromCurrency() {
   return parseFloat(this.replace(/,/g, ''));
  },
// inverseCase (typeof String): Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.
inverseCase() {
    return this.replace(/[a-zA-Z]/g, function(m) {
      if (/[a-z]/.test(m)){
        return m.toUpper();
      } else {
        return m.toLower();
      }
   });
  },
// alternatingCase (typeof String): Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.
alternatingCase() {
  if(/[^a-zA-Z]/.test(this)) {
    return 'Invalid String';
  }
  let lower = true;
  return this.replace(/[a-zA-Z]/g, function (m) {
    if (lower){
      lower = !lower;
      return m.toLower();
    } else {
      lower = !lower;
      return m.toUpper();
    }
  });
},
// getMiddle (typeof String): Returns the character(s) in the middle of the string e.g read should return ea and reads should return a.
getMiddle() {
  if (this.length % 2 === 0) {
    const middle = [this.length/2, (this.length/2) - 1]
    let count = 0
    return this.replace(/./g, function (m) {
      if (count === middle[0] || count === middle[1]) {
        count += 1;
        return m;
      } else {
        count += 1;
        return '';
      }
    })
  } else {
    const middle = Math.floor(this.length/2)
    let count = 0
    return this.replace(/./g, function (m) {
      if (count === middle) {
        count += 1;
        return m;
      } else {
        count += 1;
        return '';
      }
    })
  }
},
// numberWords (typeof String): Returns the numbers in words e.g 325 should return three two five.
numberWords() {
  const matchTable = {
    1:'one ',
    2:'two ',
    3:'three ',
    4:'four ',
    5:'five ',
    6:'six ',
    7:'seven ',
    8:'eight ',
    9:'nine ',
    0:'zero '
  }
  return this.replace(/[0-9]/g, function (m) {
    return matchTable.m;
  });
}

// isDigit (typeof Boolean): Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This method must implement Regular Expression.

// doubleCheck (typeof Boolean): Returns true if a string contains double characters(including whitespace character) e.g aa, !!, should return true.

  
};

Object.assign(String.prototype, extendStringClass);