let hours = 00;
let minutes = 00;
let seconds = 00;
let milsec = 00;

const appendHours = document.getElementById("hours");
const appendMinutes = document.getElementById("minutes");
const appendMilsec = document.getElementById("milsec");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let Interval;

buttonStart.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(Interval);
};

buttonReset.onclick = function () {
  clearInterval(Interval);
  milsec = "00";
  seconds = "00";
  minutes = "00";
  hours = "00";
  appendMilsec.innerHTML = milsec;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
  appendHours.innerHTML = hours;
};

function startTimer() {
  milsec++;

  if (milsec <= 9) {
    appendMilsec.innerHTML = "0" + milsec;
  }

  if (milsec > 9) {
    appendMilsec.innerHTML = milsec;
  }

  if (milsec > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    milsec = 0;
    appendMilsec.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }

  if (seconds > 59) {
    console.log("minutes");
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }

  if (minutes > 59) {
    console.log("minutes");
    hours++;
    appendHours.innerHTML = "0" + hours;
    minutes = 0;
    appendMinutes.innerHTML = "0" + 0;
  }

  if (hours > 9) {
    appendHours.innerHTML = hours;
  }
}
