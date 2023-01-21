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

interface route_colors{
    colorBool: any
    setColorBool: any
}

const RoutePanel = (props: (routen_props & route_colors)) => {

    //split time in hours and minutes
    const time_array = props.time_driven.split(",")
    const time_driven_hours = time_array[0];
    const time_driven_minutes = time_array[1];

    const time_array_anchor = props.time_anchor.split(",")
    const anchor_hours = time_array_anchor[0];
    const anchor_minutes = time_array_anchor[1];

    //handle which eye (closed, open) is seen
    const [isOpen, setIsOpen] = useState(true);

    // function that is called when clicked on the eye-icon
    const handleEyeAction = () => {
        setIsOpen(!isOpen);
        setColorBoolFunction();
    
    }

    //assign the different colors to indexes of the array inside the useState-hook so the according route is hidden when the eye-icon is clicked
    const setColorBoolFunction = () => {
        if(props.route_color === "black"){
            props.setColorBool([!props.colorBool[0], props.colorBool[1], props.colorBool[2], props.colorBool[3]]);
        } else if (props.route_color === "green") {
            props.setColorBool([props.colorBool[0], !props.colorBool[1], props.colorBool[2], props.colorBool[3]]);
        } else if (props.route_color === "blue") {
            props.setColorBool([props.colorBool[0], props.colorBool[1], !props.colorBool[2], props.colorBool[3]]);
        } else if (props.route_color === "purpel") {
            props.setColorBool([props.colorBool[0], props.colorBool[1], props.colorBool[2], !props.colorBool[3]]);
        }   
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
    const [colorname, setColorName] = useState("");

    //determine the correct route color
    const determine_route_color = () => {

        //create [key, value] pairs for the color name and icon
        const lines = {"black": line_black, "green": line_green, "blue": line_blue, "purpel": line_purpel}

        //loop the pairs and when the prop route color equals the key color then set the hook to the value (the icon object)
        for (const [key, value] of Object.entries(lines)) {
            if(key === props.route_color) {setColor(value)};
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
                            <p className='eco_rating'>{props.eco_rating}</p>
                            <p className='eco_difference'>+1,5</p>
                        </div>
                    </div>
                </div>
                <div className='routen_panel_div2_2'>
                    <div className='routen_panel_time_image'>
                        <img src={time_logo} alt="clock symbolizing the time of the ship"  id='time_pic'/>
                    </div>
                    <div className='routen_panel_time'>
                        <p>Time:</p>
                        <div className='routen_panel_eco_rating_value'>
                            <p className='time'>{parseInt(time_driven_hours) + parseInt(anchor_hours)}h</p>
                            <p className='time'>{parseInt(time_driven_minutes) + parseInt(anchor_minutes)}min</p>
                            <p className='time_difference'>+38min</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='routen_divider'>

            </div>
            <div className='routen_panel_arrow'>
                <img src={arrow_grey} alt="a arrow navigating the uzser to the detailed comparison" onClick={() => handleClickAction2()} />
            </div>
        </div>    
    </div>
  )
}

export default RoutePanel