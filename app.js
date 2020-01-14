import ifYes from "./if-yes.js";

const quizButton = document.getElementById('quizButton');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    console.log("hit button");

    const name = prompt('What\'s your name?');
    const confirmation = confirm(`Hello ${name}, would you like to take a quiz about Fiona?`)

    if (confirmation === false) return;

    const questionOne = prompt('Do I like to travel?'); //answer yes
    const questionTwo = prompt('Am I a fan of live music?'); //answer yes
    const questionThree = prompt('Do I enjoy baking?'); //answer yes
    const questionFour = prompt('Do I play musical instruments?'); //answer no

    let count = 0;
    if (ifYes(questionOne)) count ++;

    if (ifYes(questionTwo)) count ++;

    if (ifYes(questionThree)) count ++;

    if (!ifYes(questionFour)) count ++;
    
    results.textContent = `Wow ${name}, you got ${count} correct`;

    document.getElementById('results').style.visibility = "visible";
})