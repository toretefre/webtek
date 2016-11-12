/*
FILE NAME: modularity.js
WRITTEN BY: Claus Martinsen
WHEN: November 2016
PURPOSE: Make footer and nav-bar modular.
*/

const footer = document.getElementById('footer');
const navBar = document.getElementById('navbaren');

window.onload = function insertModularContent() {
	let footerContent = document.createElement('span');
	footerContent.innerHTML = "Laget av studenter på <a href='https://www.ntnu.no/studier/bit'>Informatikk ved NTNU i Trondheim</a>.<br>" +
		"<a href='mailto:gravberget@list.stud.ntnu.no' target='_top'>Send oss en e-post!</a><br> " +
		"<a onclick='jsfunction()' href='#'>Sidekart</a>" +
		"<br><button class='knappen' id = 'theAnchor' onclick='smoothScroll(\"theAnchor\")'><div class='trekant'></div></button>";

	let navBarContent = document.createElement('ul');
	navBarContent.className = "navbar";
	navBarContent.innerHTML = '<li><a href="../html_pages/index.html">Hjem</a></li>' + '<li><a href="../html_pages/om_oss.html">Om oss</a></li>' +
	'<li><a href="../html_pages/om_gravberget.html">Om Gravberget</a></li>' + '<li class="dropdown">' +
	'<a href="../html_pages/severdigheter.html" class="dropbtn">Severdigheter</a>' +
	'<div class="dropdown-content">' + '<a href="../html_pages/bilder.html">Bilder</a>' + '<a href="../html_pages/turloyper.html">Turløyper</a>' +
	'<a href="../html_pages/slektstre.html">Slektstre</a>' + '</div>' + '</li>' +'<li><a href="../html_pages/kontakt_oss.html">Kontakt Oss</a></li>';

	footer.appendChild(footerContent);
	navBar.appendChild(navBarContent);
	console.log('Modularitet kjører');
};