var body, button, color1, color2, css;

body = document.querySelector('body');
button = document.querySelector('button');
color1 = document.querySelector('.color1');
color2 = document.querySelector('.color2');
css = document.querySelector('h3');

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

    css.textContent = body.style.background + ';';
};

function randomColor() {
    // store letters and numbers hex code may contain
    var code = '0123456789ABCDEF';
    // hex code starts with #
    var color = '#';
    // generate 6 times to create hex code
    for (var i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomBackground() {
    color1.value = randomColor();
    color2.value = randomColor();

    setGradient();
}

setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
button.addEventListener('click', randomBackground);
