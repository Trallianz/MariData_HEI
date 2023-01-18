import React from 'react'
import RoutenPanel from "./../components/RoutePanel";
import { routen_props } from "./../components/Route";



const RoutenPanleList = () => {

    const route_list = [
        <RoutenPanel date='1' eco_rating={1} time_driven='1' time_anchor='1' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} />,
        <RoutenPanel date='2' eco_rating={1} time_driven='1' time_anchor='1' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} />,
        <RoutenPanel date='3' eco_rating={1} time_driven='1' time_anchor='1' speed={1} ship_type='x' fuel_consumption={1} co2_factor={1} distance={1} cargo_carrying_capacity={1} />,
    ];

    const listItems = route_list.map((route) =>
    <li>{route}</li>
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