
let btnOpenMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnOpenMenu.addEventListener('click', ()=>{
    menu.classList.add('abertura')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abertura')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abertura')
})
