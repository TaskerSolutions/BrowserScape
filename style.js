var fastBarWidth = 0;
var barWidth = 0;

function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

setTimeout(function() {$('.ready').addClass('active');}, 300);

function fastProgressBar(timer, id) {
	var i = 0;
	var elem = document.getElementById(id);
	if (i == 0) {
			i = 1;
			var x = setInterval(frame, timer);
			function frame() {
				if (fastBarWidth >= 100) {
					clearInterval(x);
					i = 0;
					fastBarWidth = 0;
					elem.style.width = fastBarWidth + "%";
				} else {
					fastBarWidth=(fastBarWidth + 1);
					elem.style.width = fastBarWidth + "%";
				}
			}
	};	
	
}

function progressBar(timer, id) {
	var i = 0;
	var elem = document.getElementById(id);
	if (i == 0) {
			i = 1;
			var x = setInterval(frame, timer);
			function frame() {
				if (barWidth >= 100) {
					clearInterval(x);
					i = 0;
					barWidth = 1;
					elem.style.width = barWidth + "%";
				} else {
					barWidth=(barWidth + 0.1);
					elem.style.width = barWidth + "%";
				}
			}
	};
}