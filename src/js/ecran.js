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


}
