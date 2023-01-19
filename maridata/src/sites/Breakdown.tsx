import React from 'react'
import Radar from '../components/Radar'
import Topbar from '../components/Topbar'
import { useNavigate } from "react-router-dom";
import PickedRoutes from '../components/PickedRoutes';

const Breakdown = () => {

  const navigate = useNavigate();

  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Breakdown"} />
      <div className='flex justify-between p-5'>
        <div>
          <button onClick={() => navigate("/comparison")}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[50px]">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button >
          <Radar />
        </div>
        <div>
          <PickedRoutes date={"01.02.03"} eco={9.9} time={"13h 37min"} color={"#fff"} currentRoute={true}/>
          <div>other Routes</div>
        </div>
      </div>
    </div>
  )
}

export default Breakdown