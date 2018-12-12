var endTimer, endWalking = false, endtextnotplaced = false;

sun_stone.stateEND = function(){};
sun_stone.stateEND.prototype = {
    preload: function(){
        
        //load in tilemap
        //might need to change tilemap based on door position
        game.load.image('DungeonTiles', 'assets/tilemaps/Dungeon Tile Set.png');
        game.load.tilemap('mapEND', 'assets/tilemaps/roomHorizontal.json', null, Phaser.Tilemap.TILED_JSON);
        
        //load in temp sunstone sprite
        //please find a better sprite than this lol
        game.load.image('sunstone','assets/sprites/sunstone.png');
        
        game.load.image('blackBackground', 'assets/sprites/blackbackground.jpg');
        
        
    },
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    create: function(){
        
        var mapEND = game.add.tilemap('mapEND');
        mapEND.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = mapEND.createLayer('Ground');
        walls = mapEND.createLayer('Walls');
        wallsEmpty = mapEND.createLayer('Walls No Collide');
        
        sunstone_item = game.add.sprite(150, game.world.centerY, 'sunstone');
        sunstone_item.scale.setTo(1.5, 1.5);
        
        // create hunter sprite and enable physics
        main_ch = game.add.sprite(1150, 350, 'hunterS');
        game.physics.arcade.enable(main_ch);
        
        //door sprite
        roomEndDoor = game.add.sprite(1233, 395, 'door');
        roomEndDoor.rotation = -1.57;
        roomEndDoor.frame = 1;
        
        // animation for character standing up
        main_ch.animations.add('stand_up', [98,97,96,95,94], 10, false);
        // animation for running
        main_ch.animations.add('run_d', [16,17,18,19,20,21], 5, false);
        main_ch.animations.add('run_u', [34,35,36,37,38,39], 5, false);
        main_ch.animations.add('run_l', [28,29,30,31,32,33], 3, true);
        main_ch.animations.add('run_r', [22,23,24,25,26,27], 5, false);
        main_ch.animations.add('idle_u', [8,9,10,11], 5, true);
        
        main_ch.animations.play('idle_u'); 
        endTimer = game.time.now
        
        
        
        // create and play music (name,volume,loopBoolean)
        //s_music = game.add.audio('start_menu',0.2,true);
        
        //s_music.play();
        
        credit_text = game.add.text(game.world.centerX, 1600, "The Sunstone\n\n\nCreated by:\nKatherine Dunham\nAndrew Chen\nDaniel Sanchez\n\n\nArt By:\nTheWiseHedgeHog (itch.io)\nrvros (itch.io)\nAlex's Assets (itch.io)\nUilleagGodwin (itch.io)\nWarren Clark\nLuis Zuno\nJetrel and Zabin (opengameart.org)\n\n\nMusic By:\nTrevor Lentz\n\n\nSounds By:\nnextmaking (freesound.org)\nctcollab (freesound.org)\nbevangoldswain (freesound.org)\nchristopherderp (freesound.org)\nlux244 (freesound.org)\nsonidotv (freesound.org)\nsoundrangers.com\nDisthron (opengameart.org)", { font: "48px VT323", fill: "#fce923", align: "center" });
        credit_text.anchor.setTo(0.5,0.5);
        
        background = game.add.sprite(0,0, 'blackBackground');
        background.scale.setTo(2,2);
        background.alpha = 0;
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    update: function(){         
        
        if ((game.time.now - endTimer > 4000) & !endWalking) {
            main_ch.animations.play('run_l');
            main_ch.body.velocity.x -= 10;
            endWalking = true;
        }
        credit_text.y -= 0.5
        
        //it is about 2000 per line in the credits at this speed
        //if you add lines to the credits, you must increase the both numbers (currently 83000 and 87000)
        if (game.time.now - endTimer > 83000 & background.alpha < 1){
            background.alpha += 0.004;
            game.sound.volume -= 0.004;
        }
        
        if (game.time.now - endTimer >87000 & !endtextnotplaced){
            end_text = game.add.text(game.world.centerX, game.world.centerY, "Congratulations!\nYou reached the Sunstone and beat the game!\n\nYou died "+deathCounter+" times.", { font: "48px VT323", fill: "#fce923", align: "center" });
            end_text.anchor.setTo(0.5,0.5);
            endtextnotplaced = true;
        }
        
        //is it possible to add a button press to restart the game here?
        
        
    }
    
};
