function setup() {
    createCanvas(720, 720);
    noStroke();
    rectMode(CENTER);
  }
  
  function draw() {
    background(0);
  
    let r1 = map(mouseX, 0, width, 0, height);
    let r2 = height - r1;
  
    fill(95, 68, 74, r1);
    circle(width / 2 + r1 / 2, height / 2, r1, r1);
  
    fill(27, 55,240, abs);
    circle(width / 2 - r2 / 2, height / 2, r2, r2);
  }