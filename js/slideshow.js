/*
FILE NAME: slideshow.js
WRITTEN BY: Trym Høgelid
WHEN: November 2016
PURPOSE: javascript for the slideshow in bilder.html
*/

var images = ["../images/dugnad11.jpg"];
var showCanvas = null;
var context = null;
var img = document.createElement("img");
var currentImage = 0;
var getBtn = document.getElementById("btnPrev");

window.addEventListener ?
window.addEventListener("load",load(),false) :
window.attachEvent && window.attachEvent("onload",load());

function load() {
	showCanvas = document.getElementById("myCanvas");
	context = showCanvas.getContext("2d");
	img.setAttribute('width','600');
	img.setAttribute('height','600')
	img.setAttribute('src',images[currentImage]);
	previousPicture()
	}


	/*setInterval(nextPicture,5000) viss vi skal ha automatisk slideshow*/


function nextPicture() {
	if(currentImage < images.length-1) {
		currentImage++;
	}
    else
        currentImage=0;
	img.setAttribute('src',images[currentImage]);
	img.onload = function() {
		context.drawImage(img,0,0,900,600);
		}
	}

function previousPicture() {
	if(!currentImage <= 0) {
		currentImage--;
	}
    else
        currentImage=images.length-1
	img.setAttribute('src',images[currentImage]);
	img.onload = function(){
		context.drawImage(img,0,0,900,600);
		}
	}
for (i=1;i<15;i++){
	images.push("../images/slideshow/slideImg ("+i+").jpg")
}
