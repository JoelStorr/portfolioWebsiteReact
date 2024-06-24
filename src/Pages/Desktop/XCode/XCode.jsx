import { useState } from "react";
import { Link } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./XCode.css";

let CodeView = {
  arProject: "arProject",
  widgetKit: "widgetKit",
  reactNative: "reactNative",
  flutter: "flutter",
  fastApi: "fastApi",
};

export default function XCode({ width }) {
  let [codeView, setCodeView] = useState(CodeView.fastApi);
  let [sidebar, setSideBar] = useState(true);
  function chooseCodeView() {
    switch (codeView) {
      case CodeView.arProject:
        return <XCodeARView width={width} />;
      case CodeView.widgetKit:
        return <WidgetKit width={width} />;
      case CodeView.reactNative:
        return <ReactNative width={width} />;
      case CodeView.flutter:
        return <Flutter width={width} />;
      case CodeView.fastApi:
        return <FastAPI width={width} />;
    }
  }

  return (
    <>
      {width <= 1025 ? (
        <div className="xcode">
          {sidebar ? (
            <XCodeSideBarLeft
              width={width}
              codeView={codeView}
              setCodeView={setCodeView}
              setSideBar={setSideBar}
              sidebar={sidebar}
            />
          ) : (
            <div className="xcodeMainView">
              <XCodeMainViewHeader
                filename={codeView}
                setSideBar={setSideBar}
                sidebar={sidebar}
                width={width}
              />

              {chooseCodeView()}
            </div>
          )}
        </div>
      ) : (
        <div className="xcode">
          <XCodeSideBarLeft codeView={codeView} setCodeView={setCodeView} />
          <div className="xcodeMainView">
            <XCodeMainViewHeader filename={codeView} />

            {chooseCodeView()}
          </div>
          {/* <div className="xcodeSideView xcodeSideViewRight"> </div> */}
        </div>
      )}
    </>
  );
}

function XCodeARView({ width }) {
  const codeString = `  import ArKit
  import SwiftUI

  struct ARView: View {
    let objectTracker: () -> Experience{"Tracks and Reacts to Images"}

    class Points {
      p1: "Deteckts images within the Envionrment"
      p2: "Places pre definde 3D Object on the Image"
    }


    func useCases () -> Ideas {
      let id1 = "Can be used to make advertisment more interactable"
      let id2 = "Addes new interactive layer to media expirences like Books or Movies" 
      let id3 = "Adds a more emersive feal to exising app"
      let id4 = "Improves Product display"
    }


    var body: some View {

      ARView(
        addTrackingPoints: Points, 
        addIdeas: new useCases()
      )
    }

    print(test)
  }
  `;

  return (
    <div className="xcodeMainEditView">
      {width <= 1025 ? (
        <div className="xcodeCodeView">
          <XCodeCodeElement codeString={codeString} language="swift" />
        </div>
      ) : (
        <>
          <div className="xcodeCodeView">
            <XCodeCodeElement codeString={codeString} language="swift" />
          </div>

          <div className="xcodePreviewView ">Code Preview</div>
        </>
      )}
    </div>
  );
}

function WidgetKit() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Widget Kit View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function ReactNative() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">React Native View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function Flutter({ width }) {
  const codeString = `
  
    import 'package:flutter/material.dart';
    import 'package:flutter_shopware_6_api/helpers/api_helpers.dart';
  
    @override
    Widget build(Buildcontext context){

      return Navigator(
        body: Stack(
          children:[
            Text("DevCoffe war mein erster Schritt in die Welt der Cross Plattform App Entwicklung. Die App nutzt Flutter und Dart, um eine möglichst natürliche App für Android und IOS zu generieren. Für dieses Projekt habe ich mich für ein App Frontend entschieden, das seine Daten von einem Headless Shopware 6 Backend bezieht. Die App besitzt einzelne Seiten für die Startseite des Shops, eine Kategorienseite sowie eine Produktseite. Ebenfalls sind Seiten für die Produktsuche als auch den Kaufprozess vorhanden."),
            
            Text("Das Ziel dieses Projektes war es, mich mit der Flutter Entwicklungsumgebung bekannt zu machen und mich tiefer mit APIs für die Entwicklung von Cross Plattform Apps zu befassen. Ebenfalls habe ich mich mit der Einarbeitung in bestehende APIs (Shopware 6 API) beschäftigt und mich, damit auseinandergesetzt wie ich diese Daten in mein Projekt einpflegen kann."),

            Text("In diesem Fall habe ich mich dazu entschlossen ein eigenes Design zu wählen, welches der App ihr eigenes Gefühl geben soll, anstelle der vom System bereitgestellten UI Elemente.")
          ];
        );
      );
    }
  `;

  return (
    <div className="xcodeMainEditView">
      {width <= 1025 ? (
        <>
          <div className="xcodeCodeView">
            <XCodeCodeElement codeString={codeString} language="dart" />
          </div>
          <div className="xcodePreviewView">
            <img src="images/devCoffeeDesign/screen-shots.png"></img>
          </div>
        </>
      ) : (
        <>
          <div className="xcodeCodeView">
            <XCodeCodeElement codeString={codeString} language="dart" />
          </div>

          <div className="xcodePreviewView ">
            <img src="images/devCoffeeDesign/screen-shots.png"></img>
          </div>
        </>
      )}
    </div>
  );
}

