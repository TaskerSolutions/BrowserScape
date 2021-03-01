var craftOpen = false;

var crafting = false;
var craftingPlanks;
var craftingArrowshafts;
var craftingString;
var craftingSheets;
var craftingRope;

var planks = 0;
var toolHandle = 0;
var arrowShafts = 0;
var swordHandle = 0;
var string = 0;
var sheet = 0;
var rope = 0;
var sail = 0;
var backpack = 0;

function showCraft() {
	if (craftOpen) {
		craftOpen = false;
	} else {
		clearMenus();
		craftOpen = true;
	}
}

function stopCrafting() {
	crafting = false;
	clearInterval(craftingPlanks);
	clearInterval(craftingArrowshafts);
	clearInterval(craftingString);
	clearInterval(craftingSheets);
	clearInterval(craftingRope);
}

function craftClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){showCraft()}
	
	if (clickY >= row1 + 3 && clickY <= row1 + 57 && clickX >= leftColumn + 3 && clickX <= leftColumn + 102) {craftWoodPlanks()}
	if (clickY >= row1 + 3 && clickY <= row1 + 57 && clickX >= rightColumn + 3 && clickX <= rightColumn + 102) {craftString()}
	
	if (clickY >= row2 + 3 && clickY <= row2 + 57 && clickX >= leftColumn + 3 && clickX <= leftColumn + 102) {craftToolHandle()}
	if (clickY >= row2 + 3 && clickY <= row2 + 57 && clickX >= rightColumn + 3 && clickX <= rightColumn + 102) {craftRope()}
	
	if (clickY >= row3 + 3 && clickY <= row3 + 57 && clickX >= leftColumn + 3 && clickX <= leftColumn + 102) {addText("craftSheet()")}
	if (clickY >= row3 + 3 && clickY <= row3 + 57 && clickX >= rightColumn + 3 && clickX <= rightColumn + 102) {craftArrowshafts()}
	
	if (clickY >= row4 + 3 && clickY <= row4 + 57 && clickX >= leftColumn + 3 && clickX <= leftColumn + 102) {addText("craftSail()")}
	if (clickY >= row4 + 3 && clickY <= row4 + 57 && clickX >= rightColumn + 3 && clickX <= rightColumn + 102) {addText("craftBackpack()")}
	
	if (clickY >= row5 + 3 && clickY <= row5 + 57 && clickX >= leftColumn + 3 && clickX <= leftColumn + 102) {}	
	if (clickY >= row5 + 3 && clickY <= row5 + 57 && clickX >= rightColumn + 3 && clickX <= rightColumn + 102) {}
}

function craftImages() {
	//totalResources ++; loadImage("craft/slot");
}

