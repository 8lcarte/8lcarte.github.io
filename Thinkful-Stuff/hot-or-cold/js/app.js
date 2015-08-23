
$(document).ready(function(){
	
	var secretNum, count, difference, userGuess

	newGame();
	console.log(secretNum);

	//New Game Function
	function newGame(){
		secretNum = Math.floor((Math.random() * 100) + 1);
    $('#guessList').empty();
    $('#feedback').text("Make your Guess!");
    $('#userGuess').val('');
    count = 0
    difference = 0
		return secretNum;
	};
  //Guess list displayed
  guessTrack = function(backgroundColor) {
    $('#guessList').append('<li style="background-color: '+backgroundColor+';">'+userGuess+'</li>');

  };

	// Guess function
	$('#guessButton').click(function(event){
  		event.preventDefault();
  		userGuess = $('#userGuess').val();
  		console.log(userGuess);

  		if (isNaN(userGuess)) {
  			$('#feedback').text("Please only input numbers between 1 and 100");
  		} else if (userGuess < 1 || userGuess > 100) {
  			  $('#feedback').text("Enter a number between 1 and 100");
  		} else if (userGuess !== ""){
  	  		difference = Math.abs(userGuess - secretNum);
  			  count++;
  			  $('span#count').text(count);
    			feedback();
			};
  	});
	// Feedback function
	feedback = function() {
  		var feedbackText = ""

  		if (secretNum == userGuess) {
  			alert("You got it!");
        newGame();
  		} else if (difference < 5) {
  			feedbackText = "BURNING";
  		} else if (difference < 10) {
  			feedbackText = "HOT";
  		} else if (difference < 15) {
  			feedbackText = "Warm";
  		} else if (difference < 20) {
  			feedbackText = "Cold";
  		} else if (difference < 30) {
  			feedbackText = "Very Cold";
  		} else if (difference >= 30) {
  			feedbackText = "FREEZING";
  		};
      $('#feedback').text(feedbackText);

      var backgroundColor = 'rgb('+(255-2*difference)+',0,'+(2*difference+50)+')';
      
      $('#feedback').css("background-color", backgroundColor);
      guessTrack(backgroundColor);

  	};


	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });
  //USING ENTER TO ENTER AN ITEM
	$('#userGuess').keyup(function(e){
		if(e.keyCode == 13) {
			e.preventDefault();
			$('#guessButton').click();
		}
	});	
  // New Game button
  $('.new').click(function(){
    newGame();
  });
});


