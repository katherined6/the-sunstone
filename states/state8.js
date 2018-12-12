var level_8_flag = false, cleared8 = false, key8, dropR8, dropR8S;
sun_stone.state8 = function(){};
sun_stone.state8.prototype = {
    preload: function(){
        game.load.tilemap('map8', 'assets/tilemaps/map8.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map8 = game.add.tilemap('map8');
        map8.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map8.createLayer('Ground');
        walls = map8.createLayer('Walls');
        wallsEmpty = map8.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map8.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')}
        else if (hunter.doorPosition == 14){
            hunterS = game.add.sprite(610, 60, 'hunterS')}  
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
        
        mage8 = enemy.create(510,410,'knight');
        mage8.scale.setTo(1.3,1.3);
        create_enemy(mage8,-40,40,1,1,50);
        mage8.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage8.animations.play('walk');
        
        mage9 = enemy.create(700,410,'knight');
        mage9.scale.setTo(1.3,1.3);
        create_enemy(mage9,40,40,1,1,50);
        mage9.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage9.animations.play('walk');
        
        mage10 = enemy.create(710,275,'knight');
        mage10.scale.setTo(1.3,1.3);
        create_enemy(mage10,40,-40,1,1,50);
        mage10.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage10.animations.play('walk');
        
        mage11 = enemy.create(510,275,'knight');
        mage11.scale.setTo(1.3,1.3);
        create_enemy(mage11,-40,-40,1,1,50);
        mage11.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage11.animations.play('walk');
        
        
        //enemy mage
        enemy1 = game.add.group();
        enemy1.enableBody = true;
        enemy1.forEach(function(mage1){mage1.body.bounce.x=1});
        
        //something is causing this enemy to not damage or collide
        mage12 = enemy1.create(605,342.5,'knight');
        mage12.scale.setTo(1.7,1.7);
        mage12.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage12.animations.play('walk');
        mage12.health = 150;
        
        mage13 = enemy.create(1175,75,'knight');
        mage13.scale.setTo(1.3,1.3);
        create_enemy(mage13,0,0,1,1,50);
        mage13.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage13.animations.play('walk');
        
        mage14 = enemy.create(35,75,'knight');
        mage14.scale.setTo(1.3,1.3);
        create_enemy(mage14,0,0,1,1,50);
        mage14.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage14.animations.play('walk');
        
        mage15 = enemy.create(35,630,'knight');
        mage15.scale.setTo(1.3,1.3);
        create_enemy(mage15,0,0,1,1,50);
        mage15.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage15.animations.play('walk');
        
        mage16 = enemy.create(1175,630,'knight');
        mage16.scale.setTo(1.3,1.3);
        create_enemy(mage16,0,0,1,1,50);
        mage16.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage16.animations.play('walk');
        
       
        
        


            
        
        
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
        
        
        
        // door to room 5
        room8Door = game.add.sprite(630, 48, 'door');
        game.physics.arcade.enable(room8Door);
        room8Door.frame = 1;
        
        
        
        
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
        game.physics.arcade.collide(mage12, walls)
        
        
        // door2 collison
        if(room8Door.frame == 1){
            game.physics.arcade.overlap(hunterS, room8Door, room5Enter4, null, this);
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
        game.physics.arcade.overlap(mage12, spells_ud, damage9, null,this);
        game.physics.arcade.overlap(mage12, spells_lr, damage9, null,this);
        game.physics.arcade.overlap(mage13, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage14, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage15, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage16, spells_ud, damage3, null,this);


        
        
        
        // colide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(rats, hitboxes, damage1, null, this);
        //game.physics.arcade.collide(mage1, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage8, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage9, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage10, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage11, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage12, hitboxes, damage10, null, this);
        game.physics.arcade.overlap(mage13, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage14, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage15, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage16, hitboxes, damage4, null, this);


        
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        //game.physics.arcade.overlap(hunterS, mage1, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage8, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage9, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage12, damage2, null, this);


        
        game.physics.arcade.moveToObject(mage12, hunterS, 80);
        game.physics.arcade.moveToObject(mage13, hunterS, 60);
        game.physics.arcade.moveToObject(mage14, hunterS, 60);
        game.physics.arcade.moveToObject(mage15, hunterS, 60);
        game.physics.arcade.moveToObject(mage16, hunterS, 60);


        
 

        
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key8, pickupK8, null, this);
        
        // collide player with drop item and equip it
        game.physics.arcade.overlap(hunterS, dropR8S, function(hunterS, dropR8S){pick_up(hunterS, dropR8S, dropR8 );}, null, this);
        
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
            level_8_flag = false;
            
        }
        
        
        
        // drop key and item 
        if(level_8_flag){
            if(!cleared8){
                // spawn key
                key8 = game.add.sprite(600, 300, 'key');
                key8.scale.setTo(0.5,0.5);
                // set physics
                game.physics.arcade.enable(key8);
                
                // get random item
                drop_idx = rand_d();
                dropR8 = drop_items[drop_idx];
                console.log(drop_idx);
                console.log(dropR8);
            
                // random drop for room 8
                dropR8S = game.add.sprite(500, 300, 'chest');
                dropR8S.scale.setTo(0.5,0.5);
                // enable physics
                game.physics.arcade.enable(dropR8S);
            }
            
            // reset flag
            level_8_flag = false;
        }
        
        
    }
    
    
};














// put key 8 into inventory, set flags
function pickupK8(hunterS, key8){
    // kill sprite
    key8.kill();
    
    key_sound.play();
    // change boolean in inventory
    inventory.keyR8 = true;
    
    
    
    // change cleared flag
    cleared8 = true;
    
    console.log(inventory.keyR8);
}


