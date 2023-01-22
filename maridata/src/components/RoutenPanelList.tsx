import React, { useState } from 'react'
import RoutenPanel from "./RoutePanel";
import CurrentRoute from './CurrentRoute';
import Dropdown from './Dropdown';
import { routen_props } from "./Route";
import './RoutenPanelList.css';

interface RoutenPanelList {
    colorBool: any
    setColorBool: any
}

const RoutenPanelList = (props: RoutenPanelList) => {

    //create Routes to simulate data
    const route_list = [
        <RoutenPanel date='28.02.2022' eco_rating={6.2} time_driven='11,20' time_anchor='1,10' speed={6} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} capacity={1} route_color='purpel' colorBool={props.colorBool} setColorBool={props.setColorBool} />,
        <RoutenPanel date='06.04.2021' eco_rating={7.0} time_driven='16,05' time_anchor='0,35' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} capacity={1} route_color='green' colorBool={props.colorBool} setColorBool={props.setColorBool} />,
        <RoutenPanel date='17.7.2022' eco_rating={6.4} time_driven='11,40' time_anchor='2,05' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} capacity={1} route_color='blue' colorBool={props.colorBool} setColorBool={props.setColorBool} />,
        <RoutenPanel date='17.7.2022' eco_rating={6.4} time_driven='11,40' time_anchor='2,05' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} capacity={1} route_color='blue' colorBool={props.colorBool} setColorBool={props.setColorBool} />,
    ];


    //for each route in the route map a div containing the route will be created
    const listItems = route_list.map((route) =>
        <div>{route}</div>
    );

    //hook that displays the route list when it updates
    const [routes, setRoutes] = useState(listItems);

    //function that sorts the route list after the selected parameter
    const sort_route_panel_list = () => {
        if (currentSelect === "eco-score") {
            let route_list_eco = route_list.sort((a, b) => (a.props.eco_rating > b.props.eco_rating) ? -1 : 1);
            console.log(route_list_eco);
            setRoutes(route_list_eco);

        } else if (currentSelect === "time") {

            let route_list_time = route_list.sort((a, b) => (
                (parseInt(a.props.time_driven.split(",")[0])*60 + parseInt(a.props.time_anchor.split(",")[0])*60 + parseInt(a.props.time_driven.split(",")[1]) + parseInt(a.props.time_driven.split(",")[1])) 
                > (parseInt(b.props.time_driven.split(",")[0])*60 + parseInt(b.props.time_anchor.split(",")[0])*60 + parseInt(b.props.time_driven.split(",")[1]) + parseInt(b.props.time_driven.split(",")[1]))) ? -1 : 1);
            setRoutes(route_list_time);

        } else if (currentSelect === "date") {
            let route_list_date = route_list.sort((a, b) => (a.props.eco_rating > b.props.eco_rating) ? 1 : -1);
            setRoutes(route_list_date);
        }
    }

    //hook that displays the dropdown menu on click
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    //hook for the currenctly selected value in the dropdown menu
    const [currentSelect, setCurrentSelect] = useState("eco-score");

    return (
        <div className='route_panel_list_routes'>
            <div className='route_panel_'>
                <p>Historical Routes</p>
                <div className='route_panel_divider'>

                </div>
                <div className='route_panel_dropdown' onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <div className='divider2'></div>
                    <button onClick={() => sort_route_panel_list()}>{currentSelect}</button>
                    {isMenuVisible && <Dropdown currentSelect={currentSelect} setCurrentSelect={setCurrentSelect} />}
                </div>
            </div>
            <div className='current_route_div'>
                <CurrentRoute date='28.02.2022' eco_rating={6.2} time_driven='11,20' time_anchor='1,10' speed={6} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} capacity={1} route_color='black' />
            </div>
            <div className='alternative_routes'>
                {routes}
            </div>
        </div>
    )
}

export default RoutenPanelList