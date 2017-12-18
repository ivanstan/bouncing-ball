var App = {
    width: 800,
    height: 900,
    ball: null,
    paddle: null,
    speed: 10,
    keyPressed: null
};

function setup() {
    var cnv = createCanvas(App.width, App.height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
    background(0, 0, 0);

    App.ball = new Ball();
    App.paddle = new Paddle();
    App.target = new Target();
}

function draw() {
    background(0, 0, 0);
    App.ball.update();
    App.paddle.update(App.ball);
    App.target.update(App.ball);

    if (App.keyPressed === LEFT_ARROW) {
        App.paddle.setPosition(-App.speed);
    } else if (App.keyPressed === RIGHT_ARROW) {
        App.paddle.setPosition(App.speed);
    }

}

function keyPressed() {
    App.keyPressed = keyCode;
}

function keyReleased() {
    App.keyPressed = null;
}