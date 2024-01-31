window.onload = async () => { // Using async to make the function asynchronous
    let countdowntimer = 10;

    // Using async function to wait for the countdown to finish
    async function startTimer() {
        while (countdowntimer > 0) {
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Using await to wait for 1 second
            countdowntimer -= pass1(); // Decrement countdown timer
        }
        return 'Your time is over!!!'; // Resolve the promise when countdown is over
    }
    //
    try {
        const result = await startTimer(); // Wait for the timer to finish
        logResult(result); // Log the result
    } catch (error) {
        console.error(error); // Log any errors that occur
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
