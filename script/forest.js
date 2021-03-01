var forest = false;

var caveClicked = false;
var forestLeftClicked = false;
var forestRightClicked = false;

var tasksComplete = 0;

var roughChiselVisible = false;
var roughChiselClicked = false;

var chopping = false;

var treeClicked = false;
var choppingTree;
var treeNumLogs = 0;
var treeX = 0;
var treeY = 0;
var treeStump = false;

var oakClicked = false;
var choppingOak;
var oakNumLogs = 0;
var oakX = 0;
var oakY = 0;
var oakStump = false;

var bloodwoodClicked = false;
var choppingBloodwood;
var bloodwoodNumLogs = 0;
var bloodwoodX = 0;
var bloodwoodY = 0;
var bloodwoodStump = false;

var thotClicked = false;
var choppingThot;
var thotNumLogs = 0;
var thotX = 0;
var thotY = 0;
var thotStump = false;

var fuhrerClicked = false;
var choppingFuhrer;
var fuhrerNumLogs = 0;
var fuhrerX = 0;
var fuhrerY = 0;
var fuhrerStump = false;

var woodX = 0;
var woodY = 0;
var woodClicked = false;

var roughChiselX = 0;
var roughChiselY = 0;

function showForest() {
	stopAll();
	clearCanvas();
	forest = true;
	x = 870;
	y = 180;
	facingLeft = true;
	addText("You venture out into a forest.");
	if (goneOutside == false) {
		goneOutside = true;
		itemsBtn = true;
		itemsBtnFlashing = true;
		setTimeout(function() {itemsBtnFlashing = false}, 3000)
	}
	if (fireStrength >=5 && questsBtn == false) {
		questsBtn = true;
		questsBtnFlashing = true;
		setTimeout(function() {questsBtnFlashing = false}, 3000)
	}
	reloadTree();
	reloadOak();
	reloadBloodwood();
	reloadThot();
	reloadFuhrer();
	reloadWood();
}

function forestImages() {
	totalResources ++; loadImage("forest/forestFloor");
	totalResources ++; loadImage("forest/forestCave");
	totalResources ++; loadImage("forest/tree1");
	totalResources ++; loadImage("forest/oak");
	totalResources ++; loadImage("forest/bloodwood");
	totalResources ++; loadImage("forest/thot");
	totalResources ++; loadImage("forest/fuhrer");
	totalResources ++; loadImage("forest/tree1Stump");
	totalResources ++; loadImage("forest/oakStump");
	totalResources ++; loadImage("forest/bloodwoodStump");
	totalResources ++; loadImage("forest/thotStump");
	totalResources ++; loadImage("forest/fuhrerStump");
	totalResources ++; loadImage("forest/wood");
}

function stopForest() {
	chopping = false;
	treeClicked = false;
	clearInterval(choppingTree);
	oakClicked = false;
	clearInterval(choppingOak);
	bloodwoodClicked = false;
	clearInterval(choppingBloodwood);
	thotClicked = false;
	clearInterval(choppingThot);
	fuhrerClicked = false;	
	clearInterval(choppingFuhrer);
	woodClicked = false;
	roughChiselClicked = false;
	forestLeftClicked = false;
	forestRightClicked = false;
}

function forestClick() {
	if (clickX <= 60 && clickY >= 250 && clickY <= 305) {
		forestLeftClicked = true;
	} else if (clickX >= 935 && clickY >= 250 && clickY <= 305) {
		forestRightClicked = true;
	} else if (clickX <= roughChiselX + 100 && clickX >= roughChiselX && clickY >= roughChiselY && clickY <= roughChiselY + 100 && roughChiselVisible) {
		roughChiselClicked = true;
	} else if (clickX <= treeX + 100 && clickX >= treeX && clickY >= treeY && clickY <= treeY + 250) {
		treeClicked = true;
	} else if (clickX <= oakX + 100 && clickX >= oakX && clickY >= oakY && clickY <= oakY + 250) {
		oakClicked = true;
	} else if (clickX <= bloodwoodX + 100 && clickX >= bloodwoodX && clickY >= bloodwoodY && clickY <= bloodwoodY + 250) {
		bloodwoodClicked = true;
	} else if (clickX <= thotX + 100 && clickX >= thotX && clickY >= thotY && clickY <= thotY + 250) {
		thotClicked = true;
	} else if (clickX <= fuhrerX + 100 && clickX >= fuhrerX && clickY >= fuhrerY && clickY <= fuhrerY + 250) {
		fuhrerClicked = true;
	} else if (clickX <= woodX + 50 && clickX >= woodX && clickY >= woodY && clickY <= woodY + 50 && fireStrength < 5) {
		woodClicked = true;
	} else if (clickX >= 860 && clickY <= 200) {
		caveClicked = true;
	} else {
		gameClicked = true;
	}
}

