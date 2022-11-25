const content = document.querySelector("body > section")
const backbutton = document.querySelector(".back-button");
const addbutton = document.querySelector("button img[src*='plus']");
const inputnamebox = document.querySelector("input[type='text']");
const deletebutton = document.querySelector("button img[src*='minus']");
const namebox = document.querySelector(".added-name");
const deadbox = document.querySelector("dead");
// where new elements will appear
const area = content.children[0]; 

let lista = [];

// ADD
addbutton.addEventListener("click", ()=> {
    // DECLARE ELEMENTS

    let namevalue = inputnamebox.value
    let div = document.createElement("div");
    let newnamebox = document.createElement("p");
    // let newnamevalue = document.createTextNode(lista[lista.length-1]);
    let newnamevalue = document.createTextNode(namevalue);
    lista.push(namevalue);
    inputnamebox.value = "";
    console.log(lista);

    let minusbutton = document.createElement("button")
    let icon = document.createElement("img")
    // a fragment will store them until they can be rendered together
    let fragment = document.createDocumentFragment();

    // populate the fragment with the elements
    fragment.appendChild(div);
    div.appendChild(newnamebox);
    div.classList.add("added-name");
    newnamebox.appendChild(newnamevalue);
    div.appendChild(minusbutton);
    minusbutton.classList.add("minus-button");
    minusbutton.appendChild(icon);
    icon.setAttribute("src", "imagenes/minus.png");

    // all elements are inserted at once, as a fragment
    content.insertBefore(fragment, area.nextSibling);

    console.log("added name");
})

// DELETE
/* deletebutton.addEventListener("click", ()=> {
    console.log("deleted name");
    namebox.remove();
}) */

content.on("click", deletebutton, function (){
    console.log("deleted name")
});

// GO BACK
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});

// pruebas

