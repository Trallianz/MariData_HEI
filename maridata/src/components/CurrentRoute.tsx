import { useContext } from 'react'
import './CurrentRoute.css';
import ecoscore_logo from "./../icons/Leaf.svg";
import time_logo from "./../icons/Time.svg";
import TimeCalc from './TimeCalc';
import { ShipContext } from '../ShipContext';
import RouteLine from './RouteLine';

const CurrentRoute = () => {

    const shipProp = useContext(ShipContext);

    return (
        <div className='current_route'>
            <div className='current_route_name_and_line'>
                <p>current Route</p>
                <div className='pt-2 pb-8 w-48'>
                    <RouteLine color={shipProp.currentRoute.route_color} />
                </div>
            </div>
            <div className='current_route_eco_and_time'>
                <div className='current_route_eco'>
                    <img src={ecoscore_logo} alt="eco score logo" />
                    <p>{shipProp.currentRoute.eco_rating}</p>
                </div>
                <div className='current_route_divider'>
                </div>
                <div className='current_route_time'>
                    <img src={time_logo} alt="time logo" />
                    <p id='time_text1'>{TimeCalc(shipProp.currentRoute.time_driven + shipProp.currentRoute.time_anchor)}</p>
                </div>
            </div>
        </div>
    )
}

export default CurrentRoute