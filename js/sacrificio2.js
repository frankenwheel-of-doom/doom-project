let eventzone = document.querySelector("div.buttons-kill"); // container of the buttons
let stab = document.querySelector('.stab');
let sound1 = new Audio ('sonidos/sound-stab.mp3');
let electrocute = document.querySelector('.electrocute');
let sound2 = new Audio ('sonidos/sound-electrocute.mp3');
let poison = document.querySelector('.poison');
let sound3 = new Audio ('sonidos/sound-machine-gun.mp3');

let sacrificed = JSON.parse(localStorage.getItem("cemetery")); //get all dead people
let codername = document.querySelector("h1"); // get the h1 element
// last person that was chosen to die is the one we are killing now
codername.innerHTML = sacrificed[sacrificed.length-1]; // last name of all dead people appears in the h1

eventzone.addEventListener('click', (e) =>{
    console.log(e.target);
if(e.target == stab || e.target.parentNode == stab){
    sound1.play();
    document.getElementById("prueba1").style.display="block";
    document.getElementById('prueba').style.display='none';
} 
else if(e.target == electrocute || e.target.parentNode == electrocute){
    sound2.play();
    document.getElementById("prueba2").style.display="block";
    document.getElementById('prueba').style.display='none';
}
else if(e.target == poison || e.target.parentNode == poison){
    sound3.play();
    document.getElementById("prueba3").style.display="block";
    document.getElementById('prueba').style.display='none';
}
setTimeout(function () {
    window.location.href = "juego.html"
}, 3000);
}, { once: true });
