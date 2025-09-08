let ttHasBeenClicked = false;

function ttMenuToggle() 
{
    const navListElement = document.querySelector(".ulFileFormat");
    if(!ttHasBeenClicked)
    {   
        navListElement.classList.remove(hidden);
        navListElement.classList.add(show);
        ttHasBeenClicked = true;
    }
    else
    {
        navListElement.classList.remove(show);
        navListElement.classList.add(hidden);
    }

}