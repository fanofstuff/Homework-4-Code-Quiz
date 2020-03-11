// What do we need to have for this homework?

// First, we need to have a nav bar which has a link to the highscores and timer.
//
// Next, we'll probably need to make a container.
// In there, we'll make a header, subheader, several buttons, etc, etc.
// Each of these things will then have to be modified with javascript to update
// Furthermore, many of these will be hidden by default...
// or literally just altered to display alternative information
//
//
//
//
//
var timerEl = document.getElementById("timer");
var highscoreBar = document.querySelector(".navbar");
var quizHeader = document.getElementById("quiz-header");
var quizBody = document.getElementById("quiz-body");
var quizFooter = document.getElementById("quiz-footer");
var quizTitleText = document.getElementById("quiz-title");
var quizStartText = document.getElementById("quiz-start-text");
var quizStartButton = document.getElementById("start-button");

var timeLeft = 0;

timerEl.textContent = ": " + timeLeft;

var questions = [
  {
    question: "1) Commonly used data types DO NOT include: ",
    options: {
      a: "1. strings",
      b: "2. booleans",
      c: "3. alerts",
      d: "4. numbers"
    },
    answer: "c"
  },
  {
    question:
      "2) The condition in an if/else statement is enclosed within ____.",
    options: {
      a: "1. quotes",
      b: "2. curly brackets",
      c: "3. parentheses",
      d: "4. square brackets"
    },
    answer: "c"
  },
  {
    question: "3) Arrays in Javascript can be used to store ____. ",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    answer: "d"
  },
  {
    question:
      "4) String values must be enclosed within ____ when being assigned variables.",
    options: {
      a: "1. commas",
      b: "2. curly brackets",
      c: "3. quotes",
      d: "4. parentheses"
    },
    answer: "c"
  },
  {
    question:
      "5) A very useful tool used during development and debugging for printing content to the debugger is ____.",
    options: {
      a: "1. JavaScript",
      b: "2. terminal/bash",
      c: "3. for loops",
      d: "4. console.log"
    },
    answer: "d"
  }
];
// place this timer within the function to run the questions

function countdownTimer() {
  timeLeft = 75;

  var timeInterval = setInterval(function() {
    timerEl.textContent = ": " + timeLeft;
    timeLeft--;

    // if (questionResponse === false) {
    //   timeLeft -= 10;
    // }
    // | finalResponseClick === true
    if (timeLeft < 0) {
      clearInterval(timeInterval);
      highscoreBar.setAttribute("class", "collapse");
      finalScore = timeLeft;
    }
  }, 1000);
}
console.log (questions[0].options)
function buttonCreator() {
  for (i = 0; i < questions[0].options.length; i++) {
    console.log (questions[0].options.length); 
    // var buttonAnswers = document.createElement("BUTTON"); 
    // buttonAnswers.setAttribute("class", "btn btn-primary btn-sm"); 
    // buttonAnswers.setAttribute("data-button", options[i]); 
    // buttonAnswers.innerHTML = options[i]; 
    // quizBody.appendChild(buttonAnswers); 

  }
}

function quizStartSelect() {
  quizTitleText.innerHTML = questions[0].question;
}

quizStartButton.addEventListener("click", function() {
  countdownTimer();
  quizTitleText.innerHTML = questions[0].question;
  quizStartText.setAttribute("class", "collapse"); 
  buttonCreator(); 

  quizStartButton.innerHTML
});
