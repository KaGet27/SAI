window.addEventListener("load",main);

function main(){

	//clavier via library
	var scene = new THREE.Scene();
	var keyboard= new THREEx.KeyboardState();
	var ambientLight=new THREE.AmbientLight(0xFFFFFF,1);
	var directionLight=new THREE.DirectionalLight(0xdddddd,4);
	scene.add(ambientLight);

	//Scene
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 6000 );
	camera.position.y=150;
	camera.position.z=-1;

//creation deux deux autres caméra
	cameraFocus = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,  6000);
	cameraFirst = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,  6000);
	cameraFirst.rotation.x = 5;

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	//sphere1
	var geometry = new THREE.SphereGeometry( 5, 15, 32 );

	var material = new THREE.MeshBasicMaterial( { color: "rgb(102, 51, 0)" } );
	var sphere = new THREE.Mesh( geometry, material );
	sphere.scale.set(0.1,0.1,0.1)
	scene.add( sphere );
//Vaisseau
var spaceTaille=0.01;
var spacePv=1;

spaceship(spacePv,spaceTaille,ambientLight,scene);

// asteroids

// var des asteroids
var tabAste = [];
var lvl=1;
var astePv = 3;

var asteTaille = 10;
var nbAste = lvl*3;

for (var i = 0; i < nbAste; i++) {
var asteX=getRandomArbitrary(-100,100);
var asteZ=getRandomArbitrary(-100,100);

var tabAste =new Asteroid(astePv,asteTaille,asteX,asteZ,ambientLight,scene);
this.Asteroid.rotationAsteroid;

}
 // Rocket
var rocketPv=5;
var rocketTaille=10;
//rocket(rocketPv,rocketTaille,scene);


var controls = new THREE.OrbitControls(camera);

		//Skybox

		var urls = ["src/medias/images/right.png","src/medias/images/left.png","src/medias/images/top.png","src/medias/images/bot.png","src/medias/images/front.png","src/medias/images/back.png"];

		var materialArray = [];
		for (var i = 0; i < 6; i++)
		 materialArray.push( new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load( urls[i]),
			side: THREE.BackSide
		 }));

		var skyboxGeom = new THREE.BoxGeometry( 5000, 5000, 5000 );
		var skyBox = new THREE.Mesh( skyboxGeom, materialArray );

		scene.add(skyBox);

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera);
				velocity(spaceship,spaceVelo);
				mvtspaceship(spaceship,keyboard,spaceVelo,accspaceship);


			}

animate();
	};
