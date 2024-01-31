import React from 'react'

const Content = ({text,className}) => {
  return (
    <div className={`font-dmsans font-normal text-contentpColor text-base ${className}`}>{text}</div>
  )
}

export default Content