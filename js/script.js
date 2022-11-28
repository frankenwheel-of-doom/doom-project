// Esto elige un nombre al azar del array 'names', lo enseña en pantalla y lo elimina de la lista
let names = ['Alba', 'Alexander', 'Arber', 'Arnau', 'Daniel', 'Denis', 'Fabio', 'Freddy', 'Gal', 'Hel', 'Joel', 'Lautaro', 'Manu', 'Nahuel', 'Ema', 'Ro', 'Rosie', 'Sablina', 'Sergi', 'Valeria', 'Victor'];
let choose = document.querySelector('.buttonChoose');
let sacrificeRandom;
let randomName;
let franken = document.querySelector("video")
let lista = JSON.parse(localStorage.getItem("playerlist"));

choose.addEventListener('click', () =>{
    sacrificeRandom = (array) =>{
        if(array.length>1){
            const random = Math.floor(Math.random()*array.length);
            randomName = array.splice(random,1)[0];
            console.log(randomName); 
            console.log(array);
           
        }
    const revealSacrificeDiv = document.createElement("div");
    revealSacrificeDiv.classList.add("random-name-div");
    const revealSacrificeParagraph = document.createElement("p");
    revealSacrificeParagraph.classList.add("random-name");
    revealSacrificeDiv.appendChild(revealSacrificeParagraph);
    const revealSacrificeName = document.createTextNode(randomName);
    revealSacrificeParagraph.appendChild(revealSacrificeName);
    let sevtion = document.querySelector("body");
    const area = sevtion.children[2];

    franken.play();    
    setTimeout(function () {
        sevtion.insertBefore(revealSacrificeDiv, area);
    }, 1000);
    
    setTimeout(function () {
    window.location.href = "sacrificio.html"
    }, 3000);};

sacrificeRandom(lista);})



// ----------------end game pop up--------------------

endGamePopUpFunction = (array) =>{
    if(array.length=1){
        const endGamePopUpContainer = document.createElement("div");
        endGamePopUpContainer.classList.add("end-game-pop-up-container");

        const endGamePopUp = document.createElement("div");
        endGamePopUp.classList.add('end-game-pop-up');
        endGamePopUpContainer.appendChild(endGamePopUp);

        const endGamePopUpParagraph = document.createElement("p");
        endGamePopUpParagraph.classList.add('end-game-pop-up-paragraph');
        endGamePopUpParagraph.innerHTML = 'The last coder left alive is:';
        endGamePopUp.appendChild(endGamePopUpParagraph);

        const endGameWinnerName = document.createTextNode(endGameWinnerName);
        endGameWinnerName.classList.add('random-name')
        endGameWinnerName.innerHTML = array[0]; 
        endGamePopUp.appendChild(endGameWinnerName);

        const playAgainButton = document.createElement("a");
        playAgainButton.classList.add('big-button');
        playAgainButton.innerHTML = "Play Again";
        endGamePopUp.appendChild(playAgainButton);

        let sevtion = document.querySelector('body');
        const area = sevtion.children[2];
        sevtion.insertBefore(endGamePopUpContainer, area);
    }   

endGamePopUpFunction(names);}








//Código para añadir un nombre a una lista    https://www.youtube.com/watch?v=vLfqrEP6weo

/* let addedName=input.value;
function addNames(){
    let list = names.map(name => `<li>${name}</li>`.join(','));
    document.querySelector('.add-new-name') = list;
}
console.log(names);

console.log(addedName);

let buttonAdd = document.querySelector('.button-add');
let input = document.querySelector('input');

buttonAdd.addEventListener('click', () =>{
    names.push(input.value);
    input.value='';
    addNames();
})


//Código para eliminar un nombre de la lista ????

function deleteNames(){
    let buttonDelete = document.querySelector('.buttonDelete');
    let name = document.querySelector('.name');

    buttonDelete.addEventListener('click', ()=>{
        for (let i=0; i < names.length; i++){
        if(names[i] === name){
            names.splice(i,1);
            i--;
            }}    
    })}; */