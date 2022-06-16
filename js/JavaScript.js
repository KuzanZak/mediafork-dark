const buttonBurger = document.querySelector(".nav-burger");
const ulNav = document.querySelector(".nav-list")
const buttonI = document.querySelector(".nav-burger > i");

function overflow(){
    if (ulNav.classList.contains("display")) {
        document.body.classList.add("overflow");
    } else{
        document.body.classList.remove("overflow");
    }
}

buttonBurger.addEventListener("click", function(event){
    ulNav.classList.toggle("display")
    buttonI.classList.toggle("fa-angle-up");
    buttonI.classList.toggle("fa-bars");
    overflow()
});
