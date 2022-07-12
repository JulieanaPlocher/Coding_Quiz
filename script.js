const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, correctQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  correctQuestionIndex++;
  setnextQuestion;
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  correctQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setnextQuestion();
  quizScore = 0;
}

//Shuffle Questions
function setnextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Display Questions & answers for user to see
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.ass("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
  if ((selectedButton.dataset = correct)) {
    quizScore++;
  }
  document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//Quiz questions and answers:
const questions = {
  question: "What does HTML stand for?",
  answers: [
    { text: "Hyper Text Medium Language", correct: false },
    { text: "Hyper Trainer Marking Leveler", correct: false },
    { text: "Hyper Text Markup Language", correct: true },
    { text: "Heavy text Markup Lessons", correct: false },
  ],
};
{
    question: "Which of the following is not a programming language?",
    answers :[
        { text: 'TypeScript', correct: false},
        { text: 'Anaconda', correct: true},
        { text: 'Python', correct: false},
        { text: 'Java', correct: false}
    ]
}

