const buttonBurger = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list .nav-item .nav-link")
console.log(ulNav)

const buttonI = document.querySelector(".nav-burger > i");
// console.log(buttonI)

const headerContainer = document.querySelector(".header-container")
console.log(headerContainer)



buttonBurger.addEventListener("click", function(event){
    
    buttonI.classList.toggle("fa-bars");
    buttonI.classList.toggle("fa-angle-up");
    // headerContainer.style.justifyContent ="flex-start";
    // ulNav.style.display ="flex";
    // ulNav.style.marginLeft ="0%"
    // console.log("click")
})

