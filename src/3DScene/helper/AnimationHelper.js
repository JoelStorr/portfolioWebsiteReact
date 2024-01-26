import * as BABYLON from "@babylonjs/core";

export default class AnimationHelper {
  createAnimations(
    mesh,
    scene,
    from = BABYLON.Vector3.Zero,
    to = BABYLON.Vector3.Zero,
    timeInFrames = 540,
    calback = () => {}
  ) {
    const positionFrames = [];

    const fps = 60;

    const positionAnim = new BABYLON.Animation(
      "positionAnim",
      "position",
      fps,
      BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT,
      undefined
    );

    positionFrames.push({ frame: 0, value: mesh.position });

    positionFrames.push({ frame: timeInFrames, value: to });

    positionAnim.setKeys(positionFrames);

    mesh.animations.push(positionAnim);

    let anim = scene.beginAnimation(mesh, 0, timeInFrames);
    anim.onAnimationEnd = () => {
      console.log("Animation ended");
      calback();
    };
  }
}
