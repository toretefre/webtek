/**
 * Created by toret on 12.11.2016.
 */
var btn = document.getElementById("button");
var img = document.createElement("IMG");
var closeButton = document.createElement("BUTTON");
var text = document.createTextNode("Lukk sitemap");
img.class = "sitemap";
closeButton.appendChild(text);
closeButton.id = "closeSitemap";
closeButton.class = "knappen";
closeButton.style.display = "none";
function loadSitemap() {
	img.src = "../images/dugnad11.jpg"
	img.width = 200;
	img.height = 200;
	img.alt = "Sitemap";
	img.style.display= "block";
	footer.appendChild(img);
	footer.appendChild(closeButton);
	closeButton.style.display = "block";
	closeButton.onclick = function() {
		img.style.display = "none";
		closeButton.style.display = "none";

	}

}