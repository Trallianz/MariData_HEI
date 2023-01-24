import React, { useState } from 'react'
import "./Map.css";
import RoutenPanelList from "../components/RoutenPanelList";
import land_botten from "./../icons/land_top.svg";
import land_top from "./../icons/land_botton.svg";
import line_map_black from "./../icons/line_map_black.svg";
import line_map_green from "./../icons/line_map_green.svg";
import line_map_purple from "./../icons/line_map_purple.svg";
import line_map_blue from "./../icons/line_map_blue.svg";
import location from "./../icons/location.svg";

interface route_list {
  //TODO find types
  routen_list: any;
  list: any;
  listSetter: any;
}

const Map = () => {
  


  //hook to pass the route color down to child components so the according route can be hidden
  const [colorBool, setColorBool] = useState([false, false, false, false]);


  return (
    <div className='map'>
      <div className='map_map'>
        <img src={land_top} alt="" id='land_top' />
        <img src={land_botten} alt="" id='land_botton' />
        <img src={line_map_black} alt="" id='line_map_black' />
        <img src={line_map_green} alt="" id='line_map_green' style={{ opacity: colorBool[1] ? 0 : 1 }} />
        <img src={line_map_blue} alt="" id='line_map_blue' style={{ opacity: colorBool[2] ? 0 : 1 }} />
        <img src={line_map_purple} alt="" id='line_map_purple' style={{ opacity: colorBool[3] ? 0 : 1 }} />
        <img src={location} alt="" id='location_top' />
        <img src={location} alt="" id='location_botten' />
      </div>
      <div className='map_panel'>
        <RoutenPanelList colorBool={colorBool} setColorBool={setColorBool} />
      </div>
    </div>
  )
}

export default Map