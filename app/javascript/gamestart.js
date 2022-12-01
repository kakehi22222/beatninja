function gamestart() {

  const openLeft = document.querySelector('.fusuma_left').animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(-2000%)'}
    ],
    { duration: 11000 }
  );
  openLeft.pause();
  
  const openRight = document.querySelector('.fusuma_right').animate(
    [
      { transform: 'translateX(0)' },
      { transform: 'translateX(2000%)'}
    ],
    { duration: 11000 }
  );
  openRight.pause();

  document.querySelector(`.sound_start`).addEventListener('click', () => {
    openLeft.play();
    openRight.play();
  });
};
if(document.URL.match(/new/)){window.addEventListener('load', gamestart)};
