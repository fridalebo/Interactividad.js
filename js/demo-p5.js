function setup() {
   createCanvas(windowWidth, windowHeight);

}

function windowResized() {
    resizedCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(120,10);
}


function mouseMoved() {
    stroke(random(255), random(10), random(255));
    fill(random(255), random(10), random(255));
    const size = Math.abs(Math.sin(frameCount*.01))*100; 
    ellipse(mouseX, mouseY, size, size);
}