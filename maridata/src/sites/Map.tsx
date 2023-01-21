import React from 'react'
import { Link, Navigate, useNavigate} from "react-router-dom";
import "./Map.css";
import RoutenPanel from "./../components/RoutePanel";
import RoutenPanelList from "../components/RoutenPanelList";
import land_botten from "./../icons/land_top.svg";
import land_top from "./../icons/land_botton.svg";
import line_map_black from "./../icons/line_map_black.svg";
import line_map_green from "./../icons/line_map_green.svg";
import line_map_purpel from "./../icons/line_map_purpel.svg";
import line_map_blue from "./../icons/line_map_blue.svg";
import location from "./../icons/location.svg";

interface route_list{
  //TODO find types
  routen_list: any;
  list: any;
  listSetter: any;
}

const Map = () => {

const navigate = useNavigate();

  return (
    <div className='map'>
      <Link to="/breakdown">breakdown</Link>
      <Link to="/comparison">comparison</Link>
      <button onClick={() => navigate("/breakdown")}>breakdown</button>
      <div className='map_map'>
        <img src={land_top} alt="" id='land_top'/>
        <img src={land_botten} alt="" id='land_botton'/>
        <img src={line_map_black} alt="" id='line_map_black'/>
        <img src="" alt="" id='line_map_green'/>
        <img src="" alt="" id='line_map_purpel'/>
        <img src="" alt="" id='line_map_blue'/>
        <img src="" alt="" id='location_top'/>
        <img src="" alt="" id='location_botten'/>
      </div>
      <div className='map_panel'>
        <RoutenPanelList/>
      </div>
    </div>
  )
}

export default Map