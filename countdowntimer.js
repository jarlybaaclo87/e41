
window.onload = () => {
    let countdowntimer = 10;
    let timerPromise = new Promise((myResolve, myReject) => {
        const timer = setInterval(() => {
            if (countdowntimer <= 0) {
                myResolve('Your time is over!!!');
                clearInterval(timer);
            }
            countdowntimer -= pass1();
        }, 100);
    });

    timerPromise.then((_value) => {
        logResult(_value);
    });

    function pass1() {
        document.getElementById("timerDisplay").innerHTML = countdowntimer;
        console.log(countdowntimer);
        return 1;
    }

    function logResult(_value) {
        document.getElementById("resultDisplay").innerHTML = _value;
    }
}

    