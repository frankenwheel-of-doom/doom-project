// Esto elige un nombre al azar del array 'names', lo enseña en pantalla y lo elimina de la lista
let choose = document.querySelector('.buttonChoose');
let sacrificeRandom;
let randomName;
let franken = document.querySelector("video")
let lista = JSON.parse(localStorage.getItem("playerlist"));
let names = ['Alba', 'Alexander', 'Arber', 'Arnau', 'Daniel', 'Denis', 'Fabio', 'Freddy', 'Gal', 'Hel', 'Joel', 'Lautaro', 'Manu', 'Nahuel', 'Ema', 'Ro', 'Rosie', 'Sablina', 'Sergi', 'Valeria', 'Victor'];

let cemetery = localStorage.getItem("cemetery");
let parsedcemetery = JSON.parse(cemetery);
let muertos = new Array;


// ----------------end game pop up--------------------
endGamePopUpFunction = (array) =>{
    if(lista==null){
        localStorage.setItem("playerlist", JSON.stringify(names));
        window.location.reload(); 
    }
    if(cemetery==null){
        localStorage.setItem("cemetery", JSON.stringify(muertos)); 
        window.location.reload(); 
    }
    console.log("lista: "+lista)
    if(array.length==1 /* && document.referrer === 'sacrificio.html' */){
        // const endGamePopUpContainer = document.createElement("div");
        // endGamePopUpContainer.classList.add("end-game-pop-up-container");

        // const endGamePopUp = document.createElement("div");
        // endGamePopUp.classList.add('end-game-pop-up');
        // endGamePopUpContainer.appendChild(endGamePopUp);

        // const endGamePopUpParagraph = document.createElement("p");
        // endGamePopUpParagraph.classList.add('end-game-pop-up-paragraph');
        // endGamePopUpParagraph.innerHTML = 'The last coder left alive is:';
        // endGamePopUp.appendChild(endGamePopUpParagraph);

        // const endGameWinnerNameParagraph = document.createElement("div");
        // endGameWinnerNameParagraph.classList.add("winner-name");
        // endGameWinnerNameParagraph.appendChild(endGamePopUp);

        // const endGameWinnerName = document.createTextNode(array[0]);
        // endGameWinnerName.innerHTML = array[0]; 
        // endGameWinnerNameParagraph.appendChild(endGameWinnerName);

        // const playAgainButton = document.createElement("a");
        // playAgainButton.classList.add('big-button');
        // playAgainButton.innerHTML = "Play Again";
        // endGamePopUp.appendChild(playAgainButton);

        console.log(array.length);

        let popup = 
        `<div class="end-game-pop-up-container">
            <div class="end-game-pop-up">
                <p>The last coder left alive is:</p>
                <p class="winner-name">${array[0]}</p>
                <a href="index.html" class="big-button">Play Again</a>
            </div>
        </div>`;        


        const endGameDiv = document.createElement("div");
        endGameDiv.innerHTML = popup;

        let sevtion = document.querySelector('body');
        const area = sevtion.children[2];
        sevtion.insertBefore(endGameDiv, area);
    }
}
endGamePopUpFunction(lista);

choose.addEventListener('click', () =>{
    sacrificeRandom = (array) =>{
        if(cemetery!=null){
            for(let i = 0; i < parsedcemetery.length; i++){
                muertos.push(parsedcemetery[i]);
            }
        }else{
            localStorage.setItem("cemetery", JSON.stringify(muertos));
            window.location.reload(); 
        }
        if(array.length>1){
            const random = Math.floor(Math.random()*array.length);
            randomName = lista.splice(random,1)[0];
            console.log(randomName+" dies");
            console.log(array);
            muertos.push(randomName);
            // update localstorage
            localStorage.setItem("playerlist", JSON.stringify(lista));
            localStorage.setItem("cemetery", JSON.stringify(muertos)); 
        }else{
            //pop up
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

    let vomitingSound = new Audio("vomiting-02.wav")
    vomitingSound.play();
    
    setTimeout(function () {
    window.location.href = "sacrificio.html"
    }, 3000);
    };

sacrificeRandom(lista);}, { once: true });