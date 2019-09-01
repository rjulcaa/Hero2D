Key = function(game,x,y){
 Phaser.Sprite.call(this,game,x,y,'superKey');
 
  this.game= game;
  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds=true;
  this.body.allowGravity=true;
  this.body.immovable = true
 }
 
 Key.prototype=
 Object.create(Phaser.Sprite.prototype);
 
 Key.prototype.constructor = Key;
 Key.prototype.update = function(){
 
 
 }
 