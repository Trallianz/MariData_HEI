import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

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
  s_eco: number,
  s_fuel: number,
  s_co2: number,
  s_distance: number,
  s_capacity: number,
}

const Radar = ({ c_eco, c_fuel, c_co2, c_distance, c_capacity, s_eco, s_fuel, s_co2, s_distance, s_capacity }: tableElements) => {

  const captions = {
    ecoRating: 'Eco-Rating',
    fuelConsumption: 'Fuel Consumption',
    co2Factor: 'CO2 Factor',
    distance: 'Distance',
    capacity: 'Capacity'
  }

  const data = [
    {
      //the data of the current route
      data: {
        ecoRating: c_eco / 10,
        fuelConsumption: c_fuel / 10,
        co2Factor: c_co2 / 10,
        distance: c_distance / 10,
        capacity: c_capacity / 10
      },
      meta: { color: '#58FCEC' }
    },
    {
      //the data of the suggested routed
      data: {
        ecoRating: s_eco / 10,
        fuelConsumption: s_fuel / 10,
        co2Factor: s_co2 / 10,
        distance: s_distance / 10,
        capacity: s_capacity / 10
      },
      meta: { color: '#0000EC' }
    },
  ]

  const options = {
    scales: 10,
    scaleProps: () => ({ className: 'fill-gray2 stroke-gray1', fill: 'none' }),
    captionMargin: 60,
    captionProps: () => ({
      className: 'fill-text0',
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