// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './utils.js';
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
    console.log(userThrow, compThrow);
// rock 'win' doesnt work
// paper 'loss' doesnt work
// scissor 'draw' doesnt
    if (userThrow === compThrow){
        draws++;
    } else if (didUserWin(userThrow, compThrow)){
        wins++;
    } else {
        losses++;
    }
    winSpan.textContent = wins;
    lossSpan.textContent = losses;
    drawSpan.textContent = draws;

});