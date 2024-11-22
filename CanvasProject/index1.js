let canvas = document.getElementById("canvas");
console.log(canvas);
console.log(typeof (canvas));
let ctx = canvas.getContext("2d");
/*we get the context that is :2d or 3d */
console.log(ctx);
console.log(typeof (ctx));
ctx.fillStyle = "black";
/*access height and width from html file */
let width = canvas.width;
let height = canvas.height;
ctx.fillRect(0, 0, width, height);
/*we have and x and y corrdinates and dx and dy. */
/*created a black area in canvas 300 by 300. */
const BALL_SIZE = 5;
let ballpos = { x: 20, y: 30 };
/*ball position stored in object. */
ctx.fillStyle = "white";
ctx.fillRect(ballpos.x, ballpos.y, BALL_SIZE, BALL_SIZE);