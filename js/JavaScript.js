const button = document.querySelector(".nav-burger");

const ulNav = document.querySelector(".nav-list")

const ulNavMobile = document.createElement("ul")
const bodyHtml = document.querySelector(".template-dark")
const div = document.querySelector(".hero-banner")
// console.log(ulNavMobile)
document.body.insertBefore(ulNavMobile, div)
// console.log(ulNavMobile)
const buttonI = document.querySelector(".nav-burger > i");
console.log(buttonI)
button.addEventListener("click", function(event){
    ulNavMobile.innerHTML = ulNav.innerHTML
    buttonI.classList.toggle("fa-bars");
    buttonI.classList.toggle("fa-angle-up");

    console.log("click")
})

