import React, { useState } from "react";

export default function ImageCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("")
  const [bigImage, setBigImage] = useState(false)

  const sliderStyles = {
    height: "80%",
    position: "relative",
    
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
   
    margin: "10px"
  };

  const slideStylesNext = {
    backgroundImage: `url(${slides[imageIndex(currentIndex + 1)].url})`,
  };
  const slideStylesPrev = {
    backgroundImage: `url(${slides[imageIndex(currentIndex - 1)].url})`,
  };

  const slideStylesCurr = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "-32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "-32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  
  const leftArrowStyleFull = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "50px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyleFull = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "150px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };


  const dotContainerStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
  }

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px"
  }

  const fullScaleImage = {
    position: "fixed",
    zIndex: "10",
    width: "100vw",
    height: "100vh",
    top: "0vh",
    left: "0vw",
    backgroundColor: "rgba(0,0,0,0.4)",
  };

  const imageHider = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    top: "0",
    left:"0",
    opacity: 0.5,
    zIndex: -1,
  }

  function imageIndex(index){

    if (index === -1){
        return slides.length -1
    }

    if (index === slides.length){
        return 0
    }

    return index
  }


  function goToNext(){
     const isLastSlide = currentIndex === slides.length - 1 ;
     const newIndex = isLastSlide ? 0 : currentIndex + 1;

     setCurrentIndex(newIndex);
  }
  function goToPrev(){

    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length -1: currentIndex -1;

    setCurrentIndex(newIndex)
  }

  function clickeImage(nextImg){
    setBigImage(true)
    if(nextImg){

      if(currentIndex + 1 > slides.length - 1){
        setSelectedImage(slides[0].url);
        return
      }
      setSelectedImage(slides[currentIndex + 1].url);

    } else {
      setSelectedImage(slides[currentIndex].url);
    }

    console.log(selectedImage)
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyle} onClick={goToPrev}>
        &#10094;
      </div>
      <div style={rightArrowStyle} onClick={goToNext}>
        &#10095;
      </div>
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* <div style={{...slideStyles, ...slideStylesPrev}}></div> */}
        <div
          style={{ ...slideStyles, ...slideStylesCurr }}
          onClick={() => clickeImage()}
        ></div>
        <div
          style={{ ...slideStyles, ...slideStylesNext }}
          onClick={() => clickeImage(true)}
        ></div>
      </div>
      <div style={dotContainerStyles}>
        {slides.map((slide, index) => {
          if (index == currentIndex) {
            return (
              <div
                key={index}
                style={dotStyle}
                onClick={() => setCurrentIndex(index)}
              >
                &#10687;
              </div>
            );
          } else {
            return (
              <div
                key={index}
                style={dotStyle}
                onClick={() => setCurrentIndex(index)}
              >
                &#9702;
              </div>
            );
          }
        })}
      </div>
      {bigImage ? (
        <div style={fullScaleImage}>
          <div style={leftArrowStyleFull} onClick={()=>{clickeImage(imageIndex(currentIndex - 1)); setCurrentIndex(imageIndex(currentIndex - 1))}}>
            &#10094;
          </div>
          <div style={rightArrowStyleFull} onClick={()=>{clickeImage(imageIndex(currentIndex + 1)); setCurrentIndex(imageIndex(currentIndex + 1))}}>
            &#10095;
          </div>

          <img
            src={selectedImage}
            style={{ width: "80%", height: "80%", objectFit: "contain", top: "10%", position:"relative", left:"6%"}}
            onClick={() => setBigImage(false)}
          ></img>
          <div style={imageHider} onClick={() => setBigImage(false)}>
            Hello
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
 