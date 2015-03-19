// User Variables
	var userPace = 5;
	var userUniqueStyle = 5;
	var userPressure = 5;
	var userAthletic = 5;
	var userVillain = 5;

//Team definition and profiles
	function Team(pace, uniqueStyle, pressure, athletic, villain) {
		this.pace = pace;
		this.uniqueStyle = uniqueStyle;
		this.pressure = pressure;
		this.athletic = athletic;
		this.villain = villain;
	}
	var Virginia = new Team(2,9,2,7,3);
	var Arizona = new Team(2,7,4,8,6);
	var Kentucky = new Team(6,4,5,10,10);
	var NorthCarolina = new Team(9,7,5,8,9);
	var Duke = new Team(6,5,4,9,10);
	var VCU = new Team(7,10,10,7,1);
	var Oregon = new Team(9,9,7,7,2);
	var IowaState = new Team(8,6,7,7,3);

//Answer function and defniitions
		function Answer(pace, uniqueStyle, pressure, athletic, villain) {
		this.pace = pace;
		this.uniqueStyle = uniqueStyle;
		this.pressure = pressure;
		this.athletic = athletic;
		this.villain = villain;
	}
	var a = new Answer(1,0,0,0,0);
	var b = new Answer(0,1,0,0,0);
	var c = new Answer(0,0,1,0,0);
	var d = new Answer(0,0,0,1,0);
	var e = new Answer(0,0,0,0,1);


$(document).ready(function() {







});