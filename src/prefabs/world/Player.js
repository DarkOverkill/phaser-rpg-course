import Prefab from '../Prefab';

class Player extends Prefab {
  constructor(scene, name, position, properties) {
    super(scene, name, position, properties);

    this.walking_speed = +properties.walking_speed;

    this.scene.physics.add.existing(this);
    this.body.collideWorldBounds = true;

    console.log(this.scene.layers);
    this.scene.physics.add.collider(this, this.scene.layers.buildings);
    this.body.velocity.x = -this.walking_speed;
  }

  update() {
    // this.scene.physics.world.collider(this, this.scene.layers.buildings);
  }
}

export default Player;
