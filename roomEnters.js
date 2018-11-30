function room1Enter(){
    
    // set hunter position 
    hunter.doorPosition = 3;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state1');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
    
}

function room1Enter2(){
    
     // set hunter position 
    hunter.doorPosition = 2;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state1');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}



function room2Enter(){
    
    // set hunter position
    hunter.doorPosition = 1;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state2');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room3Enter(){
    
    // set hunter position
    hunter.doorPosition = 4;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state3');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room3Enter2(){
    // set hunter position
    hunter.doorPosition = 5;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state3');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room4Enter(){
    // set hunter position
    hunter.doorPosition = 6;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state4');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room4Enter2(){
    // set hunter position
    hunter.doorPosition = 7;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state4');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}


function room5Enter(){
    // set hunter position
    hunter.doorPosition = 8;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state5');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room5Enter2(){
    // set hunter position
    hunter.doorPosition = 9;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state5');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room5Enter3(){
    // set hunter position
    hunter.doorPosition = 10;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state5');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room5Enter4(){
    // set hunter position
    hunter.doorPosition = 13;
    // action key for door
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state5');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}


function room6Enter(){
    // set hunter position
    hunter.doorPosition = 11;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state6');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room6Enter2(){
    // set hunter position
    hunter.doorPosition = 15;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state6');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room7Enter(){
    // set hunter position
    hunter.doorPosition = 12;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state7');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}


function room8Enter(){
    // set hunter position
    hunter.doorPosition = 14;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state8');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room9Enter(){
    // set hunter position
    hunter.doorPosition = 16;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state9');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room9Enter2(){
    // set hunter position
    hunter.doorPosition = 17;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state9');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}

function room10Enter(){
    // set hunter position
    hunter.doorPosition = 18;
    // action key for door
    console.log('door');
    var doorKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    doorKey.onDown.add(function(){game.state.start('state10');}, this);
    //stop footstep sound
    running_sound.stop();
    walkingSoundPlayed = false;
}