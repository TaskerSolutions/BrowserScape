var soundOpen = false;

var backgroundMusic = new sound("media/seaShanty2.mp3");
var backgroundMusicPlaying = false;


function showSound() {
	if (soundOpen) {
		soundOpen = false
	} else {
		clearMenus();
		soundOpen = true;
	}
}

function soundClick() {
	if (clickX >= menuX + 10 && clickX <= menuX + 223 && clickY >= menuY + 10 && clickY <= menuY + 70){
		showSound()
	} else if (backgroundMusicPlaying) {
		backgroundMusic.stop()
		backgroundMusicPlaying = false;
	} else {
		backgroundMusic.play()
		backgroundMusicPlaying = true;
	}
}

function drawSound() {
	context.drawImage(images["menuBackground"], menuX, menuY);
	
	context.fillStyle = "black";
	context.font = "bold 35px sans-serif";
	context.fillText("SOUND", menuX + 36, menuY + 52);
	context.drawImage(images["buttons/close"], menuX + 185, menuY + 30);
	
	context.font = "bold 20px sans-serif";
	
	if (mouseX >= menuX + 10 && mouseX <= menuX + 223 && mouseY >= menuY + 10 && mouseY <= menuY + 70) {
		gameplay.style.cursor = "pointer"
	} else if (mouseY >= buttonY && mouseY <= buttonY + 50) {
		gameplay.style.cursor = "pointer"
	} else {
		gameplay.style.cursor = "default"
	}
}


function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}