var gearOpen = false;

var gearLeft = menuX + 8;
var gearMiddle = menuX + 82;
var gearRight = menuX + 156;

var row1gear = menuY + 76;
var row2gear = menuY + 148;
var row3gear = menuY + 176;
var row4gear = menuY + 234;
var row5gear = menuY + 320;


var helmet = "No Helmet";
var helmetBonus = 0;

var bodyArmour = "No Body Armour";
var bodyArmourBonus = 0;

var legArmour = "No Leg Armour";
var legArmourBonus = 0;

var boots = "No Boots";
var bootsBonus = 0;

var shield = "No Shield";
var shieldBonus = 0;

var weapon = "No Weapon";
var weaponStrength = 0;

var defense = 0;
var damage = 0;

function showGear() {
	if (gearOpen) {
		gearOpen = false
	} else {
		clearMenus();
		gearOpen = true;
	}
}

function gearClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){
		showGear()
	}
}

function gearImages() {
	totalResources ++; loadImage("gear/slotSquare");
	totalResources ++; loadImage("gear/slotVertical");
	totalResources ++; loadImage("gear/tooltip");
	totalResources ++; loadImage("gear/helmetNone");
	totalResources ++; loadImage("gear/bodyNone");
	totalResources ++; loadImage("gear/legsNone");
	totalResources ++; loadImage("gear/weaponNone");
	totalResources ++; loadImage("gear/weaponMoistClub");
	totalResources ++; loadImage("gear/shieldNone");
	totalResources ++; loadImage("gear/bootsNone");
}

function drawGear() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("GEAR", menuX + 50, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
		
	context.drawImage(images["gear/slotSquare"], gearMiddle, row1gear);
	if (helmet == "No Helmet") {context.drawImage(images["gear/helmetNone"], gearMiddle, row1gear)}
	else {}
	
	context.drawImage(images["gear/slotVertical"], gearMiddle, row2gear);
	if (bodyArmour == "No Body Armour") {context.drawImage(images["gear/bodyNone"], gearMiddle, row2gear)}
	else {}
	
	context.drawImage(images["gear/slotVertical"], gearLeft, row3gear);
	if (weapon == "No Weapon") {context.drawImage(images["gear/weaponNone"], gearLeft, row3gear)}
	else if (weapon == "Moist Club") {context.drawImage(images["gear/weaponMoistClub"], gearLeft, row3gear)}
	else {}
		
	context.drawImage(images["gear/slotVertical"], gearRight, row3gear);
	if (shield == "No Shield") {context.drawImage(images["gear/shieldNone"], gearRight, row3gear)}
	else {}
	
	context.drawImage(images["gear/slotVertical"], gearMiddle, row4gear);
	if (legArmour == "No Leg Armour") {context.drawImage(images["gear/legsNone"], gearMiddle, row4gear)}
	else {}
	
	context.drawImage(images["gear/slotSquare"], gearMiddle, row5gear);
	if (boots == "No Boots") {context.drawImage(images["gear/bootsNone"], gearMiddle, row5gear)}
	else {}
	
	
	context.font = "bold 12px sans-serif";
	
	if (mouseX >= gearMiddle && mouseX <= gearMiddle + 66 && mouseY >= row1gear && mouseY <= row1gear + 66) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(helmet, mouseX -113, mouseY + 18);
		context.fillText("Defense + " + helmetBonus, mouseX -113, mouseY + 34);
	}
	if (mouseX >= gearMiddle && mouseX <= gearMiddle + 66 && mouseY >= row2gear && mouseY <= row2gear + 80) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(bodyArmour, mouseX -113, mouseY + 18);
		context.fillText("Defense + " + bodyArmourBonus, mouseX -113, mouseY + 34);
	}
	if (mouseX >= gearLeft && mouseX <= gearLeft + 66 && mouseY >= row3gear && mouseY <= row3gear + 66) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(weapon, mouseX -113, mouseY + 18);
		context.fillText("Strength + " + weaponStrength, mouseX -113, mouseY + 34);
	}
	if (mouseX >= gearRight && mouseX <= gearRight + 66 && mouseY >= row3gear && mouseY <= row3gear + 80) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(shield, mouseX -113, mouseY + 18);
		context.fillText("Defense + " + shieldBonus, mouseX -113, mouseY + 34);
	}	
	if (mouseX >= gearMiddle && mouseX <= gearMiddle + 66 && mouseY >= row4gear && mouseY <= row4gear + 66) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(legArmour, mouseX -113, mouseY + 18);
		context.fillText("Defense + " + legArmourBonus, mouseX -113, mouseY + 34);
	}
	if (mouseX >= gearMiddle && mouseX <= gearMiddle + 66 && mouseY >= row5gear && mouseY <= row5gear + 80) {
		context.drawImage(images["gear/tooltip"], mouseX - 120, mouseY);
		context.fillText(boots, mouseX -113, mouseY + 18);
		context.fillText("Defense + " + bootsBonus, mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}


function editHelmet(type, bonus) {
	helmet = type;
	helmetBonus = bonus;
	defense = defense + helmetBonus;
}

function editBodyArmour(type, bonus) {
	bodyArmour = type;
	bodyArmourBonus = bonus;
	defense = defense + bodyArmourBonus;
}

function editLegArmour(type, bonus) {
	legArmour = type;
	legArmourBonus = bonus;
	defense = defense + legArmourBonus;
}

function editShield(type, bonus) {
	shieldArmour = type;
	shieldArmourBonus = bonus;
	defense = defense + shieldArmourBonus;
}

function editBoots(type, bonus) {
	bootsArmour = type;
	bootsArmourBonus = bonus;
	defense = defense + bootsArmourBonus;
}

function editWeapon(type, strength) {
	weapon = type;
	weaponStrength = strength;
	damage = weaponStrength + strengthLevel;
}

