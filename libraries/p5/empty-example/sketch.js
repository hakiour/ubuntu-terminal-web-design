
function setup() {
	width = windowWidth/2;
	height = windowHeight/2;
	console.log(width);
	createCanvas(width,height);	
}

function draw() {
	clear();
	background(52);
	var xdistance = 40;
	var ydistance = 40;
	fill(119);
	stroke("#ff0000");
	rect(xdistance,ydistance,width - (xdistance*2),height - (ydistance*2));
	fill(32);
	noFill();
	stroke("#fff0f0");
	ellipse(mouseX,mouseY,xdistance,ydistance);
}