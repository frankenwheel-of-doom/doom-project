const content = document.querySelector("body > section")
const backbutton = document.querySelector(".back-button");
const addbutton = document.querySelector("button img[src*='plus']");
const inputnamebox = document.querySelector("input[type='text']");
const deletebutton = document.querySelector("button img[src*='minus']");
const namebox = document.querySelector(".added-name");
const deadbox = document.querySelector("dead");
const area = content.children[2];

let lista = [];

backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});

addbutton.addEventListener("click", ()=> {
    console.log("added name");
    content.insertBefore(namebox, area);
})

deletebutton.addEventListener("click", ()=> {
    console.log("deleted name");
    namebox.remove();
})