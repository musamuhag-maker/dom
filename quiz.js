const questions = [
  {
    id: 1,
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A database",
      "An operating system",
      "A web server",
    ],
    answer: "A programming language",
  },
  {
    id: 2,
    question: "Which keyword is used to declare a variable?",
    options: ["var", "let", "const", "All of the above"],
    answer: "All of the above",
  },
  {
    id: 3,
    question: "Which method converts JSON to a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()",
    ],
    answer: "JSON.parse()",
  },
  {
    id: 4,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "**"],
    answer: "//",
  },
  {
    id: 5,
    question: "What will typeof null return?",
    options: ["null", "object", "undefined", "string"],
    answer: "object",
  },
  {
    id: 6,
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()",
  },
  {
    id: 7,
    question: "Which method removes the last element from an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "pop()",
  },
  {
    id: 8,
    question: "What is the result of 2 + '2' in JavaScript?",
    options: ["4", "'22'", "NaN", "undefined"],
    answer: "'22'",
  },
  {
    id: 9,
    question: "Which keyword is used to define a function?",
    options: ["function", "def", "func", "define"],
    answer: "function",
  },
  {
    id: 10,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Digital Ordinance Model",
      "Document Oriented Module",
    ],
    answer: "Document Object Model",
  },
  {
    id: 11,
    question: "Which operator is used for strict equality?",
    options: ["==", "===", "!=", "="],
    answer: "===",
  },
  {
    id: 12,
    question: "Which method is used to select an element by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElementsByClassName()",
      "getElementByTag()",
    ],
    answer: "getElementById()",
  },
  {
    id: 13,
    question: "What is the output of Boolean(0)?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "false",
  },
  {
    id: 14,
    question: "Which loop is guaranteed to run at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: "do...while",
  },
  {
    id: 15,
    question: "What does NaN stand for?",
    options: ["Not a Number", "New and Null", "Number and Name", "None"],
    answer: "Not a Number",
  },
  {
    id: 16,
    question: "Which method is used to convert an object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toString()",
      "JSON.object()",
    ],
    answer: "JSON.stringify()",
  },
  {
    id: 17,
    question: "Which keyword stops a loop?",
    options: ["stop", "break", "exit", "return"],
    answer: "break",
  },
  {
    id: 18,
    question: "What is the default value of an uninitialized variable?",
    options: ["null", "0", "undefined", "false"],
    answer: "undefined",
  },
  {
    id: 19,
    question: "Which method joins array elements into a string?",
    options: ["join()", "concat()", "slice()", "splice()"],
    answer: "join()",
  },
  {
    id: 20,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape",
  },
];

let index = 0;
let score = 0;

const qTag = document.getElementById("q");
const inputOptions = document.querySelectorAll("input");
const btns = document.querySelectorAll("button");
const labels = document.querySelectorAll("label");

function displayQuestion() {
  qTag.innerHTML = questions[index].question;
  inputOptions[0].value = questions[index].options[0];
  inputOptions[1].value = questions[index].options[1];
  inputOptions[2].value = questions[index].options[2];
  inputOptions[3].value = questions[index].options[3];

  labels[0].innerHTML = questions[index].options[0];
  labels[1].innerHTML = questions[index].options[1];
  labels[2].innerHTML = questions[index].options[2];
  labels[3].innerHTML = questions[index].options[3];

   console.log(score)
}

inputOptions.forEach((input) => {
  input.addEventListener("change", function (event) {
    if (event.target.value === questions[index].answer) {
      score += 2;
    }
  });
});

displayQuestion();

btns[1].addEventListener("click", function () {
  index += 1;
  displayQuestion();
});

btns[0].addEventListener("click", function () {
  if (index > 0) {
    index -= 1;
    displayQuestion();
  }
});
