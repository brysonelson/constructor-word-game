var underscores = [];

// var gameLoaded = false;

var Letter = function(character) {
	// A string value to store the underlying character for the letter
	this.character = character.toLowerCase();
	// A boolean value that stores whether that letter has been guessed yet
	this.letterGuessedCorrectly = false;
	// A function that returns the underlying character if the letter has been guessed, 
	//or a placeholder (like an underscore) if the letter has not been guessed
	this.showCharacter = function() {
		
		if (this.letterGuessedCorrectly) {
			console.log(this.character);
			// underscores.push(this.character);
			
		}
		else {
			// underscores.push("_");
			console.log ("_");
		};

		// if (gameLoaded === true && underscores.length > 3) {
		// console.log (underscores);
		// };

		// gameLoaded = true;
		
	};
};

module.exports = Letter;
// module.exports = underscores;