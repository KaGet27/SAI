var tabAste = [];

var asteTaille = 15;
var masteTaille=10;
var sasteTaille=8;




var Asteroid = function (astePv,asteTaille,asteX,asteZ,asterotY,ambientLight,scene){
  //Asteroid
this.asterotX=1;
this.asterotZ=1;
this.asterotY = asterotY;
this.astePv=3;
this.asteX=asteX;
this.asteZ=asteZ;


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
		case 4:
			asteTexture="src/medias/models/Asteroids/rouge.jpg";
			this.asteType = TextAlea;
		break;
		case 5:
			asteTexture="src/medias/models/Asteroids/or.jpg";
			this.asteType = TextAlea;
		break;
}

var asteGeo = new THREE.DodecahedronGeometry(asteTaille, 1);
asteGeo.vertices.forEach(function(v){
		v.x += (0-Math.random()*(asteTaille/4));
		v.y += (0-Math.random()*(asteTaille/4));
		v.z += (0-Math.random()*(asteTaille/4));
	})
var texture = new THREE.TextureLoader();
var Texture = new THREE.MeshBasicMaterial({ map: texture.load(asteTexture)});

this.Asteroid = new THREE.Mesh(asteGeo, Texture);
scene.add(this.Asteroid, ambientLight);
this.Asteroid.position.set(asteX,0,asteZ);

this.rotationAste = function(asterotX,asterotZ){
	this.Asteroid.rotation.x += asterotX;
	this.Asteroid.rotation.z += asterotZ;
}

this.deplacementAste = function(asterotY,vitAste){

	this.Asteroid.rotation.y = asterotY;
	this.Asteroid.position.x -= Math.sin(this.Asteroid.rotation.y) * vitAste;
		this.Asteroid.position.z -= -Math.cos(this.Asteroid.rotation.y) * vitAste;
}
}

function touchAste(asteroid,astePv,asteX,asteZ,scene){
					console.log(astePv);
					if (astePv==2) {
							asteTaille=masteTaille;
						for (var i = 0; i <=2; i++) {
									console.log("igfsidffsdgfiujh")
									suppressionMesh(scene,asteroid.geometry,asteroid.material,tabAste[i].Asteroid );
									tabAste.push(new Asteroid(astePv,asteTaille,asteX,asteZ,asterotY,ambientLight,scene))
									scene.add(Asteroid);
								}
							}

					if (astePv==1) {
						asteTaille=sasteTaille;
						for (var i = 0; i <=2; i++) {
									suppressionMesh(scene,asteroid.geometry,asteroid.material,tabAste[i].Asteroid );
									tabAste.push(new Asteroid(astePv,asteTaille,asteX,asteZ,asterotY,ambientLight,scene))
									scene.add(Asteroid);

								}
							}
						if (astePv==0) {
						suppressionMesh(scene,asteroid.geometry,asteroid.material,tabAste[i].Asteroid );
						tabAste.splice(i,0);
					}

}



//function lorsque un asteroid est toucher il va perdre des pv et sa taille va réduire
