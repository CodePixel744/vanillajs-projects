let canvas = document.getElementById("canvas");
console.log(canvas);
console.log(typeof (canvas));
let ctx = canvas.getContext("2d");
/*we get the context that is :2d or 3d */
console.log(ctx);
console.log(typeof (ctx));
/*access height and width from html file */
let width = canvas.width;
let height = canvas.height;
/*we have and x and y corrdinates and dx and dy. */
/*created a black area in canvas 300 by 300. */
const BALL_SIZE = 5;
let ballpos = { x: 20, y: 30 };
/*ball position stored in object. */
let xSpeed = 3;
let ySpeed = 2;

const PADDLE_WIDTH = 5;
const PADDLE_HEIGHT = 200;
const PADDLE_OFFSET = 10;

let leftpaddletop = 10;
let rightpaddletop = 30;
console.log(leftpaddletop);

/*i am making two moving rods */
/*meaning is that ball.left part should be less than paddle.right */
function checkPaddleCollision(ball, paddle) {
    return (
        ball.left < paddle.right && ball.right > paddle.left && ball.top < paddle.bottom && ball.bottom > paddle.top
    );
}

document.addEventListener("mousemove", function (e) {
    rightpaddletop = e.y - canvas.offsetTop;
})
/*inbuilt function which holds the vertical distance from the top of canvas element to top of its offset parent. */
function update() {
    ballpos.x += xSpeed;
    ballpos.y += ySpeed;
}
function checkCollision() {
    let ball = {
        left: ballpos.x,
        right: ballpos.x + BALL_SIZE,
        top: ballpos.y,
        bottom: ballpos.y + BALL_SIZE
    };
    let leftPaddle = {
        left: PADDLE_OFFSET,
        right: PADDLE_OFFSET + PADDLE_WIDTH,
        top: leftpaddletop,
        bottom: leftpaddletop + PADDLE_HEIGHT
    };

    let rightPaddle = {
        left: width - PADDLE_WIDTH - PADDLE_OFFSET,
        right: width - PADDLE_OFFSET,
        top: rightpaddletop,
        bottom: rightpaddletop + PADDLE_HEIGHT
    };

    if (ball.left < 0 || ball.right > width) {
        xSpeed = -xSpeed;
    }
    if (ball.top < 0 || ball.bottom > height) {
        ySpeed = -ySpeed;
    }
    if (checkPaddleCollision(ball, leftPaddle)) {
        /*keep x speed same */
        xSpeed = Math.abs(xSpeed);
    }
    if (checkPaddleCollision(ball, rightPaddle)) {
        /*revert speed  */
        xSpeed = -Math.abs(xSpeed);
    }
}
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = "white";
    ctx.fillRect(ballpos.x, ballpos.y, BALL_SIZE, BALL_SIZE);

    ctx.fillStyle = "white";
    ctx.fillRect(PADDLE_OFFSET, leftpaddletop, PADDLE_WIDTH, PADDLE_HEIGHT);

    ctx.fillStyle = "white";
    ctx.fillRect(width - PADDLE_WIDTH - PADDLE_OFFSET, rightpaddletop, PADDLE_WIDTH, PADDLE_HEIGHT);
}
function gameLoop() {
    draw();
    update();
    checkCollision();
}
setInterval(gameLoop, 30);
