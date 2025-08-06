const questions = [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Text Markup Language", "Hyperlink and Text Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which programming language is used for web development?", options: ["Python", "C++", "JavaScript", "Swift"], answer: "JavaScript" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "Which of the following is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], answer: "React" },
    { question: "What is the purpose of the `<head>` tag in HTML?", options: ["Defines the body content", "Contains metadata", "Creates a footer", "Displays images"], answer: "Contains metadata" },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "#", "--"], answer: "//" },
    { question: "Which method is used to add an element at the end of an array in JavaScript?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Standard Query Language", "Sequential Query Language", "Scripted Query Language"], answer: "Structured Query Language" },
    { question: "Which company developed Java?", options: ["Microsoft", "Apple", "Sun Microsystems", "IBM"], answer: "Sun Microsystems" },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: "<style>" },
    { question: "Which protocol is used to transfer web pages?", options: ["FTP", "HTTP", "TCP", "SMTP"], answer: "HTTP" },
    { question: "Which of these is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: "MongoDB" },
    { question: "Which of the following is a frontend framework?", options: ["Node.js", "Django", "Bootstrap", "Flask"], answer: "Bootstrap" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Advanced Programming Integration", "Automated Process Implementation", "Application Process Interface"], answer: "Application Programming Interface" },
    { question: "Which CSS property is used to change text color?", options: ["color", "font-color", "text-color", "foreground"], answer: "color" },
    { question: "Which HTML tag is used to display an image?", options: ["<image>", "<img>", "<pic>", "<photo>"], answer: "<img>" },
    { question: "Which JavaScript function is used to print something in the console?", options: ["console.log()", "print()", "log.console()", "output()"], answer: "console.log()" },
    { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
    { question: "Which of the following is NOT a CSS framework?", options: ["Bootstrap", "Foundation", "React", "Bulma"], answer: "React" },
    { question: "Which technology is used to make web pages interactive?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "JavaScript" }
];

let currentQuestion = 0;
let score = 0;
let timer;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

function loadQuestion() {
    if (currentQuestion < questions.length) {
        questionEl.textContent = questions[currentQuestion].question;
        optionsEl.innerHTML = "";
        questions[currentQuestion].options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("btn");
            btn.onclick = () => {
                clearInterval(timer);
                checkAnswer(option);
            };
            optionsEl.appendChild(btn);
        });
        startTimer();
    } else {
        questionEl.textContent = "Quiz Completed!";
        optionsEl.innerHTML = `<h3>Final Score: ${score} / ${questions.length}</h3>`;
        timerEl.textContent = "";
    }
}

function startTimer() {
    let timeLeft = 30;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestion++;
            loadQuestion();
        }
    }, 1000);
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
        scoreEl.textContent = `Score: ${score}`;
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
