var skillsOpen = false;

var levelUp = false;

var health = 3;
var healthLevel = 10;
var healthXp = 847;
var healthXpToLevel = 983;
var healthXpdifference = healthXp - healthXpToLevel;


var woodcuttingLevel = 0;
var woodcuttingXp = 0;
var woodcuttingXpToLevel = 50;
var woodcuttingXpdifference = 55;

var craftingLevel = 0;
var craftingXp = 0;
var craftingXpToLevel = 50;
var craftingXpdifference = 55;

var strengthLevel = 0;
var strengthXp = 0;
var strengthXpToLevel = 50;
var strengthXpdifference = 55;

var miningLevel = 0;
var miningXp = 0;
var miningXpToLevel = 50;
var miningXpdifference = 55;

var smithingLevel = 0;
var smithingXp = 0;
var smithingXpToLevel = 50;
var smithingXpdifference = 55;

var fishingLevel = 0;
var fishingXp = 0;
var fishingXpToLevel = 50;
var fishingXpdifference = 55;

var cookingLevel = 0;
var cookingXp = 0;
var cookingXpToLevel = 50;
var cookingXpdifference = 55;

var staminaLevel = 0;
var staminaXp = 0;
var staminaXpToLevel = 50;
var staminaXpdifference = 55;

var huntingLevel = 0;
var huntingXp = 0;
var huntingXpToLevel = 50;
var huntingXpdifference = 55;


var menuX = 745;
var menuY = 25;

var leftColumn = menuX + 8;
var rightColumn = menuX + 117;

var row1 = menuY + 72;
var row2 = menuY + 136;
var row3 = menuY + 200;
var row4 = menuY + 264;
var row5 = menuY + 328;


function showSkills() {
	if (skillsOpen) {
		skillsOpen = false
	} else {
		clearMenus();
		skillsOpen = true;
	}
}

function skillsImages() {
	totalResources ++; loadImage("skills/slot");
	totalResources ++; loadImage("skills/tooltip");
	totalResources ++; loadImage("skills/health");
	totalResources ++; loadImage("skills/strength");
	totalResources ++; loadImage("skills/woodcutting");
	totalResources ++; loadImage("skills/crafting");
	totalResources ++; loadImage("skills/mining");
	totalResources ++; loadImage("skills/smithing");
	totalResources ++; loadImage("skills/fishing");
	totalResources ++; loadImage("skills/cooking");
	totalResources ++; loadImage("skills/stamina");
	totalResources ++; loadImage("skills/hunting");
}

function skillsClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){showSkills()}
}

