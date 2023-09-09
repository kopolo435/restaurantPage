const createPlate = (name,description,price,photoURl)=>{

    return{name,description,price,photoURl}
}

const menuItems = [["pollo","Este plato es increible",20.25,"url"],["arroz","este plato tambien",10.23,"urlArroz"]];

const menuController = (()=>{
    const menu = [];
    const createMenu = (menuItems)=>{
        menuItems.forEach(plateInfo =>{
            menu.push(createPlate(plateInfo[0],plateInfo[1],plateInfo[2],plateInfo[3]));
        });
    }

    const getMenu = ()=>{
        return menu;
    }
    return {getMenu,createMenu};

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