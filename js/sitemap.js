/*
FILE NAME: sitemap.js
WRITTEN BY: Trym Høgelid
WHEN: November 2016
PURPOSE: Adds a sitemap to the footer
*/
var btn = document.getElementById("button");
var img = document.createElement("IMG");
var closeButton = document.createElement("BUTTON");
var text = document.createTextNode("Lukk sidekart");
img.class = "sitemap";
closeButton.appendChild(text);
closeButton.id = "closeSitemap";
closeButton.class = "knappen";
closeButton.style.display = "none";
function loadSitemap() {
	img.src = "../images/sidekart.jpg";
	img.width = 800;
	img.height = 200;
	img.alt = "Sitemap";
	img.style.display= "block";
	footerContent.appendChild(img);
	footerContent.appendChild(closeButton);
	closeButton.style.display = "block";
	closeButton.onclick = function() {
		img.style.display = "none";
		closeButton.style.display = "none";

	}

}