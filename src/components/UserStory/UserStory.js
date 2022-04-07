import React from 'react'

export default function UserStory() {
  return (
    <section className="section user-story-section section--hidden">
        <div className="user__story user-story-1">
            <div className="story__text">
                <h2 className="title__text">STOCK ALERTS SO YOU CATCH THE ACTION LIVE</h2>
                <p className="description__text">It's time to stop setting limit orders before going to bed and hoping for the best. In today's stock market, stock alerts give you the competitive edge you need to get ahead Set fine-tuned stock alarms based off price movements to wake up when it counts and catch the action live.</p>
                <button className="download-now"><h2>Download Now</h2></button>
            </div>
            <div className="story-img-container">
                <img className="story__img" alt='user' src={require("../../assets//story-girl.svg").default} />
            </div>
        </div>
        <div className="user__story user-story-2">
            <div className="story__text">
                <h2 className="title__text">WE'VE GOT YOU COVERED</h2>
                <p className="description__text">We're a group of investors that got tired of having to choose between stalking charts or setting stop limits and praying for the best. One day we realized that enough was enough, and took matters into our own hands. Good stock alerts shouldn't be expensive (or complicated), with StockAlarm you'll be able to setup stock alerts based off of price targets, price changes, moving averages, and more!</p>
                <button className="download-now"><h2>Download Now</h2></button>
            </div>
            <div className="story-img-container">
                <img className="story__img" alt='user' src={require("../../assets/story-boy.svg").default} />
            </div>
        </div>
    </section>
  )
}
