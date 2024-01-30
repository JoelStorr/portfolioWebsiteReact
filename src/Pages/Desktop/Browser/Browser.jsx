import React, { useState } from 'react'
import "./Browser.css"
import BrowserHeader from './BrowserHeader/BrowserHeader'
import ShapeCSS from './Websites/ShapeCSS'
import Portfolio from './Websites/Portfolio'

export default function Browser() {


    const BrowserSite = {
        ShapeCSS: "ShapeCss",
        Portfolio: "Portfolio"
    }

    const [activeTab, setActiveTab] = useState(BrowserSite.ShapeCSS)

    function displayWebPage(){
        switch(activeTab){
            case BrowserSite.ShapeCSS:
                return <ShapeCSS />
            case BrowserSite.Portfolio:
                return <Portfolio />
        }
    }


  return (
    <div className='browser'>
       <BrowserHeader 
            activeBrowserTab={activeTab} 
            changeActiveTab={setActiveTab} 
            browserSite={BrowserSite} 
        />
        <div className='browserContent'>
            {displayWebPage()}
        </div>
    </div>
  )
}
