var questsOpen = false;

var questX = leftColumn + 10;

var questRow1Y = row1 + 25;
var questRow1RewardY = row1 + 47;

var questRow2Y = row2 + 25;
var questRow2RewardY = row2 + 47;

var questRow3Y = row3 + 25;
var questRow3RewardY = row3 + 47;

var questRow4Y = row4 + 25;
var questRow4RewardY = row4 + 47;

var questRow5Y = row5 + 25;
var questRow5RewardY = row5 + 47;

var line1Quest1Complete = false;
var line1Quest1Claimed = false;
var line1Quest2Complete = false;
var line1Quest2Claimed = false;

var line2Quest1Complete = false;
var line2Quest1Claimed = false;
var line2Quest2Complete = false;
var line2Quest2Claimed = false;

var line3Quest1Complete = false;
var line3Quest1Claimed = false;
var line3Quest2Complete = false;
var line3Quest2Claimed = false;

var line4Quest1Complete = false;
var line4Quest1Claimed = false;
var line4Quest2Complete = false;
var line4Quest2Claimed = false;

var line5Quest1Complete = false;
var line5Quest1Claimed = false;
var line5Quest2Complete = false;
var line5Quest2Claimed = false;



function showQuests() {
	if (questsOpen) {
		questsOpen = false
	} else {
		clearMenus();
		questsOpen = true;
	}
}

function questsClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){showQuests()}
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= row1 && clickY <= row1 + 60) {
		if (line1Quest1Complete && line1Quest1Claimed == false) {
			line1Quest1Claimed = true;
			addText("Congratulations, You earned 5 gems.");
			editGems(5);
		} else {
			
		}
	}
}

function questsImages() {
	totalResources ++; loadImage("quests/slot");
	totalResources ++; loadImage("quests/slotComplete");
}

function drawQuests() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("QUESTS", menuX + 26, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
	
	context.font = "bold 14px sans-serif";
	
	if (line1Quest1Claimed == false) {
		if (line1Quest1Complete) {context.drawImage(images["quests/slotComplete"], leftColumn, row1)}
		else {context.drawImage(images["quests/slot"], leftColumn, row1)}
		context.fillText("Reach level 5 Woodcutting.", questX, questRow1Y);
		context.fillText("Reward:", questX, questRow1RewardY);
		context.fillText("5 Gems", questX + 141, questRow1RewardY);
	} else if (line1Quest2Claimed == false) {
		if (line1Quest2Complete) {context.drawImage(images["quests/slotComplete"], leftColumn, row1)}
		else {context.drawImage(images["quests/slot"], leftColumn, row1)}
		context.fillText("Chop down an oak tree.", questX, questRow1Y);
		context.fillText("Reward:", questX, questRow1RewardY);
		context.fillText("15 Gems", questX + 136, questRow1RewardY);
	}
	
	if (line2Quest1Claimed == false) {
		if (line2Quest1Complete) {context.drawImage(images["quests/slotComplete"], leftColumn, row2)}
		else {context.drawImage(images["quests/slot"], leftColumn, row2)}
		context.fillText("Craft a Wooden Harpoon.", questX, questRow2Y);
		context.fillText("Reward:", questX, questRow2RewardY);
		context.fillText("10 Gems", questX + 136, questRow2RewardY);
	} else if (line2Quest2Claimed == false) {
		if (line2Quest2Complete) {context.drawImage(images["quests/slotComplete"], leftColumn, row2)}
		else {context.drawImage(images["quests/slot"], leftColumn, row2)}
		context.fillText("Reach level 10 crafting.", questX, questRow2Y);
		context.fillText("Reward:", questX, questRow2RewardY);
		context.fillText("25 Gems", questX + 136, questRow2RewardY);
	}

	
	context.drawImage(images["quests/slot"], leftColumn, row3);

	
	context.drawImage(images["quests/slot"], leftColumn, row4);

	
	context.drawImage(images["quests/slot"], leftColumn, row5);

	
	
	
	//claimQuest(this, q1, 05) 
	//claimQuest(this, q2, 10) #2 Craft a Wooden Fence. +10 Gems
	//claimQuest(this, q3, 15) #3 Craft a Small Cabin. +15 Gems
	//claimQuest(this, q4, 20) #4 Reach fire strength: 500. +20 Gems
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}


function claimQuest(x, i, n) {
	if (q1) {
		if (q2 == false) {
			document.getElementById("quest2").style.display = "block";
			setTimeout(function(){
				addText("Open your build menu to see what is required for the next quests.")
			}, 2000);
		}
		if (q3 == false) {document.getElementById("quest3").style.display = "block";}
		if (q4 == false) {document.getElementById("quest4").style.display = "block";}
	}
	var oneTime = true;
	if (q3 && oneTime){
		oneTime = false;
		setTimeout(function() {
			addText("Now I have a shelter built, I should explore the area.");
			document.getElementById("toriver").style.display = "block";
			showMap();
		}, 2300)
	}
	if (i == true) {
		x.style.display = "none";
		editGems(n);
		addText("You earned " + n + " Gems. You have " + gems + " total");
	}
}


