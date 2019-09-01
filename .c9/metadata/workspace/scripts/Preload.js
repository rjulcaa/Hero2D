{"changed":true,"filter":false,"title":"Preload.js","tooltip":"/scripts/Preload.js","value":"Preload = function(game){\n   \n}\n\nPreload.prototype = {\n    preload:function(){\n       this.preloading = this.game.add.sprite(0,0,'loading');\n        this.preloading.anchor.setTo(0.5);\n        \n        this.preloading.x = this.game.world.centerX;\n        this.preloading.y = this.game.world.centerY;\n          this.game.load.audio(\"soundAttack\",\"assets/sounds/soundAttack.ogg\");\n           this.game.load.audio(\"soundTram\",\"assets/sounds/soundTram.ogg\");\n            this.game.load.image('heart','assets/heart.png');\n        this.game.load.setPreloadSprite(this.preloading);\n        this.game.load.spritesheet('rain', 'assets/rain.png', 17, 17);\n            this.game.load.image('overTitle','assets/GameoverImage.png');\n       this.game.load.image('startButton','assets/startGameBtn.png');\n           this.game.load.image('menuButton','assets/buttonMenu.png');\n        this.game.load.image('door','assets/doors.png');\n        this.game.load.image('backGrounLevel1','assets/desert.png');\n           this.game.load.image('tram','assets/tram.png');\n           this.game.load.image('tilesLevel2','assets/RockTile.png');\n              this.game.load.image('backGrounLevel2_1','assets/cavesalida.png');\n               this.game.load.image('backGrounLevel3','assets/cavebackground.png');\n               this.game.load.image('backGrounLevel2_2','assets/case2.jpg');\n                  this.game.load.image('spike','assets/Spikes_Rush.png');\n                    this.game.load.image('gameTilesback2','assets/desert.png');\n                    \n          this.game.load.image('tilesLevel1','assets/tiles_spritesheet.png');\n           this.game.load.image('superKey','assets/Special_Key.png');\n            this.game.load.tilemap('Level2','assets/Level2.json',\n\t\t\t\tnull, Phaser.Tilemap.TILED_JSON);\n\t\t\t\t this.game.load.tilemap('Level3','assets/Level3.json',\n\t\t\t\tnull, Phaser.Tilemap.TILED_JSON);\n       this.game.load.tilemap('Level1','assets/Level1.json',\n\t\t\t\tnull, Phaser.Tilemap.TILED_JSON);\n\t\n        this.game.load.atlas('kill', 'assets/kill.png','assets/kill.json');\n        this.game.load.atlas('hero', 'assets/hero.png','assets/hero.json');\n        this.game.load.atlas('enemies', 'assets/enemies.png','assets/enemies.json');\n        this.game.load.image('weapon','assets/weapon.png');\n        \n    },\n    create:function(){\n        this.game.state.start('Menu');\n    }\n}","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":1,"column":3},"end":{"row":1,"column":18},"action":"remove","lines":[" var myLives=3;"],"id":278}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":3},"end":{"row":1,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1467440466219}