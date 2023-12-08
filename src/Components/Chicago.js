function Chicago(){
    return (
    <>
        <div className="desc-container">
            <div className="restaurant-desc">
                <p className="title desc-title">Little Lemon</p>
                <p className="subtitle desc-subtitle">Chicago</p>
                <p className="desc-text desc">We are a family owned Mediterranean restaurant, 
                focused on delicious traditional recipes served with a modern twist.</p>
            </div>
            <div className="image-wrapper">
                <img className="desc-img" src={require("../assets/mario-and-adrian.jpg")} alt="owners"/>
            </div>
        </div>
    </>
      );
};

export default Chicago;