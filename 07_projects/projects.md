# Projects Related to DOM

## 1. Color Scheme Project

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Color Changer</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div class="canvas">
      <h1>Color Scheme Switches</h1>
      <span class="button" id="white"></span>
      <span class="button" id="grey"></span>
      <span class="button" id="red"></span>
      <span class="button" id="green"></span>
      <h2>Click On The Color to change Background</h2>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```
### CSS
```css
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #212121;
    color: #8d8888;
}
h1{
    text-align: center;
    margin: 20px 0;
}
/* centering the span */
.button{
    display: inline-block;
    align-items: center;
    width: 200px;
    height: 200px;
    border: 1.5px solid white;
    border-radius: 50%;

}
#grey{
    background-color: grey;
}
#white{
    background-color: rgb(192, 192, 192);
}
#red{
    background-color: red;
}
#green{
    background-color: green;
}
h2{
    margin: 20px 0;
    text-align: center;
}
```

### Javascript
```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e)
    {
        const colorID =e.target.id
        switch (colorID) {
            case 'red':
                body.style.backgroundColor = e.target.id
                break;
            case 'green':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;

            default:
                body.style.backgroundColor = 'white'
                break;
    }
}
    )
});
```
## 2. BMI Calculator

### HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css" />
</head>

<body style="background-color: #212121; color: #fff">
    <div class="container">
        <h1>BMI-Calculator</h1>
        <form>
            <p>
                <label for="height">Height in Meters</label>
                <input type="text" placeholder="Height in meters" id="height" />
            </p>
            <p>
                <label for="weight">Weight in Kilo-grams</label>
                <input type="text" placeholder="Weight in Kilos" id="weight" />
            </p>
            <button id="calculate" type="button">Calculate</button>
            <div id="resultsContainer" style="display: none;">
                <div id="results_results"></div>
                <div id="results"></div>
                
                <div id="bmi-guide">
                    <h3>BMI Guide</h3>
                    <p>Under Weight : Less than 18.5</p>
                    <p>Normal Weight : Between of 18.5 to 24.9</p>
                    <p>Over Weight : Between of 25 to 29.9</p>
                    <p>Obesity : 30 or Higher</p>
                </div>
            </div>
        </form>
    </div>
    <script src="index.js"></script>
</body>

</html>
```
### CSS

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
}
h1{
    font-size: 3rem;
    margin: 2rem 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
input{
    width: 100%;
    padding: 10px ;
    margin: 10px;
    border-radius: 10px;
}
label{
    font-size: 1.5rem;
}
form>p{
    font-size: 1.5rem;
    margin: 1rem 0;
    text-align: center;
}
button{
    padding: 10px 20px 10px;
    border-radius: 10px;
    border: none;
    background-color: #5c6166;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
}
button:hover{
    background-color: #3e4144;
}
#results{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   width: 100%;
   color: rgb(0, 0, 0);
   border: 1px solid white;
   height: 35px;
   margin: 25px 0;
}
#catagory
{
    font-size: 1rem;
    margin: 20px 0 25px 0;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(100, 199, 70);
    color: black;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
h3{
    font-size: 1.5rem;
    margin: 20px 0;
    text-align: left;
    color: burlywood;
}
p{
    font-size: 1.5rem;
    margin: 10px 0;
    text-align: left;
}
```
### JavaScript

```javascript
const button = document.querySelector('#calculate');
const resultContainer = document.querySelector('#resultsContainer');
// this usecase will give you empty values for the fields.
// const inputHeight = parseInt(document.querySelector('#height').value);
// const inputWeight = parseInt(document.querySelector('#weight').value);
button.addEventListener('click',function(e){
    e.preventDefault();
    const inputHeight = parseInt(document.querySelector('#height').value);
    const inputWeight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results_results');
    if(inputHeight === "" || inputHeight < 0 || isNaN(inputHeight))
    {
        results.innerHTML= "Please give a valid height"
    }
    else if(inputWeight === "" || inputWeight < 0 || isNaN(inputWeight))
    {
        results.innerHTML= "Please give a valid Weight"
    }
    else{
        const bmi = (inputWeight/((inputHeight*inputHeight)/10000)).toFixed(2);
        results.innerHTML=`<p><span>Your BMI is :${bmi}</span></p>`;
        displayBMI(bmi);
        resultContainer.style.display = "block";
    }}
);
    function displayBMI(bmi){
        const result_weight = document.querySelector('#results')
        if(bmi < 18.5)
        {
            result_weight.innerHTML = `<span>Underweight</span>`
            result_weight.style.backgroundColor = "orange"
        }
        else if(bmi >= 18.5 && bmi <= 24.9)
        {
            result_weight.innerHTML = `<span>Normal</span>`
            result_weight.style.backgroundColor = "green"
        }
        else if(bmi >= 25 && bmi <= 29.9)
        {
            result_weight.innerHTML = `<span>Overweight</span>`
            result_weight.style.backgroundColor = "yellow"
        }
        else if(bmi > 30)
        {
            result_weight.innerHTML = `<span>Obese</span>`
            result_weight.style.backgroundColor = "red"
        }
    }
```

## 3. Digital Clock

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="center">
        <div id="banner"><span>Local Time</span></div>
        <div id="clock"></div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```

### CSS
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #212121;
    color: #f5f5f5;
    

}
.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
}
#clock{
    border: 1px solid #f5f5f5;
    width: 150px;
    height: 50px;
    margin: 20px auto;
    border-radius: 15px;
    background-color: orange;
    padding: 15px 15px 15px 20px;
    text-align: center;
}
```

### JavaScript
```javascript
const clock = document.getElementById('clock');



