import React from 'react'
import Radar from '../components/Radar'
import Topbar from '../components/Topbar'

const Breakdown = () => {
  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Breakdown"}/>
      <div className='flex'>
        <div>
          <div>Back-Button</div>
          <Radar/>
        </div>
        <div>
          <div>picked Routes</div>
          <div>other Routes</div>
        </div>
      </div>
    </div>
  )
}

export default Breakdown