import './style.css'
import initialLoad from './initialLoad.js'
import * as menu from './menu.js'
import * as contact from './contact.js'
import * as pageComponent from './pageComponents.js';

const divContent = document.createElement("div");
divContent.setAttribute("id","content");
document.body.appendChild(pageComponent.loadHeader());
document.body.appendChild(divContent); 
initialLoad(divContent);
document.body.appendChild(pageComponent.loadNavBar());
document.body.appendChild(pageComponent.createFooter());

divContent.replaceChildren();
divContent.appendChild(contact.getContactContainer());

console.log("Mi nombre es Samir Fanilla");