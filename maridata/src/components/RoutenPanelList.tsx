import React, { useContext, useState } from 'react'
import RoutenPanel from "./RoutePanel";
import CurrentRoute from './CurrentRoute';
import Dropdown from './Dropdown';
import './RoutenPanelList.css';
import { ShipContext } from '../ShipContext';

interface route_props2 {
    isOpen: Array<boolean>;
    setIsOpen: any;
}

const RoutenPanelList = (props: route_props2) => {

    const shipProp = useContext(ShipContext);

    //hook that displays the dropdown menu on click
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    //hook for the currenctly selected value in the dropdown menu
    const [dropdownSelect, setDropdownSelect] = useState("Eco-Rating");



    return (
        <div className='route_panel_list_routes'>
            <div className='route_panel_'>
                <p>Historical Routes</p>
                <div className='route_panel_divider'>

                </div>
                <button className='route_panel_dropdown' onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <div className='divider2'></div>
                    {dropdownSelect}
                    {isMenuVisible && <Dropdown setDropdownSelect={setDropdownSelect} setIsMenuVisible={setIsMenuVisible} />}
                </button>
            </div>
            <div className='current_route_div'>
                <CurrentRoute />
            </div>
            <div className='alternative_routes'>


                { //for each route in the route map a div containing the route will be created
                    //"key={index}" bitte nicht löschen, wird gebraucht, sonst gibt react in der Console einen Error


                    shipProp.orderedRoutes.map((route: any, index: number) => {
                        return <RoutenPanel
                            key={index}
                            routeIndex={index}
                            date={route.date}
                            eco_rating={route.eco_rating}
                            time_driven={route.time_driven}
                            time_anchor={route.time_anchor}
                            speed={route.speed}
                            ship_type={route.ship_type}
                            fuel_consumption={route.fuel_consumption}
                            co2_factor={route.co2_factor}
                            distance={route.distance}
                            capacity={route.capacity}
                            route_color={route.route_color}
                            setIsOpen={props.setIsOpen}
                            isOpen={props.isOpen} />
                    })
                }
            </div>
        </div>
    )
}

export default RoutenPanelList