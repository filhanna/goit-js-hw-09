const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timerId;

stopButton.disabled = true;
startButton.addEventListener('click', onClickStart);
stopButton.addEventListener('click', onClickStop);

function onClickStart(evt) {
  timerId = setInterval(() => {
    body.style = `background-color: ${getRandomHexColor()}`;
  }, 1000);
  stopButton.disabled = false;
  startButton.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onClickStop() {
  clearInterval(timerId);
  stopButton.disabled = true;
  startButton.disabled = false;
}
