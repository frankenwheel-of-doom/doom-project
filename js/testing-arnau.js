const backbutton = document.querySelector(".back-button");

backbutton.addEventListener("onclick", () => {
    window.history.back();
    location.reload();
})