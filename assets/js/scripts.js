//  getters
const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const answer0 = document.getElementById("answer0");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const answer5 = document.getElementById("answer5");
const answer6 = document.getElementById("answer6");
const answer7 = document.getElementById("answer7");
const answer8 = document.getElementById("answer8");
const answer9 = document.getElementById("answer9");


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
        "answers": ["System of a down", "Slipknot", "Korn", "Deftones"],
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
]
let questionNumber = 0;
let scoreAmount = 0;
// This loads the question
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
        wrapper.innerHTML = `<h2>Its the end you got ${scoreAmount} right</h2>`
    }
}
/**
 * This function checks the inputted answer with the 
 * actual answer. If corrrect it updates score on page.
 * The function always increments the questionNumber 
 * after checking and returns to the quizHost
 * @param {number} answerSelected 
 */
function checkAnswer(answerSelected) {
    console.log("hey you pressed: ", answerSelected);
    let correctAnswer = questions[questionNumber].correct;
    // Check the inputted answer is the same as the correct answer
    if (answerSelected == correctAnswer) {
        // if so then increment the score
        scoreAmount++;
        score.innerText = scoreAmount;
    }
    questionNumber++;
    quizHost();
}
quizHost();