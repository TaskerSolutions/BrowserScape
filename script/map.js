var mapOpen = false;

function showMap() {
	if (mapOpen) {
		mapOpen = false
	} else {
		clearMenus();
		mapOpen = true
	}
}

function mapImages() {
	totalResources ++; loadImage("map/mapBackground");
	totalResources ++; loadImage("map/mapCave");
	totalResources ++; loadImage("map/mapForest");
	totalResources ++; loadImage("map/mapRiver");
	totalResources ++; loadImage("map/treeTemplate1");
	totalResources ++; loadImage("map/treeTemplate2");
	totalResources ++; loadImage("map/treeTemplate3");
	totalResources ++; loadImage("map/treeTemplate4");
	totalResources ++; loadImage("map/oakTemplate");
	totalResources ++; loadImage("map/rock");
}

function mapClick() {
	if (clickX <= 992 && clickX >= 962 && clickY >= 4 && clickY <= 34) {showMap()}
	if (clickX <= 835 && clickX >= 775 && clickY >= 270 && clickY <= 312) {showCave()}
	
}

function drawMap() {
	context.drawImage(images["map/mapBackground"], 0, 0);
	
	context.drawImage(images["buttons/close"], 962, 4, 30, 30);
	
	//row1
	context.drawImage(images["map/treeTemplate2"], 55, 05);
	context.drawImage(images["map/treeTemplate4"], 80, 00);
	context.drawImage(images["map/treeTemplate2"], 110, 08);
	context.drawImage(images["map/treeTemplate4"], 150, 05);
	context.drawImage(images["map/treeTemplate4"], 180, 04);
	context.drawImage(images["map/treeTemplate2"], 220, 02);
	context.drawImage(images["map/treeTemplate2"], 260, 12);
	context.drawImage(images["map/treeTemplate4"], 300, 03);
	context.drawImage(images["map/treeTemplate2"], 340, 05);
	context.drawImage(images["map/treeTemplate4"], 370, 00);
	context.drawImage(images["map/treeTemplate2"], 410, 08);
	context.drawImage(images["map/treeTemplate2"], 450, 04);
	context.drawImage(images["map/treeTemplate2"], 500, 02);
	context.drawImage(images["map/treeTemplate4"], 540, 07);
	context.drawImage(images["map/treeTemplate4"], 580, 03);
	context.drawImage(images["map/treeTemplate2"], 620, 02);
	context.drawImage(images["map/treeTemplate2"], 680, 03);
	context.drawImage(images["map/treeTemplate4"], 650, 07);
	context.drawImage(images["map/treeTemplate4"], 755, 00);
	context.drawImage(images["map/treeTemplate4"], 720, 05);
	context.drawImage(images["map/treeTemplate2"], 800, 08);
	context.drawImage(images["map/treeTemplate2"], 835, 04);
	context.drawImage(images["map/treeTemplate2"], 880, 00);
	context.drawImage(images["map/treeTemplate4"], 900, 05);
	
	context.drawImage(images["map/mapRiver"], 61, 108);
	//row2
	context.drawImage(images["map/treeTemplate1"], 60, 00);
	context.drawImage(images["map/treeTemplate3"], 100, 00);
	context.drawImage(images["map/treeTemplate1"], 140, 05);
	context.drawImage(images["map/treeTemplate3"], 180, 00);
	context.drawImage(images["map/treeTemplate1"], 220, 00);
	context.drawImage(images["map/treeTemplate3"], 260, 00);
	context.drawImage(images["map/treeTemplate1"], 300, 02);
	context.drawImage(images["map/treeTemplate3"], 340, 04);
	context.drawImage(images["map/treeTemplate4"], 395, 16);
	context.drawImage(images["map/treeTemplate1"], 380, 00);
	context.drawImage(images["map/treeTemplate2"], 440, 16);
	context.drawImage(images["map/treeTemplate2"], 465, 11);
	context.drawImage(images["map/treeTemplate4"], 485, 14);
	context.drawImage(images["map/treeTemplate2"], 530, 19);
	context.drawImage(images["map/treeTemplate2"], 575, 21);
	context.drawImage(images["map/treeTemplate2"], 615, 14);
	context.drawImage(images["map/treeTemplate2"], 695, 14);
	context.drawImage(images["map/treeTemplate2"], 755, 17);
	context.drawImage(images["map/treeTemplate2"], 785, 20);
	context.drawImage(images["map/treeTemplate2"], 815, 14);
	context.drawImage(images["map/treeTemplate2"], 860, 10);
	
	//left of river
	context.drawImage(images["map/treeTemplate4"], 70, 35);
	context.drawImage(images["map/treeTemplate1"], 100, 20);
	context.drawImage(images["map/treeTemplate3"], 55, 30);
	context.drawImage(images["map/treeTemplate2"], 56, 74);
	context.drawImage(images["map/treeTemplate2"], 80, 65);
	
	//right of river
	context.drawImage(images["map/oakTemplate"], 250, 50);
	context.drawImage(images["map/treeTemplate2"], 160, 78);
	context.drawImage(images["map/treeTemplate2"], 210, 73);
	context.drawImage(images["map/treeTemplate1"], 180, 63);
	context.drawImage(images["map/treeTemplate1"], 220, 71);
	context.drawImage(images["map/treeTemplate1"], 260, 75);
	
	context.drawImage(images["map/treeTemplate1"], 365, 060);
	context.drawImage(images["map/treeTemplate1"], 340, 080);
	context.drawImage(images["map/treeTemplate1"], 390, 075);
	context.drawImage(images["map/treeTemplate1"], 305, 060);
		
	context.drawImage(images["map/treeTemplate2"], 330, 130);
	context.drawImage(images["map/treeTemplate2"], 370, 120);
	context.drawImage(images["map/treeTemplate1"], 290, 90);
	
	context.drawImage(images["map/mapForest"], 630, 65, 320, 220);
	
	//around start cave
	context.drawImage(images["map/treeTemplate1"], 815, 160);
	context.drawImage(images["map/treeTemplate1"], 790, 180);
	context.drawImage(images["map/treeTemplate1"], 840, 175);
	context.drawImage(images["map/treeTemplate1"], 765, 160);
	context.drawImage(images["map/treeTemplate1"], 730, 170);
	context.drawImage(images["forest/forestCave"], 725 , 270, 75, 50);

	
	//rocks
	context.drawImage(images["map/rock"], 855, 355, 20, 20);
	context.drawImage(images["map/rock"], 874, 352, 20, 20);
	context.drawImage(images["map/rock"], 890, 358, 20, 20);
	context.drawImage(images["map/rock"], 915, 357, 20, 20);
	context.drawImage(images["map/rock"], 905, 352, 20, 20);
	context.drawImage(images["map/rock"], 935, 357, 20, 20);
	context.drawImage(images["map/rock"], 925, 352, 20, 20);
}



