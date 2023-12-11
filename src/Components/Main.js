import '../App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import About from '../Pages/About';
import Menu from '../Pages/Menu';
import Reservations from '../Pages/BookingPage';
import Order from '../Pages/Order';
import { useState, useReducer } from "react";

export default function Main() {

  const [date, setDate] = useState(new Date());

  function initialiseTimes(date){
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  }

  function updateTimes(date){
    setDate(date);
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
  }

  function reducer(state, action) {
    return updateTimes(new Date(action.payload));
  }

  const [availableTimes, dispatch] = useReducer(reducer, initialiseTimes(date));

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch}/>} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
}

