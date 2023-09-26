import breakfast from './img/breakfast.jpg'

const createSection = (title,description,image)=>{
    return {title,description,image}
}

const sectionDataArray = [["Bienvenidos a Best Taste","Descripcion Presentacion que hable del restaurante","Imagen edifico"],
["Ubicacion","Descripcion de el mensaje de bienvenida","Imagen de shirakawa"],
["Apariencia Local","descripcion de que tan grandiosas son las instalaciones","imagen del bar"],
["Comida","descripcion de que tan grandiosa es la comida ","imagen de comida"],
]

const sectionArray = []

const fillSectionArray = ()=>{
    sectionDataArray.forEach(section =>{
        createSection(section[0],section[1],section[2])
    })
}

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