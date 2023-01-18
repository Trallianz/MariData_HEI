import React from 'react'
import { Link, Navigate, useNavigate} from "react-router-dom";


const Map = () => {

const navigate = useNavigate();

  return (
    <div>
      <p>test</p>
      <Link to="/breakdown">breakdown</Link>
      <Link to="/comparison">comparison</Link>
      <button onClick={() => navigate("/breakdown")}>breakdown</button>
      Map
    </div>
  )
}

export default Map