import React from 'react'

interface TopbarProps {
  name: string
}

/*
Button Icon wird noch nicht angezeigt.
Button Link zur Map fehlt noch.
*/

const Topbar = ({name}:TopbarProps) => {
  return (
    <div className='h-[60px] flex justify-between items-center p-5 bg-gray0'>
      <div className='text-xl font-bold text-text0'>{name}</div>
      <button>
        <img src="../icons/close-button.svg"/>
      </button>
    </div>
  )
}

export default Topbar