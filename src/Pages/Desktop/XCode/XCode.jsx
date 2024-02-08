import { useState } from "react";
import "./XCode.css";


let CodeView = {
  arProject: 'arProject',
  widgetKit: 'widgetKit',
  fastApi: 'fastApi'
}


export default function XCode() {

    let [codeView, setCodeView] = useState(CodeView.arProject)
    let [subFolderOne, setSubFolderOne] = useState(true)
    let [subFolderTwo, setSubFolderTwo] = useState(false);
    let [subFolderThree, setSubFolderThree] = useState(false);


    function chooseCodeView(){
      switch(codeView){
        case CodeView.arProject:
          return <XCodeARView />
        case CodeView.widgetKit:
          return <WidgetKit />
        case CodeView.fastApi:
          return <FastAPI />
      }
    }


  return (
    <div className="xcode">
      <div className="xcodeSideView">
        <div>Play BTN</div>
        <div>Icon Row</div>
        <div>
          <ul className="xcodeFolderStructure">
            <li className="xcodeSubFiels">
              <div
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
              </div>
              <ul className={subFolderOne ? " " : "xcodeSubFielsHider"}>
                <li
                  onClick={() => setCodeView(CodeView.arProject)}
                  className={
                    codeView == CodeView.arProject ? "codefile codefileActive" : "codefile"
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
                  onClick={() => setCodeView(CodeView.widgetKit)}
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
              </ul>
            </li>
            <li className="xcodeSubFiels">
              <p onClick={() => setSubFolderTwo(!subFolderTwo)}>Widget Kit</p>
              <ul className={subFolderTwo ? " " : "xcodeSubFielsHider"}>
                <li
                  onClick={() => setCodeView(CodeView.arProject)}
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
                  onClick={() => setCodeView(CodeView.widgetKit)}
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
              </ul>
            </li>
            <li className="xcodeSubFiels">
              <p onClick={() => setSubFolderThree(!subFolderThree)}>Back End</p>
              <ul className={subFolderThree ? " " : "xcodeSubFielsHider"}>
                <li
                  onClick={() => setCodeView(CodeView.fastApi)}
                  className="codefile"
                >
                  <img
                    src={
                      codeView == CodeView.widgetKit
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
      <div className="xcodeMainView">
        <XCodeMainViewHeader filename={codeView} />

        {chooseCodeView()}
      </div>
      <div className="xcodeSideView xcodeSideViewRight"> </div>
    </div>
  );
}



function XCodeARView(){
  return (

    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Ar View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function WidgetKit(){
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Widget Kit View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function FastAPI() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Widget Kit View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}


function XCodeMainViewHeader({filename}){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <div className="xcodeMainViewHeader">
      <h2>{capitalizeFirstLetter(filename)}.swift</h2>
      <div>
          <p className="eIcon">E</p>
          <p>
          {capitalizeFirstLetter(filename) + " >"}  iPhone Simulator 15
        </p>
      </div>
    </div>
  );
}