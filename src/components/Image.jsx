import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({src,alt,className}) => {
  return (
   
   <Link>
     <img src={src} alt={alt} className={`${className}`}/>
   </Link>
  )
}

export default Image