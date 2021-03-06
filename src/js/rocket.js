var deadrocketTab=[];
var rocketTab = [];
var positionYspaceship =[];


function Rocket(rocketTaille,ambientLight,scene,spaceship){

  var geometry = new THREE.CylinderGeometry( 0.5, 0.5, rocketTaille, 24 );
  var material = new THREE.MeshBasicMaterial( {color: 0xff2323} );
  var rocket = new THREE.Mesh( geometry, material );
  rocket.position.copy(spaceship.position);
  rocket.rotation.x = Math.PI/2;
  rocket.rotation.z =-(spaceship.rotation.y);
  scene.add(rocket);
  return rocket;
}



function initRocket(scene,spaceship){
  var cadenceTir=1500;
  var tmprocket =1000;

  //2rocket.s-1
  if(globtime > rocketTimer){
    rocketTimer=Date.now()+cadenceTir;
    var rocketTaille=5;
    var ambientLight=new THREE.AmbientLight(0xFFFFFF,1);
    rocketTab.push(Rocket(rocketTaille,ambientLight,scene,spaceship));
    deadrocketTab.push(Date.now()+tmprocket);
    positionYspaceship.push(spaceship.rotation.y);
    }
  return (rocketTab);
}

function mortRocket(scene,spaceship){
  //gestion mort rocket

   if (globtime>deadrocketTab[0]) {
      for (var i = 0; i < rocketTab.length; i++) {
        scene.remove(rocketTab[i]);
        deadrocketTab.splice(0,1);
        rocketTab.splice(0,1);
        positionYspaceship.splice(0,1);
      }
    }
    return(rocketTab);
}

//gestion deplacement rocket
function déplacementRocket(scene, spaceship){
var vitRocket=3;
          for (var i = 0; i < rocketTab.length; i++) {
          rocketTab[i].position.x+=Math.sin(positionYspaceship[i])*vitRocket;
          rocketTab[i].position.z-= -Math.cos(positionYspaceship[i])*vitRocket;
            }

  return(rocketTab);
}
