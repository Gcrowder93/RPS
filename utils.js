export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random() * 2)];
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

