import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './screens/Home';
import Booking from './screens/Booking';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>      
        <Routes>
          <Route path='/home' element={<Home/>} />

          
          
          <Route path='/book/:roomid' element={<Booking />} />
         
        </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
