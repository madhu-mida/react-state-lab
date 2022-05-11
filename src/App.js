// IMPORT useState
import { useState } from 'react';
import React from 'react';
import './styles.css';
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
import imagesArr from "./imageData"
import TrafficLight from './TrafficLight';
import MatchingCards from './MatchingCards';

export default function App() {
  // USE useState TO CREATE  [bigImage, setBigImage] 
  const [bigImage, setBigImage] = useState(
    imagesArr[0].img)
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (imgUrl) => {
    setBigImage(imgUrl);
  }
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL



  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {
            imagesArr.map((element, index) => {
              return (
                <img src={element.img} className={`thumb ${bigImage && bigImage === element.img ? 'thumb-border' : ''}`} id={`bigimage-${index}`} alt={element.alt}
                  onClick={() => { handleClick(element.img) }} />
              );
            })
          }
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        {<img src={bigImage} id="bigimage" alt='bigImage' />}
      </div>

      <TrafficLight />
      <MatchingCards />
    </div>
  );
}
