import { didUserWin } from '../utils.js';


const test = QUnit.test;

test('testing didUserWin', (expect) => {
    const actual = didUserWin('rock', 'scissors');
    const expected = 'win';
    expect.equal (actual, expected, 'should be a win');
    
});

test('testing didUserWin', (expect) => {
    const actual = didUserWin('rock', 'paper');
    const expected = 'loss';
    expect.equal(actual, expected, 'should be a loss');
});

test('testing didUserWin', (expect) => {
    const actual = didUserWin('paper', 'scissors');
    const expected = 'loss';
    expect.equal(actual, expected, 'should be a loss');
});

test('testing didUserWin', (expect) => {
    const actual = didUserWin('paper', 'rock');
    const expected = 'win';
    expect.equal(actual, expected, 'should be a win');
});

test('testing didUserWin', (expect) => {
    const actual = didUserWin('scissor', 'rock');
    const expected = 'loss';
    expect.equal(actual, expected, 'should be a loss');
});

test('testing didUserWin', (expect) => {
    const actual = didUserWin('scissor', 'paper');
    const expected = 'loss';
    expect.equal(actual, expected, 'should be a loss');
});


