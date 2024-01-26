import * as BABYLON from "@babylonjs/core";

import "@babylonjs/loaders/glTF";

export default class EnviornmentHelper {

  defaultMaterial

  async loadEnv(scene) {
    // Loads modles asnyc
    return await BABYLON.SceneLoader.ImportMeshAsync(
      "", // name
      "./", // root path
      "website_building.glb" // file name
    ).then((result) => {
      //   const importedAnimationGroups = result.animationGroups;
      //   importedAnimationGroups[3].play(true);

      console.log(result);

      result.meshes.forEach((e) => {
         e.checkCollisions = true;
         e.isPickable = false;

        console.log(e.name)

         if (e.name == "WorkDesk" || e.name == "Teleporter"){
          console.log("loaded desk")
          e.isPickable = true;

          console.log(e.material)

          this.defaultMaterial = e.material

          
          BABYLON.Tags.AddTagsTo(e, "Interactable");
         }



      });

      return result;
    });
  }
}
