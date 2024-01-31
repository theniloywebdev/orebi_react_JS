import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`${className} bg-black text-white font-dmsans font-bold text-sm py-4 px-12`}>{text}</button>
  )
}

export default Button