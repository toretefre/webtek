//modularity av Claus
//får footer fra index.html
const footer = document.getElementById('footer');

//lager en <footer> på hver side som kjører skriptet og
//inserter samme innhold
let footerContent = document.createElement('span');
footerContent.innerHTML = 'Laget av studenter på <a href="https://www.ntnu.no/studier/bit">Informatikk ved NTNU i Trondheim</a>.<br><a href="mailto:gravberget@list.stud.ntnu.no" target="_top">Send oss en e-post!</a>'
footer.appendChild(footerContent)