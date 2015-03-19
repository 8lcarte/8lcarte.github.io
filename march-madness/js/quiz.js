//Definitions
	function Stats(pace, uniqueStyle, pressure, athletic, villain) {
		this.pace = pace;
		this.uniqueStyle = uniqueStyle;
		this.pressure = pressure;
		this.athletic = athletic;
		this.villain = villain;
	}
	var userStats = new Stats(0,0,0,0,0)

	function Team(pace, uniqueStyle, pressure, athletic, villain) {
		return new Stats(pace, uniqueStyle, pressure, athletic, villain);
	}

	function Answer(pace, uniqueStyle, pressure, athletic, villain) {
		return new Stats(pace, uniqueStyle, pressure, athletic, villain);
	}
//Team Definitions
	var Virginia = new Team(1,4,1,3,2);
	var Arizona = new Team(1,3,1,4,3);
	var Kentucky = new Team(3,1,2,4,4);
	var NorthCarolina = new Team(4,3,2,4,4);
	var Duke = new Team(3,1,2,4,4);
	var VCU = new Team(3,4,4,3,1);
	var Oregon = new Team(4,4,3,3,1);
	var IowaState = new Team(4,2,3,3,2);

//Answer Definitions
	var a = new Answer(1,0,0,0,0);
	var b = new Answer(0,1,0,0,0);
	var c = new Answer(0,0,1,0,0);
	var d = new Answer(0,0,0,1,0);
	var e = new Answer(0,0,0,0,1);

function updateUserStats() {
	var a = $("input[type='radio']:checked").val();	
		console.log(a);
		if (a == 0) { 
			userStats.pace++
		} else if (a == 1) {
			userStats.uniqueStyle++
		} else if (a == 2) {
			userStats.pressure++
		} else if (a == 3) {
			userStats.athletic++
		} else if (a == 4) {
			userStats.villain++
		};
		console.log(userStats);
	};


$(document).ready(function() {

	var currentQuestion = 0;

//Submit click funciton
	$('#submit').click(function(){ 

		updateUserStats();		
	});
//Update User Stats Function
	





});