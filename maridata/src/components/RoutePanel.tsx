import { time } from 'console';
import React from 'react';
import './RoutenPanel.css';
import {routen_props} from "./../components/Route";


const RoutePanel = (props: routen_props) => {
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
                    <p>Blatt</p>
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
                    <p>Uhr</p>
                </div>
                <div className='routen_panel_time'>
                    <p>Time:</p>
                    <div className='routen_panel_eco_rating_value'>
                        <p>{props.time_anchor + props.time_driven}</p>
                        <p>+38 min</p>
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