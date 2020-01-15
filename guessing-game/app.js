import compareNumbers from './compareNumbers.js';

const button = document.getElementById('submitButton');
const guessBox = document.getElementById('userGuess');
const triesBox = document.getElementById('triesLeft');
const resultsBox = document.getElementById('results');
const results = document.getElementById('resultsDisplay');
const guess = document.getElementById('guessSpan');
const triesLeft = document.getElementById('triesDisplay');
const userInput = document.getElementById('userInput');

let tries = 5;
let correctNumber = Math.ceil(Math.random()*20);

submitButton.addEventListener('click', () =>{
    tries--;
    triesLeft.textContent = tries;
    
    if (tries === 0){
        submitButton.disabled = true;
    }
    const compNumbers = (Number(userInput.value));

    const newResults = compareNumbers(compNumbers, correctNumber);
    console.log(newResults);
    console.log(compNumbers);
    
    if (newResults === 0){
        results.textContent = 'You win!';
        guessBox.classList.remove('hidden');
        resultsBox.classList.remove('hidden');
        submitButton.disabled = true;
        triesBox.style.visibility = 'hidden';
    }
    else if (newResults === -1){
        results.textContent = 'You guessed too low!'
        guessBox.classList.remove('hidden');
        resultsBox.classList.remove('hidden');
    }
    else if (newResults === 1){
        results.textContent = 'You guessed too high!';
        guessBox.classList.remove('hidden');
        resultsBox.classList.remove('hidden');
    }
    if (tries === 0 && newResults != 0){
        results.textContent = 'You lose!'
        guessBox.style.visibility = 'hidden';

    }
});