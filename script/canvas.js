var canvas;
var context;
var images = {};
var totalResources = 0;
var numResourcesLoaded = 0;

var fps = 30;
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;


function redraw() {		
	canvas.width = canvas.width;
	
	if (forest) {drawForest()} else
	if (river) {drawRiver()} else
	if (mine) {drawMine()} else
	if (sewer) {drawSewer()} else
	if (camp) {drawCamp()} else
	if (clearing) {drawClearing()} else
	if (lake) {drawLake()} else
	if (cave) {drawCave()}
	
	drawButtons()
	
	if (questsOpen) {drawQuests()} else
	if (soundOpen) {drawSound()} else
	if (gearOpen) {drawGear()} else
	if (itemsOpen) {drawItems()} else
	if (skillsOpen) {drawSkills()} else
	if (toolsOpen) {drawTools()} else
	if (craftOpen) {drawCraft()}
	
	if (mapOpen) {drawMap()}
	context.globalAlpha = 0.1;
	if (damageTaken) {context.drawImage(images["damageOverlay"], 0, 0)}
	context.globalAlpha = 1;
	
	//printFPS();
}


function prepareCanvas() {
	canvas = document.createElement('canvas'); //Neccessary for IE because it doesn't know what a canvas element is)
	canvas.setAttribute('width', 1000);
	canvas.setAttribute('height', 500);
	canvas.setAttribute('id', 'canvas');
	document.getElementById("gameplay").appendChild(canvas);
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}//workaround for IE 8and lower. Otherwise: context = document.getElementById('canvas').getContext("2d");
	context = canvas.getContext("2d"); // Grab the 2d canvas context
	
	buttonsImages();
	characterImages();
	
	mapImages();
	forestImages();
	caveImages();
	campImages();
	clearingImages();
	riverImages();
	lakeImages();
	mineImages();
	
	skillsImages();
	itemsImages();
	gearImages();
	toolsImages();
	craftImages();
	questsImages();
	
	totalResources ++; loadImage("menuBackground");
	totalResources ++; loadImage("damageOverlay");
}

function loadImage(name) {
  images[name] = new Image();
  images[name].onload = function() {resourceLoaded()}
  images[name].src = "media/" + name + ".png";
}

function resourceLoaded() {
  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
	setInterval(redraw, 1000 / fps);
  }
}

function printFPS() {
	context.fillStyle = "green";
	context.font = "bold 12px sans-serif";
	context.fillText("fps: " + curFPS + "/" + fps + " (" + numFramesDrawn + ")", 910, 20);
	++numFramesDrawn;
}

function updateFPS() {
	curFPS = numFramesDrawn;
	numFramesDrawn = 0;
}	



function devTools() {
	awake = true;
	skillsBtn = true;
	stoodUp = true;
	goneOutside = true;
	itemsBtn = true;
	fireStrength = 96;
	toolsBtn = true;
	editHatchet("Old Hatchet", 5);
	editWoodcuttingXp(500);
	questsBtn = true;
	editChisel("Rough Chisel", 2);
	craftBtn = true;
	gearBtn = true;
	mapBtn = true;
	editCraftingXp(5200);
	editPickaxe("Rusty Pickaxe", 5);
	takeMoistClub();
	
	showCave();
	//showForest();
	showCamp();
	//showClearing();
	//showRiver();
	//showLake();
	showMine();
	
	//gearBtn = true;
	//mapBtn = true;
	
	
	flax += 20;
	string += 500;
	wood += 100;
	rope +=1;
	
	
	editCookingXp(00);
	editHealthXp(00);
	
	//editWeapon("Hunting knife", 9);
	
	//showTools();
	//showCraft();
	//showMap();
}


addText("Click the game window to begin.");
prepareCanvas();

//devTools();



// only open clearing after 5 woodcutting
























	

