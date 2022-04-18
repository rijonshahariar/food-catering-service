import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Home/Header/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound'
import CheckOut from './Components/CheckOut/CheckOut';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='*' element={<Notfound />} />

      </Routes>
    </div>
  );
}

export default App;
