import React, { useEffect, useRef, useState } from "react";

export default function Reviews() {
  const currentSlide = useRef(0);
  const dotRef = useRef(0);
  const [slides, setSlides] = useState("");

  //on mount build slider
  useEffect(() => {
    buildSliderFunctionality();
  }, []);

  //add slider functionality
  const buildSliderFunctionality = () => {
    let slides = document.querySelectorAll(".slide-item");
    setSlides(Array.from(slides));
    const buttons = document.querySelectorAll(".slider-btn");

    //position slides with TransformX
    const positionSlides = function () {
      slides?.forEach((slide, i) => {
        slide.style.transform = `translateX(${
          100 * (i - currentSlide.current)
        }%)`;
      });
    };
    positionSlides();

    buttons?.forEach((button) => {
      button.addEventListener("click", (e) => {
        //set currentSlide ref
        const offset = e.target.dataset.direction === "right" ? 1 : -1;
        if (currentSlide.current === 0 && offset === -1) {
          return;
        }
        if (currentSlide.current === slides.length - 1 && offset === 1) {
          return;
        }
        currentSlide.current = currentSlide.current + offset;
        positionSlides();
      });
    });
  };

  const Dots = () => {
        // if (!slides) return
   slides && slides.map((slide, i) => {
        return (<button  className="dot" data-slide={i}></button>)
    })
        
  }

//   console.log(slides);

  return (
    <div className="section reviews-section">
      <h2 className="reviews-header">See what our users think...</h2>
      <div className="slider-container">
        <div className="slide-item">
          <p className="slide-review">
            <p className="review-quotation">"</p>
            Stock Alert is fantastic! I don't have to worry about what's
            happening in the market each and every second. If anything happens I
            need to know about, I get an alert straight to my phone!
            <p className="review-quotation quotation--end">"</p>
          </p>
          <div className="slide-user">
            <img src={require("../assets/user-1.jpg")} alt="user"></img>
            <h4 className="review-name">Dev Doober</h4>
            <p className="review-location">San Francisco, USA</p>
          </div>
        </div>
        <div className="slide-item">
          <p className="slide-review">
            <p className="review-quotation">"</p>
            Lorem ipsum dolor sit amet. Ut unde voluptatem et dicta galisum qui
            veritatis omnis est odit neque vel molestiae accusantium ex neque
            odit. Vel sunt esse eum nostrum distinctio qui provident repudiandae
            aut quod labore et porro quidem ut animi laudantium. In architecto
            suscipit est obcaecati consequatur eos laudantium excepturi est
            dolor nostrum.
            <p className="review-quotation quotation--end">"</p>
          </p>
          <div className="slide-user">
            <img src={require("../assets/user-2.jpg")} alt="user"></img>
            <h4 className="review-name">Joey Montana</h4>
            <p className="review-location">Austin, USA</p>
          </div>
        </div>
        <div className="slide-item">
          <p className="slide-review">
            <p className="review-quotation">"</p>
            Est praesentium deleniti ex ipsum voluptatem est illum adipisci et
            nesciunt soluta a atque laboriosam ad dolor quasi non architecto
            error. Hic rerum maiores cum sint voluptatem qui maiores voluptas id
            maxime praesentium sit laborum cumque qui ullam nihil. In esse ipsum
            et provident omnis non tempore recusandae vel ratione nobis vel
            impedit rerum?
            <p className="review-quotation quotation--end">"</p>
          </p>
          <div className="slide-user">
            <img src={require("../assets/user-3.jpg")} alt="user"></img>
            <h4 className="review-name">Eli E.</h4>
            <p className="review-location">Fort Worth, USA</p>
          </div>
        </div>
        <div className="slide-item">
          <p className="slide-review">
            <p className="review-quotation">"</p>
            Why can't all apps be this easy?
            <p className="review-quotation quotation--end">"</p>
          </p>
          <div className="slide-user">
            <img src={require("../assets/user-4.jpg")} alt="user"></img>
            <h4 className="review-name">Sarah Doorknob</h4>
            <p className="review-location">New York, USA</p>
          </div>
        </div>
        <button className="slider-btn slider-btn--left" data-direction="left">
          &larr;
        </button>
        <button className="slider-btn slider-btn--right" data-direction="right">
          &rarr;
        </button>
        <div className="dots">
            <Dots />
        </div>
      </div>
    </div>
  );
}
