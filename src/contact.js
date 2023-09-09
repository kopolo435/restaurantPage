const createPerson = (name,description,email,photoURl)=>{

    return{name,description,email,photoURl}
}

const contacts = [["pollo","Este plato es increible",20.25,"url"],["arroz","este plato tambien",10.23,"urlArroz"]];

const contactListController = (()=>{
    const contactList = [];
    const createContactList = (contacts)=>{
        contacts.forEach(contactInfo =>{
            contactList.push(createPerson(contactInfo[0],contactInfo[1],contactInfo[2],contactInfo[3]));
        });
    }

    const getContactList = ()=>{
        return contactList;
    }
    return {getContactList,createContactList};

})();

function createPlateNameDisplay(plate){
    const plateName = document.createElement("h3");
    plateName.setAttribute("class","plateName");
    plateName.textContent = plate.name;
    return plateName;
};

function createPlatePriceDIsplay(plate){
    const platePrice = document.createElement("p");
    platePrice.setAttribute("class","platePrice");
    platePrice.textContent = plate.price;
    return platePrice;
};

function createPlateImgDisplay(plate){
    const plateImg = new Image();
    plateImg.src = plate.photoURl;
    plateImg.setAttribute("class","platePhoto");
    plateImg.setAttribute("alt",`Plato ${plate.name}`);
    return plateImg;
};

function createPlateDescriptionDisplay(plate){
    const plateDescription = document.createElement("p");
    plateDescription.setAttribute("class","plateDescription");
    plateDescription.textContent = plate.description;
    return plateDescription;
}

function createPlateElement(plate){
    const plateContainer = document.createElement("div");
    plateContainer.setAttribute("class","plateContainer")
    plateContainer.replaceChildren(createPlateNameDisplay(plate),
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