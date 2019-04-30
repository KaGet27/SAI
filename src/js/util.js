//generer un nombre aleatoire en fonction d'un intervale
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//Fonction pour générer la texture aléatoirement celon une probabilité
function Randomise(){
var choix;
var Random=parseInt(getRandomArbitrary(0,101));
if (Random>=0 && Random<65) {
  choix=2;}
  else if (Random>=65 && Random<75) {
    choix=3;
  }
  else if (Random>=75 && Random<90) {
    choix=1;
  }
  else if (Random>=90 && Random<95) {
    choix=4;
  }
  else if (Random>=95 && Random<=100) {
    choix=5;
  }

return(choix);

}
