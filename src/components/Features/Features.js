import React, { useContext } from "react";
import { GlobalContext } from "../../App";

export default function Features() {
  const { featuresSection, featuresTitle } = useContext(GlobalContext);
  console.log(featuresTitle);

  return (
    <section ref={featuresSection} className="section features-section section--hidden">
      <div ref={featuresTitle} className="features-title-text hidden">
        <h1 className="animate__animated animate__slideInUp ">
          SET ALARMS TO TRACK <br></br> PRICE MOVEMENTS <br></br> LIVE.
        </h1>
      </div>
      <div className="features-container">
        <div className="feature">
          <span className="material-icons feature--icon">call</span>
          <h3>PHONE CALL ALERTS</h3>
          <p>
            We currently provide realtime alerts on over 10,000 tickers &
            cryptocurrencies. Stock Alarm will call your phone once your trigger
            goes off.
          </p>
        </div>
        <div className="feature">
          <span className="material-icons feature--icon">person</span>
          <h3>GAIN AN EDGE</h3>
          <p>
            Stock Alarm supports many trigger types including limits, percent
            change, price change, SMA, EMA, MACD, RSI, death cross, and gold
            cross patterns.
          </p>
        </div>
        <div className="feature">
          <span className="material-icons feature--icon">stock</span>
          <h3>COMMUNITY DRIVEN</h3>
          <p>
            We take all of our user's requests seriously and are always looking
            for ways to improve, shoot us an email.
          </p>
        </div>
      </div>
    </section>
  );
}
