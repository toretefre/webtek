//modularity av Claus
const footer = document.getElementById('footer');
//lager innholdet i <footer> på hver side som kjører skriptet
function insertFooter() {
	let footerContent = document.createElement('span');
	footerContent.innerHTML = 'Laget av studenter på <a href="https://www.ntnu.no/studier/bit">Informatikk ved NTNU i Trondheim</a>.<br><a href="mailto:gravberget@list.stud.ntnu.no" target="_top">Send oss en e-post!</a>';
	footer.appendChild(footerContent);
}

//onload snurr film!