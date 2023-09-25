import chef from './img/chefPrincipal.jpg'
import asistente from './img/asistente.jpg'
import founder from './img/founder.jpg'
import equipo from './img/equipo.jpg'
const createContact = (name,description,email,photoURl)=>{

    return{name,description,email,photoURl}
}

const contacts = [["Fundador Kopolo435","Fundador del restaurante","",founder],
["Cocinero Principal Jhon Titor","Este cocinero tiene más de 25 años de experiencia en la industria","correo1@gmail.com",chef],
["Asistente principal","Sus habilidades mejoraran su estado","correo2@gmai.com",asistente],
["Equipo a su servicio","Nuestro equipo siempre estara para servir a sus necesidades","correoDelaempresa@gmail.com",equipo],
];

const contactListController = (()=>{
    const contactList = [];
    const createContactList = (contacts)=>{
        contacts.forEach(contactInfo =>{
            contactList.push(createContact(contactInfo[0],contactInfo[1],contactInfo[2],contactInfo[3]));
        });
    }

    const getContactList = ()=>{
        return contactList;
    }
    return {getContactList,createContactList};

})();

function createContactNameDisplay(contact){
    const contactName = document.createElement("h3");
    contactName.setAttribute("class","contactName");
    contactName.textContent = contact.name;
    return contactName;
};

function createContactEmailDisplay(contact){
    const contactEmail = document.createElement("p");
    contactEmail.setAttribute("class","contactEmail");
    contactEmail.textContent = contact.email;
    return contactEmail;
};

function createContactImgDisplay(contact){
    const contactImg = new Image();
    contactImg.src = contact.photoURl;
    contactImg.setAttribute("class","contactPhoto");
    contactImg.setAttribute("alt",`Contacto ${contact.name}`);
    return contactImg;
};

function createContactDescriptionDisplay(contact){
    const contactDescription = document.createElement("p");
    contactDescription.setAttribute("class","contactDescription");
    contactDescription.textContent = contact.description;
    return contactDescription;
}

function createContactElement(contact){
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class","contactContainer")
    contactContainer.replaceChildren(createContactNameDisplay(contact),
        createContactDescriptionDisplay(contact),
        createContactEmailDisplay(contact),
        createContactImgDisplay(contact));
    return contactContainer;
}

function getContactContainer(){
    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("class","contactContainer");
    contactListController.getContactList().forEach(contact =>{
        contactContainer.appendChild(createContactElement(contact));
    })

    return contactContainer;
}

contactListController.createContactList(contacts);

export {getContactContainer};