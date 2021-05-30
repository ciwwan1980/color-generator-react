import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
  
   return <article className="" style={{backgroundColor:`rgb(${bcg})` }}>

  <p>{hex}</p>
  <p className="percent-value">{weight}%</p>
  </article>
}

export default SingleColor
