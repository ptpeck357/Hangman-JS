// Variables defined

var wordBank = ["Cotton Eye Joe", "Backwords", "Chicken Fried", "Lay Low", "Online", "Radio", "Sold", "Cruise", "Wanted", "Unforgettable"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

var guessesleft = 12;

var wins = 0;

var underscore = [];

var confirmkey = false;

// creating dashes for the length of the random word

 	for (var i = 0; i < randomWord.length; i++) {

 			if (randomWord.charAt(i) === ' ') {
 				underscore.push(' ')
 			}

 			else {
 				underscore.push('_')
 			}
}


// Linking the dashes to the HTML homepage

window.onload = function() {

var word = document.getElementById("dash");

word.innerHTML = underscore.join(" ");

console.log(randomWord);

console.log(underscore);
 	

// Determining what key the user pressed

document.onkeydown = function(event) {

 	var userkey = event.key;

 	for (var i = 0; i < alphabet.length; i++) {
 	
 		if(userkey === alphabet[i]) {
 			confirmkey = true;
 			console.log("The user pressed a letter");
 		}
 	}


// Comparing the user key to each letter of the random word

	if (confirmkey = true) {

		var reset = randomWord.toLowerCase();

			for (var i = 0; i < reset.length; i++) {

				if(userkey === reset[i]) {
 	 				confirmletter = true;
 	 				console.log(confirmletter);
 	 			}

				else if(userkey != reset[i]) {
		 	 		confirmletter = false;
		 	 		console.log(confirmletter);
	 	 		}
			}
 	}
}

 // If the user key is correct, replace the dash on the homepage that corresponds to the random word of that position of the letter
 // Then put the letter that the user guessed in the list of "letters already used"

 // If the user key is incorrect, 
 // the "guesses left" goes down and put the user key letter in the list of "letters already used"

 // If all the letters are guess in the random word, then the "Wins" count increases and a new word reappears.
 	 
 // If the guesses left reach 0, game's over.

};


 	