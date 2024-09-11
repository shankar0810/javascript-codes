let randomNumber;
let score = 0;

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 9000) + 1000;
    console.log("Generated Number:", randomNumber);
}

function submitGuesses() {
    let guess1 = parseInt(document.getElementById('guess1').value);
    let guess2 = parseInt(document.getElementById('guess2').value);
    let guess3 = parseInt(document.getElementById('guess3').value);

    let guesses = [guess1, guess2, guess3];
    let message = '';

    guesses.forEach(guess => {
        if (guess < randomNumber) {
            score -= 10;
            message += `Guess ${guess} is less than the generated number. Score: ${score}<br>`;
        } else {
            score += 10;
            message += `Guess ${guess} is greater than or equal to the generated number. Score: ${score}<br>`;
        }
    });

    document.getElementById('message').innerHTML = message;
    document.getElementById('score').innerText = score;
}

setInterval(generateRandomNumber, 2000);
