import React from 'react'

interface ButtonProps {
  label: string
}

const StandardButton = ({ label }: ButtonProps) => {
  return (
    <button className='h-[100px] w-[250px] bg-gray2 rounded-xl flex items-center text-center text-xl font-bold text-white'>{label}</button>
  )
}

export default StandardButton