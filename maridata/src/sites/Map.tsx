import React from 'react'
import { Link, Navigate, useNavigate} from "react-router-dom";


const Map = () => {

const navigate = useNavigate();

  return (
    <div>
      <Link to="/breakdown">breakdown</Link>
      <Link to="/comparison">comparision</Link>
      <button onClick={() => navigate("/breakdown")}>breakdown</button>
      Map
    </div>
  )
}

export default Map