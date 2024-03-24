import ImageCarousel from "../../../../Components/ImageCarousel/ImageCarousel";
import "./WebsiteConetent.css";

export default function Audiophile() {
  const images = [
    {
      url: `./images/audiophile/HomePage.png`,
      title: "Home Page",
    },
    {
      url: `./images/audiophile/Category.png`,
      title: "Category Page",
    },
    {
      url: `./images/audiophile/ProductPage.png`,
      title: "Product Page",
    },
    {
      url: `./images/audiophile/CartPopup.png`,
      title: "Cart Popup",
    },
    {
      url: `./images/audiophile/checkout.png`,
      title: "Checkout Page",
    },
    {
      url: `./images/audiophile/checkoutComplete.png`,
      title: "Checkout Complete Popup",
    },
    {
      url: `./images/audiophile/HomePageTablet.png`,
      title: "Home Page Tablet",
    },
    {
      url: `./images/audiophile/productTablet.png`,
      title: "Product Page Tablet",
    },
    {
      url: `./images/audiophile/CheckoutTablet.png`,
      title: "Checkout Page Tablet",
    },
  ];

  console.log(images[0]);
  return (
    <div className="websiteContent">
      <h1>Audiophile</h1>
      <div className="websiteContentSection">
        <div className="websiteContentCarousel">
          <ImageCarousel slides={images} fullHeightImage={true} />
        </div>
        <div className="websiteContentUsedTech">
          <h3>Used Tech</h3>
          <ul>
            <li>Vue JS</li>
            <li>Nuxt JS</li>
            <li>Scss</li>
            <li>Pinia (Nuxt Store)</li>
          </ul>
          <a href="https://github.com/JoelStorr/FM-Audiophile-FrontEnd">
            GitHub Repo
          </a>
        </div>
      </div>
      <div className="websiteContentAbout">
        <p>
          Audiophile ist ein mehrseitiges Frontend Projekt, welches als Teil der
          Frontend Mentor Challenge entstanden ist. Hierbei stellt die Frontend
          Mentor Plattform die Designdateien sowie eine Projektübersicht und es
          ist dem Teilnehmer selber überlassen, mit welchen Technologien er
          diese löst. Das Ziel dieser Aufgabe war es, einen mehrseitigen Shop zu
          bauen, der eine einheitliche Designsprache über Desktop, Tablet und
          Smartphone besitzt. Hierbei wurden die Produktinformationen von einem
          JSON File geladen.
        </p>
        <p>
          Für die Umsetzung habe ich mich für ein Nuxt Projekt mit Scss und
          TypeScript in Teilen des Projektes entschieden. Auch hier setze ich
          wieder den Vue nahen Pinia Store ein, um damit ein globales State
          Management System in meiner Seite zu steuern.
        </p>
        <p>
          Die UI ist sowohl für Desktop als auch für Tablets und Smartphones
          ausgelegt. Dank des Nuxt Frameworks unterstütz das Projekt sowohl
          serverseitiges Rendern der Seite als auch nutzerseitiges Rendern.
        </p>
      </div>
    </div>
  );
}
