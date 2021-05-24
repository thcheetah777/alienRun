// Crates.js
function crateSetup(phaser) {
  // Flags
  game.crates = phaser.physics.add.group();
  world.crates.forEach(xy => {
    let crate = game.crates.create(xy[0], xy[1], "crate");
    crate.setCollideWorldBounds(true).setScale(0.6).setDragX(1000);
    crate.xPos = xy[0];
    crate.yPos = xy[1];
  });

  // Collider Crates, Player
  phaser.physics.add.collider(game.crates, game.player);

  // Collider Crates, Crates
  phaser.physics.add.collider(game.crates, game.crates);
}
