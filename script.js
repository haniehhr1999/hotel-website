// for header ==================================================================================================
var header = document.querySelector('header')
window.addEventListener('scroll' , function(){
    if (scrollY > 200) {
        header.style.backgroundColor = '#212121'
    }
    if (scrollY < 200) {
        header.style.backgroundColor = 'transparent'
    }
})
// for menu right ==========================================================================================
var modal = document.querySelector('.modal-black')

var iClose = document.querySelector('.mdi-close')
var menuRight = document.querySelector('.menu-right')
iClose.addEventListener('click' , function(){
    menuRight.style.transform = 'translateX(400px)'
    modal.style.visibility = 'hidden'
    modal.style.opacity = 0
})

var iconHeaderMenu = document.querySelector('.mdi-menu')
iconHeaderMenu.addEventListener('click' , function(){
    menuRight.style.transform = 'translateX(0px)'
    modal.style.visibility = 'visible'
    modal.style.opacity = 1
})

modal.addEventListener('click' , function(){
    menuRight.style.transform = 'translateX(400px)'
    modal.style.visibility = 'hidden'
    modal.style.opacity = 0
})