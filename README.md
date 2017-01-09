[![Coverage Status](https://coveralls.io/repos/github/andela-obanwo/String-Class/badge.svg?branch=develop)](https://coveralls.io/github/andela-obanwo/String-Class?branch=develop)
[![Build Status](https://travis-ci.org/andela-obanwo/String-Class.svg?branch=develop)](https://travis-ci.org/andela-obanwo/String-Class)
[![Code Climate](https://codeclimate.com/github/andela-obanwo/String-Class/badges/gpa.svg?branch=develop)](https://codeclimate.com/github/andela-obanwo/String-Class?branch=develop)
[![Issue Count](https://codeclimate.com/github/andela-obanwo/String-Class/badges/issue_count.svg)](https://codeclimate.com/github/andela-obanwo/String-Class)

# String-Class
### Extends 'String' Class via prototype oriented programming

## Installation, Tests and Usage
* Download the zip file for or clone this repository
* cd String-Class
* run 'npm install' to install required packages
* run 'npm test' to run tests
* Require 'src/index.js' in your code and call the methods as required

## Methods
* **hasVowels _(typeof Boolean):_**
  Returns true if the string contains vowels.

* **toUpper _(typeof String):_**
  Returns the String in question but with all characters in upper cases as applicable.

* **toLower _(typeof String):_**
  Returns the String in question but with all characters in their lower cases as applicable.

* **ucFirst _(typeof String):_**
  Returns the String in question but changes the First Character to an Upper case.

* **isQuestion _(typeof Boolean):_**
  Return true if the string is a question (ending with a question mark).

* **words _(typeof Object, instanceof Array):_**
  Returns a list of the words in the string, as an Array.

* **wordCount _(typeof Number):_**
  Returns the number of words in the string.

* **toCurrency _(typeof String)_**
  Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

* **fromCurrency (typeof Number):_**
  Returns a number representation of the Currency String e.g 11,111.11 should return 11111.11

* **inverseCase _(typeof String):_**
  Returns each letter in the string as an inverse of its current case e.g Mr. Ben should return mR. bEN.

* **alternatingCase _(typeof String):_**
  Returns the letters in alternating cases. It must start with a lower case e.g Onomatopoeia should return oNoMaToPoEiA.

* **getMiddle _(typeof String):_**
  Returns the character(s) in the middle of the string e.g read should return ea and reads should return a.

* **numberWords _(typeof String):_**
  Returns the numbers in words e.g 325 should return three two five.

* **isDigit _(typeof Boolean):_**
  Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false.

* **doubleCheck _(typeof Boolean):_**
  Returns true if a string contains double characters(including whitespace character) e.g aa, !!, should return true.

## Technologies Used
* Javascript (ES6)
* Jasmine
* Karma
* Node.js

## Limitations
This app does not run in a Web browser.
