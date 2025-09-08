let menyHasBeenClicked = false;

function ffMenuToggle() 
{
    console.log("er inne i funksjon");
    const navListElement = document.querySelector(".ulFileFormat");
    if(!menyHasBeenClicked)
    {   
        navListElement.classList.remove(hidden);
        navListElement.classList.add(show);
        menyHasBeenClicked = true;
    }
    else
    {
        navListElement.classList.remove(show);
        navListElement.classList.add(hidden);
        menyHasBeenClicked = false;
    }

}

globalThis.ffMenuToggle = ffMenuToggle;