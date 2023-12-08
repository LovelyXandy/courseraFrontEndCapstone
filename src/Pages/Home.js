import React from "react";
import "../App.css";
import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import CustomersSay from "../Components/CustomersSay";
import Chicago from "../Components/Chicago";

const Home = () => {
  return (
    <>
        <Hero />
        <Specials />
        <CustomersSay />
        <Chicago />
    </>
  );
};
export default Home;