function FastAPI({ width }) {
  const codeString = `from FastAPI import Router

def get_project_info ():
      t1 = "Fast API ist ein serverseitiges Framework um Python basierte Backendes zu entwickeln."
      t2 = "Bei diesem Beispiel handelt es sich um die Codebasis für das Frontend Mentor Projekt Linkshare."
      t3 = "Hierbei werden die Datenbankinformationen via SQLAlchemy generiert."
      t4 = "Das Projekt selbst nutzt eine SQLite Database und einen eigenen Ordner zum Sichern der Nutzerbilder."
      return t1 + t2 + t3 + t4

def more_detail():
    t1 = "Das Projekt ist in die verschiedenen Ruten eingeteilt, die dem Nutzer als API Endpoints zur Verfügung stehen. "
    t2 =  "Hierbei werden die privaten Ruten durch die Auswertung eines JSON Web Tokens gesichert. Die meisten Endpoints schreiben oder lesen die einzelnen Nutzerinformationen aus der Datenbank und geben diese als JSON wieder zurück an den Nutzer."
    t3 = "Lediglich der Upload Endpoint konvertiert das Bild in eine Base64 Datei, die im Bilderverzeichnis auf dem Server gespeichert wird. Diese Datei kann dann direkt als Base64 String via JSON zurück an den Nutzer übermittelt werden."
    return t1 + t2 + t3


get_project_info()
more_detail()
  `;

  return (
    <div className="xcodeMainEditView">
      {width <= 1025 ? (
        <div className="xcodeCodeView">
          <XCodeCodeElement codeString={codeString} language="python" />
        </div>
      ) : (
        <>
          <div className="xcodeCodeView">
            <XCodeCodeElement codeString={codeString} language="python" />
          </div>

          <div className="xcodePreviewView"></div>
        </>
      )}
    </div>
  );
}

function XCodeMainViewHeader({ filename, sidebar, setSideBar, width }) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function fileExt() {
    switch (filename) {
      case CodeView.flutter:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.dart
          </h2>
        );

      case CodeView.reactNative:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.jsx
          </h2>
        );

      case CodeView.fastApi:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.py
          </h2>
        );

      default:
        return (
          <h2 className="xcodeHeaderFileName">
            {capitalizeFirstLetter(filename)}.swift
          </h2>
        );
    }
  }

  function projecktLink() {
    switch (filename) {
      case CodeView.fastApi:
        return "https://github.com/JoelStorr/FEM-LinkSharing-App-BackEnd";
      case CodeView.flutter:
        return "https://github.com/JoelStorr/flutter_shopware_6_api";
    }
  }

  return (
    <div className="xcodeMainViewHeader">
      {width <= 1025 ? (
        <button
          className="xcodeMainViewBackButton"
          onClick={() => setSideBar(!sidebar)}
        >
          <img src="/images/icons/chevron-left-solid.svg" />
          <p>Projects</p>
        </button>
      ) : (
        <></>
      )}

      {fileExt()}

      {width <= 1025 ? (
        <></>
      ) : (
        <div className="fielNameField">
          <p className="eIcon">E</p>
          <p>{capitalizeFirstLetter(filename) + " >"} iPhone Simulator 15</p>
        </div>
      )}

      <a href={projecktLink()} className="ghButon" target="blank">
        <img src="/images/icons/cloud-solid.svg" />
        GitHub
      </a>

      <img src="/images/icons/plus-solid.svg" />
    </div>
  );
}

