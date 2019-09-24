class JSONLevelScene extends Phaser.Scene {
  constructor(key) {
    super({ key });
  }

  init(data) {
    this.level_data = data.level_data;
  }

  create() {
    this.groups = {};
    this.level_data.groups.forEach((group_name) => {
      this.groups[group_name] = this.add.group();
    }, this);

    this.sprites = {};
    for (let sprite_name in this.level_data.sprites) {
      let sprite_data = this.level_data.sprites[sprite_name];
      let sprite;
      const { position, texture, text, style, group } = sprite_data;
      switch (sprite_data.type) {
        case 'sprite':
          sprite = this.add.sprite(position.x, position.y, texture);
          break;
        case 'text':
          sprite = this.add.text(position.x, position.y, text, style);
          break;
      }
      this.sprites[sprite_name] = sprite;
      this.groups[group].add(sprite);
    }
  }
}

export default JSONLevelScene;