// SetInterval will set the interval
setInterval(() =>{
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();

},1000)
```

## 4. Guess Number

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess Number</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="wrapper">
        <h1>Guess a Number</h1>
        <p>Guess a number between 1 and 100</p>
        <p>You have 10 attempts to guess the Number.</p>
        <br>
        <form class="form">
            <label for="guessField" id="guess">Guess A Number</label>
            <input type="text" id="guessField">
            <input type="submit" id="subt" value="Submit The Guess." class="guessSubmit">
        </form>
        <div class="resultParas">
            <p>Previous Guesses : <span class="guesses"></span></p>
            <p> Guesses Remaining : <span class="lastResult">10</span></p>
            <p class="lowOrhigh"></p>
        </div>

    </div>

    <script src="index.js"></script>
</body>
</html>
```

### CSS
```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #212121;
    color: #f1f1f1;
}
#wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-direction: column;
}
h1{
    font-size: 2.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px 0 25px;
    text-align: center;
}
p{
    font-size: 1.23rem;
    font-family: 'Times New Roman', Times, serif;
    margin-left: 10px;
}
#guess{
    font-size: 1.5rem;
    margin-top: 15px;
}
#guessField{
    font-size: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 20px 0 25px;
    text-shadow: rgb(80, 165, 204)5px 2px 5px;
    text-align: center;
    width: 100%;
    
}
.guessSubmit{
    border-radius: 15px;
    border: 1px solid #f1f1f1;
    background-color: #b3aeae;
    cursor: pointer;
    width: 150px;
    height: 35px;
    text-align: center;

}
.guessSubmit:hover{
    background-color: #646464;
    color: #000000;
}
.resultParas{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}
.resultParas > p{
    font-size: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 15px 0 ;
    text-align: left;
}
```

### JavaScript
```javascript
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
```


## 5. Random Color Generator

### HTML
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random color Generator</title>
  </head>

  <body style="background-color: #414141; color: aliceblue;">
    
    <h1>
      Clicking the start button , change the background color every second
    </h1>
    <button id="start">Start</button>
    <button id="stop">Stop</button>
    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript

```javascript

let IntervalId;

const randomColor = function()
{
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
const startChange = function()
{
    if(!IntervalId){
        IntervalId =setInterval(changeBgColor,1000)
    }
    
    function changeBgColor()
    {
        document.body.style.backgroundColor = randomColor();
    }

}
const stopChange = function()
{
    clearInterval(IntervalId);
    IntervalId = null;
}
document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)

```


## 6. Key Checker 

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Checker</title>
    <style>
        .project{
            display: flex;
            justify-content:center;
            align-items: center;
            width: 100vw;
            height: 100vh;
        }
        #insert{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        table tr td {
            padding: 10px;
            border: 1px solid #ffff
        
        }
        
        

    </style>
</head>
<body style="background-color: #212121; color: aliceblue;">
    <div class="project">
        <div id="insert">
            <div class="key">Press the key and Watch Magic </div>
        </div>
    </div>
    <script src="index.js"></script>
</body>
</html>
```


### JavaScript

```javascript
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
    </div>`
}
);
```