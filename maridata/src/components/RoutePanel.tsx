import { time } from 'console';
import React, { useEffect, useState } from 'react';
import './RoutenPanel.css';
import {routen_props} from "./../components/Route";
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";
import arrow_up_green from "./../icons/arrow_up_green.svg";
import arrow_down_red from "./../icons/arrow_down_red.svg";
import arrow_grey from "./../icons/arrow_grey.svg";
import eye_closed from "./../icons/eye_closed.svg";
import eye_open from "./../icons/eye_open.svg";
import line_green from "./../icons/line_green.svg";
import line_black from "./../icons/line_black.svg";
import line_purpel from "./../icons/line_purpel.svg";
import line_blue from "./../icons/line_blue.svg";
import { bool } from 'prop-types';
import RoutenPanelList from "./RoutenPanelList";
import { Link, Navigate, useNavigate} from "react-router-dom";

const RoutePanel = (props: routen_props) => {

    //split time in hours and minutes
    const time_array = props.time_driven.split(",")
    const time_driven_hours = time_array[0];
    const time_driven_minutes = time_array[1];

    const time_array_anchor = props.time_anchor.split(",")
    const anchor_hours = time_array_anchor[0];
    const anchor_minutes = time_array_anchor[1];

    //handle which eye (closed, open) is seen
    const [isOpen, setIsOpen] = useState(true);

    const handleEyeAction = () => {
        setIsOpen(!isOpen);
    }

    //passes the route data (props) to the breakdown and detailed comparison site
    const navigate = useNavigate();

    const handleClickAction = () => {
        
        navigate("/breakdown", {state: {props}});
        
    }
  
    const handleClickAction2 = () => {
        
        navigate("/comparison", {state: {props}});
        
    }

    // create hook for route color
    const [color, setColor] = useState("");

    //determine the correct route color
    const determine_route_color = () => {

        //create [key, value] pairs for the color name and icon
        const lines = {"black": line_black, "green": line_green, "blue": line_blue, "purpel": line_purpel}

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
    <div className='routen_panel'>
        <div className='routen_panel_div1'>
            <div className='routen_panel_route_date_and_color'>
                <p>Route from {props.date}</p>
                <img src={color} alt="open eye or closed eye, deping on if the route is visible" />
            </div>
            <div className='routen_panel_hide'>
            <img src={isOpen? eye_open : eye_closed} alt="open eye or closed eye, deping on if the route is visible" onClick={() => handleEyeAction()} />
            </div>
        </div>
        <div className='routen_panel_div2'>
            <div className='routen_panel_div2_grouped'>
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
            </div>
            <div className='routen_panel_arrow'>
                <img src={arrow_grey} alt="a arrow navigating the uzser to the detailed comparison" onClick={() => handleClickAction2()} />
            </div>
        </div>    
    </div>
  )
}

export default RoutePanel