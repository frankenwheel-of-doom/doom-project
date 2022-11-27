const content = document.querySelector("body > section") // section
const backbutton = document.querySelector(".back-button"); // back button
const addbutton = document.querySelector("button img[src*='plus']"); // add button
const inputnamebox = document.querySelector("input[type='text']"); // input value
const deletebutton = document.querySelector("button img[src*='minus']"); // delete button
const namebox = document.querySelector(".added-name"); // added names
const deadbox = document.querySelector("dead"); // cemetery names
// where new elements will appear
const area = content.children[0];
// player list
let namelist = localStorage.getItem("playerlist");
let parsedlist = JSON.parse(namelist);
let lista = new Array;
let muertos = [];
let i = 0; // declare iterator here so it can be used to dynamically add names into "caja"
let caja; 

(()=>{
    displayNames();
    addbutton.addEventListener("click", addName);
    content.addEventListener("click", deleteName);
})();

function displayNames(){
    if(namelist!=null){
        for(leti = 0; i < parsedlist.length; i++){
            lista.push(parsedlist[i])
            createNameBox();
        }
    }else{
        localStorage.setItem("playerlist", lista);
    }
}

function createNameBox(){
    // box with the name and button
    caja = `<p>${parsedlist[i]}</p>
<button><img src="imagenes/minus.png" class="minus-button"></button>`;
    let div = document.createElement("div");
    content.insertBefore(div, area.nextSibling);
    div.classList.add("added-name");
    div.innerHTML = caja;
}

// ADD NAME
function addName(){
    let namevalue = inputnamebox.value // take the name from the input
    lista.push(namevalue); // add the name to an array (the player list)

    // box with the name and button
    inputnamebox.value = ""; // erase the content in the input box to write again
    caja = `<p>${namevalue}</p>
<button><img src="imagenes/minus.png" class="minus-button"></button>`;
    let div = document.createElement("div");
    content.insertBefore(div, area.nextSibling); // insert the box into the html
    div.classList.add("added-name");
    div.innerHTML = caja;

    //update the localstorage lists
    localStorage.setItem("cemetery", muertos);
    localStorage.setItem("playerlist", JSON.stringify(lista));
}

/* function addName(x){
    // it is probably better to use innerHTML but it is too late for me

    let namevalue = inputnamebox.value // take the name written in the input
    // let namevalue = JSON.parse(localStorage.getItem("playerlist"));
    let div = document.createElement("div"); // create div
    let newnamebox = document.createElement("p"); // create p
    let newnamevalue = document.createTextNode(namevalue); // add the name to the p
    lista.push(namevalue); // add the name to an array (the player list)
    inputnamebox.value = ""; // erase the content in the input box to write again

    let minusbutton = document.createElement("button") // create button
    let icon = document.createElement("img") // create the img element for the icon
    // a fragment will store them until they can be rendered together
    let fragment = document.createDocumentFragment();

    // populate the fragment with the elements
    fragment.appendChild(div);
    div.appendChild(newnamebox);
    div.classList.add("added-name");
    newnamebox.appendChild(newnamevalue);
    div.appendChild(minusbutton);
    minusbutton.appendChild(icon);
    icon.classList.add("minus-button");
    icon.setAttribute("src", "imagenes/minus.png"); // add the icon to the img

    // all elements are inserted at once, as a fragment
    content.insertBefore(fragment, area.nextSibling);

    localStorage.setItem("cemetery", muertos);
    localStorage.setItem("playerlist", JSON.stringify(lista));
    console.log("added " + newnamebox.innerText);
    console.log(localStorage.getItem("playerlist"));
} */

// DELETE NAME
function deleteName(e){
    let name = e.target.parentNode.parentNode.children[0].innerText;
    if(e.target.classList.contains("minus-button")){
        console.log("deleted " + e.target.parentNode.parentNode.children[0].innerText);
        e.target.parentNode.parentNode.remove(); // delete node from html
        lista.splice(lista.indexOf(name), 1); // delete name from list
        localStorage.setItem("playerlist", JSON.stringify(lista));
        localStorage.setItem("cemetery", muertos);
        console.log(localStorage.getItem("playerlist"));
    }
}

// GO BACK
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});


