"use client"; // Add this line at the top of the file

import React, { useRef, useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Promises.scss";
import { Divider } from "@/Components";
import { IconButton } from "@mui/material";
import { assets } from "@/assets";
import Card from "./Card";
import { uid } from "react-uid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules"; // ✅ v11+ सही import
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const cardsInfo = [
  {
    image: assets.images.promisesAndCommitments.askyourpricecard,
    firstLine: "Ask your Price",
    secondLine: "",
    overlayContent: {
      title: "Ask your Price",
      content:
"Set your own price for the trip by placing a bid. Accept the flexible counter offers directly from car owners."    },
  },
  {
    image: assets.images.promisesAndCommitments.rideinfinitykmscard,
    firstLine: "Ride Unlimited",
    secondLine: "Kilometers",
    overlayContent: {
      title: "Ryde Unlimited Kilometers",
      content:
"Count memories - not kilometers, because BidrYde provides unlimited kilometers for your journey."    },
  },
 
  {
    image: assets.images.promisesAndCommitments.doorstepdeliverycard,
    firstLine: "Doorstep Delivery ",
    secondLine: "and Return",
    overlayContent: {
      title: "Doorstep Delivery and Return",
      content:
"Convenience at your fingertips! We’ll deliver the car to your doorstep and collect it once your trip is done."    },
  },
  {
    image: assets.images.promisesAndCommitments.zerosecuritydepositcard,
    firstLine: "24/7 Support &",
    secondLine: " Roadside Assistance",
    overlayContent: {
      title: "24/7 Support & Roadside Assistance",
      content:
"Day or night — we’ve got your back. We’re just a call away for any booking support or roadside assistance, round the clock."    },
  },


  {
    image: assets.images.promisesAndCommitments.freeCancellation,
    firstLine: "Free Cancellation",
    secondLine: "",
    overlayContent: {
      title: "Free Cancellation",
      content:
"Change of plans? Cancel for free, no questions asked. No regrets for cancellation up to 24 hours before your trip starts."    },
  },
  {
    image: assets.images.promisesAndCommitments.freeReschedule,
    firstLine: "Reschedule for",
    secondLine: "Free",
    overlayContent: {
      title: "Reschedule for Free",
      content:
"Trip postponed? No worries! Reschedule anytime at no extra cost — on your own schedule."
    },
  },
 
];

const PromisesAndCommitments = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false);

  const goNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  const goPrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleDashClick = (index) => {
    setActiveIndex(index);
    if (swiperInstance) swiperInstance.slideTo(index);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 767;  
      const isTabDevice = window.innerWidth <= 1354;
      setIsMobile(isMobileDevice);
      setIsTab(isTabDevice);
    };
    handleResize();
  
    window.addEventListener("resize", handleResize);
  }, []);
  

  // useEffect(() => {
  //   const handleResize = () => {
  //     const isMobileDevice = window.innerWidth <= 500;
  //     const isTabDevice = window.innerWidth <= 1354;
  //     setIsMobile(isMobileDevice);
  //     setIsTab(isTabDevice);
  //   };
  //   handleResize();

  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <div className="PromisesAndCommitments">
      <div className="PromisesAndCommitmentsContainer">
        {/* Left Arrow Button (Hide on Mobile) */}
        {!isMobile && (
          <div className="scrollControllers">
            <IconButton onClick={goPrev}>
              <ArrowBackIcon />
            </IconButton>
          </div>
        )}

        <div className="PromisesAndCommitmentsContainerRight">
          <div className="SectionTitle">
            <h1>Why BidrYde?</h1>
            <p>Our Promise and commitments to you</p>
            <div className="divi">
              <Divider data={"home"} />
            </div>
          </div>

          <div className="CardSection">
          <Swiper
  modules={[Pagination, Navigation, Keyboard]}
  slidesPerView={isMobile ? 1 : isTab ? 2 : 3}
  spaceBetween={20}
  loop={true}
  pagination={isMobile ? { clickable: true } : false}  // ✅ dots सिर्फ mobile में enable
  grabCursor={true}
  keyboard={{ enabled: true }}
  onSwiper={(swiper) => setSwiperInstance(swiper)}
  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
>
  {cardsInfo.map((card) => (
    <SwiperSlide key={uid(card)}>
      <Card data={card} />
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>

        {/* Right Arrow Button (Hide on Mobile) */}
        {!isMobile && (
          <div className="scrollControllers">
            <IconButton onClick={goNext}>
              <ArrowForwardIcon />
            </IconButton>
          </div>
        )}
      </div>

      {/* Dash indicators only on Mobile */}
{/* Dash indicators only on screens ≤ 767px */}
{isMobile && window.innerWidth <= 767 && (
  <div className="dash-indicators">
    {cardsInfo.map((_, index) => (
      <div
        key={index}
        className={`dash ${activeIndex === index ? "active" : ""}`}
        onClick={() => handleDashClick(index)}
      ></div>
    ))}
  </div>
)}
       
    </div>
  );
};

export default PromisesAndCommitments;
