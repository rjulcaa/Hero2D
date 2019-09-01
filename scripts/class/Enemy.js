Enemy = function(game,x,y,enemyType,player){
 Phaser.Sprite.call(this,game,x,y,'enemies');
  
  this.player=player;
  this.game= game;
  this.game.physics.arcade.enable(this);
  this.body.collideWorldBounds=true;
  	this.body.outOfBoundsKill=true;
  this.enemyType=enemyType;
 
  this.alive=true;
  this.maxSpeed=200;
  this.minDistance=500;
 this.enemyType=enemyType;
  switch (this.enemyType) {
      case 1:{this.animation='blue';
            this.body.allowGravity = false;
          break;}
          case 2:{this.animation='red';
          
              break;}
              case 3:{this.animation='green';
                 
              }
  }
  if(this.enemyType==2){
       this.body.velocity.setTo(100,100);
      this.body.bounce.set(1,1);
  }
          // code
 //  this.anKill=this.animations.add('kill',Phaser.Animation.generateFrameNames('kill',1,6),3,true);
  this.animations.add(this.animation,Phaser.Animation.generateFrameNames(this.animation,1,5),3,true);
  // this.animationDeath=this.animations.add('blue5')
 // this.body.gravity.set(0, 1000);
 this.animations.play(this.animation);
 
 this.scale.setTo(0.5);
 }
 
 Enemy.prototype=
 Object.create(Phaser.Sprite.prototype);
 
 Enemy.prototype.constructor = Enemy;
 Enemy.prototype.update = function(){
   if(this.enemyType==1){
      this.follow();
   
  }
  
}
Enemy.prototype.follow=function(){
 
  var distance = this.game.math.distance(this.x, this.y, this.player.x, this.player.y);

    
    if (distance < this.minDistance) {
     
        var rotation = this.game.math.angleBetween(this.x, this.y, this.player.x, this.player.y);

       
        this.body.velocity.x = Math.cos(rotation) * this.maxSpeed;
        this.body.velocity.y = Math.sin(rotation) * this.maxSpeed;
    } else {
        this.body.velocity.setTo(0, 0);
    }
}
  