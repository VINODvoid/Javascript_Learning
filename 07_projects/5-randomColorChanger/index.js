

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


