window.addEventListener("load",main);


//clavier via library
var keyboard= new THREEx.KeyboardState();


function main(){

	function animate() {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
		sphere.rotation.x += 0.01;
		sphere.rotation.y += 0.01;
		mouvement();


	}










	//Scene
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 40000 );

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );





	//sphere1
	var geometry = new THREE.SphereGeometry( 5, 15, 32 );
	var material = new THREE.MeshBasicMaterial( { color: "rgb(102, 51, 0)" } );
	var sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );

//Vaiseau




var spaceship;
var textureVaisseau = new THREE.TextureLoader().load( 'src/medias/models/Vaisseau/SciFi_Fighter-MK6-diffuse.jpg' );
var manager1=new THREE.LoadingManager(chargementVaisseau);
var vaisseau= new THREE.OBJLoader(manager1);
var ambientLight=new THREE.AmbientLight(0xFFFFFF,1);


vaisseau.load('src/medias/models/Vaisseau/vaisseau.obj',function(object){spaceship=object;});

function chargementVaisseau(){
	spaceship.traverse( function ( child ) {
		if( child.isMesh ) child.material.map = textureVaisseau;

	});
	scene.add(spaceship,ambientLight);
}

	//Asteroid
var aste;
var manager2 = new THREE.LoadingManager(chargementAsteroid);
var asteroid= new THREE.OBJLoader(manager2);
var textureaste=new THREE.TextureLoader().load('src/medias/models/Vaisseau/SciFi_Fighter-MK6-bump.jpg')

asteroid.load('src/medias/models/Asteroids/A2.obj', function(object){aste=object;});

function chargementAsteroid(){
aste.traverse(function (child){
	if(child.isMesh)child.material.map=textureaste;
});

scene.add(aste,ambientLight);
}

camera.position.z = 4;

//déplacement

var mouvement=function(){
	if(keyboard.pressed('z')){
		spaceship.position.z+=50;

	}
}


var controls = new THREE.OrbitControls( camera );

		//Skybox

		//var imagePrefix = "../medias/images";
		//var directions  = ["right", "left", "top", "bot", "front", "back"];
		var urls = ["src/medias/images/right.png","src/medias/images/left.png","src/medias/images/top.png","src/medias/images/bot.png","src/medias/images/front.png","src/medias/images/back.png"];

		var materialArray = [];
		for (var i = 0; i < 6; i++)
		 materialArray.push( new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load( urls[i]),
			side: THREE.BackSide
		 }));

		var skyboxGeom = new THREE.BoxGeometry( 35000, 35000, 35000 );
		var skyBox = new THREE.Mesh( skyboxGeom, materialArray );

		scene.add( skyBox );



animate();
	};
