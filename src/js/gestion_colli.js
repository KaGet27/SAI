

// fonction permettant de gérer les collisions

function gestionColli(scene){

//collision asteroid vaisseaux
for (var i = 0; i < tabAste.length; i++) {

    if (collision(tabAste[i].Asteroid,spaceship,18)==true) {
      scene.remove(spaceship,tabAste[i].Asteroid);
      tabAste.splice(i,0);
      spaceship.position.set(0,0,-1);
      scene.add(spaceship);
    }

    for (var j = 0; j <rocketTab.length; j++) {

            if (collision(rocketTab[j],tabAste[i].Asteroid,15)==true) {

                  scene.remove(tabAste[i].Asteroid,rocketTab[j]);
                  rocketTab.splice(j,0);
                  tabAste.splice(i,0);
          }
    }
}



}
