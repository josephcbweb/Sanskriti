import React, { useState, useEffect } from "react";
import Map from "../map/Map";
import "./Home.css";

const Home = () => {
  const phrases = [
    { first: "India", second: "Unveiled" },
    { first: "Cultural", second: "Splendor" },
    { first: "Heritage", second: "Revealed" },
    { first: "Timeless", second: "Tradition" },
  ];

  const images = [
    "https://images.pexels.com/photos/974320/pexels-photo-974320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2477357/pexels-photo-2477357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/11428111/pexels-photo-11428111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/27489411/pexels-photo-27489411/free-photo-of-pottan-theyyam-kerala-ritual-dance-indian-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change text and image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [phrases.length, images.length]);

  return (
    <>
      <h1 className="title-home">Sanskriti</h1>
      <div>
        <div
          className="home-container"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transition: "background-image 1s ease-in-out",
          }}
        >
          <div className="blur-part">
            <div className="blur-div"></div>
            <div className="blur-text">
              <h2 className="reveal-text">
                {phrases[currentPhraseIndex].first}
              </h2>
            </div>
          </div>
          <div className="clear-part">
            <h2 className="animated-reveal-text">
              {phrases[currentPhraseIndex].second}
            </h2>
            <h3>
              <span className="explore">
                <a href="/map">Explore</a>
              </span>{" "}
              the cultural heritage of India
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
