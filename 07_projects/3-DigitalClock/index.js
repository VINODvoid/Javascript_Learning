const clock = document.getElementById('clock');



// SetInterval will set the interval
setInterval(() =>{
    let date = new Date();
clock.innerHTML = date.toLocaleTimeString();

},1000)