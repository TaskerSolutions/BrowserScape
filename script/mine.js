var mine = false;
var mineVisit = false;

var mining = false;

var mineLeftClicked = false;
var	mineRightClicked = false;
var	mineUpClicked = false;
var	mineDownClicked = false;

var ironClicked = false;
var miningIron;
var ironNumOres = 0;
var ironX = 0;
var ironY = 0;
var ironDepleted = false;

var coalClicked = false;
var miningCoal;
var coalNumOres = 0;
var coalX = 0;
var coalY = 0;
var coalDepleted = false;

var combat = false;
var attacking;
var killCount = 0;

var canv = document.getElementById("background");
var bear = document.createElement("img");
var bearHealthBar = document.createElement("progress");
var bearHealthBarValue = document.createElement("span");
var bearHP = 10;

function showMine() {
	clearCanvas();
	mine = true;
	reloadIron();
	reloadCoal();
}

function mineImages() {
	totalResources ++; loadImage("mine/mineBackground");
	totalResources ++; loadImage("mine/ironRock");
	totalResources ++; loadImage("mine/coalRock");
	totalResources ++; loadImage("mine/depletedRock");
}

function stopMine() {
	mining = false;
	
	mineLeftClicked = false;
	mineRightClicked = false;
	mineUpClicked = false;
	mineDownClicked = false;
	
	clearInterval(miningIron);
	ironClicked = false;
	clearInterval(miningCoal);
	coalClicked = false;
}

function mineClick() {
	if (clickX <= ironX + 130 && clickX >= ironX && clickY >= ironY + 23 && clickY <= ironY + 130) {
		ironClicked = true;
	} else if (clickX <= coalX + 130 && clickX >= coalX && clickY >= coalY + 23 && clickY <= coalY + 130) {
		coalClicked = true;
	} else if (clickX <= 60 && clickY >= 250 && clickY <= 305) {
		mineLeftClicked = true;
	} else if (clickX >= 935 && clickY >= 250 && clickY <= 305) {
		mineRightClicked = true;
	} else {
		gameClicked = true;
	}
}

function mineObjects(object) {
	if (object == "mineLeft") {showCamp(); x = 875; y = 220;}
	if (object == "mineRight") {stopAll();addText("You will need a light source to venture deeper into the mine.")}
	if (object == "iron") {tryIron()}
	if (object == "coal") {tryCoal()}
}

function drawMine() {
	context.drawImage(images["mine/mineBackground"], 0, 0);
	
	if (ironY + 130 < y) {if (ironDepleted) {context.drawImage(images["mine/depletedRock"], ironX, ironY)} else {context.drawImage(images["mine/ironRock"], ironX, ironY)}}
	if (coalY + 130 < y) {if (coalDepleted){context.drawImage(images["mine/depletedRock"], coalX, coalY)} else {context.drawImage(images["mine/coalRock"], coalX, coalY)}}
	
	if (facingLeft) {charLeft()} else {charRight()}
	
	if (ironY + 130 >= y) {if (ironDepleted) {context.drawImage(images["mine/depletedRock"], ironX, ironY)} else {context.drawImage(images["mine/ironRock"], ironX, ironY)}}
	if (coalY + 130 >= y) {if (coalDepleted){context.drawImage(images["mine/depletedRock"], coalX, coalY)} else {context.drawImage(images["mine/coalRock"], coalX, coalY)}}
	
		
	context.globalAlpha = 0.3;
	context.drawImage(images["cave/shadow"], 0, 0,);
	context.globalAlpha = 1;
	
	context.drawImage(images["buttons/arrowLeft"], 10 + breathAmt, 250, 50, 50);
	context.drawImage(images["buttons/arrowRight"], 940 - breathAmt, 250, 50, 50);
	
	
	if (ironClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(ironX, ironY, 145, 135, "iron")
	} else if (coalClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(coalX, coalY, 145, 135, "coal")
	} else if (mineLeftClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(-80, 200, 0, 100, "mineLeft")
	} else if (mineRightClicked) {
		displayClickPos("buttons/clickPosRed");	moveToObject(1000, 200, 0, 100, "mineRight")
	} else if (gameClicked) {
		displayClickPos("buttons/clickPosBlue"); moveToClick(0, 100, 0, 35)
	}
}


