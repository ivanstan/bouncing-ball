class Ball {

    constructor() {
        this.x = 400;
        this.y = 450;
        this.size = 25;
        this.xspeed = App.speed / 5 + 3;
        this.yspeed = App.speed / 5 + 3;
    }

    update() {

        if(this.x < 1) {
            this.xspeed *= -1;
        }

        if(this.x > 800) {
            this.xspeed *= -1;
        }

        if(this.y < 1) {
            this.yspeed *= -1;
        }

        if(this.y > 900) {
            this.x = 400;
            this.y = 450;
        }

        fill(255);
        ellipse(this.x, this.y, this.size);

        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

}