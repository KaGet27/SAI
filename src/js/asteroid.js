var tabAste = [];

var asteTaille = 15;
var masteTaille=10;
var sasteTaille=8;
var astePv=3;




var Asteroid = function (Pv,taille,asteX,asteZ,asterotY,ambientLight,scene){
  //Asteroid
this.asterotX=1;
this.asterotZ=1;
this.asterotY=asterotY;
this.astePv=Pv;
this.asteX=asteX;
this.asteZ=asteZ;
this.taille=taille;
this.asterotY=asterotY;
this.deplacementX=getRandomArbitrary(-0.14,1.14);
this.deplacementZ=getRandomArbitrary(-0.14,1.14);
console.log(this.deplacementZ);


this.asteType = null;
//function texture aléatoire
var TextAlea = Randomise();
var asteTexture;
switch (TextAlea) {
		case 1:
			asteTexture='src/medias/models/Asteroids/violet.png';
			this.asteType = TextAlea;
		break;
		case 2:
			asteTexture="src/medias/models/Asteroids/normal.jpg";
		break;
		case 3:
			asteTexture="src/medias/models/Asteroids/vert.jpg";
			this.asteType = TextAlea;
		break;
		case 4:asteTaille
			asteTexture="src/medias/models/Asteroids/rouge.jpg";
			this.asteType = TextAlea;
		break;
		case 5:
			asteTexture="src/medias/models/Asteroids/or.jpg";
			this.asteType = TextAlea;
		break;
}

var asteGeo = new THREE.DodecahedronGeometry(taille, 1);
asteGeo.vertices.forEach(function(v){
		v.x += (0-Math.random()*(taille/4));
		v.y += (0-Math.random()*(taille/4));
		v.z += (0-Math.random()*(taille/4));
	})
var texture = new THREE.TextureLoader();
var Texture = new THREE.MeshBasicMaterial({ map: texture.load(asteTexture)});

this.asteroid = new THREE.Mesh(asteGeo, Texture);
scene.add(this.asteroid, ambientLight);
this.asteroid.position.set(asteX,0,asteZ);

this.rotationAste = function(asterotX,asterotZ){
	this.asteroid.rotation.x += asterotX;
	this.asteroid.rotation.z += asterotZ;
}

this.deplacementAste = function(vitAste){



		this.asteroid.position.x -= this.deplacementX;
		this.asteroid.position.z -= this.deplacementZ;
}
}

function touchAste(asteroid,Pv,asteX,asteZ,asterotY,index,ambientLight,scene){

					if (Pv==2) {


						for (var i = 0; i <=2; i++) {
									console.log(astePv);

									tabAste.push(new Asteroid(Pv,masteTaille,tabAste[index].asteroid.position.x,tabAste[index].asteroid.position.z,tabAste[index].asteroid.rotation.y,ambientLight,scene));
									console.log(tabAste[tabAste.length-1].asteroid.position);
									// tabAste[tabAste.length-1].asteroid.position.copy(tabAste[index].asteroid.position);
									scene.add(tabAste[tabAste.length-1].asteroid);
									suppressionMesh(scene,asteroid.geometry,asteroid.material,asteroid);
								}
							}

					if (Pv==1) {
									for (var i = 0; i <=2; i++) {

									tabAste.push(new Asteroid(Pv-2,sasteTaille,tabAste[index].asteroid.position.x,tabAste[index].asteroid.position.z,asterotY,ambientLight,scene));
									scene.add(tabAste.Asteroid);
									suppressionMesh(scene,asteroid.geometry,asteroid.material,asteroid);

								}
							}
						if (Pv==0) {
						suppressionMesh(scene,asteroid.geometry,asteroid.material,tabAste[i].asteroid );
						tabAste.splice(i,0);
					}

}



//function lorsque un asteroid est toucher il va perdre des pv et sa taille va réduire
