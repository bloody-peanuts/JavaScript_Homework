// Team 3 Project 2- Ronald Tubman, William Kowal, Christie Cocklin, Justin Hardesty

// This function performs when user clicks Submit button in "Profile" section. Displays user name, image, and a bio
function displayProfile()
{
    var imageName;      // Used to store user string in image file name text box
    var description;    // Holds bio string from About Me text box
    var userName;       // Holds user name string from name input box

    // This function gets user name, returns it
    function getName()
    {
       userName = document.getElementById("nameText").value;
       
       return userName;
    }

    // Gets user selected image file name, sets oops image if image file not in local directory
    function getImage()
    {
        imageName = document.getElementById("imageText").value;
        
        switch (imageName)
        {
            case "justin":
                imageName = "justin";
                break;
            case "ron":
                imageName = "ron";
                break;
            case "bill":
                imageName = "bill"
                break;
            case "christieArt":
                imageName = "christieArt";
                break;
            case "maggie":
                imageName = "maggie";
                break;
            default:
                imageName = "oops";
        }

        return imageName;
    }

    // Gets bio string from text box, returns it
    function getDescription()
    {
        description = document.getElementById("aboutMe").value;

        return description;
    }

    // Displays user-entered info in profile section
    document.getElementById("profile").innerHTML =  "<span id=\"showName\">" + getName() + "</span>" + "</br>" +
                                                    "<img src =\"" + getImage() +
                                                    ".png\" alt=\"" + getImage() + "\"/>" + "</br>" +
                                                    "<span id=\"showDescription\">" + getDescription() + "</span>"; 
}