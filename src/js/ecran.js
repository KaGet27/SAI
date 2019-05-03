function ecran(){

  var largecran=window.innerWidth;
  var hautecran=window.innerHeight;

  if (spaceship.position.x > largecran/4){
      spaceship.position.x -= largecran/2;
  }
  else if (spaceship.position.x < -largecran/4) {
    spaceship.position.x += largecran/2;
  }



  if (spaceship.position.z > hautecran/4) {
    spaceship.position.z -= hautecran/2;

  }
  else if (spaceship.position.z < -hautecran/4) {
      spaceship.position.z += hautecran/2;

  }

for (var i = 0; i < tabAste.length; i++) {


  if (tabAste[i].asteroid.position.x > largecran/4){
      tabAste[i].asteroid.position.x -= largecran/2;
  }
  else if (tabAste[i].asteroid.position.x < -largecran/4) {
    tabAste[i].asteroid.position.x += largecran/2;
  }



  if (tabAste[i].asteroid.position.z > hautecran/4) {
    tabAste[i].asteroid.position.z -= hautecran/2;

  }
  else if (tabAste[i].asteroid.position.z < -hautecran/4) {
      tabAste[i].asteroid.position.z += hautecran/2;

  }

}


}
