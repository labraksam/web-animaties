/*eslint-env browser*/
var box = document.querySelector('body > article:nth-of-type(2) > svg > g > g');
var achtergrond = document.querySelector('body');
var svg = document.querySelector('.text');
var spar = document.querySelector('.eyes');

/*Jimmy Kuik */
var turnBoxBlue = function() {
      box.classList.toggle('world');
    console.log();
}
box.addEventListener('click', turnBoxBlue);


var shakeText = function() {
    svg.classList.toggle('animate')
    console.log();
}
svg.addEventListener('click', shakeText);
    

var turnEyes = function() {
    spar.classList.toggle('turn')
    console.log();
}
spar.addEventListener('click', turnEyes);

/*Jimmy Kuik */
function keyCodes(e) {
    if(e.keyCode === 65) {
        achtergrond.classList.toggle('red');
    }
    if(e.keyCode === 83) {
        achtergrond.classList.toggle('blue');
    }
    if(e.keyCode === 68) {
        achtergrond.classList.toggle('yellow');
    }
    if(e.keyCode === 70) {
        achtergrond.classList.toggle('green');
    }
    if(e.keyCode === 32) {
        achtergrond.classList.toggle('gradient');
    }
}
document.onkeydown = keyCodes;

    
    