var Asteroid = function (astePv,asteTaille,asteX,asteZ,ambientLight,scene){
  //Asteroid
var asterotX;
var asterotZ;
var asterotY;

var asteroidGeo = new THREE.DodecahedronGeometry(asteTaille, 1);
asteroidGeo.vertices.forEach(function(v){
		v.x += (0-Math.random()*(asteTaille/10));
		v.y += (0-Math.random()*(asteTaille/1));
		v.z += (0-Math.random()*(asteTaille/100));
	})
var texture = new THREE.TextureLoader();
var Texture = new THREE.MeshBasicMaterial({ map: texture.load(textureaste())});



this.Asteroid = new THREE.Mesh(asteroidGeo, Texture);
scene.add(this.Asteroid, ambientLight);
this.Asteroid.position.set(asteX,0,asteZ);


this.rotationAsteroid = function(asterotX,asterotZ){
	this.Asteroid.rotation.x += asterotX;
	this.Asteroid.rotation.y += asterotZ;
}

this.deplacementAsteroid = function(rotY,speed){
	this.Asteroid.rotation.y = asterotY;
	this.Asteroid.position.x -= Math.sin(this.Asteroid.rotation.y) * speed;
		this.Asteroid.position.z -= -Math.cos(this.Asteroid.rotation.y) * speed;
}

}





function textureaste(){
	var TextAlea = Randomise();
	console.log(TextAlea);
	var asteTexture;
	switch (TextAlea) {
		case 1:
		asteTexture='src/medias/models/Asteroids/violet.png';

		break;
		case 2:
		asteTexture="src/medias/models/Asteroids/normal.jpg";

		break;
		case 3:
		asteTexture="src/medias/models/Asteroids/vert.jpg";

		break;
		case 4:
		asteTexture="src/medias/models/Asteroids/rouge.jpg";
		break;
		case 5:
		asteTexture="src/medias/models/Asteroids/or.jpg";
		break;
	}

	return(asteTexture);

}
