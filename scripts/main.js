var game = new Phaser.Game(480,320,Phaser.AUTO);

game.state.add('Boost',Boost);
game.state.add('Gameover',Gameover);
game.state.add('Menu',Menu);
game.state.add('Preload',Preload);
game.state.add('Game',Game);

game.state.start('Boost');