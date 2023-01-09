function hexClock() {
    let date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }

    let clock = hours + minutes + seconds;
    document.body.style.backgroundColor = '#' + clock;
    document.body.innerHTML = '#' + clock;
}

hexClock();
setInterval(hexClock, 1000);