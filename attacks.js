var nAtt = 0, attRate = 500;

function melee_attack(){
    
    if(game.time.now > nAtt){
        
        nAtt = game.time.now + attRate;
        
        if (hunter.health > 0){
        attacking = true;
        sword_slash.play();

        if(last_arrow == 0){
            hitbox = hitboxes.create(0,0,null);
            hitbox.anchor.setTo(.5,.5);
            hitbox.enableBody = false;
            hunterS.animations.play('att_l');
            hitbox.body.setSize(25,30,5,15);
            hitbox.enableBody = true;

        }
        else if(last_arrow == 1){
            hitbox = hitboxes.create(0,0,null);
            hitbox.anchor.setTo(.5,.5);
            hitbox.enableBody = false;
            hunterS.animations.play('att_r');
            hitbox.body.setSize(25,30,50,15);
            hitbox.enableBody = true;
        }
        else if(last_arrow == 2){
            hitbox = hitboxes.create(0,0,null);
            hitbox.anchor.setTo(.5,.5);
            hitbox.enableBody = false;
            hunterS.animations.play('att_d');
            hitbox.body.setSize(50,25,11,40);
            hitbox.enableBody = true;
        }
        else if(last_arrow == 3){
            hitbox = hitboxes.create(0,0,null);
            hitbox.anchor.setTo(.5,.5);
            hitbox.enableBody = false;
            hunterS.animations.play('att_u');
            hitbox.body.setSize(50,25,11,0);
            hitbox.enableBody = true;
        }

        var moveTimer = game.time.create(true);
        moveTimer.add(700, function(){ attacking = false;}, this);
        moveTimer.start();

        var hitboxTimer = game.time.create(true);
        hitboxTimer.add(500, function(){ hitbox.kill();}, this);
        hitboxTimer.start();
        }

    }
    
    
}



// attack
function attack(){
    if((hunter.mana >= hunter.spell_attack) & (game.time.now > nFire)){
        if (hunter.health > 0){
            attacking = true;
    
            if(last_arrow == 0){
                hunterS.animations.play('att_l');
                sp_attack_l();
            }
            else if(last_arrow == 1){
                hunterS.animations.play('att_r');
                sp_attack_r();
            }
            else if(last_arrow == 2){
                hunterS.animations.play('att_d');
                sp_attack_d();
            }
            else if(last_arrow == 3){
                hunterS.animations.play('att_u');
                sp_attack_u();
            }
    
            
        }
    
    
    
        var moveTimer = game.time.create(true);
        moveTimer.add(700, function(){ attacking = false;}, this);
        moveTimer.start();
    }

}

// shoot spell left
function sp_attack_l(){
    if (hunter.health > 0){
        
            spellcast_sound.play();
            nFire = game.time.now + fireR;
            var spell1 = spells_lr.getFirstDead();
            hunter.mana = hunter.mana - hunter.spell_attack;
            spell1.scale.setTo(-1,1);
            spell1.reset(hunterS.x + 40, hunterS.y + 20);
            spell1.body.velocity.x = -400;

         
    }
}
// shoot spell right
function sp_attack_r(){
    if (hunter.health > 0){
     
            spellcast_sound.play();
            nFire = game.time.now + fireR;
            var spell1 = spells_lr.getFirstDead();
            hunter.mana = hunter.mana - hunter.spell_attack;
            spell1.scale.setTo(1,1);
            spell1.reset(hunterS.x + 25, hunterS.y + 20);
            spell1.body.velocity.x = 400;

        
    }
}
//IN TESTING
function sp_attack_u(){
    if (hunter.health > 0){
        
            spellcast_sound.play();
            nFire = game.time.now + fireR;
            var spell1 = spells_ud.getFirstDead();
            hunter.mana = hunter.mana - hunter.spell_attack;
            spell1.scale.setTo(1,1);
            spell1.reset(hunterS.x + 25, hunterS.y - 10 );
            spell1.body.velocity.y = -400;

           
    }
}
//IN TESTING
function sp_attack_d(){
    if (hunter.health > 0){
        
            spellcast_sound.play();
            nFire = game.time.now + fireR;
            var spell1 = spells_ud.getFirstDead();
            hunter.mana = hunter.mana - hunter.spell_attack;
            spell1.scale.setTo(1,-1);
            spell1.reset(hunterS.x + 25, hunterS.y + 70);
            spell1.body.velocity.y = 400;

           
    }
}
