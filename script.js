"use strict";

// DOM Elements
const submitBtn = document.getElementById("submit");
const question = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer__btn");
const [a, b, c, d] = answerBtns;

// Data
const quizData = [
  {
    question: "Which streamer is more famous in Turkey?",
    a: "wtcN",
    b: "Jahrein",
    c: "Elraenn",
    d: "Mithrain",
    correct: "c",
  },
  {
    question: "Which streamer is more famous globally?",
    a: "Ninja",
    b: "Auronplay",
    c: "Ibai",
    d: "Rubius",
    correct: "a",
  },
  {
    question: "Which team won the CS:GO tournament in 2023?",
    a: "GamerLegion",
    b: "Team Vitality",
    c: "FORZE Esports	",
    d: "Natus Vincere",
    correct: "b",
  },
  {
    question:
      "Which is the most watched movie in the world?",
    a: "The Shawshank Redemption",
    b: "Forrest gump",
    c: "The Dark Knight",
    d: "City of God",
    correct: "b",
  },
  {
    question: "Which is the most watched TV series in the world?",
    a: "Planet Earth",
    b: "Breaking Bad",
    c: "Game of Thrones",
    d: "Sherlock",
    correct: "a",
  },
  {
    question:
      "What are the most streamed songs on YouTube?",
    a: "Ed Sheeran - Shape of You",
    b: "Luis Fonsi - Despacito",
    c: "PSY - GANGNAM STYLE",
    d: "El Chombo - Dame Tu Cosita",
    correct: "b",
  },
  {
    question: "What is the most common religion in the world?",
    a: "Christianity",
    b: "Islam",
    c: "Atheism",
    d: "Judaism",
    correct: "a",
  },
];

let index = 0;
let score = 0;
let answer;

//! Class
class Stream {
  constructor() {
    this.showQuestion();
    answerBtns.forEach((btn) => {
      btn.addEventListener("click", this.select.bind(this, btn));
    });
    submitBtn.addEventListener("click", this.check.bind(this));
  }
  showQuestion() {
    question.textContent = quizData[index].question;
    a.textContent = quizData[index].a;
    b.textContent = quizData[index].b;
    c.textContent = quizData[index].c;
    d.textContent = quizData[index].d;
  }
  select(btn) {
    answerBtns.forEach((btn) => {
      btn.className =
        "answer__btn w-full border-2 border-white p-2 cursor-pointer rounded transition-all duration-200 shadow-md active:scale-95 hover:bg-white hover:text-blue-600";
    });
    answer = btn.dataset.answer;
    btn.classList.add("scale-95", "bg-white", "text-blue-600");
  }

  check() {
    if (!answer) return;
    const clickedAnswer = Array.from(answerBtns).find(
      (btn) => btn.dataset.answer == answer
    );
    if (answer === quizData[index].correct) {
      clickedAnswer.classList.add("text-white", "bg-green-600");
      score++;
    } else {
      clickedAnswer.classList.add("text-white", "bg-red-600");
    }

    setTimeout(() => {
      answer = undefined;
      answerBtns.forEach((btn) => {
        btn.className =
          "answer__btn w-full border-2 border-white p-2 cursor-pointer rounded transition-all duration-200 shadow-md active:scale-95 hover:bg-white hover:text-blue-600";
      });
      index++;
      if (index < quizData.length) {
        this.showQuestion();
      } else {
        alert(`Your score is ${score}/7`);
      }
    }, 1000);
  }
}

const quizAboutSM = new Stream();
