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
       	question: "What is your favorite NBA Team?",
       	choices: ["Chicago Bulls", "San Antonio Spurs", "Memphis Grizzlies", "Cleveland Cavaliers", "LA Lakers"],
       	qNum : 0,
       },
       {
       	question: "What is your favorite brand?",
       	choices: ["IBM", "My favorite Etsy Artist", "Uber", "Apple", "Goldman Sachs"],
       	qNum : 1,
       },
        {
        question: "What type college did you attend",
       	choices: ["None", "Liberal Arts School", "Technical School", "State School", "Ivy League"],
       	qNum : 2,		
       },
        {
        question: "What is your favorite type of vacation?",
       	choices: ["Beach", "Exotic", "Mountain", "Trip to the big game", "'Work-ation'"],
       	qNum : 3,
       },
        {
        question: "What is your favorite type of car?",
       	choices: ["Sedan", "Tesla", "SUV", "Truck", "Sports Car/Luxury"],
       	qNum : 4,
       },
        {
        question: "Which of the following states is your favorite?",
       	choices: ["Alabama", "Texas", "California", "Oregon", "New York"],
       	qNum : 5,	
       },
        {
        question: "Which of the following movies is your favorite?",
       	choices: ["Crash", "Pulp Fiction", "Butch Cassidy & The Sundance Kid", "Remember the Titans", "The Godfather"],
       	qNum : 6,	
       },
        {
        question: "What is your favorite sport?",
       	choices: ["Baseball", "Other", "Soccer", "Basketball", "Football"],
       	qNum : 7,	
    }]


  //Next question function
	
	


$(document).ready(function() {

	function nextQuestion() {
		if (currentQuestion < 7) {
			var newQuestion = '<h3 class="question">'+questions[currentQuestion + 1].question+'</h3><div id="answer_holder"><br><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion + 1].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion + 1].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion + 1].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion + 1].choices[3]+'</span><br><input type="radio" name="option" class="option" value="4"><span class="answer">'+questions[currentQuestion + 1].choices[4]+'</span></div></div><button type="submit" class="ui-button" id="submit">Submit Answer</button>';
			$(".question").remove();
      $("#answer_holder").remove();
      $(".main-container").html(newQuestion);
		}
		else {
			var result = '<p class="result">Fuck yo shit</p>';
			$(".main-container").hide();
			$(".result-container").show();
      $(".result-container").html(result);

		}
	}
//Submit click funciton
	$('.main-container').on("click","#submit", function(){ 
		updateUserStats();
		nextQuestion();
		currentQuestion++;		
	});
//Update User Stats Function
	

});



$.each(Virginia, function(k,v) {
	console.log(v);
	console.log(Kentucky.k);
});









