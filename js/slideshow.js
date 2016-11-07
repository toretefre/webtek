/* Code for the slideshow */
var images = ["http://hdwallpapershdpics.com/wp-content/uploads/2016/10/best-nature-desktop-hd-wallpaper.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJFT4-MZhnQd5QPGQmsHvA5OyHqKtq8VJrmXXYshcb-mBhDpAQ1A","https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-5I6AHSmlOPOceABsN13fA-3QZANkfeK2LDTv-NFOPEvx99rpng"];
var showCanvas = null;
var context = null;
var img = document.createElement("img");
var currentImage = 0;
var getBtn = document.getElementById("btnPrev");
getBtn.addEventListener("onclick", previousPicture)


window.onload = function() {
	showCanvas = document.getElementById("myCanvas");
	context = showCanvas.getContext("2d");

	img.setAttribute('width','600');
	img.setAttribute('height','600')
	nextPicture();

	/*setInterval(nextPicture,5000)*/
}

function nextPicture() {
	img.setAttribute('src',images[currentImage++]);
	img.onload = function() {
		if(currentImage >= images.length) {currentImage = 0;}
	context.drawImage(img,0,0,600,600);
	console.log(currentImage);}}

function previousPicture() {
	img.setAttribute('src',images[currentImage--]);
	img.onload = function() {
		if(currentImage < 0) {currentImage =0}
	context.drawImage(img,0,0,600,600);
	console.log(currentImage);}}

