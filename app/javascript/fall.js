function fall() {

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
    ninja2.remove()
  });

  const gamePoint = document.getElementById("game_point");
  const resultPoint = document.getElementById("result_point");
  let clickCount = 0
  const ninjas =document.getElementById("ninjas");
  ninjas.addEventListener("click",() => {
    clickCount += 1;
    gamePoint.innerHTML = `合計${clickCount}点`;
    resultPoint.innerHTML = `合計${clickCount}点`;
  })


  setTimeout(function(){
    // window.location.href = '/results';
    const resultScreen = document.getElementById("hidden");
    resultScreen.setAttribute("style", "display:block;");
    }, 5*1000);

  // point.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const XHR = new XMLHttpRequest();
  //   XHR.open("POST", "/games", true);
  //   XHR.send(clickCount);
  //   console.log(clickCount)
  // });


};
  
  if(document.URL.match(/new/)){window.addEventListener('load', fall)};