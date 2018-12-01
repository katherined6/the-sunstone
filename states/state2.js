var level_2_flag = false, cleared2 = true, key2;
sun_stone.state2 = function(){};
sun_stone.state2.prototype = {
    preload: function(){
        game.load.tilemap('map2', 'assets/tilemaps/map2.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map2 = game.add.tilemap('map2');
        map2.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map2.createLayer('Ground');
        walls = map2.createLayer('Walls');
        wallsEmpty = map2.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map2.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(625, 620, 'hunterS')} 
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
        
        
        
        
        
        
        
        
        //enemy
        rats = game.add.group();
        rats.enableBody = true;
        rats.forEach(function(rat){rat.body.bounce.x=1});
        
        // create multiple enemies
        
        for (var i = 1; i < 4; i++){
             
             
            rat = rats.create(1190, i *150, 'rat');
            rat.scale.setTo(1,1)
            rat.health = 18;
        
            // enable physics on rat
            game.physics.arcade.enable(rat);
            //bind rat to creen
            rat.body.collideWorldBounds = true;
            
            rat.body.velocity.x = 30;
            rat.body.bounce.x = 1;
            rat.animations.add('move', [4,5,6,7], 5, true);
            rat.animations.play('move');
            
             }
        for (var i = 1; i < 3; i++){
            rat = rats.create(90, i*300, 'rat' );
            rat.scale.setTo(-1,1);
            rat.health = 18;
            
            
            game.physics.arcade.enable(rat);
            rat.body.collideWorldBounds = true;
            
            rat.body.velocity.x = 50;
            rat.body.bounce.x = 1;
            rat.animations.add('move', [4,5,6,7], 5, true);
            rat.animations.play('move');
            
        }
    
        for (var i = 0; i < 2; i++){
            rat = rats.create(590, (i*105)+75, 'rat' );
            rat.scale.setTo(-1,1);
            rat.health = 18;
            
            
            game.physics.arcade.enable(rat);
            rat.body.collideWorldBounds = true;
            
            rat.body.velocity.x = 100;
            rat.body.bounce.x = 1;
            rat.animations.add('move', [4,5,6,7], 5, true);
            rat.animations.play('move');
            
        }
        
        for (var i = 1; i < 3; i++){
            rat = rats.create(620, (i*100)+300, 'rat' );
            rat.scale.setTo(-1,1);
            rat.health = 18;
            
            
            game.physics.arcade.enable(rat);
            rat.body.collideWorldBounds = true;
            
            rat.body.velocity.x = 100;
            rat.body.bounce.x = 1;
            rat.animations.add('move', [4,5,6,7], 5, true);
            rat.animations.play('move');
            
        }
        
        
        //enemy mage
        enemy1 = game.add.group();
        enemy1.enableBody = true;
        enemy1.forEach(function(mage1){mage1.body.bounce.x=1});
        
        mage1 = enemy1.create(100, 310, 'enemywizard' );

        mage1.health = 100;
            
            
        game.physics.arcade.enable(mage1);
        mage1.body.collideWorldBounds = true;
            
        mage1.body.bounce.x = 1;
        mage1.animations.add('walk', [0,1,2,3,4,5], 6, true);
        mage1.animations.play('walk');
        


            
        
        
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
        
        room2Door = game.add.sprite(640, 685, 'door');
        game.physics.arcade.enable(room2Door);
        room2Door.frame = 1
        
        
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
        if(room2Door.frame == 1){
            game.physics.arcade.overlap(hunterS, room2Door, room1Enter, null, this);
        }
        
        //update stats
        health_stat.setText("Health: "+ hunter.health +"/"+ hunter.health_max)
        mana_stat.setText("Mana: "+ hunter.mana +"/"+ hunter.mana_max)
        
        //mana regen
        //first number is the timer, second is max mana
        if (game.time.now - manaTick > 1000){
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
        
        game.physics.arcade.overlap(mage1, spells_lr, damage3, null,this);
        
        game.physics.arcade.overlap(rats, spells_ud, damage1, null, this);
        
        game.physics.arcade.collide(walls, spells_ud, spellCollide, null, this);
        
        game.physics.arcade.overlap(enemy, spells_ud, damage1, null,this);
        
        game.physics.arcade.overlap(mage1, spells_ud, damage3, null,this);
        
        
        // colide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(rats, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(mage1, hitboxes, damage4, null, this);

        
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, mage1, damage2, null, this);
        
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key2, pickupK2, null, this);
        
        // collide player with drop item and equip it
        game.physics.arcade.overlap(hunterS, dropR1S, function(hunterS, dropR1S){pick_up(hunterS, dropR1S, dropR1 );}, null, this);
        
        // kill player if health below zero
        if(hunter.health <= 0){
            //hunterS.kill();
            hunter.health = 0;
            attacking = true;
            // death text
            d_text = game.add.text(game.world.centerX, game.world.centerY, "You Died\nPress R to restart at the nearest checkpoint", { font: "50px VT323", fill: "#ff0044", align: "center" });
            d_text.anchor.setTo(0.5,0.5);
            //hunterS.animations.play('death'); 
            if(hunter.death == false){
                hunterS.animations.play('death');
                hunter.death = true;
            }
            restartKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
            restartKey.onDown.addOnce(removeD_text, this);            
            restartKey.onDown.add(restartAtLevel1, this);
            
        }
        
        
        
        if (inventory.keyR1 == true){
            room1Door.frame = 1
        }
        
        game.physics.arcade.moveToObject(mage1, hunterS, 100);

        
        
        
        if (level_2_flag & cleared2){
            
            // get random item
            drop_idx = rand_d();
            dropR1 = drop_items[drop_idx];
            console.log(drop_idx);
            console.log(dropR1);
            
            // spawn key
            key2 = game.add.sprite(600, 300, 'key');
            key2.scale.setTo(0.5,0.5);
            // enable physics
            game.physics.arcade.enable(key2);
            
            // random drop for room 1
            dropR1S = game.add.sprite(500, 300, 'chest');
            dropR1S.scale.setTo(0.5,0.5);
            // enable physics
            game.physics.arcade.enable(dropR1S);
            //only drops once
            cleared2 = false;
        }
        
        
        
        
    }
    
    
};





// put key 2 into inventory
function pickupK2(hunterS, key2){
    // kill sprite
    key2.kill();
    key_sound.play();
    // change boolean in inventory
    inventory.keyR2 = true;
    
    console.log(inventory.keyR2);
}
