/*
FILE NAME: sitemap.js
WRITTEN BY: Trym Høgelid
WHEN: November 2016
PURPOSE: Adds a sitemap to the footer
*/
var btn = document.getElementById("button");
var bilde = document.createElement("IMG");
var closeButton = document.createElement("BUTTON");
var text = document.createTextNode("Lukk sidekart");
bilde.id = "sitemap";
closeButton.appendChild(text);
closeButton.id = "closeSitemap";
closeButton.class = "knappen";
closeButton.style.display = "none";
function loadSitemap() {
	bilde.src = "../images/sidekart.jpg";
	bilde.width = 800;
	bilde.height = 200;
	bilde.alt = "Sitemap";
	bilde.style.display= "block";
	footerContent.appendChild(bilde);
	footerContent.appendChild(closeButton);
	closeButton.style.display = "block";
	closeButton.onclick = function() {
		bilde.style.display = "none";
		closeButton.style.display = "none";

	}

}