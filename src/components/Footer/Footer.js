import React from "react";

export default function Footer() {
  return (
    <div className="section section--hidden footer--cta">
      <div className="cta-section">
        <h1>DOWNLOAD TODAY AND CATCH THE ACTION LIVE</h1>
        <div className="cta-buttons">
          <button className="cta--btn">
            <span className="material-icons">apple</span>
            <h2>App Store</h2>
          </button>
          <button className="cta--btn">
            <span className="material-icons">android</span>
            <h2>Play Store</h2>
          </button>
          <button className="cta--btn">
            <span className="material-icons">language</span>
            <h2>Open Web</h2>
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-content">
          <div className="about-us">
            <h2 className="title__text">About Stock Alarm</h2>
            <p className="description__text">
              Never again settle for setting limit orders before going to bed
              and hoping for the best. Stop checking your phone during work to
              find yet another lost opportunity. Developed by traders for
              traders, Stock Alarm allows day/swing traders from all backgrounds
              to set conditional alarms to be triggered from live stock price
              movement.
            </p>
            <div className="footer-icons">
              <span className="material-icons footer__icon">facebook</span>
              <span className="material-icons footer__icon">mail</span>
              <span className="material-icons footer__icon">facebook</span>
              <span className="material-icons footer__icon">facebook</span>
            </div>
          </div>
          <div className="border-right"></div>
          <div className="footer-links">
            <div>
              <h3>Navigation</h3>
              <h5>Features</h5>
              <h5>Blog</h5>
              <h5>Contact</h5>
              <h5>FAQ</h5>
              <h5>Privacy Policy</h5>
              <h5>Terms and Conditions</h5>
              <h5>Referral Program</h5>
            </div>
            <div>
              <h3>Downloads</h3>
              <h5>Download the App</h5>
              <h5>Use on the web</h5>
            </div>
          </div>
        </div>
        <div className="footer-copywrite">©Copywrite 2022 by Ben Gallagher</div>
      </div>
    </div>
  );
}
