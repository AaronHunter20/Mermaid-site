class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.size = random(10, 30);
        this.speed = map(this.size, 10, 30, 0.5, 1);
        this.pop = false;
    }
    draw(img) {
        imageMode(CENTER);
        image(img,this.x, this.y, this.size, this.size);
    }

    move() {
        this.frame += 0.02;
        this.y += -this.speed;
        this.x += map(sin(this.frame), 1, -1, 0.1, -0.1);
        if (this.y < 30) {
            this.pop = true;
        }
    }
}