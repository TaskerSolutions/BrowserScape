var camp = false;

var campLeftClicked = false;
var campCaveClicked = false;
var mineEntranceClicked = false;
var tanneryClicked = false;

var campSecurity = 0;

function showCamp() {
	clearCanvas();
	stopAll();
	camp = true;
	mapBtn = true;
	x = 50;
	y = 300;
}

function campImages() {
	totalResources ++; loadImage("camp/campBackground");
	totalResources ++; loadImage("camp/mineEntrance");
	totalResources ++; loadImage("camp/buildHotspot");
}

function stopCamp() {
	campLeftClicked = false;
	campCaveClicked = false;
	mineEntranceClicked = false;
	tanneryClicked = false;
}

function campClick() {
	if (clickX < 480 && clickX > 280 && clickY <= 250 && clickY > 150) {
		tanneryClicked = true;
	} else if (clickX > 800 && clickY <= 280) {
		mineEntranceClicked = true;
	} else if (clickX <= 60 && clickY >= 250 && clickY <= 305) {
		campLeftClicked = true;
	} else if (clickX <= 260 && clickY <= 200) {
		campCaveClicked = true;
	} else {
		gameClicked = true;
	}
}

function campObjects(object) {
	if (object == "campLeft") {showForest(); x = 930; y = 300;}
	if (object == "campCave") {showCave()}
	if (object == "mineEntrance") {showMine(); x = 50; y = 300;}
	if (object == "tannery") {tannery()}
}

function drawCamp() {
	context.drawImage(images["camp/campBackground"], 0, 0);
	context.drawImage(images["forest/forestCave"], 5, 50, 250, 150);
	context.drawImage(images["camp/mineEntrance"], 780, -60, 400, 400);
	
	context.drawImage(images["camp/buildHotspot"], 280, 150, 200, 100);
	context.drawImage(images["tools/raggedHammer"], 325, 125 - (breathAmt * 2));
	
	if (facingLeft) {charLeft()} else {charRight()}
	

	
	context.drawImage(images["buttons/arrowLeft"], 10 + breathAmt, 250, 50, 50);
	
	if (tanneryClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(280, 150, 200, 80, "tannery")
	} else if (mineEntranceClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(900, 225, 150, 00, "mineEntrance")
	} else if (campCaveClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(00, 50, 200, 150, "campCave")
	} else if (campLeftClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(-80, 200, 0, 100, "campLeft")
	} else if (gameClicked) {
		displayClickPos("buttons/clickPosBlue"); moveToClick(0, 160, 105, 30)
	}
}


function tannery() {
	stopAll();
	addText("You need a hammer, nails and planks to build anything.")
}



function editCampSecurity(amount) {
	campSecurity += amount;
	addText("Camp Security: " + campSecurity);
}


function woodenFence() {
	if (crafting) {
		stopAll();
		notBusy = true;
	} else {
		if (notBusy) {
			if (wood >= 10) {
				if (craftingLevel >= 1) {
					notBusy = false;
					crafting = true;
					addText("You start building a wooden fence around your campsite.")
					craftingPlanks = setInterval(function() {
						addText("The Fence is rough, but it will help to keep danger at bay. +200xp");
						editWood(-10);
						editCraftingXP(200);
						if (wood < 10) {
							addText("You don't have enough supplies.");
							stopAll();
						}
					}, 5000);
				} else {addText("You need level 1 crafting to build a wooden fence.")}
			} else {addText("You don't have enough supplies.")}
		}
	}
}

function smallCabin() {
	if (crafting) {
		stopAll();
		notBusy = true;
	} else {
		if (notBusy) {
			if (wood >= 30 && planks >= 10) {
				if (craftingLevel >= 5) {
					notBusy = false;
					crafting = true;
					addText("You start building a small cabin.")
					craftingPlanks = setInterval(function() {
						addText("The cabin is basic, but it will help to keep you safe. +800xp");
						//editCampSecurity(3);
						editWood(-30);
						editPlanks(-10);
						editCraftingXP(800);
						if (wood < 30 || planks < 10) {
							addText("You don't have enough supplies.");
							stopAll();
							notBusy = true;
						}
						}, 6000);
				} else {addText("You need level 5 crafting to build a wooden fence.")}
			} else {addText("You don't have enough supplies.")}
		}
	}
}

function storageShed() {
	if (crafting) {
		stopAll();
		notBusy = true;
	} else {
		if (notBusy) {
			if (wood >= 100 && planks >= 70) {
				if (craftingLevel >= 15) {
					notBusy = false;
					crafting = true;
					addText("You start building a storage shed.")
					craftingPlanks = setInterval(function() {
						addText("The shed will help to keep your supplies safe. +3,400xp");
						editCampSecurity(4);
						editWood(-100);
						editPlanks(-70);
						editCraftingXP(3400);
						if (wood < 100 || planks < 70) {
							addText("You don't have enough supplies.");
							stopAll();}
						notBusy = true;
						}, 8000);
				} else {addText("You need level 15 crafting to build a wooden fence.")}
			} else {addText("You don't have enough supplies.")}
		}
	}
}

function largeCabin() {
	if (crafting) {
		stopAll();
		notBusy = true;
	} else {
		if (notBusy) {
			if (wood >= 150 && planks >= 400) {
				if (craftingLevel >= 30) {
					notBusy = false;
					crafting = true;
					addText("You start building a large cabin.")
					craftingPlanks = setInterval(function() {
						addText("The cabin is large enough to house multiple people. +11,000xp");
						editCampSecurity(6);
						editWood(-150);
						editPlanks(-400);
						editCraftingXP(11000);
						if (wood < 150 || planks < 400) {
							addText("You don't have enough supplies.");
							stopAll();}
						notBusy = true;
						}, 10000);
				} else {addText("You need level 30 crafting to build a wooden fence.")}
			} else {addText("You don't have enough supplies.")}
		}
	}
}