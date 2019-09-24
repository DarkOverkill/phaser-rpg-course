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

    this.prefabs = {};
    for (let prefab_name in this.level_data.prefabs) {
      const prefab_data = this.level_data.prefabs[prefab_name];
      const { type, name, position, properties} = prefab_data
      if (this.prefab_classes.hasOwnProperty(type)) {
        const prefab = new this.prefab_classes[type](this, name, position, properties);
      }
    }
  }
}

export default JSONLevelScene;
