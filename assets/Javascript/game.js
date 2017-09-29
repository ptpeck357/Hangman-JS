// Variables defined
var wordBank = ["backwords", "online", "radio", "sold", "cruise", "wanted", "unforgettable", "stay", "vacation", "beaching"];

var randomWord = "";

var lettersInWord = [];

//holds number of blanks in solution
var numBlanks = 0;

var underscore = [];

// Holds all of the wrong guesses
var wrongGuesses = [];

var wins = 0;

var turns = 12;

function startGame() {
	//HERE YOU MAKE SURE THAT YOU EARLIER ROUNDS OF CODE DON'T AFFECT YOUR VARIABLES
			// CRITICAL LINE - Here we *reset* LETTERSINWORD array at each round.
		  	lettersInWord = [];

		  	// CRITICAL LINE - Here we *reset* the wrong guesses from the previous round.
		  	wrongGuesses = [];

		  	// Here we reset the number of guesses the user has remaining before they loose
		  	turns = 12;

		  	document.getElementById("turns")
		  	turns.innerHTML=turns;

	//THIS IS WHERE YOU SELECT A RANDOM WORD FROM YOUR WORD BANK
	randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	//YOU TOOK THE WORD AND SPLIT IT INTO INDIVIDUAL LETTERS
	underscore = randomWord.split ("");
	console.log("underscore:" + underscore);

	//DETERMINE LENGTH OF WORD HERE WITH .LENGTH AND SET IT TO VAR NUMBLANKS
	numBlanks = underscore.length;
	console.log("numblanks" + numBlanks);

	// creating dashes for the length of the random word
	
 	for (var i = 0; i < randomWord.length; i++) {
 		lettersInWord.push("_");
	}

	console.log(lettersInWord);

	//INSERT INTO HTML DASHES & WRONG GUESSES

	// Linking the dashes to the HTML homepage
	var underline = document.getElementById("dash")
	underline.innerHTML = lettersInWord.join (" ");

	// Clears the wrong guesses from the previous round
  	document.getElementById("lettersalreadyguessed").innerHTML = wrongGuesses.join(" ");

}

// Determining what key the user pressed
document.onkeydown = function(event) {
	var userkey = event.key;
	console.log(userkey);
	checkLetters(userkey);
}

// Checks the user's letter to see if it's a letter or not
function checkLetters(userkey) {
	var flag = false;
	for (var i = 0; i < numBlanks; i++) {
 	
 		if(randomWord[i] === userkey) {
 			flag = true;
 			console.log("It's a letter");
 		}
 	}


	// If the letter exists somewhere in the word, then figure out exactly where (which indices).
	  if (flag) {

	    // Loop through the word.
	    for (var i = 0; i < numBlanks; i++) {

	      // Populate the blanksAndSuccesses with every instance of the letter.
	      if (randomWord[i] === userkey) {
	        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
	        lettersInWord[i] = userkey;
	      }
	    }
	    // Logging for testing.
	    console.log(lettersInWord);
	  }
	  // If the letter doesn't exist at all...
	  else {

	  	//Make sure the letters don't overlap in the list of wrong letters
	    if(userkey !== wrongGuesses[i]){

	    // ..then we add the letter to the list of wrong letters, and we subtract one of the guesses.
	    wrongGuesses.push(userkey);

	    // numGuesses--;
	    turns--;
  		document.getElementById("turns").innerHTML = turns;
  		}	
	  }

	  roundComplete();

}

function roundComplete() {

  document.getElementById("dash").innerHTML = lettersInWord.join(" ");


  // This will print the wrong guesses onto the page.
  document.getElementById("lettersalreadyguessed").innerHTML = wrongGuesses.join(" ");


	// If we have gotten all the letters to match the solution...
  if (lettersInWord.toString() === underscore.toString()) {

	    // ..add to the win counter & give the user an alert.
		alert("You win");
		console.log("You win!");

		//add to wins
		wins++;
		document.getElementById("ptsinceasing").innerHTML=wins;
		
		// Variable where we ask if the user wants to play again
		var confirmplay = confirm("Do you want to play again?")

		   if(confirmplay) {
		    startGame();
		}
	}

	// include condition where you won't win. this would be. turns === 0 so you lose and then startGame();
	

	  	if (turns==0) {
	  		alert("You loose")
			var declineplay = confirm("Do you want to play again?")
	  	} 

	  	if (declineplay) {
	  		startGame();
	  	}
}

//CALL STARTGAME FUNCTION
startGame();
