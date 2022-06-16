const buttonBurger = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list")
console.log(ulNav)

const buttonI = document.querySelector(".nav-burger > i");
// console.log(buttonI)

const headerContainer = document.querySelector(".header-container")
// console.log(headerContainer)

const bodyDark = document.querySelector("template-dark");

function navAppear(){
    if (ulNav.style.display === "flex") {
        ulNav.style.display ="none";
    } else {
        ulNav.style.display = "flex";
    }
}

function switchButton(){
    buttonI.classList.toggle("fa-angle-up");
    if (buttonI.classList.contains("fa-angle-up")) buttonI.classList.add("active")
    buttonI.classList.toggle("fa-bars");
}

function overflow(){
    if (buttonI.classList.contains("active")) {
        bodyDark.style.overflowY = "hidden";
    }
}

buttonBurger.addEventListener("click", function(event){
    switchButton()
    navAppear()
    overflow()
});
