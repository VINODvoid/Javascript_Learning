const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrhi= document.querySelector('.lowOrhigh');
const startOver= document.querySelector('.resultParas');
let randomNum = parseInt(Math.random() * 100 +1);


// Creating the Paragraph
const p = document.createElement('p');
console.log(randomNum);
// previous guess
let prevGuess = [];
let numGuess =1;

let playGame = true;

if(playGame){
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess) 
})
}
// validaiting the guess
function validateGuess(guess) {
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }
    else if (guess < 1){
        alert('Please enter a number greater than 1');
    }
    else if(guess > 100){
        alert('Please enter a number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Number was ${randomNum}`);
            EndGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNum){
        displayMessage(`You guessed correctly!`);
        EndGame(); 
    }
    else if(guess < randomNum)
    {
        displayMessage(`Too low! Try again!`);
    }
    else if(guess > randomNum)
    {
        displayMessage(`Too High! Try again!`);
    }
}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += ` ${guess} ,`;
    numGuess ++ ;
    remaining.innerHTML = `${11-numGuess} Guesses Left!`;
}
//displaying the guess
function displayMessage(message) {
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
}
function EndGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// new  the game
function newGame(){
    const newGameBtn =document.querySelector('#newGame');
    newGameBtn.addEventListener('click', (e) => {
        playGame = true;
        numGuess = 1;
        guessSlot.innerHTML = '';
        lowOrhi.innerHTML = '';
        remaining.innerHTML = '';
        userInput.value = '';
        userInput.removeAttribute('disabled');
        submit.removeAttribute('disabled');
        startOver.removeChild(p);
        prevGuess = [];
        randomNum = parseInt(Math.random() * 100 +1);
        remaining.innerHTML = `${11-numGuess} Guesses Left!`;
    })


}