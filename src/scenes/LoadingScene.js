class LoadingScene extends Phaser.Scene {
  constructor() {
    super({ key: 'LoadingScene' });
  }

  init(data) {
    this.level_data = data.level_data;

    let loading_message = this.add.text(
      320,
      240,
      'Loading',
      { font: '48px Minimal', fill: '#ffffff' }
    );
  }

  preload() {
    let assets = this.level_data.assets;
    for (let assets_key in assets) {
      let asset = assets[assets_key];
      switch (asset.type) {
        case 'image':
          this.load.image(assets_key, asset.source);
          break;
        case 'spritesheet':
          this.load.spritesheet(
            assets_key,
            asset.source,
            {
              frameWidth: asset.frame_width,
              frameHeight: asset.frame_height,
              frames: asset.frames,
              margin: asset.margin,
              spacing: asset.spacing
            }
          );
          break;
      }
    }
  }

  create(data) {
    this.scene.start('TitleScene', { level_data: this.level_data });
  }
}

export default LoadingScene;
