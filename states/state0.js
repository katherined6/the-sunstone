var sun_stone = {}, main_ch, camp_fire, s_music, playKey, startGameBugFix = false;
sun_stone.state0 = function(){};
sun_stone.state0.prototype = {
    preload: function(){
        
        //load in tilemap
        game.load.image('DungeonTiles', 'assets/tilemaps/Dungeon Tile Set.png');
        game.load.tilemap('newLevel1TileMap', 'assets/tilemaps/newLevel1TileMap.json', null, Phaser.Tilemap.TILED_JSON);
        
        // load start menu music; Attributed to Trevor Lentz https://opengameart.org/users/trevor-lentz
        game.load.audio('start_menu', ['assets/sounds/start_menu.mp3','assets/sounds/start_menu.ogg']);
        
        //load hunter asset
        game.load.spritesheet('hunterS', 'assets/sprites/hero_sprite_sheet.png', 67, 52, 108);
        
        //load campfire asset; Credit goes to Zabin and Jetrel from OGA

        game.load.spritesheet('campfire', 'assets/sprites/CampFire.png' , 64, 64, 5);
        
        //load rat asset
        game.load.image('rat', 'assets/sprites/rat.png');
        
        //load boots asset
        game.load.image('boots', 'assets/sprites/boots.png')
        
        //load chest asset
        game.load.spritesheet('chest', 'assets/sprites/chest.png', 32, 32, 2);
        
        //load spell asset
        game.load.image('spell_lr', 'assets/sprites/spell_proj.png');
        game.load.image('spell_ud', 'assets/sprites/spell_proj_1.png');
        
        //load key asset
        game.load.image('key','assets/sprites/KeyRoom1.png');
        
        game.load.spritesheet('door', 'assets/sprites/door.png', 64, 58, 2);
        

        //load enemy asset
        game.load.spritesheet('enemymage', 'assets/sprites/YeOldyNecroGuy.png', 21, 22, 6);
        game.load.spritesheet('enemywizard', 'assets/sprites/wizard.png', 80, 62, 6);
        game.load.spritesheet('zombiewizard', 'assets/sprites/zombiewizard.png', 30, 53, 12);
        game.load.spritesheet('spider', 'assets/sprites/spider03.png', 64,42,5);
        
        //https://lionheart963.itch.io/knight-sprite
        game.load.spritesheet('knight', 'assets/sprites/knightwalkanimation.png', 18,36,8);


        // load background
        game.load.image('backg', 'assets/sprites/bg1.png');
        
        
        

        
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
        
        game.load.spritesheet('door', 'assets/sprites/door.png', 32, 22, 2);
        

        //load enemy asset
        game.load.spritesheet('enemymage', 'assets/sprites/YeOldyNecroGuy.png', 21, 22, 6);
        //replaced rat sprite with slime, didn't change variable name
        game.load.spritesheet('rat', 'assets/sprites/slime-Sheet.png', 32, 25, 6);
        game.load.spritesheet('enemywizard', 'assets/sprites/wizard.png', 80, 62, 6);
        
        
       
        
        
        
        
        
        
        
    },
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    create: function(){
        // scales play screen to screen size
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        game.stage.backgroundColor = "#160805";
        
        // create background
        backg = game.add.sprite(0,0, 'backg');
        backg.scale.setTo(4.74, 3.6);
        
        // create hunter sprite and enable physics
        main_ch = game.add.sprite(150, 590, 'hunterS');
        main_ch.frame = 98;
        main_ch.scale.setTo(1.5, 1.5);
        game.physics.arcade.enable(main_ch);
        
        // animation for character standing up
        main_ch.animations.add('stand_up', [98,97,96,95,94], 10, false);
        // animation for running
        main_ch.animations.add('run1', [22,23,24,25,26,27], 10, true);
        
        // create campfire and its animation
        camp_fire = game.add.sprite(210, 600, 'campfire');
        camp_fire.animations.add('fire', [0,1,2,3], 7, true);
        
        // create and play music (name,volume,loopBoolean)
        s_music = game.add.audio('start_menu',0.2,true);
        
        s_music.play();
        
        
        // create melee attack button
        playKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        playKey.onDown.add(startGame, this);
        
        
        // instructions
        var text1 = game.add.text(game.world.centerX, game.world.centerY, "The Sunstone\nPress ENTER to start", { font: "90px VT323", fill: "#fce923", align: "center" });
        text1.anchor.setTo(0.5,0.5);
    },
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    update: function(){
        // play campfire animation
        camp_fire.animations.play('fire');
        
    }
    
};

function startGame(){
    if (!startGameBugFix){
        main_ch.animations.play('stand_up');
        var r1Timer = game.time.create(true);
        r1Timer.add(1000, function(){main_ch.animations.play('run1'); main_ch.body.velocity.x += 150;}, this);
        r1Timer.start();

        var SGTimer = game.time.create(true);
        SGTimer.add(7500, function(){game.state.start('state1');}, this);
        SGTimer.start();
        startGameBugFix = true
        
    }
}