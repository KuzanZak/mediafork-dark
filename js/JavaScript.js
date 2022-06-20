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

 
const cardsList = document.getElementById("cards-list")
// console.log(cardsList)


const pTimeText = "Our IT expert team is available 24 7 and will support you to solve your problem whenever it comes over."
const pPhoneText = "Designers and developers work together to bring you unique and highly valuable web interfaces declined for all the digital devices available on the market."
const pLightbulbText = "Web design trends are constantly changing. We are always looking for new ways to attract new customers to your business. Let the latest web trends inspire you."


//Modal Web
const iconWeb =  document.getElementById("icon-web");
const divWeb =  document.getElementById("card-web");

const iconWebCross = document.createElement("i")

const pWeb = document.createElement("p");
pWeb.innerText = "The most challenging part of your plan is to spread your ideas and services all over the world. Give us your trust!";
// divWeb.insertBefore(pWeb, iconWeb)
// divWeb.insertBefore(iconWebCross, iconWeb)

const modalWeb = document.createElement("div");
const liWeb = document.getElementById("li-web");
liWeb.insertBefore(modalWeb, divWeb)
modalWeb.appendChild(pWeb)
modalWeb.appendChild(iconWebCross)
modalWeb.classList.add("card-modal")

const titleWebNode = document.querySelector("#card-web .card-ttl").cloneNode(true);
// titleWebNode.classList.add("card-ttl");
// const iconWebNode = document.getElementById("icon-web").cloneNode(true);

cardsList.addEventListener("click", function(event){
    if (event.target.classList.contains("card")) {
        modalWeb.classList.toggle("display");
        modalWeb.insertBefore(titleWebNode, pWeb);

        iconWebCross.classList.add("fa");
        iconWebCross.classList.add("fa-times");
        iconWebCross.classList.add("position");

        iconWeb.classList.toggle("card-icon");
        iconWeb.classList.toggle("card-icon-web")

        // document.body.classList.remove("overflow");
        // modalWeb.insertBefore(iconWebNode, iconWebCross)

    }
})

