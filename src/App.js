import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userroute from './Route/Userroute';
import Adminroute from './Route/Adminroute';
import Header from './Components/Header/Header';
import Homepage from './Pages/User/Homepage';
function App() {
  return (
    <div >
      </Registrationpage>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/*'element={<Userroute/>}/>
        <Route path='/admin/*'element={<Adminroute/>}/>
        
      </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
