document.addEventListener('DOMContentLoaded', () => {
    let startButton = document.getElementById('startBtn');
    let display = document.getElementsByClassName('time-display')[0];
    let stopButton = document.getElementById('stopBtn');
    let resetButton = document.getElementById('resetBtn');
    let sinterval;
    let forNext = 0;
    function start() {
        let currentTime = 0;
        display.textContent = '0';
        sinterval = setInterval(() => {
            currentTime += 1;
            let Tresult = Transformer(currentTime);
            display.textContent = `${String(Tresult.hours).padStart(2, '0')}:${String(Tresult.minutes).padStart(2, '0')}:${String(Tresult.seconds).padStart(2, '0')}`;
            forNext = currentTime;
        }, 100);
        console.log(`the value of current time is ${currentTime}`);
        console.log(forNext);
        console.log(typeof (forNext));
    }
    function stop() {
        console.log(forNext);
        let Tresult = Transformer(forNext);
        display.textContent = `${String(Tresult.hours).padStart(2, '0')}:${String(Tresult.minutes).padStart(2, '0')}:${String(Tresult.seconds).padStart(2, '0')}`;
        clearInterval(sinterval);
    }
    function reset() {
        clearInterval(sinterval);
        display.textContent = '00.00.00';
    }
    if (display) {
        startButton.addEventListener('click', start);
        console.log(display);
    }
    if (display && stopButton) {
        stopButton.addEventListener('click', stop);
    }
    if (display && resetButton) {
        resetButton.addEventListener('click', reset);
    }
    function Transformer(sec) {
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        if (sec < 60) {
            seconds = sec;
        }
        else if (sec >= 60 && sec < 3600) {
            seconds = sec % 60;
            minutes = Math.floor(sec / 60);
            hours = 0;
        }
        else if (sec >= 3600) {
            seconds = sec % 60;
            minutes = Math.floor((sec % 3600) / 60);
            hours = Math.floor(sec / 3600);
        }
        return { hours, minutes, seconds };

    }
})