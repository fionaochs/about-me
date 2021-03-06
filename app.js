import ifYes from "./if-yes.js";

const quizButton = document.getElementById('quizButton');
const results = document.getElementById('results');

quizButton.addEventListener('click', () => {
    console.log("hit button");

    let name = prompt('What\'s your name?');
    if (name === null || name === ""){
        alert ('You must enter a name!')
        name = prompt('What\'s your name?');
    }
    const confirmation = confirm(`Hello ${name}, would you like to take a quiz about Fiona?`)

    if (confirmation === false) return;
    
    let questionOne = prompt('Do I like to travel?'); //answer yes
    if (questionOne === null || questionOne === ""){
        alert ('Enter an answer')
        let questionOne = prompt('Do I like to travel?');
    }
    let questionTwo = prompt('Am I a fan of live music?'); //answer yes
    if (questionTwo === null || questionTwo === ""){
        alert ('Enter an answer')
        let questionTwo = prompt('Am I a fan of live music?');
    }
    let questionThree = prompt('Do I enjoy baking?'); //answer yes
    if (questionThree === null || questionThree === ""){
        alert ('Enter an answer')
        let questionThree = prompt('Do I enjoy baking?');
    }
    let questionFour = prompt('Do I play musical instruments?'); //answer no
    if (questionFour === null || questionFour === ""){
        alert ('Enter an answer')
        let questionFour = prompt('Do I play musical instruments?');
    }

    let count = 0;
    if (ifYes(questionOne)) count ++;

    if (ifYes(questionTwo)) count ++;

    if (ifYes(questionThree)) count ++;

    if (!ifYes(questionFour)) count ++;

     let percentage = count/4*100;
     let roundPercent = Math.round(percentage);


     if (count === 0) {
         results.textContent = `Wow ${name}, you don't know me at all. You didn't get any correct, I'm hurt`;
     } else if (count < 4){
        results.textContent = `${name}, you got ${count} correct. That's ${roundPercent}%`;
    } else {
         results.textContent = `${name}, you got ${count} correct. That's ${roundPercent}%!`;
         document.getElementById('celebrate').style.visibility = "visible";
     };
    

    document.getElementById('results').style.visibility = "visible";
})