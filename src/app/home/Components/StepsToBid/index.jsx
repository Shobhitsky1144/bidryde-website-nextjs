"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./StepsToBid.scss";
import { Divider } from "@/Components";
import { assets } from "@/assets";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const cardsInfo = [
  {
    image: assets.images.howToBid.illustration_01,
    firstLine: "Select location and ",
    secondLine: "travel dates",
  },
  {
    image: assets.images.howToBid.illustration_02,
    firstLine: "Choose car and ",
    secondLine: "verify yourself",
  },
  {
    image: assets.images.howToBid.illustration_03,
    firstLine: "Place your bid and win ",
    secondLine: "the car at your price",
  },
  {
    image: assets.images.howToBid.illustration_04,
    firstLine: "Make payment and get the ",
    secondLine: "car delivered at your ",
    thirdLine: " doorstep",
  },
];

const StepsToBid = () => {
  const carRef = useRef(null);
  const t1 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 980;
      setIsMobile(isMobileDevice);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const context = gsap.context(() => {
      // Set initial position of the car
      gsap.set("#car", { y: -50, x: 0 });

      const carWidth = isMobile ? 90 * 1.13 : 120 * 1.13;
      const carHeight = isMobile ? 90 * 1.13 : 120 * 1.13;

      gsap.set("#car", { width: carWidth, height: carHeight });

      // Car animation along the path
      t1.current = gsap.timeline().to("#car", {
        scrollTrigger: {
          trigger: "#path1",
          scrub: 1,
          start: "top center",
          end: "bottom top",
        },
        motionPath: {
          path: "#path1",
          align: "#path1",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        duration: 20,
      });
    }, carRef);

    return () => {
      context.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="stepsToBid">
      <div className="stepsToBidContainer">
        <div className="SectionTitle">
          <h1>How To Bid</h1>
          <p>Bid a car for rent at your price in just 4 simple steps</p>
          <Divider />
        </div>
        <div className="stepsToBidAnimation" ref={carRef}>
        <svg 
        width="282"
         height="1230"
          className="svgContainer" 
          viewBox="0 0 282 1230" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">

<path
    id="path1"
 d="M115.818 1C190.386 42.1194 325.492 203.991 266.48 397.13C148.522 501.082 -25.779 639.374 4.49818 861.5C106.788 911.847 238.386 970.07 251.499 1229" 
stroke="black"
 stroke-width="3" 
 stroke-linecap="round" 
 stroke-linejoin="round" 
 stroke-dasharray="25 28"
 />
{/* </svg> */}

          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 697 2000"
            fill="none"
            className="svgContainer"
          > */}
            {/* <path
       
              id="path1"
              d="M80.002 50C506.668 100 786.9 300 664.5 538C419.833 665.667 -260 950.7 -100 1223.5C219.669 1285.33 850.803 1488.5 758.003 1756.5"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="40 30"
            /> */}
            <image
              id="car"
              xlinkHref={assets.images.howToBid.car.src}
              x="0"
              y="0"
              style={{ position: "absolute" }}
              className="carImgg"
            />
          </svg>
        </div>
        <div className="stepsToBidCardContainer">
          {cardsInfo.map((info, index) => (
            <div
              className={`cardcontainer ${index % 2 !== 0 ? "rightAlign" : "leftAlign"}`}
              key={index}
            >
              <Card data={info} index={index} />
              {index ==1 ?
              <svg
      className="cardWedge"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 311 356"
    >
      <g filter="url(#filter0_d_1_20167)">
        <path
          d="M432.09 110.727L212.779 50.1515C200.082 46.6443 186.471 49.6138 176.388 58.0913L65.1946 151.581C40.5442 172.306 49.2437 212.179 80.2868 220.753L378.917 303.237L432.09 110.727Z"
          fill="#276EBC"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_20167"
          x="0.916016"
          y="0.707275"
          width="481.174"
          height="354.53"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_20167"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_20167"
            result="shape"
          />
        </filter>
      </defs>
    </svg>:index==2 ?
  

    <svg    className="cardWedge1"  viewBox="0 0 326 356" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_20168)">
<path d="M-106 110.727L113.31 50.1515C126.008 46.6443 139.619 49.6138 149.702 58.0913L260.895 151.581C285.546 172.306 276.846 212.179 245.803 220.753L-52.8273 303.237L-106 110.727Z" fill="#276EBC"/>
</g>
<defs>
<filter id="filter0_d_1_20168" x="-156" y="0.707275" width="481.174" height="354.53" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="25"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_20168"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_20168" result="shape"/>
</filter>
</defs>
</svg>:""}

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsToBid;