function toForest() {
	stopAll();
	if(notBusy) {
		notBusy = false;
		forest = true;
		reloadTree();
		reloadOak();
		reloadBloodwood();
		reloadThot();
		reloadFuhrer();
		fastProgressBar(19, "progress8");
		//setTimeout(function(){fastBarWidth = 0; barWidth = 0; fastProgressBar(19, "progress8");}, 100);
		addText("You venture back into the forest.");
		document.getElementById("catchfish").style.display = "none";
		setTimeout(function(){
			document.getElementById("fire").style.display = "none";
			document.getElementById("background").style.backgroundImage = "url('media/nightforest.jpg')";
			document.getElementById("stokefire").style.display = "none";}, 1200);
		setTimeout(function(){
			document.getElementById("toforest").style.display = "none";
			document.getElementById("tocave").style.display = "block";
			if(hatchet === "none") {
				document.getElementById("gatherwood").style.display = "block";
			} else {
				prepareCanvas();
				document.getElementById("questsbtn").style.display = "block";
				if (riverVisit == false) {
					document.getElementById("map").style.display = "none";
					addText("I have some new quests to complete!");
					showQuests();
					document.getElementById("quest1").style.display = "block";
				} else {
					document.getElementById("toriver").style.display = "block";
					if (rawMeat >= 0 && weapon == "none") {
						showMap();
						dog();
					}
				}
			}
			notBusy = true;
		}, 2000);
	}
}


function toRiver() {
	stopAll();
	fastBarWidth = 0;
	barWidth = 0; 
	if(notBusy) {
		notBusy = false;
		if (riverVisit == false) {
			riverVisit = true;
			progressBar(17, "progress19");
			document.getElementById("choptrees").style.display = "none";
			document.getElementById("tocave").style.display = "none";
			addText("You set out to explore the surrounding area...");
			setTimeout(function(){addText("You hear some running water close by.");}, 3000);
			setTimeout(function(){addText("You venture towards the sound.");}, 6000);
			setTimeout(function(){
				addText("You find yourself at a river bed.");
				document.getElementById("background").style.backgroundImage = "url('media/river.jpg')";
			}, 9500);
			setTimeout(function(){addText("You bend down to take a drink...");}, 12000);
			setTimeout(function(){addText("In the shallows, you spot an old fishing net!");}, 14500);
			setTimeout(function(){
				addText("You take the net. I wonder what I can catch with this?");
				document.getElementById("toriver").style.display = "none";
				document.getElementById("riverbtn").innerHTML = "Return To River";
				document.getElementById("toforest").style.display = "block";
				document.getElementById("catchfish").style.display = "block";
				notBusy = true;
				showMap();
			}, 17000);
		} else {
			fastProgressBar(30, "progress19");
			addText("You set off to the river.");
			document.getElementById("choptrees").style.display = "none";
			setTimeout(function(){
				document.getElementById("background").style.backgroundImage = "url('media/river.jpg')";
			}, 2000);
			setTimeout(function(){
				document.getElementById("toriver").style.display = "none";
				document.getElementById("tocave").style.display = "none";
				document.getElementById("toforest").style.display = "block";
				document.getElementById("catchfish").style.display = "block";
				notBusy = true;
				showMap();
			}, 3000);
		}
	}
}


function toMine() {
	stopAll();
	fastBarWidth = 0;
	barWidth = 0; 
	if(notBusy) {
		notBusy = false;
		fastProgressBar(30, "progress24");
		addText("You set off to the mine.");
		document.getElementById("choptrees").style.display = "none";
		setTimeout(function(){
			document.getElementById("background").style.backgroundImage = "url('media/mine.jpg')";
		}, 2000);
		setTimeout(function(){
			document.getElementById("toriver").style.display = "none";
			document.getElementById("tocave").style.display = "none";
			document.getElementById("toforest").style.display = "block";
			document.getElementById("catchfish").style.display = "block";
			notBusy = true;
			showMap();
		}, 3000);
	}
}








































