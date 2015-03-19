//Definitions
	function Stats(pace, uniqueStyle, pressure, athletic, villain) {
		this.pace = pace;
		this.uniqueStyle = uniqueStyle;
		this.pressure = pressure;
		this.athletic = athletic;
		this.villain = villain;
	}
	var currentQuestion = 0;
	var userStats = new Stats(0,0,0,0,0)

	function Team(pace, uniqueStyle, pressure, athletic, villain) {
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

//UPdate user stats function
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
	//Questions Array
	var questions = [{
       	question: "Which of the following NBA teams do you enjoy watching the most?",
       	choices: ["Chicago Bulls", "Cleveland Cavaliers", "Golden State Warriors", "Atlanta Hawks", "San Antonio Spurs"],
       	qNum : 0,
       },
       {
       	question: "What country is the origin of the arabica coffee plant?",
       	choices: ["Peru", "Ethiopia", "Indonesia", "Turkey", "another"],
       	qNum : 1,
       },
        {

    }]


  //Next question function
	function nextQuestion() {
		if (currentQuestion < 8) {
			var newQuestion = '<h3 class="question">'+questions[currentQuestion + 1].question+'</h3><br><div id="answer_holder"><br><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion + 1].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion + 1].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion + 1].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion + 1].choices[3]+'</span><br><input type="radio" name="option" class="option" value="4"><span class="answer">'+questions[currentQuestion + 1].choices[4]+'</span></div></div>';
			$(".question").remove();
      $("#answer_holder").remove();

      $(".main-container").html(newQuestion);
		}
		else {

		}
	}
	


$(document).ready(function() {



//Submit click funciton
	$('#submit').click(function(){ 
		updateUserStats();
		nextQuestion();
		currentQuestion++;		
	});
//Update User Stats Function
	



});