const bubbles = [];
let bImg;

let rand;
let interval = 0;
function preload() {
    bImg = loadImage('./Assets/Icons/bubble.png');
}
function setup() {
    let Canvas = createCanvas(windowWidth, 400);
    Canvas.parent("canvas-container");
}
function draw() {
    interval += 1;
    rand = random(0, width + 1);

     if (interval > 60) {
        interval = 0;
        bubbles.push(new Bubble(rand, height));
     }

    background(10, 39, 109);
    // stroke(175, 175, 255);
    // fill(200, 200, 255);

    for(let i = bubbles.length; i--;) {
        bubbles[i].move();
        bubbles[i].draw(bImg);
        if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].size/2) {
            bubbles[i].pop = true;
            console.log("pop");
        }
        if (bubbles[i].pop) {
            bubbles.splice(i, 1);
        }
    }
}
function windowResized () {
    resizeCanvas(windowWidth, 400);
}