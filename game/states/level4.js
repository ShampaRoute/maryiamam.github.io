var level4 = function(game) {};

level4.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#d0def0';

        this.game.load.tilemap('level1_1', 'game/levels/level4/level4_1.csv', null, Phaser.Tilemap.CSV);
        this.game.load.tilemap('level1_2', 'game/levels/level4/level4_2.csv', null, Phaser.Tilemap.CSV);
    },

    create: function(game) {
        console.log('%cSTATE::LEVEL 4', 'color: #fff; background: #f0f;');
        health = 100;
        balls = null;
        playerX = 50;
        playerY = 1800;

        setWorld.background = this.game.add.sprite(0, 0, 'bg');
        setWorld.background.fixedToCamera = true;

        this.createCloud(this.game);
        this.createGroundBG(this.game);
        this.createBall(this.game);
        this.createPlayer(this.game, playerX, playerY);
        this.createGround(this.game);

        setWorld.blueEnemy = game.add.group();
        setWorld.blueEnemy.enableBody = true;
        setWorld.blueEnemy.physicsBodyType = Phaser.Physics.ARCADE;
        this.createBlueEnemy(this.game, 300, 1650, 1000);
        this.createBlueEnemy(this.game, 350, 1380, 700);
        this.createBlueEnemy(this.game, 700, 1380, 500);
        this.createBlueEnemy(this.game, 250, 1050, 600);
        this.createBlueEnemy(this.game, 500, 1000, 2000);
        this.createBlueEnemy(this.game, 250, 900, 400);
        this.createBlueEnemy(this.game, 315, 900, 500);
        this.createBlueEnemy(this.game, 380, 900, 600);
        this.createBlueEnemy(this.game, 100, 750, 600);
        this.createBlueEnemy(this.game, 300, 270, 600);
        this.createBlueEnemy(this.game, 850, 400, 600);

        this.createLives(this.game);
        this.createAmountBalls(this.game, 0);

        this.createText(this.game);
        this.createButton(this.game, 'Map', 24, 950, 580, 200, 80, '',
            function() {
                this.game.state.start('Levels');
            });
        this.createButton(this.game, 'Restart', 24, 80, 580, 200, 80, '',
            function() {
                this.restart();
            });

        fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
        toMenu = this.input.keyboard.addKey(Phaser.KeyCode.ESC);
        cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function() {
        this.game.physics.arcade.collide(setBall.ballsGroup, setWorld.ground, this.collisionBall, null);
        this.game.physics.arcade.collide(setBall.ballsGroup, setWorld.blueEnemy, this.ballKillEnemy, null, this);

        this.game.physics.arcade.collide(setWorld.player, setWorld.ground);
        this.game.physics.arcade.collide(setWorld.player, setWorld.groundBG);
        this.game.physics.arcade.collide(setWorld.player, setWorld.blueEnemy, this.collisionBlueEnemy, null, this);

        setWorld.player.body.velocity.x = 0;

        this.controls();
    },

    resetBall: resetBall,
    collisionBall: collisionBall,
    collectBall: collectBall,
    createBall: createBall,
    createAmountBalls: createAmountBalls,
    killBall: killBall,
    addBall: addBall,
    createText: createText,
    createCloud: createCloud,
    resetSprite: resetSprite,
    createPlayer: createPlayer,
    createLives: createLives,
    killLive: killLive,
    createBlueEnemy: createBlueEnemy,
    collisionBlueEnemy: collisionBlueEnemy,
    ballKillEnemy: ballKillEnemy,
    killEnemy: killEnemy,
    createGroundBG: createGroundBG,
    createGround: createGround,
    createButton: createButton,
    swimming: swimming,
    default: defaultProperty,
    fire: fire,
    getDamage: getDamage,
    controls: controls,
    nextLevel: function() {
        this.game.state.start('Level5');
    },
    restart: function() {
        this.game.state.start('Level4');
    },
};