var questions = [{
  question: "Which player won 6 NBA championships in the 90's?",
  answer1: "Bill Gates",
  answer2: "Magic Johnson",
  answer3: "George Bush",
  answer4: "Michael Jordan",
  correct: "Michael Jordan"
},{
  question: "What car was named Elanor in the movie Gone in 60 Seconds?",
  answer1: "1903 Ford Model T",
  answer2: "1987 Chevy Monte Carlo",
  answer3: "1967 Ford Mustang Fast Back",
  answer4: "1996 Toyota Camry",
  correct: "1967 Ford Mustang Fast Back"
},{
  question: "What player was called Prime Time?",
  answer1: "Fred McGriff",
  answer2: "Deion Sanders",
  answer3: "Joe Namath",
  answer4: "Lionel Messi",
  correct: "Deion Sanders"
},{
  question: "What car brand did Elon Musk make?",
  answer1: "Ferrari",
  answer2: "Tesla",
  answer3: "Lexus",
  answer4: "Bugatti",
  correct: "Tesla"
},{
  question: "What college did Tom Brady attend?",
  answer1: "North Carolina",
  answer2: "USC",
  answer3: "Michigan",
  answer4: "Ohio State",
  correct: "Michigan"
}];

// Timer
var time = document.getElementById("timer");
var yourScore = document.querySelector(".display-3");
var submitButton = document.getElementById("buttonInitials");
var inputLine = document.getElementById("inlineFormInput");

var secondsLeft = 50;
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      console.log(secondsLeft);
        time.textContent = "Time: " + secondsLeft;
      
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          cardQuestions.setAttribute("style", "display: none");
          displayJumbo.setAttribute("style", "display: block");
          yourScore.textContent = "Your score is: " + secondsLeft;
          startButton.setAttribute("style", "display: none");
          submitButton.setAttribute("style", "display: inline");
          inputLine.setAttribute("style", "display: inline-block");
      
          } else if (runningQuestion === 5) {
            clearInterval(timerInterval);
            console.log(secondsLeft);
            cardQuestions.setAttribute("style", "display: none");
            displayJumbo.setAttribute("style", "display: block");
            yourScore.textContent = "Your score is: " + secondsLeft;
            startButton.setAttribute("style", "display: none");
            submitButton.setAttribute("style", "display: inline");
            inputLine.setAttribute("style", "display: inline-block");

          }
        
          

    }, 1000);
  }
  

// Start Button
var startButton = document.getElementById("startQuiz");
var cardQuestions = document.getElementById("questionsCard");
var displayJumbo = document.querySelector(".jumbotron");

startButton.addEventListener("click", startGame);

function startGame() {
    setTime();
    firstQuestion();
    console.log("game on");
    cardQuestions.setAttribute("style", "display: block");
    displayJumbo.setAttribute("style", "display: none");

}


//Questions
var answer1 = document.getElementById("button1");
var answer2 = document.getElementById("button2");
var answer3 = document.getElementById("button3");
var answer4 = document.getElementById("button4");
var question = document.getElementById("questions");
var correctAnswer = document.getElementById("correctIncorrect");
var incorrectAnswer = document.getElementById("correctIncorrect");

var runningQuestion = 0;

// First Question Send questions to card
function firstQuestion() {
  var quest = questions[runningQuestion];
  question.textContent = quest.question;
  answer1.textContent = quest.answer1;
  answer2.textContent = quest.answer2;
  answer3.textContent = quest.answer3;
  answer4.textContent = quest.answer4;
}
var quizBtn = document.querySelectorAll(".quizBtn");

// Event listener for buttons and q/a
for (var i = 0; i < quizBtn.length; i++) {
  quizBtn[i].addEventListener("click", function userAnswer(event) {
    event.stopPropagation();
    if (event.currentTarget.innerText === questions[runningQuestion].correct){
    correctAnswer.textContent = "Correct + 5 sec";
    correctAnswer.setAttribute("style", "color: yellow");
    secondsLeft = secondsLeft + 5;
    console.log("correct");
  } else {
    incorrectAnswer.textContent = "Incorrect - 5 sec";
    incorrectAnswer.setAttribute("style", "color: red");
    secondsLeft = secondsLeft - 5;
    console.log("Incorrect minus 5 seconds");
  }
  console.log(runningQuestion);
  runningQuestion++;


  if (runningQuestion < 5) {
    firstQuestion();
  }
});
}

// High Scores 

var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

submitButton.addEventListener("click", function(event){
  event.stopPropagation();
  console.log("click");
  
  var initials = inputLine.value;
  var finalScore = {initials, secondsLeft};
  console.log("Final Score: " + finalScore);
  console.log(initials + " your score is: " + secondsLeft); 




  // Move to localStorage

  highscores.push(finalScore);
  localStorage.setItem("highscores", JSON.stringify(highscores));

});




