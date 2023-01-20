import React from 'react';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

/*
Link zum Radar:
https://www.npmjs.com/package/react-svg-radar-chart
*/

class Radar extends React.Component{ 
 
  render() {

    const captions = {
      ecoRating: 'Eco-Rating',
      fuelConsumption: 'Fuel Consumption',
      co2Factor: 'CO2 Factor',
      distance: 'Distance',
      capacity: 'Capacity'
    }

    const data = [
      {
        data: {
          ecoRating: 1,
          fuelConsumption: .8,
          co2Factor: 0.9,
          distance: 0.67,
          capacity: 0.8
        },
        meta: { color: '#58FCEC' }
      },
      {
        data: {
          ecoRating: 0.5,
          fuelConsumption: .5,
          co2Factor: 0.9,
          distance: 0.67,
          capacity: 0.5
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
}

export default Radar;