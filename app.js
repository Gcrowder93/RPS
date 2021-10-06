// import functions and grab DOM elements
import { didUserWin, getRandomThrow, didUserLose } from './utils.js';
const submitButton = document.getElementById('submit');
const winSpan = document.getElementById('wins');
const lossSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const error = document.getElementById('error');

let wins = 0;
let losses = 0;
let draws = 0;

submitButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    if (!selected){
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userThrow = selected.value;
    const compThrow = getRandomThrow();

    if (didUserWin(userThrow, compThrow)){
        wins++;
    } 
    if (didUserLose(userThrow)){
        losses++;
    }
  
    
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;
});