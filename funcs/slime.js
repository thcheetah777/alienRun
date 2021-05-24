// Slime.js
function slimeSetup(phaser) {
  // Slime
  game.slimeBlocks = phaser.physics.add.group();
  world.slime.forEach(x => {
    let slimeBlock = game.slimeBlocks.create(x, 600, "slime0");
    slimeBlock.setCollideWorldBounds(true).setImmovable(true).setSize(90, 90).setOffset(18, 38);
    slimeBlock.setBounce(1).setVelocityY(-1000);
  });

  // Collider Slime, Player
  phaser.physics.add.collider(game.slimeBlocks, game.player, (player, slimeBlock) => {
    if (slimeBlock.body.touching.up && player.body.touching.down) {
      // SFX
      game.explosionSound.play();

      // Destroy
      slimeBlock.destroy();

      // Bounce
      player.setVelocityY(-500);
    } else {
      // Shake
      phaser.cameras.main.shake(240, 0.01, false);

      // SFX
      game.dieSound.play();

      // Go to checkpoint
      player.x = game.checkpoint;

      // Increment deaths
      game.deaths++;
    }
  });
}
