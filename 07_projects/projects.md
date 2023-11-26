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