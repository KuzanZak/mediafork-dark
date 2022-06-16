const buttonBurger = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list")
console.log(ulNav)

const buttonI = document.querySelector(".nav-burger > i");
// console.log(buttonI)

const headerContainer = document.querySelector(".header-container")
// console.log(headerContainer)

const bodyDark = document.body;

function navAppear(){
    ulNav.classList.toggle("display")
}

function switchButton(){
    buttonI.classList.toggle("fa-angle-up");
    buttonI.classList.toggle("fa-bars");
}

function overflow(){
    if (ulNav.classList.contains("display")) {
        bodyDark.classList.add("overflow");
    }
}

buttonBurger.addEventListener("click", function(event){
    switchButton()
    navAppear()
    overflow()
});
