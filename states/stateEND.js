sun_stone.stateEND = function(){};
sun_stone.stateEND.prototype = {
    preload: function(){
        
        //load in tilemap
        //might need to change tilemap based on door position
        game.load.image('DungeonTiles', 'assets/tilemaps/Dungeon Tile Set.png');
        game.load.tilemap('mapEND', 'assets/tilemaps/emptyRoom.json', null, Phaser.Tilemap.TILED_JSON);
        
        //load in temp sunstone sprite
        //please find a better sprite than this lol
        game.load.image('sunstone','assets/sprites/sunstone.png');
        
        
    },
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    create: function(){
        
        var mapEND = game.add.tilemap('mapEND');
        mapEND.addTilesetImage('Dungeon Tile Set', 'DungeonTiles');
        
        ground = mapEND.createLayer('Ground');
        walls = mapEND.createLayer('Walls');
        wallsEmpty = mapEND.createLayer('Walls No Collide');
        
        sunstone_item = game.add.sprite(game.world.centerX, game.world.centerY, 'sunstone');
        sunstone_item.scale.setTo(1.5, 1.5);
        
        // create hunter sprite and enable physics
        main_ch = game.add.sprite(620, 630, 'hunterS');
        game.physics.arcade.enable(main_ch);
        
        // animation for character standing up
        main_ch.animations.add('stand_up', [98,97,96,95,94], 10, false);
        // animation for running
        main_ch.animations.add('run_d', [16,17,18,19,20,21], 5, false);
        main_ch.animations.add('run_u', [34,35,36,37,38,39], 5, false);
        main_ch.animations.add('run_l', [28,29,30,31,32,33], 5, false);
        main_ch.animations.add('run_r', [22,23,24,25,26,27], 5, false);
        main_ch.animations.add('idle_u', [12,13,14,15], 5, true);
        
        
        
        // create and play music (name,volume,loopBoolean)
        //s_music = game.add.audio('start_menu',0.2,true);
        
        //s_music.play();
        
        
        
        
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    update: function(){
        // play campfire animation
        main_ch.animations.play('idle_u');  
        
        //use timers and tweens to have him walk to the sunstone, then overlay a
        //fade to black sprite and restart at the campfire
        
    }
    
};
