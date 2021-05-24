// Setup.js
function setup(phaser) {
  // Input
  game.cursors = phaser.input.keyboard.createCursorKeys();

  // Background
  game.backgrounds = phaser.physics.add.staticGroup();

  // Create backgrounds
  for (var i = 0; i < 43; i++) {
    if (i < 14) {
      game.backgrounds.create(i * 1024, 400, "mushroomBackground");
    } else if (i < 28 && 14 <= i) {
      game.backgrounds.create(i * 1024, 400, "forestBackground");
    } else {
      game.backgrounds.create(i * 1024, 400, "desertBackground");
    }
  }

  // SFX
  game.dieSound = phaser.sound.add("die");
  game.jumpSound = phaser.sound.add("jump");
  game.mushroomSound = phaser.sound.add("mushroom");
  game.explosionSound = phaser.sound.add("explosion");
  game.checkpointSound = phaser.sound.add("checkpoint");
  game.forestBackgroundMusic = phaser.sound.add("forestBackground");
  game.desertBackgroundMusic = phaser.sound.add("desertBackground");
  game.mushroomBackgroundMusic = phaser.sound.add("mushroomBackground");

  // Play music
  game.mushroomBackgroundMusic.play();

  // Loop music
  game.mushroomBackgroundMusic.setLoop(true);
  game.forestBackgroundMusic.setLoop(true);
  game.desertBackgroundMusic.setLoop(true);

  // Player
  game.player = phaser.physics.add.sprite(0, 580, "playerWalk1").setCollideWorldBounds(true).setScale(1.5);
  game.player.jumpTimer = 0;

  // Camera
  phaser.cameras.main.setBounds(0, 0, world.width, config.height);
  phaser.physics.world.setBounds(0, 0, world.width, config.height);
  phaser.cameras.main.startFollow(game.player, true, 1, 1);
}
