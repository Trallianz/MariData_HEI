
import { useLocation, useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar'
import './Comparison.css';
import ComparisonTime from '../components/ComparisonTime';
import ComparisonTable from '../components/ComparisonTable';
import leaf_logo from './../icons/Leaf.svg'
import time_logo from './../icons/Time.svg'
import ship_d from './../icons/ship_driven.svg'
import calender from './../icons/calender.svg'
import anchor from './../icons/anchor.svg'
import speedometer from './../icons/speedometer.svg'
import cargo_ship from './../icons/cargo_ship.svg'
import { useContext } from 'react';
import { ShipContext } from '../ShipContext';



const Comparison = () => {

  const shipProp = useContext(ShipContext);

  const { state } = useLocation();
  const { props } = state;
  const navigate = useNavigate();

  //swaps the current Route with the suggested Route
  function changeRoute() {
    const temp = shipProp.currentRoute;

    shipProp.setCurrentRoute(shipProp.orderedRoutes[props.routeIndex]);

    if (props.routeIndex == 0) {
      shipProp.setOrderedRoutes([
        temp,
        shipProp.orderedRoutes[1],
        shipProp.orderedRoutes[2]
      ]);
    } else if (props.routeIndex == 1) {
      shipProp.setOrderedRoutes([
        shipProp.orderedRoutes[0],
        temp,
        shipProp.orderedRoutes[2]
      ]);
    } else {
      shipProp.setOrderedRoutes([
        shipProp.orderedRoutes[0],
        shipProp.orderedRoutes[1],
        temp
      ]);
    }

    //Back to Map
    navigate('/');
  }


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
                <img src={calender} alt='' />
                <p>Date:</p>
              </div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{shipProp.currentRoute.date}</div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.date}</div>
              <div className='flex w-[42px] justify-end'></div>
              <div className='flex justify-end'></div>
            </div>
          </div>
          <div >
            <ComparisonTable icon={leaf_logo} attribute="Eco-Rating:" cPoints={shipProp.currentRoute.eco_rating} sPoints={props.eco_rating} />
          </div>
          <div>
            <div className='flex my-2 text-2xl'>
              <img src={time_logo} alt="clock for the time comparison" />
              <div className=' mx-7'>
                Time:
              </div>
            </div>

            <div>
              <ComparisonTime icon={ship_d} attribute="driven" cTime={shipProp.currentRoute.time_driven} sTime={props.time_driven} />
            </div>
            <div >
              <ComparisonTime icon={anchor} attribute="anchored" cTime={shipProp.currentRoute.time_anchor} sTime={props.time_anchor} />
            </div>
          </div>
          <div>
            <ComparisonTable icon={speedometer} attribute="Avg. Speed:" cPoints={shipProp.currentRoute.speed} sPoints={props.speed} />
          </div>
          <div>
            <div className='flex w-full items-center justify-between p-3 m-1 bg-gray1'>
              <div className="flex justify-between w-[131px] text-2xl">
                <img src={cargo_ship} alt='the ship icon of ship type comparison' />
                <p>Ship Type:</p>
              </div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{shipProp.currentRoute.ship_type}</div>
              <div className='flex w-[60px] justify-end font-bold text-3xl'>{props.ship_type}</div>
              <div className='flex w-[42px] justify-end'></div>
              <div className='flex justify-end'></div>
            </div>
          </div>
        </div>
        <div className='flex justify-between'>
          <button onClick={() => navigate("/breakdown", { state: { props } })} className='btn'>
            to breakdown
          </button>
          <div className='flex'>
            <button onClick={() => navigate('/')} className="btn mx-9">
              Cancel
            </button>
            <button onClick={() => changeRoute()} className="btn">
              Navigate
            </button>
          </div>

        </div>



      </div>

    </div>

  )
}

export default Comparison