function forestObjects(object) {
	if (object == "tree") {tryTree()}
	if (object == "oak") {tryOak()}
	if (object == "bloodwood") {tryBloodwood()}
	if (object == "thot") {tryThot()}
	if (object == "fuhrer") {tryFuhrer()}
	if (object == "wood") {collectWood()}
	if (object == "roughChisel") {takeRoughChisel()}
	if (object == "forestLeft") {
		if (line1Quest1Claimed == false) {
			stopAll();
			addText("You should work on your first quest before exploring too far.");
			questsBtnFlashing = true;
			setTimeout(function() {questsBtnFlashing = false}, 3000)
		} else {showClearing(); x = 950; y = 300;}
	}
	if (object == "forestRight") {showCamp()}
}

function drawForest() {
	context.drawImage(images["forest/forestFloor"], 0, 0);
	context.drawImage(images["forest/forestCave"], 860, 50, 250, 150);
	if (treeStump) {drawEllipse(treeX + 50, treeY + 245, 60, 20, "#00000080")} else {drawEllipse(treeX + 50, treeY + 245, 150, 20, "#00000080")}
	if (oakStump) {drawEllipse(oakX + 52, oakY + 245, 120, 20, "#00000080")} else {drawEllipse(oakX + 52, oakY + 245, 150, 20, "#00000080")}
	if (bloodwoodStump) {drawEllipse(bloodwoodX + 55, bloodwoodY + 245, 110, 20, "#00000080")} else {drawEllipse(bloodwoodX + 55, bloodwoodY + 245, 150, 20, "#00000080")}
	if (thotStump) {drawEllipse(thotX + 45, thotY + 245, 60, 20, "#00000080")} else {drawEllipse(thotX + 50, thotY + 245, 120, 20, "#00000080")}
	if (fuhrerStump) {drawEllipse(fuhrerX + 50, fuhrerY + 245, 70, 20, "#00000080")} else {drawEllipse(fuhrerX + 50, fuhrerY + 245, 140, 20, "#00000080")}
	if (treeY + 245 < y) {if (treeStump) {context.drawImage(images["forest/tree1Stump"], treeX, treeY)} else {context.drawImage(images["forest/tree1"], treeX, treeY)}}
	if (oakY + 245 < y) {if (oakStump){context.drawImage(images["forest/oakStump"], oakX, oakY)} else {context.drawImage(images["forest/oak"], oakX, oakY)}}
	if (bloodwoodY + 245 < y) {if (bloodwoodStump){context.drawImage(images["forest/bloodwoodStump"], bloodwoodX, bloodwoodY)} else {context.drawImage(images["forest/bloodwood"], bloodwoodX, bloodwoodY)}}
	if (thotY + 245 < y) {if (thotStump){context.drawImage(images["forest/thotStump"], thotX, thotY)} else {context.drawImage(images["forest/thot"], thotX, thotY)}}
	if (fuhrerY + 245 < y) {if (fuhrerStump){context.drawImage(images["forest/fuhrerStump"], fuhrerX, fuhrerY)} else {context.drawImage(images["forest/fuhrer"], fuhrerX, fuhrerY)}}
	if (fireStrength < 5) {context.drawImage(images["forest/wood"], woodX, woodY, 50, 50)}
	
	if (facingLeft) {charLeft()} else {charRight()}
	
	if (treeY + 245 >= y) {if (treeStump){context.drawImage(images["forest/tree1Stump"], treeX, treeY)} else {context.drawImage(images["forest/tree1"], treeX, treeY)}}
	if (oakY + 245 >= y) {if (oakStump){context.drawImage(images["forest/oakStump"], oakX, oakY)} else {context.drawImage(images["forest/oak"], oakX, oakY)}}
	if (bloodwoodY + 245 >= y) {if (bloodwoodStump){context.drawImage(images["forest/bloodwoodStump"], bloodwoodX, bloodwoodY)} else {context.drawImage(images["forest/bloodwood"], bloodwoodX, bloodwoodY)}}
	if (thotY + 245 >= y) {if (thotStump){context.drawImage(images["forest/thotStump"], thotX, thotY)} else {context.drawImage(images["forest/thot"], thotX, thotY)}}
	if (fuhrerY + 245 >= y) {if (fuhrerStump){context.drawImage(images["forest/fuhrerStump"], fuhrerX, fuhrerY)} else {context.drawImage(images["forest/fuhrer"], fuhrerX, fuhrerY)}}
	if (roughChiselVisible) {context.drawImage(images["tools/roughChisel"], roughChiselX, roughChiselY,)}
	context.drawImage(images["buttons/arrowLeft"], 10 + breathAmt, 250, 50, 50)
	context.drawImage(images["buttons/arrowRight"], 940 - breathAmt, 250, 50, 50);
	
	if (treeClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(treeX, treeY, 120, 250, "tree")
	} else if (oakClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(oakX, oakY, 120, 250, "oak")
	} else if (bloodwoodClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(bloodwoodX, bloodwoodY, 120, 250, "bloodwood")
	} else if (thotClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(thotX, thotY, 120, 250, "thot")
	} else if (fuhrerClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(fuhrerX, fuhrerY, 120, 250, "fuhrer")
	} else if (woodClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(woodX, woodY, 50, 50, "wood")
	} else if (roughChiselClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(roughChiselX + 50, roughChiselY, 20, 100, "roughChisel")
	} else if (caveClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(860, 50, 300, 150, "cave")
	} else if (forestLeftClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(-80, 200, 30, 100, "forestLeft")
	} else if (forestRightClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(1000, 200, 0, 100, "forestRight")
	} else if (gameClicked) {
		displayClickPos("buttons/clickPosBlue"); moveToClick(0, 160, 0, 0)
	}
}

