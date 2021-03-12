// Alien Run
// Preload
function preload() {
  // Player
  this.load.image("playerJump", "assets/imgs/playerJump.png");
  this.load.image("playerWalk1", "assets/imgs/playerWalk1.png");
  this.load.image("playerWalk2", "assets/imgs/playerWalk2.png");

  // Backgrounds
  this.load.image("mushroomBackground", "assets/imgs/mushroomBackground.png");
  this.load.image("forestBackground", "assets/imgs/forestBackground.png");

  // Flag
  this.load.image("flagDown", "assets/imgs/flagDown.png");
  this.load.image("flagMove0", "assets/imgs/flagMove0.png");
  this.load.image("flagMove1", "assets/imgs/flagMove1.png");

  // Saw
  this.load.image("saw0", "assets/imgs/saw0.png");
  this.load.image("saw1", "assets/imgs/saw1.png");

  // Slime
  this.load.image("slime0", "assets/imgs/slime0.png");
  this.load.image("slime1", "assets/imgs/slime1.png");

  // Mushroom
  this.load.image("mushroom", "assets/imgs/mushroom.png");

  // Crate
  this.load.image("crate", "assets/imgs/crate.png");

  // SFX
  // Checkpoint
  this.load.audio("checkpoint", "assets/sfx/checkpoint.ogg");

  // Backgrounds
  this.load.audio("mushroomBackground", "assets/sfx/mushroomBackground.mp3");
  this.load.audio("forestBackground", "assets/sfx/forestBackground.mp3");

  // Die
  this.load.audio("die", "assets/sfx/die.mp3");

  // Jump
  this.load.audio("jump", "assets/sfx/jump.ogg");

  // Mushroom
  this.load.audio("mushroom", "assets/sfx/mushroom.ogg");

  // Explosion
  this.load.audio("explosion", "assets/sfx/explosion.wav");
}

// Create
function create() {
  // Main setup
  setup(this);

  // Flags setup
  flagSetup(this);

  // Saws setup
  sawSetup(this);

  // Slime setup
  slimeSetup(this);

  // Mushroom setup
  mushroomSetup(this);

  // Crates setup
  crateSetup(this);

  // Animation setup
  animsSetup(this);
}

// Update
function update() {
  // Player controls and movement
  playerUpdate();

  // Animations
  animsUpdate();
}

// Phaser config
const config = {
  // Type
  type: Phaser.AUTO,

  // Proportions
  width: 1024,
	height: 643,

  // Physics
  physics: {
    // Default
    default: "arcade",

    // Arcade
    arcade: {
      // Gravity
      gravity: {
        y: 2000
      },

      // Options
      enableBody: true,
      debug: true
    }
  },

  // Scenes
  scene: {
    preload,
    create,
    update
  }
};

// Phaser game
const phaserGame = new Phaser.Game(config);
