import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import About from '../Pages/About';
import Menu from '../Pages/Menu';
import Reservations from '../Pages/Reservations';
import Order from '../Pages/Order';

function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

export default Main;