function collectWood() {
	stopAll();
	if (fireStrength <= 1 && wood < 1) {
		addText("Maybe I can get the fire in the cave started with these.");
	} else if (fireStrength < 5) {
		addText("These will make the fire in the cave even stronger!")
	}
	editWood(1);
	reloadWood();
}

function takeRoughChisel() {
	roughChiselVisible = false;
	roughChiselClicked = false;
	addText("I wonder what I can craft with this!");
	editChisel("Rough Chisel", 2)
	craftBtn = true;
	craftBtnFlashing = true;
	setTimeout(function() {craftBtnFlashing = false}, 3000)
}

function dog() {
	notBusy = false;
	document.getElementById("choptrees").style.display = "none";
	document.getElementById("tocave").style.display = "none";
	document.getElementById("toriver").style.display = "none";
	setTimeout(function(){addText("You hear something rustling the bushes nearby...");}, 2000);
	setTimeout(function(){addText("You run into your cabin and peer out the window.");}, 5000);
	setTimeout(function(){addText("A dog emerges from the bushes...");}, 8000);
	setTimeout(function(){addText("You release some fecal matter.");}, 11000);
	setTimeout(function(){addText("The dog appears to be carrying something...");}, 14000);
	setTimeout(function(){
		addText("Maybe it just wants your meat?");
		notBusy = true;
		document.getElementById("givefish").style.display = "block";
	}, 17000);
}

function giveFish() {
	addText("You throw a piece of raw fish out the window.");
	setTimeout(function(){addText("The dog drops what it was holding and snatches up the fish.");}, 3000);
	setTimeout(function(){addText("It runs off into the forest with the fish.");}, 6000);
	setTimeout(function(){addText("You head outside to see what it left behind...");}, 9000);
	setTimeout(function(){addText("It appears to be an old hunting knife!");}, 13000);
	setTimeout(function(){
		addText("You take the knife.");
		editWeapon("Hunting knife", 9);
		//equip knife show gear
	}, 16000);
	setTimeout(function(){
		addText("In the distance you hear a growl. I wonder what it could be?");
		document.getElementById("choptrees").style.display = "block";
		document.getElementById("tocave").style.display = "block";
		document.getElementById("toriver").style.display = "block";
		document.getElementById("cookfood").style.display = "block";
		document.getElementById("givefish").style.display = "none";
		document.getElementById("followgrowl").style.display = "block";
	}, 19000);
}

