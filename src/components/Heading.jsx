import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({text,className}) => {
  return (
   
     <h1 className={`font-dmsans font-bold text-primaryColor text-39 ${className}`}>{text}</h1>
   
  )
}

export default Heading