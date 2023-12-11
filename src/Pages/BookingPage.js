import React from "react";
import BookingForm from "../Components/BookingForm";
import "../App.css";

const Reservations = ({availableTimes, dispatch}) => {
  return (
    <>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  );
};
export default Reservations;