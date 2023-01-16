import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startButtonRef = document.querySelector('[data-start]');
const daysSpanRef = document.querySelector('[data-days]');
const hoursSpanRef = document.querySelector('[data-hours]');
const minutesSpanRef = document.querySelector('[data-minutes]');
const secondsSpanRef = document.querySelector('[data-seconds]');
startButtonRef.disabled = true;
let timerId;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (Date.parse(new Date()) < Date.parse(selectedDates[0])) {
      startButtonRef.disabled = false;
      startButtonRef.addEventListener('click', () => {
        timerId = setInterval(onInterval, 1000);
      });
      function onInterval() {
        const objectTime = convertMs(
          Date.parse(selectedDates[0]) - Date.parse(new Date())
        );
        daysSpanRef.textContent = String(objectTime.days).padStart(2, '0');
        hoursSpanRef.textContent = String(objectTime.hours).padStart(2, '0');
        minutesSpanRef.textContent = String(objectTime.minutes).padStart(
          2,
          '0'
        );
        secondsSpanRef.textContent = String(objectTime.seconds).padStart(
          2,
          '0'
        );
        if (Date.parse(selectedDates[0]) - Date.parse(new Date()) === 0) {
          clearInterval(timerId);
          Notiflix.Notify.success('Time has passed!');
        }
      }
    } else {
      Notiflix.Notify.failure('Please choose a date in the future');
      startButtonRef.disabled = true;
    }
  },
};
flatpickr('input#datetime-picker', options);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
