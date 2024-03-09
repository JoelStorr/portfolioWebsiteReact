import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

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

  console.log(images[0]);
  return (
    <div className="websiteContent">
      <h1>Shape CSS</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Used Tech</h3>
          <ul>
            <li>Vue JS Frontend Library</li>
            <li>Matter JS (physics library)</li>
          </ul>
          <div className="repoLinkHolder">
          <a href="https://github.com/JoelStorr/shape-css">GitHub Repo</a>
          <a href="https://github.com/JoelStorr/shape-css">Live Example</a>
          </div>
        </div>
      </div>
      <div className="websiteContentAbout">
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
        <h3>Entry Point to the Project:</h3>
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
        <h4>main.js</h4>
        <p>
          The main.js file builds the entry point to the Application imports the
          Vue App, router, and store as well as the Copy Directive, which
          handles the Interaction with the ClipBoard API. On top of that, it
          Inits the store and router as well as exposes the Copy directive to
          the App, before it gets mounted by Vue.
        </p>
        <h4>app.vue</h4>
        <p>
          The app.vue file builds the main render field for the Application and
          holds the information to render the view as well as the Logic for
          deciding if a Desktop or Mobile view of the program should be
          displayed. Since a Vue file is used it can also hold the Main Styles
          for the App.
        </p>

        <h4>assets:</h4>
        <p>
          The assets folder is in this case mostly empty and unused but there to
          be used if the Project is extended in the future and to have a full
          Vue.js structure.
        </p>

        <h4>views & components:</h4>
        <p>
          The views folder holds the individual views of the Application. The
          components folder holds the Individual parts of the Application that
          are rather code-intensive or reused in Multiple Instances. I choose to
          first explain the View and then the corresponding components to make
          the Documentation not too scattered.
        </p>

        <h4>HomeView.vue</h4>
        <p>
          The Home view is tasked to handle the rendering of the Initial
          Matter.js component (src/components/HomeComp/matterJS.vue).
        </p>

        <h4>matterJs.vue</h4>
        <p>
          The matterJs.vue file holds the Main Logic for the Matter.js Physiks
          engine and handles the drawing of elements onto the Canvas as well as
          the Implementation of the Physics based on the Matter.js Package.
          <br />
          Resources for this part of the Code: <br />
          Matter.js Docs <br />
          The Coding Train: Matter.js Physics on YT <br />
          MenueView.vue <br />
          This file handles the Display of the menu and Dynamically Loads the
          right amount of Tool Cards into the View
        </p>

        <h4>BaseCardComponent.vue</h4>

        <p>
          This file handles the Display of the Tool Cards and loads the Relevant
          Icons that get passed into the file via the MenueView.vue as well as
          pointing the Button to the Correct Application Route.
        </p>

        <h4>ToolView.vue</h4>
        <p>
          Displays the Tool itself and can load the needed tool Component based
          on the Selected Route (router view). It also continues the Logic to
          point back to the Main application menu. <br />
          It can load any of the Tools that are inside the
          (src/components/tools/ ... .vue).
        </p>

        <h4>dropShadow.component.vue</h4>
        <p>
          This file contains the Logic to display the Drop shadow Tool and uses
          the Copy component to hook into the ClipBoard API of the Browser.
        </p>

        <h4>threedtransform.component.vue</h4>

        <p>
          Holds the Logic for the 3D Transform Tool and Loads in the Copy
          Component to hook into the ClipBoard API of the Browser.
        </p>

        <h4>BaseCopy.component.vue</h4>
        <p>
          This component uses Copy directive which allows you to copy any peace
          of String and pass it to be used through the ClipBoard API. Its task
          is to show the Copy Overlay over the Code Block Directives/copy.js
          Creates a selected aria of the screen that can be used via the
          Clipboard API.
        </p>

        <h4>MobileHome.component.vue</h4>
        <p>
          This file gets rendered when the user visits the Page from a non
          Desktop device. The Device Checking is done through the HomeView.vue
          file.
        </p>

        <h4>Router (index.js)</h4>
        <p>
          The router manages the Routing of the SPA application and allows for a
          more Software like feel.
        </p>

        <h4>Store (index.js)</h4>
        <p>
          The store file would allow the user to share properties like color or
          other info throughout the App. The Structure for that is there but it
          is not implemented because there isn't a use case jet. Intend to add
          that beyond the Scope of the final Project.
        </p>

        <h4>Design</h4>
        <p>
          For the Project, I choose to have a High Contrast minimalistic design,
          which would not only allow the user to see the Shape and Shadow
          properly inside the Tool section but also make the Physics effect
          stand out more on the Landing Page.
        </p>
      </div>
    </div>
  );
}

