// create variables for the question container, score, and start button
// quiz home and start button
var quizContainer = document.getElementById('quiz');
var timer = document.getElementById('timer');
var startScrn = document.getElementById("startScreen");
var startBtn = document.getElementById('startBtn');

// questions and answer buttons
var questionsEl = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// game over screen and initials/high score display
var gameOver = document.getElementById("gameOver");

var submitScoreBtn = document.getElementById("submitScore");
var scoreContainer = document.getElementById("scoreContainer");
var scorePage = document.getElementById("scorePage");
var initials = document.getElementById("initials");
var scoreEl = document.getElementById("score");
var userInitials = document.getElementById("userInitials");
var finalScore = document.getElementById("finalScore");

// create an array to house questions and options
var quizQuestions = [{

    question: "What does DOM stand for?",
    answerA: "Document Object Model",
    answerB: "Display Object Model",
    answerC: "Digital Ornithopter Model",
    answerD: "Main Character in Fast and the Furious",
    correctAnswer: "a"},
    {
    question: "Where can you go to find fonts with code included?",
    answerA: "dafonts.com",
    answerB: "Fresh Font Warehouse",
    answerC: "Google Fonts",
    answerD: "Facebook",
    correctAnswer: "c"},
    {
    question: "Which is primarily used for page styling?",
    answerA: "HTML",
    answerB: "CSS",
    answerC: "Bootstrap",
    answerD: "JavaScript",
    correctAnswer: "b"},

]

// create a function to begin the quiz on the start button

function showQuiz(){

}

// call quiz to display first

showQuiz();

