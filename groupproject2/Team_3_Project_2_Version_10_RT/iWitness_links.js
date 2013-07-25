function linkPost(form)
   
      
   {
    var link = form.link.value;
    var linkType = form.linkType.selectedIndex;
	
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
	form.link.value = "";
	}
