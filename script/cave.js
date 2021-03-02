var cave = true;

var awake = false;
var stoodUp = false;
var goneOutside = false;

var notBusy = true;
var notBusyStart = true;

var fireStrength = 0;
var stoking = false;
var stokingFire;

var standUpClicked = false;
var fireClicked = false;
var outsideClicked = false;
var oldHatchetClicked = false;
var oldHatchetVisible = false;

var cooking = false;
var nowCooking;

var fireInt = 0;
var fireInterval = setInterval(function() {if (fireInt > 0) {fireInt --;} else {fireInt ++;}}, 300);

function showCave() {
	stopAll();
	clearCanvas();
	cave = true;
	addText("You return to the cave.")
	x = 470;
	y = 450;
}

function caveImages() {
	totalResources ++; loadImage("cave/background");
	totalResources ++; loadImage("cave/embers1");
	totalResources ++; loadImage("cave/embers2");
	totalResources ++; loadImage("cave/fire1");
	totalResources ++; loadImage("cave/fire2");
	totalResources ++; loadImage("cave/fire3");
	totalResources ++; loadImage("cave/fire4");
	totalResources ++; loadImage("cave/furnace1");
	totalResources ++; loadImage("cave/furnace2");
	totalResources ++; loadImage("cave/roof");
	totalResources ++; loadImage("cave/shadow");
	totalResources ++; loadImage("cave/light");
}

function stopCave() {
	caveClicked = false;
	outsideClicked = false;
	oldHatchetClicked = false;
	standUpClicked = false;
	fireClicked = false;
	stoking = false;
	clearInterval(stokingFire);
}

function caveClick() {
	if (notBusyStart == true) {
		if (awake == false) {begin()}
		if (awake && stoodUp == false) {standUp()}
	}
	
	if (stoodUp) {
		if (clickX >= 200 && clickX <= 400 && clickY <= 200) {fireClicked = true}
		else if (clickY >= 380) {outsideClicked = true}
		else {
			if (oldHatchetVisible && clickX >= 640 && clickX <= 745 && clickY >= 42 && clickY <= 147) {
				oldHatchetClicked = true;
			} else {
				gameClicked = true
			}
		}
	}
}

function caveObjects(object) {
	if (object == "fire") {stokeFire()}
	if (object == "standUp") {standUpClicked = false}
	if (object == "outside") {showForest()}
	if (object == "cave") {showCave()}
	if (object == "oldHatchet") {takeOldHatchet()}
}

function drawCave() {
	context.drawImage(images["cave/background"], 0, 0);
	
	if (fireStrength <= 1) {
		if (y <= 160) {if (facingLeft) {charLeft()} else {charRight()}}
		if (fireInt == 1) {context.drawImage(images["cave/embers1"], 245, 60)} else {context.drawImage(images["cave/embers2"], 245, 60)}
		if (y > 160) {if (facingLeft) {charLeft()} else {charRight()}}
		context.drawImage(images["cave/roof"], 0, 0);
		context.globalAlpha = 0.6;
		context.drawImage(images["cave/shadow"], 0, 0);
		context.globalAlpha = 0.2;
		if (stoodUp) {context.drawImage(images["cave/light"], 000, 260)}		
		context.globalAlpha = 1;
		if (fireClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(235, 60, 120, 100, "fire")}
		
	} else if (fireStrength >= 1 && fireStrength < 5) {
		if (y <= 160) {if (facingLeft) {charLeft()} else {charRight()}}
		if (fireInt == 1) {context.drawImage(images["cave/fire1"], 220, 15)} else {context.drawImage(images["cave/fire2"], 220, 15)}
		if (y > 160) {if (facingLeft) {charLeft()} else {charRight()}}
		context.drawImage(images["cave/roof"], 0, 0);
		context.globalAlpha = 0.4;
		context.drawImage(images["cave/shadow"], 0, 0);
		context.globalAlpha = 1;
		if (fireClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(220, 15, 160, 150, "fire")}
		
	} else if (fireStrength >= 5 && fireStrength < 100) {
		if (oldHatchetVisible) {context.drawImage(images["tools/oldHatchet"], 640, 42)}
		if (y <= 160) {if (facingLeft) {charLeft()} else {charRight()}}
		if (fireInt == 1) {context.drawImage(images["cave/fire3"], 201, -13)} else {context.drawImage(images["cave/fire4"], 201, -13)}
		if (y > 160) {if (facingLeft) {charLeft()} else {charRight()}}
		context.drawImage(images["cave/roof"], 0, 0);
		context.drawImage(images["buttons/arrowDown"], 475, 380 + breathAmt, 50, 50)
		if (fireClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(200, -13, 180, 180, "fire")}
		
	} else {
		if (oldHatchetVisible) {context.drawImage(images["tools/oldHatchet"], 640, 42)}
		if (y <= 160) {if (facingLeft) {charLeft()} else {charRight()}}
		if (fireInt == 1) {context.drawImage(images["cave/furnace1"], 195, -13)} else {context.drawImage(images["cave/furnace2"], 195, -13)}
		if (y > 160) {if (facingLeft) {charLeft()} else {charRight()}}
		context.drawImage(images["cave/roof"], 0, 0);
		context.drawImage(images["buttons/arrowDown"], 475, 380 + breathAmt, 50, 50)
		if (fireClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(200, -13, 180, 180, "fire")}
		
	}
	
	if (oldHatchetClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(640, 42, 105, 105, "oldHatchet")}
	if (standUpClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(500, 200, 00, 000, "standUp")}
	if (outsideClicked) {displayClickPos("buttons/clickPosRed"); moveToObject(500, 400, 10, 200, "outside")}
	if (gameClicked) {displayClickPos("buttons/clickPosBlue"); moveToClick(0, 0, 0, 0)}	
	
}




