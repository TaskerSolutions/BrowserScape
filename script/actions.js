var mouseX = 0;
var mouseY = 0;

var clickX = 0;
var clickY = 0;
var gameClicked = false;

var clickAmtInc = 0.2;
var clickAmt = 0;
var clickTranslateInc = 1;
var clickTranslate = 0;

var moveToX = 0;
var moveToY = 0;

var damageTaken = false;

function stopAll() {
	notBusy = true;
	gameClicked = false;
	
	stopCave();
	stopForest();	
	stopClearing();	
	stopCamp();
	stopRiver();	
	stopLake();
	stopMine();
	
	
	stopCrafting();
	
	cooking = false;
	clearInterval(nowCooking);
	
	fishing = false;
	clearInterval(nowFishing);

	combat = false;
	clearInterval(attacking);
}


function moveToObject(dX, dY, dWidth, dHeight, object) {
	if (x <= (dX - 20)) {x += speed; facingLeft = false;}
	if (x > (dX - 20) && x < dX + dWidth / 2) {x -= speed; facingLeft = false;}
	if (x <= (dX + dWidth + 20) && x >= dX + dWidth / 2) {x += speed; facingLeft = true;}
	if (x > (dX + dWidth + 20)) {x -= speed; facingLeft = true;}
	if (y <= (dY + dHeight)) {y += speed;}
	if (y > (dY + dHeight)) {y -= speed;}
	if ((x >= dX - 26 && x <= dX - 14 && y >= dY + dHeight - 06 && y <= dY + dHeight + 06) || (x >= dX + dWidth + 14 && x <= dX + dWidth + 26 && y >= dY + dHeight - 06 && y <= dY + dHeight + 06)) {
		caveObjects(object);
		forestObjects(object);
		campObjects(object);
		clearingObjects(object);
		riverObjects(object);
		lakeObjects(object);
		mineObjects(object);
	}
}

function getClickPos(canvas, event) { 
	let rect = canvas.getBoundingClientRect(); 
	clickX = event.clientX - rect.left; 
	clickY = event.clientY - rect.top; 
	clickAmt = 2;
	clickTranslate = 11;
	
	
	if (clickY >= 440) {
		buttonsClick()
	} else {
		if (mapOpen) {
			mapClick()
		} else {
			if (gearOpen || itemsOpen || skillsOpen || toolsOpen || craftOpen || questsOpen || soundOpen) {
				if (clickX >= menuX && clickX <= menuX + 230 && clickY >= menuY && clickY <= menuY + 397) {
					if (gearOpen) {gearClick()}
					if (itemsOpen) {itemsClick()}
					if (skillsOpen) {skillsClick()}
					if (toolsOpen) {toolsClick()}
					if (craftOpen) {craftClick()}
					if (soundOpen) {soundClick()}
					if (questsOpen) {questsClick()}
				} else {
					stopAll();
					moveToX = clickX;
					moveToY = clickY;
					if (forest) {forestClick()} else 
					if (river) {riverClick()} else
					if (mine) {mineClick()} else
					if (sewer) {sewerClick()} else
					if (camp) {campClick()} else
					if (clearing) {clearingClick()} else
					if (lake) {lakeClick()} else
					if (cave) {caveClick()}	
				} 
			} else {
				stopAll();
				moveToX = clickX;
				moveToY = clickY;
				if (forest) {forestClick()} else 
				if (river) {riverClick()} else
				if (mine) {mineClick()} else
				if (sewer) {sewerClick()} else
				if (camp) {campClick()} else
				if (clearing) {clearingClick()} else
				if (lake) {lakeClick()} else
				if (cave) {caveClick()}	
			}
		}
	}
	
}



function clearCanvas() {
	camp = false;
	cave = false;
	clearing = false;
	forest = false;
	lake = false;
	mine = false;
	river = false;
	sewer = false;
}

function clearMenus() {
	mapOpen = false;
	questsOpen = false;
	soundOpen = false;
	skillsOpen = false;	
	gearOpen = false;
	itemsOpen = false;
	toolsOpen = false;
	craftOpen = false;
}

function moveToClick(leftRestriction, topRestriction, rightRestriction, bottomRestriction) {
	if (x < moveToX - 6 && x < (1000 - rightRestriction)) {x += speed; facingLeft = false;}
	if (x > moveToX + 6 && x > leftRestriction) {x -= speed; facingLeft = true;}
	if (y > moveToY && y > topRestriction) {y -= speed;}
	if (y < moveToY && y < (450 - bottomRestriction)) {y += speed;}
	if (y >= moveToY -5 && y <= moveToY +5 && x >= moveToX -5 && x <= moveToX +5) {
		gameClicked = false;
	}
}

var clickInterval = setInterval(function(){
	if (clickAmt > 0) {
		clickAmt -= clickAmtInc;
		clickTranslate -= clickTranslateInc;
	}
}, 1000 / fps);

gameplay.addEventListener("mousedown", function(e) { 
	getClickPos(gameplay, e);
}); 

function displayClickPos(color){
	if (clickAmt > 0){
		context.drawImage(images[color], clickX - clickTranslate, clickY - clickTranslate, 10 * clickAmt, 10 * clickAmt);
	}
}

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	}
}

gameplay.addEventListener('mousemove', function(evt) {
	var mousePos = getMousePos(canvas, evt);
	mouseX = mousePos.x;
	mouseY = mousePos.y;
}, false);



$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip();});

function addText(message) {
	var el = document.getElementById('text');
	var p = document.createElement('p');
	p.appendChild(document.createTextNode(message));
	el.insertBefore(p, p.nextSibling);
	$(p).addClass("reveal");
	el.scrollTop = el.scrollHeight;
}

//insert after?













