var x = 600;
var y = 00;
var charWidth = 121;
var charHeight = 145;
var speed = 5; 
var facingLeft = false;

var fps = 30;
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);

var maxEyeHeight = 14;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;                    
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);

var axeRotationRight = -800;
var axeDirRight = 1;
var axeRotationRightInc = 40;
var axeRotationRightAmt = 0;
var maxaxeRotationRight = 300;

var axeRotationLeft = 800;
var axeDirLeft = 1;
var axeRotationLeftInc = 40;
var axeRotationLeftAmt = 0;
var maxaxeRotationLeft = 300;

var pickaxeRotationRight = -800;
var pickaxeDirRight = 1;
var pickaxeRotationRightInc = 40;
var pickaxeRotationRightAmt = 0;
var maxPickaxeRotationRight = 300;

var pickaxeRotationLeft = 800;
var pickaxeDirLeft = 1;
var pickaxeRotationLeftInc = 40;
var pickaxeRotationLeftAmt = 0;
var maxPickaxeRotationLeft = 300;

function characterImages() {
	totalResources ++; loadImage("character/leftArm");
	totalResources ++; loadImage("character/legs");
	totalResources ++; loadImage("character/torso");
	totalResources ++; loadImage("character/rightArm");
	totalResources ++; loadImage("character/head-right");
	totalResources ++; loadImage("character/head-left");
	totalResources ++; loadImage("character/hair-right");
	totalResources ++; loadImage("character/hair-left");
	
	totalResources ++; loadImage("character/axeArmRight");
	totalResources ++; loadImage("character/axeArmLeft");
	
	totalResources ++; loadImage("character/pickaxeArmRight");
	totalResources ++; loadImage("character/pickaxeArmLeft");
	
	totalResources ++; loadImage("character/moistClubArmRight");
	totalResources ++; loadImage("character/moistClubArmLeft");
	totalResources ++; loadImage("character/moistClubArmRightStationary");
	totalResources ++; loadImage("character/moistClubArmLeftStationary");
}

function charLeft () {
	drawEllipse(x, y - 3, 140 - (breathAmt * 3), 10, "#00000080"); // Char Shadow
	if (mining) {
		rotatePickaxeLeft()
	} else if (chopping) {
		rotateAxeLeft()
	} else {
		if (weapon == "No Weapon") {context.drawImage(images["character/rightArm"], x - 46, y - 75 - breathAmt)}
		else if (weapon == "Moist Club") {context.drawImage(images["character/moistClubArmLeftStationary"], x - 110, y - 72 - breathAmt)}
	}
	context.drawImage(images["character/legs"], x - 40, y - 30);
	context.drawImage(images["character/torso"], x - 25, y - 80);
	context.drawImage(images["character/head-left"], x - 41, y - 155 - breathAmt);
	context.drawImage(images["character/hair-left"], x - 44, y - 168 - breathAmt);
	drawEllipse(x - 19, y - 98 - breathAmt, 8, curEyeHeight, "#000000"); // Left Eye
	drawEllipse(x - 09, y - 98 - breathAmt, 8, curEyeHeight, "#000000"); // Right Eye
	context.drawImage(images["character/leftArm"], x + 16, y - 75 - breathAmt)
}

function charRight() {
	drawEllipse(x, y - 3, 140 - (breathAmt * 3), 10, "#00000080"); // Char Shadow
	context.drawImage(images["character/leftArm"], x + 10, y - 75 - breathAmt);
	context.drawImage(images["character/legs"], x - 40, y - 30);
	context.drawImage(images["character/torso"], x - 25, y - 80);
	context.drawImage(images["character/head-right"], x - 46, y - 155 - breathAmt);
	context.drawImage(images["character/hair-right"], x - 73, y - 168 - breathAmt);
	drawEllipse(x + 15, y - 98 - breathAmt, 8, curEyeHeight, "#000000"); // Left Eye
	drawEllipse(x + 25, y - 98 - breathAmt, 8, curEyeHeight, "#000000"); // Right Eye
	if (mining) {
		rotatePickaxeRight()
	} else if (chopping) {
		rotateAxeRight()
	} else {
		if (weapon == "No Weapon") {context.drawImage(images["character/rightArm"], x - 51, y - 75 - breathAmt)}
		if (weapon == "Moist Club") {context.drawImage(images["character/moistClubArmRightStationary"], x - 46, y - 75 - breathAmt)}
	}
}

