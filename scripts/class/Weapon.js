Weapon = function(game,x,y,dirrecion,key){
	Phaser.Sprite.call(this,game,x,y,key);

	 game.physics.arcade.enable(this);
 
	this.game = game;
	this.enableBody = true;
    this.body.allowGravity = false;
     this.alive=true;
    this.dirrecion=dirrecion;
    
	this.checkWorldBounds=true;
	this.outOfBoundsKill=true;

	
	if(this.dirrecion==-1){
	this.scale.setTo(-1,1)
	}

}

Weapon.prototype = Object.create(Phaser.Sprite.prototype);
Weapon.prototype.constructor = Weapon;
Weapon.prototype.update= function(){
  
   this.body.velocity.x=+550*(-this.dirrecion);
  
}
