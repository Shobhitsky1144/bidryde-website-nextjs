import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import { Scrollama, Step } from "react-scrollama";
import "./CarAnimation.css"; // We'll define this CSS below

const CarAnimation = ({ path }) => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const carAnimation = useSpring({
    x: path[scrollIndex],
    config: config.slow,
  });

  const handleStepEnter = ({ index }) => {
    setScrollIndex(index);
  };

  return (
    <div className="car-animation-container">
      <Scrollama onStepEnter={handleStepEnter} offset={0.5}>
        {path.map((_, index) => (
          <Step key={index} data={index}>
            <div className="step-container">
              {/* Optional: Add content for each step */}
            </div>
          </Step>
        ))}
      </Scrollama>

      <div className="path-points-container">
        {path.map((point, index) => (
          <div
            key={index}
            className={`path-point ${scrollIndex === index ? "active" : ""}`}
            style={{
              left: `${point}%`,
            }}
          />
        ))}
      </div>

      <animated.div
        className="car-container"
        style={{
          left: carAnimation.x.interpolate((x) => `${x}%`),
        }}
      >
        <div className="car">
          {/* Add car SVG or icon here */}
          <svg className="car-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21,12v5H3v-5h18m0-2H3c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2v-5C23,10.9,22.1,10,21,10z M12,7c2.8,0,5-2.2,5-5H7C7,4.8,9.2,7,12,7z" />
          </svg>
        </div>
      </animated.div>
    </div>
  );
};

export default CarAnimation;
