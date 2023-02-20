const timeLeft = document.getElementById('time-left')

const birthday = new Date('02/23/2023')
const second = 1000    // a second is 1000 milliseconds
const minute = second * 60
const hour = minute * 60
const day = hour * 24 // milliseconds
let timerId


function countDown() {
    const today = new Date()
    const timeSpan = birthday - today

    if (timeSpan <= -day) {
        timeLeft.innerHTML = "Hope you had a nice Birthday :)"
        clearInterval(timerId)
        return
    }

    else if (timeSpan <= 0) {
        timeLeft.innerHTML = "Happy Birthday!!! I Love You So Much, Thank You For Finding Your Way Into My Life :)"
        clearInterval(timerId)
        return
    }

    const days = Math.floor(timeSpan / day)
    const hours = Math.floor((timeSpan % day) / hour)
    const minutes = Math.floor((timeSpan % hour) / minute)
    const seconds = Math.floor((timeSpan % minute) / second)

    timeLeft.innerHTML = days + 'days' + ' ' + hours + 'hours' + ' '
    + minutes + 'minutes' +  ' ' + seconds + 'seconds'
}

setInterval(countDown, second)