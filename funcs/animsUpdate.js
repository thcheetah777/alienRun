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
}
