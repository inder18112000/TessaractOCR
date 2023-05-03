import React from 'react'
import image from '../dump/Tesseract.png'

function Title({isActive}) {
  
  return (
    <div className="text-center">
      <h1 className="title text-center mb-5">
        Tesseract Text Recognizer
      </h1>
      <img src={image} className={"App-logo"} alt="icon" style={isActive?{height:"300px",width:"300px",margin:50 }:{height:"150px",width:"150px",margin:20}}/>
    </div>
  )
}

export default Title;