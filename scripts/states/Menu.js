Menu = function(game){Menu}
 var myLives=3;
Menu.prototype = {
    preload:function(){
      
      
     this.style1 = { font: 'bold 25pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 600 };
     
       this.textTi = this.game.add.text(this.game.world.centerX-200, 20, 'TRABAJO FINAL',this.style1);
      this.textNanme = this.game.add.text(this.game.world.centerX-200, 100, 'RICHARD JULCA AMARO',this.style1);
      
      
        this.button1=this.game.add.image(this.game.world.centerX-90,200,'startButton');
       
     
       
       
    
      this.button1.inputEnabled=true;
      this.button1.events.onInputDown.add(this.startGame,this);
     
    
    },
  
    startGame:function(){
      
        this.game.state.start('Game');
    },
}