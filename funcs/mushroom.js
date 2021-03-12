// Mushroom.js
function mushroomSetup(phaser) {
  // Mushroom
  game.mushrooms = phaser.physics.add.staticGroup();
  world.mushrooms.forEach(x => {
    game.mushrooms.create(x, 575, "mushroom").setScale(2).setSize(70, 70).setOffset(0, 35);
  });

  // Collider Player, Mushroom
  phaser.physics.add.collider(game.player, game.mushrooms, function(player, mushroom) {
    // SFX
    game.mushroomSound.play();

    // Bounce
    game.player.setVelocityY(-1300);
  });
}
