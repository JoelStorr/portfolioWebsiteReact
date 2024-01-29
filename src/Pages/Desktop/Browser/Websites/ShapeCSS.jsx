import React from 'react'
import ImageCarousel from '../../../../Components/ImageCarousel/ImageCarousel';

export default function ShapeCSS() {


    const images = [
      {
        url: `/images/shapecss/shapecss1.png`,
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

    console.log(images[0])
  return (
    <div>
        <ImageCarousel slides={images} file={true} />
    </div>
  )
}
