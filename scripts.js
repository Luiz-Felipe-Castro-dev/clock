const timer = document.getElementsByClassName("timer")
const play = document.getElementById("playButton")
const stop1 = document.getElementById("stopButton")
const pause1 = document.getElementById("PauseButton")

timer[0].textContent = "bruh"


let dateTimerBruv = "";
let booleanThing = true;
let runningCount = 0;
let misterVariable = 0;


function setInitalTime() {
    dateTimerBruv = new Date()
    booleanThing = true
}

function countUp() {
    if (booleanThing) {
        setTimeout(function () {
            const whyBruh = new Date()
            // time in seconds
            const timeUpdated = (whyBruh.getTime() - dateTimerBruv.getTime()) / 1000

            // this lets pauses work
            runningCount = Math.floor(timeUpdated) + Math.floor(misterVariable);
            console.log(misterVariable,"bruh");
            console.log(timeUpdated,"started now");
            let usedThing = Math.floor(timeUpdated) + Math.floor(misterVariable);
            console.log(usedThing,"number good")
            if (usedThing >= (60 * 60)) {
                const hours = usedThing / (60 * 60)
                const minutes = usedThing / 60
                const EditedString = String(Math.floor(hours)).padStart(2, '0') +
                    ":" + String(Math.floor(minutes % 60)).padStart(2, '0') + ":" + String(Math.floor(usedThing % 60)).padStart(2, '0')

                timer[0].textContent = EditedString
                document.title = EditedString
                countUp()
                return
            }
            if (usedThing >= 60) {
                const minutes = usedThing / 60
                const EditedString = String(Math.floor(minutes)).padStart(2, '0') + ":" + String(Math.floor(usedThing % 60)).padStart(2, '0')
                timer[0].textContent = EditedString
                document.title = EditedString
                countUp()
                return
            }


            timer[0].textContent = "00:" + String(Math.floor((usedThing))).padStart(2, '0')
            document.title = "00:" + String(Math.floor(usedThing)).padStart(2, '0')
            countUp()
        }, 100)
    }

}
play.addEventListener("click", doEverything)
function doEverything() {
    setInitalTime()
    countUp()
}
stop1.addEventListener("click", StopTime)
function StopTime() {
    booleanThing = false
}
pause1.addEventListener("click", PauseTime)
function PauseTime() {
    booleanThing = !booleanThing
    if (booleanThing) {
        misterVariable = runningCount
        setInitalTime()
        countUp()
    }

}
