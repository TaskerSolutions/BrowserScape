var toolsOpen = false;

var row1tools = menuY + 72;
var row2tools = menuY + 179;
var row3tools = menuY + 286;


var hatchet = "No Hatchet";
var hatchetStrength = 0;
var woodcuttingStrength = 0;

var pickaxe = "No Pickaxe";
var pickaxeStrength = 0;
var miningStrength = 0;

var harpoon = "No Harpoon";
var harpoonStrength = 0;
var fishingStrength = 0;

var hammer = "No Hammer";
var hammerStrength = 0;
var smithingStrength = 0;

var chisel = "No Chisel";
var chiselStrength = 0;
var craftingStrength = 0;

var noose = "No Noose";
var nooseStrength = 0;
var huntingStrength = 0;


function showTools() {
	if (toolsOpen) {
		toolsOpen = false
	} else {
		clearMenus();
		toolsOpen = true;
	}
}

function toolsClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){
		showTools()
	}
}

function toolsImages() {
	totalResources ++; loadImage("tools/slotSquare");
	totalResources ++; loadImage("tools/tooltip");
	totalResources ++; loadImage("tools/hatchetNone");
	totalResources ++; loadImage("tools/oldHatchet");
	totalResources ++; loadImage("tools/pickaxeNone");
	totalResources ++; loadImage("tools/rustyPickaxe");
	totalResources ++; loadImage("tools/harpoonNone");
	totalResources ++; loadImage("tools/crudeHarpoon");
	totalResources ++; loadImage("tools/hammerNone");
	totalResources ++; loadImage("tools/raggedHammer");
	totalResources ++; loadImage("tools/chiselNone");
	totalResources ++; loadImage("tools/roughChisel");
	totalResources ++; loadImage("tools/nooseNone");
	totalResources ++; loadImage("tools/looseNoose");
}

function drawTools() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("TOOLS", menuX + 40, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
	
	//row1
	context.drawImage(images["tools/slotSquare"], leftColumn, row1tools);
	if (hatchet == "No Hatchet") {context.drawImage(images["tools/hatchetNone"], leftColumn, row1tools)}
	else if (hatchet == "Old Hatchet") {context.drawImage(images["tools/oldHatchet"], leftColumn, row1tools)}
	
	context.drawImage(images["tools/slotSquare"], rightColumn, row1tools);
	if (pickaxe == "No Pickaxe") {context.drawImage(images["tools/pickaxeNone"], rightColumn, row1tools)}
	else if (pickaxe == "Rusty Pickaxe") {context.drawImage(images["tools/rustyPickaxe"], rightColumn, row1tools)}
	
	//row2
	context.drawImage(images["tools/slotSquare"], leftColumn, row2tools);
	if (harpoon == "No Harpoon") {context.drawImage(images["tools/harpoonNone"], leftColumn, row2tools)}
	else if (harpoon == "Crude Harpoon") {context.drawImage(images["tools/crudeHarpoon"], leftColumn, row2tools)}
	
	context.drawImage(images["tools/slotSquare"], rightColumn, row2tools);
	if (hammer == "No Hammer") {context.drawImage(images["tools/hammerNone"], rightColumn, row2tools)}
	else if (hammer == "Ragged Hammer") {context.drawImage(images["tools/raggedHammer"], rightColumn, row2tools)}
	
	//row3
	context.drawImage(images["tools/slotSquare"], leftColumn, row3tools);
	if (chisel == "No Chisel") {context.drawImage(images["tools/chiselNone"], leftColumn, row3tools)}
	else if (chisel == "Rough Chisel") {context.drawImage(images["tools/roughChisel"], leftColumn, row3tools)}
	
	context.drawImage(images["tools/slotSquare"], rightColumn, row3tools);
	if (noose == "No Noose") {context.drawImage(images["tools/nooseNone"], rightColumn, row3tools)}
	else if (noose == "Loose Noose") {context.drawImage(images["tools/looseNoose"], rightColumn, row3tools)}
	
	context.font = "bold 12px sans-serif";
	
	if (mouseX >= leftColumn && mouseX <= leftColumn + 105 && mouseY >= row1tools && mouseY <= row1tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(hatchet, mouseX -113, mouseY + 18);
		context.fillText("+ " + hatchetStrength + " Woodcutting", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= rightColumn && mouseX <= rightColumn + 105 && mouseY >= row1tools && mouseY <= row1tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(pickaxe, mouseX -113, mouseY + 18);
		context.fillText("+ " + pickaxeStrength + " Mining", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= leftColumn && mouseX <= leftColumn + 105 && mouseY >= row2tools && mouseY <= row2tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(harpoon, mouseX -113, mouseY + 18);
		context.fillText("+ " + harpoonStrength + " Fishing", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= rightColumn && mouseX <= rightColumn + 105 && mouseY >= row2tools && mouseY <= row2tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(hammer, mouseX -113, mouseY + 18);
		context.fillText("+ " + hammerStrength + " Smithing", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= leftColumn && mouseX <= leftColumn + 105 && mouseY >= row3tools && mouseY <= row3tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(chisel, mouseX -113, mouseY + 18);
		context.fillText("+ " + chiselStrength + " Crafting", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= rightColumn && mouseX <= rightColumn + 105 && mouseY >= row3tools && mouseY <= row3tools + 103) {
		context.drawImage(images["tools/tooltip"], mouseX - 120, mouseY);
		context.fillText(noose, mouseX -113, mouseY + 18);
		context.fillText("+ " + nooseStrength + " Hunting", mouseX -113, mouseY + 34);
	}
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}

function editHatchet(type, bonus) {
	hatchet = type;
	hatchetStrength = bonus;
	woodcuttingStrength = hatchetStrength + woodcuttingLevel;
}

function editPickaxe(type, bonus) {
	pickaxe = type;
	pickaxeStrength = bonus;
	miningStrength = pickaxeStrength + miningLevel;
}

function editHarpoon(type, bonus) {
	harpoon = type;
	harpoonStrength = bonus;
	fishingStrength = harpoonStrength + fishingLevel;
}

function editHammer(type, bonus) {
	hammer = type;
	hammerStrength = bonus;
	smithingStrength = hammerStrength + smithingLevel;
}

function editChisel(type, bonus) {
	chisel = type;
	chiselStrength = bonus;
	craftingStrength = chiselStrength + craftingLevel;
}

function editSnare(type, bonus) {
	snare = type;
	snareStrength = bonus;
	huntingStrength = snareStrength + huntingLevel;
}