// object variable, player(hunter) object to hold stats
var enemy, walls, ground, hunterS, rats, spells_lr, spells_ud, nFire = 0, fireR = 500, rat, nDamage = 0, dpsTime = 1000, level_flag = 5, key1, cleared = true, dropR1, dropR1S, last_arrow=2, manaTick, t_text_1, t_1_flag = true, t_text_2, hitboxes, hitbox, attacking = false, pause_sound, walking = false, walkingSoundPlayed = false, checkPoint = 1, deathCounter = 0;



sun_stone.state1 = function(){};
sun_stone.state1.prototype = {
    preload: function(){
        
        //load in tilemap
        game.load.image('DungeonTiles', 'assets/tilemaps/Dungeon Tile Set.png');
        game.load.tilemap('newLevel1TileMap', 'assets/tilemaps/newLevel1TileMap.json', null, Phaser.Tilemap.TILED_JSON);
        
        
        //load hunter asset
        game.load.spritesheet('hunterS', 'assets/sprites/hero_sprite_sheet.png', 67, 52, 108);
        
        //load rat asset
        //game.load.image('rat', 'assets/sprites/rat.png');
        
        //load boots asset
        game.load.image('boots', 'assets/sprites/boots.png')
        
        //load sounds
        game.load.audio('pause_sound', 'assets/sounds/pause_sound.mp3');
        game.load.audio('key_sound', 'assets/sounds/key_sound.ogg');
        game.load.audio('sword_slash', 'assets/sounds/sword_slash.ogg');
        game.load.audio('spellcast_sound', 'assets/sounds/spellcast_sound.ogg');
        game.load.audio('running_sound', 'assets/sounds/running_sound.ogg');
        game.load.audio('player_damage_sound', 'assets/sounds/player_damage_sound.ogg');
        game.load.audio('ghost_damage_sound', 'assets/sounds/ghost_damage_sound.ogg');
        
        //this one needs a different sound
        game.load.audio('magedeath_sound', 'assets/sounds/magedeath_sound.ogg');
        
        //load chest asset
        game.load.spritesheet('chest', 'assets/sprites/chest.png', 32, 32, 2);
        
        //load spell asset
        game.load.image('spell_lr', 'assets/sprites/spell_proj.png');
        game.load.image('spell_ud', 'assets/sprites/spell_proj_1.png');
        
        //load key asset
        game.load.image('key','assets/sprites/KeyRoom1.png');
        
        game.load.spritesheet('door', 'assets/sprites/door.png', 32, 22, 2);
        

        //load enemy asset
        game.load.spritesheet('enemymage', 'assets/sprites/YeOldyNecroGuy.png', 21, 22, 6);
        //replaced rat sprite with slime, didn't change variable name
        game.load.spritesheet('rat', 'assets/sprites/slime-Sheet.png', 32, 25, 6);
        game.load.spritesheet('enemywizard', 'assets/sprites/wizard.png', 80, 62, 6);
        
       // game.load.spritesheet('zombiewizard', 'assets/sprites/zombiewizard.png', 30, 53, 12);


        
    },
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    create: function(){
        
        //create tilemap and layers
        var map = game.add.tilemap('newLevel1TileMap');
        map.addTilesetImage('Tile Set', 'DungeonTiles');
        
        ground = map.createLayer('Ground');
        walls = map.createLayer('Walls');
        wallsEmpty = map.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map.setCollisionBetween(2, 136, true, 'Walls');
        
        
        // scales play screen to screen size
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        //set background as black
        game.stage.backgroundColor = "#161123";
        
        //initialize physics
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        //create hunter sprite in game world
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS');}
        else if (hunter.doorPosition == 2){
            hunterS = game.add.sprite(45, 355, 'hunterS');} 
        else if (hunter.doorPosition == 3){
            hunterS = game.add.sprite(620, 60, 'hunterS');}  
        else{
            hunterS = game.add.sprite(750, 500, 'hunterS');
        }
        
        // create animations for movements
        hunterS.animations.add('move_d', [16,17,18,19,20,21], 10, false);
        hunterS.animations.add('move_u', [34,35,36,37,38,39], 10, false);
        hunterS.animations.add('move_l', [28,29,30,31,32,33], 10, false);
        hunterS.animations.add('move_r', [22,23,24,25,26,27], 10, false);
        hunterS.animations.add('idle', [0,1,2,3], 10, true);
        // create animations for attacks
        hunterS.animations.add('att_r', [40,41,42,43,44], 20, false);
        hunterS.animations.add('att_l', [45,46,47,48,49], 20, false);
        hunterS.animations.add('att_u', [55,56,57,58,59], 20, false);
        hunterS.animations.add('att_d', [50,51,52,53,54], 20, false);
        hunterS.animations.add('death', [101,102,103,104,105,106,107,108,109], 7, false);
        
    
        //enable physics on hunter
        game.physics.arcade.enable(hunterS);
        //bind hunter to screen
        hunterS.body.collideWorldBounds = true;
        
        manaTick = game.time.now;
        
        
        // door sprite
        room1Door = game.add.sprite(620, 48, 'door');
        game.physics.arcade.enable(room1Door);
        
        
        // door2 sprite
        room1Door2 = game.add.sprite(32, 400, 'door');
        room1Door2.rotation = -1.57;
        game.physics.arcade.enable(room1Door2);
    
        
        
        
        
        // create spells for projectiles
        spells_lr = game.add.group();
        spells_lr.enableBody = true;
        spells_lr.physicsBodyType = Phaser.Physics.ARCADE;
        spells_lr.createMultiple(hunter.mana/hunter.spell_attack, 'spell_lr');
        spells_ud = game.add.group();
        spells_ud.enableBody = true;
        spells_ud.physicsBodyType = Phaser.Physics.ARCADE;
        spells_ud.createMultiple(hunter.mana/hunter.spell_attack, 'spell_ud');
        
        //menu key
        pause_sound = game.add.audio('pause_sound');
        pauseKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
        pauseKey.onDown.add(startPause, this);
        
        
        
        
        
        
        
        //create spell attack button
        spKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spKey.onDown.add(attack, this);
        
        // create melee attack button
        attKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        attKey.onDown.add(melee_attack, this);
        
        

        
//function create_enemy(enemy, group, enemyspritename_str, x, y, x_velocity, y_velocity, x_bounce, y_bounce, health)
        
      
        
        //enemy mage
        enemy = game.add.group();
        enemy.enableBody = true;
        enemy.forEach(function(mage){mage.body.bounce.x=1});
        for (var i = 1; i < 3; i++){
            //mage = game.add.sprite(1150,i * 205, 'enemymage');
            mage = enemy.create(100, i*310, 'enemymage' );

            mage.health = 18;
            
            
            game.physics.arcade.enable(mage);
            mage.body.collideWorldBounds = true;
            
            mage.body.velocity.x = 200;
            mage.body.bounce.x = 1;
            mage.animations.add('walk', [0,1,2,3,4,5], 6, true);
            mage.animations.play('walk');
            
        }
        for (var i = 1; i < 4; i++){
            //mage = game.add.sprite(1150,i * 205, 'enemymage');
            mage = enemy.create(1150, i*180, 'enemymage' );

            mage.health = 18;
            
            
            game.physics.arcade.enable(mage);
            mage.body.collideWorldBounds = true;
            
            mage.body.velocity.x = 200;
            mage.body.bounce.x = 1;
            mage.animations.add('walk', [0,1,2,3,4,5], 10, true);
            mage.animations.play('walk');
            
        }
        
        health_stat = game.add.text(45, 8, 'Health: ' + hunter.health, { font: "32px VT323", fill: '#fff' });
        
        mana_stat = game.add.text(300, 8, 'Mana: ' + hunter.mana, { font: "32px VT323", fill: '#fff' });
        
        // tutorial 1 text
        if(t_1_flag){
            t_text_1 = game.add.text(game.world.centerX, game.world.centerY, "Move with arrow keys\nCast spells with spacebar\nMelee attack with A\nClear level of enemies\n\nClick to remove messages", { font: "48px VT323", fill: "#fce923", align: "center" });
            t_text_1.anchor.setTo(0.5,0.5);
            game.input.onDown.addOnce(removeText, this);
        }
        
        // adjust sprite hitbox
        hunterS.body.setSize(23,34,23,13);
        
        // hitboxes for melee
        hitboxes = game.add.group();
        hitboxes.enableBody = true;
        hunterS.addChild(hitboxes);
        
    
        //sounds (name,volume,loop)
        key_sound = game.add.audio('key_sound');
        sword_slash = game.add.audio('sword_slash');
        spellcast_sound = game.add.audio('spellcast_sound');
        running_sound = game.add.audio('running_sound', 0.3, true);
        magedeath_sound = game.add.audio('magedeath_sound', 0.3);
        player_damage_sound = game.add.audio('player_damage_sound');
        ghost_damage_sound = game.add.audio('ghost_damage_sound');
        
        
        // set check point
        checkPoint = 1;
       
        
        
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    update: function(){
        
            
        //set initial velocity as 0
        hunterS.body.velocity.x = 0;
        hunterS.body.velocity.y = 0;
        
        
        
        // make sprites collide
        game.physics.arcade.collide(hunterS, walls);
        game.physics.arcade.collide(rats, walls);
        game.physics.arcade.collide(enemy, walls);
        
        // set up passing through door with key
        if(room1Door.frame == 1){
            game.physics.arcade.overlap(hunterS, room1Door, room2Enter, null, this); 
        }
        
        // set up passing through door2 with key
        if(room1Door2.frame == 1){
            game.physics.arcade.overlap(hunterS, room1Door2, room3Enter, null, this);
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
        
        game.physics.arcade.overlap(rats, spells_ud, damage1, null, this);
        
        game.physics.arcade.collide(walls, spells_ud, spellCollide, null, this);
        
        game.physics.arcade.overlap(enemy, spells_ud, damage1, null,this);
        
        // collide melee hitbox with rats
        game.physics.arcade.overlap(enemy, hitboxes, damage1, null, this);
        
        // collide player with rat
        game.physics.arcade.overlap(hunterS, rats, damage2, null, this);
        
        game.physics.arcade.overlap(hunterS, enemy, damage2, null, this);
        
        
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
            d_text = game.add.text(game.world.centerX, game.world.centerY, "You Died\nPress R to restart at the nearest checkpoint", { font: "48px VT323", fill: "#fce923", align: "center" });
            d_text.anchor.setTo(0.5,0.5);
            if(hunter.death == false){
                hunterS.animations.play('death');
                hunter.death = true;
            }
            //hunterS.animations.play('death');  
            restartKey = game.input.keyboard.addKey(Phaser.Keyboard.R);
            restartKey.onDown.addOnce(removeD_text, this);            
            restartKey.onDown.add(restartAtLevel1, this);
            
            // reset flag 
            if (cleared){
                level_flag = 5;
            }
            
        }
        
        // spawn key and random drop when all enemies dead // tutorial 2 for picking up items
        if (level_flag <= 0 & cleared){
            // tutorial 2 text
            t_text_2 = game.add.text(game.world.centerX, game.world.centerY, "Run over items to pick them up\nChests give random beneficial stats\nPause to check stats using P\nEnter doors with D", { font: "48px VT323", fill: "#fce923", align: "center" });
            t_text_2.anchor.setTo(0.5,0.5);
            game.input.onDown.addOnce(removeText2, this);
        
            
            // get random item
            drop_idx = rand_d();
            dropR1 = drop_items[drop_idx];
            console.log(drop_idx);
            console.log(dropR1);
            
            // spawn key
            key1 = game.add.sprite(600, 300, 'key');
            key1.scale.setTo(0.5,0.5);
            // random drop for room 1
            dropR1S = game.add.sprite(500, 300, 'chest');
            dropR1S.scale.setTo(0.5,0.5);
            // enable physics
            game.physics.arcade.enable(key1);
            game.physics.arcade.enable(dropR1S);
            // reset level flag// must do so key gets killed
            level_flag = 5;
            // set cleared flag
            cleared = false;
        }
        
        
        if (inventory.keyR1 == true){
            room1Door.frame = 1
        }
        
        if (inventory.keyR2 == true){
            room1Door2.frame = 1
        }
        
        // debug for hit boxes
        game.debug.body(hitboxes);
        
        
    }
    
    
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//function to remove ututorial 1 text
function removeText(){
    t_text_1.destroy();
    t_1_flag = false;
}
// function to remove tutorial 2 text
function removeText2(){
    t_text_2.destroy();
}
// function to remove death text
function removeD_text(){
    d_text.destroy();
}





//not in use
function ratWallCollision(rat, walls){
    rat.body.velocity.x *= -1;
    rat.scale.setTo(-0.5,0.5);
}






// put key 1 into inventory
function pickupK1(hunterS, key1){
    // kill sprite
    key1.kill();
    
    key_sound.play();
    // change boolean in inventory
    inventory.keyR1 = true;
    
    console.log(inventory.keyR1);
}






// start menu state
function startPause(){
    //pause game, else unpause
    if (game.paused == false){
        //pause_sound.play();
        game.paused = true;
        
        menu = game.add.text(1280/2, 720/2, 'Game Paused', {font: "45px VT323", fill: '#fff' });
        menu.anchor.setTo(0.5, 0.5);
        
        
        
        armor_stat = game.add.text(100, 700, 'Armor: ' + hunter.armor, { font: "32px VT323", fill: '#fff' });
        
        m_attack_stat = game.add.text(350, 700, 'Melee Damage: ' + hunter.melee_attack, { font: "32px VT323", fill: '#fff' });
        
        s_attack_stat = game.add.text(725, 700, 'Spell Cost: ' + hunter.spell_attack, { font: "32px VT323", fill: '#fff' });
        
        speed_stat = game.add.text(1050, 700, 'Speed: ' + hunter.speed, { font: "32px VT323", fill: '#fff' });
        
    }
    else {
        game.paused = false
        //remove each part of the menu
        menu.destroy();
        
        m_attack_stat.destroy();
        s_attack_stat.destroy();
        armor_stat.destroy();
        speed_stat.destroy();
        
    }
    
    
}


function spellCollide (walls, spell1){
    //kill doesn't work, needs debugging
    walls.kill();
}



function create_enemy(enemy, x_velocity, y_velocity, x_bounce, y_bounce, health){

    
    enemy.health = health;
    game.physics.arcade.enable(enemy);
    enemy.body.collideWorldBounds = true;
    enemy.body.velocity.x = x_velocity;
    enemy.body.velocity.y = y_velocity;
    enemy.body.bounce.x = x_bounce;
    enemy.body.bounce.y = y_bounce;
}

//function after pressing r after death to restart from level 1
function restartAtLevel1(){
    // update death counter
    deathCounter ++;
    
    // reset attacking 
    attacking = false;
    
    running_sound.stop();
    walkingSoundPlayed = false;
    
    if(checkPoint == 1){game.state.start('state1'); hunter.doorPosition = 0;}
    else if (checkPoint == 2){game.state.start('state3'); hunter.doorPosition = 4;}
    else if (checkPoint == 3){game.state.start('state5'); hunter.doorPosition = 8;}
    else if (checkPoint == 4){game.state.start('state9'); hunter.doorPosition = 16;}
    hunter.health = hunter.health_max;
    hunter.mana = hunter.mana_max;
    attacking = false;
    walking = false;
    hunter.death = false;
    
}
