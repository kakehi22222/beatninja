function sound() {
//     // const music = document.getElementById("big");
//     // const sound = document.getElementById("sound");
//     // music.addEventListener('click', function(){
//     //   sound.play();
//     //   }); 
      const ninjas = document.getElementById("ninjas");
      const kenSound = document.getElementById("ken_sound");
      ninjas.addEventListener('click', function(){
        kenSound.play();
        kenSound.volume = 0.5;
        });
//   // const gameSound = document.getElementById("game_sound");
//   // setTimeout(function(){
//   //   gameSound.play();
//   //   }, 1*1000);
};
  if(document.URL.match(/new/)){window.addEventListener('load', sound)};