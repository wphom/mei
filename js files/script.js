const purpleBtn = document.getElementById('purple-btn')
const purple = document.getElementById('purple')
const redBtn = document.getElementById('red-btn')
const red = document.getElementById('red')
const orangeBtn = document.getElementById('orange-btn')
const orange = document.getElementById('orange')
const yellowBtn = document.getElementById('yellow-btn')
const yellow = document.getElementById('yellow')
const greenBtn = document.getElementById('green-btn')
const green = document.getElementById('green')
const blueBtn = document.getElementById('blue-btn')
const blue = document.getElementById('blue')
const box = document.getElementById('container')
const text1 = document.getElementById('text-area1')
const btns = document.getElementById('btns')
const txt = document.getElementById('txt')
const ret = document.getElementById('return')
const eye = document.getElementById('purple-img')
const mouth = document.getElementById('red-img')
const lungs = document.getElementById('orange-img')
const ear = document.getElementById('yellow-img')
const nose = document.getElementById('green-img')
const hand = document.getElementById('blue-img')

function purpleBack() {
    purple.style.width = '150px'
    purple.style.height = '150px'
    purple.style.transform = 'translate(0px, 0px)'
    eye.style.width = '135px'
    eye.style.height = '135px'
    eye.style.transform = 'translate(8px, 7px)'
}
function redBack() {
    red.style.width = '150px'
    red.style.height = '150px'
    red.style.transform = 'translate(0px, 0px)'
    mouth.style.width = '135px'
    mouth.style.height = '135px'
    mouth.style.transform = 'translate(8px, 7px)'
}
function orangeBack() {
    orange.style.width = '150px'
    orange.style.height = '150px'
    orange.style.transform = 'translate(0px, 0px)'
    lungs.style.width = '135px'
    lungs.style.height = '135px'
    lungs.style.transform = 'translate(8px, 7px)'
}
function yellowBack() {
    yellow.style.width = '150px'
    yellow.style.height = '150px'
    yellow.style.transform = 'translate(0px, 0px)'
    ear.style.width = '135px'
    ear.style.height = '135px'
    ear.style.transform = 'translate(8px, 7px)'
}
function greenBack() {
    green.style.width = '150px'
    green.style.height = '150px'
    green.style.transform = 'translate(0px, 0px)'
    nose.style.width = '135px'
    nose.style.height = '135px'
    nose.style.transform = 'translate(8px, 7px)'
}
function blueBack() {
    blue.style.height = '150px'
    blue.style.width = '150px'
    blue.style.transform = 'translate(0px, 0px)'
    hand.style.width = '135px'
    hand.style.height = '135px'
    hand.style.transform = 'translate(8px, 7px)'
}

function zoom1() {
    box.style.transform = 'translate(400px, 300px)'
    text1.style.transform = 'translate(-400px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '240px'
    ret.style.top = '30px'
}
function zoom2() {
    box.style.transform = 'translate(-400px, 300px)'
    text1.style.transform = 'translate(400px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '1040px'
    ret.style.top = '30px'
}
function zoom3() {
    box.style.transform = 'translate(-550px, 0px)'
    text1.style.transform = 'translate(500px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '1135px'
    ret.style.top = '30px'
}
function zoom4() {
    box.style.transform = 'translate(-500px, -300px)'
    text1.style.transform = 'translate(300px, 100px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '940px'
    ret.style.top = '130px'
}
function zoom5() {
    box.style.transform = 'translate(500px, -300px)'
    text1.style.transform = 'translate(-300px, 100px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '340px'
    ret.style.top = '130px'
}
function zoom6() {
    box.style.transform = 'translate(500px, 0px)'
    text1.style.transform = 'translate(-400px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '240px'
    ret.style.top = '30px'
}

ret.addEventListener('click', () => {
    btns.style.display = 'block'
    text1.style.height = '0px'
    text1.style.width = '0px'
    text1.style.opacity = '0'
    box.style.transform = 'translate(0px, 0px)'
    ret.style.opacity = '0'
    purpleBack()
    redBack()
    orangeBack()
    yellowBack()
    greenBack()
    blueBack()
})

purpleBtn.addEventListener('click', () => {
    purple.style.width = '230px'
    purple.style.height = '230px'
    purple.style.transform = 'translate(-80px, -120px)'
    eye.style.width = '215px'
    eye.style.height = '215px'
    eye.style.transform = 'translate(8px, 7px)'
    zoom1()
})
redBtn.addEventListener('click', () => {
    red.style.width = '230px'
    red.style.height = '230px'
    red.style.transform = 'translate(-10px, -110px)'
    mouth.style.width = '215px'
    mouth.style.height = '215px'
    mouth.style.transform = 'translate(8px, 7px)'
    zoom2()
})
orangeBtn.addEventListener('click', () => {
    orange.style.width = '230px'
    orange.style.height = '230px'
    orange.style.transform = 'translate(30px, -50px)'
    lungs.style.width = '215px'
    lungs.style.height = '215px'
    lungs.style.transform = 'translate(8px, 7px)'
    zoom3()
})
yellowBtn.addEventListener('click', () => {
    yellow.style.width = '230px'
    yellow.style.height = '230px'
    yellow.style.transform = 'translate(-10px, 10px)'
    ear.style.width = '215px'
    ear.style.height = '215px'
    ear.style.transform = 'translate(8px, 7px)'
    zoom4()
})
greenBtn.addEventListener('click', () => {
    green.style.width = '230px'
    green.style.height = '230px'
    green.style.transform = 'translate(-60px, 20px)'
    nose.style.width = '215px'
    nose.style.height = '215px'
    nose.style.transform = 'translate(8px, 7px)'
    zoom5()
})
blueBtn.addEventListener('click', () => {
    blue.style.width = '230px'
    blue.style.height = '230px'
    blue.style.transform = 'translate(-100px, -45px)'
    hand.style.width = '215px'
    hand.style.height = '215px'
    hand.style.transform = 'translate(8px, 7px)'
    zoom6()
})