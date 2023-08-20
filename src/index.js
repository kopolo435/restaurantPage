import './style.css'
import initialLoad from './initialLoad.js'

const divContent = document.createElement("div");
divContent.setAttribute("id","content");
document.body.appendChild(divContent); 
initialLoad(divContent);

console.log("Mi nombre es Samir Fanilla");