let fftHasBeenClicked = false;

function ffMenuToggle() 
{
    console.log("er inne i funksjon");
    const navListElement = document.querySelector(".ulFileFormat");
    if(!ffHasBeenClicked)
    {   
        navListElement.classList.remove(hidden);
        navListElement.classList.add(show);
        ffHasBeenClicked = true;
    }
    else
    {
        navListElement.classList.remove(show);
        navListElement.classList.add(hidden);
        ffHasBeenClicked = false;
    }

}

globalThis.ffMenuToggle = ffMenuToggle;