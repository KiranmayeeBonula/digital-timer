let startTime;
let updatedTime;
let difference = 0;
let timerInterval;
let running = false;

const display = document.getElementById("display");
const alertSound = document.getElementById("alert-sound");

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    running = true;
    startTime = new Date().getTime() - difference;
    timerInterval = setInterval(updateDisplay, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
});

document.getElementById("reset").addEventListener("click", () => {
  running = false;
  clearInterval(timerInterval);
  difference = 0;
  display.innerHTML = "00:00:00";
  alertSound.play();
});

function updateDisplay() {
  updatedTime = new Date().getTime() - startTime;
  difference = updatedTime;

  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  display.innerHTML = `${hours}:${minutes}:${seconds}`;
}
