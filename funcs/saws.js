// Saws.js
function sawSetup(phaser) {
  // Saw
  game.saws = phaser.physics.add.staticGroup();
  world.saws.forEach(x => {
    game.saws.create(x, 547, "saw0").setScale(1.5).setCircle(70).setOffset(-5, 77);
  });

  // Collider Saw, Player
  phaser.physics.add.collider(game.saws, game.player, (player, saw) => {
    // Shake
    phaser.cameras.main.shake(240, 0.01, false);

    // SFX
    game.dieSound.play();

    // Go to checkpoint
    player.x = game.checkpoint;

    // // Create crates
    // world.crates.forEach(x => {
    //   game.crates.create(x, 580, "crate").setCollideWorldBounds(true).setScale(0.6);
    // });
  });
}
