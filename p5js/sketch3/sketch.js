function setup() {
    createCanvas(480, 480)
            
    }
    function draw() {
    if (mouseIsPressed) { erase();
    ellipse(mouseX, mouseY, 45, 45);
    noErase();                   
    } else {
    fill(25, 45, 24);
    
    }
    line(mouseX, mouseY, 240, 240)
    }
    
    