
$(document).ready(function(){
	
	var secretNum = null
	var count = 0
  var difference = 0

	newGame();
	console.log(secretNum);




	//New Game Function
	function newGame(){
		secretNum = Math.floor((Math.random() * 100) + 1);
    $('#guessList').empty();
		return secretNum;
	};
  //Guess list displayed
  guessTrack = function() {
      if (secretNum == userGuess) {
        //Do nothing
      } else if (difference < 20) {
        $('#guessList').append('<li id="close">'+userGuess+'</li>');
      } else if (difference > 20) {
        $('#guessList').append('<li id="far">'+userGuess+'</li>');
      }
  };

	// Guess function
	$('#guessButton').click(function(event){
  		event.preventDefault();
  		userGuess = $('#userGuess').val();
  		console.log(userGuess)

  		if (isNaN(userGuess)) {
  			$('#feedback').text("Please only input numbers");
  		} 
  		else if (userGuess === "") {
  			//Do Nothing
  		}
  		else if (userGuess < 1 || userGuess > 100) {
  			$('#feedback').text("Enter a number between 1 and 100");
  		}
  		else {
	  		difference = Math.abs(userGuess - secretNum);
			count++;
			$('span#count').text(count);
			feedback();
      guessTrack();
			};
  	});
	// Feedback function
	feedback = function() {
  		var feedbackText = "Your guess is ";
  		if (secretNum == userGuess) {
  			alert("You got it!");
        location.reload();
  		} else if (difference < 5) {
  			$('#feedback').text("BURNING");
  		} else if (difference < 10) {
  			$('#feedback').text("HOT");
  		} else if (difference < 15) {
  			$('#feedback').text("Warm");
  		} else if (difference < 20) {
  			$('#feedback').text("Cold");
  		} else if (difference < 30) {
  			$('#feedback').text("Very Cold");
  		} else if (difference >= 30) {
  			$('#feedback').text("FREEZING");
  		};

  		if (secretNum == userGuess) {
  			$("#feedback").attr("id", "correct");
  		} else if (difference > 20) {
  			$("#feedback").css("background-color", "blue");
  		} else if (difference < 20) {
  			$("#feedback").css("background-color", "red");
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


