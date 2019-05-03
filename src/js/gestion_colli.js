
var invinTimer=2000;
// fonction permettant de gérer les collisions

function gestionColli(scene,ambientLight){


if (spaceGod==false) {}

//collision asteroid vaisseaux
for (var i = 0; i < tabAste.length; i++) {

    if (collision(tabAste[i].asteroid,spaceship,18)==true) {
      suppressionMesh(scene,tabAste[i].asteroid.geometry,tabAste[i].asteroid.material,tabAste[i].asteroid );
      tabAste.splice(i,0);
      spacedetruit=true;
      scene.remove(spaceship);
        velocity(spaceship,0);
        spaceship.position.set(0,0,-1);
        scene.add(spaceship);



    }
//collision rocket asteroids
    for (var j = 0; j <rocketTab.length; j++) {

            if (collision(rocketTab[j],tabAste[i].asteroid,15)==true) {
                  //sons(2);
                  console.log(tabAste[i].astePv);
                  console.log(tabAste[tabAste.length-1].asteroid.position);
                  touchAste(tabAste[i].asteroid,tabAste[i].astePv-1,tabAste[i].asteroid.position.x ,tabAste[i].asteroid.position.z,tabAste[i].asterotY,i,ambientLight,scene);
                  suppressionMesh(scene,rocketTab[j].geometry,rocketTab[j].material,rocketTab[j]);
                  rocketTab.splice(j,0);

          }
    }

  }


}
