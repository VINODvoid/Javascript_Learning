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
    










