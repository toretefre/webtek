/*
FILE NAME: message.js
WRITTEN BY: Trym Høgelid
WHEN: October 2015
PURPOSE: javascript that autofills email with name, subject and message
*/
function insertMessage() {
	var name = document.getElementById("insert_name").value;
	var subject = document.getElementById("insert_subject").value;
	var message = document.getElementById("insert_message").value;

	var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name);

	window.location.href="mailto:gravberget@list.stud.ntnu.no"+encodeURI(subject)+'&body='+body;
	return false;
}