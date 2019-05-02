

// fonction permettant de gérer les collisions

function gestionColli(scene){


if (spaceGod==false) {

//collision asteroid vaisseaux
for (var i = 0; i < tabAste.length; i++) {

    if (collision(tabAste[i].Asteroid,spaceship,18)==true) {

      suppressionMesh(scene,tabAste[i].Asteroid.geometry,tabAste[i].Asteroid.material,tabAste[i].Asteroid );
      tabAste.splice(i,0);
      spaceship.position.set(0,0,-1);
      scene.add(spaceship);
    }
  }
  }
//collision rocket asteroids

    for (var i = 0; i < tabAste.length; i++) {
    for (var j = 0; j <rocketTab.length; j++) {

            if (collision(rocketTab[j],tabAste[i].Asteroid,15)==true) {
                  touchAste(tabAste[i].Asteroid,tabAste[i].astePV-1,tabAste[i].asteX,tabAste[i].asteZ,scene);
                  console.log(tabAste[i].asteType);
                  suppressionMesh(scene,rocketTab[j].geometry,rocketTab[j].material,rocketTab[j]);
                  rocketTab.splice(j,0);

          }
    }

}


}
