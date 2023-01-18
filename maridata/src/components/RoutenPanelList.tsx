import React from 'react'
import RoutenPanel from "./RoutePanel";
import { routen_props } from "./Route";



const RoutenPanleList = () => {

    const route_list = [
        <RoutenPanel date='1' eco_rating={1} time_driven='11,20' time_anchor='1,10' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='black' />,
        <RoutenPanel date='2' eco_rating={1} time_driven='12,05' time_anchor='0,35' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='green'/>,
        <RoutenPanel date='3' eco_rating={1} time_driven='11,40' time_anchor='2,05' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} route_color='blue'/>,
    ];

    const color_list = [];

    const add_colors_from_routes = () => {
        route_list.forEach(element => {
            color_list.push(element.props.route_color);
        });
    }

    //for each route in the route map a div containing the route will be created
    const listItems = route_list.map((route) =>
        <div>{route}</div>  
    );

    return (
        <div>
            <div>
           
                {listItems}

            </div>
        </div>
    )
}

export default RoutenPanleList