var clearing = false;
var clearingLeftClicked = false;
var clearingRightClicked = false;
var clearingUpClicked = false;
var clearingDownClicked = false;
var flaxClicked = false;

var pickingFlax;

function showClearing() {
	stopAll();
	clearCanvas();
	clearing = true;
	if (mapBtn == false) {
		mapBtn = true;
		mapBtnFlashing = true;
		setTimeout(function() {mapBtnFlashing = false}, 3000)
	}
}

function clearingImages() {
	totalResources ++; loadImage("clearing/clearingBackground");
	totalResources ++; loadImage("clearing/flax");
}

function stopClearing() {
	clearingLeftClicked = false;
	clearingRightClicked = false;
	clearingUpClicked = false;
	clearingDownClicked = false;
	flaxClicked = false;
	clearInterval(pickingFlax);
}

function clearingClick() {
	if (clickX <= 710 && clickX >= 575 && clickY <= 380 && clickY >= 250) {
		flaxClicked = true;
	} else if (clickX <= 600 && clickX >= 400 && clickY <= 135) {
		clearingUpClicked = true;
	} else if (clickX <= 60 && clickY >= 250 && clickY <= 305) {
		clearingLeftClicked = true;
	} else if (clickX >= 935 && clickY >= 250 && clickY <= 305) {
		clearingRightClicked = true;
	} else {
		gameClicked = true;
	}
}

function clearingObjects(object) {
	if (object == "clearingLeft") {showLake(); x = 930; y = 300;}
	if (object == "clearingRight") {showForest(); x = 50; y = 300;}
	if (object == "clearingUp") {showRiver(); x = 470; y = 500;}
	if (object == "flax") {pickFlax()}
}

function drawClearing() {
	context.drawImage(images["clearing/clearingBackground"], 0, 0);
	context.drawImage(images["buttons/arrowUp"], 475, 100 - breathAmt, 50, 25);
	
	if (375 < y) {context.drawImage(images["clearing/flax"], 575, 250)}
	
	if (facingLeft) {charLeft()} else {charRight()}
	
	if (375 >= y) {context.drawImage(images["clearing/flax"], 575, 250)}
	
	context.drawImage(images["buttons/arrowLeft"], 10 + breathAmt, 250, 50, 50);
	context.drawImage(images["buttons/arrowRight"], 940 - breathAmt, 250, 50, 50);
	
	
	if (flaxClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(585, 250, 100, 130, "flax")
	} else if (clearingLeftClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(-80, 200, 0, 100, "clearingLeft")
	} else if (clearingRightClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(1000, 200, 0, 100, "clearingRight")
	} else if (clearingUpClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(470, 150, 200, 00, "clearingUp")
	} else if (gameClicked) {displayClickPos("buttons/clickPosBlue"); moveToClick(0, 160, 0, 0)}
}

function pickFlax() {
	stopAll();
	addText("You begin picking flax...");
	pickingFlax = setInterval(function() {
		var chance = Math.floor(Math.random() * 10);
		var amount = Math.floor(woodcuttingStrength / 5);
		if (chance < 1) {
			flax += (10 + amount);
			editWoodcuttingXp(2 * (10 + amount));
			addText("You pick a large bundle of flax.")
		} else if (chance < 5) {
			flax += 3 + Math.floor(woodcuttingStrength / 5);
			editWoodcuttingXp(2 * (3 + amount));
			addText("You pick a bunch of flax.")
		} else {
			flax += 1 + Math.floor(woodcuttingStrength / 5);
			editWoodcuttingXp(2 * (1 + amount));
			addText("You pick some flax.");
		}
		
	}, 2000);
}
























