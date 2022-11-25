const content = document.querySelector("body > section")
const backbutton = document.querySelector(".back-button");
const addbutton = document.querySelector("button img[src*='plus']");
const inputnamebox = document.querySelector("input[type='text']");
const deletebutton = document.querySelector("button img[src*='minus']");
const namebox = document.querySelector(".added-name");
const deadbox = document.querySelector("dead");
// where new elements will appear
const area = content.children[0];
// player list
let lista = [];

(()=>{
    addbutton.addEventListener("click", addName);
    content.addEventListener("click", deleteName);

})();

// ADD NAME
function addName(){
    // it might be better to use innerHTML but it is too late for me

    let namevalue = inputnamebox.value // take the name written in the input
    let div = document.createElement("div"); // create div
    let newnamebox = document.createElement("p"); // create p
    let newnamevalue = document.createTextNode(namevalue); // add the name to the p
    lista.push(namevalue); // add the name to an array (the player list)
    inputnamebox.value = ""; // erase the content in the input box to write again
    console.log(lista);

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
}

// DELETE NAME
function deleteName(e){
    if(e.target.classList.contains("minus-button")){
        console.log("deleted name");
        e.target.parentNode.parentNode.remove();
    }
}

// GO BACK
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});


