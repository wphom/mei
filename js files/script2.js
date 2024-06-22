const backHead = document.getElementById('back-head')
const ear = document.getElementById('ear')
const mouth = document.getElementById('mouth')
const nose = document.getElementById('nose')
const eye = document.getElementById('eye')
const leftHand = document.getElementById('left')
const rightHand = document.getElementById('right')
const text = document.getElementById('text')
const close = document.getElementById('close')

function close() {
    text.style.display = 'none'
}

function open() {
    if (text.style.display === 'block') {
        return
    } else {
        text.style.display = 'block'
    }
}
backHead.addEventListener('click', () => {
    text.style.display = 'block'
})