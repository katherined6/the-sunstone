var level_3_flag = 2, cleared3 = false, key3;

sun_stone.state3 = function(){};
sun_stone.state3.prototype = {
    preload: function(){
        game.load.tilemap('map3', 'assets/tilemaps/map3.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map3 = game.add.tilemap('map3');
        map3.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map3.createLayer('Ground');
        walls = map3.createLayer('Walls');
        wallsEmpty = map3.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map3.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')} 
        else if (hunter.doorPosition == 4){
            hunterS = game.add.sprite(1180, 315, 'hunterS')}
        else if (hunter.doorPosition == 5){
            hunterS = game.add.sprite(45, 310, 'hunterS')}
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
        

        mage2 = enemy1.create(800, 310, 'enemywizard' );

        mage2.health = 100;
            
            
        game.physics.arcade.enable(mage2);
        mage2.body.collideWorldBounds = true;
            
        mage2.body.bounce.x = 1;
        mage2.animations.add('walk', [0,1,2,3,4,5], 6, true);
        mage2.animations.play('walk');
        
        enemy = game.add.group();
        enemy.enableBody = true;
        enemy.forEach(function(mage){mage.body.bounce.x=1});
            //mage = game.add.sprite(1150,i * 205, 'enemymage');
            mage = enemy.create(100, 310, 'enemymage' );

            mage.health = 18;
            
            
            game.physics.arcade.enable(mage);
            mage.body.collideWorldBounds = true;
            
            mage.body.velocity.x = 200;
            mage.body.velocity.y = 20;
            mage.body.bounce.x = 1;
            mage.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage.animations.play('walk');
        
            mage4 = enemy.create(300,300,'enemymage');
            create_enemy(mage4,20,200,1,1,50);
            mage4.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage4.animations.play('walk');
        
            mage5 = enemy.create(600,600,'enemymage');
            create_enemy(mage5,200,-20,1,0,50);
            mage5.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage5.animations.play('walk');
        
            mage6 = enemy.create(1000,300,'enemymage');
            create_enemy(mage6,-20,200,1,1,50);
            mage6.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage6.animations.play('walk');
            
            mage7 = enemy.create(500,80,'enemymage');
            create_enemy(mage7,-20,200,1,1,50);
            mage7.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage7.animations.play('walk');
        
        
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
        
        // door from room1 
        room3Door1 = game.add.sprite(1232, 350, 'door');
        game.physics.arcade.enable(room3Door1);
        room3Door1.rotation = -1.57;
        room3Door1.frame = 1;
        room3Door1.body.setSize(50,50,-25,-30);
        
        
        // door leading to room4
        room3Door2 = game.add.sprite(32, 350, 'door');
        game.physics.arcade.enable(room3Door2);
        room3Door2.frame = 0;
        room3Door2.rotation = -1.57;
        room3Door2.body.setSize(50,50,0,-40);
        
        // adjust sprite hitbox
        hunterS.body.setSize(23,34,23,13);
        
        // hitboxes for melee
        hitboxes = game.add.group();
        hitboxes.enableBody = true;
        hunterS.addChild(hitboxes);
        
        // set check point
        checkPoint = 2;
        
        
    },
    
    update: function(){
        
            
        //set initial velocity as 0
        hunterS.body.velocity.x = 0;
        hunterS.body.velocity.y = 0;
        
        
        game.physics.arcade.collide(hunterS, walls);
        game.physics.arcade.collide(rats, walls);
        game.physics.arcade.collide(enemy, walls);
        
       
        
        
        // enter room1
        game.physics.arcade.overlap(hunterS, room3Door1, room1Enter2, null, this);
        
        
        
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
        
        game.physics.arcade.overlap(mage1, spells_lr, damage5, null,this);
        
        game.physics.arcade.overlap(mage2, spells_lr, damage5, null,this);
        
        game.physics.arcade.overlap(mage, spells_lr, damage3, null,this);

        game.physics.arcade.overlap(mage4, spells_lr, damage3, null,this);

        game.physics.arcade.overlap(mage5, spells_lr, damage3, null,this);

        game.physics.arcade.overlap(mage6, spells_lr, damage3, null,this);

        
        game.physics.arcade.overlap(rats, spells_ud, damage1, null, this);
        
        game.physics.arcade.collide(walls, spells_ud, spellCollide, null, this);
        
        game.physics.arcade.overlap(enemy, spells_ud, damage1, null,this);
        
        game.physics.arcade.overlap(mage1, spells_ud, damage5, null,this);
        
        game.physics.arcade.overlap(mage2, spells_ud, damage5, null,this);

        game.physics.arcade.overlap(mage, spells_ud, damage3, null,this);

        game.physics.arcade.overlap(mage4, spells_ud, damage3, null,this);

        game.physics.arcade.overlap(mage5, spells_ud, damage3, null,this);

        game.physics.arcade.overlap(mage6, spells_ud, damage3, null,this);

        
        // colide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(rats, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(mage1, hitboxes, damage6, null, this);
        game.physics.arcade.overlap(mage2, hitboxes, damage6, null, this);
        game.physics.arcade.overlap(mage, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage4, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage5, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage6, hitboxes, damage4, null, this);



        
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, mage1, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, mage2, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, mage, damage2, null, this);

        game.physics.arcade.overlap(hunterS, mage4, damage2, null, this);

        game.physics.arcade.overlap(hunterS, mage5, damage2, null, this);

        game.physics.arcade.overlap(hunterS, mage6, damage2, null, this);


        
        
        
        
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
        
        // drop key for next door when two bosses killed
        if (level_3_flag <= 0){
            
            if(!cleared3){
                // spawn key
                key3 = game.add.sprite(600, 300, 'key');
                key3.scale.setTo(0.5,0.5);
                // set physics
                game.physics.arcade.enable(key3);
            }
            
            // reset flag
            level_3_flag = 2;
        }
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key3, pickupK3, null, this);
        
        // open door when key is picked up
        if (inventory.keyR3){
            room3Door2.frame = 1;
        }
        
        // set up passing through door with key 
        if (room3Door2.frame == 1){
            // enter room4
            game.physics.arcade.overlap(hunterS, room3Door2, room4Enter, null, this);
        }
        
        
        game.physics.arcade.moveToObject(mage1, hunterS, 100);
        game.physics.arcade.moveToObject(mage2, hunterS, 25);
        
        
    }
};


// put key 3 into inventory, set flags
function pickupK3(hunterS, key3){
    // kill sprite
    key3.kill();
    
    key_sound.play();
    // change boolean in inventory
    inventory.keyR3 = true;
    
    
    
    // change cleared flag
    cleared3 = true;
    
    console.log(inventory.keyR3);
}
