import React, { useEffect, useState } from 'react'
import './CurrentRoute.css';
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";
import {routen_props} from "./../components/Route";
import line_green from "./../icons/line_green.svg";
import line_black from "./../icons/line_black.svg";
import line_purple from "./../icons/line_purple.svg";
import line_blue from "./../icons/line_blue.svg";

const CurrentRoute = (props: routen_props) => {

     //split time in hours and minutes
     const time_array = props.time_driven.split(",")
     const time_driven_hours = time_array[0];
     const time_driven_minutes = time_array[1];
 
     const time_array_anchor = props.time_anchor.split(",")
     const anchor_hours = time_array_anchor[0];
     const anchor_minutes = time_array_anchor[1];

     // create hook for route color
    const [color, setColor] = useState("");

    //determine the correct route color
    const determine_route_color = () => {

        //create [key, value] pairs for the color name and icon
        const lines = {"black": line_black, "green": line_green, "blue": line_blue, "purple": line_purple}

        //loop the pairs and when the prop route color equals the key color then set the hook to the value (the icon object)
        for (const [key, value] of Object.entries(lines)) {
            if(key === props.route_color) setColor(value);
          }
    }

    //after site reload, determine the route color
    useEffect(() => { 
        determine_route_color();
      });
      
    return (
        <div className='current_route'>
            <div className='current_route_name_and_line'>
                <div>current Route</div>
                <img src={color} alt="open eye or closed eye, deping on if the route is visible" className='current_route_line'/>
            </div>
            <div className='current_route_eco_and_time'>
                <div className='current_route_eco'>
                    <img src={ecoscore_logo} alt="eco score logo" />
                    <p>{props.eco_rating}</p>
                </div>
                <div className='current_route_divider'>

                </div>
                <div className='current_route_time'>
                    <img src={time_logo} alt="time logo" />
                    <p id='time_text1'>{parseInt(time_driven_hours) + parseInt(anchor_hours)}h</p>
                    <p>{parseInt(time_driven_minutes) + parseInt(anchor_minutes)}min</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentRoute