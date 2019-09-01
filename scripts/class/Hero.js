Hero=function(game,x,y){
    Phaser.Sprite.call(this,game,x,y,'hero');
     game.add.existing(this);
    game.physics.arcade.enable(this);
    this.game=game;
     this.body.collideWorldBounds=true;
  this.anchor.setTo(0.5);
     this.cursors = this.game.input.keyboard.createCursorKeys();
       this.animations.add('walk',Phaser.Animation.generateFrameNames('walk',2,11),15,true);
       this.animations.add('normal',Phaser.Animation.generateFrameNames('normal',1,9),7,true);
        this.animations.add('jump',Phaser.Animation.generateFrameNames('jump',1,8),20,true);
        this.isShoting=this.animations.add('shoot',Phaser.Animation.generateFrameNames('shoot',1,6),30,true);
           this.hit=this.animations.add('hit',Phaser.Animation.generateFrameNames('hit',1,5),15,true);
       this.heroVelocity=250;
      this.shoot=false;
      
}
Hero.prototype=Object.create(Phaser.Sprite.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.update = function(){
    
    
 
	this.body.velocity.x = 0;
	
	if(!this.isShoting.isPlaying){


    if(this.cursors.up.isDown &&  this.body.onFloor()){
    
        this.body.velocity.y =-350;
     }

    if(this.cursors.left.isDown ){
     
        this.body.velocity.x =-this.heroVelocity;
          this.scale.setTo(1);
          this.animations.play("walk");
          
    }else if(this.cursors.right.isDown){
        this.body.velocity.x =+this.heroVelocity;
          this.scale.setTo(-1,1);
        this.animations.play("walk");
    }else{
    

	 this.animations.play("normal");
    }
	}

 
}

Hero.prototype.Shoot = function(){
 
     this.isShoting.play(25,false);
    this.shoot=true;
}
Hero.prototype.algo = function(aux){

    console.log(aux);
}
