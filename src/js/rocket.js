
var lauch;


function rocket(rocketPv,rocketTaille,scene){
var manager3= new THREE.LoadingManager(chargementRocket);
rocketManager= new THREE.OBJLoader(manager3);

var textureRocket = new THREE.TextureLoader().load( 'src/medias/models/Rocket/rocket.jpg' );
this.rocketPv = rocketPv;
this.rocketTaille = rocketTaille;
this.rocket=null;


rocketManager.load('src/medias/models/Rocket/rocket.obj',function(object){this.rocket=object;});
chargementRocket(textureRocket);
}

function chargementRocket(textureRocket,){
  lauch.traverse( function ( child ) {

    if( child.isMesh ) child.material.map = textureRocket;
  });
  rocket.position.x=spaceship.position.x;
  rocket.position.z=spaceship.position.z;
  rocket.scale.set(rocketTaille,rocketTaille,rocketTaille);
  scene.add(rocket);

}
