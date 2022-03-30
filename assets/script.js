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

// create more global variables for question index and timer

var questionIndex = 0;
var finalQuestionIndex = quizQuestions.length
var timeLeft = 60
var timerInterval;
var score = 0;
var correct;

// create a function to show questions during the quiz, and hide them on the final screen

function generateQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;


// create a function to begin the quiz and timer on the start button

function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuestion();

    //create timer functionality

    timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = "Time left: " + timeLeft;
    
        if(timeLeft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizContainer.style.display = "block";
}

// create function to display score after quiz is done or no time left

function displayScore(){
    quizContainer.style.display = "none"
    gameOver.style.display = "flex";
    clearInterval(timerInterval);
    initials.value = "";
    finalScore.innerHTML = "You got " + score + " out of " + quizQuestions.length + " correct!";
}

// on submit, create a function that saves in local storage and pushes the new initials and score into the array
submitScoreBtn.addEventListener("click", function allScores){
    if(initials.value === "") {
        alert("Please input a value for your initials");
        return false;
    }else{
        var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
        var userName = initials.value.trim();
        var topScore = {
            name : userName,
            score : score
        };

        gameOver.style.display = "none";
        scoreContainer.style.display = "flex";
        scorePage.style.display = "block";
        
        savedScores.push(topScore);
        localStorage.setItem("savedScores", JSON.stringify(topScores));
        generateScore();
    };
}

// create a function to check answers as you go



// call quiz to display first

startBtn.addEventListener("click", startQuiz);