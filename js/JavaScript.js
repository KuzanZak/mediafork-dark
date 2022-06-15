const buttonBurger = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list .nav-item .nav-link")
console.log(ulNav)

const buttonI = document.querySelector(".nav-burger > i");
// console.log(buttonI)

const headerContainer = document.querySelector(".header-container")
console.log(headerContainer)

function navAppear(){
    if (ulNav.style.display === "none") {
        ulNav.style.display ="flex";
    } else {
        ulNav.style.display = "none";
    }
}

buttonBurger.addEventListener("click", function(event){
    
    buttonI.classList.toggle("fa-bars");
    buttonI.classList.toggle("fa-angle-up");
    // headerContainer.style.justifyContent ="flex-start";
    navAppear()
    // ulNav.style.display ="flex";
    // ulNav.style.marginLeft ="0%"
    // console.log("click")
})

