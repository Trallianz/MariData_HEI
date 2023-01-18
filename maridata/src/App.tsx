import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Map from "./sites/Map"
import Comparison from "./sites/Comparison";
import Breakdown from "./sites/Breakdown";
import Topbar from './components/Topbar';


const Test = () => <p>test</p>;

function App() {
  return (
  <div className=' min-h-screen min-w-screen flex items-center justify-center'>
    <div className='h-[1040px] w-[1382px] border-8 border-black m-20 rounded-xl'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Map/>}/>
        <Route path='/comparison' element={<Comparison/>}/>
        <Route path='/breakdown' element={<Breakdown/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  </div>
    
    
  );
}



export default App;
