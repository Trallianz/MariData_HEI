import { useContext } from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import { ShipContext } from '../ShipContext';

/*
Link zum Radar:
https://www.npmjs.com/package/react-svg-radar-chart
*/

interface tableElements {
  c_eco: number,
  c_fuel: number,
  c_co2: number,
  c_distance: number,
  c_capacity: number,
  c_color: string,
  s_eco: number,
  s_fuel: number,
  s_co2: number,
  s_distance: number,
  s_capacity: number,
  s_color: string,
}

const Radar = ({ c_eco, c_fuel, c_co2, c_distance, c_capacity, c_color, s_eco, s_fuel, s_co2, s_distance, s_capacity, s_color }: tableElements) => {

  const shipProp = useContext(ShipContext);

  const captions = {
    ecoRating: 'Eco-Rating',
    fuelConsumption: 'Fuel Consumption',
    co2Factor: 'CO2 Factor',
    distance: 'Distance',
    capacity: 'Capacity'
  }

  function colorAsCode(color: string) {
    if (color == "black") return ("#000")
    else if (color == "green") return ("#33BE41")
    else if (color == "blue") return ("#16A88D")
    else if (color == "purple") return ("#8051A5")
    else return ("Error in Radar.tsx (unknown color)")
  }

  //returns the biggest known element of an attribute 
  function getBiggestElement(x: string) {
    let highest: number = 0;

    if (x == "fuelConsumption") {
      highest = shipProp.currentRoute.fuel_consumption;
      for (let i = 0; i < shipProp.orderedRoutes.length; i++) {
        if (shipProp.orderedRoutes[i].fuel_consumption > highest) {
          highest = shipProp.orderedRoutes[i].fuel_consumption;
        }
      }
    }
    else if (x == "co2Factor") {
      highest = shipProp.currentRoute.co2_factor;
      for (let i = 0; i < shipProp.orderedRoutes.length; i++) {
        if (shipProp.orderedRoutes[i].co2_factor > highest) {
          highest = shipProp.orderedRoutes[i].co2_factor;
        }
      }
    }
    else if (x == "distance") {
      highest = shipProp.currentRoute.distance;
      for (let i = 0; i < shipProp.orderedRoutes.length; i++) {
        if (shipProp.orderedRoutes[i].distance > highest) {
          highest = shipProp.orderedRoutes[i].distance;
        }
      }
    }
    else if (x == "capacity") {
      highest = shipProp.currentRoute.capacity;
      for (let i = 0; i < shipProp.orderedRoutes.length; i++) {
        if (shipProp.orderedRoutes[i].capacity > highest) {
          highest = shipProp.orderedRoutes[i].capacity;
        }
      }
    }
    return highest;
  }

  const data = [
    {
      //the data of the current route
      data: {
        ecoRating: c_eco / 10,
        fuelConsumption: c_fuel / getBiggestElement("fuelConsumption"),
        co2Factor: c_co2 / getBiggestElement("co2Factor"),
        distance: c_distance / getBiggestElement("distance"),
        capacity: c_capacity / getBiggestElement("capacity")
      },
      meta: { color: colorAsCode(c_color) }
    },
    {
      //the data of the suggested routed
      data: {
        ecoRating: s_eco / 10,
        fuelConsumption: s_fuel / getBiggestElement("fuelConsumption"),
        co2Factor: s_co2 / getBiggestElement("co2Factor"),
        distance: s_distance / getBiggestElement("distance"),
        capacity: s_capacity / getBiggestElement("capacity")
      },
      meta: { color: colorAsCode(s_color) }
    },
  ]

  const options = {
    scales: 10,
    scaleProps: () => ({ className: 'fill-gray2 stroke-gray1', fill: 'none' }),
    captionMargin: 60,
    captionProps: () => ({
      className: 'fill-text0 font-semibold',
      textAnchor: 'middle',
      fontSize: 20,
      fontFamily: 'sans-serif'
    }),
    wrapCaptionAt: 16,
  }


  return (
    <RadarChart
      captions={captions}
      data={data}
      size={700}
      options={options}
    />
  );
}

export default Radar;