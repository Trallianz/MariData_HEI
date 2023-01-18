import { time } from 'console';
import React from 'react';
import './RoutenPanel.css';
import {routen_props} from "./../components/Route";
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";

const RoutePanel = (props: routen_props) => {

    //split time in hours and minutes
    const time_array = props.time_driven.split(",")
    const time_driven_hours = time_array[0];
    const time_driven_minutes = time_array[1];

    const time_array_anchor = props.time_anchor.split(",")
    const anchor_hours = time_array_anchor[0];
    const anchor_minutes = time_array_anchor[1];

  return (
    <div className='routen_panel'>
        <div className='routen_panel_div1'>
            <div className='routen_panel_route_date_and_color'>
                <p>Route from {props.date}</p>
                <p>-------------</p>
            </div>
            <div className='routen_panel_hide'>
                <p> oo </p>
            </div>
        </div>
        <div className='routen_panel_div2'>
            <div className='routen_panel_div2_1'>
                <div className='routen_panel_eco_image'>
                    <img src={ecoscore_logo} alt="Leaf symbolizing the eco score" />
                </div>
                <div className='routen_panel_eco_rating'>
                    <p>Eco Rating:</p>
                    <div className='routen_panel_eco_rating_value'>
                        <p>{props.eco_rating}</p>
                        <p>+1,5</p>
                    </div>
                </div>
            </div>
            <div className='routen_panel_div2_2'>
                <div className='routen_panel_time_image'>
                <img src={time_logo} alt="clock symbolizing the time of the ship" />
                </div>
                <div className='routen_panel_time'>
                    <p>Time:</p>
                    <div className='routen_panel_eco_rating_value'>
                        <p>{parseInt(time_driven_hours) + parseInt(anchor_hours)}h </p>
                        <p>{parseInt(time_driven_minutes) + parseInt(anchor_minutes)}min </p>
                        <p>+38min</p>
                    </div>
                </div>
            </div>
            <div className='routen_panel_arrow'>
                <p>ARROW</p>
            </div>
        </div>    
    </div>
  )
}

export default RoutePanel