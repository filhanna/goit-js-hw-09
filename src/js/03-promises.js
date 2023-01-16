import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('.form');
const btnStartRef = document.querySelector('.js-start');

formRef.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const objectPromice = { position, delay };
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(objectPromice);
    } else {
      reject(objectPromice);
    }
  });
}
function onSubmit(evt) {
  evt.preventDefault();
  let delay = Number(evt.currentTarget.delay.value);
  let step = Number(evt.currentTarget.step.value);
  let amount = Number(evt.currentTarget.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        setTimeout(() => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
            useIcon: false,
          });
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
            useIcon: false,
          });
        }, delay);
      });
    delay += step;
  }
}
