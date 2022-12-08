'use strict'

const pictures = document.querySelectorAll('.pictures__picture')
const dots = document.querySelectorAll('.dots__dot')
const buttonRight = document.querySelector('.button-right')
const buttonLeft = document.querySelector('.button-left')
let picIndex = 0
let timing = 3000

function restartOrder () {
		picIndex = 0
		pictures[pictures.length-1].classList.remove('open')
		dots[dots.length-1].classList.remove('picked')
}
function closePic() {
	const currentPic = pictures[picIndex] 
	currentPic.classList.remove('open')
	const currentDot = dots[picIndex]
	currentDot.classList.remove('picked')
	picIndex++
}
function openNextPic() {
	const nextPic = pictures[picIndex]
	nextPic.classList.add('open')
	const nextDot = dots[picIndex]
	nextDot.classList.add('picked')
}




let slidePic = () => {
	if (picIndex >= pictures.length-1) {
		restartOrder ()
	} 
	else {
		closePic()
	}
	openNextPic()
}

let autoScroll = setInterval (slidePic, timing) 
let restartTimer


buttonRight.addEventListener('click', rightClick)
buttonLeft.addEventListener('click', leftClick)

function rightClick (e) {
	timerCancel()
	e.preventDefault()
	slidePic()
	startScrollAgain ()
}

function leftClick (e) {
	timerCancel ()
	e.preventDefault()
	if (picIndex == 0) {
		picIndex = pictures.length-1
		pictures[0].classList.remove('open')
		pictures[picIndex].classList.add('open')
		dots[0].classList.remove('picked')
		dots[picIndex].classList.add('picked')
	} 
	else {
		const currentPic = pictures[picIndex] 
	currentPic.classList.remove('open')
	const currentDot = dots[picIndex] 
	currentDot.classList.remove('picked')
	picIndex--
	}
	openNextPic()
	startScrollAgain ()
}

function timerCancel () {
	console.log('autoScroll');
	clearInterval(autoScroll)
	clearTimeout(restartTimer)
}

function startScrollAgain (){
	restartTimer = setTimeout(() => {
		autoScroll = setInterval (slidePic, timing)
		}, 8000)
}