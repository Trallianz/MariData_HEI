import React from 'react'
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";
import {routen_props} from "./../components/Route";

const CurrentRoute = (props: routen_props) => {

     //split time in hours and minutes
     const time_array = props.time_driven.split(",")
     const time_driven_hours = time_array[0];
     const time_driven_minutes = time_array[1];
 
     const time_array_anchor = props.time_anchor.split(",")
     const anchor_hours = time_array_anchor[0];
     const anchor_minutes = time_array_anchor[1];

    return (
        <div className='current_route'>
            <div className='current_route_name_and_line'>
                <div>current Route</div>
                <div>----------</div>
            </div>
            <div className='current_route_eco_and_time'>
                <div className='current_route_eco'>
                    <img src={ecoscore_logo} alt="eco score logo" />
                    <p>{props.eco_rating}</p>
                </div>
                <div className='current_route_time'>
                    <img src={time_logo} alt="time logo" />
                    <p>{parseInt(time_driven_hours) + parseInt(anchor_hours)}h</p>
                    <p>{parseInt(time_driven_minutes) + parseInt(anchor_minutes)}min</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentRoute