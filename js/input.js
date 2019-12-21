document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(event) {
    console.log(event.keyCode)
    if (event.keyCode == 39) {
        rightPressed = true;
    }
    else if (event.keyCode == 37) {
        leftPressed = true;
    }
    if (event.keyCode == 40) {
        downPressed = true;
    }
}