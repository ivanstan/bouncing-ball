class Paddle {

    constructor() {
        this.width = 100;
        this.height = 20;
        this.position = App.width / 2 - this.width / 2;
        this.y = App.height - 40;
    }

    update(ball) {
        fill(255);
        rect(this.position, this.y, this.width, this.height);

        if(ball.y >= this.y && ball.x > this.position && ball.x < this.position + this.width) {
            ball.yspeed *= -1;
        }
    }

    setPosition(x) {
        var value = this.position + x;

        if(value < 0 || value > App.width - this.width) {
            return;
        }

        this.position = value;
    }

}