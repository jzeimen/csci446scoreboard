var guessesLeft = 10;
var highScores = new Array([9, "HarryJamesPotter"], [3, "ZedCthulhu"], [2, "NearlyDied"]);
var randomNumber = 9;

$(document).ready(function(){
  updateScore(guessesLeft);
  populateHighScores(highScores);
})


function populateHighScores(scores) {
	scores.sort(function(a,b) { return b[0] - a[0]; });

	$('div#highScores').html("");
  for (var i = 0; i < scores.length; ++i) {
    $('div#highScores').append("<p>" + scores[i][0] + " " + scores[i][1] + "</p>");
  }
}

function updateScore(score) {
  $('h2#score span#guessesLeft').html(score);
}


function resetRandomNumber(){
	randomNumber = Math.floor(Math.random()*101);
}

function submitGuess() {
	var guess = $('#guess').val();
	if (guess == randomNumber ) {
		$('#score').html("<p>Holy Crap! You figured it out!</p>");
		$('#hint').html("Enter your name below for the high score.");
		$("#btnGuess").attr('value', 'Submit name');
		$("#btnGuess").attr('onClick', 'submitName()');

		return;
	}else if (guess > 100 || guess < 1) {
		$('#hint').html("Did you miss the 1-100 part? Trying to cause some kind of overflow or sumthin'? <br> I'll still take that as one of your guesses...");
	}else if (guess > randomNumber) {
		$('#hint').html("I was thinking of something a bit lower...");
	}else if (guess < randomNumber) {
		$('#hint').html("It's definitely higher than that...")
	}
	guessesLeft = guessesLeft-1;

	if(guessesLeft <= 0){
		endGame();
		return;
	}

	updateScore(guessesLeft);
}

function submitName(){
	var name = $('#guess').val();
	highScores.push([guessesLeft, name,]);
	populateHighScores(highScores);
	playAgainButton();
}

function playAgainButton(){
	$('<input type="button" id="playAgainButton" onClick="playAgain()" value="Play Again?">').insertAfter('#hint');
}


function endGame() {
	$('#hint').html("");
	$('#score').html("Well... You died..... <br> I almost felt bad for you near the end...");
	playAgainButton();
}


function playAgain() {
	$('#score').html('<span id="guessesLeft"></span> Guesses Left</h2>');
	$('#playAgainButton').remove();
	$('#hint').html("");
	$('#guess').val("");
	guessesLeft = 10;
	resetRandomNumber();
	updateScore(guessesLeft);
	$("#btnGuess").attr('value', 'Guess!');
	$("#btnGuess").attr('onClick', 'submitGuess()');
}














