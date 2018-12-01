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
        hunter.health = hunter.health - 15;
        
    }
}


function damage3 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.spell_attack;
    ghost_damage_sound.play();
    if(mage1.health<= 0){
        mage1.kill();
        level_2_flag = true;
    }
}

function damage4 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
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
    if(mage1.health<= 0){
        mage1.kill();
        level_3_flag -= 1;
    }
}

function damage6 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
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
    if(mage1.health<= 0){
        mage1.kill();
        level_7_flag = true;
    }
}

function damage8 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
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
    if(mage1.health<= 0){
        mage1.kill();
        level_8_flag = true;
    }
}

function damage10 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
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
    if(mage1.health<= 0){
        mage1.kill();
        level_9_flag -= 1;
    }
}

function damage13 (mage1, spell1){
    spell1.kill();
    mage1.health -= hunter.melee_attack;
    ghost_damage_sound.play();
    if(mage1.health<= 0){
        mage1.kill();
        level_9_flag -= 1;
    }
}
