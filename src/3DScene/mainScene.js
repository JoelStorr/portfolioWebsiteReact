import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders/glTF";
import * as CANNON from "cannon-es";

import SetupHelper from "./helper/SetupHelper";
import CharacterHelper from "./helper/CharacterHelper";
import AnimationHelper from "./helper/AnimationHelper";
import EnviornmentHelper from "./helper/EnviornmentHelper";
import ActionManager from "./ActionMannger";

window.CANNON = CANNON;


// Get HTML Elements
const canvas = document.getElementById("canvas");
const baseUIDiv = document.getElementById("base-ui");
const reactRoot = document.getElementById("root");

// Instance of the engine
const engine = new BABYLON.Engine(canvas);

const setupHelper = new SetupHelper();
const characterHelper = new CharacterHelper();
const animationHelper = new AnimationHelper();
const enviornmentHelper = new EnviornmentHelper();
var actionManger;

// Creates a new scene for the engine to run in
const createScene = async function () {
  // Scene Setup
  const scene = new BABYLON.Scene(engine);
  var gravityVector = new BABYLON.Vector3(0, -1, 0);
  //scene.enablePhysics(gravityVector, new BABYLON.CannonJSPlugin());

  scene.createDefaultLight();
  const framesPerSecond = 60;
  const gravity = -1;
  scene.gravity = new BABYLON.Vector3(0, gravity / framesPerSecond, 0);
  scene.collisionsEnabled = true;
  scene.enablePhysics();

  const camera = setupHelper.createCamera(scene, true);
  const light = setupHelper.createBasicLights(scene);
  setupHelper.createBasicEnv(scene);
  const ground = setupHelper.createGround(
    scene,
    new BABYLON.Vector3(-0.5, 0, 4.5),
    6,
    20
  );
  const ground2 = setupHelper.createGround(
    scene,
    new BABYLON.Vector3(-0.5, 3.5, 4.5),
    6,
    20
  );

  var physicsViewer = new BABYLON.PhysicsViewer(scene);
  // ------------------------ Load  Env ----------------------------

  const env = await enviornmentHelper.loadEnv(scene);
  env.meshes.forEach((e) => {
    // e.checkCollisions = true;
    // e.isPickable = false;

    //  e.physicsImpostor = new BABYLON.PhysicsImpostor(
    //    e,
    //    BABYLON.PhysicsImpostor.BoxImpostor,
    //    { mass: 0 },
    //    scene
    //  );

    //physicsViewer.showImpostor(e.physicsImpostor, e);
  });

  // ------------------------ Load  Character ----------------------------

  let { character, characterCube } = await characterHelper.loadCharacter(
    scene,
    camera,
    new BABYLON.Vector3(0, 5.1, -5)
  );

  // ------------------------- Logic Elements -------------------------------------

  // Moveble floor
  const elevatorFloor = setupHelper.createGround(
    scene,
    new BABYLON.Vector3(-0.5, 3.5, -8),
    6,
    5
  );

  actionManger = new ActionManager(
    elevatorFloor,
    scene,
    characterHelper,
    characterCube,
    camera
  );

  // const testCube = setupHelper.createTestCube(
  //   scene,
  //   new BABYLON.Vector3(2, 0, -10)
  // );

  const testCube2 = new BABYLON.MeshBuilder.CreateBox("testBox2", { size: 2 });
  testCube2.checkCollisions = false;
  testCube2.material = new BABYLON.StandardMaterial();
  testCube2.material.wireframe = true;
  testCube2.position = new BABYLON.Vector3(-10, 0, 0);

  testCube2.actionManager = new BABYLON.ActionManager(scene);

  testCube2.actionManager.registerAction(
    new BABYLON.ExecuteCodeAction(
      {
        trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
        parameter: {
          mesh: characterCube,
          userPersiseInteraction: true,
        },
      },
      () => {
        // TODO: Call function
        actionRunner();
      }
    )
  );

  function actionRunner() {
    setTimeout(() => {
      //scene.unregisterBeforeRender(characterHelper.matchCharacter);
      let transCube = characterHelper.transitionCube(
        camera,
        characterCube.position
      );
      console.log(transCube.position);

      // TODO: Rotate the character during animation the right way
      character.playAnimation(0, 5, true, 170);
      animationHelper.createAnimations(transCube, scene, () => {
        // Callback when animation ended
        characterCube.position = transCube.position;
        characterHelper.deleteTransitionCube();
        character.playAnimation(24, 28, true, 170);
      });
    }, 250);
  }

  // ------------------------------ Handle RayCasting and Rey Picking -------------------------------
  
  var taggedElements = scene.getMeshesByTags("Interactable");
  
  
  scene.onPointerDown = function castRay() {
    const hit = scene.pick(scene.pointerX, scene.pointerY);

    if (hit.pickedMesh && hit.pickedMesh.name == "WorkDesk") {
      
      hit.pickedMesh.material.diffuseColor = BABYLON.Color3.Red();
      baseUIDiv.style.display = "block"
      reactRoot.style.display = "block"
    }
  };



  let pickedObject = false;
  
  scene.onPointerMove = function castRay(){
    
    const hit = scene.pick(scene.pointerX, scene.pointerY);
    if (
      hit.pickedMesh && 
      (hit.pickedMesh.name == "WorkDesk" ||
      hit.pickedMesh.name == "Teleporter")
    ) {
      document.body.style.cursor = "pointer";
      hit.pickedMesh.material = new BABYLON.StandardMaterial();
      hit.pickedMesh.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
      hit.pickedMesh.material.alpha = 1;

      pickedObject = true

    } else if (pickedObject) {

      taggedElements.forEach(e => e.material = enviornmentHelper.defaultMaterial)
       
      document.body.style.cursor = "auto";
      console.log("Pick Resetter ran")
      pickedObject = false
      

      // scene.meshes.

      // hit.pickedMesh.material = new BABYLON.StandardMaterial();
      // hit.pickedMesh.material.emissiveColor = BABYLON.Color3.Blue();
    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // TODO: Dlete for final Build shows grid for floor
  scene.meshes.forEach((mesh) => {
    if (mesh.physicsImpostor) {
      physicsViewer.showImpostor(mesh.physicsImpostor, mesh);
    }
  });












  return scene;
};

const scene = await createScene();

// Runs the engine
engine.runRenderLoop(function () {
  scene.render();
});

// Handles window resizing
window.addEventListener("resize", () => {
  engine.resize();
});
