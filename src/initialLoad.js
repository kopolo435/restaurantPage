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

function createSection(sectionInfo){
    const  section = document.createElement("section");

    section.appendChild(loadTitle(sectionInfo.title));
    section.appendChild(loadImage(sectionInfo.image));
    section.appendChild(loadDescription(sectionInfo.description));

    return section
}

function loadTitle(title){
    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    return titleElement;
}

function loadImage(imgSrc){
    const imgElement = new Image();
    imgElement.src = imgSrc;
    return imgElement;
}

function loadDescription(description){
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    return descriptionElement;
}

function loadContent(content){
    content.appendChild(loadTitle());
    content.appendChild(loadImage());
    content.appendChild(loadDescription());
}

export default loadContent;