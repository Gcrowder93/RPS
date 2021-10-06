export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}

export function didUserWin(userThrow, compThrow){
    if (userThrow === compThrow) {
        return 'draw';
    }
    else if (userThrow === 'rock' && compThrow === 'scissors') {
        return 'win';
    }
    else if (userThrow === 'paper' && compThrow === 'rock') {
        return 'win';
    }
    else if (userThrow === 'scissors' && compThrow === 'paper') {
        return 'win';
    }
}

export function didUserLose(userThrow, compThrow){
    if (userThrow === compThrow) {
        return 'draw';
    }
    else if (userThrow === 'rock' && compThrow === 'paper') {
        return 'losses';
    }
    else if (userThrow === 'paper' && compThrow === 'scissors') {
        return 'losses';
    }
    else if (userThrow === 'scissors' && compThrow === 'rock') {
        return 'losses';
    }
}

export function didUserDraw(userThrow, compThrow){
    if (userThrow === compThrow) {
        return 'draw';
    }
    else if (userThrow === 'rock' && compThrow === 'rock'){
        return 'draw';
    }
    else if (userThrow === 'paper' && compThrow === 'paper'){
        return 'draw';
    }
    else if (userThrow === 'scissors' && compThrow === 'scissors'){
        return 'draw';
    }
}