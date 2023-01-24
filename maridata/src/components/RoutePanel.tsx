import React, { useContext, useEffect, useState } from 'react';
import './RoutenPanel.css';
import { routen_props } from "./../components/Route";
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";
import arrow_up_green from "./../icons/arrow_up_green.svg";
import arrow_down_red from "./../icons/arrow_down_red.svg";
import arrow_grey from "./../icons/arrow_grey.svg";
import eye_closed from "./../icons/eye_closed.svg";
import eye_open from "./../icons/eye_open.svg";
import line_green from "./../icons/line_green.svg";
import line_black from "./../icons/line_black.svg";
import line_purple from "./../icons/line_purple.svg";
import line_blue from "./../icons/line_blue.svg";
import { useNavigate } from "react-router-dom";
import TimeCalc from './TimeCalc';
import { ShipContext } from '../ShipContext';

interface route_props2 {
    isOpen: Array<boolean>;
    setIsOpen: any;
}

const RoutePanel = (props: any) => {

    const shipProp = useContext(ShipContext)

    const [eyeOpen, setEyeOpen] = useState(true);

    // function that is called when clicked on the eye-icon
    const handleEyeAction = () => {
        let temp = shipProp.orderedRoutes;
        temp[props.routeIndex].shown_on_map = !temp[props.routeIndex].shown_on_map;
        shipProp.setOrderedRoutes(temp);

        for (let i = 0; i < shipProp.orderedRoutes.length; i++) {
            if (props.route_color === "black") {
                props.setIsOpen([!props.isOpen[0], props.isOpen[1], props.isOpen[2], props.isOpen[3]]);
            } else if (props.route_color === "green") {
                props.setIsOpen([props.isOpen[0], !props.isOpen[1], props.isOpen[2], props.isOpen[3]]);
            } else if (props.route_color === "blue") {
                props.setIsOpen([props.isOpen[0], props.isOpen[1], !props.isOpen[2], props.isOpen[3]]);
            } else if (props.route_color === "purple") {
                props.setIsOpen([props.isOpen[0], props.isOpen[1], props.isOpen[2], !props.isOpen[3]]);
            }
        }
        setEyeOpen(!eyeOpen)
    }


    //passes the route data (props) to the detailed comparison site
    const navigate = useNavigate();

    const handleClickAction = () => {
        navigate("/comparison", {
            state: {
                props: {
                    routeIndex: props.routeIndex,
                    date: props.date,
                    eco_rating: props.eco_rating,
                    time_driven: props.time_driven,
                    time_anchor: props.time_anchor,
                    speed: props.speed,
                    ship_type: props.ship_type,
                    fuel_consumption: props.fuel_consumption,
                    co2_factor: props.co2_factor,
                    distance: props.distance,
                    capacity: props.capacity,
                    route_color: props.route_color
                }
            }
        });
    }

    // create hook for route color
    const [color, setColor] = useState("");

    //determine the correct route color
    const determine_route_color = () => {

        //create [key, value] pairs for the color name and icon
        const lines = { "black": line_black, "green": line_green, "blue": line_blue, "purple": line_purple }

        //loop the pairs and when the prop route color equals the key color then set the hook to the value (the icon object)
        for (const [key, value] of Object.entries(lines)) {
            if (key === props.route_color) { setColor(value) };
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
                    <img src={eyeOpen ? eye_open : eye_closed} alt="open eye or closed eye, deping on if the route is visible" onClick={() => handleEyeAction()} />
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
                            <img src={time_logo} alt="clock symbolizing the time of the ship" id='time_pic' />
                        </div>
                        <div className='routen_panel_time'>
                            <p>Time:</p>
                            <div className='routen_panel_eco_rating_value'>
                                <p className='time'>{TimeCalc(props.time_driven + props.time_anchor)}</p>
                                <p className='time_difference'>+38min</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='routen_divider'>

                </div>
                <div className='routen_panel_arrow'>
                    <img src={arrow_grey} alt="a arrow navigating the uzser to the detailed comparison" onClick={() => handleClickAction()} />
                </div>
            </div>
        </div>
    )
}

export default RoutePanel