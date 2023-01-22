import React, { useEffect, useState } from 'react'
import RoutenPanel from "./RoutePanel";
import CurrentRoute from './CurrentRoute';
import Dropdown from './Dropdown';
import './RoutenPanelList.css';

interface RoutenPanelList {
    colorBool: any
    setColorBool: any
}

const RoutenPanelList = (props: RoutenPanelList) => {


    //the route the ship is currently on
    const [currentRoute, setCurrentRoute] = useState({ date: '31.01.2022', eco_rating: 5.9, time_driven: 880, time_anchor: 69, speed: 7, ship_type: 'Flugzeugträger', fuel_consumption: 8, co2_factor: 7, distance: 6, capacity: 5, route_color: 'black' });


    //create Routes to simulate data
    const route_list = [
        { date: '28.02.2022', eco_rating: 6.2, time_driven: 680, time_anchor: 70, speed: 6.1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'purple', colorBool: props.colorBool, setColorBool: props.setColorBool, currentRoute: currentRoute },
        { date: '06.04.2021', eco_rating: 7.0, time_driven: 725, time_anchor: 35, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'green', colorBool: props.colorBool, setColorBool: props.setColorBool, currentRoute: currentRoute },
        { date: '17.7.2022', eco_rating: 6.4, time_driven: 700, time_anchor: 125, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'blue', colorBool: props.colorBool, setColorBool: props.setColorBool, currentRoute: currentRoute },
        { date: '17.7.2022', eco_rating: 6.4, time_driven: 700, time_anchor: 125, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'blue', colorBool: props.colorBool, setColorBool: props.setColorBool, currentRoute: currentRoute }
    ];


    //hook that displays the route list when it updates
    const [routes, setRoutes] = useState(route_list);

    //hook that displays the dropdown menu on click
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    //hook for the currenctly selected value in the dropdown menu
    const [currentSelect, setCurrentSelect] = useState("eco-score");


    function renderMap() {
        return routes.map((route, index) =>
            <RoutenPanel
                key={index}
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
                colorBool={route.colorBool}
                setColorBool={route.setColorBool}
                currentRoute={route.currentRoute} />
        )
    }

    useEffect(() => {
        renderMap();
    }, [currentSelect]);


    return (
        <div className='route_panel_list_routes'>
            <div className='route_panel_'>
                <p>Historical Routes</p>
                <div className='route_panel_divider'>

                </div>
                <button className='route_panel_dropdown' onClick={() => setIsMenuVisible(!isMenuVisible)}>
                    <div className='divider2'></div>
                    {currentSelect}
                    {isMenuVisible && <Dropdown setCurrentSelect={setCurrentSelect} setRoutes={setRoutes} route_list={route_list} setIsMenuVisible={setIsMenuVisible} />}
                </button>
            </div>
            <div className='current_route_div'>
                <CurrentRoute
                    date={currentRoute.date}
                    eco_rating={currentRoute.eco_rating}
                    time_driven={currentRoute.time_driven}
                    time_anchor={currentRoute.time_anchor}
                    speed={currentRoute.speed}
                    ship_type={currentRoute.ship_type}
                    fuel_consumption={currentRoute.fuel_consumption}
                    co2_factor={currentRoute.co2_factor}
                    distance={currentRoute.distance}
                    capacity={currentRoute.capacity}
                    route_color={currentRoute.route_color} />
            </div>
            <div className='alternative_routes'>


                { //for each route in the route map a div containing the route will be created
                    //"key={index}" bitte nicht löschen, wird gebraucht, sonst gibt react in der Console einen Error
                    renderMap()}
            </div>
        </div>
    )
}

export default RoutenPanelList