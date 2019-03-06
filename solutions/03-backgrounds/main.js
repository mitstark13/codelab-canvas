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

function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

    
// Objects
function Circle(x, y, radius, color) {
	this.x = x * canvas.width + 30;
	this.y = y * canvas.height + 30;
	this.radius = radius;
	this.direction = .5;

	this.update = () => {
		this.radius += this.direction

		if ((this.radius >= 31) || (this.radius <= 1)){
			this.direction *= -1
		}
		
		this.draw();
	};

	this.draw = () => {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.lineWidth = 5;
		c.strokeStyle = color;
		c.stroke();
		c.closePath();
	}
}

let points = []

// Implementation
function init() {
	const count = 15

	for (let x = 0; x < count; x++) {
		for (let y = 0; y < count; y++) {
			// make u and v a percentage
			const u = count <= 1 ? 0.51 : x / (count - 1)
			const v = count <= 1 ? 0.51 : y / (count - 1)
			let radius = 30 * (u + v)
			radius = radius > 30 ? 30 + (30 - radius) : radius
			points.push(new Circle(u, v, radius, randomColor(colors)))
		}
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	// Clearing canvas to redraw each circle
	c.clearRect(0, 0, canvas.width, canvas.height);
	points.forEach(object => {
		object.update();
	});
}

init();
animate();