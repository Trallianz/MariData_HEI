import React, { createContext, PropsWithChildren, useState } from "react"

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
    route_color: string
}

interface Context {
    currentRoute: Route,
    setCurrentRoute: React.Dispatch<React.SetStateAction<Route>>,
    orderedRoutes: Route[],
    setOrderedRoutes: React.Dispatch<React.SetStateAction<Route[]>>
}

export const ShipContext = createContext<Context | any>("")

export const ShipProvider: React.FC<React.PropsWithChildren> = ({children}: any) => {

    //the state of the current route
    const [currentRoute, setCurrentRoute] = useState(
        { date: '31.01.2022', eco_rating: 5.9, time_driven: 880, time_anchor: 69, speed: 7, ship_type: 'Flugzeugträger', fuel_consumption: 8, co2_factor: 7, distance: 6, capacity: 5, route_color: 'black' });

    //the state of a list of all routes
    const [orderedRoutes, setOrderedRoutes] = useState([
        { date: '28.02.2022', eco_rating: 6.2, time_driven: 680, time_anchor: 70, speed: 6.1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'purple' },
        { date: '06.04.2021', eco_rating: 7.0, time_driven: 725, time_anchor: 35, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'green' },
        { date: '17.7.2022', eco_rating: 6.4, time_driven: 700, time_anchor: 125, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'blue' },
        { date: '17.7.2022', eco_rating: 6.4, time_driven: 700, time_anchor: 125, speed: 1, ship_type: 'x', fuel_consumption: 1, co2_factor: 1, distance: 1, capacity: 1, route_color: 'blue' }
    ]);

    return (
        <ShipContext.Provider value={{ orderedRoutes, setOrderedRoutes, currentRoute, setCurrentRoute }}>
            {children}
        </ShipContext.Provider>
    )
}