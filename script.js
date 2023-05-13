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