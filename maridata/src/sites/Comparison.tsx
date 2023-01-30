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
import TimeCalc from '../components/TimeCalc';
import RouteLine from '../components/RouteLine';



const Comparison = () => {

  const shipProp = useContext(ShipContext);

  const { state } = useLocation();
  const { props } = state;
  const navigate = useNavigate();

  //swaps the current Route with the suggested Route
  function changeRoute() {
    const temp = shipProp.currentRoute;

    shipProp.setCurrentRoute(shipProp.orderedRoutes[props.routeIndex]);

    if (props.routeIndex === 0) {
      let tempArr = [...shipProp.orderedRoutes];
      tempArr[0] = temp
      shipProp.setOrderedRoutes(tempArr);

    } else if (props.routeIndex === 1) {
      let tempArr = [...shipProp.orderedRoutes];
      tempArr[1] = temp;
      shipProp.setOrderedRoutes(tempArr);

    } else if (props.routeIndex === 2) {
      let tempArr = [...shipProp.orderedRoutes];
      tempArr[2] = temp;
      shipProp.setOrderedRoutes(tempArr);

    } else {
      let tempArr = [...shipProp.orderedRoutes];
      tempArr[3] = temp;
      shipProp.setOrderedRoutes(tempArr);
    }

    //Back to Map
    navigate('/');
  }


  return (
    <div className='h-full w-full bg-gray1'>
      <Topbar name={"Comparison"} />
      <div className='h-[944px] flex flex-col justify-between p-5'>
        <div className=''>
          <table className=' table-auto w-full '>
            <thead className=' font-bold text-4xl h-20 border-b border-gray2 text-justify'>
              <tr>
                <th className='w-[400px]'></th>
                <th>
                  <div>
                    <div>Current</div>
                    <div className='w-[130px]'><RouteLine color={shipProp.currentRoute.route_color} /></div>
                  </div>
                </th>
                <th>
                  <div>
                    <div>Suggestion</div>
                    <div className='w-[185px]'><RouteLine color={props.route_color} /></div>
                  </div>
                </th>
                <th>Compared</th>
              </tr>
            </thead>
            <tbody>
              <tr className=' h-20 border-b border-gray2'>
                <td className='flex '><img src={calender} alt='calender icon' /> <p className=' my-4 mx-8 text-2xl'>Date:</p> </td>
                <td><div className='font-bold text-2xl'>{shipProp.currentRoute.date}</div></td>
                <td><div className='font-bold text-2xl'>{props.date}</div></td>
                <td></td>
              </tr>
              <tr className=' h-20 border-b border-gray2'>
                <td className='flex'><img src={leaf_logo} alt='eco leaf icon' /><p className='my-4 mx-7 text-2xl'>Eco-Rating:</p></td>
                <td><div className='font-bold text-2xl'>{shipProp.currentRoute.eco_rating.toFixed(1)}</div></td>
                <td><div className='font-bold text-2xl'>{props.eco_rating.toFixed(1)}</div></td>
                <td><ComparisonTable cPoints={shipProp.currentRoute.eco_rating} sPoints={props.eco_rating} /></td>
              </tr>
              <tr className=' h-20'>
                <td className='flex'><img src={time_logo} alt="clock" /><p className='my-4 mx-7 text-2xl'>Time:</p></td>
                <td><div className='font-bold text-2xl'>{TimeCalc(shipProp.currentRoute.time_driven + shipProp.currentRoute.time_anchor)}</div></td>
                <td><div className='font-bold text-2xl'>{TimeCalc(props.time_driven + props.time_anchor)}</div></td>
                <td><ComparisonTime cTime={shipProp.currentRoute.time_driven + shipProp.currentRoute.time_anchor} sTime={props.time_driven + props.time_anchor} /></td>
              </tr>
              <tr className=' h-20'>
                <td className='flex mx-5'><img src={ship_d} alt="driving ship" /><p className='my-4  mx-7 text-2xl'>Driven:</p></td>
                <td><div className='font-bold text-xl'>{TimeCalc(shipProp.currentRoute.time_driven)}</div></td>
                <td><div className='font-bold text-xl'>{TimeCalc(props.time_driven)}</div></td>
                <td><ComparisonTime cTime={shipProp.currentRoute.time_driven} sTime={props.time_driven} /></td>
              </tr>
              <tr className=' h-20 border-b border-gray2'>
                <td className='flex mx-5'><img src={anchor} alt="anchor icon" /><p className='my-4  mx-7 text-2xl'>Anchored:</p></td>
                <td><div className='font-bold text-xl'>{TimeCalc(shipProp.currentRoute.time_anchor)}</div></td>
                <td><div className='font-bold text-xl'>{TimeCalc(props.time_anchor)}</div></td>
                <td><ComparisonTime cTime={shipProp.currentRoute.time_anchor} sTime={props.time_anchor} /></td>
              </tr>
              <tr className=' h-20 border-b border-gray2'>
                <td className='flex'><img src={speedometer} alt='' /><p className='my-4 mx-7 text-2xl'>Avg. Speed:</p></td>
                <td><div className='font-bold text-2xl'>{shipProp.currentRoute.speed.toFixed(1) + " kn"}</div></td>
                <td><div className='font-bold text-2xl'>{props.speed.toFixed(1) + " kn"}</div></td>
                <td><ComparisonTable cPoints={shipProp.currentRoute.speed} sPoints={props.speed} /></td>
              </tr>
              <tr className=' h-20 '>
                <td className='flex'><img src={cargo_ship} alt='the ship icon of ship type comparison' /><p className='my-4 mx-7 text-2xl'>Ship Type:</p> </td>
                <td><div className='font-bold text-2xl'>{shipProp.currentRoute.ship_type}</div></td>
                <td><div className='font-bold text-2xl'>{props.ship_type}</div></td>
              </tr>
            </tbody>
          </table >
        </div>
        <div>
          <div className='flex justify-between'>
            <button onClick={() => navigate("/details", { state: { props } })} className='btn'>
              Eco-Rating Details
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
    </div>
  )
}

export default Comparison