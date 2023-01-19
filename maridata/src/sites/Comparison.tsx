import React from 'react'
import { useLocation, useNavigate} from 'react-router';
import Topbar from '../components/Topbar'
import './Comparison.css';

const Comparison = () => {

  const {state} = useLocation();
  const {props} = state;
  const navigate = useNavigate();

  const to_breakdown_site = () => {
    navigate("/breakdown", {state: {props}});
  }

  return (
    <div>
      <Topbar name={"Detailed Comparison"}/>
      <div >
        <div>
          {props.eco_rating}
        </div>
        <button onClick={() => to_breakdown_site()}>
          to breakdown
        </button>
      </div>
    </div>
  )
}

export default Comparison