function reloadIron() {
	ironDepleted = false;
	ironX = -10 + Math.floor(Math.random() * 800);
	ironY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((ironX <= coalX + 150 && ironX >= coalX - 150)) {
			ironX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	ironNumOres = Math.floor(Math.random() * 5);
}

function tryIron() {
	stopAll();
	if (pickaxe == "No Pickaxe") {
		addText("You need a pickaxe to mine ore.")
	} else {
		if (ironDepleted) {
			addText("Be patient... Ore comes back suprisingly fast.")
		} else {
			mineIron()
		}
	}
}

function mineIron() {
	mining = true;
	addText("You begin mining the iron...");
	miningIron = setInterval(function() {
		editMiningXp(50);
		iron ++;
		ironNumOres -= 1;
		if (ironNumOres <=0) {
			ironDepleted = true;
			stopAll();
			addText("You deplete the iron rock.");
			setTimeout(function(){reloadIron()}, 2000);
		};
	}, (40000 / miningStrength));
}

function reloadCoal() {
	coalDepleted = false;
	coalX = -10 + Math.floor(Math.random() * 800);
	coalY = -20 + Math.floor(Math.random() * 220);
	var i;
	for (i = 0; i < 100; i++) {
		if ((coalX <= ironX + 150 && coalX >= ironX - 150)) {
			coalX = -10 + Math.floor(Math.random() * 800);
		} else {
			i = 100;
		}
	}
	coalNumOres = Math.floor(Math.random() * 20);
}

function tryCoal() {
	stopAll();
	if (coalDepleted) {
		addText("Be patient... Ore comes back suprisingly fast.")
	} else if (miningLevel >= 20) {
		mineCoal()
	} else {
		addText("You need level 20 mining to mine Coal.")
	}
}

function mineCoal() {
	mining = true;
	addText("You begin mining the coal rock...");
	miningCoal = setInterval(function() {
		editMiningXp(100);
		coal += 1;
		coalNumOres -= 1;
		if (coalNumLogs <=0) {
			coalDepleted = true;
			stopAll();
			addText("You deplete the coal rock.");
			setTimeout(function(){reloadCoal()}, 4000);
		};
	}, (60000 / miningStrength));
}





















function exploreBearCave() { 
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		progressBar(18, "progress25");
		addText("You venture into the bears lair...");
		setTimeout(function(){addText("This appears to be an old mine shaft...");}, 3000);
		setTimeout(function(){addText("It smells worse than a World of Warcraft player in here.");}, 6000);
		setTimeout(function(){
			addText("You come to a split in the shaft.");
			document.getElementById("background").style.backgroundImage = "url('media/minesplit.jpg')";
			document.getElementById("damagediv").style.backgroundColor = "#00000099";
		}, 9000);
		setTimeout(function(){addText("You can hear creatures moving about in the left side.");}, 12000);
		setTimeout(function(){addText("You can see a dead body in the right side.");}, 15000);
		setTimeout(function(){
			addText("Which side should I explore?");
			document.getElementById("explorecave").style.display = "none";
			document.getElementById("exploreleft").style.display = "block";
			document.getElementById("exploreright").style.display = "block";
			notBusy = true;
		}, 18000);
	}
}
//check to see if left/right have been explored
function exploreLeft() { 
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		progressBar(18, "progress26");
		addText("You set off down the left path...");
		setTimeout(function(){addText("Scratching noises from the creatures echo in the chamber.");}, 3000);
		setTimeout(function(){
			addText("Slime on the walls gets thicker as you walk deeper.");
			document.getElementById("background").style.backgroundImage = "url('media/minesewershaft.jpg')";
		}, 6000);
		setTimeout(function(){addText("Stagnant water gets deeper with each step.");}, 9000);
		setTimeout(function(){addText("I seem to be in some kind of sewer tunnel.");}, 12000);
		setTimeout(function(){addText("You see an enormous rabid looking rat in the distance.");}, 15000);
		setTimeout(function(){
			document.getElementById("exploreleft").style.display = "none";
			document.getElementById("exploreright").style.display = "none";
			document.getElementById("goback").style.display = "block";
			document.getElementById("entersewer").style.display = "block";
			notBusy = true;
		}, 18000);
	}
}

function exploreRight() { 
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		progressBar(18, "progress27");
		addText("You set off down the right path...");
		setTimeout(function(){addText("The foul smell becomes unbearable.");}, 3000);
		setTimeout(function(){
			addText("You approach the decomposing corpse of a miner.");
			document.getElementById("background").style.backgroundImage = "url('media/minebody.jpg')";
		}, 6000);
		setTimeout(function(){addText("He must have died weeks ago.");}, 9000);
		setTimeout(function(){addText("There is something shiny underneath him.");}, 12000);
		setTimeout(function(){addText("It's his pickaxe!");}, 15000);
		setTimeout(function(){
			document.getElementById("exploreleft").style.display = "none";
			document.getElementById("exploreright").style.display = "none";
			document.getElementById("takepickaxe").style.display = "block";
			notBusy = true;
		}, 18000);
	}
}

function takePickaxe() {
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		progressBar(18, "progress28");
		addText("You roll the corpse over.");
		setTimeout(function(){addText("A waft of dead body burns your nostrils.");}, 3000);
		setTimeout(function(){
			addText("The pickaxe is basic, but surely I can mine some rocks with it.");
			//addPickaxe();
		}, 6000);
		setTimeout(function(){addText("I should say thankyou to the dead man...");}, 9000);
		setTimeout(function(){
			addText("But instead, I plunder his wallet and find 10 gold coins.");
			//addGold(10);
		}, 12000);
		setTimeout(function(){addText("You venture further into the mine.");}, 15000);
		setTimeout(function(){
			addText("There is some kind of ore in the wall...");
			addText("STORY BRANCH ENDS HERE");
			document.getElementById("takepickaxe").style.display = "none";
			document.getElementById("goback").style.display = "block";
			//document.getElementById("mineore").style.display = "block";
			notBusy = true;
		}, 18000);
	}
}

