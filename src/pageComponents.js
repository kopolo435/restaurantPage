function loadHeader(){
    const header = document.createElement("header");
    const titleRestaurant = document.createElement("h1");

    titleRestaurant.textContent="BestTaste";

    header.appendChild(titleRestaurant);
    header.appendChild(loadSocials());
    return header;
}

function loadSocials(){
    const facebookIcon = new Image();
    const twitterIcon = new Image();
    const instagramIcon = new Image();
    const socialsContainer = document.createElement("div");

    socialsContainer.setAttribute("id","socials");

    socialsContainer.appendChild(facebookIcon);
    socialsContainer.appendChild(twitterIcon);
    socialsContainer.appendChild(instagramIcon);

    return socialsContainer;

}

document.body.appendChild(loadHeader());

/*
Imagen para el icono
3 redes sociales
nombre de las redes sociales
*/