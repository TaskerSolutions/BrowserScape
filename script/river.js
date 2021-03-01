var river = false;
var riverVisit = false;

var moistClubClicked = false;
var	riverDownClicked = false;

var moistClubVisible = true;

var fishing = false;
var nowFishing;

function showRiver() {
	clearCanvas();
	river = true;
	if (gearBtn == false) {
		gearBtn = true;
		gearBtnFlashing = true;
		setTimeout(function() {gearBtnFlashing = false}, 3000)
	}
}

function riverImages() {
	totalResources ++; loadImage("river/riverBackground");
}

function stopRiver() {
	riverDownClicked = false;
	moistClubClicked = false;
}

function riverClick() {
	if (clickX <= 316 && clickX >= 250 && clickY >= 230 && clickY <= 310 && moistClubVisible) {
		moistClubClicked = true;
	} else if (clickY >= 380) {
		riverDownClicked = true;
	} else {
		gameClicked = true;
	}
}

function riverObjects(object) {
	if (object == "riverDown") {showClearing(); x = 460; y = 150}
	if (object == "moistClub") {takeMoistClub()}
}

function drawRiver() {
	context.drawImage(images["river/riverBackground"], 0, 0);
	
	if (moistClubVisible) {context.drawImage(images["gear/weaponMoistClub"], 250, 230)}
	
	if (facingLeft) {charLeft()} else {charRight()}
	

	context.drawImage(images["buttons/arrowDown"], 475, 380 - breathAmt, 50, 50);
	
	if (moistClubClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(270, 230, 20, 60, "moistClub")
	} else if (riverDownClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(475, 480, 30, 20, "riverDown")
	} else if (gameClicked) {
		displayClickPos("buttons/clickPosBlue"); moveToClick(0, 265, 0, 0)
	}
}

function takeMoistClub() {
	stopAll();
	moistClubVisible = false;
	addText("You find a club! You feel power surge through your veins.");
	editWeapon("Moist Club", 8);
}















function catchFish() {
	if (fishing) {
		stopAll();
		notBusy = true;
	} else {
		if(notBusy) {
			fastBarWidth = 0; barWidth = 0;
			notBusy = false;
			fishing = true;
			document.getElementById("catchfishbtn").innerHTML = "Fishing...";
			if(fishingLevel <= 4) {
				addText("You cast out your fishing net...");
				fastBarWidth = 0; barWidth = 0; progressBar(4, "progress20");
				nowFishing = setInterval(function() {
					addText("You catch a fish. +20xp.");
					editFishingXP(20);
					if(fishing) {progressBar(4, "progress20");};
					editRawMeat(1);
				}, 4000);
			} else {
				addText("You cast out your fishing net...");
				fastBarWidth = 0; barWidth = 0; fastProgressBar(30, "progress20");
				nowFishing = setInterval(function() {
					addText("You catch a fish. +20xp.");
					editFishingXP(20);
					if(fishing) {fastProgressBar(30, "progress20");};
					editRawMeat(1);
				}, 3000);
				}
		}	
	}
}