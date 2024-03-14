// category type string is imported from scripts

function setInitalTime() {
    InitialTime = new Date()
    isClockRunning = true
    const time = localStorage.getItem("time")
    if(time && typeof Number(time) == 'number'){
        storedTime = Number(time)
    }
}

function countUp() {
    if (isClockRunning) {
        setTimeout(function () {
         
            //helper
            function formatTime(string) {
                return String(Math.floor(string)).padStart(2, '0')
            }
            function setTextContent(currentTime) {
                timer[0].textContent = currentTime
                document.title = category + currentTime
            }
            //

            const currentTime = new Date()
            // time in seconds
            const timeUpdated = (currentTime.getTime() - InitialTime.getTime()) / 1000


            runningCount = timeUpdated + storedTime;


            const hours = runningCount / (60 * 60)
            const minutes = runningCount / 60
            if (runningCount >= (60 * 60)) {

                const EditedString = formatTime(hours) + ":" + formatTime(minutes % 60) + ":" + formatTime(runningCount % 60);

                setTextContent(EditedString)
                countUp()
                return
            }

            const EditedString = formatTime(minutes) + ":" + formatTime(runningCount % 60)
            setTextContent(EditedString)
            localStorage.setItem("time",runningCount)
            countUp()
        }, 100)
    }
}

function startClock() {
    setInitalTime()
    countUp()
}