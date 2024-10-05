const numberToGuess = 50;
let attempts = 0;
const maxAttempts = 5;

function makeGuess() {
    const guessInput = document.getElementById('guessInput').value;
    const resultText = document.getElementById('resultText');
    const attemptsText = document.getElementById('attemptsText');

    const userGuess = parseInt(guessInput);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        resultText.innerHTML = "Please enter a valid number between 1 and 100.";
        resultText.classList.add("error");
        return;
    }

    attempts++;
    resultText.classList.remove("error");

    if (userGuess === numberToGuess) {
        resultText.innerHTML = `🎉 Congratulations! You guessed the correct number ${numberToGuess}. 🎉`;
        attemptsText.innerHTML = `You took ${attempts} attempt(s) to guess correctly.`;
        disableInput();
    } else if (userGuess < numberToGuess) {
        resultText.innerHTML = "Your guess is too low. Try again! 📉";
    } else {
        resultText.innerHTML = "Your guess is too high. Try again! 📈";
    }

    if (attempts >= maxAttempts && userGuess !== numberToGuess) {
        resultText.innerHTML = `😢 Sorry! You've used all your attempts. The correct number was ${numberToGuess}.`;
        attemptsText.innerHTML = `Game over after ${attempts} attempts.`;
        disableInput();
    } else {
        attemptsText.innerHTML = `Attempt ${attempts}/${maxAttempts}`;
    }
}

function disableInput() {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