function followGrowl() {
	notBusy = false;
	mineVisit = true;
	progressBar(26, "progress23");
	document.getElementById("choptrees").style.display = "none";
	document.getElementById("tocave").style.display = "none";
	addText("You head in the direction of the growl...");
	setTimeout(function(){addText("A foul smell wafts through the air.");}, 3000);
	setTimeout(function(){addText("Feeling brave, you continue towards the smell.");}, 6000);
	setTimeout(function(){addText("You use your hatchet to clear a path through some thick bushes.");}, 9000);
	setTimeout(function(){addText("You notice a faint glow ahead.");}, 12000);
	setTimeout(function(){addText("The smell gets stronger as you get closer to the glow...");}, 15000);
	setTimeout(function(){addText("You find a cave that is illuminated by fungi!");}, 18000);
	setTimeout(function(){addText("Another growl eminates from within the cave.");}, 21000);
	setTimeout(function(){addText("You hear some rocks clunking within...");}, 23000);
	setTimeout(function(){
		addText("A bear emerges and runs towards you aggressively!");
		document.getElementById("background").style.backgroundImage = "url('media/mine.jpg')";
		document.getElementById("followgrowl").style.display = "none";
		document.getElementById("toforest").style.display = "block";
		addBear();
		notBusy = true;
	}, 26000);
	setTimeout(function(){addText("Click the bear to attack.");}, 28000);
}


function reloadWood() {
	woodX = 10 + Math.floor(Math.random() * 800);
	woodY = 200 + Math.floor(Math.random() * 200);
	var i;
	for (i = 0; i < 1000; i++) {
		if ((woodX <= treeX + 100 && woodX >= treeX - 50) || (woodX <= oakX + 100 && woodX >= oakX - 50) || (woodX <= bloodwoodX + 100 && woodX >= bloodwoodX - 50) || (woodX <= thotX + 100 && woodX >= thotX - 50) || (woodX <= fuhrerX + 100 && woodX >= fuhrerX - 50)) {
			woodX = 10 + Math.floor(Math.random() * 800);
		} else {
			i = 1000;
		}
	}
}


