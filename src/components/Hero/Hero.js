import React from 'react'

export default function Hero() {
  return (
    <section className="section hero-section">
    <div className="hero__half hero-text animate__animated animate__slideInLeft">
        <h1>STOCK ALERTS TO TRACK 
             PRICE MOVEMENTS LIVE.</h1>
        <h3>Wake up when it matters most.</h3>
        <div className="btns__container">
            <button className="btn ">Download for iOS</button>
            <button className="btn ">Download for Android</button>
            <button className="btn ">Go to web app</button>
        </div>
    </div>
    <div className="hero__half hero-image animate__animated animate__slideInLeft">
        <img className="iphone-img" alt='ipho' src={require("../../assets/all-alarms-front-page.png")}/>
    </div>
    <div className="custom-shape-divider-top-1648998718">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
    </div>
</section>
  )
}
