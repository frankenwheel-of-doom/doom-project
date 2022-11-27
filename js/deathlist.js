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
let caja; 

(()=>{
    displayNames();
    addbutton.addEventListener("click", addName);
    content.addEventListener("click", deleteName);
})();

// for each name in the list, create a box and a button to delete it and display them
function displayNames(){
    if(namelist!=null){
        for(let i = 0; i < parsedlist.length; i++){
            lista.push(parsedlist[i]); // update the array with the local storage info
            caja = `<p>${parsedlist[i]}</p>
            <button><img src="imagenes/minus.png" class="minus-button"></button>`;
            let div = document.createElement("div");
            content.insertBefore(div, area.nextSibling);
            div.classList.add("added-name");
            div.innerHTML = caja;
        }
    }else{
        // if there is no player list, create one
        localStorage.setItem("playerlist", lista); 
    }
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

    //update the localStorage lists
    localStorage.setItem("cemetery", muertos);
    localStorage.setItem("playerlist", JSON.stringify(lista));
    console.log("added: " + lista[lista.length-1]);
    console.log("player list: " + localStorage.getItem("playerlist"));
}

// DELETE NAME
function deleteName(e){
    let name = e.target.parentNode.parentNode.children[0].innerText;
    if(e.target.classList.contains("minus-button")){
        console.log("deleted: " + e.target.parentNode.parentNode.children[0].innerText);
        e.target.parentNode.parentNode.remove(); // delete node from html
        lista.splice(lista.indexOf(name), 1); // delete name from list

        // update the local storage lists
        localStorage.setItem("playerlist", JSON.stringify(lista));
        localStorage.setItem("cemetery", muertos);
        console.log("player list: " + localStorage.getItem("playerlist"));
    }
}

// GO BACK
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});


