// JavaScript
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
