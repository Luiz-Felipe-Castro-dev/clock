// startClock() is imported from clock logic

const timer = document.getElementsByClassName("timer")
const play = document.getElementById("playButton")
const pause1 = document.getElementById("PauseButton")

const selecti = document.getElementById('selecti')

const inputTimer = document.getElementById('timerEdit')
const editButton = document.getElementById('editButton')


timer[0].textContent = "bruh"
const time1 = localStorage.getItem("time")
if(time1 && typeof Number(time1) == 'number'){
    function formatTime(string) {
        return String(Math.floor(string)).padStart(2, '0')
    }
    const minutes1 = time1 / 60
    const EditedString = formatTime(minutes1) + ":" + formatTime(time1 % 60)
    timer[0].textContent = EditedString
}

let InitialTime = new Date();
let isClockRunning = false;
let runningCount = 0;
let storedTime = 0;

let editedTime = 0

let category = "D "

let isFirstClick = true


play.addEventListener("click", doEverything)
function doEverything() {
    storedTime = 0

    play.textContent = "Reset"
    pause1.textContent = "Pause"
    if(editedTime>0){
        play.textContent = "play"
        storedTime = editedTime
        editedTime = 0
    }
    if(isFirstClick){
        isFirstClick = false
    }else{
        const time = localStorage.getItem("time")
        if(time && typeof Number(time) == 'number'){
            localStorage.removeItem('time');
        }
    }
    startClock()
}

pause1.addEventListener("click", pauseTime)
function pauseTime() {
    pause1.textContent = isClockRunning ? "Unpause" : "Pause"
    isClockRunning = !isClockRunning
    if (isClockRunning) {
        // this takes the previous running count and stores it before resetting the running count back to stored time + current time
        if(editedTime>0){
            storedTime = editedTime
            editedTime = 0
        }else{

            storedTime = runningCount
        }
        startClock()
    }
}
//

//select

selecti.addEventListener('change', handleSelecti)

function handleSelecti() {
    category = selecti.value
}
//



//edit input

editButton.addEventListener("click",editInput)
function editInput(){
    inputTimer.value

    function convertToSeconds(time) {
        const parts = time.split(':'); // Split the time string by colon
        let seconds = 0;
    
        if (parts.length === 3) {
       
            const hours = parseInt(parts[0], 10);
            const minutes = parseInt(parts[1], 10);
            seconds = parseInt(parts[2], 10) + (hours * 3600) + (minutes * 60);
        } else if (parts.length === 2) {
      
            const minutes = parseInt(parts[0], 10);
            seconds = parseInt(parts[1], 10) + (minutes * 60);
        } else if (parts.length === 1) {
    
            seconds = parseInt(parts[0], 10);
        }
    
        return seconds;
    }
    if(isClockRunning){
        isClockRunning = false
    }
  
    editedTime = convertToSeconds(inputTimer.value)
    if(editedTime)
    localStorage.setItem("time",editedTime)
    timer[0].textContent = inputTimer?.value
}

