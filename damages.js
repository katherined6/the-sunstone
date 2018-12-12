function damage1 (rat, spell1){
    spell1.kill();
    rat.kill();
    magedeath_sound.play();
    // reduce level flag to show enemy killed
    level_flag = level_flag - 1;
    console.log(level_flag);
}


function damage2 (hunters, rat){
    if(game.time.now > nDamage){
        nDamage = game.time.now + dpsTime;
        if (hunter.health > 0){
            player_damage_sound.play();
        }
        
        var dmg = 30 - hunter.armor;
        if (dmg <= 10){
            hunter.health -= 10;
        }
        else{
            hunter.health -= dmg;
        }
       
    }
}


function damage3 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/100", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_2_flag = true;
    }
}

function damage4 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/100", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_2_flag = true;
    }
}




// damages for state 3
function damage5 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/100", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_3_flag -= 1;
    }
}

function damage6 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/100", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_3_flag -= 1;
    }
}




// damages for state 7
function damage7 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "40px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_7_flag = true;
    }
}

function damage8 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_7_flag = true;
    }
}






// damages for state 8
function damage9 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_8_flag = true;
    }
}

function damage10 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_8_flag = true;
    }
}





// damages for state 9
function damage11 (rat, spell1){
    spell1.kill();
    rat.kill();
    magedeath_sound.play();
    // reduce level flag to show enemy killed
    level_9_flag = level_9_flag - 1;
    console.log(level_flag);
}

function damage12 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_9_flag -= 1;
    }
}

function damage13 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, mage1.health + "/150", { font: "48px VT323", fill: "#fce923", align: "center" });
    mage1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    if(mage1.health<= 0){
        mage1.kill();
        level_9_flag -= 1;
    }
}





// damages for final boss
// spell damage
function damage14 (boss1, spell1){
    spell1.kill();
    boss1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, boss1.health + "/250", { font: "48px VT323", fill: "#fce923", align: "center" });
    boss1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    boss1.body.velocity.x += 12;
    boss1.body.velocity.y += 12;
    if(boss1.health<= 0){
        boss1.kill();
        death1 = true;
    }
}
// melee damage
function damage15 (boss1, spell1){
    spell1.kill();
    boss1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    
    // health text
    var health_text = game.add.text(25, -25, boss1.health + "/250", { font: "48px VT323", fill: "#fce923", align: "center" });
    boss1.addChild(health_text);
    var healthTimer = game.time.create(true);
    healthTimer.add(1000, function(){ health_text.kill();}, this);
    healthTimer.start();
    
    boss1.body.velocity.x += 12;
    boss1.body.velocity.y += 12;
    if(boss1.health<= 0){
        boss1.kill();
        death1 = true;
    }
}

// melee damage from boss
function damage16 (hunters, boss1){
    if(game.time.now > nDamage){
        nDamage = game.time.now + dpsTime;
        if (hunter.health > 0){
            player_damage_sound.play();
        }
        
        var dmg = 60 - hunter.armor;
        if (dmg <= 20){
            hunter.health -= 20;
        }
        else{
            hunter.health -= dmg;
        }
    }
}
// projectile damage from boss
function damage17 (hunters, bProj1){
    // kill projectile
    bProj1.kill();    
    console.log('hit');
        
    if (hunter.health > 0){
        player_damage_sound.play();
    }
    
    var dmg = 40 - hunter.armor;
        if (dmg <= 15){
            hunter.health -= 15;
        }
        else{
            hunter.health -= dmg;
        }
    
}