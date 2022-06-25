let player = 'X';
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
    let checkXStatus = 0;
    let check0Status = 0;

    //check rows
    for (let i = 1; i <= 7; i += 3) {
        for (let j = i; j <= i + 2; ++j) {
            if (getInputValue(j) == 'X') {
                checkXStatus += 1;
            } else if(getInputValue(j) == '0') {
                check0Status += 1;
            }
        }
        checkWinner(checkXStatus, check0Status);
        check0Status = 0;
        checkXStatus = 0;
    }

    //check columns
    for (let i = 1; i <= 3; ++i) {
        for (let j = i; j <= i + 6; j += 3) {
            if (getInputValue(j) == 'X') {
                checkXStatus += 1;
            } else if(getInputValue(j) == '0') {
                check0Status += 1;
            }
        }
        checkWinner(checkXStatus, check0Status);
        check0Status = 0;
        checkXStatus = 0;
    }

    //check the main diagonal
    for (let j = 1; j <= 9; j += 4) {
        if (getInputValue(j) == 'X') {
            checkXStatus += 1;
        } else if(getInputValue(j) == '0') {
            check0Status += 1;
        }
    }
    checkWinner(checkXStatus, check0Status);
    check0Status = 0;
    checkXStatus = 0;

    //check the secundary diagonal
    for (let j = 3; j <= 7; j += 2) {
        if (getInputValue(j) == 'X') {
            checkXStatus += 1;
        } else if(getInputValue(j) == '0') {
            check0Status += 1;
        }
    }
    checkWinner(checkXStatus, check0Status);
    check0Status = 0;
    checkXStatus = 0;

    //check equality
    checkEquality();
}

function checkEquality() {
    let checkEquality = 0;
    for (let i = 1; i <= 9; ++i) {
        if (getInputValue(i) == 'X' || getInputValue(i) == '0') {
            ++checkEquality;
        }
    }
    if (checkEquality == 9) {
        return document.getElementById('playerStatus').innerText = 'Equality!';
    }
}

function checkWinner(x, o) {
    if (x == 3) {
        ++scoreX;
        document.getElementById('scoreX').innerText = scoreX;
        return document.getElementById('playerStatus').innerText = 'Player X won!';
    } else if (o == 3) {
        ++score0;
        document.getElementById('score0').innerText = score0;
        return document.getElementById('playerStatus').innerText = 'Player 0 won!';
    }
}

function restartGame() { 
    for (let i = 1; i <= 9; ++i) {
        document.getElementById(i).value = '';
    }
    player = 'X';
}
