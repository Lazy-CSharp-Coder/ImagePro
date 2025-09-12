let menyHasBeenClicked = false;

function fileFormatMenuToggle() 
{
    console.log("er inne i funksjon");
    const navListElement = document.querySelector(".ulFileFormat");
    if(!menyHasBeenClicked)
    {   
        navListElement.classList.remove("hidden");
        navListElement.classList.add("show");
        navListElement.classList.add("easeInMenu");
        menyHasBeenClicked = true;
    }
    else
    {
        navListElement.classList.remove("show");
        navListElement.classList.add("hidden");
        menyHasBeenClicked = false;
    }

}

globalThis.fileFormatMenuToggle = fileFormatMenuToggle;
