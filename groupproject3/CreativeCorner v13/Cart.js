// Team 3 Project 3- Ronald Tubman, William Kowal, Christie Cocklin, Justin Hardesty
// This file is linked to the cart page and all items

//Declare some arrays to reference
var itemNames = ["Digital", "DontWakeMeUp", "KirbyAirride", "Reiko", "SoAreYou", "WhyNot"];
var mediumArray = ["Photoshop 8.0", "Paper/Pencil", "Paper/Pencil/Crayon", "Paint Shop Pro 1.0", "Paper/Pencil", "Micrografix Publisher 6.0"];
var imageArray = ["digitalthumb.png", "DontWakeMeUpThumb.png", "KirbyAirrideThumb.png",
					"ReikoThumb.png", "SoAreYouThumb.png", "WhyNot.jpg"];
var priceArray = [24.99, 54.99, 75.99, 49.99, 24.99, 19.99];

//Function for baking cookies
function addItem(name, quantity){
	//Intentionally not setting an expiration date here. Figure it will make things easier for testing/grading if the
	//cookies despawn on browser close
	document.cookie = name+"="+quantity;
}

//Read the cookies
function readCookie(){
	var itemArray = new Array();
	var quantArray = new Array();
	var allcookies = document.cookie;
	var runningTotal = 0;

	//check if there are cookies, if so split them into arrays
   if (allcookies.length > 0){
		cookiearray  = allcookies.split(';');
   
		for(var i=0; i<cookiearray.length; i++){
			itemArray[i] = cookiearray[i].split('=')[0];
			quantArray[i] = cookiearray[i].split('=')[1];
			//spaces were coming in at the start of some cookies and messing things up.
			//Hasta la vista, spaces
			if (itemArray[i].charAt(0) == " ")
				itemArray[i] = itemArray[i].slice(1);
		}
		//call function to build up the cart items
		for (var i=0; i<itemArray.length; i++){
			buildCartNodes(itemArray[i], quantArray[i]);
			var codeNum = itemNames.indexOf(itemArray[i]);
			runningTotal += (priceArray[codeNum] * parseInt(quantArray[i]));
		}
		//and cart total
		buildTotalArea(runningTotal);
	}
}

//So it turns out this function that is triggered by the cart page loading does nothing but call another function.
//Probably should get rid of it, but... meh. I'm tired.
function cartLoad(){
	readCookie();
}

//I hate the way this function looks!
//builds nodes for items in cart
function buildCartNodes(item, quantity){
	
	//declare every variable imaginable
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
	var totalNode = document.createTextNode("Total: $"+(quantity*priceArray[codeNum]).toFixed(2));
	
	//Set attributes, mostly for id's
	itemDivNode.setAttribute("id","itemDiv");
	infoDivNode.setAttribute("id","infoDiv");
	priceDivNode.setAttribute("id","priceDiv");
	quantDivNode.setAttribute("id","quantDiv");
	totalDivNode.setAttribute("id","totalDiv");
	imgNode.setAttribute("src","images/"+imageArray[codeNum]);
	
	//putting nodes in nodes
	//based loosely on http://www.youtube.com/watch?v=rPCjrPKDKMM
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

//set up the totals at the bottom
function buildTotalArea(subTot){
			
			//more variables
			var divNode = document.getElementById("totalCharges");
			var brNode = document.createElement("br");
			var priceBlockNode = document.createElement("p");
			var subTotNode = document.createTextNode("Subtotal: $"+subTot.toFixed(2));
			var taxNode = document.createTextNode("Tax (7%): $"+(subTot*0.07).toFixed(2));
			var totNode = document.createTextNode("Total: $"+(subTot*1.07).toFixed(2));
			var totalDiv = document.createElement("div");
			
			//more russian dolls
			totalDiv.setAttribute("id","grandTotal");
			priceBlockNode.appendChild(subTotNode);
			priceBlockNode.appendChild(brNode);
			priceBlockNode.appendChild(taxNode);
			totalDiv.appendChild(totNode);
			priceBlockNode.appendChild(totalDiv);
			divNode.appendChild(priceBlockNode);
		
}
//I use this next line of code more than any other in debugging my programs
//alert("meow");