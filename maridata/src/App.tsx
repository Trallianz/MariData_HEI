import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./sites/Map"
import Comparison from "./sites/Comparison";
import Details from "./sites/Details";
import { ShipProvider } from "./ShipContext";

function App() {

  return (
    <div className='h-[1024px] w-[1366px] bg-gray1'>
      <ShipProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<Map />} />
            <Route path='/comparison' element={<Comparison />} />
            <Route path='/details' element={<Details />} />
          </Routes>
        </BrowserRouter>
      </ShipProvider>
    </div>
  );
}

export default App;
