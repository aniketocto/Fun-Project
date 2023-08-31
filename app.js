const wrapper = document.querySelector('.wrapper')
const question = document.querySelector('.question')
const yesBtn = document.querySelector('#yes')
const noBtn = document.querySelector('#no')
const confirmation = document.querySelector('.confirmation')

const yesAnswer = () => {
    question.style.display = 'none';
    confirmation.style.display = 'block'
}

const noAnswer = () => {
    noBtn.style.position = 'absolute'

    const xPos = Math.floor(Math.random() * wrapper.clientWidth);
    const yPos = Math.floor(Math.random() * wrapper.clientHeight);

    noBtn.style.left = xPos >= wrapper.clientWidth / 2 ? `${xPos - noBtn.clientWidth}px` : `${xPos}px`
    noBtn.style.top = yPos >= wrapper.clientHeight / 2 ? `${yPos - noBtn.clientHeight}px` : `${yPos}px`
}

yesBtn.addEventListener('click', yesAnswer)
noBtn.addEventListener('click', noAnswer)