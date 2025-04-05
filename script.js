const questions = [
    {
        question: "Which data structure uses LIFO (Last In, First Out) principle?",
        answers: [
            { text: "Queue", correct: false },
            { text: "Stack", correct: true },
            { text: "Linked List", correct: false },
            { text: "Hash Table", correct: false },
        ]
    },
    {
        question: "Which OOP concept allows multiple methods in a class to have the same name but different parameters?",
        answers: [
            { text: "Abstraction", correct: false },
            { text: "Encapsulation", correct: false },
            { text: "Method Overloading", correct: true },
            { text: "Method Overriding", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        answers: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false },
        ]
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        answers: [
            { text: "inherits", correct: false },
            { text: "extends", correct: true },
            { text: "implements", correct: false },
            { text: "super", correct: false },
        ]
    },
    {
        question: "Which SQL command is used to remove all records from a table without deleting the table structure?",
        answers: [
            { text: "DELETE", correct: false },
            { text: "DROP", correct: false },
            { text: "REMOVE", correct: false },
            { text: "TRUNCATE", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();