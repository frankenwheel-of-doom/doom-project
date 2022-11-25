const backbutton = document.querySelector(".back-button");
backbutton.addEventListener("click", () => {
    console.log("back");
    window.history.back();
});