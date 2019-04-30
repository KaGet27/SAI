var deadrocketTab=[];

function Rocket(rocketTaille,ambientLight,scene,spaceship){

  var rocketGeo = new THREE.CylinderGeometry( 0.5, 0.5, rocketTaille, 24 );
  var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  var rocket = new THREE.Mesh( rocketGeo, material );
  rocket.position.copy(spaceship.position);
  rocket.rotation.x = Math.PI/2;
  rocket.rotation.z =-(spaceship.rotation.y);
  scene.add(rocket);
  return rocket;
}



function initRocket(scene,spaceship,rocketTab){
  var cadenceTir=500;
  var tmprocket =3000;

  //2rocket.s-1
  if(globtime > rocketTimer){
    rocketTimer=Date.now()+cadenceTir;
    var rocketTaille=5;
    var ambientLight=new THREE.AmbientLight(0xFFFFFF,1);
    rocketTab.push(Rocket(rocketTaille,ambientLight,scene,spaceship));
    deadrocketTab.push(Date.now()+3000);
    }

  return (rocketTab);
}

function mortRocket(scene,spaceship,rocketTab){
  //gestion mort rocket
  if (globtime>deadrocketTab[0]) {
    for (var i = 0; i < rocketTab.length; i++) {
      scene.remove()
      rocketTab.splice(0,1);
      deadrocketTab.splice(0,1);
      
    }

    }
    return(rocketTab);
}


//gestion deplacement rocket
function déplacementRocket(rocketTab){
  if (rocketTab>0) {
        for (var i = 0; i < rocketTab.length; i++) {
          rocketTab[i].position.x+=5;
        }
  }
  return(rocketTab);
}
