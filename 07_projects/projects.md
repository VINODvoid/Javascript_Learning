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