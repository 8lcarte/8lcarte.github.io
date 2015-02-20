
$(document).ready(function(){
	
	var secretNum = null



	//New Game Function
	function newGame(){
		secretNum = Math.floor((Math.random() * 100) + 1);
		return secretNum;
	}
	newGame();
	console.log(secretNum);



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


