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

    if (timeLeft < 0 | quizTitleText.textContent === "And that's it!") {
      clearInterval(timeInterval);
      highscoreBar.setAttribute("class", "collapse");
      finalScore = timeLeft;
    }
  }, 1000);
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
    question: 
      "1) Commonly used data types DO NOT include: "
  },
  {
    question:
      "2) The condition in an if/else statement is enclosed within ____."
  },
  {
    question: 
      "3) Arrays in Javascript can be used to store ____."
  },
  {
    question:
      "4) String values must be enclosed within ____ when being assigned variables."
  },
  {
    question:
      "5) A very useful tool used during development and debugging for printing content to the debugger is ____."
  }
];

quizStartButton.addEventListener("click", function() {
  countdownTimer();
  quizStartSelect();
  createFirstButtons();
});

function quizStartSelect() {
  quizTitleText.innerHTML = questions[0].question;
  quizStartText.setAttribute("class", "collapse");
  quizStartButton.setAttribute("class", "collapse");
}

function createFirstButtons() {
  var divCollector = document.createElement("div");
  divCollector.setAttribute("class", "delete-me");
  quizBody.appendChild(divCollector);
  for (i = 0; i < questionOneAnswers.length; i++) {
    var lineBreaker = document.createElement("div");
    lineBreaker.setAttribute("class", "row m-1");
    divCollector.appendChild(lineBreaker);
    var firstButtons = document.createElement("button");
    firstButtons.setAttribute(
      "class",
      "btn btn-primary btn-sm button-left-margin answer-button"
    );
    firstButtons.setAttribute("data-answer", questionOneAnswers[i]);
    firstButtons.setAttribute(
      "onclick",
      "eventListenerWorkaroundOne.call(this)"
    );
    firstButtons.innerHTML = questionOneAnswers[i];
    lineBreaker.appendChild(firstButtons);
  }
}

function eventListenerWorkaroundOne() {
  var answerCheck = this.getAttribute("data-answer");
  if (answerCheck !== "3. alerts") {
    timeLeft -= 10;
  }
  while (quizBody.lastChild) {
    quizBody.removeChild(quizBody.lastChild);
  }
  quizTitleText.innerHTML = questions[1].question;
  function createSecondButtons() {
    for (i = 0; i < questionTwoAnswers.length; i++) {
      var divCollector = document.createElement("div");
      divCollector.setAttribute("class", "delete-me");
      quizBody.appendChild(divCollector);
      var lineBreaker = document.createElement("div");
      lineBreaker.setAttribute("class", "row m-1");
      quizBody.appendChild(lineBreaker);
      var secondButtons = document.createElement("button");
      secondButtons.setAttribute(
        "class",
        "btn btn-primary btn-sm button-left-margin answer-button"
      );
      secondButtons.setAttribute("data-answer", questionTwoAnswers[i]);
      secondButtons.setAttribute(
        "onclick",
        "eventListenerWorkaroundTwo.call(this)"
      );
      secondButtons.innerHTML = questionTwoAnswers[i];
      lineBreaker.appendChild(secondButtons);
    }
  }
  createSecondButtons();
}

function eventListenerWorkaroundTwo() {
  var answerCheck = this.getAttribute("data-answer");
  if (answerCheck !== "3. parentheses") {
    timeLeft -= 10;
  }
  while (quizBody.lastChild) {
    quizBody.removeChild(quizBody.lastChild);
  }
  quizTitleText.innerHTML = questions[2].question;
  function createThirdButtons() {
    for (i = 0; i < questionThreeAnswers.length; i++) {
      var divCollector = document.createElement("div");
      divCollector.setAttribute("class", "delete-me");
      quizBody.appendChild(divCollector);
      var lineBreaker = document.createElement("div");
      lineBreaker.setAttribute("class", "row m-1");
      quizBody.appendChild(lineBreaker);
      var thirdButtons = document.createElement("button");
      thirdButtons.setAttribute(
        "class",
        "btn btn-primary btn-sm button-left-margin answer-button"
      );
      thirdButtons.setAttribute("data-answer", questionThreeAnswers[i]);
      thirdButtons.setAttribute(
        "onclick",
        "eventListenerWorkaroundThree.call(this)"
      );
      thirdButtons.innerHTML = questionThreeAnswers[i];
      lineBreaker.appendChild(thirdButtons);
    }
  }
  createThirdButtons();
}

function eventListenerWorkaroundThree() {
  var answerCheck = this.getAttribute("data-answer");
  if (answerCheck !== "4. all of the above") {
    timeLeft -= 10;
  }
  while (quizBody.lastChild) {
    quizBody.removeChild(quizBody.lastChild);
  }
  quizTitleText.innerHTML = questions[3].question;
  function createFourthButtons() {
    for (i = 0; i < questionFourAnswers.length; i++) {
      var divCollector = document.createElement("div");
      divCollector.setAttribute("class", "delete-me");
      quizBody.appendChild(divCollector);
      var lineBreaker = document.createElement("div");
      lineBreaker.setAttribute("class", "row m-1");
      quizBody.appendChild(lineBreaker);
      var fourthButtons = document.createElement("button");
      fourthButtons.setAttribute(
        "class",
        "btn btn-primary btn-sm button-left-margin answer-button"
      );
      fourthButtons.setAttribute("data-answer", questionFourAnswers[i]);
      fourthButtons.setAttribute(
        "onclick",
        "eventListenerWorkaroundFour.call(this)"
      );
      fourthButtons.innerHTML = questionFourAnswers[i];
      lineBreaker.appendChild(fourthButtons);
    }
  }
  createFourthButtons();
}

function eventListenerWorkaroundFour() {
  var answerCheck = this.getAttribute("data-answer");
  if (answerCheck !== "3. quotes") {
    timeLeft -= 10;
  }
  while (quizBody.lastChild) {
    quizBody.removeChild(quizBody.lastChild);
  }
  quizTitleText.innerHTML = questions[4].question;
  function createFifthButtons() {
    for (i = 0; i < questionFiveAnswers.length; i++) {
      var divCollector = document.createElement("div");
      divCollector.setAttribute("class", "delete-me");
      quizBody.appendChild(divCollector);
      var lineBreaker = document.createElement("div");
      lineBreaker.setAttribute("class", "row m-1");
      quizBody.appendChild(lineBreaker);
      var fifthButtons = document.createElement("button");
      fifthButtons.setAttribute(
        "class",
        "btn btn-primary btn-sm button-left-margin answer-button"
      );
      fifthButtons.setAttribute("data-answer", questionFiveAnswers[i]);
      fifthButtons.setAttribute(
        "onclick",
        "eventListenerWorkaroundFive.call(this)"
      );
      fifthButtons.innerHTML = questionFiveAnswers[i];
      lineBreaker.appendChild(fifthButtons);
    }
  }
  createFifthButtons();
}

function eventListenerWorkaroundFive() {
  var answerCheck = this.getAttribute("data-answer");
  if (answerCheck !== "4. console.log") {
    timeLeft -= 10;
  }
  while (quizBody.lastChild) {
    quizBody.removeChild(quizBody.lastChild);
  }
  quizTitleText.innerHTML = "And that's it!";
  var divCollector = document.createElement("div");
  divCollector.setAttribute("class", "delete-me");
  quizBody.appendChild(divCollector);
}