function begin() {
	notBusyStart = false;
	addText("Something slimy drips from above and wakes you up.");
	setTimeout(function(){addText("The remains of a fire are smoldering nearby.")}, 3000); 
	setTimeout(function(){addText("You have no idea where you are.")}, 6000);
	setTimeout(function(){		
		addText("You feel very weak.");
		skillsBtn = true;
		skillsBtnFlashing = true;
		awake = true;
		notBusyStart = true;
	}, 9000);
	setTimeout(function(){skillsBtnFlashing = false}, 12000);
}

function standUp() {
	notBusyStart = false;
	addText("You begin to stand up...");
	setTimeout(function(){damageTaken = true}, 2600);
	setTimeout(function(){
		addText("Ouch! You hit your head on the roof of a cave.");
		editHealth(-1);
		damageTaken = false;
		standUpClicked = true;
	}, 3000);
	setTimeout(function(){
		addText("You notice some light beaming in from outside.");
		stoodUp = true;
		notBusyStart = true;
	}, 6000);
}


function stokeFire() {
	if (notBusy) {
		stopAll();
		if(wood >=1) {
			if (fireStrength == 1) {
				notBusy = false;
				addText("You carefully position some wood and start blowing softly.");
				editWood(-1);
				fireStrength ++;
				setTimeout(function(){
					addText("The fire roars back to life!  Fire strength: " + fireStrength + "/5")
					health = healthLevel;
					notBusy = true;
				}, 3000);
			} else if (fireStrength < 4) {
				notBusy = false;
				fireStrength ++;
				addText("You add some wood to the fire.");
				editWood(-1);
				setTimeout(function(){
					addText("The fire roars and the cave gets brighter. Fire strength: " + fireStrength + "/5");
					notBusy = true;
				}, 1000)
			} else if (fireStrength == 4) {
				notBusy = false;
				addText("You add some wood to the fire.");
				editWood(-1);
				fireStrength ++;
				setTimeout(function(){	
					addText("The fire lights up the room! Fire strength: " + fireStrength + "/5");
					oldHatchetVisible = true;
					addText("You notice an old hatchet in the back of the cave.");				
					toolsBtn = true;
					toolsBtnFlashing = true;
					setTimeout(function() {toolsBtnFlashing = false}, 3000)
					notBusy = true;
				}, 2000);
			} else if (fireStrength >= 5 && fireStrength < 100 && notBusy) {
				if (stoking) {
					stopAll();
				} else {
					stoking = true;
					addText("You start throwing wood on the fire...")
					stokingFire = setInterval(function(){
						if(wood >= 1) {
							if (fireStrength >= 99) {
								stoking = false;
								clearInterval(stokingFire);
								fireStrength++;
								editWood(-1); 
								addText("Fire strength: " + fireStrength + "/100");
								addText("The fire is hot enough to melt metal!");
							} else {
								editWood(-1);
								fireStrength++;
								addText("Fire strength: " + fireStrength + "/100");
							}
						} else {
							addText("You don't any wood left.");
							stopAll();
						}
					}, 1000);
				}
			} else if (fireStrength >= 100) {
				smeltingMenu()
			}
		} else {
			addText("You don't have any wood to add to the fire.");
		}
	}
}


function takeOldHatchet() {
	editHatchet("Old Hatchet", 5);
	addText("It feels heavy and clunky, but will help to cut trees down.");
	oldHatchetClicked = false;
	oldHatchetVisible = false;
}



//cookiung doesnt stop when no raw meat left
function cookFood() {
	if (cooking) {
		stopAll();
		notBusy = true;
	} else {
		if(notBusy) {
			fastBarWidth = 0; barWidth = 0;
			notBusy = false;
			cooking = true;
			document.getElementById("cookfoodbtn").innerHTML = "Cooking...";
			if(rawMeat >= 1) {
				addText("You attempt to cook some meat on the fire...");
				fastBarWidth = 0; barWidth = 0; fastProgressBar(30, "progress22");
				nowCooking = setInterval(function() {
					if(rawMeat >= 1) {
						var burnchance = (Math.random() * 10) + (cookingLevel / 10);
						//addText("burnchance was " + burnchance);
						if (burnchance > 8) {
							addText("You cook a piece of meat. +100xp.");
							editCookingXP(100);
							editRawMeat(-1);
							editFood(1);
						} else {
							editRawMeat(-1);
							addText("You burn the meat.");
						}
						if(cooking) {fastProgressBar(30, "progress22");};
					} else {
						stopAll();
						notBusy = true;
						addText("You don't have any raw meat left.")
					}
				}, 3000);
			} else {
				addText("You don't have any raw meat left.")
			}
		}	
	}
}