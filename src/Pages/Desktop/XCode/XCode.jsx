import { useState } from "react";
import "./XCode.css";


let CodeView = {
  arProject: 'arProject',
  widgetKit: 'widgetKit'
}


export default function XCode() {

    let [codeView, setCodeView] = useState(CodeView.arProject)
    let [subFolderOne, setSubFolderOne] = useState(true)
    let [subFolderTwo, setSubFolderTwo] = useState(false);


    function chooseCodeView(){
      switch(codeView){
        case CodeView.arProject:
          return <XCodeARView />
        case CodeView.widgetKit:
          return <WidgetKit />
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
              <p onClick={() => setSubFolderOne(!subFolderOne)}>AR View</p>
              <ul className={subFolderOne ? " " : "xcodeSubFielsHider"}>
                <li onClick={() => setCodeView(CodeView.arProject)}>
                  main.swift
                </li>
                <li onClick={() => setCodeView(CodeView.widgetKit)}>
                  view.swift
                </li>
              </ul>
            </li>
            <li className="xcodeSubFiels">
              <p onClick={() => setSubFolderTwo(!subFolderTwo)}>
                Widget Kit
              </p>
              <ul className={subFolderTwo ? " " : "xcodeSubFielsHider"}>
                <li onClick={() => setCodeView(CodeView.arProject)}>
                  main.swift
                </li>
                <li onClick={() => setCodeView(CodeView.widgetKit)}>
                  view.swift
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


function XCodeMainViewHeader({filename}){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <div className="xcodeMainViewHeader">
      <h2>{capitalizeFirstLetter(filename)}.swift</h2>
      <div>
        <p>
          <span>E</span>
          {capitalizeFirstLetter(filename) + " >"}  iPhone Simulator 15
        </p>
      </div>
    </div>
  );
}