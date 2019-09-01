Spine = function(game,x,y,key){
 Phaser.Sprite.call(this,game,x,y,key);
 
  this.game= game;
  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds=true;
  this.body.allowGravity=true;
  this.body.immovable = true;
 }
 
 Spine.prototype=
 Object.create(Phaser.Sprite.prototype);
 
 Spine.prototype.constructor = Spine;
 Spine.prototype.update = function(){
 
 
 }
 