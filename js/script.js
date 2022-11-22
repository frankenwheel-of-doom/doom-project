// Esto elige un nombre al azar del array 'names'
let names = ['Alba', 'Alexander', 'Arber', 'Arnau', 'Daniel', 'Denis', 'Fabio', 'Freddy', 'Gal', 'Hel', 'Joel', 'Lautaro', 'Manu', 'Nahuel', 'Ema', 'Ro', 'Rosie', 'Sablina', 'Sergi', 'Valeria', 'Victor'];
let choose = document.querySelector('.buttonChoose');
let randomName = '';


choose.addEventListener('click', () =>{
    randomName=names[Math.floor(Math.random()*names.length)];
    console.log(randomName);  
    return randomName;
    });


//Código para añadir un nombre a una lista    https://www.youtube.com/watch?v=vLfqrEP6weo

let addedName=input.value;
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
    })};

    