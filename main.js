

//  1.1 ЗАДАЧА 

// const prices = [120, 45, 300, 80, 15];

// const expensive = prices.filter(price => price > 50);
// console.log(expensive);

// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total);

// const maxPrice = Math.max(...prices);
// console.log(maxPrice);

//  1.2 ЗАДАЧА 

// function fixName(name) {
//   return name[0].toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(fixName('жУмАбЕК'));

// 1.3 ЗАДАЧА

// function multiplier(n) {
//   return function(x) {
//     return x * n;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

// const triple = multiplier(3);
// console.log(triple(5));


// 1.4 ЗАДАЧА 

// function sum(n) {
//   if (n <= 1) return n;
//   return n + sum(n - 1);
// }

// console.log(sum(4));


// Часть 2. 


const clickBtn = document.getElementById('clickBtn');
const restartBtn = document.getElementById('restartBtn');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const resultEl = document.getElementById('result');
const dateEl = document.getElementById('date');

let score = 0;
let seconds = 10;
let timerId = null;

function updateScore() {
  scoreEl.textContent = `Клики: ${score}`;
}

function updateTimer() {
  timerEl.textContent = `Осталось: ${seconds} сек`;
}

function startTimer() {
  if (timerId !== null) return;

  timerId = setInterval(() => {
    seconds--;
    updateTimer();

    if (seconds <= 0) {
      clearInterval(timerId);
      timerId = null;
      clickBtn.disabled = true;
      resultEl.textContent = `Время вышло! Твой результат: ${score} кликов`;
      resultEl.classList.remove('hidden');
      dateEl.textContent = new Date().toLocaleString('ru-RU');
      dateEl.classList.remove('hidden');
      restartBtn.classList.remove('hidden');
    }
  }, 1000);
}

clickBtn.addEventListener('click', () => {
  if (seconds <= 0) return;

  score++;
  updateScore();
  startTimer();
});

restartBtn.addEventListener('click', () => {
  score = 0;
  seconds = 10;
  timerId = null;
  updateScore();
  updateTimer();
  resultEl.classList.add('hidden');
  dateEl.classList.add('hidden');
  restartBtn.classList.add('hidden');
  clickBtn.disabled = false;
});