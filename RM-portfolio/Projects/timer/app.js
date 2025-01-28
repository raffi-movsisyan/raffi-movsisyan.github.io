let time = document.getElementById('time');
let go = document.getElementById('go');
let stop = document.getElementById('stop');
let laps = document.getElementById('laps');
let isRunning = false; // To track if the timer is running
let intervalId = null; // To store the interval ID
let lap = 1;

go.addEventListener('click', function () {
  if (!isRunning) {
    // Start the timer
    isRunning = true;
    go.innerText = 'LAP';
    intervalId = setInterval(function () {
      time.innerText = parseInt(time.innerText) + 1;
    }, 1000);
  } else {
    // Add a lap
    let span = document.createElement('span');
    span.innerHTML = `<b>Lap ${lap}: on second ${time.innerText}</b>`;
    laps.appendChild(span);
    lap++;
  }
});

stop.addEventListener('click', function () {
  if (isRunning) {
    // Stop the timer
    clearInterval(intervalId);
    isRunning = false;
    go.innerText = 'GO';
  }
});
