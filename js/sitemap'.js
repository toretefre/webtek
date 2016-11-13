/**
 * Created by toret on 12.11.2016.
 */
var btn = document.getElementById('btn');
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
btn.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;

}
var span = document.getElementsByClassName("close")[0];
span.onclick = function closeModal() {
	modal.style.display = "none";
}