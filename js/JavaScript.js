const mobileButton = document.getElementById("mobile-button");
const mainNav = document.getElementById("main-nav");
const mobileIcon = document.getElementById("mobile-icon");

// function overflow(){
//     if (mainNav.classList.contains("display")) {
//         document.body.classList.add("overflow");
//     } else{
//         document.body.classList.remove("overflow");
//     }
// }

function transition(){
    if (mobileIcon.classList.contains("fa-angle-up")){
        mainNav.classList.add("transition")
    } else{
        mainNav.classList.remove("transition")
    }
}

function switchMobileIcon() {
    if(mobileIcon.classList.contains("fa-bars")) {
        mobileIcon.classList.replace("fa-bars", "fa-chevron-up");
    } else {
        mobileIcon.classList.replace("fa-chevron-up", "fa-bars");
    }
}

function toggleNav(){
    if (window.innerWidth >= 768) return; // si je suis pas sur mobile, je sors de la fonction
    mainNav.classList.toggle("display");
    mobileIcon.classList.toggle("fa-chevron-up");
    mobileIcon.classList.toggle("fa-bars");
    document.body.classList.toggle("overflow")
    // switchMobileIcon()
    // overflow()
    // transition()
};

function resetNew(){
    mainNav.classList.remove("display");
    document.body.classList.remove("overflow");
    mobileIcon.classList.replace("fa-chevron-up", "fa-bars")
}

mobileButton.addEventListener("click", toggleNav)

mainNav.addEventListener("click", function (event){
    if(event.target.hasAttribute("href")) toggleNav();
});

window.addEventListener("resize", function(event){
    if (window.innerWidth >= 768) resetNew();
})

// Services 
const cardsList = document.getElementById("cards-list")
console.log(cardsList)
cardsList.addEventListener("click", function(event){
    if (event.target.classList.contains("card")) console.log("click");
})

