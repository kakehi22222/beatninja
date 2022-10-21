function fall() {

  // スピードA団
  document.querySelector(`#ninjas_a`).animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(3000px)' }
    ],
    {duration: 15000}
  );

  // スピードB団
  document.querySelector(`#ninjas_b`).animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(3000px)' }
    ],
    {duration: 12000}
  );

    // スピードC団
  document.querySelector(`#ninjas_c`).animate(
    [
      { transform: 'translateY(0)' },
      { transform: 'translateY(3000px)' }
    ],
    {duration: 10000}
  );

  // 忍者A団
  const ninjaA1 = document.getElementById("ninja_a_1");
  ninjaA1.addEventListener("click",() => {
    ninjaA1.remove();
  });
  const ninjaA2 = document.getElementById("ninja_a_2");
  ninjaA2.addEventListener("click",() => {
    ninjaA2.remove()
  });
  const ninjaA3 = document.getElementById("ninja_a_3");
  ninjaA3.addEventListener("click",() => {
    ninjaA3.remove();
  });
  const ninjaA4 = document.getElementById("ninja_a_4");
  ninjaA4.addEventListener("click",() => {
    ninjaA4.remove()
  });
  const ninjaA5 = document.getElementById("ninja_a_5");
  ninjaA5.addEventListener("click",() => {
    ninjaA5.remove();
  });
  const ninjaA6 = document.getElementById("ninja_a_6");
  ninjaA6.addEventListener("click",() => {
    ninjaA6.remove()
  });
  const ninjaA7 = document.getElementById("ninja_a_7");
  ninjaA7.addEventListener("click",() => {
    ninjaA7.remove();
  });
  const ninjaA8 = document.getElementById("ninja_a_8");
  ninjaA8.addEventListener("click",() => {
    ninjaA8.remove()
  });

  // 忍者B団
  const ninjaB1 = document.getElementById("ninja_b_1");
  ninjaB1.addEventListener("click",() => {
    ninjaB1.remove();
  });
  const ninjaB2 = document.getElementById("ninja_b_2");
  ninjaB2.addEventListener("click",() => {
    ninjaB2.remove()
  });
  const ninjaB3 = document.getElementById("ninja_b_3");
  ninjaB3.addEventListener("click",() => {
    ninjaB3.remove();
  });
  const ninjaB4 = document.getElementById("ninja_b_4");
  ninjaB4.addEventListener("click",() => {
    ninjaB4.remove()
  });
  const ninjaB5 = document.getElementById("ninja_b_5");
  ninjaB5.addEventListener("click",() => {
    ninjaB5.remove();
  });
  const ninjaB6 = document.getElementById("ninja_b_6");
  ninjaB6.addEventListener("click",() => {
    ninjaB6.remove()
  });
  const ninjaB7 = document.getElementById("ninja_b_7");
  ninjaB7.addEventListener("click",() => {
    ninjaB7.remove();
  });
  const ninjaB8 = document.getElementById("ninja_b_8");
  ninjaB8.addEventListener("click",() => {
    ninjaB8.remove()
  });

  // 忍者C団
  const ninjaC1 = document.getElementById("ninja_c_1");
  ninjaC1.addEventListener("click",() => {
    ninjaC1.remove();
  });
  const ninjaC2 = document.getElementById("ninja_c_2");
  ninjaC2.addEventListener("click",() => {
    ninjaC2.remove()
  });
  const ninjaC3 = document.getElementById("ninja_c_3");
  ninjaC3.addEventListener("click",() => {
    ninjaC3.remove();
  });
  const ninjaC4 = document.getElementById("ninja_c_4");
  ninjaC4.addEventListener("click",() => {
    ninjaC4.remove()
  });
  const ninjaC5 = document.getElementById("ninja_c_5");
  ninjaC5.addEventListener("click",() => {
    ninjaC5.remove();
  });
  const ninjaC6 = document.getElementById("ninja_c_6");
  ninjaC6.addEventListener("click",() => {
    ninjaC6.remove()
  });
  const ninjaC7 = document.getElementById("ninja_c_7");
  ninjaC7.addEventListener("click",() => {
    ninjaC7.remove();
  });
  const ninjaC8 = document.getElementById("ninja_c_8");
  ninjaC8.addEventListener("click",() => {
    ninjaC8.remove()
  });

  // クリックカウント
  const gamePoint = document.getElementById("game_point");
  const resultPoint = document.getElementById("result_point");
  const ninjas =document.getElementById("ninjas");
  let clickCount = 0
  ninjas.addEventListener("click",() => {
    clickCount += 10;
    gamePoint.innerHTML = `合計${clickCount}点`;
    resultPoint.innerHTML = `合計${clickCount}点`;
    // return {
    //   clickCount
    // };
  });

// 結果表示
  setTimeout(function(){
    // window.location.href = '/results';
    const resultScreen = document.getElementById("hidden");
    resultScreen.setAttribute("style", "display:block;");
    }, 10*1000);

    setTimeout(function(){
      const resultScreen = document.getElementById("ninjas");
      resultScreen.setAttribute("style", "display:none;");
      }, 10*1000);
  
  // point.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   const XHR = new XMLHttpRequest();
  //   XHR.open("POST", "/games", true);
  //   XHR.send(clickCount);
  //   console.log(clickCount)
  // });


};
  
  if(document.URL.match(/new/)){window.addEventListener('load', fall)};