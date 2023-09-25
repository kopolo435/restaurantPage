import makiRoll from './img/maki-roll.jpg'
import sushiBall from  './img/sushi-balls.jpg'
import sushiBandeja from './img/sushi-bandeja.jpg'
import sushiOlla from './img/sushi-olla.jpg'
import sushiNaranja from './img/sushi-rollo-naranja.jpg'
import sushiRollo from './img/sushi-rollos.jpg'

const createPlate = (name,description,price,photoURl)=>{

    return{name,description,price,photoURl}
}

const menuItems = [["Maki Roll","Este plato es increible",20.25,makiRoll],
["Sushi Balls","este plato tambien",10.23,sushiBall],
["Bandeja de Sushi","este plato tambien",10.23,sushiBandeja],
["Olla de Sushi","este plato tambien",10.23,sushiOlla],
["Sushi naranja","este plato tambien",10.23,sushiNaranja],
["Rollo de Sushi","este plato tambien",10.23,sushiRollo],
];

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