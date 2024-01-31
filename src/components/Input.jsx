import React from 'react'

const Input = ({inputType,inputPh,inputName,inputValue,className}) => {
  return (
  
     <input  type={inputType} placeholder={inputPh} name={inputName} value={inputValue} className={`${className} border-b-2 border-infobColor placeholder:text-secondaryColor placeholder:font-dmsans placeholder:text-sm placeholder:font-normal focus:outline-none `}/>
  
  )
}

export default Input