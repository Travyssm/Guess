const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionArea = document.getElementById("question-area");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const musicContainer = document.getElementsByClassName("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementsByClassName("progress");
const progressContainer = document.getElementsByClassName("progress-container");
const title = document.getElementById("song-title");

const songs = ["Song A", "Song B", "Song C", "Song D"];


let randomQuestions, currentQuestionIndex;
let score = 0;
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
});

function startQuiz() {
  startButton.classList.add("hide");
  randomQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  score = 0;
  questionArea.classList.remove("hide");
  nextQuestion();
  };

function nextQuestion() {
    resetState();
showQuestion(randomQuestions[currentQuestionIndex])
};

function showQuestion(question){
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
          button.dataset.correct = answer.correct
      };
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button)
  })
  };

  function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    };
};

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  setStatusClass(document.body, correct);
  if (correct){
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }
  Array.from(answerButtonsElement.children).forEach(button => {
     if(button.dataset.correct === "true"){
      button.classList.add("correct");
     }
     button.disabled = true;
  })
  if (randomQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove("hide");
  } else {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
      startButton.innerText = "Play Again";
      startButton.classList.remove("hide");
  
      pauseSong();
  }
  }
  
  function setStatusClass(element, correct){
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
  

  const questions = [
    {
      question: "What is the name of... Song A?",
      answers: [
        { text: "Through Traffic", correct: true},
        { text: "Meteor Falls", correct: false},
        { text: "Full Speed Ahead", correct: false},
        { text: "The Core", correct: false},
      ] 
    },
    {
      question: "What is the name of... Song B?",
      answers: [
        { text: "The Divine Wings", correct: false},
        { text: "Un-gravitify", correct: false},
        { text: "Gadget Round", correct: true},
        { text: "Wish and Hope", correct: false},
      ] 
    },
    {
      question: "What is the name of... Song C?",
      answers: [
        { text: "Multi Attack", correct: false},
        { text: "Sealed Ground", correct: true},
        { text: "Babylon Garden", correct: false},
        { text: "After the Storm", correct: false},
      ] 
    },
    {
      question: "What is the name of... Song D?",
      answers: [
        { text: "The Lightless Black", correct: false},
        { text: "Blast Town", correct: false},
        { text: "Spiral Madness", correct: false},
        { text: "Aquatic Time", correct: true},
      ] 
    }
  ];