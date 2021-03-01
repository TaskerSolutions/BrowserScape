var lake = false;

var	lakeRightClicked = false;
var rustyPickaxeClicked = false;
var fishingPickaxe = false;



function showLake() {
	clearCanvas();
	lake = true;
}

function lakeImages() {
	totalResources ++; loadImage("lake/lakeBackground");
	totalResources ++; loadImage("lake/lakeOverlay");
	totalResources ++; loadImage("lake/ropeLake");
}

function stopLake() {
	lakeRightClicked = false;
	rustyPickaxeClicked = false;
}

function lakeClick() {
	if (clickX <= 390 && clickX >= 290 && clickY >= 220 && clickY <= 320 && pickaxe == "No Pickaxe") {
		rustyPickaxeClicked = true;
	} else if (clickX >= 935 && clickY >= 250 && clickY <= 305) {
		lakeRightClicked = true;
	} else {
		gameClicked = true;
	}
}

function lakeObjects(object) {
	if (object == "lakeLeft") {addText("left")}
	if (object == "lakeRight") {showClearing(); x = 40; y = 300}
	if (object == "rustyPickaxe") {takeRustyPickaxe()}
}

function drawLake() {
	context.drawImage(images["lake/lakeBackground"], 0, 0);
	
	if (pickaxe == "No Pickaxe") {context.drawImage(images["tools/rustyPickaxe"], 290, 220)}
	
	if (facingLeft) {charLeft()} else {charRight()}
	
	if (fishingPickaxe) {context.drawImage(images["lake/ropeLake"], 305, 220)}
	
	
	context.globalAlpha = 0.7;
	context.drawImage(images["lake/lakeOverlay"], 0, 0);
	context.globalAlpha = 1;
	
	context.drawImage(images["buttons/arrowRight"], 940 - breathAmt, 250, 50, 50);
	
	if (rustyPickaxeClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(560, 290, 0, 0, "rustyPickaxe")
	} else if (lakeRightClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(1000, 200, 0, 100, "lakeRight")
	} else if (gameClicked) {displayClickPos("buttons/clickPosBlue"); moveToClick(590, 160, 0, 0)}
}



function takeRustyPickaxe() {
	stopAll();
	if (rope >=1) {
		fishingPickaxe = true;
		setTimeout(function() {
			editPickaxe("Rusty Pickaxe", 5)
			fishingPickaxe = false;
			addText("Well done! You can use the pickaxe in the mine east of your camp.")
		}, 1500)
	} else {
		addText("You will need to craft a rope to fish the pickaxe out of the lake.")
	}
}















