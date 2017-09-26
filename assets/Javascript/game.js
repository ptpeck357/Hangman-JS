
var wordBank = ["Cotton Eye Joe", "Backwords", "Chicken Fried", "Lay Low", "Online", "Radio", "Sold", "Cruise", "Wanted", "Unforgettable"];

var randNum = wordBank[Math.floor(Math.random() * wordBank.length)];

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

var randomWord = randNum;

var guessesleft = 12;

var wins = 0;

var underscore = [];


// creating dashes for the length of the random word

 	for (var i = 0; i < randomWord.length; i++) {
 			if (randomWord.charAt(i) === ' ') {
 				underscore.push(' ')
 			}

 			else {
 				underscore.push('_');
 			}
};


// Linking the dashes to the HTML homepage

window.onload = function() {

var word = document.getElementById("dash");

word.innerHTML = underscore;

console.log(randomWord);

console.log(underscore);
 	

// Determining what key the user pressed
 document.onkeydown = function(event) {

 	var userkey = event.key;
 		if(userkey = alphabet) {
 	alert(userkey);
 	};

// Comparing the user letter guess to each letter of the random word


var reset = randomWord.toLowerCase();

 	 	if(userkey === reset[i]){

 	 		console.log("it works");

 	 	}

 	 	else if (userkey !== reset[i]){

 	 		guessesleft--;

 	 		console.log(guessesleft);

 	 		console.log("Wrong guess")
 	 	}

 	 
};
};

 	