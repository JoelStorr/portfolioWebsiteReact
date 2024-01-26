import * as BABYLON from "@babylonjs/core";

export default class CharacterHelper {
  constructor() {}
  _charcterSize = 4.2;
  _character = null;
  _characterCube = null;
  _transitionCube = null;
  _isPhysics = true;

  async loadCharacter(scene, camera, pos = new BABYLON.Vector3.Zero()) {
    this._character = await this.loadCharacterSpriter(scene, pos);
    this.createCharacterCube(camera, scene, pos);
    this.movementHandler(scene, camera);

    scene.registerBeforeRender(this.matchCharacter);

    // NOTE: Prevents the Cube from Rotating when falling
    this._characterCube.physicsImpostor.registerBeforePhysicsStep(
      (impostor) => {
        impostor.setAngularVelocity(BABYLON.Vector3.Zero());
      }
    );

    return { character: this._character, characterCube: this._characterCube };
  }

  matchCharacter = () => {
    if (this._transitionCube == null) {
      this._character.position = this._characterCube.position;
    } else {
      this._character.position = this._transitionCube.position;
    }
  };

  async loadCharacterSpriter(scene, pos = new BABYLON.Vector3.Zero()) {
    const characterManager = new BABYLON.SpriteManager(
      "characterManager",
      "./walk_spride_sheet.png",
      1,
      64,
      scene
    );

    characterManager.pixelPerfect = true;

    this._character = new BABYLON.Sprite("character", characterManager);
    this._character.width = this._charcterSize;
    this._character.height = this._charcterSize;
    this._character.position = new BABYLON.Vector3(
      0 + pos.x,
      0 + pos.y,
      0 + pos.z
    );
    this._character.playAnimation(24, 28, true, 170);
    //this._character.checkCollisions = true;
    this._character.isPickable = true;

    // Change Direction of sprite
    //character.invertU = true;
    //character.imvertV = true;

    //movementHandler(character);

    return this._character;
  }

  createCharacterCube(camera, scene, pos = new BABYLON.Vector3.Zero()) {
    // Add a follow cube

    this._characterCube = new BABYLON.MeshBuilder.CreateBox("myBox", {
      size: 1,
      width: 1,
      height: this._charcterSize / 2,
      depth: 1,
    });
    this._characterCube.position = new BABYLON.Vector3(
      0 + pos.x,
      0 + pos.y,
      0 + pos.z
    );
    this._characterCube.material = new BABYLON.StandardMaterial();
    this._characterCube.material.wireframe = true;
    this._characterCube.applyGravity = true;
    this._characterCube.checkCollisions = true;

    this._characterCube.physicsImpostor = new BABYLON.PhysicsImpostor(
      this._characterCube,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 50 },
      scene
    );

    camera.setTarget(this._characterCube.position);

