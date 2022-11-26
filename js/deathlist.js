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
let lista = [];
let muertos = [];

(()=>{
    addbutton.addEventListener("click", addName);
    content.addEventListener("click", deleteName);
})();

// ADD NAME
function addName(){
    // it is probably better to use innerHTML but it is too late for me

    let namevalue = inputnamebox.value // take the name written in the input
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
}

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


