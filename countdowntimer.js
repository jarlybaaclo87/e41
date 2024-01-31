window.onload = async () => {
    let countdowntimer = 10;

    async function startTimer() {
        while (countdowntimer >=0) {
            await new Promise((resolve) => setTimeout(resolve, 1000)); 
            countdowntimer -= pass1(); 
        }
        return 'Your time is over!!!'; 
    }
    //
    try {
        const result = await startTimer(); 
        logResult(result);
    } catch (error) {
        console.error(error); 
    }
    //
    function pass1() {
        document.getElementById("timerDisplay").innerHTML = countdowntimer;
        console.log(countdowntimer);
        return 1;
    }
    //
    function logResult(value) {
        document.getElementById("resultDisplay").innerHTML = value;
    }
}
