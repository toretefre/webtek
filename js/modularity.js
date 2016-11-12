/*
FILE NAME: modularity.js
WRITTEN BY: Claus Martinsen
WHEN: November 2016
PURPOSE: Make footer and nav-bar modular.
*/

const footer = document.getElementById('footer');
//const navBar = document.getElementById('')

window.onload = function insertFooter() {
	let footerContent = document.createElement('span');
	footerContent.innerHTML = "Laget av studenter på <a href='https://www.ntnu.no/studier/bit'>Informatikk ved NTNU i Trondheim</a>.<br>" +
		"<a href='mailto:gravberget@list.stud.ntnu.no' target='_top'>Send oss en e-post!</a><br> " +
		"<a onclick='jsfunction()' href='#'>Sidekart</a>" +
		"<br><button class='knappen' id = 'theAnchor' onclick='smoothScroll(\"theAnchor\")'><div class='trekant'></div></button>";

	footer.appendChild(footerContent);
	console.log(123123)
};