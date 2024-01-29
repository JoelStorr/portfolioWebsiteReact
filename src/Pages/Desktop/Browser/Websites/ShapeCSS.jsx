import React from 'react'
import ImageCarousel from '../../../../Components/ImageCarousel/ImageCarousel';
import "./ShapeCSS.css";

export default function ShapeCSS() {


    const images = [
      {
        url: `./images/shapecss/shapecss1.png`,
        title: "SunFlower",
      },
      {
        url: "./images/shapecss/shapecss2.png",
        title: "SunFlower",
      },
      {
        url: "./images/shapecss/shapecss3.png",
        title: "SunFlower",
      },
    ];

    console.log(images[0])
  return (
    <div className="shapeCSS">
      <div className="shapeCSSFirstSection">
        <div className="shapeCSSCarousel">
          <ImageCarousel slides={images} />
        </div>
        <div className="shapeCSSUsedTech">
          <h3>Used Tech</h3>
          <ul>
            <li>Vue JS Frontend Library</li>
            <li>Matter JS (physics library)</li>
          </ul>
        </div>
      </div>
      <div className="shapeCSSAbout">
        <h3>Core Project Idea:</h3>
        <p>
          The main Project Idea is a set of tools for visually creating CSS
          effects in an easy-to-use way. The app can then return a String back
          to the user that contains the Apropiate code snipped. As a Bonus, I
          build a fun little Physik effect for a catchier Presentation into the
          Landing / front page of the App.
        </p>
        <p>
          Both of the Tools contain the ability to not only represent the
          current Properties on the screen when they are changed but also to
          Interact with the Clipboard API. The Landing Page for the Project
          contains a Libary called Matter JS that allows you to draw shapes into
          an HTML Canvas and to calculate their Physical behavior on the canvas.
          (See: https://joelstorr.github.io/shape-css-gp/)
          <br />
          In Termes of Mobile Responsiveness, the Page will detect Devices
          outside the Desktop realm and will tell prompt the user to use a
          Desktop to access the Application. On the Screen, I provide a Link to
          the Page, that can be copied over to the CLipBoard to be sent to your
          computer.
        </p>
        <h4>Entry Point to the Project:</h4>
        <ul>
          <li>assets</li>
          <li>components</li>
          <li>
            <ul>
              <li>Base</li>
              <li>Directives</li>
              <li>HomeComp</li>
              <li>toosl</li>
            </ul>
          </li>
          <li>router</li>
          <li>store</li>
          <li>views</li>
          <li>App.vue</li>
          <li>main.js</li>
        </ul>
      </div>
    </div>
  );
}
