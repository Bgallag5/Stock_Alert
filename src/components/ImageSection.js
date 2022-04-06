import React from 'react'

export default function ImageSection() {
  return (
    <section className="section image-section section--hidden">
        <img className="buffer-image" alt='stock user' src={require("../assets/stock-img-1.svg" ).default}/>
    </section>
  )
}
