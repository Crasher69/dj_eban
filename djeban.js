var currScr = 0;
var sec = 0;
var direction = "top";
var currscale = 1;
var scaledirection = "top";
var intTimer = null;

function dj()
	{
		var myAudio = new Audio('https://raw.githubusercontent.com/Crasher69/dj_eban/master/dj.mp3'); 
		myAudio.addEventListener('ended', function() {
				clearInterval(intTimer);
				$('.g1').remove();
				$('.g2').remove();
				$('body').css("transform", "none");
				$("body").css("background-color", "#fff");
			//this.currentTime = 0;
			//this.play();
		}, false);
		myAudio.play();		
	}	

function eb_start()
{
	dj();
	setTimeout(function(){
		$('body').append('<div class="g1" style="position:fixed; top:100px; left:40%;"><img src="https://raw.githubusercontent.com/Crasher69/dj_eban/master/g1.gif" /></div>');
		$('body').append('<div class="g2" style="position:fixed; top:300px; right:30%;"><img src="https://raw.githubusercontent.com/Crasher69/dj_eban/master/g2.gif" /></div>');
		
		intTimer = setInterval(kach, 40);
	},1300);
	
}

function kach()
{
	var date = new Date();
	var scaleStr = "";
	let seconds = date.getSeconds();
	scaleStr = "scale("+currscale+")"; 
	
		if (currScr%3 == 0){
			$("body").css("background-color", getRandomColor());
		}
		
		if (currScr%2 == 0){
	
			if (currscale == 1 || currscale<1) { 
				currscale= currscale + 0.2;
				scaledirection = "top";
				scaleStr = "scale("+currscale+")"; 
			}
			
			if (currscale > 1 && scaledirection == "top") { 
				currscale= currscale + 0.2;
				scaleStr = "scale("+currscale+")"; 
			}
			
			if (currscale == 2 || currscale>2) { 
				currscale = currscale - 0.2;
				scaledirection = "down";
				scaleStr = "scale("+currscale+")"; 
			}
			if (currscale > 1 && scaledirection == "down") { 
				currscale= currscale - 0.2;
				scaleStr = "scale("+currscale+")"; 
			}		
		}

		if (currScr<20 && direction == "top") {
			currScr+=2;
			$('body').css("transform", "rotate("+currScr+"deg) "+scaleStr+"");
		}
		if (currScr==20 && direction == "top") {
			direction = "back";
			currScr-=2;
			$('body').css("transform", "rotate("+currScr+"deg) "+scaleStr+"");
		}
		if (currScr<20 && direction == "back") {
			currScr-=2;
			$('body').css("transform", "rotate("+currScr+"deg) "+scaleStr+"");
		}
		if (currScr == -20 && direction == "back") {
			currScr+=2;
			direction = "top";
			$('body').css("transform", "rotate("+currScr+"deg) "+scaleStr+"");
		}
	
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
