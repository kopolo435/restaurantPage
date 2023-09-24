import breakfast from './img/breakfast.jpg'

function loadTitle(){
    const titleElement = document.createElement("h2");
    titleElement.textContent = "Bienvenidos a BestTaste";
    return titleElement;
}

function loadImage(){
    const imgElement = new Image();
    imgElement.src = breakfast;
    return imgElement;
}

function loadDescription(){
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "En BestTaste encontraras las mejores comidas que tu lengua podra disfrutar, todos nuestros platillos estan hechos bajo los estandares de la ISO 9100";
    return descriptionElement;
}

function loadContent(content){
    content.appendChild(loadTitle());
    content.appendChild(loadImage());
    content.appendChild(loadDescription());
}

export default loadContent;