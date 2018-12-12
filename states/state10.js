var boss, death1 = false, bProj, nShot = 0, spsTime = 2000;
sun_stone.state10 = function(){};
sun_stone.state10.prototype = {
    preload: function(){
        game.load.tilemap('map10', 'assets/tilemaps/map10.json', null, Phaser.Tilemap.TILED_JSON);
        
        // load boss walk sprite
        game.load.spritesheet('boss_walk', 'assets/sprites/boss_walk.png', 90,75,4);
        
        // load boss projectile
        game.load.image('b_proj', 'assets/sprites/boss_projectile.png');
    },
    
    create: function(){
                
        var map10 = game.add.tilemap('map10');
        map10.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = map10.createLayer('Ground');
        walls = map10.createLayer('Walls');
        wallsEmpty = map10.createLayer('Walls No Collide');
        
        
        //add collision to wall tiles
        map10.setCollisionBetween(2, 136, true, 'Walls');
        
        if (hunter.doorPosition == 1){
            hunterS = game.add.sprite(600, 600, 'hunterS')}
        else if (hunter.doorPosition == 18){
            hunterS = game.add.sprite(1180, 340, 'hunterS')}   
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
        
        
        if(!death1){
            enemy = game.add.group();
        enemy.enableBody = true;
        enemy.forEach(function(mage){mage.body.bounce.x=1});
        mage8 = enemy.create(400,320,'boss_walk');
        create_enemy(mage8,200,200,1,1,250);
        mage8.animations.add('walk', [0,1,2,3], 6, true);
        mage8.animations.play('walk');
        mage8.health = 250;
        }
        
        
        // create boss and animations
        /*
        boss = game.add.sprite(400, 320, 'boss_walk');
        boss.frame = 0;
        boss.animations.add('walk', [0,1,2,3], 6, true);
        // enable physics and collide with world bounds
        game.physics.arcade.enable(boss);
        boss.body.collideWorldBounds = true;
        // give boss health
        boss.health = 250;*/
        


            
        
        
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
        
        // door from room 9
        room10Door1 = game.add.sprite(1233, 380, 'door');
        game.physics.arcade.enable(room10Door1);
        room10Door1.rotation = -1.57;
        room10Door1.frame = 1;
        room10Door1.body.setSize(50,50,-25,-40);
        
        // last door in game
        room10Door2 = game.add.sprite(32, 380, 'door');
        game.physics.arcade.enable(room10Door2);
        room10Door2.rotation = -1.57;
        room10Door2.frame = 0;
        room10Door2.body.setSize(50,50,0,-40);
        
        
        // adjust sprite hitbox
        hunterS.body.setSize(23,34,23,13);
        
        // hitboxes for melee
        hitboxes = game.add.group();
        hitboxes.enableBody = true;
        hunterS.addChild(hitboxes);
        
        
        // phase 1 of boss
        /*
        if(!death1){
            boss.animations.play('walk');
            boss.body.velocity.x = 100;
            boss.body.velocity.y = 100;
        }*/
        
        // create projectiles for boss
        bProj = game.add.group();
        bProj.enableBody = true;
        bProj.physicsBodyType = Phaser.Physics.ARCADE;
        bProj.createMultiple(2000,'b_proj');
        
        
        
        
    },
    
    update: function(){
        
            
        //set initial velocity as 0
        hunterS.body.velocity.x = 0;
        hunterS.body.velocity.y = 0;
        
        
        game.physics.arcade.collide(hunterS, walls);
        //game.physics.arcade.collide(boss, walls);
        game.physics.arcade.collide(enemy, walls);

        
        // first phase 
        if(!death1){
            //bossBounce();
            // timer for projectiles
            if(game.time.now > nShot){
                nShot = game.time.now + spsTime;
                bossProj();
            }
        }
        
        
        
        
        
        if(room10Door1.frame == 1){
            game.physics.arcade.overlap(hunterS, room10Door1, room9Enter2, null, this);
        }
        
        
        
        if(death1){
            room10Door2.frame = 1;
        }
        
        if(room10Door2.frame == 1){
            game.physics.arcade.overlap(hunterS, room10Door2, cutsceneStart, null, this);
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
        
        
        
        
        // collide spells with walls
        game.physics.arcade.collide(walls, spells_lr, spellCollide, null, this);
        game.physics.arcade.collide(walls, spells_ud, spellCollide, null, this);
        
        // collide boss projectile with walls
        game.physics.arcade.collide(walls, bProj, spellCollide, null, this);
        
        // collide spells with boss
        game.physics.arcade.overlap(enemy, spells_lr, damage14, null, this);
        game.physics.arcade.overlap(enemy, spells_ud, damage14, null, this);
        
        
        
        // collide melee hitbox with enemies
        game.physics.arcade.overlap(enemy, hitboxes, damage15, null, this);
       
       
        
        
        // collide player with boss
        game.physics.arcade.overlap(hunterS, enemy, damage16, null, this);
        // collide boss projectiles w player
        game.physics.arcade.overlap(hunterS, bProj, damage17, null, this);
      
        
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







// first phase boss patterns
/*
function bossBounce(){
    boss.body.bounce.x = 1;
    boss.body.bounce.y = 1;
}*/
// fire projectile
function bossProj(){
    // make projectile
    var bProj1 = bProj.getFirstDead();
    // set projectile near boss
    bProj1.reset(mage8.x + 45, mage8.y + 45);
    // angle projectile towards player
    bProj1.rotation = Math.atan2((hunterS.y + 15) - bProj1.y, (hunterS.x + 10) - bProj1.x);
    // send projectile towards player
    game.physics.arcade.moveToXY(bProj1, hunterS.x, hunterS.y, 60);
}