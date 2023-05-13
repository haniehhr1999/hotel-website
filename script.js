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
// for suits and description ===================================================================================
var desc = document.querySelectorAll('.description')
var desc1 = document.querySelector('.desc1')
var desc2 = document.querySelector('.desc2')
var desc3 = document.querySelector('.desc3')
var desc4 = document.querySelector('.desc4')
var desc5 = document.querySelector('.desc5')
var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')
var box5 = document.querySelector('.box5')
// for box1 ===========================================
box1.addEventListener('mouseenter' , function(){
    box1.style.backgroundColor = 'transparent'
    desc1.style.height = '208px'
    desc1.style.backgroundColor = 'black'
})
box1.addEventListener('mouseleave' , function(){
    box1.style.backgroundColor = '#ACACAC'
    desc1.style.height = '85px'
    desc1.style.backgroundColor = 'transparent'
})
// for box2 ===========================================
box2.addEventListener('mouseenter' , function(){
    box2.style.backgroundColor = 'transparent'
    desc2.style.height = '208px'
    desc2.style.backgroundColor = 'black'
})
box2.addEventListener('mouseleave' , function(){
    box2.style.backgroundColor = '#ACACAC'
    desc2.style.height = '85px'
    desc2.style.backgroundColor = 'transparent'
})
// for box3 ===========================================
box3.addEventListener('mouseenter' , function(){
    box3.style.backgroundColor = 'transparent'
    desc3.style.height = '208px'
    desc3.style.backgroundColor = 'black'
})
box3.addEventListener('mouseleave' , function(){
    box3.style.backgroundColor = '#ACACAC'
    desc3.style.height = '85px'
    desc3.style.backgroundColor = 'transparent'
})
// for box4 ===========================================
box4.addEventListener('mouseenter' , function(){
    box4.style.backgroundColor = 'transparent'
    desc4.style.height = '208px'
    desc4.style.backgroundColor = 'black'
})
box4.addEventListener('mouseleave' , function(){
    box4.style.backgroundColor = '#ACACAC'
    desc4.style.height = '85px'
    desc4.style.backgroundColor = 'transparent'
})
// for box5 ===========================================
box5.addEventListener('mouseenter' , function(){
    box5.style.backgroundColor = 'transparent'
    desc5.style.height = '208px'
    desc5.style.backgroundColor = 'black'
})
box5.addEventListener('mouseleave' , function(){
    box5.style.backgroundColor = '#ACACAC'
    desc5.style.height = '85px'
    desc5.style.backgroundColor = 'transparent'
})