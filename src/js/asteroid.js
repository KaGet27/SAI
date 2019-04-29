var Asteroid = function (astePv,asteTaille,asteTexture,scene){
  //Asteroid
	var manager2= new THREE.LoadingManager(chargementAsteroid);
	this.asteroidManager = new THREE.OBJLoader(manager2);
	this.astePv = astePv;
	this.asteTexture = asteTexture;
	this.asteTaille = asteTaille;
	this.asteroid =  null;

	this.getAsteroid = function(object){
		console.log(object);
		this.asteroid = object;
	}
}

function chargementAsteroid(asteroid,texture,scene){
	asteroid.traverse(function (child){
		if(child.isMesh)child.material.map=texture;
	});
	scene.add(asteroid);
}

function textureAste(asteroidManager,asteTexture,scene,asteTaille){
	var x = asteroidManager.load('src/medias/models/Asteroids/A2.obj', function (object){
		chargementAsteroid(object,asteTexture,scene);
		object.scale.set(asteTaille,asteTaille,asteTaille);
		object.position.x=getRandomArbitrary(0,100);
		object.position.z=getRandomArbitrary(0,100);
		object.position.y=0;

		return x;
	});
}
