import ifYes from "./if-yes.js";

const quizButton = document.getElementById('click', quizButton);
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    

    console.log("hit button");

    document.getElementById('results').style.visibility = "visible";
})