function reloadTree() {
	treeStump = false;
	treeX = -10 + Math.floor(Math.random() * 800);
	treeY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((treeX <= oakX + 100 && treeX >= oakX - 100) || (treeX <= bloodwoodX + 100 && treeX >= bloodwoodX - 100) || (treeX <= thotX + 100 && treeX >= thotX - 100) || (treeX <= fuhrerX + 100 && treeX >= fuhrerX - 100)) {
			treeX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	roughChiselX = treeX - 20;
	roughChiselY = treeY + 170;
	treeNumLogs = Math.floor(Math.random() * 10);
}

function tryTree() {
	stopAll();
	if (hatchet == "No Hatchet") {
		addText("You need a hatchet to chop trees.")
	} else {
		if (treeStump) {addText("Be patient... It will grow back in time.")}
		else {chopTree()}
	}
}

function chopTree() {
	chopping = true;
	addText("You begin chopping the tree...");
	if (woodcuttingLevel >= 3 && roughChiselVisible == false && chisel == "No Chisel") {
		roughChiselVisible = true;
		addText("A chisel falls out of the tree! How convenient.")
	}
	choppingTree = setInterval(function() {
		editWoodcuttingXp(30);
		editWood(1);
		treeNumLogs -= 1;
		if (treeNumLogs <=0) {
			treeStump = true;
			stopAll();
			addText("You chop down the tree.");
			setTimeout(function(){reloadTree()}, 2000);
		};
	}, (40000 / woodcuttingStrength));
}

function reloadOak() {
	oakStump = false;
	oakX = -10 + Math.floor(Math.random() * 800);
	oakY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((oakX <= treeX + 100 && oakX >= treeX - 100) || (oakX <= bloodwoodX + 100 && oakX >= bloodwoodX - 100) || (oakX <= thotX + 100 && oakX >= thotX - 100) || (oakX <= fuhrerX + 100 && oakX >= fuhrerX - 100)) {
			oakX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	oakNumLogs = Math.floor(Math.random() * 40);
}

function tryOak() {
	stopAll();
	if (oakStump) {addText("Be patient... It will grow back in time.")}
	else if (woodcuttingLevel >= 20) {chopOak()}
	else {addText("You need level 20 woodcutting to chop oak trees.")}
}

function chopOak() {
	chopping = true;
	addText("You begin chopping the oak tree...");
	choppingOak = setInterval(function() {
		editWoodcuttingXp(80);
		editWood(2);
		oakNumLogs -= 2;
		if (oakNumLogs <=0) {
			oakStump = true;
			stopAll();
			addText("You chop down the oak tree.");
			setTimeout(function(){reloadOak()}, 4000);
		};
	}, (100000 / woodcuttingStrength));
}

function reloadBloodwood() {
	bloodwoodStump = false;
	bloodwoodX = -10 + Math.floor(Math.random() * 800);
	bloodwoodY = -20 + Math.floor(Math.random() * 220);
	for (i = 0; i < 100; i++) {
		if ((bloodwoodX <= treeX + 100 && bloodwoodX >= treeX - 100) || (bloodwoodX <= oakX + 100 && bloodwoodX >= oakX - 100) || (bloodwoodX <= thotX + 100 && bloodwoodX >= thotX - 100) || (bloodwoodX <= fuhrerX + 100 && bloodwoodX >= fuhrerX - 100)) {
			bloodwoodX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	bloodwoodNumLogs = Math.floor(Math.random() * 200);
}

function tryBloodwood() {
	stopAll();
	if (bloodwoodStump) {addText("Be patient... It will grow back in time.")}
	else if (woodcuttingLevel >= 40) {chopBloodwood()}
	else {addText("You need level 40 woodcutting to chop bloodwood trees.")}
}

function chopBloodwood() {
	chopping = true;
	addText("You begin chopping the bloodwood tree...");
	choppingBloodwood = setInterval(function() {
		editWoodcuttingXp(250);
		editWood(5);
		bloodwoodNumLogs -= 5;
		if (bloodwoodNumLogs <=0) {
			bloodwoodStump = true;
			stopAll();
			addText("You chop down the bloodwood tree.");
			setTimeout(function(){reloadBloodwood()}, 10000);
		};
	}, (150000 / woodcuttingStrength));
}

function reloadThot() {
	thotStump = false;
	thotX = -10 + Math.floor(Math.random() * 800);
	thotY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((thotX <= oakX + 100 && thotX >= oakX - 100) || (thotX <= bloodwoodX + 100 && thotX >= bloodwoodX - 100) || (thotX <= treeX + 100 && thotX >= treeX - 100) || (thotX <= fuhrerX + 100 && thotX >= fuhrerX - 100)) {
			thotX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	thotNumLogs = Math.floor(Math.random() * 800);
}

function tryThot() {
	stopAll();
	if (thotStump) {addText("Be patient... It will grow back in time.")}
	else if (woodcuttingLevel >= 60) {chopThot()}
	else {addText("You need level 60 woodcutting to chop thot trees.")}
}

function chopThot() {
	chopping = true;
	addText("You begin chopping the thot tree...");
	choppingThot = setInterval(function() {
		editWoodcuttingXp(600);
		editWood(10);
		thotNumLogs -= 10;
		if (thotNumLogs <=0) {
			thotStump = true;
			stopAll();
			addText("You chop down the thot tree.");
			setTimeout(function(){reloadThot()}, 20000);
		};
	}, (200000 / woodcuttingStrength));
}

function reloadFuhrer() {
	fuhrerStump = false;
	fuhrerX = -10 + Math.floor(Math.random() * 800);
	fuhrerY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((fuhrerX <= oakX + 100 && fuhrerX >= oakX - 100) || (fuhrerX <= bloodwoodX + 100 && fuhrerX >= bloodwoodX - 100) || (fuhrerX <= treeX + 100 && fuhrerX >= treeX - 100) || (fuhrerX <= thotX + 100 && fuhrerX >= thotX - 100)) {
			fuhrerX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	fuhrerNumLogs = Math.floor(Math.random() * 3000);
}

function tryFuhrer() {
	stopAll();
	if (fuhrerStump) {addText("Be patient... It will grow back in time.")}
	else if (woodcuttingLevel >= 80) {chopFuhrer()}
	else {addText("You need level 80 woodcutting to chop fuhrer trees.")}
}

function chopFuhrer() {
	chopping = true;
	addText("You begin chopping the fuhrer tree...");
	choppingFuhrer = setInterval(function() {
		editWoodcuttingXp(1400);
		editWood(20);
		fuhrerNumLogs -= 20;
		if (fuhrerNumLogs <=0) {
			fuhrerStump = true;
			stopAll();
			addText("You chop down the fuhrer tree.");
			setTimeout(function(){reloadFuhrer()}, 40000);
		};
	}, (300000 / woodcuttingStrength));
}



























