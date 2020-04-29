import 'phaser'
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js'
import store from './helplers/globalStore'
import BootScene from './scenes/BootScene'
import PreloaderScene from './scenes/PreloaderScene'
import MenuScene from './scenes/MenuScene'
import Scene1 from './scenes/Scene1'
import DemoScene from './scenes/DemoScene'
import Scene2 from './scenes/Scene2'

const config = {
  // For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
  type: Phaser.WEBGL,
  // pixelArt: true,
  // roundPixels: false,
  parent: 'game-container',
  width: 1280,
  height: 720,
  dom: {
    createContainer: true
  },
  physics: {
    // default: 'arcade',
    // arcade: {
    //   gravity: {
    //     y: 800
    //   },
    //   debug: false
    // }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  plugins: {
    scene: [
      {
        key: 'rexUI',
        plugin: UIPlugin,
        mapping: 'rexUI'
      }
    ],
    global: []
  },
  scene: [
    // DemoScene,
    BootScene,
    PreloaderScene,
    MenuScene,
    Scene1,
    Scene2
  ]
}
window.addEventListener('load', function () {
  store.init(new Phaser.Game(config)) // eslint-disable-line no-unused-vars
})
