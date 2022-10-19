function fall() {
//   setTimeout(function(){
// window.location.href = '[http://gimmicklog.main.jp](http://gimmicklog.main.jp/)';
// }, 5*1000);

  document.querySelector(`#ninjas`).animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(800px)' }
    ],
    {
      duration: 3000,
    }
  );

  const ninja1 = document.getElementById("ninja_1");
  ninja1.addEventListener("click",() => {
    ninja1.remove();
  });
  const ninja2 = document.getElementById("ninja_2");
  ninja2.addEventListener("click",() => {
    ninja2.remove();
  });
};
  
  window.addEventListener('load', fall);