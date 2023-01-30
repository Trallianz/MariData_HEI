import React, { createContext, useState } from "react"

interface Route {
    date: string,
    eco_rating: number,
    time_driven: number,
    time_anchor: number,
    speed: number,
    ship_type: string,
    fuel_consumption: number,
    co2_factor: number,
    distance: number,
    capacity: number,
    route_color: string,
    shown_on_map: boolean
}

interface Context {
    currentRoute: Route,
    setCurrentRoute: React.Dispatch<React.SetStateAction<Route>>,
    orderedRoutes: Route[],
    setOrderedRoutes: React.Dispatch<React.SetStateAction<Route[]>>
}

export const ShipContext = createContext<Context | any>("")

export const ShipProvider: React.FC<React.PropsWithChildren> = ({ children }: any) => {

    //the state of the current route
    const [currentRoute, setCurrentRoute] = useState(
        { date: '31.01.2022', eco_rating: 5.9, time_driven: 880, time_anchor: 69, speed: 7, ship_type: 'RoPax', fuel_consumption: 13754, co2_factor: 18.2, distance: 434, capacity: 35953, route_color: 'black', shown_on_map: true });

    //the state of a list of all routes
    const [orderedRoutes, setOrderedRoutes] = useState([
        { date: '06.04.2021', eco_rating: 7.0, time_driven: 725, time_anchor: 35, speed: 6.8, ship_type: 'RoRoPax', fuel_consumption: 8953, co2_factor: 17.5, distance: 399, capacity: 43769, route_color: 'green', shown_on_map: true },
        { date: '17.7.2022', eco_rating: 6.4, time_driven: 700, time_anchor: 125, speed: 5.4, ship_type: 'RoPax', fuel_consumption: 11946, co2_factor: 16.3, distance: 486, capacity: 38561, route_color: 'blue', shown_on_map: true },
        { date: '28.02.2022', eco_rating: 6.2, time_driven: 680, time_anchor: 70, speed: 6.1, ship_type: 'RoRo', fuel_consumption: 9436, co2_factor: 19.4, distance: 428, capacity: 31759, route_color: 'purple', shown_on_map: true }
    ]);

    return (
        <ShipContext.Provider value={{ orderedRoutes, setOrderedRoutes, currentRoute, setCurrentRoute }}>
            {children}
        </ShipContext.Provider>
    )
}