// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to UI elements
let guessField = document.getElementById('guessField');
let submitButton = document.querySelector('button');
let message = document.getElementById('message');
let guessCount = 0;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (userGuess === 0 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    
    guessCount++;
    document.getElementById('guessCount').textContent = guessCount;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number ${randomNumber} in ${guessCount} guesses!`;
        gameOver();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else {
        message.textContent = 'Too high! Try again.';
    }

    guessField.value = '';
    guessField.focus();
}

function gameOver() {
    guessField.disabled = true;
    submitButton.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessField.disabled = false;
    submitButton.disabled = false;
    message.textContent = '';
    document.getElementById('guessCount').textContent = guessCount;
    if (resetButton) {
        resetButton.parentNode.removeChild(resetButton);
    }
    guessField.value = '';
    guessField.focus();
}
