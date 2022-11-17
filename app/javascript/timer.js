  // タイマー表示
function timer() {
  const totalTime = 10000;
  const oldTime = Date.now();
  const timerId = setInterval(() => {
    const currentTime = Date.now();
    const diff = currentTime - oldTime;
    const remainMSec = totalTime - diff;
    const remainSec = Math.ceil(remainMSec/1000);
    let label = `${remainSec}`
    if (remainMSec <= 0) {
      clearInterval(timerId);
      label = '0';
    }
    document.querySelector('#last_time_s').innerHTML = label
  },1000);
};
  if(document.URL.match(/new/)){window.addEventListener('load', timer)};