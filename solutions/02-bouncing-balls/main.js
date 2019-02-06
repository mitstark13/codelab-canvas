//https://github.com/christopher4lis/canvas-boilerplate Canvas Boilerplate

// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;


// Colors to be randomly picked from
const colors = [
	'rgba(255, 0, 255, 0.5)',
	'rgba(255, 255, 0, 0.5)',
	'rgba(0, 255, 255, 0.5)',
	'rgba(0, 0, 255, 0.5)'
];

const numBalls = 50;

// Event Listeners: Restart on resize or click
addEventListener('resize', () => {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});

addEventListener('click', () => {
	init();
});


// Commonly used functions
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
	this.velocity = 25;
	this.friction = 0.95;
	this.xVelocity = xVelocity;
	this.xfriction = .95

	this.update = () => {

		// Ball should bounce off sides and bottom of window. Friction makes velocity less with each bounce.
		if (this.y + this.radius >= canvas.height) {
			this.velocity = -this.velocity * this.friction
		}
		if ((this.x + this.radius >= canvas.width) || (this.x - this.radius <= 0)) {
			this.xVelocity = -this.xVelocity * this.xfriction
		}

		// Ball gradually falls faster (or slows if negative)
		this.velocity++
		this.y += this.velocity
		this.x += this.xVelocity
		if (this.y + this.radius > canvas.height) {
			this.y = canvas.height - this.radius
		}
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


// Implementation
let balls = [];
function init() {
	for (let i = 0; i < numBalls; i++) {
		const radius = 50
		const xPos = randomIntFromRange(0 + radius, canvas.width - radius)
		const yPos = randomIntFromRange(0 + radius, canvas.height - radius)
		const xVel = randomIntFromRange(-3, 3)
		let circle = new Circle(xPos, yPos, radius, xVel, randomColor(colors))
		balls.push(circle)
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	// Clearing canvas to redraw each circle
	c.clearRect(0, 0, canvas.width, canvas.height);
	balls.forEach(object => {
		object.update();
	});
}

init();
animate();