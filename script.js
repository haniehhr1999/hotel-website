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
// for reservation ===============================================================================================
var inside1 = document.querySelector('.inside1') //for adults
var inside2 = document.querySelector('.inside2') //for children
var textSelect2 = document.querySelector('#textSelect2') //for adults text
var textSelect1 = document.querySelector('#textSelect1') //for tarikh text


// for adult ============================
var adult = document.querySelector('#adult')
var flag = true
adult.addEventListener('click' , function(){
    var menuAdult = document.querySelector('.menu-adult')

    if (flag == true) {
        menuAdult.style.height = '200px'
        menuAdult.style.padding = '16px'
        flag = false
    }else if (flag == false){
        menuAdult.style.height = '0'
        menuAdult.style.padding = '0'
        flag = true
    }
})

var plusAdult = document.querySelector('.item3-up')
var i = 0
plusAdult.addEventListener('click' , function(){
    i++
    inside1.value = i 
    textSelect2.innerText = `${inside1.value} Adults, ${inside2.value} Children`
})
var minusAdult = document.querySelector('.item1-up')
minusAdult.addEventListener('click' , function(){
    i--
    inside1.value -= 1
    textSelect2.innerText = `${inside1.value} Adults, ${inside2.value} Children`
})

// for children ==========================
var plusChildren = document.querySelector('.item3-down')
var j = 0
plusChildren.addEventListener('click' , function(){
    j++
    inside2.value = j 
    textSelect2.innerText = `${inside1.value} Adults, ${inside2.value} Children`
})
var minusChildren = document.querySelector('.item1-down')
minusChildren.addEventListener('click' , function(){
    j--
    inside2.value -= 1
    textSelect2.innerText = `${inside1.value} Adults, ${inside2.value} Children`
})

// for tables ==========================
var td = document.querySelectorAll('td')
td.forEach(element => {
    var flag = true
    element.addEventListener('click' , function(){
        if (flag == true) {
            element.style.backgroundColor = '#a7856a'
            flag = false
        } else if(flag == false) {
            element.style.backgroundColor = 'transparent'
            flag = true
        }
    })
});


// for calendar ===================================================================================================
var stay = document.querySelector('.stay')
stay.innerHTML = ''

var main = document.querySelector('.main-con')
var close = document.querySelector('.close')
close.addEventListener('click' , function(){
    main.style.height = '0'
    main.style.padding = '0'
    main.style.overflow = 'hidden'
})

var calendar = document.querySelector('#tarikh') //for tarikh
calendar.addEventListener('click' , function(){

    if (flag == true) {
        main.style.height = '280px'
        main.style.paddingTop = '20px'
        main.style.paddingBottom = '20px'
        flag = false
    }else if (flag == false){
        main.style.height = '0'
        main.style.padding = '0'
        flag = true
    }
})


var txtPart1 = document.querySelector('.txt-part1')
var txtPart2 = document.querySelector('.txt-part2')
var maay = document.querySelectorAll('.maay')
maay.forEach(element1 => {
    element1.addEventListener('click' , function(){
        txtPart1.innerHTML = `${element1.innerHTML} May - `
    })
});

var Juune = document.querySelectorAll('.Juune')
Juune.forEach(element2 => {
    element2.addEventListener('click' , function(){
        txtPart2.innerHTML = `${element2.innerHTML} June`
    })
});