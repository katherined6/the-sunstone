var game = new Phaser.Game(1280, 736, Phaser.AUTO);
game.state.add('state0', sun_stone.state0);
game.state.add('state1', sun_stone.state1);
game.state.add('state2', sun_stone.state2);
game.state.add('state3', sun_stone.state3);
game.state.add('state4', sun_stone.state4);
game.state.add('state5', sun_stone.state5);
game.state.add('state6', sun_stone.state6);
game.state.add('state7', sun_stone.state7);
game.state.add('state8', sun_stone.state8);
game.state.add('state9', sun_stone.state9);
game.state.add('state10', sun_stone.state10);

game.state.start('state0');
