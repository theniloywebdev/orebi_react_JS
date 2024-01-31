import React from 'react'
import {Link} from 'react-router-dom'

const List = ({text,href,className}) => {
  return (
 <Link to={href}>
 <li className={`font-dmsan text-sm font-normal text-secondaryColor mx-2  duration-300 ${className}`}>{text}</li>
 </Link>
  )
}

export default List