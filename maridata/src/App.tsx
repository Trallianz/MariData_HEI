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
    /*
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Map/>}/>
        <Route path='/comparison' element={<Comparison/>}/>
        <Route path='/breakdown' element={<Breakdown/>}/>
      </Routes>
    </BrowserRouter>
    */
   <Comparison/>
    
  );
}



export default App;
