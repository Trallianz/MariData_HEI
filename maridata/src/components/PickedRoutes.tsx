import React from 'react'
import Leaf from "./../icons/Leaf.svg"
import Time from "./../icons/Time.svg"

export interface dummy {
    date: string;
    eco: number;
    time: string;
    color: string;
    currentRoute: boolean;
}

function singlePickedRoute({ date, eco, time, color, currentRoute }: dummy) {

    return (
        <div className='flex items-center'>
            <div className='w-4 h-4 bg-black' />
            <div>{currentRoute ? "current route" : date}</div>
            <img src={Leaf} />
            <div>{eco}</div>
            <img src={Time} />
            <div>{time}</div>
            {/* Hier müsste dann  */}
            <button >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[30px] fill-text0">
                    <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                </svg>
            </button>

        </div>
    )
}





const PickedRoutes = ({ date, eco, time, color, currentRoute }: dummy) => {
    return (
        <div className='w-[400px] bg-gray0'>
            Picked routes for comparison
            {singlePickedRoute({ date, eco, time, color, currentRoute })}
        </div>
    )
}

export default PickedRoutes