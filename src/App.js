import React, { useEffect, useRef } from "react";
import "./css/style.css";

import Header from "./components/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Steps from "./components/Steps/Steps";
import UserStory from "./components/UserStory/UserStory";
import ImageSection from "./components/ImageSection";
import Footer from "./components/Footer/Footer";
import CookieMessage from "./components/CookieMessage";

export const GlobalContext = React.createContext();

function App() {
  //DOM Elements
  const header = useRef();
  const featuresSection = useRef();
  const featuresTitle = useRef();
  const overlayRef = useRef()

  //add EventListeners
  useEffect(() => {
    const featuresCoords = featuresSection.current.getBoundingClientRect();
    console.log(featuresCoords.top);
    //navbar styles on Scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.current.classList.add("header__scrolled");
      } else if (window.scrollY <= 10) {
        header.current.classList.remove("header__scrolled");
      }

      //animate features header
      if (window.scrollY / 0.3 > featuresCoords.top) {
        featuresTitle.current.classList.remove("hidden");
        featuresTitle.current.classList.add(
          "animate__animated",
          "animate__slideInUp"
        );
      }
    });
  }, []);

  //Reveal Sections using IntersectionObserver
  useEffect(() => {
    const allSections = document.querySelectorAll(".section");
    console.log(allSections);


    const revealSection = function (entries, observer) {
      const [entry] = entries;
      //if section is intersecting, remove class "hidden"
      if (!entry.isIntersecting) return;
      entry?.target.classList.remove("section--hidden");
      //remove observer
      observer.unobserve(entry.target);
    };
    //declare new Observer(callback, {options})
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    //observe each section - and add class "hidden"
    allSections.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add("section--hidden");
    });
  }, []);

  const globalVars = {
    header,
    featuresSection,
    featuresTitle,
    overlayRef,
  };

  return (
    <GlobalContext.Provider value={globalVars}>
      <div ref={overlayRef} className="blur-overlay hidden"></div>
      <CookieMessage />
      <Header />
      <Hero />
      <Features />
      <ImageSection />
      <Steps />
      <UserStory />
      <Footer />
    </GlobalContext.Provider>
  );
}

export default App;
