import React, { useState } from 'react'
import "./Browser.css"
import BrowserHeader from './BrowserHeader/BrowserHeader'

export default function Browser() {


    const BrowserSite = {
        ShapeCSS: "ShapeCss",
        Portfolio: "Portfolio"
    }

    const [activeTab, setActiveTab] = useState(BrowserSite.ShapeCSS)

    function displayWebPage(){
        switch(activeTab){
            case BrowserSite.ShapeCSS:
                return <p>Shape CSS</p>
            case BrowserSite.Portfolio:
                return <p>Portfolio</p>
        }
    }


  return (
    <div className='browser'>
       <BrowserHeader 
            activeBrowserTab={activeTab} 
            changeActiveTab={setActiveTab} 
            browserSite={BrowserSite} 
        />
        
    </div>
  )
}
