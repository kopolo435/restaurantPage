const createPlate = (name,price,photoURl)=>{

    return{name,price,photoURl}
}

const menuItems = [["pollo",20.25,"url"],["arroz",10.23,"urlArroz"]];

const menuController = (()=>{
    const menu = [];
    const createMenu = (menuItems)=>{
        menuItems.forEach(plateInfo =>{
            menu.push(createPlate(plateInfo[0],plateInfo[1],plateInfo[2]));
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