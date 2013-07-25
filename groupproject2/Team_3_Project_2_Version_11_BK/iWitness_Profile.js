function displayProfile()
{
    var imageName;
    var description;

    function getName()
    {
       return document.getElementById("nameText").value;

    }

    function getImage()
    {
        imageName = document.getElementById("imageText").value;

        if ((imageName != "justinHardesty") && (imageName != "maggie"))
        {
            imageName = "(Image Not Found!)";
        }

        return imageName;
    }

    function getDescription()
    {
        description = document.getElementById("aboutMe").value;

        return description;
    }

    document.getElementById("profile").innerHTML =  "<span id=\"showName\">" + getName() + "</span>" + "</br>" +
                                                    "<img src =\"" + getImage() +
                                                    ".png\" alt=\"" + getImage() + "\"/>" + "</br>" +
                                                    "<span id=\"showDescription\">" + getDescription() + "</span>"; 
}
