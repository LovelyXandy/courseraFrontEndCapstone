function CustomersSay(){
    return (
        <div className="customers-container">
        <div className="customers-desc">
            <p className="customers-title">Testimonials</p>
        </div>
        <div className="scrolling-container">
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/head_chef.jpg")} alt="place-holder-chef"/>
                <div className="name-price">
                    <p className="item-name">Bob</p>
                    <p className="item-price">5/5</p>
                </div>
                <div className="item-desc">
                    <p>Best time ever! </p>
                </div>
            </div>
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/head_chef.jpg")} alt="place-holder-chef"/>
                <div className="name-price">
                    <p className="item-name">Sally</p>
                    <p className="item-price">4/5</p>
                </div>
                <div className="item-desc">
                    <p>Needed more drums.</p>
                </div>
            </div>
            <div className="scrolling-item">
                <img className="specials-img" src={require("../assets/head_chef.jpg")} alt="place-holder-chef"/>
                <div className="name-price">
                    <p className="item-name">Steve</p>
                    <p className="item-price">3/5</p>
                </div>
                <div className="item-desc">
                    <p>Too many drums.</p>
                </div>
            </div>
        </div>
      </div>
      );
};

export default CustomersSay;