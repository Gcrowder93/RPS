export function didUserWin(userThrow, compThrow){
    if (userThrow === compThrow) {
        return true;
    } else {
        return false;
    }
}

export function getRandomThrow(){
    return ['rock', 'paper', 'scissors'][Math.round(Math.random())];
}

// userThrow
// rock, paper, scissors

// computerThrow
// rock, paper, scissors

// possible outcomes: 'win', 'lose', draw'

// if userThrow === computerThrow return 'draw'
// if user throws rock
//    if computer throws scissors return 'win'
// if user throws paper
//    if computer throws rock return 'win'
// if user throws scissors
//    if computer throws paper, return 'win'
// return 'lose'

// if the userThrows rock && compThrow scissors, return 'win'
// else if the userThrows paper && compThrow rock, return 'win'
// else if the userThrows scissors && compThrow paper, return 'win'
// else if return 'lose'