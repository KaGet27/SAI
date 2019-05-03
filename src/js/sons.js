
function sons(choix){
switch (choix) {
  case 1:
    var audio = new Audio('src/medias/sounds/tire.mp3');
    audio.play();
    break;
    case 2 :
      var audio = new Audio('src/medias/sounds/explosion.mp3');
      audio.play();
      break;
}
audio.play();
}
