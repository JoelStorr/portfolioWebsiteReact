import * as BABYLON from "@babylonjs/core";
import AnimationHelper from "./helper/AnimationHelper";

const floorNumber = {
  roof: [0, new BABYLON.Vector3(-0.5, 3.5, -8)],
  floor1: [1, new BABYLON.Vector3(-0.5, 0, -8)],
  floor2: [2, new BABYLON.Vector3(-0.5, -3.5, -8)],
  floor3: [3, new BABYLON.Vector3(-0.5, -7, -8)],
};

export default class ActionManager {
  _currentFloor = floorNumber.roof;
  _baseUIDiv = document.getElementById("base-ui");
  _elevatorDiv = document.getElementById("elevator");
  _elevatorBtnUp = document.getElementById("up");
  _elevatorBtnDown = document.getElementById("down");
  _elevatorBtnLeave = document.getElementById("eave");
  _animationHelper = new AnimationHelper();

  _interactionCube;
  _scene;
  _floor;
  _characterHelper;
  _characterCube;
  _camera;

  constructor(floor, scene, characterHelper, characterCube, camera) {
    this._scene = scene;
    this._characterHelper = characterHelper;
    this._characterCube = characterCube;
    this._camera = camera;
    this._floor = floor;

    this.floorMover();

    this.handleButtonEvents();
  }

  handleButtonEvents() {
    this._elevatorBtnDown.addEventListener("click", (e) => {
      console.log("Down pressed");

      const nextFloor = this.calculateNextFloor();
      this.moveFloorToNextPosition(nextFloor);
    });

    this._elevatorBtnUp.addEventListener("click", (e) => {
      console.log("Pressed Up");

      const nextFloor = this.calculateNextFloor(false);
      this.moveFloorToNextPosition(nextFloor);
    });
  }

  // NOTE: Entry Point to move the ground
  floorMover() {
    const cube = new BABYLON.MeshBuilder.CreateBox("floorMover", { size: 2 });
    cube.checkCollisions = false;
    cube.material = new BABYLON.StandardMaterial();
    cube.material.wireframe = true;
    cube.position = new BABYLON.Vector3(
      this._floor.position.x,
      this._floor.position.y + 1,
      this._floor.position.z
    );
    //cube.position.y += 1;

    cube.actionManager = new BABYLON.ActionManager(this._scene);
    cube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
          parameter: {
            mesh: this._characterCube,
            userPersiseInteraction: true,
          },
        },
        () => {
          // TODO: Call function
          console.log("Character entered");
          // Figure out which floor
          console.log(cube.position);
          this._currentFloor = this.handleFloorPosition(cube);

          this._elevatorDiv.style.display = "block";
          this._baseUIDiv.style.display = "block";

          // move elements a set number of elements down
        }
      )
    );

    cube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
        {
          trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
          parameter: {
            mesh: this._characterCube,
            userPersiseInteraction: true,
          },
        },
        () => {
          // TODO: Call function
          console.log("Character left");
          this._elevatorDiv.style.display = "none";
          this._baseUIDiv.style.display = "none";
        }
      )
    );

    this._interactionCube = cube;
  }

  handleFloorPosition(cube) {
    // TODO: Implement function to handle floor position
    switch (cube.position.y - 1) {
      case floorNumber.roof[1].y:
        console.log("Current Floor: Roof");
        return floorNumber.roof;

      case floorNumber.floor3[1].y:
        console.log("Current Floor: Floor 3");
        return floorNumber.floor3;

      case floorNumber.floor2[1].y:
        console.log("Current Floor: Floor 2");
        return floorNumber.floor2;

      case floorNumber.floor1[1].y:
        console.log("Current Floor: Floor 1");
        return floorNumber.floor1;
      default:
        console.log("You are not sepposed to be here");
    }
  }

  calculateNextFloor(down = true) {
    var curIndex = this._currentFloor[0];
    var keyOffste = down ? curIndex + 1 : curIndex - 1;

    for (let key in floorNumber) {
      console.log(floorNumber[key], keyOffste);

      if (floorNumber[key][0] == keyOffste) {
        return floorNumber[key];
      }
    }

    throw Error("Could not reach the next floor, this should not happen");
  }

  moveFloorToNextPosition(nextFloor) {
    // TODO: Move floor and charcter + box up
    this._animationHelper.createAnimations(
      this._floor,
      this._scene,
      this._floor.position,
      nextFloor[1],
      300,
      () => {
        console.log("Floor animation ran");
        this._currentFloor = nextFloor;
      }
    );

    this._animationHelper.createAnimations(
      this._interactionCube,
      this._scene,
      this._interactionCube.position,
      new BABYLON.Vector3(nextFloor[1].x, nextFloor[1].y + 0.5, nextFloor[1].z),
      300,
      () => {
        console.log("Moved Interaction Cube");
      }
    );

    // TODO: Move charcter Movment Box and Event Box down

    // TODO: Move movement Box with key events down

    // TODO: Rebind the Charcter back to the movement Box

    // TODO: Allow character to move again via WSAD
  }
}
