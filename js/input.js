document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener("touchstart", clickHandler, { passive: false });
document.addEventListener("touchend", dragHandler, { passive: false });

let click_x;
let click_y;

function clickHandler(event) {
    event.preventDefault();
    let touch = event.changedTouches[0];
    click_x = touch.pageX;
    click_y = touch.pageY;
    
}

function dragHandler(event) {
    event.preventDefault();
    let touch = event.changedTouches[0];
    let drag_x = touch.pageX - click_x;
    let drag_y = touch.pageY - click_y;
    if(Math.abs(drag_x) < 100 && Math.abs(drag_y) < 100)
        spacePressed = true;
    if(Math.abs(drag_x) > Math.abs(drag_y)){
        if(Math.abs(drag_x) > cellSize)
            if(drag_x < 0){
                // Left
                console.log('DRAG LEFT');
                leftPressed = true;
                drag_x = 0;
                return;
            }else{
                // Right
                console.log('DRAG RIGHT');
                rightPressed = true;
                drag_x = 0;
                return;
            }
    }else{
        if(Math.abs(drag_y) > cellSize)
            if(drag_y < 0){
                // Up
                drag_y = 0;
                return;
            }else{
                // Down
                console.log('DRAG DOWN');
                dragDown = true;
                drag_y = 0;
                return;
            }
    }
    
}

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