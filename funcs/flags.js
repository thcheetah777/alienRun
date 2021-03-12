// Flag.js
function flagSetup(phaser) {
  // Flags
  game.flags = phaser.physics.add.staticGroup();
  world.flags.forEach(x => {
    game.flags.create(x, 580, "flagDown").active = false;
  });

  // Collider Flag, Player
  phaser.physics.add.overlap(game.flags, game.player, function(player, flag) {
    if (flag.active === false) {
      game.checkpointSound.play();
    }
    game.checkpoint = flag.x;
    flag.active = true;
    flag.anims.play("flag", true);
  });
}
