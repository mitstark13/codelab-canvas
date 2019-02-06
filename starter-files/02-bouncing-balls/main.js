//https://github.com/christopher4lis/canvas-boilerplate Canvas Boilerplate

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
const colors = [
	'rgba(255, 0, 255, 0.5)',
	'rgba(255, 255, 0, 0.5)',
	'rgba(0, 255, 255, 0.5)',
	'rgba(0, 0, 255, 0.5)'
];


// Event Listeners
addEventListener('resize', () => {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});

addEventListener('click', () => {
	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Circle(x, y, radius, xVelocity, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;

	this.update = () => {
		this.y += 4
		this.draw();
	};

	this.draw = () => {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.stroke()
		c.fill();
		c.closePath();
	};
}

let circle;
// Implementation
function init() {
	const radius = 50
	const xPos = 100
	const yPos = 100
	const xVel = 15
	circle = new Circle(xPos, yPos, radius, xVel, colors[0])
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
	circle.update();
}

init();
animate();