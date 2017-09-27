// Variables defined
window.onload = function() {

var wordBank = ["Backwords", "Online", "Radio", "Sold", "Cruise", "Wanted", "Unforgettable", "Stay", "Vacation", "Beaching"];

var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

var guessesleft = 12;

var wins = 0;

var underscore = [];

var flag = false;

var stop = 0;


// creating dashes for the length of the random word
	
 	for (var i = 0; i < randomWord.length; i++) {
 				underscore.push('_')
	}


// Linking the dashes to the HTML homepage
var underline = document.getElementById("dash");

underline.innerHTML = underscore.join(" ");

console.log(randomWord);

console.log(underscore);


// Determining what key the user pressed
document.onkeydown = function(event) {

 	var userkey = event.key;

 	var lowercaseword = randomWord.toLowerCase();

 	var str = document.getElementById("lettersalreadyguessed");

	var pelement = document.createElement("p");

	var current = document.getElementById("currentword");

	var guessescorrect = document.createElement("p");


 	for (var i = 0; i < alphabet.length; i++) {
 	
 		if(userkey === alphabet[i]) {
 			flag = true;
 			console.log("Its a letter");
 		}
 	}

 	
// Comparing the user key to each letter of the random word

/* If the user key is correct, replace the dash on the homepage that corresponds to the 
 random word of that position of the letter*/
	if(flag = true){

		// Figure how to add letters without creating whole new element
	 	for (var i = 0; i < lowercaseword.length; i++) {

			if(userkey === lowercaseword[i]) {		
				guessescorrect.innerHTML = userkey;
				current.appendChild(guessescorrect);
				stop = 1;
	 	 	}
	 	 }

		if(stop = 0){
			guessesleft--;
			console.log(guessesleft)
		}


// If the letter the user inputed is correct or incorrect, put it in the list of "Letters already guessed"
		if((stop = 1) || (stop = 0)) {
		 	pelement.innerHTML= userkey;
		 	str.appendChild(pelement);
		 }
	}

// If the user key is incorrect.

		

 

// If all the letters are guess in the random word, then the "Wins" count increases and a new word reappears.
 	 
// If the guesses left reach 0, game's over.

 }



};

 







 	