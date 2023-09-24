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


divContent.replaceChildren();
divContent.appendChild(contact.getContactContainer());

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

function resetPageStatus(){
    divContent.replaceChildren();
    //Cambiar la clase a todos los botones a una donde su aspecto sea no elegido
}

homeBtn.addEventListener("click",()=>{
    resetPageStatus();
    initialLoad(divContent);
    //cambiar la clase para el btn se vea escogido
})

menuBtn.addEventListener("click",()=>{
    resetPageStatus();
    divContent.appendChild(menu.getMenuContainer());
    //cambiar la clase para el btn se vea escogido
})

contactBtn.addEventListener("click",()=>{
    resetPageStatus();
    divContent.appendChild(contact.getContactContainer());
})

console.log("Mi nombre es Samir Fanilla");