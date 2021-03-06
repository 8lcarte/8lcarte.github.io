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
	var userDiff = 0
	userDiffArray = []

	function Team(pace, uniqueStyle, pressure, athletic, villain) {
		return new Stats(pace, uniqueStyle, pressure, athletic, villain);
	}

//Team Definitions
	var virginia = new Team(4,4,1,3,2);
	var arizona = new Team(4,3,1,4,3);
	var kentucky = new Team(2,1,2,4,4);
	var northCarolina = new Team(1,3,2,4,4);
	var duke = new Team(2,1,2,4,4);
	var vCU = new Team(2,4,4,3,1);
	var oregon = new Team(1,4,3,3,1);

	var teamArray = [virginia,arizona,kentucky,northCarolina,duke,vCU,oregon]
	var nameArray = ["Virginia","Arizona","Kentucky","North Carolina","Duke","VCU","Oregon"]


//UPdate user stats function
function updateUserStats() {
	var a = $("input[type='radio']:checked").val();	
		if (a == 0) { 
			if (userStats.pace < 4 ) {
				userStats.pace++;
			}
		} else if (a == 1) {
			if (userStats.uniqueStyle < 4 ) {
				userStats.uniqueStyle++;
			}
		} else if (a == 2) {
			if (userStats.pressure < 4 ) {
				userStats.pressure++;
			}
		} else if (a == 3) {
			if (userStats.athletic < 4 ) {
				userStats.athletic++;
			}
		} else if (a == 4) {
			if (userStats.villain < 4 ) {
				userStats.villain++;
			}
		};
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

// Matching Algorithm
function match(userStats, teamArray) {
		return teamArray.map(function(team) {	
				var count = 0;
				_.each(userStats, function(v,k) {
					var a = Math.abs(userStats[k] - team[k]);
					count += a;
				});
				return count;
			});	
}


// var closeTeam;
// function closest(userDiffArray) {
// 	var closeTeam =  Math.min.apply(Math,userDiffArray);
// }


$(document).ready(function() {

	function nextQuestion() {
		if (currentQuestion < 7) {
			var newQuestion = '<h3 class="question">'+questions[currentQuestion + 1].question+'</h3><div id="answer_holder"><br><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion + 1].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion + 1].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion + 1].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion + 1].choices[3]+'</span><br><input type="radio" name="option" class="option" value="4"><span class="answer">'+questions[currentQuestion + 1].choices[4]+'</span></div></div><button type="submit" class="ui-button" id="submit">Submit Answer</button>';
			$(".question").remove();
      $("#answer_holder").remove();
      $(".main-container").html(newQuestion);
		}
		else {
			userDiffArray = match(userStats, teamArray);
			Array.prototype.closest = function(){
				var a = Math.min.apply(Math, this);
				var index = this.indexOf(a);
				return nameArray[index]
		}
			result = userDiffArray.closest();
			var outcome = "<p class='result'>You should root for: </br>"+result+"</p>";
			$(".main-container").hide();
			$(".result-container").show();
      $(".result-container").html(outcome);

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












