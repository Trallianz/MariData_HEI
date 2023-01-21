
import { useLocation, useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar'
import './Comparison.css';
import EcoRatingTableItem from '../components/EcoRatingTableItem';
import ComparisonTable from '../components/ComparisonTable';
import leaf_logo from './../icons/Leaf.svg'
import time_logo from './../icons/Time.svg'
import ship_d from './../icons/ship_driven.svg'
import calender from './../icons/calender.svg'
import anchor from './../icons/anchor.svg'
import speedometer from './../icons/speedometer.svg'
import cargo_ship from './../icons/cargo_ship.svg'



const Comparison = () => {

  const { state } = useLocation();
  const { props } = state;
  const navigate = useNavigate();

  const to_breakdown_site = () => {
    navigate("/breakdown", { state: { props } });
  }

  //split time in hours and minutes
  const time_array = props.time_driven.split(",")
  const time_driven_hours = time_array[0];
  const time_driven_minutes = time_array[1];

  const time_array_anchor = props.time_anchor.split(",")
  const anchor_hours = time_array_anchor[0];
  const anchor_minutes = time_array_anchor[1];

  return (
    <div className='h-full w-full bg-gray1 text-text0'>
      <Topbar name={"Detailed Comparison"} />
      <div className='h-[944px] flex flex-col justify-between p-5'>
        <div className='divide-y flex flex-col justify-between'>
          <div className='flex justify-between font-bold  text-4xl'>
            <div></div>
            <div></div>
            <div>Current</div>
            <div>Suggestion</div>
            <div>Compared</div>
            <div></div>
          </div>
          <div>
            <div className='flex w-full items-center justify-between p-3 m-1 bg-gray1'>
              <div className="flex justify-between w-[131px] text-2xl">
                <img src={calender} />
                <p>Date:</p>
              </div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.date}</div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.date}</div>
              <div className='flex w-[42px] justify-end'></div>
              <div className='flex justify-end'></div>
            </div>
          </div>
          <div >
            <ComparisonTable icon={leaf_logo} attribute="Eco-Rating:" cPoints={props.eco_rating} sPoints={props.eco_rating} />
          </div>
          <div>
            <div className='flex text-2xl'>
              <img src={time_logo} alt="clock for the time comparison" />
              <div className=' mx-7'>
                Time:
              </div>
            </div>
            <div>
              <div >
                <ComparisonTable icon={ship_d} attribute="driven" cPoints={time_driven_hours} sPoints={time_driven_minutes} />
              </div>
              <div >
                <ComparisonTable icon={anchor} attribute="anchored" cPoints={props.time_anchor} sPoints={props.time_anchor} />
              </div>
            </div>
          </div>
          <div>
            <ComparisonTable icon={speedometer} attribute="Avg. Speed:" cPoints={props.speed} sPoints={props.speed} />
          </div>
          <div>
            <div className='flex w-full items-center justify-between p-3 m-1 bg-gray1'>
              <div className="flex justify-between w-[131px] text-2xl">
                <img src={cargo_ship} />
                <p>Ship Type:</p>
              </div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.ship_type}</div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.ship_type}</div>
              <div className='flex w-[42px] justify-end'></div>
              <div className='flex justify-end'></div>
            </div>
          </div>
        </div>


        <div className='flex justify-between'>
          <button onClick={() => to_breakdown_site()} className='btn'>
            to breakdown
          </button>
          <div className='flex'>
            <button onClick={() => navigate('/Map')} className="btn mx-2">
              Cancel
            </button>
            <button onClick={() => navigate('/')} className="btn">
              Navigate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comparison