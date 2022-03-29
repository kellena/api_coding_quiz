Acceptance Criteria:
- presented with a start button that renders a question when clicked
- timer is triggered by start button
- rendered question has incorrect options and one correct option
- if you click the correct option, then points are added and the next question renders, timer continues
- if you click the incorrect option, then the timer decreases by a certain amount, and no points are added
- when you run out of questions, or time, the game ends and a game over screen renders
on the game over screen, you can save you initials and score

** start with ONE question, can always copy/paste**

HTML

1: Start screen with title, rules, start button, timer
2: Question screen container with question text, buttons, timer, feedback based on answer selected (quick flash correct/incorrect)
3: End of game container with final score, form to enter initials and a submit button
4: High score page

JS

1: Declare variables to reference DOM elements in your HTML document
    - startQuizBtn, startScreenEl, timerEl, highscoreEl
    - questionTitleEl, questionsE1, answerChoicesEl 

2: Create an array of objects that hold all questions -- can store this in a separate JS file
    - answerChoices
    - questionText
    - correctAnswer

3: Create a startQuiz() function triggerd by the startQuizBtn
    - hide start screen
    - unhide question screen
    - starts timer
    - grab first question in the array

4: Create a function to getQuestion()
    - renders title, choices and buttons

5: Create a function to check if an answer is correct
    - if the answer is correct, then move on to the next question
    - if the answer is incorrect, then decrement timer and move on to next question
    - keep track of score/points
    - increment index in array of questions to move on

6: Create a function to end the quiz
    - hide this questionEl
    - unhide the end of quiz element
    - unhide your final score

7: Create funtionality to save high scores to localStorage