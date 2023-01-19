import React from 'react'
import RoutenPanel from "./RoutePanel";
import CurrentRoute from './CurrentRoute';
import { routen_props } from "./Route";



const RoutenPanelList = () => {

    //create Routes to simulate data
    const route_list = [
        <RoutenPanel date='28.02.2022' eco_rating={6.2} time_driven='11,20' time_anchor='1,10' speed={6} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='black' />,
        <RoutenPanel date='06.04.2021' eco_rating={7.0} time_driven='12,05' time_anchor='0,35' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='green'/>,
        <RoutenPanel date='17.7.2022' eco_rating={6.4} time_driven='11,40' time_anchor='2,05' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='blue'/>,
    ];

    //for each route in the route map a div containing the route will be created
    const listItems = route_list.map((route) =>
        <div>{route}</div> 
    );

    return (
        <div>
            <div>
                <CurrentRoute date='28.02.2022' eco_rating={6.2} time_driven='11,20' time_anchor='1,10' speed={6} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='black'/>
            </div>
            <div>
                {listItems}
            </div>
        </div>
    )
}

export default RoutenPanelList