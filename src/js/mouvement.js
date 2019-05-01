//variables mvtspaceship

var decreminert = 0.5;


var spaceVelo={
	x:0,
	z:0
};
var accspaceship={
	x:0,
	y:0
};
//Méthod pour déplacement du vaisseau

function velocity(spaceship,spaceVelo) {
	spaceship.position.z +=spaceVelo.z*0.1;
	spaceship.position.x +=spaceVelo.x*0.1;
}

function rapport(spaceship,spaceVelo,accspaceship) {
	spaceVelo.z+=accspaceship.z*0.3;
	spaceVelo.x+=accspaceship.x*0.3;
}

function mouvement (spaceship,keyboard,spaceVelo,accspaceship,scene){


	if(keyboard.pressed('z')){
		radian=spaceship.rotation.y;
		accspaceship.z=+Math.cos(spaceship.rotation.y)*decreminert;
		accspaceship.x=Math.sin(spaceship.rotation.y)*decreminert;
		rapport(spaceship,spaceVelo,accspaceship);
	}
	if ((keyboard.pressed('d'))) {
		spaceship.rotation.y +=(-3 * Math.PI)/180;
	}
	if ((keyboard.pressed('q'))) {
		spaceship.rotation.y -=(-3 * Math.PI)/180;
	}
	// permet de gerer la vélociter
	if (Math.sqrt(spaceVelo.x * spaceVelo.x + spaceVelo.z *spaceVelo.z) > 8) {
		spaceVelo.x *= 0.95;
		spaceVelo.z *= 0.95;
	}
	// gestion du tir
		if(keyboard.pressed('space')){
			rocketTab = initRocket(scene,spaceship);
			déplacementRocket(scene,spaceship);

		}

}
