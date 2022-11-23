let backbutton = document.querySelector(".back-button");

backbutton.addEventListener("click", () => {
    console.log("ohla");
    window.history.back();
});