function drawCraft() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("CRAFT", menuX + 50, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
		
	context.font = "bold 12px sans-serif";
	
	//Row 1
	context.drawImage(images["skills/slot"], leftColumn, row1);
	context.drawImage(images["items/planks"], leftColumn + 13, row1 + 28, 20, 20);
	context.fillText("Wood planks", leftColumn + 15, row1 + 20);
	context.fillText(planks, leftColumn + 40, row1 + 43);
		
	context.drawImage(images["skills/slot"], rightColumn, row1);
	//context.drawImage(images["gear/helmetNone"], rightColumn, row1 + 5, 50, 50);
	context.fillText("String", rightColumn + 15, row1 + 20);
	context.fillText(string, rightColumn + 40, row1 + 43);
	
	//Row 2
	context.drawImage(images["skills/slot"], leftColumn, row2);
	//context.drawImage(images["tools/crudeHarpoon"], leftColumn, row2 + 5, 50, 50);
	context.fillText("Tool handle", leftColumn + 15, row2 + 20);
	context.fillText(toolHandle, leftColumn + 40, row2 + 43);
	
	context.drawImage(images["skills/slot"], rightColumn, row2);
	//context.drawImage(images["gear/bodyNone"], rightColumn + 5, row2 + 5, 40, 50);
	context.fillText("Rope", rightColumn + 13, row2 + 20);
	context.fillText(rope, rightColumn + 40, row2 + 43);
	
	//Row 3
	context.drawImage(images["skills/slot"], leftColumn, row3);
	//context.drawImage(images["tools/crudeHarpoon"], leftColumn, row3 + 5, 50, 50);
	context.fillText("Sheet", leftColumn + 15, row3 + 20);
	context.fillText(sheet, leftColumn + 40, row3 + 43);
	
	context.drawImage(images["skills/slot"], rightColumn, row3);
	//context.drawImage(images["gear/legsNone"], rightColumn, row3 + 5, 50, 50);
	context.fillText("Arrow shafts", rightColumn + 15, row3 + 20);
	context.fillText(arrowShafts, rightColumn + 40, row3 + 43);
	
	//Row 4
	context.drawImage(images["skills/slot"], leftColumn, row4);
	//context.drawImage(images["items/planks"], leftColumn + 10, row4 + 15, 30, 30);
	context.fillText("Backpack", leftColumn + 15, row4 + 20);
	context.fillText(backpack, leftColumn + 40, row4 + 43);
	
	context.drawImage(images["skills/slot"], rightColumn, row4);
	//context.drawImage(images["gear/bootsNone"], rightColumn, row4 + 5, 50, 50);
	context.fillText("Sail", rightColumn + 15, row4 + 20);
	context.fillText(sail, rightColumn + 40, row4 + 43);
	
	//Row 5
	context.drawImage(images["skills/slot"], leftColumn, row5);
	//context.drawImage(images["gear/weaponNone"], leftColumn, row5 + 5, 50, 50);
	context.fillText("", leftColumn + 15, row5 + 20);
	context.fillText("", leftColumn + 40, row5 + 43);
	
	context.drawImage(images["skills/slot"], rightColumn, row5);
	//context.drawImage(images["gear/shieldNone"], rightColumn, row5 + 5, 50, 50);
	context.fillText("", rightColumn + 15, row5 + 20);
	context.fillText("", rightColumn + 40, row5 + 43);
	
	
	//tooltips
	context.font = "bold 12px sans-serif";
	
	//planks
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row1 && mouseY <= row1 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("0 Crafting", mouseX -93, mouseY + 35);
		if (wood < 10000) {context.fillText(wood + "/1 wood", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(wood / 1000) + "K/1 wood", mouseX  -93, mouseY + 52)};
	}
	
	//string
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row1 && mouseY <= row1 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 5 Crafting", mouseX -93, mouseY + 35);
		if (flax < 10000) {context.fillText(flax + "/1 flax", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(flax / 1000) + "K/1 flax", mouseX  -93, mouseY + 52)}
	}
	
	//Tool Handle
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row2 && mouseY <= row2 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 10 Crafting", mouseX -93, mouseY + 35);
		if (wood < 10000) {context.fillText(wood + "/1 wood", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(wood / 1000) + "K/1 wood", mouseX  -93, mouseY + 52)};
		context.fillText("", mouseX -93, mouseY + 68);
	}
	
	//rope
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row2 && mouseY <= row2 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 20 Crafting", mouseX -93, mouseY + 35);
		if (string < 10000) {context.fillText(string + "/30 strings", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(string / 1000) + "K/30 strings", mouseX  -93, mouseY + 52)}
	}
	
	//sheet
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row3 && mouseY <= row3 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 30 Crafting", mouseX -93, mouseY + 35);
		if (leather < 10000) {context.fillText(leather + "/5 leather", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(leather / 1000) + "K/5 leather", mouseX  -93, mouseY + 52)}
		if (string < 10000) {context.fillText(string + "/10 strings", mouseX  -93, mouseY + 68)}
		else {context.fillText(Math.floor(string / 1000) + "K/10 strings", mouseX  -93, mouseY + 68)}
	}
	
	//Arrow shafts
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row3 && mouseY <= row3 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 40 Crafting", mouseX -93, mouseY + 35);
		if (wood < 10000) {context.fillText(wood + "/1 wood", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(wood / 1000) + "K/1 wood", mouseX  -93, mouseY + 52)};
	}
	
	//backpack
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row4 && mouseY <= row4 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 50 Crafting", mouseX -93, mouseY + 35);
		if (leather < 10000) {context.fillText(sheet + "/10 leather", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(sheet / 1000) + "K/10 leather", mouseX  -93, mouseY + 52)}
		if (string < 10000) {context.fillText(string + "/200 strings", mouseX  -93, mouseY + 68)}
		else {context.fillText(Math.floor(string / 1000) + "K/200 strings", mouseX  -93, mouseY + 68)}
	}
	
	//sail
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row4 && mouseY <= row4 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 60 Crafting", mouseX -93, mouseY + 35);
		if (sheet < 10000) {context.fillText(sheet + "/10 sheets", mouseX  -93, mouseY + 52)}
		else {context.fillText(Math.floor(sheet / 1000) + "K/10 sheets", mouseX  -93, mouseY + 52)}
		if (string < 10000) {context.fillText(string + "/200 strings", mouseX  -93, mouseY + 68)}
		else {context.fillText(Math.floor(string / 1000) + "K/200 strings", mouseX  -93, mouseY + 68)}
	}
	if (mouseX >= leftColumn && mouseX <= leftColumn + 100 && mouseY >= row5 && mouseY <= row5 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 70 Crafting", mouseX -93, mouseY + 35);
	}
	if (mouseX >= rightColumn && mouseX <= rightColumn + 100 && mouseY >= row5 && mouseY <= row5 + 60) {
		context.drawImage(images["skills/tooltip"], mouseX - 100, mouseY);
		context.fillText("Requires:", mouseX -93, mouseY + 18);
		context.fillText("Lvl 80 Crafting", mouseX -93, mouseY + 35);
	}

	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row1 + 3 && mouseY <= row1 + 57 && mouseX >= leftColumn + 3 && mouseX <= leftColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row2 + 3 && mouseY <= row2 + 57 && mouseX >= leftColumn + 3 && mouseX <= leftColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row3 + 3 && mouseY <= row3 + 57 && mouseX >= leftColumn + 3 && mouseX <= leftColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row4 + 3 && mouseY <= row4 + 57 && mouseX >= leftColumn + 3 && mouseX <= leftColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row5 + 3 && mouseY <= row5 + 57 && mouseX >= leftColumn + 3 && mouseX <= leftColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row1 + 3 && mouseY <= row1 + 57 && mouseX >= rightColumn + 3 && mouseX <= rightColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row2 + 3 && mouseY <= row2 + 57 && mouseX >= rightColumn + 3 && mouseX <= rightColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row3 + 3 && mouseY <= row3 + 57 && mouseX >= rightColumn + 3 && mouseX <= rightColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row4 + 3 && mouseY <= row4 + 57 && mouseX >= rightColumn + 3 && mouseX <= rightColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= row5 + 3 && mouseY <= row5 + 57 && mouseX >= rightColumn + 3 && mouseX <= rightColumn + 102) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}



