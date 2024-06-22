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
let winWidth = window.innerWidth

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
    text1.style.transform = 'translate(-600px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoom2() {
    box.style.transform = 'translate(-400px, 300px)'
    text1.style.transform = 'translate(200px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoom3() {
    box.style.transform = 'translate(-550px, 0px)'
    text1.style.transform = 'translate(100px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoom4() {
    box.style.transform = 'translate(-500px, -300px)'
    text1.style.transform = 'translate(100px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoom5() {
    box.style.transform = 'translate(500px, -300px)'
    text1.style.transform = 'translate(-500px, 0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoom6() {
    box.style.transform = 'translate(500px, 0px)'
    text1.style.transform = 'translate(-600px,0px)'
    text1.style.height = '650px'
    text1.style.width = '500px'
    txt.style.opacity = '100'
    text1.style.opacity = '100'
    ret.style.opacity = '100'
    btns.style.display = 'none'
    ret.style.left = '-5%'
    ret.style.top = '-5%'
}
function zoomCenter() {
    text1.style.height = '650px'
    text1.style.width = '500px'
    text1.style.opacity = '100'
    txt.style.opacity = '100'
    ret.style.opacity = '100'
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
    txt.textContent = 'С помощью органов зрения человек получает до 90% информации об окружающем мире. Это делает глаза одними из важнейших анализаторов в повседневной жизни. В отличие от других органов чувств, зрение человека позволяет не только распознавать объект, но также определять его расположение, следить за перемещением. Поэтому значение зрения для человека невозможно переоценить, а его ухудшение или потеря является большой проблемой.'
    if (window.innerWidth > 1023) {
        zoom1()
    } else {
        zoomCenter()
    }
    
})
redBtn.addEventListener('click', () => {
    red.style.width = '230px'
    red.style.height = '230px'
    red.style.transform = 'translate(-10px, -110px)'
    mouth.style.width = '215px'
    mouth.style.height = '215px'
    mouth.style.transform = 'translate(8px, 7px)'
    txt.textContent = 'Вкус — ощущение, возникающее при действии различных веществ преимущественно на рецепторы вкуса (расположенные на вкусовых луковицах языка, а также задней стенки глотки, мягкого нёба, миндалины, надгортанника). Кроме сладкого, горького, кислого, соленого вкуса, современные люди в разных странах выделяют также умами (еще его называют вкусом мяса), терпкий, жгучий, мятный, щелочной, металлический и др. вкусы.'
    if (window.innerWidth > 1023) {
        zoom2()
    } else {
        zoomCenter()
    }
    
})
orangeBtn.addEventListener('click', () => {
    orange.style.width = '230px'
    orange.style.height = '230px'
    orange.style.transform = 'translate(30px, -50px)'
    lungs.style.width = '215px'
    lungs.style.height = '215px'
    lungs.style.transform = 'translate(8px, 7px)'
    txt.textContent = 'Органы равновеесия, воспринимают изменения положения тела в пространстве, а также действия на организм ускорений и изменений гравитационных сил. Органы равновесия беспозвоночных – статоцисты, у позвоночных – вестибулярный аппарат. У последних органы равновесия связаны с мозжечком и ретикулярной формацией, что обусловливает координацию их деятельности с другими сенсорными системами. Взаимодействие между вестибулярными центрами и нервными механизмами, связанными с работой мышечной системы, обеспечивает тонкую регуляцию тонуса мышц. Совокупность сигналов от статорецепторов лабиринтов, проприо- и механорецепторов, от глаз вызывает статокинетические рефлексы, которые регулируют у животных и человека нормальную ориентацию по отношению к направлению силы тяжести.'
    if (window.innerWidth > 1023) {
        zoom3()
    } else {
        zoomCenter()
    }
    
})
yellowBtn.addEventListener('click', () => {
    yellow.style.width = '230px'
    yellow.style.height = '230px'
    yellow.style.transform = 'translate(-10px, 10px)'
    ear.style.width = '215px'
    ear.style.height = '215px'
    ear.style.transform = 'translate(8px, 7px)'
    txt.textContent = 'Слух имеет большее значение для основополагающих признаков человека, как социального существа, по сравнению с любым другим чувством. Он служит для предостережения об опасности, для приема информации, для овладения знаниями, для социальной коммуникации, и может вызывать очень сильные эмоции.'
    if (window.innerWidth > 1023) {
        zoom4()
    } else {
        zoomCenter()
    }
    
})
greenBtn.addEventListener('click', () => {
    green.style.width = '230px'
    green.style.height = '230px'
    green.style.transform = 'translate(-60px, 20px)'
    nose.style.width = '215px'
    nose.style.height = '215px'
    nose.style.transform = 'translate(8px, 7px)'
    txt.textContent = 'Обоняние — это способность чувствовать запахи. Есть много приятных запахов: запах разных цветов, запах леса, запах вкусной пищи. Но некоторые вещества пахнут неприятно. Это предупреждение об опасности: о том, что пища не пригодна для еды, или о том, что в воздухе находится вредное для человека вещество.'
    if (window.innerWidth > 1023) {
        zoom5()
    } else {
        zoomCenter()
    }
    
})
blueBtn.addEventListener('click', () => {
    blue.style.width = '230px'
    blue.style.height = '230px'
    blue.style.transform = 'translate(-100px, -45px)'
    hand.style.width = '215px'
    hand.style.height = '215px'
    hand.style.transform = 'translate(8px, 7px)'
    txt.textContent = 'Осязание — способность человека воспринимать прикосновение, боль, тепло, холод. Органом осязания служит кожа. Кожа позволяет человеку узнать многое о предметах, которые его окружают. На ощупь можно определить форму и размеры предмета, узнать, гладкий предмет или шершавый, холодный или тёплый.'
    if (window.innerWidth > 1023) {
        zoom6()
    } else {
        zoomCenter()
    }
    
})