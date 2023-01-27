import Radar from '../components/Radar'
import Topbar from '../components/Topbar'
import StandardButton from '../components/StandardButton';
import EcoRatingTableItem from '../components/EcoRatingTableItem';
import { useLocation, useNavigate } from "react-router-dom";
import Leaf from "./../icons/Leaf.svg"
import Fire from "./../icons/fire-svgrepo-com.svg"
import CO2 from "./../icons/co2-svgrepo-com.svg"
import Distance from "./../icons/distance-svgrepo-com.svg"
import Capacity from "./../icons/capacity-svgrepo-com.svg"
import { useContext } from 'react';
import { ShipContext } from '../ShipContext';
import RouteLine from '../components/RouteLine';


const Details = () => {

  const shipProp = useContext(ShipContext);

  const navigate = useNavigate();
  const { state } = useLocation();
  const { props } = state;

  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Eco-Rating Details"} />
      <div className='h-[944px] flex justify-between p-8'>
        <div>
          <button onClick={() => navigate("/comparison", { state: { props } })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[50px]">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button >
          <Radar
            c_eco={shipProp.currentRoute.eco_rating}
            c_fuel={shipProp.currentRoute.fuel_consumption}
            c_co2={shipProp.currentRoute.co2_factor}
            c_distance={shipProp.currentRoute.distance}
            c_capacity={shipProp.currentRoute.capacity}
            c_color={shipProp.currentRoute.route_color}
            s_eco={props.eco_rating}
            s_fuel={props.fuel_consumption}
            s_co2={props.co2_factor}
            s_distance={props.distance}
            s_capacity={props.capacity}
            s_color={props.route_color} />
        </div>
        <div className='h-full flex flex-col justify-between items-end'>
          <div className='bg-gray0 w-[500px] p-3 rounded-lg'>
            <div className='flex'>
              <div className='p-2 pl-52'>
                <div className='font-bold text-xl'>Current</div>
                <RouteLine color={shipProp.currentRoute.route_color}/>
              </div>
              <div className='p-2'>
                <div className='font-bold text-xl'>Suggestion</div>
                <RouteLine color={props.route_color}/>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <EcoRatingTableItem icon={Leaf} attribute="Eco-Rating" cPoints={shipProp.currentRoute.eco_rating} sPoints={props.eco_rating} />
              <EcoRatingTableItem icon={Fire} attribute="Fuel Consumption" cPoints={shipProp.currentRoute.fuel_consumption} sPoints={props.fuel_consumption} />
              <EcoRatingTableItem icon={CO2} attribute="CO2 Factor" cPoints={shipProp.currentRoute.co2_factor} sPoints={props.co2_factor} />
              <EcoRatingTableItem icon={Distance} attribute="Distance" cPoints={shipProp.currentRoute.distance} sPoints={props.distance} />
              <EcoRatingTableItem icon={Capacity} attribute="Capacity" cPoints={shipProp.currentRoute.capacity} sPoints={props.capacity} />
            </div>
          </div>
          <div onClick={() => { alert('The Eco-Score is dark magic.') }}>
            <StandardButton label={"How is the Eco-Rating calculated?"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details