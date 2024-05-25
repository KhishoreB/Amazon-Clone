import React from "react";
import Product from "./Product";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Technical Error"
        />

        <div className="home-row">
          <Product
            id="8273456892"
            title="The lean Startup"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={3}
          />
          <Product
            id="12536492134"
            title="Rich Dad Poor Dad"
            price={349}
            image={require("../images/rich-dad-poor-dad.jpg")}
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id="129384234"
            title="Reebok Mens Stride Runner M Running Shoe"
            price={979}
            image={require("../images/sports-shoe.jpg")}
            rating={2}
          />
          <Product
            id="901283464"
            title="JBL Wave 200 True Wireless "
            price={2999}
            image={require("../images/jbl-wireless.jpg")}
            rating={3}
          />
          <Product
            id="9028347"
            title="CELLBELL Back Office Chair"
            price={5499}
            image={require("../images/office-chair.jpg")}
            rating={4}
          />
          
        </div>

        <div className="home-row">
          <Product
            id="98213744"
            title="Samsung 139.7 cm (55 inches) 4K Ultra HD Smart LED TV UA55AU7700KLXL (Titan Gray)"
            price={53999}
            image={require("../images/oled-tv.jpg")}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
