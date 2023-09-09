const createContact = (name,description,email,photoURl)=>{

    return{name,description,email,photoURl}
}

const contacts = [["pollo","Este plato es increible",20.25,"url"],["arroz","este plato tambien",10.23,"urlArroz"]];

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
    contactListController.getMenu().forEach(contact =>{
        contactContainer.appendChild(createPlateElement(contact));
    })

    return contactContainer;
}

contactListController.createContactList(contacts);

export {getContactContainer};