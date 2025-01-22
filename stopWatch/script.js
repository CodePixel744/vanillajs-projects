document.addEventListener('DOMContentLoaded', () => {
    let startButton = document.getElementById('startBtn');
    let display = document.getElementsByClassName('time-display')[0];
    let stopButton = document.getElementById('stopBtn');
    let resetButton = document.getElementById('resetBtn');
    let sinterval;
    let currentTime = 0;

    function start() {
        sinterval = setInterval(() => {
            currentTime += 1;
            let Tresult = Transformer(currentTime);
            display.textContent = `${String(Tresult.hours).padStart(2, '0')}:${String(Tresult.minutes).padStart(2, '0')}:${String(Tresult.seconds).padStart(2, '0')}`;
        }, 100);
    }

    function stop() {
        clearInterval(sinterval);
    }

    function reset() {
        clearInterval(sinterval);
        currentTime = 0;
        display.textContent = '00:00:00';
    }

    if (display) {
        startButton.addEventListener('click', start);
    }
    if (display && stopButton) {
        stopButton.addEventListener('click', stop);
    }
    if (display && resetButton) {
        resetButton.addEventListener('click', reset);
    }

    function Transformer(sec) {
        let seconds = sec % 60;
        let minutes = Math.floor((sec % 3600) / 60);
        let hours = Math.floor(sec / 3600);
        return { hours, minutes, seconds };
    }
});
