var itemsOpen = false;

var food = 0;
var wood = 0;
var flax = 0;
var gems = 0;
var gold = 0;
var rawMeat = 0;
var iron = 0;
var coal = 0;
var hides = 0;
var leather = 0;

function showItems() {
	if (itemsOpen) {
		itemsOpen = false
	} else {
		clearMenus();
		itemsOpen = true;
	}
}

function itemsClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){showItems()}
}

function itemsImages() {
	totalResources ++; loadImage("items/slot");
	totalResources ++; loadImage("items/wood");
	totalResources ++; loadImage("items/planks");
	totalResources ++; loadImage("items/flesh");
	totalResources ++; loadImage("items/food");
	totalResources ++; loadImage("items/iron");
	totalResources ++; loadImage("items/coal");
	totalResources ++; loadImage("items/hides");
	totalResources ++; loadImage("items/leather");
	totalResources ++; loadImage("items/gold");
	totalResources ++; loadImage("items/gems");
}



function drawItems() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("ITEMS", menuX + 49, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
	
	context.font = "bold 15px sans-serif";
		
	//Row 1
	context.drawImage(images["items/slot"], leftColumn, row1);
	context.drawImage(images["items/wood"], leftColumn + 9, row1 + 15, 30, 30);
	context.fillText("Wood", leftColumn + 45, row1 + 25);
	if (wood < 10000) {context.fillText(wood, leftColumn + 47, row1 + 45)}
	else {context.fillText(Math.floor(wood / 1000) + "K", leftColumn + 47, row1 + 45)};
		
	context.drawImage(images["items/slot"], rightColumn, row1);
	context.drawImage(images["clearing/flax"], rightColumn + 9, row1 + 15, 30, 30);
	context.fillText("Flax", rightColumn + 45, row1 + 25);
	if (flax < 10000) {context.fillText(flax, rightColumn + 47, row1 + 45)}
	else {context.fillText(Math.floor(flax / 1000) + "K", rightColumn + 47, row1 + 45)};
	
	//Row 2
	context.drawImage(images["items/slot"], leftColumn, row2);
	context.drawImage(images["items/flesh"], leftColumn + 9, row2 + 15, 30, 30);
	context.fillText("Flesh", leftColumn + 45, row2 + 25);
	if (rawMeat < 10000) {context.fillText(rawMeat, leftColumn + 47, row2 + 45)}
	else {context.fillText(Math.floor(rawMeat / 1000) + "K", leftColumn + 47, row2 + 45)};
		
	context.drawImage(images["items/slot"], rightColumn, row2);
	context.drawImage(images["items/food"], rightColumn + 9, row2 + 15, 30, 30);
	context.fillText("Food", rightColumn + 45, row2 + 25);
	if (food < 10000) {context.fillText(food, rightColumn + 47, row2 + 45)}
	else {context.fillText(Math.floor(food / 1000) + "K", rightColumn + 47, row2 + 45)};
	
	//Row 3
	context.drawImage(images["items/slot"], leftColumn, row3);
	context.drawImage(images["items/iron"], leftColumn + 9, row3 + 15, 30, 30);
	context.fillText("Iron", leftColumn + 45, row3 + 25);
	if (iron < 10000) {context.fillText(iron, leftColumn + 47, row3 + 45)}
	else {context.fillText(Math.floor(iron / 1000) + "K", leftColumn + 47, row3 + 45)};
		
	context.drawImage(images["items/slot"], rightColumn, row3);
	context.drawImage(images["items/coal"], rightColumn + 9, row3 + 15, 30, 30);
	context.fillText("Coal", rightColumn + 45, row3 + 25);
	if (coal < 10000) {context.fillText(coal, rightColumn + 47, row3 + 45)}
	else {context.fillText(Math.floor(coal / 1000) + "K", rightColumn + 47, row3 + 45)};
	
	//Row 4
	context.drawImage(images["items/slot"], leftColumn, row4);
	context.drawImage(images["items/hides"], leftColumn + 9, row4 + 15, 30, 30);
	context.fillText("Hides", leftColumn + 45, row4 + 25);
	if (hides < 10000) {context.fillText(hides, leftColumn + 47, row4 + 45)}
	else {context.fillText(Math.floor(hides / 1000) + "K", leftColumn + 47, row4 + 45)};
		
	context.drawImage(images["items/slot"], rightColumn, row4);
	context.drawImage(images["items/leather"], rightColumn + 9, row4 + 15, 30, 30);
	context.fillText("Leather", rightColumn + 43, row4 + 25);
	if (leather < 10000) {context.fillText(leather, rightColumn + 47, row4 + 45)}
	else {context.fillText(Math.floor(leather / 1000) + "K", rightColumn + 47, row4 + 45)};
	
	//Row 5
	context.drawImage(images["items/slot"], leftColumn, row5);
	context.drawImage(images["items/gold"], leftColumn + 9, row5 + 15, 30, 30);
	context.fillText("Gold", leftColumn + 45, row5 + 25);
	if (gold < 10000) {context.fillText(gold, leftColumn + 47, row5 + 45)}
	else {context.fillText(Math.floor(gold / 1000) + "K", leftColumn + 47, row5 + 45)};
		
	context.drawImage(images["items/slot"], rightColumn, row5);
	context.drawImage(images["items/gems"], rightColumn + 9, row5 + 15, 30, 30);
	context.fillText("Gems", rightColumn + 45, row5 + 25);
	if (gems < 10000) {context.fillText(gems, rightColumn + 47, row5 + 45)}
	else {context.fillText(Math.floor(gems / 1000) + "K", rightColumn + 47, row5 + 45)};
	
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}



function editGems(amount) {
	gems += amount;
}

function editPlanks(amount) {
	planks += amount;
}

function editWood(amount) {
	wood += amount;
}

function editRawMeat(amount) {
	rawMeat += amount;
}

function editFood(amount) {
	food += amount;
}

function eatFood() {
	if( food > 0){
		if (health < healthLevel) {
			editHealth(1);
			editFood(-1);
		} else {addText("You are at maximum health.");}	
	} else {addText("You don't have any food left.");}
}













