{"changed":true,"filter":false,"title":"Menu.js","tooltip":"/scripts/Menu.js","value":"Menu = function(game){Menu}\n var myLives=3;\nMenu.prototype = {\n    preload:function(){\n      \n      \n     this.style1 = { font: 'bold 25pt Comic sans', fill: 'white', align: 'left', wordWrap: true, wordWrapWidth: 600 };\n     \n       this.textTi = this.game.add.text(180, 100, 'TRABAJO FINAL',this.style1);\n      this.textNanme = this.game.add.text(120, 200, 'RICHARD JULCA AMARO',this.style1);\n      \n      \n        this.button1=this.game.add.image(200,300,'startButton');\n       \n     \n       \n       \n    \n      this.button1.inputEnabled=true;\n      this.button1.events.onInputDown.add(this.startGame,this);\n     \n    \n    },\n  \n    startGame:function(){\n      \n        this.game.state.start('Game');\n    },\n}","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":1,"column":0},"end":{"row":1,"column":15},"action":"insert","lines":[" var myLives=3;"],"id":310}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":5},"end":{"row":1,"column":12},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":16,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1467427848919}