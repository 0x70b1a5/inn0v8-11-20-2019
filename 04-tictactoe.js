$("h1").text("TIC TAC TOE!");

let gameOver = false;
let turnNumber = 0;

function getNewGame() {
    gameOver = false;
    turnNumber = 0;

    return [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"]
    ];
}

let ourGame = getNewGame();

function isPlayerTurn() { return turnNumber % 2 == 0; }

function markRandomSquare(letter) {
    let marked = false;
    while (!marked) {
        const x = Math.round(Math.random() * 2);
        const y = Math.round(Math.random() * 2);
        const ourSquare = ourGame[x][y];
        if (ourSquare == "_") {
            ourGame[x][y] = letter;
            marked = true;
        }
    }
}

function addText(text) {
    const oldText = $output.text();
    $output.text(oldText + text + "\n\n");
}

function takeComputerTurn() { 
    markRandomSquare("O");
    checkVictory();
    addText("Take that!");
}

function checkVictory() {
    turnNumber++;

    if (ourGame[0][0] == "X" && ourGame[0][1] == "X" && ourGame[0][2] == "X" || // check rows
        ourGame[1][0] == "X" && ourGame[1][1] == "X" && ourGame[1][2] == "X" || // .
        ourGame[2][0] == "X" && ourGame[2][1] == "X" && ourGame[2][2] == "X" || // .
        ourGame[0][0] == "X" && ourGame[1][0] == "X" && ourGame[2][0] == "X" || // check columns
        ourGame[1][0] == "X" && ourGame[1][1] == "X" && ourGame[1][2] == "X" || // .
        ourGame[2][0] == "X" && ourGame[2][1] == "X" && ourGame[2][2] == "X" || // .
        ourGame[0][0] == "X" && ourGame[1][1] == "X" && ourGame[2][2] == "X" || // check diagonals
        ourGame[0][2] == "X" && ourGame[1][1] == "X" && ourGame[0][2] == "X" ///// .
    ) {
        addText("X WINS!");
        gameOver = true;
    } else if (
        ourGame[0][0] == "O" && ourGame[0][1] == "O" && ourGame[0][2] == "O" || // check rows
        ourGame[1][0] == "O" && ourGame[1][1] == "O" && ourGame[1][2] == "O" || // .
        ourGame[2][0] == "O" && ourGame[2][1] == "O" && ourGame[2][2] == "O" || // .
        ourGame[0][0] == "O" && ourGame[1][0] == "O" && ourGame[2][0] == "O" || // check columns
        ourGame[1][0] == "O" && ourGame[1][1] == "O" && ourGame[1][2] == "O" || // .
        ourGame[2][0] == "O" && ourGame[2][1] == "O" && ourGame[2][2] == "O" || // .
        ourGame[0][0] == "O" && ourGame[1][1] == "O" && ourGame[2][2] == "O" || // check diagonals
        ourGame[0][2] == "O" && ourGame[1][1] == "O" && ourGame[0][2] == "O" ///// .
    ) {        
        addText("O WINS!");
        gameOver = true;
    }

    if (!isPlayerTurn() && !gameOver) {
        takeComputerTurn();
    } else {
        drawCurrentGame();
    }
}

function getSquareFromPlayerMove(number) {
    const index = number - 1;
    if (index == 0) return ourGame[0][0];
    if (index == 1) return ourGame[0][1];
    if (index == 2) return ourGame[0][2];
    if (index == 3) return ourGame[1][0];
    if (index == 4) return ourGame[1][1];
    if (index == 5) return ourGame[1][2];
    if (index == 6) return ourGame[2][0];
    if (index == 7) return ourGame[2][1];
    if (index == 8) return ourGame[2][2];
}

function setSquareFromPlayerMove(number, letter) {
    const index = number - 1;
    if (index == 0) ourGame[0][0] = letter;
    if (index == 1) ourGame[0][1] = letter;
    if (index == 2) ourGame[0][2] = letter;
    if (index == 3) ourGame[1][0] = letter;
    if (index == 4) ourGame[1][1] = letter;
    if (index == 5) ourGame[1][2] = letter;
    if (index == 6) ourGame[2][0] = letter;
    if (index == 7) ourGame[2][1] = letter;
    if (index == 8) ourGame[2][2] = letter;
}

function drawCurrentGame() {
    const game = ourGame.join('\n');
    addText(game);
}

$submit.off("click"); // don't worry about this

$submit.click(function() {
    const playerMove = parseInt($input.val());

    $input.val("");

    if (isNaN(playerMove) || playerMove < 1 || playerMove > 9) {
        addText("Invalid move. Please enter a number 1-9.");
    } else if (getSquareFromPlayerMove(playerMove) != "_") {
        addText("Invalid move. Please enter the number of a square without a letter in it.");
    } else {
        setSquareFromPlayerMove(playerMove, "X");
        checkVictory();
    }
});

addText("Welcome to TIC TAC TOE! You always go first, because humans are superior to robots.");
addText("To enter your moves, please enter a single number. Use the numbers 1,2,3 for the squares on the first row, 4,5,6 for the squares on the second row, and (you may have guessed) 7,8,9 for the squares on the third row.");

drawCurrentGame();
