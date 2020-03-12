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

function quizStartSelect() {
  quizTitleText.innerHTML = questions[0].question;
  quizStartText.setAttribute("class", "collapse");
  quizStartButton.setAttribute("class", "collapse"); 
}

var questionOneAnswers = [
  "1. strings",
  "2. booleans",
  "3. alerts",
  "4. numbers"
];
var questionTwoAnswers = [
  "1. quotes",
  "2. curly brackets",
  "3. parentheses",
  "4. square brackets"
];
var questionThreeAnswers = [
  "1. numbers and strings",
  "2. other arrays",
  "3. booleans",
  "4. all of the above"
];
var questionFourAnswers = [
  "1. commas",
  "2. curly brackets",
  "3. quotes",
  "4. parentheses"
];
var questionFiveAnswers = [
  "1. JavaScript",
  "2. terminal/bash",
  "3. for loops",
  "4. console.log"
];

var questions = [
    {
      question: "1) Commonly used data types DO NOT include: ",
      answer: "c"
    },
    {
      question:
        "2) The condition in an if/else statement is enclosed within ____.",
      answer: "c"
    },
    {
      question: "3) Arrays in Javascript can be used to store ____. ",
      answer: "d"
    },
    {
      question:
        "4) String values must be enclosed within ____ when being assigned variables.",
      answer: "c"
    },
    {
      question:
        "5) A very useful tool used during development and debugging for printing content to the debugger is ____.",
      answer: "d"
    }
  ]; 

function createFirstButtons() {
  console.log(questionOneAnswers.length);
  for (i = 0; i < questionOneAnswers.length; i++) {
    var lineBreaker = document.createElement("div");
    lineBreaker.setAttribute("class", "row m-1");
    quizBody.appendChild(lineBreaker);
    var firstButtons = document.createElement("button");
    firstButtons.setAttribute(
      "class",
      "btn btn-primary btn-sm button-left-margin"
    );
    firstButtons.setAttribute("data-answer", questionOneAnswers[i]);
    firstButtons.innerHTML = questionOneAnswers[i];
    lineBreaker.appendChild(firstButtons);
  }
}

quizStartButton.addEventListener("click", function() {
  countdownTimer();
  quizStartSelect();
  createFirstButtons();

});
