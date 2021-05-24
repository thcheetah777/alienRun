// Flag.js
function flagSetup(phaser) {
  // Flags
  game.flags = phaser.physics.add.staticGroup();
  world.flags.forEach(data => {
    let flag = game.flags.create(data[0], 580, "flagDown");
    flag.active = false
    flag.area = data[1];
  });

  // Collider Flag, Player
  phaser.physics.add.overlap(game.flags, game.player, function(player, flag) {
    // Checkpoint
    if (flag.active === false) {
      game.checkpointSound.play();
    }

    // Set XY
    game.checkpoint = flag.x;
    flag.active = true;

    // Animation
    flag.anims.play("flag", true);

    // Change music
    if (flag.area === "forest") {
      game.mushroomBackgroundMusic.stop();
      game.forestBackgroundMusic.play();
    } else if (flag.area === "desert") {
      game.forestBackgroundMusic.stop();
      game.desertBackgroundMusic.play();
    }
  });
}
