import { Link } from "react-router-dom";
import "../App.css";

function Specials() {
    return (
      <div className="specials-container">
        <div className="specials-desc">
            <p className="specials-title">This weeks specials!</p>
            <Link to="/menu" ><button className="menu-btn btn">
                    Online Menu!
            </button></Link>
        </div>
        <div className="scrolling-container">
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/greek salad.jpg")} alt="greek salad"/>
                <div className="name-price">
                    <p className="item-name">Greek Salad</p>
                    <p className="item-price">$15.99</p>
                </div>
                <div className="item-desc">
                    <p>World renowned fresh Greek salad with fresh crispy lettuce,
                        olives and authentic Greek feta cheese, 
                        garnished with our home-made dressing. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/Bruschetta.jpg")} alt="bruschetta"/>
                <div className="name-price">
                    <p className="item-name">Bruschetta</p>
                    <p className="item-price">$7.99</p>
                </div>
                <div className="item-desc">
                    <p>Freshly baked bread, smothered in garlic and tomatoes and seasoned with salt and olive oil.  </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/lemon dessert B.jpg")} alt="lemon-dessert"/>
                <div className="name-price">
                    <p className="item-name">Lemon Dessert</p>
                    <p className="item-price">$15.99</p>
                </div>
                <div className="item-desc">
                    <p>Finish your delicious meal with our fresh lemon dessert.  You won't regret it!</p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </div>
      </div>
    );
  };

  export default Specials;