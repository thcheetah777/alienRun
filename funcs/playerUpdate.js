// PlayerUpdate.js
function playerUpdate() {
  // Move player
  game.player.setVelocityX(game.speed);

  // Jump
  if ((game.cursors.space.isDown || game.cursors.up.isDown) && (game.player.body.blocked.down || game.player.body.touching.down)) {
    // SFX
    game.jumpSound.play();

    // Jump
    game.player.setVelocityY(-900);

    // Anim
    game.player.anims.play("jump", false);

    // Jump timer
    game.player.jumpTimer = 50;
  }
}
