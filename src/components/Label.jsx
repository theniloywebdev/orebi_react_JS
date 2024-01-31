import React from 'react'
 
const Label = ({inputLabel,className}) => {
  return (
    <label className={`${className} font-dmsans font-bold  text-base text-primaryColor block`}>{inputLabel}</label>
  )
}

export default Label