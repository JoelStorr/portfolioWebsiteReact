import React from 'react'
import "./XCode.css"

export default function XCode() {
  return (
    <div className='xcode'>
      
      <div className='xcodeSideView'>Side View Left</div>
      <div className='xcodeMainView'>
        <div className='xcodeCodeView'>Code View</div>
        <div className='xcodePreviewView'>Code Preview</div>
      </div>
      <div className='xcodeSideView'>Side View Right</div>
    
    </div>
  )
}
