// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './utils.js';

const submitButton = document.getElementById('submit');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const error = document.getElementById('error');

let wins = 0;
let losses = 0;

submitButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected){
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userThrow = selected.value;
    const compThrow = getRandomThrow();
  //if user won, outsource this to a functino
//if user won
    if (didUserWin(userThrow, compThrow)){
        wins++;
    //wins = wins + 1
    } else {
        losses++;
    // losses = losses + 1
    }

    winSpan.textContent = wins;
    lossSpan.textContent = losses;

});