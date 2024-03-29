import Radar from '../components/Radar'
import Topbar from '../components/Topbar'
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

  //returns the difference between two numbers in percent
  function getDifference(x: number, y: number) {
    //example "+60%"
    if (x < y) return ("+" + Math.round(((y / x) * 100) - 100) + "%");
    //example "0%" or "-60%"
    else return (Math.round(((y / x) * 100) - 100) + "%");
  }

  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Eco-Rating Details"} />
      <div className='h-[944px] flex flex-col justify-between p-8'>
        <button onClick={() => navigate("/comparison", { state: { props } })}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[50px]">
            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
        </button >
        <div className='flex justify-between'>
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
          <div className='h-full flex flex-col justify-between items-end'>
            <table className='bg-gray0 rounded-xl'>
              <thead className='text-2xl'>
                <tr className='border-b-4 border-gray1'>
                  <th />
                  <th className='p-4'>
                    <div className='pb-1 text-start w-min'>Current
                      <RouteLine color={shipProp.currentRoute.route_color} />
                    </div>
                  </th>
                  <th className='p-4'>
                    <div className='pb-1 text-start w-min'>Suggestion
                      <RouteLine color={props.route_color} />
                    </div>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr className='border-b-2 border-gray1'>
                  <td className='p-4'>
                    <img src={Leaf} alt="" />
                    Eco-Rating
                  </td>
                  <td className='p-4 text-4xl'>{shipProp.currentRoute.eco_rating.toFixed(1)}</td>
                  <td className='p-4 text-4xl'>{props.eco_rating.toFixed(1)}</td>
                  <td className='p-4 text-end'>{getDifference(shipProp.currentRoute.eco_rating, props.eco_rating)}</td>
                </tr>
                <tr className='border-b-2 border-gray1'>
                  <td className='p-4'>
                    <img src={Fire} alt="" />
                    Fuel Consumption
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{shipProp.currentRoute.fuel_consumption}</div>
                      <div>gal</div>
                    </div>
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{props.fuel_consumption}</div>
                      <div>gal</div>
                    </div>
                  </td>
                  <td className='p-4 text-end'>{getDifference(shipProp.currentRoute.fuel_consumption, props.fuel_consumption)}</td>
                </tr>
                <tr className='border-b-2 border-gray1'>
                  <td className='p-4'>
                    <img src={CO2} alt="" />
                    CO2 Factor
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{shipProp.currentRoute.co2_factor}</div>
                      <div>g/ton</div>
                    </div>
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{props.co2_factor}</div>
                      <div>g/ton</div>
                    </div>
                  </td>
                  <td className='p-4 text-end'>{getDifference(shipProp.currentRoute.co2_factor, props.co2_factor)}</td>
                </tr>
                <tr className='border-b-2 border-gray1'>
                  <td className='p-4'>
                    <img src={Distance} alt="" />
                    Distance
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{shipProp.currentRoute.distance}</div>
                      <div>km</div>
                    </div>
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{props.distance}</div>
                      <div>km</div>
                    </div>
                  </td>
                  <td className='p-4 text-end'>{getDifference(shipProp.currentRoute.distance, props.distance)}</td>
                </tr>
                <tr>
                  <td className='p-4'>
                    <img src={Capacity} alt="" />
                    Capacity
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{shipProp.currentRoute.capacity}</div>
                      <div>tons</div>
                    </div>
                  </td>
                  <td className='p-4'>
                    <div className='flex items-end'>
                      <div className='text-2xl pr-1'>{props.capacity}</div>
                      <div>tons</div>
                    </div>
                  </td>
                  <td className='p-4 text-end'>{getDifference(shipProp.currentRoute.capacity, props.capacity)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='h-[100px] w-[250px] bg-gray2 rounded-xl flex items-center text-center text-xl font-bold text-white' onClick={() => { alert('The Eco-Score is dark magic.') }}>
            How is the Eco-Rating calculated?
          </button>
        </div>
      </div>
    </div>
  )
}

export default Details