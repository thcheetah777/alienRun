// AnimsUpdate.js
function animsUpdate() {
  // Animation
  if (game.player.jumpTimer < 0) {
    game.player.anims.play("run", true);
  } else {
    game.player.jumpTimer--;
  }

  // Enemy animation
  game.saws.getChildren().forEach(sprite => {
    sprite.anims.play("saw", true);
  });
  game.slimeBlocks.getChildren().forEach(sprite => {
    sprite.anims.play("slime", true);
  });
  game.laserShooters.getChildren().forEach(sprite => {
    if (sprite.active) {
      game.lasers.getChildren().forEach(sprite => {
        sprite.destroy();
      });
      for (var i = 0; i < 8; i++) {
        game.lasers.create(sprite.x, (i * 70) + (sprite.height * 2), "laser");
      }
    } else {
      game.lasers.getChildren().forEach(sprite => {
        sprite.destroy();
      });
      sprite.active = true;
    }
  });
}
