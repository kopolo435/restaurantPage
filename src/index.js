import './style.css'
import initialLoad from './initialLoad.js'
import * as menu from './menu.js'
import * as contact from './contact.js'
import * as pageComponent from './pageComponents.js';

const divContent = document.createElement("div");
divContent.setAttribute("id","content");

document.body.appendChild(pageComponent.loadHeader());
document.body.appendChild(divContent); 
document.body.appendChild(pageComponent.loadNavBar());
document.body.appendChild(pageComponent.createFooter());

initialLoad(divContent);

const homeBtn = document.getElementById("homeBtn");
homeBtn.classList.add("activeButton","navButton");
const menuBtn = document.getElementById("menuBtn");
menuBtn.classList.add("navButton");
const contactBtn = document.getElementById("contactBtn");
contactBtn.classList.add("navButton");

function resetPageStatus(){
    divContent.replaceChildren();
    //Cambiar la clase a todos los botones a una donde su aspecto sea no elegido
}

homeBtn.addEventListener("click",()=>{
    resetPageStatus();
    initialLoad(divContent);
    //cambiar la clase para el btn se vea escogido
    homeBtn.classList.add("activeButton");
    window.scrollTo({top: 0});
    menuBtn.classList.remove("activeButton")
    contactBtn.classList.remove("activeButton");
})

menuBtn.addEventListener("click",()=>{
    resetPageStatus();
    divContent.appendChild(menu.getMenuContainer());
    window.scrollTo({top: 0});
    //cambiar la clase para el btn se vea escogido
    menuBtn.classList.add("activeButton");
    contactBtn.classList.remove("activeButton");
    homeBtn.classList.remove("activeButton");
})

contactBtn.addEventListener("click",()=>{
    resetPageStatus();
    divContent.appendChild(contact.getContactContainer());
    window.scrollTo({top: 0});
    contactBtn.classList.add("activeButton");
    homeBtn.classList.remove("activeButton");
    menuBtn.classList.remove("activeButton")
})

console.log("Mi nombre es Samir Fanilla");