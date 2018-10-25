//This file requires the Word.js file
var Word = require("./Word.js");
var Letter = require("./Letter.js");

//Game requires inquirer npm package to prompt user to enter a letter.
var inquirer = require("inquirer");

//words to choose from
var wordBank = ["dog", "cat", "bird"];
var randomWord;
var userCurrentWord;

//keep track of wins, loses, and guessesRemaining
var wins = 0;
var loses = 0;
var guessesRemaining = 8;

//letters already guessed
var lettersGuessedArr = [];

function confirmStart() {
	var readyToStartGame = inquirer.prompt([
	 {
	 	type: 'text',
	 	name: 'playerName',
	 	message: 'Whats your name?'
	 },
	 {
    type: 'confirm',
    name: 'readyToPlay',
    message: 'Ready to play?',
    default: true
    }
	]
	).then(function(startAnswers) {
		//If the user confirms that they want to play, start game.
		if (startAnswers.readyToPlay){
			console.log("\n-------------------\nWelcome, " + startAnswers.playerName + "! Let's play!\n-------------------\n");
			startGame();
		}

		else {
			//If the user decides they don't want to play, exit game.
			console.log("\n-------------------\nGood bye, " + answers.playerName + "\n-------------------\n");
			return;
		}
	});
}

function startGame() {
  guessesRemaining = 10;

  chooseWord();
}

confirmStart();

function chooseWord() {
  randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
  userCurrentWord = new Word(randomWord);
	userCurrentWord.splitLetters();
	userCurrentWord.generateLetters();
	// console.log(userCurrentWord);
	// console.log(randomWord);
	guessLetter();
}

var correctArr = [];

function guessLetter() {
	//need an if statement here that only runs this inquirer prompt if word is not guessed
	//and guessesRemaining is greater than 0
	if (guessesRemaining > 0 && correctArr.length != userCurrentWord.currentLettersArr.length) {
		
	inquirer.prompt([
		{
			type: 'text',
			name: 'playerGuess',
			message: 'Guess a letter'
		},
	]).then(function(response) {

		//i need a for and if statement to loop through the letters array and 
		//decide if the players guess is correct.
		if (lettersGuessedArr.indexOf(response.playerGuess) < 0){
			//decrement remaining guesses
			guessesRemaining--;
			lettersGuessedArr.push(response.playerGuess);
			for (var i = 0; i < userCurrentWord.currentLettersArr.length; i++) {
			
				userCurrentWord.currentLettersArr[i].showCharacter();
				if (response.playerGuess === userCurrentWord.currentLettersArr[i].character) {
					// userCurrentWord.currentLettersArr[i].character = response.playerGuess
					userCurrentWord.currentLettersArr[i].letterGuessedCorrectly = true;
					// console.log(userCurrentWord);
					correctArr.push(userCurrentWord.currentLettersArr[i].character);
				}
			}
		} else {
			console.log("\n-------------------\nYou've already guessed that letter. Try again...\n-------------------\n");
		}
		console.log("\n-------------------\nLetters Guessed: " + lettersGuessedArr);
		console.log("Guesses Remaining: " + guessesRemaining);
		console.log("Correct Letters: " + correctArr + "\n-------------------\n");
		// userCurrentWord.generateLetters();

		//also need something that changed the this.letterGuessedCorrectly from Letter
		//to True once guessed.
		guessLetter();
	})
}
}

// if (correctArr.length === userCurrentWord.currentLettersArr.length) {

// }
