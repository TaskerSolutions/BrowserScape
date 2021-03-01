var buttonY = 446;
var buttonTextY = 479;

var skillsBtnX = 872;
var itemsBtnX = 748;
var gearBtnX = 500;
var toolsBtnX = 624;
var craftBtnX = 376;
var questsBtnX = 252;
var mapBtnX = 128;
var soundBtnX = 04;

var skillsBtn = false;
var itemsBtn = false;
var gearBtn = false;
var mapBtn = false;
var questsBtn = false;
var toolsBtn = false;
var craftBtn = false;

var skillsBtnFlashing = false;
var itemsBtnFlashing = false;
var gearBtnFlashing = false;
var mapBtnFlashing = false;
var questsBtnFlashing = false;
var toolsBtnFlashing = false;
var craftBtnFlashing = false;


function buttonsImages() {
	totalResources ++; loadImage("buttons/close");
	totalResources ++; loadImage("buttons/menu");
	totalResources ++; loadImage("buttons/menuFlash");
	totalResources ++; loadImage("buttons/background");
	totalResources ++; loadImage("buttons/clickPosRed");
	totalResources ++; loadImage("buttons/clickPosBlue");
	totalResources ++; loadImage("buttons/arrowLeft");
	totalResources ++; loadImage("buttons/arrowRight");
	totalResources ++; loadImage("buttons/arrowDown");
	totalResources ++; loadImage("buttons/arrowUp");
}

function drawButtons() {
	context.drawImage(images["buttons/background"], 0, 440);
	
	context.fillStyle = "black";
	context.font = "bold 20px sans-serif";
	
	if (fireInt == 1 && skillsBtnFlashing) {context.drawImage(images["buttons/menuFlash"], skillsBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], skillsBtnX, buttonY)}
	if (skillsBtn) {context.fillText("SKILLS", skillsBtnX + 25, buttonTextY)}
	
	if (fireInt == 1 && itemsBtnFlashing) {context.drawImage(images["buttons/menuFlash"], itemsBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], itemsBtnX, buttonY)}
	if (itemsBtn) {context.fillText("ITEMS", itemsBtnX + 29, buttonTextY)}
	
	if (fireInt == 1 && gearBtnFlashing) {context.drawImage(images["buttons/menuFlash"], gearBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], gearBtnX, buttonY)}
	if (gearBtn) {context.fillText("GEAR", gearBtnX + 30, buttonTextY)}
	
	if (fireInt == 1 && mapBtnFlashing) {context.drawImage(images["buttons/menuFlash"], mapBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], mapBtnX, buttonY)}
	if (mapBtn) {context.fillText("MAP", mapBtnX + 37, buttonTextY)}
	
	if (fireInt == 1 && questsBtnFlashing) {context.drawImage(images["buttons/menuFlash"], questsBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], questsBtnX, buttonY)}
	if (questsBtn) {context.fillText("QUESTS", questsBtnX + 19, buttonTextY)}
	
	if (fireInt == 1 && toolsBtnFlashing) {context.drawImage(images["buttons/menuFlash"], toolsBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], toolsBtnX, buttonY)}
	if (toolsBtn) {context.fillText("TOOLS", toolsBtnX + 26, buttonTextY)}
	
	if (fireInt == 1 && craftBtnFlashing) {context.drawImage(images["buttons/menuFlash"], craftBtnX, buttonY)}
	else {context.drawImage(images["buttons/menu"], craftBtnX, buttonY)}
	if (craftBtn) {context.fillText("CRAFT", craftBtnX + 25, buttonTextY)}
	
	context.drawImage(images["buttons/menu"], soundBtnX, buttonY);
	context.fillText("SOUND", soundBtnX + 24, buttonTextY);
	
	if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}

function buttonsClick() {
	if (clickY >= buttonY && clickY <= buttonY + 50) {
		if (clickX >= soundBtnX && clickX <= soundBtnX + 120) {showSound()}
		if (craftBtn) {if (clickX >= craftBtnX && clickX <= craftBtnX + 120) {showCraft()}}
		if (toolsBtn) {if (clickX >= toolsBtnX && clickX <= toolsBtnX + 120) {showTools()}}
		if (questsBtn) {if (clickX >= questsBtnX && clickX <= questsBtnX + 120) {showQuests()}}
		if (mapBtn) {if (clickX >= mapBtnX && clickX <= mapBtnX + 120) {showMap()}}
		if (gearBtn) {if (clickX >= gearBtnX && clickX <= gearBtnX + 120) {showGear()}}
		if (itemsBtn) {if (clickX >= itemsBtnX && clickX <= itemsBtnX + 120) {showItems()}}
		if (skillsBtn) {if (clickX >= skillsBtnX && clickX <= skillsBtnX + 120) {showSkills()}}
	}
}






















