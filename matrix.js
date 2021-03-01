var c = document.getElementById('c'); // Obtain a reference to the canvas element using its id.
var ctx = c.getContext('2d');// Obtain a graphics context on the canvas element for drawing.

c.height = window.innerHeight; //making the canvas full screen
c.width = window.innerWidth;

var chars = " 1 0";

chars = chars.split(""); //converting the string into an array of single characters

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain

var drops = []; //an array of drops - one per column

//x below is the x coordinate
	for(var x = 0; x < columns; x++)
	drops[x] = 1; //1 = y co-ordinate of the drop(same for every drop initially)

initialize(); // Start listening to resize events and draw canvas.

function draw() { //drawing the characters

	
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; //Black BG for the canvas
	ctx.fillRect(0, 0, c.width, c.height); //translucent BG to show trail
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	
	
	for(var i = 0; i < drops.length; i++) { //looping over drops
	
		var text = chars[Math.floor(Math.random()*chars.length)]; //a random character to print
	
		ctx.fillText(text, i*font_size, drops[i]*font_size); //x = i*font_size, y = value of drops[i]*font_size
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		drops[i]++; //incrementing Y coordinate
	}
}

setInterval(draw, 33);

function initialize() {
   // Register an event listener to call the resizeCanvas() function 
   // each time the window is resized.
   window.addEventListener('resize', resizeCanvas, false);
   // Draw canvas border for the first time.
   resizeCanvas();
}
 

function redraw() {
   //x below is the x coordinate
	x < columns; x++
	drops[x] = 1; //1 = y co-ordinate of the drop(same for every drop initially)
   
   for(var i = 0; i < drops.length; i++) { //looping over drops
	
		var text = chars[Math.floor(Math.random()*chars.length)]; //a random character to print
	
		ctx.fillText(text, i*font_size, drops[i]*font_size); //x = i*font_size, y = value of drops[i]*font_size
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
			drops[i] = 0;
		
		drops[i]++; //incrementing Y coordinate
	}
}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
	c.width = window.innerWidth;
	c.height = window.innerHeight;
	columns = c.width/font_size;
	redraw();
}