// Lasers.js
function laserSetup(phaser) {
  game.laserShooters = phaser.physics.add.staticGroup();
  game.buttons = phaser.physics.add.staticGroup();
  game.lasers = phaser.physics.add.staticGroup();

  world.lasers.forEach(x => {
    // Laser shooter
    let laserShooter = game.laserShooters.create(x, 50, "laserShooter");
    laserShooter.active = true;
    laserShooter.setScale(1.5);

    // Button
    game.buttons.create(x - 500, 600, "buttonInactive").setScale(0.7).setCircle(40).setOffset(25, 100).laser = laserShooter;
  });

  // Collider Button, Player
  phaser.physics.add.collider(game.buttons, game.player, function(player, button) {
    if (player.body.touching.down && button.body.touching.up) {
      button.laser.active = false;
      button.setTexture("buttonActive");
    }
  });

  // Collider Button, Crate
  phaser.physics.add.collider(game.buttons, game.crates, function(button, crate) {
    button.laser.active = false;
    button.setTexture("buttonActive");
  });

  // Collider Lasers, Player
  phaser.physics.add.collider(game.lasers, game.player, function(player, laser) {
    // Shake
    phaser.cameras.main.shake(240, 0.01, false);

    // SFXw
    game.dieSound.play();

    // Go to checkpoint
    player.x = game.checkpoint;

    // Increment deaths
    game.deaths++;
  });

  // Collider Crates, Lasers
  phaser.physics.add.collider(game.crates, game.lasers, function(crate, laser) {
    // SFX
    game.explosionSound.play();

    // Create
    let crates = game.crates.create(crate.xPos, crate.yPos, "crate");
    crates.setCollideWorldBounds(true).setScale(0.6).setDragX(1000);
    crates.xPos = crate.xPos;
    crates.yPos = crate.yPos;

    // Destroy
    crate.destroy();
  });
}