function drawSkills() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("SKILLS", menuX + 40, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
	
	context.font = "bold 20px sans-serif";
	
	//Row 1
	context.drawImage(images["skills/slot"], leftColumn, row1);
	context.drawImage(images["skills/health"], leftColumn + 9, row1 + 15);
	if (health < 10) {context.fillText(" " + health , leftColumn + 43, row1 + 38)}
	else {context.fillText(health , leftColumn + 43, row1 + 38)};
	context.fillText("/" + healthLevel, leftColumn + 67, row1 + 38);
		
	context.drawImage(images["skills/slot"], rightColumn, row1);
	context.drawImage(images["skills/strength"], rightColumn + 9, row1 + 15);
	if (strengthLevel < 10) {context.fillText(" " + strengthLevel , rightColumn + 43, row1 + 38)}
	else {context.fillText(strengthLevel , rightColumn + 43, row1 + 38)};
	context.fillText("/99", rightColumn + 67, row1 + 38);
	
	//Row 2
	context.drawImage(images["skills/slot"], leftColumn, row2);
	context.drawImage(images["skills/woodcutting"], leftColumn + 9, row2 + 15);
	if (woodcuttingLevel < 10) {context.fillText(" " + woodcuttingLevel , leftColumn + 43, row2 + 38)}
	else {context.fillText(woodcuttingLevel , leftColumn + 43, row2 + 38)};
	context.fillText("/99", leftColumn + 67, row2 + 38);
	
	context.drawImage(images["skills/slot"], rightColumn, row2);
	context.drawImage(images["skills/crafting"], rightColumn + 9, row2 + 15);
	if (craftingLevel < 10) {context.fillText(" " + craftingLevel , rightColumn + 43, row2 + 38)}
	else {context.fillText(craftingLevel , rightColumn + 43, row2 + 38)};
	context.fillText("/99", rightColumn + 67, row2 + 38);
	
	//Row 3
	context.drawImage(images["skills/slot"], leftColumn, row3);
	context.drawImage(images["skills/mining"], leftColumn + 9, row3 + 15);
	if (miningLevel < 10) {context.fillText(" " + miningLevel , leftColumn + 43, row3 + 38)}
	else {context.fillText(miningLevel , leftColumn + 43, row3 + 38)};
	context.fillText("/99", leftColumn + 67, row3 + 38);
	
	context.drawImage(images["skills/slot"], rightColumn, row3);
	context.drawImage(images["skills/smithing"], rightColumn + 9, row3 + 15);
	if (smithingLevel < 10) {context.fillText(" " + smithingLevel , rightColumn + 43, row3 + 38)}
	else {context.fillText(smithingLevel , rightColumn + 43, row3 + 38)};
	context.fillText("/99", rightColumn + 67, row3 + 38);
	
	//Row 4
	context.drawImage(images["skills/slot"], leftColumn, row4);
	context.drawImage(images["skills/fishing"], leftColumn + 9, row4 + 15);
	if (fishingLevel < 10) {context.fillText(" " + fishingLevel , leftColumn + 43, row4 + 38)}
	else {context.fillText(fishingLevel , leftColumn + 43, row4 + 38)};
	context.fillText("/99", leftColumn + 67, row4 + 38);
	
	context.drawImage(images["skills/slot"], rightColumn, row4);
	context.drawImage(images["skills/cooking"], rightColumn + 9, row4 + 15);
	if (cookingLevel < 10) {context.fillText(" " + cookingLevel , rightColumn + 43, row4 + 38)}
	else {context.fillText(cookingLevel , rightColumn + 43, row4 + 38)};
	context.fillText("/99", rightColumn + 67, row4 + 38);
	
	//Row 5
	context.drawImage(images["skills/slot"], leftColumn, row5);
	context.drawImage(images["skills/stamina"], leftColumn + 9, row5 + 15);
	if (staminaLevel < 10) {context.fillText(" " + staminaLevel , leftColumn + 43, row5 + 38)}
	else {context.fillText(staminaLevel , leftColumn + 43, row5 + 38)};
	context.fillText("/99", leftColumn + 67, row5 + 38);
	
	context.drawImage(images["skills/slot"], rightColumn, row5);
	context.drawImage(images["skills/hunting"], rightColumn + 9, row5 + 15);
	if (huntingLevel < 10) {context.fillText(" " + huntingLevel , rightColumn + 43, row5 + 38)}
	else {context.fillText(huntingLevel , rightColumn + 43, row5 + 38)};
	context.fillText("/99", rightColumn + 67, row5 + 38);
	
	
	context.font = "bold 12px sans-serif";
	
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row1 && mouseY <= row1 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Health", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + healthXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(healthXpToLevel - healthXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row1 && mouseY <= row1 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Strength", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + strengthXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(strengthXpToLevel - strengthXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row2 && mouseY <= row2 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Woodcutting", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + woodcuttingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(woodcuttingXpToLevel - woodcuttingXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row2 && mouseY <= row2 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Crafting", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + craftingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(craftingXpToLevel - craftingXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row3 && mouseY <= row3 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Mining", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + miningXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(miningXpToLevel - miningXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row3 && mouseY <= row3 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Smithing", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + smithingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(smithingXpToLevel - smithingXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row4 && mouseY <= row4 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Fishing", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + fishingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(fishingXpToLevel - fishingXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row4 && mouseY <= row4 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Cooking", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + cookingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(cookingXpToLevel - cookingXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row5 && mouseY <= row5 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Stamina", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + staminaXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(staminaXpToLevel - staminaXp, mouseX -93, mouseY + 68);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row5 && mouseY <= row5 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Hunting", mouseX -93, mouseY + 18);
		context.fillText("Xp: " + huntingXp, mouseX -93, mouseY + 34);
		context.fillText("Next level: ", mouseX  -93, mouseY + 52);
		context.fillText(huntingXpToLevel - huntingXp, mouseX -93, mouseY + 68);
	}
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}


function XpDrop(amount) {
	if (amount > 0) {
		var Xp = document.createElement("p");
		Xp.classList.add("xpDrop")
		Xp.innerHTML = amount + "xp";
		Xp.style.top = y - 50 + "px";
		Xp.style.left = x - 25 + "px";
		gameplay.appendChild(Xp);
		setTimeout(function(){gameplay.removeChild(Xp)}, 4000);
	}
}

function editHealth(amount) {
	health += amount;
	if (health > healthLevel) {
		health = healthLevel
	}
	if (health <= 0) {
		addText("You died noob!");
	}
}

function editHealthXp(amount) {
	XpDrop(amount);
	healthXp += amount;
	for (var i=0;i<=98; i++) {
		if (healthXp >= healthXpToLevel && healthLevel < 99) {
			//stopAll();
			healthLevel ++; 
			levelUp = true;
			healthXpToLevel += healthXpdifference;
			healthXpdifference = Math.floor(healthXpdifference * 1.1);
		}
    }
	if (levelUp) {
		addText("Congratulations! You reached level " + healthLevel + " in health.");
		levelUp = false;
	}
}


function editStrengthXp(amount) {
	XpDrop(amount);
	strengthXp += amount;
	for (var i=0;i<=98; i++) {
		if (strengthXp >= strengthXpToLevel && strengthLevel < 99) {
			//stopAll();
			strengthLevel ++; 
			damage = weaponStrength + strengthLevel;
			levelUp = true;
			strengthXpToLevel += strengthXpdifference;
			strengthXpdifference = Math.floor(strengthXpdifference * 1.1);
		}
    }
	if (levelUp) {
		addText("Congratulations! You reached level " + strengthLevel + " in strength.");
		levelUp = false;
	}
}

function editCraftingXp(amount) {
	XpDrop(amount);
	craftingXp += amount;
	for (var i=0;i<=98; i++) {
		if (craftingXp >= craftingXpToLevel && craftingLevel < 99) {
			stopAll();
			craftingLevel ++; 
			levelUp = true;
			craftingXpToLevel += craftingXpdifference;
			craftingXpdifference = Math.floor(craftingXpdifference * 1.1);
		}
    }
	if (levelUp) {
		addText("Congratulations! You reached level " + craftingLevel + " in crafting.");
		levelUp = false;
	}
}

function editWoodcuttingXp(amount) {
	XpDrop(amount);
	woodcuttingXp += amount;
	for (var i=0;i<=98; i++) {
		if (woodcuttingXp >= woodcuttingXpToLevel  && woodcuttingLevel < 99) {
			stopAll();
			woodcuttingLevel ++; 
			levelUp = true;
			woodcuttingStrength = woodcuttingLevel + hatchetStrength;
			woodcuttingXpToLevel += woodcuttingXpdifference;
			woodcuttingXpdifference = Math.floor(woodcuttingXpdifference * 1.1);
		}
    }
	if (levelUp) {
		addText("Congratulations! You reached level " + woodcuttingLevel + " in woodcutting.");
		levelUp = false;
		if (woodcuttingLevel >= 5 && line1Quest1Complete == false) {
			addText("Congratulations! You completed a quest.")
			addText("Click the quest to claim your reward")
			line1Quest1Complete = true;
			questsBtnFlashing = true;
			setTimeout(function() {questsBtnFlashing = false}, 3000)
		}
	}
}

function editFishingXp(amount) {
	XpDrop(amount);
	fishingXp += amount;
	for (var i=0;i<=98; i++) {
		if (fishingXp >= fishingXpToLevel && fishingLevel < 99) {
			stopAll();
			fishingLevel ++; 
			levelUp = true;
			fishingXpToLevel += fishingXpdifference;
			fishingXpdifference = Math.floor(fishingXpdifference * 1.1);
		}
    }
	if (levelUp) {
			addText("Congratulations! You reached level " + fishingLevel + " in fishing.");
			levelUp = false;
	}
}

function editCookingXp(amount) {
	XpDrop(amount);
	cookingXp += amount;
	for (var i=0;i<=98; i++) {
		if (cookingXp >= cookingXpToLevel && cookingLevel < 99) {
			stopAll();
			cookingLevel ++; 
			levelUp = true;
			cookingXpToLevel += cookingXpdifference;
			cookingXpdifference = Math.floor(cookingXpdifference * 1.1);
		}
    }
	if (levelUp) {
			addText("Congratulations! You reached level " + cookingLevel + " in cooking.");
			levelUp = false;
	}
}

function editMiningXp(amount) {
	XpDrop(amount);
	miningXp += amount;
	for (var i=0;i<=98; i++) {
		if (miningXp >= miningXpToLevel && miningLevel < 99) {
			stopAll();
			miningLevel ++; 
			levelUp = true;
			miningXpToLevel += miningXpdifference;
			miningXpdifference = Math.floor(miningXpdifference * 1.1);
		}
    }
	if (levelUp) {
			addText("Congratulations! You reached level " + miningLevel + " in mining.");
			levelUp = false;
	}
}

function editSmithingXp(amount) {
	XpDrop(amount);
	smithingXp += amount;
	for (var i=0;i<=98; i++) {
		if (smithingXp >= smithingXpToLevel && smithingLevel < 99) {
			stopAll();
			smithingLevel ++; 
			levelUp = true;
			smithingXpToLevel += smithingXpdifference;
			smithingXpdifference = Math.floor(smithingXpdifference * 1.1);
		}
    }
	if (levelUp) {
			addText("Congratulations! You reached level " + smithingLevel + " in smithing.");
			levelUp = false;
	}
}




































