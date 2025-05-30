"use strict";
//  getters
const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const score = document.getElementById("score");
const questions = [
    {
        "question": "Which band released the influential 1986 thrash metal album Master of Puppets?",
        "answers": ["Slayer", "Megadeth", "Metallica", "Anthrax"],
        "correct": 2
    },
    {
        "question": "What is the name of the lead singer for Iron Maiden",
        "answers": ["Ozzy Osbourne", "James Hetfield", "Rob Halford", "Bruce Dickinson"],
        "correct": 3
    },
    {
        "question": "Which subgenre of metal is characterized by fast tempos, tremolo picking, and shrieked vocals, and is often associated with Norway?",
        "answers": ["Death Metal", "Power Metal", "Black Metal", "Doom Metal"],
        "correct": 2
    },
    {
        "question": "Pantera's signature sound is often described by what two-word term coined by guitarist Dimebag Darrell?",
        "answers": ["Groove Metal", "Power Groove", "Vulgar Style", "Southern Thrash"],
        "correct": 1
    },
    {
        "question": "Which band released the album Toxicity in 2001, blending metal with alternative and Armenian folk influences?",
        "answers": ["System Of A Down", "Slipknot", "Korn", "Deftones"],
        "correct": 0
    },
    {
        "question": "Which British band is often credited with pioneering heavy metal in the early 1970s?",
        "answers": ["Deep Purple", "Judas Priest", "Black Sabbath", "Led Zeppelin"],
        "correct": 2
    },
    {
        "question": "In which band did Dave Mustaine play before founding Megadeth?",
        "answers": ["Slayer", "Anthrax", "Metallica", "Exodus"],
        "correct": 2
    },
    {
        "question": "Which Swedish band is known for popularizing melodic death metal with albums like Slaughter of the Soul?",
        "answers": ["Amon Amarth", "In Flames", "Opeth", "At The Gates"],
        "correct": 3
    },
    {
        "question": "Which metal band famously wears masks and numbers themselves instead of using real names on stage?",
        "answers": ["Slipknot", "Ghost", "Mushroomhead", "Gwar"],
        "correct": 0
    },
    {
        "question": "Which subgenre combines metal with symphonic elements, operatic vocals, and orchestration, and is exemplified by bands like Nightwish and Epica?",
        "answers": ["Gothic Metal", "Symphonic Metal", "Progressive Metal", "Avant-Garde Metal"],
        "correct": 1
    }
];
let questionNumber = 0;
let scoreAmount = 0;
/**
 * This loads the question
 */
function loadQuestion() {
    question.innerText = questions[questionNumber].question;
}
/**
 * This function loads the answers into the four bottons
 */
function loadAnswers() {
    answer0.innerText = questions[questionNumber].answers[0];
    answer1.innerText = questions[questionNumber].answers[1];
    answer2.innerText = questions[questionNumber].answers[2];
    answer3.innerText = questions[questionNumber].answers[3];
}
/**
 * This function checks if there is another question 
 * and if not will give a message giving the user a score
 * with a message
 */
function quizHost() {
    let quizLength = questions.length;
    if (questionNumber < quizLength) {
      loadQuestion();
      loadAnswers();
    } else {
      wrapper.innerHTML = `
        <h2>Quiz Over!</h2>
        <p>You got ${scoreAmount} out of ${questions.length} 🤘</p>
      `;
      document.getElementById("resetBtn").style.display = "block";
    }
  }
  
function setButtonsDisabled(state) {
    answer0.disabled = state;
    answer1.disabled = state;
    answer2.disabled = state;
    answer3.disabled = state;
}
/**
 * This function checks the inputted answer with the 
 * actual answer. If corrrect it updates score on page.
 * The function always increments the questionNumber 
 * after checking and returns to the quizHost
 * @param {number} answerSelected 
 */
function checkAnswer(answerSelected) {
    let correctAnswer = questions[questionNumber].correct;

    // Disable all buttons to prevent multiple clicks
    setButtonsDisabled(true);

    // Check the inputted answer is the same as the correct answer
    if (answerSelected == correctAnswer) {
      // if so then increment the score
      scoreAmount++;
      score.innerText = scoreAmount;
      document.getElementById(`answer${answerSelected}`).classList.add('correct');
    } else {
      document.getElementById(`answer${answerSelected}`).classList.add('incorrect');
    }

    // Delay for 1 second (1000ms) and then reset button styles
    setTimeout(() => {
      // Remove the 'correct' and 'incorrect' classes after delay
      const buttons = [answer0, answer1, answer2, answer3];
      buttons.forEach(button => {
        button.classList.remove('correct', 'incorrect');
      });

      // Move to the next question
      questionNumber++;
      quizHost();

      // Re-enable buttons for the next question
      setButtonsDisabled(false);
    }, 1000);  // 1000ms = 1 second delay
  }
  
quizHost();
/**
 * this function will add a reset button
 * this will be for people trying to get a perfect score
 */
function resetQuiz() {
    questionNumber = 0; // Reset question number
    scoreAmount = 0; // Reset score
    score.innerText = scoreAmount; // Update score display
    /**
     * location reload will refresh the page
     * and reset the quiz
     * making sure the user has a clean slate
     */
    location.reload();
    // Show the wrapper and hide the reset button
    document.getElementById("resetBtn").style.display = "none";
    wrapper.style.display = "block";
    // Reload the first question and answers
    quizHost();
}