import Radar from '../components/Radar'
import Topbar from '../components/Topbar'
import StandardButton from '../components/StandardButton';
import EcoRatingTableItem from '../components/EcoRatingTableItem';
import { useLocation, useNavigate } from "react-router-dom";
import Leaf from "./../icons/Leaf.svg"

const Breakdown = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  const { props } = state;

  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Breakdown"} />
      <div className='h-[944px] flex justify-between p-8'>
        <div>
          <button onClick={() => navigate("/comparison", { state: { props } })}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[50px]">
              <path fill-rule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clip-rule="evenodd" />
            </svg>
          </button >
          <Radar
            c_eco={props.eco_rating}
            c_fuel={props.fuel_consumption}
            c_co2={props.co2_factor}
            c_distance={props.distance}
            c_capacity={props.capacity}
            s_eco={props.eco_rating+3}
            s_fuel={props.fuel_consumption+3}
            s_co2={props.co2_factor+3}
            s_distance={props.distance+3}
            s_capacity={props.capacity+3} />
        </div>
        <div className='h-full flex flex-col justify-between items-end'>
          <div className='bg-gray0 w-[500px] p-3 rounded-lg'>
            <div className='flex'>
              <div>
                <div className='font-bold text-xl'>Current</div>
                <div>CurrentFarbe</div>
              </div>
              <div>
                <div className='font-bold text-xl'>Suggestion</div>
                <div>SuggestionFarbe</div>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <EcoRatingTableItem icon={Leaf} attribute="Eco-Rating" cPoints={props.eco_rating} sPoints={props.eco_rating} />
              <EcoRatingTableItem icon={Leaf} attribute="Fuel Consumption" cPoints={props.fuel_consumption} sPoints={props.fuel_consumption} />
              <EcoRatingTableItem icon={Leaf} attribute="CO2 Factor" cPoints={props.co2_factor} sPoints={props.co2_factor} />
              <EcoRatingTableItem icon={Leaf} attribute="Distance" cPoints={props.distance} sPoints={props.distance} />
              <EcoRatingTableItem icon={Leaf} attribute="Capacity" cPoints={props.capacity} sPoints={props.capacity} />
            </div>
          </div>
          <div onClick={() => { alert('The Eco-Score is dark magic.') }}>
            <StandardButton label={"How is the Eco-Rating calculated?"} />
          </div>
        </div>
      </div>
      <div>
        {props.eco_rating}
      </div>
    </div>
  )
}

export default Breakdown