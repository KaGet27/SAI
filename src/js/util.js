//generer un nombre aleatoire en fonction d'un intervale
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function Randomise(){
var choix;
var Random=parseInt(getRandomArbitrary(0,101));
if (Random>=0 && Random<60) {
  choix=2;}
  else if (Random>=60 && Random<70) {
    choix=3;
  }
  else if (Random>=70 && Random<85) {
    choix=1;
  }
  else if (Random>=85 && Random<95) {
    choix=4;
  }
  else if (Random>=95 && Random<100) {
    choix=5;
  }

return(choix);

}