function goBack() {
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		fastProgressBar(30, "progress29");
		document.getElementById("entersewer").style.display = "none";
		//document.getElementById("mineore").style.display = "none";
		addText("You turn around and head back to the split.");			
		setTimeout(function(){
			document.getElementById("exploreleft").style.display = "block";
			document.getElementById("exploreright").style.display = "block";
			document.getElementById("goback").style.display = "none";
			notBusy = true;
		}, 3000);
	}
}

function enterSewer() {
	if(notBusy) {
		fastBarWidth = 0;
		barWidth = 0;
		notBusy = false;
		fastProgressBar(30, "progress30");
		addText("You head towards the evil rat, with your weapon in hand.");			
		setTimeout(function(){
			document.getElementById("entersewer").style.display = "none";
			addText("STORY BRANCH ENDS HERE");
			notBusy = true;
		}, 3000);
	}
}

function addBear() {
	bear.src = "media/bear.png";
	bear.style.top = 280 + "px";
	bear.style.left = 545 + "px";
	canv.appendChild(bear);
	bear.classList.add("zoomin");
	
	setTimeout(function(){bear.src = "media/bear2.png";}, 300);
	setTimeout(function(){bear.src = "media/bear.png";}, 600);
	setTimeout(function(){bear.src = "media/bear2.png";}, 900);
	setTimeout(function(){bear.src = "media/bear.png";}, 1200);
	setTimeout(function(){bear.src = "media/bear2.png";}, 1500);
	setTimeout(function(){bear.src = "media/bear.png";}, 1800);
	setTimeout(function(){bear.src = "media/bear2.png";}, 2100);
	setTimeout(function(){bear.src = "media/bear.png";}, 2400);
	setTimeout(function(){bear.src = "media/bear2.png";}, 2700);
	setTimeout(function(){bear.src = "media/bear.png";}, 3000);
	setTimeout(function(){bear.src = "media/bear2.png";}, 3300);
	setTimeout(function(){bear.src = "media/bear2.png";}, 3600);
	
	bearHealthBar.style.top = 260 + "px";
	bearHealthBar.style.left = 370 + "px";
	$(bearHealthBar).val(100);
	bearHealthBar.max = 10;
	bearHealthBarValue.style.top = 260 + "px";
	bearHealthBarValue.style.left = 445 + "px";
	bearHealthBarValue.innerHTML = bearHP;
	setTimeout(function(){
		canv.appendChild(bearHealthBar);
		canv.appendChild(bearHealthBarValue);
		bear.classList.remove("zoomin");
		bear.style.left = 375 + "px";
	}, 4000);	
}

bear.addEventListener("click", function(){attack(bear)});

var hitDisplay = document.createElement("span");
var hitSplat = document.createElement("img");

function attack(mob) {
	if (combat == false) {
		addText("You attack the bear.");
		combat = true;
		attacking = setInterval(function() {
			var dmg = Math.floor(2 * Math.random()) ;
			//if (dmg < 0) {dmg = 0;}
			if ((health - dmg) <= 0){dmg = health;};
			editHealth(dmg);
			addText(dmg);
						
			
			var hit = Math.floor(damage * Math.random()) - 3;
			if (hit < 0) {hit = 0;}
			if ((bearHP - hit) <= 0){hit = bearHP;};
				bearHP -= hit;
				editStrengthXP(hit * 10);
				$(bearHealthBar).val(bearHP);
				bearHealthBarValue.innerHTML = bearHP;
				hitDisplay.style.top = 390 + "px";
				hitDisplay.style.left = 477 + "px";
				hitDisplay.innerHTML = hit;
				canv.appendChild(hitDisplay);
				hitSplat.style.top = 375 + "px";
				hitSplat.style.left = 455 + "px";
				hitSplat.src = "media/hitsplat.png";
				if (hit == 0) {hitSplat.src = "media/misssplat.png";}
				canv.appendChild(hitSplat);
				//bear.src = "media/beardmg.png";
				//setTimeout(function(){bear.src = "media/bear.png";}, 500);
				setTimeout(function(){
					canv.removeChild(hitDisplay);
					canv.removeChild(hitSplat);
				}, 500);
			if (bearHP == 0){
				stopAll();
				setTimeout(function(){
					canv.removeChild(bearHealthBar);
					canv.removeChild(bearHealthBarValue);
					bear.classList.add('rotate');
				}, 1000);
				setTimeout(function(){
					canv.removeChild(bear);
					addText("You defeated the bear.")
					if (killCount == 0) {
						document.getElementById("explorecave").style.display = "block";
					};
					killCount ++;
				}, 2000);
			}			
		}, 2000);
	}
}