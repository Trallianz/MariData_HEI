import { useState } from 'react'
import "./Map.css";
import RoutenPanelList from "../components/RoutenPanelList";
import land_botten from "./../icons/land_top.svg";
import land_top from "./../icons/land_botton.svg";
import line_map_black from "./../icons/line_map_black.svg";
import line_map_green from "./../icons/line_map_green.svg";
import line_map_purple from "./../icons/line_map_purple.svg";
import line_map_blue from "./../icons/line_map_blue.svg";
import location from "./../icons/location.svg";


const Map = () => {

  const[isOpen, setIsOpen] = useState([true, true, true, true]);

  return (
    <div className='map'>
      <div className='map_map'>
        <img src={land_top} alt="" id='land_top' />
        <img src={land_botten} alt="" id='land_botton' />
        <img src={line_map_black} alt="" id='line_map_black' style={{ opacity: isOpen[0] ? 1 : 0 }} />
        <img src={line_map_green} alt="" id='line_map_green' style={{ opacity: isOpen[1] ? 1 : 0 }} />
        <img src={line_map_blue} alt="" id='line_map_blue' style={{ opacity: isOpen[2] ? 1 : 0 }} />
        <img src={line_map_purple} alt="" id='line_map_purple' style={{ opacity: isOpen[3] ? 1 : 0 }} />
        <img src={location} alt="" id='location_top' />
        <img src={location} alt="" id='location_botten' />
      </div>
      <div className='map_panel'>
        <RoutenPanelList isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  )
}

export default Map