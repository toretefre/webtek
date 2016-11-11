//modularity av Claus
const footer = document.getElementById('footer');
//lager innholdet i <footer> på hver side som kjører skriptet
window.onload = function insertFooter() {
	let footerContent = document.createElement('span');
	footerContent.innerHTML = "Laget av studenter på <a href='https://www.ntnu.no/studier/bit'>Informatikk ved NTNU i Trondheim</a>.<br>" +
		"<a href='mailto:gravberget@list.stud.ntnu.no' target='_top'>Send oss en e-post!</a><br> <button type='button' " +
		"class='knappen' onclick='scrollToAnyElement(\"header-pic\")'>Gå til toppen</button>";
	footer.appendChild(footerContent);
	console.log(123123)
};

//onload snurr film!