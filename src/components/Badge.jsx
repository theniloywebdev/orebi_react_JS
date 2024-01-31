import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className={`${className} font-dmsans font-bold text-sm text-white bg-primaryColor py-3 px-8`}>{text}</div>
  )
}

export default Badge