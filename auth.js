function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("quizUser", username);
        localStorage.setItem("quizPass", password);
        alert("Signup successful! Please log in.");
        window.location.href = "login.html";
    } else {
        alert("Please fill all fields.");
    }
}

function logIn() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedUser = localStorage.getItem("quizUser");
    const storedPass = localStorage.getItem("quizPass");

    if (username === storedUser && password === storedPass) {
        alert("Login successful! Redirecting to quiz...");
        window.location.href = "quiz.html";
    } else {
        alert("Invalid credentials. Try again.");
    }
}
