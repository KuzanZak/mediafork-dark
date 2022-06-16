const buttonBurger = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list")
console.log(ulNav)

const buttonI = document.querySelector(".nav-burger > i");
// console.log(buttonI)

const headerContainer = document.querySelector(".header-container")
console.log(headerContainer)

function navAppear(){
    if (ulNav.style.display === "flex") {
        ulNav.style.display ="none";
    } else {
        ulNav.style.display = "flex";
    }
}

buttonBurger.addEventListener("click", function(event){
    buttonI.classList.toggle("fa-bars");
    buttonI.classList.toggle("fa-angle-up");
    navAppear()
    headerContainer.appendChild(this);
    ulNav.style.position = "absolute";
})

