
sun_stone.state5 = function(){};
sun_stone.state5.prototype = {
    preload: function(){
        game.load.tilemap('map5', 'assets/tilemaps/roomCross.json', null, Phaser.Tilemap.TILED_JSON);
    },
    
    create: function(){
                
        var map5 = game.add.tilemap('map5');
        map5.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map5.createLayer('Ground');
        walls = map5.createLayer('Walls');
        wallsEmpty = map5.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map5.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')}
        else if (hunter.doorPosition == 8){
            hunterS = game.add.sprite(1175, 345, 'hunterS')} 
        else if (hunter.doorPosition == 9){
            hunterS = game.add.sprite(610, 67, 'hunterS')} 
        else if (hunter.doorPosition == 10){
            hunterS = game.add.sprite(40, 340, 'hunterS')} 
        else if (hunter.doorPosition == 13){
            hunterS = game.add.sprite(610, 630, 'hunterS')}
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
        hunterS.animations.add('att_r', [40,41,42,43,44], 10, false);
        hunterS.animations.add('att_l', [45,46,47,48,49], 10, false);
        hunterS.animations.add('att_u', [55,56,57,58,59], 10, false);
        hunterS.animations.add('att_d', [50,51,52,53,54], 10, false);
        hunterS.animations.add('death', [101,102,103,104,105,106,107,108,109], 10, false);
        
        
        
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
        mage8 = enemy.create(430,460,'zombiewizard');
        create_enemy(mage8,0,0,1,1,50);
        mage8.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage8.animations.play('walk');
        
        mage9 = enemy.create(480,460,'zombiewizard');
        create_enemy(mage9,0,0,1,1,50);
        mage9.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage9.animations.play('walk');
        
        mage10 = enemy.create(530,460,'zombiewizard');
        create_enemy(mage10,0,0,1,1,50);
        mage10.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage10.animations.play('walk');
        
        mage11 = enemy.create(580,460,'zombiewizard');
        create_enemy(mage11,0,0,1,1,50);
        mage11.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage11.animations.play('walk');
        
        mage12 = enemy.create(630,460,'zombiewizard');
        create_enemy(mage12,0,0,1,1,50);
        mage12.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage12.animations.play('walk');
        
        mage25 = enemy.create(680,460,'zombiewizard');
        create_enemy(mage25,0,0,1,1,50);
        mage25.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage25.animations.play('walk');
        
        mage27 = enemy.create(730,460,'zombiewizard');
        create_enemy(mage27,0,0,1,1,50);
        mage27.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage27.animations.play('walk');
        
        mage13 = enemy.create(300,230,'zombiewizard');
        create_enemy(mage13,0,0,1,1,50);
        mage13.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage13.animations.play('walk');
        
        mage14 = enemy.create(300,280,'zombiewizard');
        create_enemy(mage14,0,0,1,1,50);
        mage14.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage14.animations.play('walk');
        
        mage15 = enemy.create(300,330,'zombiewizard');
        create_enemy(mage15,0,0,1,1,50);
        mage15.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage15.animations.play('walk');
        
        mage16 = enemy.create(300,330,'zombiewizard');
        create_enemy(mage16,0,0,1,1,50);
        mage16.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage16.animations.play('walk');
        
        mage17 = enemy.create(300,380,'zombiewizard');
        create_enemy(mage17,0,0,1,1,50);
        mage17.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage17.animations.play('walk');
        
        mage18 = enemy.create(300,430,'zombiewizard');
        create_enemy(mage18,0,0,1,1,50);
        mage18.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage18.animations.play('walk');
        
        mage19 = enemy.create(430,200,'zombiewizard');
        create_enemy(mage19,0,0,1,1,50);
        mage19.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage19.animations.play('walk');
        
        mage20 = enemy.create(480,200,'zombiewizard');
        create_enemy(mage20,0,0,1,1,50);
        mage20.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage20.animations.play('walk');
        
        
        mage21 = enemy.create(530,200,'zombiewizard');
        create_enemy(mage21,0,0,1,1,50);
        mage21.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage21.animations.play('walk');
        
        mage22 = enemy.create(580,200,'zombiewizard');
        create_enemy(mage22,0,0,1,1,50);
        mage22.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage22.animations.play('walk');
        
        mage23 = enemy.create(630,200,'zombiewizard');
        create_enemy(mage23,0,0,1,1,50);
        mage23.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage23.animations.play('walk');
        
        mage24 = enemy.create(680,200,'zombiewizard');
        create_enemy(mage24,0,0,1,1,50);
        mage24.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage24.animations.play('walk');
        
        
        mage26 = enemy.create(730,200,'zombiewizard');
        create_enemy(mage26,0,0,1,1,50);
        mage26.animations.add('walk', [0,1,2,3,4,5,6,7,8,9,10,11], 12, true);
        mage26.animations.play('walk');
        
        
        
        


            
        
        
        //create spell attack button
        spKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spKey.onDown.add(attack, this);
        
        // create melee attack button
        attKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        attKey.onDown.add(melee_attack, this);
        
        // show health of player
        health_stat = game.add.text(16, 16, 'Health: ' + hunter.health, { fontSize: '32px', fill: '#fff' });
        // show mana of player
        mana_stat = game.add.text(16, 45, 'Mana: ' + hunter.mana, { fontSize: '32px', fill: '#fff' });
        
        
        
        //menu
        pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
        pauseKey.onDown.add(startPause, this);
        
        // door from room 4
        room5Door1 = game.add.sprite(1233, 380, 'door');
        game.physics.arcade.enable(room5Door1);
        room5Door1.rotation = -1.57;
        room5Door1.frame = 1;
        room5Door1.body.setSize(50,50,-25,-40);
        
        // door to room 7
        room5Door2 = game.add.sprite(630, 48, 'door');
        game.physics.arcade.enable(room5Door2);
        room5Door2.frame = 1;
        
        // door to room 8
        room5Door4 = game.add.sprite(630, 685, 'door');
        game.physics.arcade.enable(room5Door4);
        room5Door4.frame = 1;
        
        // door to room 6
        room5Door3 = game.add.sprite(32, 380, 'door');
        game.physics.arcade.enable(room5Door3);
        room5Door3.rotation = -1.57;
        room5Door3.frame = 1;
        room5Door3.body.setSize(50,50,0,-40);
        
        
        // adjust sprite hitbox
        hunterS.body.setSize(23,34,23,13);
        
        // hitboxes for melee
        hitboxes = game.add.group();
        hitboxes.enableBody = true;
        hunterS.addChild(hitboxes);
        
        // set check point
        checkPoint = 3;
        
        
    },
    
    update: function(){
        
            
        //set initial velocity as 0
        hunterS.body.velocity.x = 0;
        hunterS.body.velocity.y = 0;
        
        
        game.physics.arcade.collide(hunterS, walls);
        game.physics.arcade.collide(rats, walls);
        game.physics.arcade.collide(enemy, walls);
        
        // door1 collison
        if(room5Door1.frame == 1){
            game.physics.arcade.overlap(hunterS, room5Door1, room4Enter2, null, this);
        }
        
        // door2 collison
        if(room5Door2.frame == 1){
            game.physics.arcade.overlap(hunterS, room5Door2, room7Enter, null, this);
        }
        
        // door3 collison
        if(room5Door3.frame == 1){
            game.physics.arcade.overlap(hunterS, room5Door3, room6Enter, null, this);
        }
        
        // door3 collison
        if(room5Door4.frame == 1){
            game.physics.arcade.overlap(hunterS, room5Door4, room8Enter, null, this);
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
        game.physics.arcade.overlap(mage19, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage20, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage21, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage22, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage23, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage24, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage25, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage26, spells_ud, damage3, null,this);
        game.physics.arcade.overlap(mage27, spells_ud, damage3, null,this);
        
        
        
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
        game.physics.arcade.overlap(mage19, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage20, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage21, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage22, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage23, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage24, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage25, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage26, hitboxes, damage4, null, this);
        game.physics.arcade.overlap(mage27, hitboxes, damage4, null, this);


        
        
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
        game.physics.arcade.overlap(hunterS, mage19, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage20, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage21, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage22, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage23, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage24, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage25, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage26, damage2, null, this);
        game.physics.arcade.overlap(hunterS, mage27, damage2, null, this);
        
        
        game.physics.arcade.moveToObject(mage8, hunterS, 30);
        game.physics.arcade.moveToObject(mage9, hunterS, 30);
        game.physics.arcade.moveToObject(mage10, hunterS, 30);
        game.physics.arcade.moveToObject(mage11, hunterS, 30);
        game.physics.arcade.moveToObject(mage12, hunterS, 30);
        game.physics.arcade.moveToObject(mage13, hunterS, 30);
        game.physics.arcade.moveToObject(mage14, hunterS, 30);
        game.physics.arcade.moveToObject(mage15, hunterS, 30);
        game.physics.arcade.moveToObject(mage16, hunterS, 30);
        game.physics.arcade.moveToObject(mage17, hunterS, 30);
        game.physics.arcade.moveToObject(mage18, hunterS, 30);
        game.physics.arcade.moveToObject(mage19, hunterS, 30);
        game.physics.arcade.moveToObject(mage20, hunterS, 30);
        game.physics.arcade.moveToObject(mage21, hunterS, 30);
        game.physics.arcade.moveToObject(mage22, hunterS, 30);
        game.physics.arcade.moveToObject(mage23, hunterS, 30);
        game.physics.arcade.moveToObject(mage24, hunterS, 30);
        game.physics.arcade.moveToObject(mage25, hunterS, 30);
        game.physics.arcade.moveToObject(mage26, hunterS, 30);
        game.physics.arcade.moveToObject(mage27, hunterS, 30);

        
        
        // collide player with key to put into inventory
        game.physics.arcade.overlap(hunterS, key1, pickupK1, null, this);
        
        // collide player with drop item and equip it
        game.physics.arcade.overlap(hunterS, dropR1S, function(hunterS, dropR1S){pick_up(hunterS, dropR1S, dropR1 );}, null, this);
        
        // kill player if health below zero
        if(hunter.health <= 0){
            //hunterS.kill();
            hunter.health = 0;
            attacking = true;
            // death text
            d_text = game.add.text(game.world.centerX, game.world.centerY, "You Died\nPress R to restart at the nearest checkpoint", { font: "50px Arial", fill: "#ff0044", align: "center" });
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

