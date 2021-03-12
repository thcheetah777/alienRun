// Crates.js
function crateSetup(phaser) {
  // Flags
  game.crates = phaser.physics.add.group();
  world.crates.forEach(xy => {
    game.crates.create(xy[0], xy[1], "crate").setCollideWorldBounds(true).setScale(0.6).setDragX(1000000);
  });

  // Collider Crates, Player
  phaser.physics.add.collider(game.crates, game.player);

  // Collider Crates, Player
  phaser.physics.add.collider(game.crates, game.crates);

  // Collider Crates, Saws
  phaser.physics.add.collider(game.crates, game.saws, function(crate, saw) {
    // SFX
    game.explosionSound.play();

    // Destroy
    crate.destroy();
  });
}
