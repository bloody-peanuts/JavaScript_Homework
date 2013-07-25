// Team 3 Project 3- Ronald Tubman, William Kowal, Christie Cocklin, Justin Hardesty
// This file is linked to the cart page and all items

var itemNames = ["Digital", "DontWakeMeUp", "KirbyAirride", "Reiko", "SoAreYou", "WhyNot"];
var mediumArray = ["Photoshop 8.0", "Paper/Pencil", "Paper/Pencil/Crayon", "Paint Shop Pro 1.0", "Paper/Pencil", "Micrografix Publisher 6.0"];
var imageArray = ["digitalthumb.png", "DontWakeMeUpThumb.png", "KirbyAirrideThumb.png",
					"ReikoThumb.png", "SoAreYouThumb.png", "WhyNot.jpg"];
var priceArray = [1, 2, 3, 4, 5, 6];

function addItem(name, quantity){
	//Intentionally not setting an expiration date here. Figure it will make things easier for testing/grading if the
	//cookies despawn on browser close
	document.cookie = name+"="+quantity;
}

function readCookie(){
	var itemArray = new Array();
	var quantArray = new Array();
	var allcookies = document.cookie;
   //alert("All Cookies : " + allcookies );

   if (allcookies.length > 0){
		cookiearray  = allcookies.split(';');
   
		for(var i=0; i<cookiearray.length; i++){
			//alert(cookiearray[i]);
			itemArray[i] = cookiearray[i].split('=')[0];
			quantArray[i] = cookiearray[i].split('=')[1];
			//spaces were coming in at the start of some cookies and messing things up.
			//Hasta la vista, spaces
			if (itemArray[i].charAt(0) == " ")
				itemArray[i] = itemArray[i].slice(1);
		}
		for (var i=0; i<itemArray.length; i++){
			//alert("Cookie "+i+" = "+itemArray[i]+" "+quantArray[i]);
			buildCartNodes(itemArray[i], quantArray[i]);
		}
	}
}

function cartLoad(){
	readCookie();
	/*for (var i=0; i<itemArray[0].length; i++){
		alert("Cookie "+i+" = "+itemArray[0][i]+" "+itemArray[1][i]);
	}*/
}

//I hate the way this function looks! Must format better!
function buildCartNodes(item, quantity){
	
	var codeNum = itemNames.indexOf(item);
	
	var entryNode = document.getElementById("cartarea");
	var itemDivNode = document.createElement("div");
	var infoDivNode = document.createElement("div");
	var priceDivNode = document.createElement("div");
	var quantDivNode = document.createElement("div");
	var totalDivNode = document.createElement("div");
	var brNode = document.createElement("br");
	var imgNode = document.createElement("img");
	var parNode = document.createElement("p");
	var priceParNode = document.createElement("p");
	var quantParNode = document.createElement("p");
	var totalParNode = document.createElement("p");
	var nameNode = document.createTextNode(item);
	var medNode = document.createTextNode("Medium: "+mediumArray[codeNum]);
	var priceNode = document.createTextNode("Price: $"+priceArray[codeNum]);
	var quantNode = document.createTextNode("Quantity: "+quantity);
	var totalNode = document.createTextNode("Total: $"+(quantity*priceArray[codeNum]));
	
	itemDivNode.setAttribute("id","itemDiv");
	infoDivNode.setAttribute("id","infoDiv");
	priceDivNode.setAttribute("id","priceDiv");
	quantDivNode.setAttribute("id","quantDiv");
	totalDivNode.setAttribute("id","totalDiv");
	imgNode.setAttribute("src","images/"+imageArray[codeNum]);
	
	priceParNode.appendChild(priceNode);
	quantParNode.appendChild(quantNode);
	totalParNode.appendChild(totalNode);
	parNode.appendChild(nameNode);
	parNode.appendChild(brNode);
	parNode.appendChild(medNode);
	infoDivNode.appendChild(imgNode);
	infoDivNode.appendChild(parNode);
	priceDivNode.appendChild(priceParNode);
	quantDivNode.appendChild(quantParNode);
	totalDivNode.appendChild(totalParNode);
	itemDivNode.appendChild(infoDivNode);
	itemDivNode.appendChild(priceDivNode);
	itemDivNode.appendChild(quantDivNode);
	itemDivNode.appendChild(totalDivNode);
	entryNode.appendChild(itemDivNode);
	
	
}

//alert("meow");