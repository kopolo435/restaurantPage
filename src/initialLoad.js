import edificio from './img/edificio.jpg'
import shirakawa from './img/shirakawa.jpg'
import bar from './img/bar.jpg'
import comida from './img/sushi-rollos.jpg'

const createSection = (title,description,image)=>{
    return {title,description,image}
}

const sectionDataArray = [["Bienvenidos a Best Taste","Descripcion Presentacion que hable del restaurante",edificio],
["Ubicacion","Descripcion de el mensaje de bienvenida",shirakawa],
["Apariencia Local","descripcion de que tan grandiosas son las instalaciones",bar],
["Comida","descripcion de que tan grandiosa es la comida ",comida],
]

const sectionArray = []

const fillSectionArray = ()=>{
    sectionDataArray.forEach(section =>{
        sectionArray.push(createSection(section[0],section[1],section[2]));
    });
}

function createSectionElement(sectionInfo){
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
    imgElement.classList.add("homeContentImg");
    return imgElement;
}

function loadDescription(description){
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;
    return descriptionElement;
}

function loadContent(content){
    const homeContent = document.createElement("div");
    homeContent.classList.add("homeContainer");
    sectionArray.forEach(section =>{
        homeContent.appendChild(createSectionElement(section));
    });
    content.appendChild(homeContent)
}
fillSectionArray();
export default loadContent;