Goal = function(game,x,y,key){
 Phaser.Sprite.call(this,game,x,y,'door');
   game.add.existing(this);
  this.game= game;
  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds=true;
  
  this.body.allowGravity=true;
  
  this.body.immovable = true;
  
this.scale.setTo(2,2);
 }
 
 Goal.prototype=
 Object.create(Phaser.Sprite.prototype);
 
 Goal.prototype.constructor = Goal;
 Goal.prototype.update = function(){
 
 
 }
 