
$(document).ready(function(){
	
	var secretNum = null
	var count = 0

	newGame();
	console.log(secretNum);




	//New Game Function
	function newGame(){
		secretNum = Math.floor((Math.random() * 100) + 1);
		return secretNum;
	}

	// Guess function
	$('#guessButton').click(function(event){
  		event.preventDefault();
  		userGuess = $('#userGuess').val();
  		console.log(userGuess)

  		if (isNaN(userGuess)) {
  			$('#feedback').text("Please only input numbers");
  		} 
  		else if (userGuess === "") {
  			/*--- Do Nothing ---*/
  		}
  		else if (userGuess < 1 || userGuess > 100) {
  			$('#feedback').text("Enter a number between 1 and 100");
  		}
  		else {
	  		difference = Math.abs(userGuess - secretNum);
			count++;
			$('span#count').text(count);
			feedback();
			};
  	});
	// Feedback function
	feedback = function() {
  		var feedbackText = "Your guess is ";
  		if (secretNum == userGuess) {
  			$('#feedback').text("You got it!");
  		} else if (difference < 5) {
  			$('#feedback').text(feedbackText+"BURNING");
  		} else if (difference < 10) {
  			$('#feedback').text(feedbackText+"HOT");
  		} else if (difference < 15) {
  			$('#feedback').text(feedbackText+"Warm");
  		} else if (difference < 20) {
  			$('#feedback').text(feedbackText+"Cold");
  		} else if (difference < 30) {
  			$('#feedback').text(feedbackText+"Very Cold");
  		} else if (difference >= 40) {
  			$('#feedback').text(feedbackText+"FREEZING");
  		};

  		if (secretNum == userGuess) {
  			$("#feedback").attr("id", "correct");
  		} else if (difference > 20) {
  			$("#feedback").attr("id", "cold-feedback");
  		} else if (difference < 20) {
  			$("#feedback").attr("id", "feedback");
  		}
  	};


	/*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);

  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  });
  //Submit Function
  $('#guessButton').click(function(e){
  	var txtbox = document.getElementById('userGuess');
		var txtval = txtbox.value;
		e.preventDefault();

  });
  //USING ENTER TO ENTER AN ITEM
	$('#userGuess').keyup(function(e){
		if(e.keyCode == 13) {
			e.preventDefault();
			$('#guessButton').click();
		}
	});	
});


