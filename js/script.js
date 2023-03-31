const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonStop.classList.remove('hide')

  countDown()
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide') 
  buttonPlay.classList.remove('hide')
  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () => {
  resetControls()
  resetTimer()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOff.classList.add('hide')
  buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
  let newMinutes = prompt("Quantos minutos?")
  if(!newMinutes){
    resetTimer()
    return
  }
  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})


function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if(minutes <= 0) {
      resetControls()
      return
    }

    if(seconds <= 0) {
      seconds = 10
      --minutes
    }

    updateTimerDisplay(minutes, seconds - 1)
    countDown()
  }, 1000)
}

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonStop.classList.add('hide')

  updateTimerDisplay(minutesDisplay.textContent, 0)
}

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}