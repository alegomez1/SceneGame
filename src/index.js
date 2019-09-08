import Phaser from "phaser";
import gameScene from "../src/scenes/gameScene"
import menuScene from "./scenes/menuScene";

var config = {
  type: Phaser.AUTO,
  width: 1300,
  height: 700,
  pixelart: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: 0,
      debug: true
    }
  },
  scene: [menuScene, gameScene]
};

var game = new Phaser.Game(config);