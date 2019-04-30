

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

function chargementRocket(scene,spaceship,rocketTab){
  var cadenceTir=500;
  if(globtime > rocketTimer){
    rocketTimer=Date.now()+cadenceTir;
    var rocketTaille=5;
    var ambientLight=new THREE.AmbientLight(0xFFFFFF,1);
    rocketTab.push(Rocket(rocketTaille,ambientLight,scene,spaceship));
    return (rocketTab);
  }

}

function mort(scene,rocketTab,ambientLight){

}
