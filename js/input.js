document.addEventListener('keydown', keyDownHandler, false);

function keyDownHandler(event) {
    // console.log(event.keyCode)
    if (event.keyCode == 39) {
        rightPressed = true;
        console.log('Right');
    }
    else if (event.keyCode == 37) {
        leftPressed = true;
        console.log('Left');
    }
    if (event.keyCode == 40) {
        downPressed = true;
        console.log('Down');
    }
    if (event.keyCode == 32) {
        spacePressed = true;
        console.log('Rotate');
    }
}