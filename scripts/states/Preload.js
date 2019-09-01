Preload = function(game){
 //  var theme;
}

Preload.prototype = {
    preload:function(){
       this.preloading = this.game.add.sprite(0,0,'loading');
        this.preloading.anchor.setTo(0.5);
        
         this.preloading.x = this.game.world.centerX;
         this.preloading.y = this.game.world.centerY;
         this.game.load.audio("theme","assets/sounds/theme.ogg");
         this.game.load.audio("soundTram","assets/sounds/soundTram.ogg");
         this.game.load.audio("soundAttack","assets/sounds/soundAttack.ogg");
         this.game.load.image('heart','assets/images/heart.png');
         this.game.load.setPreloadSprite(this.preloading);
         this.game.load.spritesheet('rain', 'assets/images/rain.png', 17, 17);
         this.game.load.image('overTitle','assets/images/GameoverImage.png');
         this.game.load.image('startButton','assets/images/startGameBtn.png');
         this.game.load.image('menuButton','assets/images/buttonMenu.png');
         this.game.load.image('door','assets/images/doors.png');
         this.game.load.image('backGrounLevel1','assets/images/desert.png');
         this.game.load.image('tram','assets/images/tram.png');
         this.game.load.image('tilesLevel2','assets/images/RockTile.png');
         this.game.load.image('backGrounLevel2_1','assets/images/cavesalida.png');
         this.game.load.image('backGrounLevel3','assets/images/cavebackground.png');
         this.game.load.image('backGrounLevel2_2','assets/images/case2.jpg');
         this.game.load.image('spike','assets/images/Spikes_Rush.png');
         this.game.load.image('gameTilesback2','assets/images/desert.png');
                    
          this.game.load.image('tilesLevel1','assets/images/tiles_spritesheet.png');
           this.game.load.image('superKey','assets/images/Special_Key.png');
            this.game.load.tilemap('Level2','assets/jsons/Level2.json',
				null, Phaser.Tilemap.TILED_JSON);
				 this.game.load.tilemap('Level3','assets/jsons/Level3.json',
				null, Phaser.Tilemap.TILED_JSON);
       this.game.load.tilemap('Level1','assets/jsons/Level1.json',
				null, Phaser.Tilemap.TILED_JSON);
	
   
        this.game.load.atlas('hero', 'assets/images/hero.png','assets/jsons/hero.json');
        this.game.load.atlas('enemies', 'assets/images/enemies.png','assets/jsons/enemies.json');
        this.game.load.image('weapon','assets/images/weapon.png');
        // theme=this.add.audio("theme");
    		//	theme.play();
    },
    create:function(){
        this.game.state.start('Menu');
    }
}