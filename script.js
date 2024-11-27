const questions = [
    {
        question: "What is the capital of Japan?",
        choices: ["Tokyo", "Kyoto", "Osaka", "Nagasaki"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Earth", "Jupiter", "Venus"],
        correct: 0
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        choices: ["Jane Austen", "Charles Dickens", "J.K. Rowling", "Mark Twain"],
        correct: 0
    },
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Jane Austen", "Mark Twain", "J.K. Rowling"],
        correct: 0
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
        correct: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Who painted the Mona Lisa?",
        choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correct: 0
    },
    {
        question: "In what year did the Titanic sink?",
        choices: ["1912", "1905", "1918", "1923"],
        correct: 0
    },
    {
        question: "Which country is known for the maple leaf symbol?",
        choices: ["Canada", "Australia", "Japan", "United Kingdom"],
        correct: 0
    },
    {
        question: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correct: 2
    },
    {
        question: "Who discovered gravity by observing a falling apple?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correct: 0
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        choices: ["Spanish", "Portuguese", "French", "Italian"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for water?",
        choices: ["O2", "H2O", "CO2", "HO"],
        correct: 1
    },
    {
        question: "Which instrument is known as the 'king of instruments'?",
        choices: ["Piano", "Violin", "Organ", "Guitar"],
        correct: 2
    },
    {
        question: "Who was the first president of the United States?",
        choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correct: 1
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        choices: ["Asia", "Africa", "South America", "Australia"],
        correct: 1
    },
    {
        question: "What is the freezing point of water in Celsius?",
        choices: ["0°C", "32°C", "100°C", "-1°C"],
        correct: 0
    },
    {
        question: "Which planet is the largest in our solar system?",
        choices: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correct: 2
    },


];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        button.addEventListener('click', () => selectAnswer(index));
        choicesContainer.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hidden');
    choicesContainer.innerHTML = '';
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
        score++;
    }
    nextButton.classList.remove('hidden');
    Array.from(choicesContainer.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === currentQuestion.choices[currentQuestion.correct]) {
            button.style.backgroundColor = "#4caf50";
        } else {
            button.style.backgroundColor = "#f44336";
        }
    });
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.classList.add('hidden');
    choicesContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
}

startQuiz();
