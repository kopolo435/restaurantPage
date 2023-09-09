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

function createPlateElement(plate){
    const plateContainer = document.createElement("div");
    plateContainer.setAttribute("class","plateContainer")
    plateContainer.replaceChildren(createContactNameDisplay(plate),
        createPlateDescriptionDisplay(plate),
        createPlatePriceDIsplay(plate),
        createPlateImgDisplay(plate));
    return plateContainer;
}

function getMenuContainer(){
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("class","menuContainer");
    menuController.getMenu().forEach(plate =>{
        menuContainer.appendChild(createPlateElement(plate));
    })

    return menuContainer;
}

menuController.createMenu(menuItems);

export {getMenuContainer};