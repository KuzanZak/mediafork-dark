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


                            // Modal-time
const divTime =  document.getElementById("card-time");
const iconTime =  document.getElementById("icon-time");

const iconTimeCross =  document.createElement("i");

const pTime = document.createElement("p")
pTime.innerText = "Our IT expert team is available 24 7 and will support you to solve your problem whenever it comes over."

const modalTime = document.createElement("div");
const liTime = document.getElementById("li-time");
liTime.insertBefore(modalTime, divTime)
modalTime.appendChild(pTime)
modalTime.appendChild(iconTimeCross)
modalTime.classList.add("card-modal")

const titleTimeNode = document.querySelector("#card-time .card-ttl").cloneNode(true)

// Modal-phone
const divPhone = document.getElementById("card-phone");
const iconPhone = document.getElementById("icon-phone");
const iconPhoneCross = document.createElement("i");
const pPhone = document.createElement("p");
pPhone.innerText = "Designers and developers work together to bring you unique and highly valuable web interfaces declined for all the digital devices available on the market.";

const modalPhone = document.createElement("div");
const liPhone = document.getElementById("li-phone");
liPhone.insertBefore(modalPhone, divPhone);
modalPhone.appendChild(pPhone);
modalPhone.appendChild(iconPhoneCross);
modalPhone.classList.add("card-modal")

const titlePhoneNode = document.querySelector("#card-phone .card-ttl").cloneNode(true);

// Modal-lightbulb
const divLightbulb = document.getElementById("card-lightbulb");
const iconLightbulb = document.getElementById("icon-lightbulb");
const iconLightbulbCross = document.createElement("i");
const pLightbulb = document.createElement("p");
pLightbulb.innerText = "Designers and developers work together to bring you unique and highly valuable web interfaces declined for all the digital devices available on the market.";

const modalLightbulb = document.createElement("div");
const liLightbulb = document.getElementById("li-lightbulb");
liLightbulb.insertBefore(modalLightbulb, divLightbulb);
modalLightbulb.appendChild(pLightbulb);
modalLightbulb.appendChild(iconLightbulbCross);
modalLightbulb.classList.add("card-modal")

const titleLightbulbNode = document.querySelector("#card-phone .card-ttl").cloneNode(true);

                            // Script
function crossWeb(){
    iconWebCross.classList.add("fa");
    iconWebCross.classList.add("fa-times");
    iconWebCross.classList.add("position");
}
function crossTime(){
    iconTimeCross.classList.add("fa");
    iconTimeCross.classList.add("fa-times");
    iconTimeCross.classList.add("position");
}
function crossPhone(){
    iconPhoneCross.classList.add("fa");
    iconPhoneCross.classList.add("fa-times");
    iconPhoneCross.classList.add("position");
}
function crossLightbulb(){
    iconLightbulbCross.classList.add("fa");
    iconLightbulbCross.classList.add("fa-times");
    iconLightbulbCross.classList.add("position");
}

cardsList.addEventListener("click", function(event){
    if (event.target == document.getElementById("card-web")) {
        modalWeb.classList.toggle("display");
        modalWeb.insertBefore(titleWebNode, pWeb);
        crossWeb();
        iconWeb.classList.toggle("card-icon");
        iconWeb.classList.toggle("card-icon-web");
    }
})

cardsList.addEventListener("click", function(event){
    if (event.target == document.getElementById("card-time")) {
        modalTime.classList.toggle("display");
        modalTime.insertBefore(titleTimeNode, pTime);
        modalTime.style.marginLeft="-27.7rem";
        iconTime.style.marginLeft= "-30rem"
        crossTime();
        iconTime.classList.toggle("card-icon");
        iconTime.classList.toggle("card-icon-web");
    }
});

cardsList.addEventListener("click", function(event){
    if (event.target == document.getElementById("card-phone")) {
        modalPhone.classList.toggle("display");
        modalPhone.insertBefore(titlePhoneNode, pPhone);
        modalPhone.style.marginTop= "-40rem"
        iconPhone.style.marginTop= "-20rem"
        crossPhone();
        iconPhone.classList.toggle("card-icon");
        iconPhone.classList.toggle("card-icon-web");
    }
});

cardsList.addEventListener("click", function(event){
    if (event.target == document.getElementById("card-lightbulb")) {
        modalLightbulb.classList.toggle("display");
        modalLightbulb.insertBefore(titleLightbulbNode, pLightbulb);
        modalLightbulb.style.marginTop= "-40rem"
        iconLightbulb.style.marginTop= "-20rem"
        modalLightbulb.style.marginLeft="-27.7rem"
        iconLightbulb.style.marginLeft= "-30rem"
        crossLightbulb();
        iconLightbulb.classList.toggle("card-icon");
        iconLightbulb.classList.toggle("card-icon-web");
    }
});