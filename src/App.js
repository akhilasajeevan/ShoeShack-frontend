import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userroute from './Route/Userroute';
import Adminroute from './Route/Adminroute';
// import Registrationpage from './Pages/User/Registrationpage';

function App() {
  return (
    <div>
    <BrowserRouter>
     
        <Routes>
          <Route path="/*" element={<Userroute/>} />
          <Route path="/admin" element={<Adminroute/>} />
          {/* Define other routes here */}
        </Routes>
      
    </BrowserRouter>
    
    </div>
    // <div><Registrationpage/></div>
  );
}

export default App;


