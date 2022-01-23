const bubbles = [];
let bImg;

let rand;
let interval = 0;


function draw() {
    interval += 1;
    rand = random(0, width + 1);

    if (interval > 60) {
        interval = 0;
        bubbles.push(new Bubble(rand, height + 10));
    }

    background(10, 39, 109);
    // stroke(175, 175, 255);
    // fill(200, 200, 255);

    for(let i = bubbles.length; i--;) {
        bubbles[i].move();
        bubbles[i].draw(bImg);
        
        // if the mouse is within the range of a bubble, pop it. 
        if (dist(bubbles[i].x, bubbles[i].y, mouseX, mouseY) < bubbles[i].size/2) {
            bubbles[i].pop = true;
            console.log("pop");
        }
        if (bubbles[i].pop) {
            bubbles.splice(i, 1);
        }
    }
}