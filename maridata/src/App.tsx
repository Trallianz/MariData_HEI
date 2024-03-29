import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./sites/Map"
import Comparison from "./sites/Comparison";
import Details from "./sites/Details";
import { ShipProvider } from "./ShipContext";

function App() {


  return (
    <div className='flex min-h-[1060px] min-w-[1402px] h-screen items-center justify-center'>
      <div className='h-[1040px] w-[1382px] bg-black rounded-lg flex items-center justify-center'>
        <div className='h-[1024px] w-[1366px] bg-gray1'>
          <ShipProvider>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Map />} />
                <Route path='/comparison' element={<Comparison />} />
                <Route path='/details' element={<Details />} />
              </Routes>
            </BrowserRouter>
          </ShipProvider>
        </div>
      </div>
    </div>


  );
}


export default App;
