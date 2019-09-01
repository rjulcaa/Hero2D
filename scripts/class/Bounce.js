Bounce = function(game,x,y){
 Phaser.Sprite.call(this,game,x,y,'tram');
 
  this.game= game;
  this.game.physics.arcade.enable(this);
 this.body.collideWorldBounds=true;
  this.body.allowGravity=true;
  this.body.immovable = true;

  
 }
 
 Bounce.prototype=
 Object.create(Phaser.Sprite.prototype);
 
 Bounce.prototype.constructor = Bounce;
 Bounce.prototype.update = function(){
 
 
 }
 