let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const alertSound = document.getElementById("alert-sound");

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent = 
    `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

pauseBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
  alertSound.play();
});

updateDisplay();
