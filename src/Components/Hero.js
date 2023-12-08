import { Link } from "react-router-dom";
import "../App.css";

function Hero() {

    return (
        <div className="hero-container">
            <div className="hero-desc">
                <p className="hero-title">Little Lemon</p>
                <p className="hero-subtitle">Chicago</p>
                <p className="hero-desc">We are a family owned Mediterranean restaurant, 
                    focused on delicious traditional recipes served with a modern twist.</p>
                <Link to="/reservations" ><button className="reserve-btn btn">
                    Reserve a table now!
                </button></Link>
            </div>
            <div className="image-wrapper">
            <img className="hero-img" src={require("../assets/Bruschetta.jpg")} alt="bruschetta"/>
            </div>
        </div>
    );
  };

  export default Hero;