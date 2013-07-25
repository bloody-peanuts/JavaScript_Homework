// Team 3 Project 3 - Christie Cocklin, William Kowal, Ronald Tubman, Justin Hardesty

// Mouseover enlarges item image
function changeImage(orig) {
    orig.style.height = "150px";
    orig.style.width = "150px";
}

// Mouseout shrinks image, but keeps a little larger indicating viewed
function revertImage(orig) {
    orig.style.height = "100px";
    orig.style.width = "100px";
}