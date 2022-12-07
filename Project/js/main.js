// @ts-nocheck
const inputs = document.querySelectorAll('.main__inputs input')
const signal = new Audio('./audio/signal.mp3')

let time = 0;
let count = 0;

setTimeout(function run() {
   showTime(time)
   time -= 1;
   if (time < 0) {
      time = 0;
      if (count > 0) {
         console.log(count)

         signal.play()
      }
      setTimeout(run, 1000);
   } else {
      setTimeout(run, 1000);
   }
}, 0)


const showTime = (time) => {
   const hours = Math.floor(time / 3600) < 9 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
   const minutes = Math.floor((time - hours * 3600) / 60) < 9 ? '0' + Math.floor((time - hours * 3600) / 60) : Math.floor((time - hours * 3600) / 60);
   const seconds = (time - hours * 3600 - minutes * 60) < 9 ? '0' + (time - hours * 3600 - minutes * 60) : (time - hours * 3600 - minutes * 60);
   document.querySelector('.main__time').textContent = hours + ':' + minutes + ':' + seconds;
   document.title = hours + ':' + minutes + ':' + seconds;
}

document.querySelector('.main__buttonSet').onclick = () => {
   for (let i of inputs) {
      if (i.value < 0) {
         i.value *= -1;
      }
   }
   count > 1 ? count : count++;

   time = Math.ceil(+inputs[0].value) * 3600 + Math.ceil(+inputs[1].value) * 60 + Math.ceil(+inputs[2].value);
}

document.querySelector('.main__buttonStop').onclick = () => {
   for (let i of inputs) {
      i.value = '';
   }
   document.title = "Timer";
   console.log(count)
   count < 1 ? count : count--;
   console.log(count)
   time = 0;
   signal.pause()
}

window.onload = () => {
   signal.pause()
}
