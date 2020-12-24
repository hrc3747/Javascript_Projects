let activePlayer = 'X';  //Create global variable, assign human player to X

let selectedSquares = [];       //Create empty object at start of new game

function placeXorO(squareNumber) {      //Create a function for each turn when a square is selected
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {     //Place image in square based on which player is active
            select.style.backgroundImage = 'url("Images/squirtle.jpg")';
        } else {
            select.style.backgroundImage = 'url("Images/charmander.jpg")';
        }

        selectedSquares.push(squareNumber + activePlayer);      //Combine player with selected square number
        checkWinConditions();       //Call function that checks if last move won the game

        if (activePlayer === 'X') {     //Switch active player
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        audio('./Media/place.mp3');     //Play noise each time a new square is selected
        if(activePlayer === 'O') {      //Disable human interaction during computer turn
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }

    function computersTurn() {      //Create a function to allow computer to pick a square at random
        let success = false;
        let pickASquare;
        while(!success) {       //Repeat loop until an unoccupied square is selected by computer
            pickASquare = String(Math.floor(Math.random() * 9));  //Use random number generator to select a number between 0 and 9, representing squares on the board
            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                success = true;
            };
        }
    }
}

function checkWinConditions() {     //Create a funtion which checks for all possible winning combinations for each player and defines where to draw a line for each winning combination
    if      (arrayIncludes('0X', '1X','2X')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X','3X','6X')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X','5X','8X')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X','4X','2X')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine(100, 100, 520, 520);}
    else if (arrayIncludes('0O','1O','2O')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O','4O','5O')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O','7O','8O')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O','3O','6O')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O','4O','7O')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O','5O','8O')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O','4O','2O')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O','4O','8O')) {drawWinLine(100, 100, 520, 520);}
    else if (selectedSquares.length >= 9) {     //Check if all squares are selected without a winnin combination
        audio('./Media/tie.mp3');       //Play sound effect for a tied game
        setTimeout(function() {resetGame(); },1000);        //Reset game after 1 second if ended due to winning or tie
    }

    function arrayIncludes(squareA, squareB, squareC) {     //Create a funtion which checks if winning combination of 3 squares is present in the array of selected squares
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) {return true; }
    }
}

function disableClick() {       //Create a function that disables clicking while the computer is taking a turn
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {      //Create a function for playing sounds with the audio url as input
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {      //Create a function to draw the line through three winning squares
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,       //Create local variables
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    function animateLineDrawing() {     //Create a function to animate drawing the win line
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';        //Define line color
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if(x < x2) {x += 10; }
            if(y < y2) {y += 10; }
            if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10; }
            if (y > y2) {y -= 10; }
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    function clear() {      //Create a function to clear the win line
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();     //Disable clicking
    audio('./Media/wingame.mp3');       //Play the win game sound
    animateLineDrawing();       //Draw win line
    setTimeout(function() { clear(); resetGame(); }, 1000);     //Reset the game after a win
}

function resetGame() {      //Create a function to reset the game by clearing the selected squares array and images placed on the board
    for (let i=0; i <9; i++) {      //Create a loop to clear each square
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
        }
    selectedSquares=[];  //Reset array to empty
}