// Team 3 Project 2- Ronald Tubman, William Kowal, Christie Cocklin, Justin Hardesty
// This file is linked to iWitness_Shell_Version_1.html

//This function performs when user clicks "Add Link" button in links section, displays entered link in appropriate link area based on drop-down menu selection
function linkPost(form)
  

  { // variable for value of link input
	var link = form.link.value;	
	// variable for value of link type
	var linkType = form.linkType.selectedIndex;	
	// Determine where to post link by the type that gets passed into the linkType variable
	if (linkType == "0") 
	{
		document.getElementById('schoolLinkList').innerHTML += ("<a href='"+link+"'>"+link+"</a><br/>");  
	}
	else if (linkType == "1")
	{
		document.getElementById('workLinkList').innerHTML += ("<a href='"+link+"'>"+link+"</a><br/>");
	}
	else if (linkType == "2")
	{
		document.getElementById('funLinkList').innerHTML += ("<a href='"+link+"'>"+link+"</a><br/>");
	}
	//Clear input box
	form.link.value = "";
	}