function XCodeSideBarLeft({
  width,
  codeView,
  setCodeView,
  setSideBar = () => {},
  sidebar,
}) {
  let [subFolderOne, setSubFolderOne] = useState(false);
  let [subFolderTwo, setSubFolderTwo] = useState(false);
  let [subFolderThree, setSubFolderThree] = useState(false);
  let [subFolderFour, setSubFolderFour] = useState(true);

  function changeCodeView(codeView) {
    setCodeView(codeView);

    setSideBar(!sidebar);
  }

  return (
    <div className="xcodeSideView">
      <div className="xcodeSideBarHeader">
        {width <= 825 ? (

          <Link to="/" className="homeLink">
          <button>
            <img src="/images/icons/chevron-left-solid.svg" />
            <p>Home</p>

          </button>
          </Link>
        ) : (
          <></>
        )}
        <img src="/images/icons/play-solid.svg" />
      </div>
      <hr />
      <div className="xcodeSidebarIconRow">
        <img src="/images/icons/folder-regular.svg" />
        <img src="/images/icons/bookmark-regular.svg" />
        <img src="/images/icons/triangle-exclamation-solid.svg" />
        <img src="/images/icons/square-check-regular.svg" />
        <img src="/images/icons/magnifying-glass-solid.svg" />
      </div>
      <hr />
      <div>
        <ul className="xcodeFolderStructure">
          <li className="xcodeSubFiels">
            {/* NOTE: Ar View Folder */}
            {/* <div
              className="codefolder"
              onClick={() => setSubFolderOne(!subFolderOne)}
            >
              <img
                src={
                  subFolderOne
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              AR View
            </div> */}
            {/* NOTE: Sub Fiels */}
            <ul className={subFolderOne ? " " : "xcodeSubFielsHider"}>
              {/* <li
                onClick={() => changeCodeView(CodeView.arProject)}
                className={
                  codeView == CodeView.arProject
                    ? "codefile codefileActive"
                    : "codefile"
                }
              >
                <img
                  src={
                    codeView == CodeView.arProject
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                main.swift
              </li>
              <li
                onClick={() => changeCodeView(CodeView.widgetKit)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.widgetKit
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                view.swift
              </li> */}
            </ul>
          </li>
          {/* NOTE: Widget Kit Folder */}
          <li className="xcodeSubFiels">
            {/* <div
              onClick={() => setSubFolderTwo(!subFolderTwo)}
              className="codefolder"
            >
              <img
                src={
                  subFolderTwo
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Widget Kit
            </div> */}
            {/* NOTE: Sub Files */}
            {/* <ul className={subFolderTwo ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.arProject)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.arProject
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                main.swift
              </li>
              <li
                onClick={() => changeCodeView(CodeView.widgetKit)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.widgetKit
                      ? "/images/icons/swift-color.svg"
                      : "/images/icons/swift.svg"
                  }
                  className="codefileIcon"
                />
                view.swift
              </li>
            </ul> */}
          </li>
          {/* NOTE: Cross Plattform */}
          <li className="xcodeSubFiels">
            <div
              onClick={() => setSubFolderThree(!subFolderThree)}
              className="codefolder"
            >
              <img
                src={
                  subFolderThree
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Cross Plattform
            </div>
            {/* NOTE: Sub Files */}
            <ul className={subFolderThree ? " " : "xcodeSubFielsHider"}>
              {/* <li
                onClick={() => changeCodeView(CodeView.reactNative)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.reactNative
                      ? "/images/icons/react-color.svg"
                      : "/images/icons/react.svg"
                  }
                  className="codefileIcon"
                />
                react-native.jsx
              </li> */}
              <li
                onClick={() => changeCodeView(CodeView.flutter)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.flutter
                      ? "/images/icons/android-color.svg"
                      : "/images/icons/android.svg"
                  }
                  className="codefileIcon"
                />
                flutter-dart.dart
              </li>
            </ul>
          </li>
          {/* NOTE: Backend */}
          <li className="xcodeSubFiels">
            <div
              onClick={() => setSubFolderFour(!subFolderFour)}
              className="codefolder"
            >
              <img
                src={
                  subFolderFour
                    ? "/images/icons/folder-open-regular.svg"
                    : "/images/icons/folder-regular.svg"
                }
                className="codefileIcon"
              />
              Back End
            </div>
            {/* NOTE: Sub Files */}
            <ul className={subFolderFour ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => changeCodeView(CodeView.fastApi)}
                className="codefile"
              >
                <img
                  src={
                    codeView == CodeView.fastApi
                      ? "/images/icons/python-color.svg"
                      : "/images/icons/python.svg"
                  }
                  className="codefileIcon"
                />
                main.py
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function XCodeCodeElement({ codeString, language }) {
  let editorCustomStyle = {
    padding: "25px",
    fontSize: "1.5rem",
    fontFamily: "Cutive-Mono",
    overflowX: "hidden",
  };

  return (
    <div className="code">
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={editorCustomStyle}
        wrapLongLines={true}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
