// Anims.js
function animsSetup(phaser) {
  // Run
  phaser.anims.create({
    // Animation key
    key: "run",

    // Frames
    frames: [{
      key: "playerWalk2"
    },
    {
      key: "playerWalk1"
    }],

    // Options
    frameRate: 10,
    repeat: 1
  });

  // Jump
  phaser.anims.create({
    // Animation key
    key: "jump",

    // Frames
    frames: [{
      key: "playerJump"
    }],

    // Options
    repeat: 1
  });

  // Saw
  phaser.anims.create({
    // Animation key
    key: "saw",

    // Frames
    frames: [{
      key: "saw0"
    },
    {
      key: "saw1"
    }],

    // Options
    frameRate: 10,
    repeat: -1
  });

  // Slime
  phaser.anims.create({
    // Animation key
    key: "slime",

    // Frames
    frames: [{
      key: "slime0"
    },
    {
      key: "slime1"
    }],

    // Options
    frameRate: 5,
    repeat: -1
  });

  // Flag
  phaser.anims.create({
    // Animation key
    key: "flag",

    // Frames
    frames: [{
      key: "flagMove0"
    },
    {
      key: "flagMove1"
    }],

    // Options
    frameRate: 5,
    repeat: -1
  });
}
