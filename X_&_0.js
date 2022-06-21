let player = 'X';
let checkXStatus = 0;
let check0Status = 0;
let checkEquality = 0;
let scoreX = 0;
let score0 = 0;

function playerSwitch(p) {
    if(player == '0' && p.value == '') {
        player = 'X';
        document.getElementById('playerStatus').innerText = "The player's turn X";
        return p.value = '0';
    } else if (p.value == '') {
        player = '0';
        document.getElementById('playerStatus').innerText = "The player's turn 0";
        return p.value = 'X';
    }
}

function getInputValue(v) {
    return document.getElementById(v).value;
}

function gameStatus() {
    //check rows
    for (let i = 1; i <= 7; i += 3) {
        for (let j = i; j <= i + 2; ++j) {
            matrixValue(j);
        }
        checkWinner();
        setToZero();
    }
    //check columns
    for (let i = 1; i <= 3; ++i) {
        for (let j = i; j <= i + 6; j += 3) {
            matrixValue(j);
        }
        checkWinner();
        setToZero();
    }
    //check the main diagonal
    for (let j = 1; j <= 9; j += 4) {
        matrixValue(j);
    }
    checkWinner();
    setToZero();
    //check the secundary diagonal
    for (let j = 3; j <= 7; j += 2) {
        matrixValue(j);
    }
    checkWinner();
    setToZero();
    //check equality
    for (let i = 1; i <= 9; ++i) {
        if (getInputValue(i) == 'X' || getInputValue(i) == '0') {
            ++checkEquality;
        }
    }
    checkWinner();
    setToZero();
}

function matrixValue(v) {
    if (getInputValue(v) == 'X') {
        checkXStatus += 1;
    } else if(getInputValue(v) == '0') {
        check0Status += 1;
    }
}

function checkWinner() {
    if (checkXStatus == 3) {
        ++scoreX;
        document.getElementById('scoreX').innerText = scoreX;
        return document.getElementById('playerStatus').innerText = 'Player X won!';
    } else if (check0Status == 3) {
        ++score0;
        document.getElementById('score0').innerText = score0;
        return document.getElementById('playerStatus').innerText = 'Player 0 won!';
    } else if (checkEquality == 9) {
        return document.getElementById('playerStatus').innerText = 'Equality!';
    }
}

function restartGame() { 
    for (let i = 1; i <= 9; ++i) {
        document.getElementById(i).value = '';
    }
    player = 'X';
    etToZero();
}

function setToZero() {
    checkXStatus = 0;
    check0Status = 0;
    checkEquality = 0;
}