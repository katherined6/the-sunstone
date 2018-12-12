var level_7_flag = false, cleared7 = false, key7, dropR7, dropR7S;
sun_stone.state7 = function(){};
sun_stone.state7.prototype = {
    preload: function(){
        game.load.tilemap('map7', 'assets/tilemaps/roomVertical.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map7 = game.add.tilemap('map7');
        map7.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map7.createLayer('Ground');
        walls = map7.createLayer('Walls');
        wallsEmpty = map7.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map7.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')}
        else if (hunter.doorPosition == 12){
            hunterS = game.add.sprite(610, 635, 'hunterS')}  
        else{
            hunterS = game.add.sprite(750, 500, 'hunterS');
        }
        
    
        //enable physics on hunter
        game.physics.arcade.enable(hunterS);
        //bind hunter to screen
        hunterS.body.collideWorldBounds = true;
        
        // create animations for movements
        hunterS.animations.add('move_d', [16,17,18,19,20,21], 10, false);
        hunterS.animations.add('move_u', [34,35,36,37,38,39], 10, false);
        hunterS.animations.add('move_l', [28,29,30,31,32,33], 10, false);
        hunterS.animations.add('move_r', [22,23,24,25,26,27], 10, false);
        hunterS.animations.add('idle', [0,1,2,3], 10, true);
        // create animations for attacks
        hunterS.animations.add('att_r', [40,41,42,43,44], 15, false);
        hunterS.animations.add('att_l', [45,46,47,48,49], 15, false);
        hunterS.animations.add('att_u', [55,56,57,58,59], 15, false);
        hunterS.animations.add('att_d', [50,51,52,53,54], 15, false);
        hunterS.animations.add('death', [101,102,103,104,105,106,107,108,109], 7, false);
        
        
        
        // create spells for projectiles
        spells_lr = game.add.group();
        spells_lr.enableBody = true;
        spells_lr.physicsBodyType = Phaser.Physics.ARCADE;
        spells_lr.createMultiple(hunter.mana/hunter.spell_attack, 'spell_lr');
        spells_ud = game.add.group();
        spells_ud.enableBody = true;
        spells_ud.physicsBodyType = Phaser.Physics.ARCADE;
        spells_ud.createMultiple(hunter.mana/hunter.spell_attack, 'spell_ud');
        
        
        
        
        enemy = game.add.group();
        enemy.enableBody = true;
        enemy.forEach(function(mage){mage.body.bounce.x=1});
        mage8 = enemy.create(1150,430,'spider');
        create_enemy(mage8,-100,0,1,1,50);
        mage8.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage8.animations.play('walk');
        
        mage9 = enemy.create(1150,380,'spider');
        create_enemy(mage9,-100,0,1,1,50);
        mage9.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage9.animations.play('walk');
        
        mage10 = enemy.create(1150,330,'spider');
        create_enemy(mage10,-100,0,1,1,50);
        mage10.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage10.animations.play('walk');
        
        mage11 = enemy.create(1150,280,'spider');
        create_enemy(mage11,-100,0,1,1,50);
        mage11.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage11.animations.play('walk');
        
        mage12 = enemy.create(1150,230,'spider');
        create_enemy(mage12,-100,0,1,1,50);
        mage12.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage12.animations.play('walk');
        
        mage13 = enemy.create(50,230,'spider');
        create_enemy(mage13,100,0,1,1,50);
        mage13.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage13.animations.play('walk');
        
        mage14 = enemy.create(50,280,'spider');
        create_enemy(mage14,100,0,1,1,50);
        mage14.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage14.animations.play('walk');
        
        mage15 = enemy.create(50,330,'spider');
        create_enemy(mage15,100,0,1,1,50);
        mage15.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage15.animations.play('walk');
        
        mage16 = enemy.create(50,330,'spider');
        create_enemy(mage16,100,0,1,1,50);
        mage16.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage16.animations.play('walk');
        
        mage17 = enemy.create(50,380,'spider');
        create_enemy(mage17,100,0,1,1,50);
        mage17.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage17.animations.play('walk');
        
        mage18 = enemy.create(50,430,'spider');
        create_enemy(mage18,100,0,1,1,50);
        mage18.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage18.animations.play('walk');
        

        mage25 = enemy.create(425,65,'spider');
        create_enemy(mage25,0,0,1,1,20);
        mage25.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage25.animations.play('walk');
        
        
        //enemy mage
        enemy1 = game.add.group();
        enemy1.enableBody = true;
        enemy1.forEach(function(mage1){mage1.body.bounce.x=1});
        
        mage26 = enemy1.create(618.5,200,'spider');
        mage26.scale.setTo(2.5,2.5);
        mage26.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage26.animations.play('walk');
        game.physics.arcade.enable(mage26);
        mage26.health = 150;
        
        mage27 = enemy.create(812,65,'spider');
        create_enemy(mage27,0,0,1,1,20);
        mage27.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage27.animations.play('walk');
        
        mage28 = enemy.create(812,300,'spider');
        create_enemy(mage28,-200,0,1,1,20);
        mage28.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage28.animations.play('walk');
        
        mage29 = enemy.create(410,300,'spider');
        create_enemy(mage29,200,0,1,1,20);
        mage29.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage29.animations.play('walk');
        
        mage30 = enemy.create(628,200,'spider');
        create_enemy(mage30,0,150,1,1,20);
        mage30.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage30.animations.play('walk');
        
        


            
        
        
        //create spell attack button
        spKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spKey.onDown.add(attack, this);
        
        // create melee attack button
        attKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        attKey.onDown.add(melee_attack, this);
        
        // show health of player
        health_stat = game.add.text(45, 8, 'Health: ' + hunter.health, { font: "32px VT323", fill: '#fff' });
        
        mana_stat = game.add.text(300, 8, 'Mana: ' + hunter.mana, { font: "32px VT323", fill: '#fff' });
        
        
        
        //menu
        pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
        pauseKey.onDown.add(startPause, this);
        
        // door from room 5
        room7Door = game.add.sprite(628, 684, 'door');
        game.physics.arcade.enable(room7Door);
        room7Door.frame = 1;
        
        
        // adjust sprite hitbox
        hunterS.body.setSize(23,34,23,13);
        
        // hitboxes for melee
        hitboxes = game.add.group();
        hitboxes.enableBody = true;
        hunterS.addChild(hitboxes);
        
        
        
        
    },
    
    update: function(){
        
            
        //set initial velocity as 0
        hunterS.body.velocity.x = 0;
        hunterS.body.velocity.y = 0;
        
        
        game.physics.arcade.collide(hunterS, walls);
        game.physics.arcade.collide(rats, walls);
        game.physics.arcade.collide(enemy, walls);
        
        
        
        // door collison
        if(room7Door.frame == 1){
            game.physics.arcade.overlap(hunterS, room7Door, room5Enter2, null, this);
        }
        
        //update stats
        health_stat.setText("Health: "+ hunter.health +"/"+ hunter.health_max)
        mana_stat.setText("Mana: "+ hunter.mana +"/"+ hunter.mana_max)
        
        //mana regen
        //first number is the timer, second is max mana
        if (game.time.now - manaTick > 750){
            if (hunter.mana < hunter.mana_max) {
                hunter.mana ++
            }
            manaTick = game.time.now;
        }
        
        //arrow key movement for hunter
        var cursors = game.input.keyboard.createCursorKeys();
        if(cursors.left.isDown & !attacking){
            // update last arrow
            last_arrow = 0;
            // adjust sprite hitbox
            hunterS.body.setSize(23,34,23,13);
            // add speed
            hunterS.body.velocity.x += -(hunter.speed);
            // play walk animation
            hunterS.animations.play('move_l');
            // play footsteps
            walking = true;
        }
        else if(cursors.right.isDown & !attacking){
            // update last arrow
            last_arrow = 1;
            // adjust sprite hitbox
            hunterS.body.setSize(23,34,23,13);
            // add speed
            hunterS.body.velocity.x += hunter.speed;
            // play walk animation
            hunterS.animations.play('move_r');  
            // play footsteps
            walking = true;
        }
        else if(cursors.down.isDown & !attacking){
            //update last arrow
            last_arrow = 2;
            // adjust sprite hitbox
            hunterS.body.setSize(23,34,23,13);
            // add speed
            hunterS.body.velocity.y += hunter.speed;
            //play animation
            hunterS.animations.play('move_d');   
            // play footsteps
            walking = true;
        }
        else if(cursors.up.isDown & !attacking){
            // update last arrow
            last_arrow = 3;
            // adjust sprite hitbox
            hunterS.body.setSize(23,34,23,13);
            // add speed
            hunterS.body.velocity.y += -hunter.speed;
            //play animation
            hunterS.animations.play('move_u');
            // play footsteps
            walking = true;
        }
        else if(!attacking){
            // play idle animation when player is still
            hunterS.animations.play('idle');
            // don't play footsteps
            walking = false;
            
        }
        if (walking & !walkingSoundPlayed){
            running_sound.play();
            walkingSoundPlayed = true;
        }
        else if (!walking & walkingSoundPlayed){
            running_sound.stop();
            walkingSoundPlayed = false;
        }
        
        
        
        // collide spells with rats 
        game.physics.arcade.overlap(rats, spells_lr, damage1, null, this);
        
        game.physics.arcade.collide(walls, spells_lr, spellCollide, null, this);
        
        game.physics.arcade.overlap(enemy, spells_lr, damage1, null,this);
        
        //game.physics.arcade.collide(mage1, spells_lr, damage3, null,this);
        
        game.physics.arcade.overlap(rats, spells_ud, damage1, null, this);
        
        game.physics.arcade.collide(walls, spells_ud, spellCollide, null, this);
        
        game.physics.arcade.overlap(enemy, spells_ud, damage1, null,this);
        
        //game.physics.arcade.collide(mage1, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage8, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage9, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage10, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage11, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage12, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage13, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage14, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage15, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage16, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage17, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage18, spells_ud, damage3, null,this);
       
        game.physics.arcade.overlap(mage25, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage26, spells_ud, damage7, null,this);
        game.physics.arcade.overlap(mage26, spells_lr, damage7, null,this);
        game.physics.arcade.overlap(mage27, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage28, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage29, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage30, spells_ud, damage3, null,this);
        
        
        
        // colide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(rats, hitboxes, damage1, null, this);
        //game.physics.arcade.collide(mage1, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage8, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage9, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage10, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage11, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage12, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage13, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage14, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage15, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage16, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage17, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage18, hitboxes, damage4, null, this);
       
        game.physics.arcade.overlap(mage25, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage26, hitboxes, damage8, null, this);
        game.physics.arcade.overlap(mage27, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage28, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage29, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage30, hitboxes, damage4, null, this);

        
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        //game.physics.arcade.overlap(hunterS, mage1, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage8, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage9, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage10, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage11, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage12, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage13, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage14, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage15, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage16, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage17, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage18, damage2, null, this);
       
        game.physics.arcade.overlap(hunterS, mage25, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage26, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage27, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage28, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage29, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage30, damage2, null, this);
        

       
       
        game.physics.arcade.moveToObject(mage25, hunterS, 50);
        game.physics.arcade.moveToObject(mage26, hunterS, 20);
        game.physics.arcade.moveToObject(mage27, hunterS, 50);

        
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key7, pickupK7, null, this);
        
        // collide player with drop item and equip it
        game.physics.arcade.overlap(hunterS, dropR7S, function(hunterS, dropR7S){pick_up(hunterS, dropR7S, dropR7 );}, null, this);
        
        // kill player if health below zero
        if(hunter.health <= 0){
            //hunterS.kill();
            hunter.health = 0;
            attacking = true;
            running_sound.stop();
            walkingSoundPlayed = false;
            // death text
            d_text = game.add.text(game.world.centerX, game.world.centerY, "You Died\nPress R to restart at the nearest checkpoint", { font: "50px VT323", fill: "#fce923", align: "center" });
            d_text.anchor.setTo(0.5,0.5);
            //hunterS.animations.play('death'); 
            if(hunter.death == false){
                hunterS.animations.play('death');
                hunter.death = true;
            }
            restartKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
            restartKey.onDown.addOnce(removeD_text, this);            
            restartKey.onDown.add(restartAtLevel1, this);
            
            // reset flag
            level_7_flag = false;
            
        }
        
        // drop key and item 
        if(level_7_flag){
            if(!cleared7){
                // spawn key
                key7 = game.add.sprite(600, 300, 'key');
                key7.scale.setTo(0.5,0.5);
                // set physics
                game.physics.arcade.enable(key7);
                
                // get random item
                drop_idx = rand_d();
                dropR7 = drop_items[drop_idx];
                console.log(drop_idx);
                console.log(dropR7);
            
                // random drop for room 1
                dropR7S = game.add.sprite(500, 300, 'chest');
                dropR7S.scale.setTo(0.5,0.5);
                // enable physics
                game.physics.arcade.enable(dropR7S);
            }
            
            // reset flag
            level_7_flag = false;
        }
        
        
    }
    
    
};












// put key 7 into inventory, set flags
function pickupK7(hunterS, key7){
    // kill sprite
    key7.kill();
    
    key_sound.play();
    // change boolean in inventory
    inventory.keyR7 = true;
    
    
    
    // change cleared flag
    cleared7 = true;
    
    console.log(inventory.keyR7);
}

