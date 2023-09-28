import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import SignIn from './Components/SignIn';
import Register from './Components/Register';

function App() {
  return (
    <>
    <BrowserRouter>
 
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/register' element={<Register/>}/>
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
