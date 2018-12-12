sun_stone.state6 = function(){};
sun_stone.state6.prototype = {
    preload: function(){
        game.load.tilemap('map6', 'assets/tilemaps/roomHorizontal.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map6 = game.add.tilemap('map6');
        map6.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map6.createLayer('Ground');
        walls = map6.createLayer('Walls');
        wallsEmpty = map6.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map6.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')}
        else if (hunter.doorPosition == 11){
            hunterS = game.add.sprite(1180, 340, 'hunterS')} 
        else if (hunter.doorPosition == 15){
            hunterS = game.add.sprite(60, 340, 'hunterS')}  
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
        mage8 = enemy.create(80,250,'enemymage');
        create_enemy(mage8,200,0,1,1,50);
        mage8.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage8.animations.play('walk');
        
        mage9 = enemy.create(80,280,'enemymage');
        create_enemy(mage9,0,200,1,1,50);
        mage9.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage9.animations.play('walk');
        
        mage10 = enemy.create(80,485,'enemymage');
        create_enemy(mage10,200,0,1,1,50);
        mage10.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage10.animations.play('walk');
        
        mage11 = enemy.create(680,250,'enemymage');
        create_enemy(mage11,0,200,1,1,50);
        mage11.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage11.animations.play('walk');
        
        mage12 = enemy.create(1200,300,'zombiewizard');
        create_enemy(mage12,120,-100,1,1,50);
        mage12.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage12.animations.play('walk');
        

        mage15 = enemy.create(100,500,'zombiewizard');
        create_enemy(mage15,120,-100,1,1,50);
        mage15.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage15.animations.play('walk');
        

        

        
        mage18 = enemy.create(100,400,'zombiewizard');
        create_enemy(mage18,180,-100,1,1,50);
        mage18.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage18.animations.play('walk');
        

        
        


            
        
        
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
        room6Door1 = game.add.sprite(1233, 380, 'door');
        game.physics.arcade.enable(room6Door1);
        room6Door1.rotation = -1.57;
        room6Door1.frame = 1;
        room6Door1.body.setSize(50,50,-25,-40);
        
        // door to room 8 or 9
        room6Door2 = game.add.sprite(32, 380, 'door');
        game.physics.arcade.enable(room6Door2);
        room6Door2.rotation = -1.57;
        room6Door2.frame = 1;
        room6Door2.body.setSize(50,50,0,-40);
        
        
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
        
        if(room6Door1.frame == 1){
            game.physics.arcade.overlap(hunterS, room6Door1, room5Enter3, null, this);
        }
        
        
        if(room6Door2.frame == 1){
            game.physics.arcade.overlap(hunterS, room6Door2, room9Enter, null, this);
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
        game.physics.arcade.overlap(mage15, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage18, spells_ud, damage3, null,this);
        
        
        // colide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        game.physics.arcade.overlap(rats, hitboxes, damage1, null, this);
        //game.physics.arcade.collide(mage1, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage8, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage9, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage10, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage11, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage12, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage15, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage18, hitboxes, damage4, null, this);


        
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        //game.physics.arcade.overlap(hunterS, mage1, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage8, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage9, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage10, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage11, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage12, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage15, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage18, damage2, null, this);
        
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key1, pickupK1, null, this);
        
        // collide player with drop item and equip it
        game.physics.arcade.overlap(hunterS, dropR1S, function(hunterS, dropR1S){pick_up(hunterS, dropR1S, dropR1 );}, null, this);
        
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
            
        }
           
        
    }
    
    
};