import { useState } from "react";
import "./XCode.css";


let CodeView = {
  arProject: 'arProject',
  widgetKit: 'widgetKit',
  reactNative: 'reactNative',
  flutter: 'flutter',
  fastApi: 'fastApi'
}


export default function XCode() {

    let [codeView, setCodeView] = useState(CodeView.arProject)
    


    function chooseCodeView(){
      switch(codeView){
        case CodeView.arProject:
          return <XCodeARView />
        case CodeView.widgetKit:
          return <WidgetKit />
        case CodeView.reactNative:
          return <ReactNative />
        case CodeView.flutter:
          return <Flutter />
        case CodeView.fastApi:
          return <FastAPI />
      }
    }


  return (
    <div className="xcode">
      <XCodeSideBarLeft codeView={codeView} setCodeView={setCodeView}/>
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

function ReactNative() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">React Native View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}

function Flutter() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Flutter View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}


function FastAPI() {
  return (
    <div className="xcodeMainEditView">
      <div className="xcodeCodeView">Fast API View</div>
      <div className="xcodePreviewView ">Code Preview</div>
    </div>
  );
}


function XCodeMainViewHeader({filename}){

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  function fileExt(){
    switch(filename){
      case CodeView.flutter:
        return <h2>{capitalizeFirstLetter(filename)}.dart</h2>;

      case CodeView.reactNative:
        return <h2>{capitalizeFirstLetter(filename)}.jsx</h2>;

      case CodeView.fastApi:
        return <h2>{capitalizeFirstLetter(filename)}.py</h2>;
      
      default:
        return <h2>{capitalizeFirstLetter(filename)}.swift</h2>;
    }
  }


  return (
    <div className="xcodeMainViewHeader">
      {fileExt()}
      <div>
        <p className="eIcon">E</p>
        <p>{capitalizeFirstLetter(filename) + " >"} iPhone Simulator 15</p>
      </div>
      <img src="/images/icons/cloud-solid.svg" />
      <img src="/images/icons/plus-solid.svg" />
    </div>
  );
}

function XCodeSideBarLeft({codeView, setCodeView}){
  let [subFolderOne, setSubFolderOne] = useState(true);
  let [subFolderTwo, setSubFolderTwo] = useState(false);
  let [subFolderThree, setSubFolderThree] = useState(false);
  let [subFolderFour, setSubFolderFour] = useState(false);


  return (
    <div className="xcodeSideView">
      <div className="xcodeSideBarHeader">
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
            {/* NOTE: Sub Fiels */}
            <ul className={subFolderOne ? " " : "xcodeSubFielsHider"}>
              <li
                onClick={() => setCodeView(CodeView.arProject)}
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
          {/* NOTE: Widget Kit Folder */}
          <li className="xcodeSubFiels">
            <div
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
            </div>
            {/* NOTE: Sub Files */}
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
              <li
                onClick={() => setCodeView(CodeView.reactNative)}
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
              </li>
              <li
                onClick={() => setCodeView(CodeView.flutter)}
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
                onClick={() => setCodeView(CodeView.fastApi)}
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