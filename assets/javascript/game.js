
// counts the number of wins
var wins = 0;
// counts the number of loses
var losses = 0;
// counts the number of guesses left
var numOfGuesses = 12;
// Array that holds the guesses so far
var guessSoFar = [];

var words = ["nirvana", "semisonic", "beck","oasis","radiohead","chumbawamba", "tupac", "coolio","soundgarden","greenday","pixes","sublime","jayz","outkast","nas"];

var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');

var computerChoice = words[Math.floor(Math.random()*words.length)];

var emptyString = [];

var charCounter = 0;


function reset() {
	numOfGuesses = 12;
	guessSoFar = [];
	computerChoice = words[Math.floor(Math.random()*words.length)];
	emptyString = [];
	charCounter = 0;
	addSpaces(computerChoice,emptyString);
	console.log(computerChoice);
} // This function will reset the game values

function addSpaces(band, arry){
	 for(var i = 0; i < band.length; i++){
		 arry.push("__");
 } // for loop takes the array
} // addSpaces is a function that will push "_" to the length of the band that is chosen.

addSpaces(computerChoice, emptyString);

console.log(computerChoice)
console.log(emptyString);
	

// start of the program even
document.onkeyup = function(event){
		// Logs in the users key press
		var userGuess = event.key.toLowerCase();


		if(alphabetArray.indexOf(userGuess) === -1){
				alert("Choose an actual key");
		} // makes sure you select an actual letter
			else if (numOfGuesses === 0) {
					losses++;
					alert("This was the band you missed: " + computerChoice);
					reset();
					} // checks to see if num of guesses is 0	
						else if(guessSoFar.indexOf(userGuess) === -1){
									numOfGuesses--;
									guessSoFar.push(userGuess);

								if(computerChoice.indexOf(userGuess) !== -1) {
									numOfGuesses++;

									for( var i = 0; i < computerChoice.length; i++){
									// starts looping through compchoice string
										if(userGuess === computerChoice.charAt(i)){
											charCounter++;									
											emptyString.splice(i,1,userGuess);
											if(charCounter === computerChoice.length){
												if(confirm( "Band Name is:  "+ computerChoice + "  would you like to continue?")){
													wins++;
													console.log(emptyString);
													reset();
												} else{
													reset();
												}
											}
											console.log(wins + " Losses:" + losses);
											console.log(emptyString);
										// console.log(userGuess);
										} // checks to see where the char location is

									} // end of the for loop
								}// if there is a character present in the comp choice
							} // if it has not been guessed already it will run this

		console.log(numOfGuesses);

		var html = "<p> guess what letter I'm thinking of <p>" +
       "<p> wins: " + wins + "</p>" + "<p> Losses: " + losses + "</p>" + "<p> Current Word: " + emptyString.join(' ') + "</p>" + "<p> Guesses Left: " + numOfGuesses + "</p>" + "<p>Your Guesses so far: " + guessSoFar + " </p>";

        document.querySelector('#guessArea').innerHTML = html;
	} // the end of the function event