function drawEllipse(centerX, centerY, width, height, color) {
 context.beginPath();
  context.moveTo(centerX, centerY - height/2);
  context.bezierCurveTo(
	centerX + width/2, centerY - height/2,
	centerX + width/2, centerY + height/2,
	centerX, centerY + height/2);
  context.bezierCurveTo(
	centerX - width/2, centerY + height/2,
	centerX - width/2, centerY - height/2,
	centerX, centerY - height/2);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function rotateAxeRight() {
	if (axeDirRight === 1) {
		axeRotationRightAmt -= axeRotationRightInc;
		axeRotationRight -= axeRotationRightInc;
		context.save();
		context.translate(x - 25, y - 60);
		context.rotate(axeRotationRight / 180 / Math.PI);
		context.drawImage(images["character/axeArmRight"], -20, -10);
		context.restore();
		if (axeRotationRightAmt < -maxaxeRotationRight) {
			axeDirRight = -1;
		}
	} else {
		axeRotationRightAmt += axeRotationRightInc;
		axeRotationRight += axeRotationRightInc;
		context.save();
		context.translate(x - 25, y - 60);
		context.rotate(axeRotationRight / 180 / Math.PI);
		context.drawImage(images["character/axeArmRight"], -20, -10);
		context.restore();
		if (axeRotationRightAmt > maxaxeRotationRight) {
			axeDirRight = 1;
		}
	}
}

function rotateAxeLeft() {
	if (axeDirLeft === 1) {
		axeRotationLeftAmt -= axeRotationLeftInc;
		axeRotationLeft -= axeRotationLeftInc;
		context.save();
		context.translate(x - 15, y - 60);
		context.rotate(axeRotationLeft / 180 / Math.PI);
		context.drawImage(images["character/axeArmLeft"], -80, -10);
		context.restore();
		if (axeRotationLeftAmt < -maxaxeRotationLeft) {
			axeDirLeft = -1;
		}
	} else {
		axeRotationLeftAmt += axeRotationLeftInc;
		axeRotationLeft += axeRotationLeftInc;
		context.save();
		context.translate(x - 15, y - 60);
		context.rotate(axeRotationLeft / 180 / Math.PI);
		context.drawImage(images["character/axeArmLeft"], -80, -10);
		context.restore();
		if (axeRotationLeftAmt > maxaxeRotationLeft) {
			axeDirLeft = 1;
		}
	}
}

function rotatePickaxeRight() {
	if (pickaxeDirRight === 1) {
		pickaxeRotationRightAmt -= pickaxeRotationRightInc;
		pickaxeRotationRight -= pickaxeRotationRightInc;
		context.save();
		context.translate(x - 25, y - 60);
		context.rotate(pickaxeRotationRight / 180 / Math.PI);
		context.drawImage(images["character/pickaxeArmRight"], -20, -10);
		context.restore();
		if (pickaxeRotationRightAmt < -maxPickaxeRotationRight) {
			pickaxeDirRight = -1;
		}
	} else {
		pickaxeRotationRightAmt += pickaxeRotationRightInc;
		pickaxeRotationRight += pickaxeRotationRightInc;
		context.save();
		context.translate(x - 25, y - 60);
		context.rotate(pickaxeRotationRight / 180 / Math.PI);
		context.drawImage(images["character/pickaxeArmRight"], -20, -10);
		context.restore();
		if (pickaxeRotationRightAmt > maxPickaxeRotationRight) {
			pickaxeDirRight = 1;
		}
	}
}

function rotatePickaxeLeft() {
	if (pickaxeDirLeft === 1) {
		pickaxeRotationLeftAmt -= pickaxeRotationLeftInc;
		pickaxeRotationLeft -= pickaxeRotationLeftInc;
		context.save();
		context.translate(x - 15, y - 60);
		context.rotate(pickaxeRotationLeft / 180 / Math.PI);
		context.drawImage(images["character/pickaxeArmLeft"], -80, -10);
		context.restore();
		if (pickaxeRotationLeftAmt < -maxPickaxeRotationLeft) {
			pickaxeDirLeft = -1;
		}
	} else {
		pickaxeRotationLeftAmt += pickaxeRotationLeftInc;
		pickaxeRotationLeft += pickaxeRotationLeftInc;
		context.save();
		context.translate(x - 15, y - 60);
		context.rotate(pickaxeRotationLeft / 180 / Math.PI);
		context.drawImage(images["character/pickaxeArmLeft"], -80, -10);
		context.restore();
		if (pickaxeRotationLeftAmt > maxPickaxeRotationLeft) {
			pickaxeDirLeft = 1;
		}
	}
}

function updateBreath() { 
  if (breathDir === 1) {  // breath in
	breathAmt -= breathInc;
	if (breathAmt < -breathMax) {
	  breathDir = -1;
	}
  } else {  // breath out
	breathAmt += breathInc;
	if(breathAmt > breathMax) {
	  breathDir = 1;
	}
  }
}

function updateBlink() { 
  eyeOpenTime += blinkUpdateTime;
  if(eyeOpenTime >= timeBtwBlinks){
	blink();
  }
}

function blink() {
  curEyeHeight -= 1;
  if (curEyeHeight <= 0) {
	eyeOpenTime = 0;
	curEyeHeight = maxEyeHeight;
  } else {
	setTimeout(blink, 10);
  }
}


























