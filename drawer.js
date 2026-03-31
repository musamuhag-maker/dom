

const btn = document.querySelector("#btn")
const closeBtn = document.querySelector("#close")
const navItems = document.querySelector("#nav-items")


btn.addEventListener("click", function(){
    navItems.classList.remove('translate-x-[-200%]')
})  

closeBtn.addEventListener("click", function(){
    navItems.classList.add('translate-x-[-200%]')
})  