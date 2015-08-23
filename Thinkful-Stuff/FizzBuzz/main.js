$(document).ready(function() {

//fizzBuzz function
function fizzBuzz(userVal) {
	var message
	//check to see that it's not a number
	for (var i = 1; i < userVal; i++) {
		if (i % 5 == 0 && i % 3 ==0) {
			message = "fizzbuzz";
		} else if (i % 3 == 0){
			message = "fizz";
		} else if (i % 5 == 0 ){
			message = "buzz";
		} else {
			message = i				
		}
		$('#fizzbuzz').append("<br>" + message);
	}

}

//need to add error messageto make sure it is a number and no decimal 
//

//Click for start
	$('#submit').click(function(e){
		e.preventDefault();
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		$('#fizzbuzz').html("");
		fizzBuzz(txtval);	
	});	

});
