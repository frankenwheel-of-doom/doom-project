// INSERT THE AUDIO

let audioelement = document.createElement("audio");
audioelement.innerHTML = `<source src="sonidos/haunted-house.mp3" type="audio/flac">`
let body = document.querySelector("body");
let insertzone = body.children[body.length];
body.insertBefore(audioelement, insertzone);
let source = document.querySelector("audio > source");

// SONG
source.src = "sonidos/ground-noises.mp3"; 

// PLAY THE AUDIO

let audio = document.querySelector("audio");
musicTime = JSON.parse(localStorage.getItem("music"));
console.log("music was left at time: " + musicTime)
audio.currentTime = musicTime;
audio.play();
audio.loop = true;
audio.volume = 0.2;


addEventListener("click", musicCurrentTime);
function musicCurrentTime(){
    if (musicTime == null){
        localStorage.setItem("music", 0);
        window.location.reload();
    }else{
        localStorage.setItem("music", JSON.stringify(audio.currentTime));
        console.log(audio.currentTime);
    }
};