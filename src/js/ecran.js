function ecran(spaceship){

  var largecran=window.innerWidth;
  var hautecran=window.innerHeight;

  if (spaceship.position.x>largecran) {
      spaceship.position.x =-largecran;
      }
      else if (spaceship.position.x<largecran) {
        spaceship.position.x=largecran/2;
      }



  if (spaceship.position.z>hautecran) {
    spaceship.position.z =-hautecran;

  }
  else if (spaceship.position.z<hautecran) {
      spaceship.position.z =hautecran/2;

  }


}
