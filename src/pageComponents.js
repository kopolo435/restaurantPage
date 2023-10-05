import facebookLogo from './img/facebook-svgrepo-com.svg'
import twitterLogo from './img/twitter-rounded-border-svgrepo-com.svg'
import instagramLogo from './img/instagram-svgrepo-com.svg'
function loadHeader(){
    const header = document.createElement("header");
    const titleRestaurant = document.createElement("h1");

    titleRestaurant.textContent="BestTaste";

    header.appendChild(createRestaurantLogo());
    header.appendChild(titleRestaurant);
    header.appendChild(loadSocials());
    return header;
}

function createRestaurantLogo(){
    const restaurantLogo = new Image();
    restaurantLogo.setAttribute("id","mainLogo");
    restaurantLogo.setAttribute("alt","Logo del restaurante");

    return restaurantLogo;
}

function loadSocials(){
    const facebookIcon = new Image();
    facebookIcon.src = facebookLogo;
    const twitterIcon = new Image();
    twitterIcon.src = twitterLogo;
    const instagramIcon = new Image();
    instagramIcon.src = instagramLogo;
    const socialsContainer = document.createElement("div");

    socialsContainer.setAttribute("id","socials");
    facebookIcon.setAttribute("alt","Link para ir al facebook del restaurante");
    twitterIcon.setAttribute("alt","Link para ir al twitter del restaurante");
    instagramIcon.setAttribute("alt","Link para ir al instagram del restaurante");

    socialsContainer.appendChild(facebookIcon);
    socialsContainer.appendChild(twitterIcon);
    socialsContainer.appendChild(instagramIcon);

    return socialsContainer;

}

function createNavButtons(buttonName){
    const button = document.createElement("button");
    const buttonId = buttonName.toLowerCase()+"Btn";
    button.setAttribute("id",buttonId);
    button.textContent = buttonName;
    return button;
}
function loadNavBar(){
    const navBar = document.createElement("nav");
    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id","buttonContainer");
    buttonContainer.appendChild(createNavButtons("Home"));
    buttonContainer.appendChild(createNavButtons("Menu"));
    buttonContainer.appendChild(createNavButtons("Contact"));
    navBar.appendChild(buttonContainer);
    return navBar;
}



function createFooter(){
    const footer = document.createElement("footer");
    const creatorText = document.createElement("p");
    creatorText.textContent = "Kopolo435";

    footer.appendChild(creatorText);
    return footer;
}


export {createFooter,loadNavBar,loadHeader};