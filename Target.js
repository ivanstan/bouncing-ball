class Target {

    constructor() {
        this.count = 50;
        this.targets = [];

        for (var i = 0; i < this.count; i++) {
            var x = parseInt(random(0, App.width));
            var y = parseInt(random(0, App.height / 3));

            this.targets.push({
                active: true,
                vector: createVector(x, y)
            });
        }
    }

    update(ball) {
        var count = 0;
        for (var i in this.targets) {
            var target = this.targets[i];

            if(dist(ball.x, ball.y, target.vector.x, target.vector.y) < ball.size) {
                this.targets[i].active = false;
            }

            if(target.active) {
                fill(255, 0, 0);
                ellipse(target.vector.x, target.vector.y, 25);
                count++;
            }
        }

        fill(255);

        if(count == 0) {
            text("Win");
        } else {
            text("Balls left: " + count, 10, 10, 200, 100);
        }
    }
}
