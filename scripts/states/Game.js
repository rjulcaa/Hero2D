Game = function(game){
    
}

Game.prototype = {
	init:function(Level,lives){
		this.Level=Level;
		this.lives=lives;
		if(this.Level==null && this.lives==null){
	
			this.Level=1;
			this.lives=3;
				
		}
	
		console.log(this.Level + 'level');
			console.log(this.lives + 'vidas');
		this.changeNextLevel=true;
	   this.levelmap = 'Level';
	
	  console.log(this.Level);
	   if(this.Level >0 ){
	   	 this.levelmap = 'Level' + this.Level;
	   }
	   
	},
    create:function(){
    	if(this.Level==1){
    			this.theme=this.add.audio("theme");
    			this.theme.volume=0.5;
    			this.theme.loop=true;
    				this.theme.play();
    				
    	}
      this.style1 = { font: 'bold 25pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 450 };
    	  
       this.game.physics.startSystem(Phaser.Physics.ARCADE);  
       this.game.physics.arcade.gravity.y = 500;
      this.cursors = this.game.input.keyboard.createCursorKeys();
       this.soundAttack=this.add.audio("soundAttack");
       this.soundTram=this.add.audio("soundTram");
           this.guntime=0;
       this.loadlevel();
       this.soundAttack.volume = 0.2;
       this.player.body.setSize(30,38);
       if(this.Level==3){
        this.emitter = this.game.add.emitter(this.game.world.centerX, 0,400);
       	this.emitter.width = this.game.world.width;
       	this.emitter.makeParticles('rain');
 
		this.emitter.minParticleScale = 0.4;
		this.emitter.maxParticleScale = 0.5;
	
		this.emitter.setYSpeed(300, 500);
		this.emitter.setXSpeed(-5, 5);
	
		this.emitter.minRotation = 0;
		this.emitter.maxRotation = 0;
	    this.emitter.gravity = 0;
		this.emitter.start(false, 1600, 5, 0);
		this.invunerable=false;
}


      this.canGo=false;
      this.Goal;
      
      
      
        
    },
    loadlevel:function(){
    	
    	
  console.log(this.levelmap);
        this.map = this.game.add.tilemap(this.levelmap);
     // Level 1
     
	    this.map.addTilesetImage('desert','backGrounLevel1');
	   	this.map.addTilesetImage('tiles_spritesheet','tilesLevel1');
	    this.map.addTilesetImage('cavebackground','backGrounLevel3');
	       	
		this.map.addTilesetImage('RockTile','tilesLevel2');
	       
        
	    this.map.addTilesetImage('cavesalida','backGrounLevel2_1');
	    this.map.addTilesetImage('case2','backGrounLevel2_2');
	    
		    
	 
		this.backGroundLayer=this.map.createLayer('backgroundLayer');
	   
	   
	
		this.collisionLayer = this.map.createLayer('collisionLayer');
	          
		
		this.map.setCollisionBetween(1,100000,true,'collisionLayer');
					 
					  
		this.collisionLayer.resizeWorld();
					 
		var dataDoor=this.findObjectsByType('goal',this.map,'objectsLayer');
		this.door=new Goal(game,dataDoor[0].x,dataDoor[0].y-200);
					 
		var keyData = this.findObjectsByType('key',this.map,'objectsLayer');
		this.keyGroup=this.game.add.group();
		keyData.forEach(function(data){
		var key=new Key(this.game,data.x,data.y);
		this.keyGroup.add(key);
		},this);
	
	
		var playerData=this.findObjectsByType('player',this.map,'objectsLayer');
		this.player = new Hero(this.game,playerData[0].x,playerData[0].y);  
		
				  
		
				
		 if(this.Level>=2){
			var tramData = this.findObjectsByType('tram',this.map,'objectsLayer');
			this.tramGroup=this.game.add.group();
	     	tramData.forEach(function(data){
			var tram=new Bounce(this.game,data.x,data.y);
	
			this.tramGroup.add(tram);
		},this);
		
		var spineData = this.findObjectsByType('spike',this.map,'objectsLayer');
		this.spineGroup = this.game.add.group();
		spineData.forEach(function(data){
			var spine=new Spine(this.game,data.x,data.y,'spike');
			this.spineGroup.add(spine);
		},this);
		
					 }	
					 
					 

					 
			///
	var enemyData = this.findObjectsByType('enemy',this.map,'objectsLayer');
		this.enemyGroup = this.game.add.group();
		enemyData.forEach(function(data){
		
		 
			var enemy=new Enemy(this.game,data.x,data.y,this.game.rnd.integerInRange(1,2),this.player);
			this.enemyGroup.add(enemy);
		},this);
					 
					 
						this.game.camera.follow(this.player);
						this.weaponsGroup=this.game.add.group();
					
				
    },
    update:function(){
    	if(this.cursors.down.isDown){
       
          this.createBullets();
          
      }
       	this.game.physics.arcade.collide(this.enemyGroup,this.collisionLayer);
      
		
      this.game.physics.arcade.collide(this.door,this.collisionLayer);
         this.game.physics.arcade.collide(this.spineGroup,this.collisionLayer);
       this.game.physics.arcade.collide(this.tramGroup,this.collisionLayer);
       this.game.physics.arcade.collide(this.player,this.collisionLayer);
        this.game.physics.arcade.collide(this.keyGroup,this.collisionLayer);
       	this.game.physics.arcade.collide(this.player,this.tramGroup,this.Bounce,null,this);
       		 
       
      
    
       	
        this.game.physics.arcade.overlap(this.player,this.spineGroup,function(){
      this.player.kill();
    	this.game.state.start('Gameover');
    },null,this);
    
     this.game.physics.arcade.overlap(this.player,this.enemyGroup,function(player,enemy){
     	enemy.kill();
     this.lives-=1;
    if(this.lives <0){
    	this.player.kill();
    	this.game.state.start('Gameover');
    }
    
     console.log(this.lives);
    },null,this);
    
     this.game.physics.arcade.overlap(this.player,this.door,function(){
       if(this.keyGroup.length === 0){
       	this.changeLevel();
       } 
      
    if(this.keyGroup.length === 0 && this.Level==3){
       	this.game.state.start('Gameover');
       } 
    },null,this);
       
       
       
  
 
       this.game.physics.arcade.overlap(this.weaponsGroup,this.enemyGroup,function(bullet,enemy){
       bullet.kill();
    
       enemy.kill();
       
    },null,this);
    
       
     this.game.physics.arcade.overlap(this.player,this.keyGroup,function(player,key){
       key.destroy();
     console.log(this.keyGroup.length);
      
       
    },null,this);
    
      
      
    },
  
  /* render:function() {

   
        this.game.debug.bodyInfo(this.player, 32, 32);
        this.game.debug.body(this.player);

}, */
findObjectsByType: function(targetType, tilemap, layer){
		var result = [];
		tilemap.objects[layer].forEach(function(element){
			if(element.properties.type == targetType) {
				element.y -= tilemap.tileHeight; 
				result.push(element);
			}
		}, this);
		return result;
},
	Bounce:function(){
	
	 if(this.player.body.touching.down ){
	 	this.soundTram.play();
	 	this.player.body.velocity.y=-500;
	    
	 }
	 
	}
	,
    createBullets:function(){
      
    if(this.game.time.now >this.guntime){
        this.player.Shoot();
        this.soundAttack.play();
        var gun=this.weaponsGroup.getFirstDead();
      if(gun)
      {
         
        gun.reset(this.player.x,this.player.y-5);
        gun.dirrecion=this.player.scale.x;
        
      }
     else{
     	  
       gun=new Weapon(game,this.player.x,this.player.y-5,this.player.scale.x,'weapon');
        
      this.weaponsGroup.add(gun);
       
     } 
    
      
      this.guntime = this.game.time.now + 500;
      
      
      }
       
      console.log(this.weaponsGroup.length);
      
 } ,
 
   changeLevel:function(){
   	console.log(this.enemyGroup.length);
   	 if(this.changeNextLevel){
	 	this.changeNextLevel = false;
	 	this.Level++;
	 	this.game.state.start('Game',true,false,this.Level,this.lives);//true para limpiar todo el munod and false 
	 	
	 }	
   } 
}