function craftWoodPlanks() {
	stopAll();
	if (wood < 1) {
		addText("You don't have any wood to make into planks.");
	} else {
		notBusy = false;
		addText("You begin crafting wood planks...");
		craftingPlanks = setInterval(function() {
			amount = (craftingStrength / 10)
			if(amount < 1) {amount = 1}
			wood -= amount;
			if (Math.floor(Math.random() * 100) < (80 + craftingStrength)) {
				addText("You craft " + amount + " logs into a planks.");
				editCraftingXp((50* amount));
				planks += amount;
			} else {
				addText("You ruin the wood.");
			}
			if (wood < 1) {
				addText("You have run out of wood.");
				stopAll();
			}					
		}, 1500);
	}
}

function craftString() {
	stopAll();
	if (craftingLevel >= 5) {
		if (flax < 1) {
			addText("You need 1 flax to craft string.");
		} else {
			notBusy = false;
			addText("You begin weaving string...");
			craftingString = setInterval(function() {
				amount = (craftingStrength / 10)
				if(amount < 1) {amount = 1}
				flax -= amount;
				if (Math.floor(Math.random() * 100) < (70 + craftingStrength)) {
					addText("You craft " + amount + " strings.");
					editCraftingXp((20 * amount));
					string += amount;
				} else {
					addText("You waste some flax.");
				}
				if (flax < 1) {
					addText("You have run out of flax.");
					stopAll();
				}				
			}, 1000);
		}
	} else {
		addText("You need level 5 crafting to make string.")
	}
}