    //this._characterCube.isVisible = false
  }

  transitionCube(camera, pos = new BABYLON.Vector3(0, 0, 0)) {
    // Add a follow cube

    this._transitionCube = new BABYLON.MeshBuilder.CreateBox("myBox2", {
      size: 1,
      width: 1,
      height: 2.5,
      depth: 1,
    });
    this._transitionCube.position = new BABYLON.Vector3(
      0 + pos.x,
      0 + pos.y,
      0 + pos.z
    );

    const materail = new BABYLON.StandardMaterial();
    materail.diffuseColor = BABYLON.Color3.Red();

    this._transitionCube.material = materail;

    this._transitionCube.material.wireframe = true;
    //this._characterCube.checkCollisions = true;

    camera.setTarget(this._transitionCube.position);

    //this._characterCube.isVisible = false
    return this._transitionCube;
  }

  deleteTransitionCube() {
    this._transitionCube.dispose();
    this._transitionCube = null;
  }

  movementHandler(scene, camera) {
    // TODO: Set Animations based on Tile map
    // Sets up Animation elements

    let spriteSpeed = 170;
    let speed = 0.95;

    let animSpeed;
    let playerPosition = new BABYLON.Vector3(0, 1.5, 0);

    // Movement Controller
    let keyStatus = {
      w: false,
      s: false,
      a: false,
      d: false,
      e: false,

      Shift: false,
    };

    let isNewKeyPress = true;

    // Detect action and set keyStatus
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnKeyDownTrigger,
        (event) => {
          // determan the key
          let key = event.sourceEvent.key;
          console.log(key);

          if (this._transitionCube != null) {
            return;
          }

          if (key == "Shift") {
            spriteSpeed = 100;
            speed = 2;
          }

          if (key !== "Shift") {
            key = key.toLowerCase();
          }

          if (key in keyStatus) {
            if (keyStatus[key] == true) {
              isNewKeyPress = false;
            } else {
              this._character.stopAnimation();
              isNewKeyPress = true;
            }

            keyStatus.w = false;
            keyStatus.s = false;
            keyStatus.a = false;
            keyStatus.d = false;
            keyStatus.e = false;

            keyStatus[key] = true;
          }

          if (key == "w" && isNewKeyPress) {
            this._character.playAnimation(8, 13, true, spriteSpeed);
          }

          if (keyStatus.s && isNewKeyPress) {
            this._character.stopAnimation;
            this._character.playAnimation(16, 21, true, spriteSpeed);
          }
          if (keyStatus.a && isNewKeyPress) {
            this._character.invertU = false;
            this._character.playAnimation(0, 5, true, spriteSpeed);
          }
          if (keyStatus.d && isNewKeyPress) {
            this._character.invertU = true;
            this._character.playAnimation(0, 5, true, spriteSpeed);
          }

          isNewKeyPress = false;
        }
      )
    );

    // Handles key up
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        BABYLON.ActionManager.OnKeyUpTrigger,
        (event) => {
          let key = event.sourceEvent.key;

          if (key == "Shift") {
            spriteSpeed = 170;
            speed = 0.95;
          }

          if (key !== "Shift") {
            key = key.toLowerCase();
          }

          if (key in keyStatus) {
            keyStatus[key] = false;
            velocity.set(0, 0, 0);
            isNewKeyPress = true;
          }

          if (
            !keyStatus.w &&
            !keyStatus.s &&
            !keyStatus.a &&
            !keyStatus.d &&
            this._transitionCube == null
          ) {
            // Todo: play idle animation
            this._character.playAnimation(24, 28, true, spriteSpeed);
          }

          console.log(keyStatus);
        }
      )
    );

    const directionLR = new BABYLON.Vector3(0, 0, 1);
    const directionUD = new BABYLON.Vector3(1, 0, 0);
    const velocity = new BABYLON.Vector3(0, 0, 0);
    const movmentSpeed = 0.1;
    scene.registerBeforeRender((e) => {
      const delta = e.deltaTime ? e.deltaTime * 0.001 : 0.016;

      if (this._transitionCube != null) {
        return;
      }

      if (keyStatus.w) {
        //velocity.y = 1;
        //velocity.z += 1;
        //velocity.x = 1

        this._characterCube.moveWithCollisions(
          directionUD.scale(-movmentSpeed)
        );
        //this._character.position.x = this._characterCube.position.x;
      }

      if (keyStatus.s) {
        //velocity.y = -1;
        //velocity.z += -1;

        this._characterCube.moveWithCollisions(directionUD.scale(movmentSpeed));
        //this._character.position.x = this._characterCube.position.x;
      }

      if (keyStatus.a) {
        //velocity.x = -1;
        //this._character.position.z -= 1 * delta;
        //this._characterCube.position.z -= 1 * delta;

        this._characterCube.moveWithCollisions(
          directionLR.scale(-movmentSpeed)
        );
        //this._character.position.z = this._characterCube.position.z;
      }

      if (keyStatus.d) {
        //velocity.x = 1;
        this._characterCube.moveWithCollisions(directionLR.scale(movmentSpeed));
        //this._character.position.z = this._characterCube.position.z;
      }

      camera.setTarget(this._characterCube.position);
      camera.position = new BABYLON.Vector3(
        this._characterCube.position.x + 19,
        this._characterCube.position.y + 5,
        this._characterCube.position.z
      );

      // if (keyStatus.e){
      //   this._characterCube.position = new BABYLON.Vector3(3,3,3)
      // }

      // velocity.normalize();

      // Makes movement based on Camera orientation
      // BABYLON.Vector3.TransformNormalToRef(
      //   velocity,
      //   camera.getWorldMatrix(),
      //   direction
      // );
      // direction.scaleInPlace(delta * speed);
      //character.position.addInPlace(direction);
      //characterCube.position.addInPlace(direction);

      //camera.position.x = 20;
    });
  }
}
