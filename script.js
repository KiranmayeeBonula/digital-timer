let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function startTimer() {
  if (!running) {
    running = true;
    timer = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;

  // 🎵 Play soft beep sound when timer resets
  const beep = document.getElementById("beep-sound");
  if (beep) beep.play();

  // Reset the timer display
  document.getElementById("timer").innerText = "00:00:00";
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  const formatted =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("timer").innerText = formatted;
}
