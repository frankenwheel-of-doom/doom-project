// Esto elige un nombre al azar del array 'names'
let names = ['Alba', 'Alexander', 'Arber', 'Arnau', 'Daniel', 'Denis', 'Fabio', 'Freddy', 'Gal', 'Hel', 'Joel', 'Lautaro', 'Manu', 'Nahuel', 'Ema', 'Ro', 'Rosie', 'Sablina', 'Sergi', 'Valeria', 'Victor'];
function random_name(names){
    return names[Math.floor(Math.random()*names.length)];
}

console.log(random_name(names));



//Código para añadir un nombre a una lista    https://www.youtube.com/watch?v=vLfqrEP6weo

function addNames(){
    let template = names.map(name => `<li>${name}</li>`.join(','));
    document.querySelector('ul').innerHTML = template;
}

addNames();

let buttonAdd = document.querySelector('.buttonAdd');
let input = document.querySelector('.input');

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
    })};

    