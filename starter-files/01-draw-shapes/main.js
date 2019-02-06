const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

// fillRect(x, y, width, height)
ctx.fillStyle = 'green';

// strokeRect(x, y, width, height)
ctx.strokeStyle = "#e2e2e2";




// draw path and fill
// ctx.moveTo and ctx.lineTo
ctx.beginPath();
	//code here
ctx.fill();





ctx.lineWidth = 5;

// arc(x, y, radius, startAngle, endAngle, anticlockwise)

// ctx.beginPath();
// ctx.arc(275, 275, 50, 0, Math.PI * 2, true); // Outer circle
// ctx.moveTo(310, 275);
// ctx.arc(275, 275, 35, 0, Math.PI, false);  // Mouth (clockwise)
// ctx.moveTo(265, 265);
// ctx.arc(260, 265, 5, 0, Math.PI * 2, true);  // Left eye
// ctx.moveTo(295, 265);
// ctx.arc(290, 265, 5, 0, Math.PI * 2, true);  // Right eye
// ctx.stroke();






ctx.fillStyle = 'red';

// ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
// cp = control point
// x, y = end point coordinates

// ctx.beginPath();
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
// ctx.fill();






