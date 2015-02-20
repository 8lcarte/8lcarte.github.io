$(document).ready(function() {

//fizzBuzz function
function fizzBuzz(userVal) {
	for (var i = 1; i < userVal; i++) {
		if (i % 5 == 0 && i % 3 ==0) {
			document.write("fizzbuzz<br>");
		}
		else if (i % 3 == 0){
			document.write("fizz<br>");
		}
		else if (i % 5 == 0 ){
			document.write("buzz<br>");
		}
		else {
			document.write(i + "<br>");					
		}
	}
}


//Click for start
	$('#submit').click(function(){
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		fizzBuzz(txtval);	
	});	

});
