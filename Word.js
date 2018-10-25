//This file requires the Word.js file
var Letter = require("./Letter.js");

var Word = function(currentWord){
  this.currentWord = currentWord,

  this.currentLettersArr = [],

  this.splitLetters = function() {
    this.currentLettersArr = this.currentWord.split("");
    console.log(this.currentLettersArr);
  },

  this.generateLetters = function() {
		for (i=0; i < this.currentLettersArr.length; i++){
			this.currentLettersArr[i] = new Letter(this.currentLettersArr[i]);
			
      this.currentLettersArr[i].showCharacter();
    }
    // console.log (Letter.underscores);
  
  };
};

module.exports = Word;