function craftToolHandle() {
	stopAll();
	if (craftingLevel >= 10) {
		if (wood >= 1) {
			addText("You set to work...");
			editWood(-1);
			notBusy = false;
			setTimeout(function(){
				editCraftingXp(50);
				addText("You craft a basic tool handle!");
				toolHandle ++;
				notBusy = true;
			}, 2000)
		} else {
			addText("You need 1 wood to craft a basic tool handle.")
		}
	} else {
		addText("You need level 10 crafting to craft tool handles.")
	}
}

function craftArrowShafts() {
	stopAll();
	if (craftingLevel >= 40) {
		if (wood >= 1) {
			addText("You begin crafting arrow shafts...");
			notBusy = false;
			craftingArrowshafts = setInterval(function() {
				amount = (craftingStrength / 10)
				if(amount < 1) {amount = 1}
				wood -= amount;
				if (Math.floor(Math.random() * 100) < (70 + craftingStrength)) {
					addText("You craft " + (amount * 5) + " arrow shafts.");
					editCraftingXp((60 * amount));
					arrowShafts += (amount * 5);
				} else {
					addText("You break the arrow shafts.");
				}			
				if (wood < 1) {
					addText("You have run out of wood.");
					stopAll();
				}
			}, 1500);
		} else {
			addText("You need 1 wood to craft arrow shafts.")
		}
	} else {
		addText("You need level 40 crafting to craft arrow shafts.")
	}
}

function craftRope() {
	stopAll();
	if (craftingLevel >= 20) {
		if (string < 30) {
			addText("You need 30 strings to make rope.");
		} else {
			notBusy = false;
			addText("You begin weaving string into rope...");
			craftingRope = setInterval(function() {
				amount = (craftingStrength / 10)
				if(amount < 1) {amount = 1}
				string -= (amount * 30);
				addText("You craft " + amount + " ropes.");
				editCraftingXp((400 * amount));
				rope += amount;
				if (string < 30) {
					addText("You don't have enough string.");
					stopAll();
				}				
			}, 1000);
		}
	} else {
		addText("You need level 20 crafting to make rope.")
	}
}





/*
function craftWoodTorch() {
	if(notBusy) {
		if (craftingLevel >= 10) {
			if (wood >= 2) {
				addText("You attempt to craft a wooden torch...");
				editWood(-2);
				notBusy = false;
				setTimeout(function(){
					editCraftingXp(100);
					addText("You successfully craft a wood torch!");
					woodTorch ++;
					notBusy = true;
				}, 3000)
			} else {
				addText("You need 1 wood to craft a torch.")
			}
		} else {
			addText("You need level 10 crafting to craft wooden torches.")
		}
	}	
}



function craftCrudeHarpoon() {
	if(notBusy) {
		if (craftingLevel >= 25) {
			if (wood >= 5) {
				addText("You attempt to craft a crude harpoon...");
				editWood(-5);
				notBusy = false;
				setTimeout(function(){
					if (Math.floor(Math.random() * 12) <= (craftingStrength)) {
						editCraftingXp(250);
						addText("You successfully craft a crude harpoon!");
						if (harpoon == "No Harpoon") {
							editHarpoon("Crude Harpoon", 4)
						}
					} else {
						addText("You failed to craft the crude harpoon.")
					}
					notBusy = true;
				}, 3000)
			} else {
				addText("You do not have enough wood to craft a crude harpoon.")
			}
		} else {
			addText("You need level 6 crafting to make a crude harpoon.")
		}
	}	
}

 */

















