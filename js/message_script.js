/*
FILE NAME: message.js
WRITTEN BY: Trym Høgelid
WHEN: November 2016
PURPOSE: javascript that autofills email with name, subject and message
*/

function insertMessage() {
	var name = document.getElementById("enter_name").value;
	var subject = document.getElementById("enter_subject").value;
	var message = document.getElementById("enter_message").value;

	var body = encodeURI(message)+"%0D%0A"+"%0D%0A"+encodeURI(name);

	window.location.href='mailto:gravberget@list.stud.ntnu.no?subject='+encodeURI(subject)+'&body='+body;
	return false;
}