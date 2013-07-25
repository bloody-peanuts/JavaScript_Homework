// Team 3 Project 2- Ronald Tubman, William Kowal, Christie Cocklin, Justin Hardesty
// This file is linked to iWitness_Shell_Version_1.html

//creates a status update
function statusUp(){
	var update = ("<p>"+retriever()+"</p>");
	appendFeed(update)
}

//displays the menu for selecting an image
function imageUp() {
	document.getElementById("picSelect").style.display="block";
}

//creates a link update
function linkUp() {
	var update = retriever();
	update = ("<p><a href='"+update+"'>"+update+"</a></p>");
	appendFeed(update);
}

//append created update to top of feed
function appendFeed(update) {
	var feed = document.getElementById("feed");
	var newFeed = (update + feed.innerHTML);
	feed.innerHTML = newFeed;
}

//Object - Retriever puppy
//Fetches input from the form box, clears it, and brings it back
function retriever() {
	var status = document.getElementById("status");
	ball = status.value;
	status.value = "";
	return ball;
}

//posts the image corresponding to selected radio button
function postImage(){
	cancelImage();
	var update = "";
	if (document.getElementById("sonicbtn").checked){
		update = "<p><img src='sonic.png' height='150'></p>"
	}else if (document.getElementById("kittensbtn").checked){
		update = "<p><img src='kittens.jpg' height='150'></p>"
	}else if (document.getElementById("janitorbtn").checked){
		update = "<p><img src='janitor.gif' height='150'></p>"
	}
	appendFeed(update);
}

//hides the menu for selecting an image
function cancelImage(){
	document.getElementById("picSelect").style.display="none";
}