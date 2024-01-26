import * as BABYLON from "@babylonjs/core";

export default class SetupHelper {
  constructor() {}

  _camera = null;
  _light = null;
  _ground = null;
  _testBox = null;

  // Sets up Camera
  createCamera(scene, debug = false) {
    // Camera
    this._camera = new BABYLON.ArcRotateCamera(
      "arcRotateCamera",
      0,
      1,
      5,
      new BABYLON.Vector3(19, 5, 0),
      scene
    );
    this._camera.speed = 0.1;
    if (debug) {
      this._camera.attachControl(canvas, true);
    }
    this._camera.wheelPrecision = 10;

    //camera.upperBetaLimit = BABYLON.Angle.FromDegrees(90).radians();
    //camera.lowerBetaLimit = BABYLON.Angle.FromDegrees(90).radians();

    return this._camera;
  }

  createBasicLights(scene) {
    this._light = new BABYLON.HemisphericLight(
      "hemisphericLight", // name
      new BABYLON.Vector3(-5, 5, 0), // direction
      scene // scene
    );

    // These are special to the Hemispher light
    this._light.groundColor = new BABYLON.Color3(1, 1, 1); // Reflection light of the ground
    this._light.diffuse = new BABYLON.Color3(1, 1, 1); // Overall Diffuse color
    this._light.specular = new BABYLON.Color3(1, 1, 1); // spec highlight color
  }

  createBasicEnv(scene) {
    // Basic Envionment

    scene.createDefaultEnvironment({
      createGround: false,
      createSkybox: false,
    });

    return new BABYLON.HemisphericLight(
      "hemLight",
      new BABYLON.Vector3(0, 1, 0)
    );
  }

  createGround(
    scene,
    position = new BABYLON.Vector3(0, 0, 0),
    width = 50,
    height = 50,
    visible = true
  ) {
    // ---------------------------------------- Ground ---------------------------------------
    this._ground = BABYLON.CreateGround("ground", {
      width: width,
      height: height,
    });
    this._ground.position = new BABYLON.Vector3(0, -1.25, 0);

    const groundMaterial = new BABYLON.StandardMaterial();
    groundMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
    this._ground.material = groundMaterial;
    this._ground.checkCollisions = false;
    this._ground.isPickable = false;
    this._ground.physicsImpostor = new BABYLON.PhysicsImpostor(
      this._ground,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 0 },
      scene
    );
    this._ground.position = new BABYLON.Vector3(
      0 + position.x,
      0 + position.y,
      0 + position.z
    );
    this._ground.isVisible = visible;

    //ground.material.wireframe = true;

    // const utilLayer = new BABYLON.UtilityLayerRenderer(scene);
    // const positionGizmo = new BABYLON.PositionGizmo(utilLayer);
    // positionGizmo.attachedMesh = this._ground;

    return this._ground;
  }

  createTestCube(scene, pos = new BABYLON.Vector3(0, 0, 0)) {
    this._testBox = new BABYLON.MeshBuilder.CreateBox("testBox", {
      size: 2,
    });
    this._testBox.position = new BABYLON.Vector3(
      0 + pos.x,
      0 + pos.y,
      0 + pos.z
    );
    this._testBox.checkCollisions = true;
    this._testBox.physicsImpostor = new BABYLON.PhysicsImpostor(
      this._testBox,
      BABYLON.PhysicsImpostor.BoxImpostor,
      { mass: 0 },
      scene
    );

    this._testBox.physicsImpostor.setLinearVelocity(
      new BABYLON.Vector3(0, -6, 0)
    );
    return this._testBox;
  }
}
