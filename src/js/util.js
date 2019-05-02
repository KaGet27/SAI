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

//fonction de base gerant les collisions


function collision(objetA,objetB,radiusPlus){
	if (objetA.position.distanceTo(objetB.position) < radiusPlus)
		return true;
}

//fonction supprime un objet pour ne plus avoir d'objet invisible
function suppressionMesh(scene,geometry,material,mesh){
	scene.remove(mesh);
	geometry.dispose();
	material.dispose();
	mesh.position.x = undefined;
	mesh.position.y = undefined;
	mesh.position.z = undefined;
	mesh = undefined;
}



// function invinsible(){
//
// for (var i = 0; i <globtime+5; i++) {
// globtime+5;
// }
