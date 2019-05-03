

//Fichier Vaisseau

var spaceship;
var spaceGod = false;
var spacedetruit=false;




var spaceship=function(spacePv,spaceTaille,ambientLight,scene){

	//Vaisseau
	var textureVaisseau = new THREE.TextureLoader().load( 'src/medias/models/Vaisseau/SciFi_Fighter-MK6-diffuse.jpg' );
	var manager1 = new THREE.LoadingManager(chargementVaisseau);
	var vaisseau = new THREE.OBJLoader(manager1);
	this.spaceTaille=spaceTaille;
	this.spacePv=spacePv;
	this.spaceship=null;


	vaisseau.load('src/medias/models/Vaisseau/vaisseau.obj',function(object){this.spaceship=object;});

	function chargementVaisseau(){
		spaceship.traverse( function ( child ) {

			if( child.isMesh ) child.material.map = textureVaisseau;

		});
		spaceship.position.set(0,0,-1);



		spaceship.scale.set(spaceTaille,spaceTaille,spaceTaille);
     scene.add(spaceship);

	}

}
