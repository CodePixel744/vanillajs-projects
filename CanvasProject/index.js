let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 200, 100);
console.log(ctx);
console.log(canvas);
ctx.strokeRect(20, 20, 200, 200);

ctx.fillStyle = "red"
ctx.beginPath()
ctx.moveTo(100, 200);
ctx.lineTo(150, 200);
ctx.lineTo(150, 250);
ctx.lineTo(100, 250);
ctx.lineTo(100, 200);
// ctx.stroke()
ctx.fill()