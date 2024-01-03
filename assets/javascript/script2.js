const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");

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


  const questions = [
    {
      question: "What is the name of... Song A?",
      Audio: "Through Traffic.mp3",
      answers: [
        { text: "Through Traffic", correct: true},
        { text: "Meteor Falls", correct: false},
        { text: "Full Speed Ahead", correct: false},
        { text: "The Core", correct: false},
      ] 
    },
    {
      question: "What is the name of... Song B?",
      Audio: "Gadget Round.mp3",
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