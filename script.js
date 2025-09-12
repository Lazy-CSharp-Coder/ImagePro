let menyHasBeenClicked = false;

function fileFormatMenuToggle() 
{
    console.log("er inne i funksjon");
    const navListElement = document.querySelector(".ulFileFormat");
    if(!menyHasBeenClicked)
    {   

        navListElement.classList.remove("easeOutMenu");
        navListElement.classList.add("show")
        navListElement.classList.add("easeInMenu");
        navListElement.addEventListener("animationend", () => {navListElement.classList.remove("hidden"); });
        menyHasBeenClicked = true;
    }
    else
    {
        // navListElement.classList.remove("show");
        navListElement.classList.remove("easeInMenu");
        navListElement.classList.add("easeOutMenu");
        navListElement.addEventListener("animationend", () => {navListElement.classList.remove("show"); 
                                                               navListElement.classList.add("hidden")});
        menyHasBeenClicked = false;
    }

}

globalThis.fileFormatMenuToggle = fileFormatMenuToggle;
