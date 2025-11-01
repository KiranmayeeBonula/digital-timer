let [hours, minutes, seconds] = [0, 0, 0];
let timerRef = document.getElementById("display");
let interval = null;
let running = false;

document.getElementById("start").addEventListener("click", () => {
  if (!running) {
    running = true;
    interval = setInterval(displayTimer, 1000);
  }
});

document.getElementById("pause").addEventListener("click", () => {
  running = false;
  clearInterval(interval);
});

document.getElementById("reset").addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  [hours, minutes, seconds] = [0, 0, 0];
  timerRef.innerHTML = "00:00:00";
});

function displayTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  timerRef.innerHTML = `${h}:${m}:${s}`;
}