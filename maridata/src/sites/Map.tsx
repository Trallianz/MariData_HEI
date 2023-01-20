import React from 'react'
import { Link, Navigate, useNavigate} from "react-router-dom";
import RoutenPanel from "./../components/RoutePanel";
import RoutenPanelList from "../components/RoutenPanelList";

interface route_list{
  //TODO find types
  routen_list: any;
  list: any;
  listSetter: any;
}

const Map = () => {

const navigate = useNavigate();

  return (
    <div>
      <p>test</p>
      <Link to="/breakdown">breakdown</Link>
      <Link to="/comparison">comparison</Link>
      <button onClick={() => navigate("/breakdown")}>breakdown</button>
      Map
      <div className='map_panel'>
        <RoutenPanelList/>
      </div>
    </div>
  )
}

export default Map