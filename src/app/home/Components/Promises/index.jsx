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
    image: assets.images.promisesAndCommitments.rideinfinitykmscard,
    firstLine: "Ride Infinity",
    secondLine: "Kilometers",
    overlayContent: {
      title: "Unlimited Adventures or Endless Journeys",
      content:
        "Whether it's a spontaneous road trip or an extensive travel plan, our infinity kilometers policy ensures you have the freedom to explore to your heart's content.",
    },
  },
  {
    image: assets.images.promisesAndCommitments.askyourpricecard,
    firstLine: "Ask your Price",
    secondLine: "",
    overlayContent: {
      title: "Your Price, Your Way",
      content:
        "With our innovative system, get the rental car at your affordable price. Simply tell us what you're willing to pay, and we'll work to match your offer.",
    },
  },
  {
    image: assets.images.promisesAndCommitments.zerosecuritydepositcard,
    firstLine: "Zero Security ",
    secondLine: "Deposit",
    overlayContent: {
      title: "Doorstep Delivery",
      content:
        "No need to navigate through traffic or visit rental offices – our team delivers the vehicle directly to your location at your preferred time, saving you time and effort.",
    },
  },
  {
    image: assets.images.promisesAndCommitments.freeCancellation,
    firstLine: "100% free cancellation",
    secondLine: "before 9 hours",
    overlayContent: {
      title: "100% free cancellation before 9 hours",
      content:
        "This policy ensures that your booking experience is risk-free, allowing you to plan with confidence. Experience worry-free planning with our 100% free cancellation policy, available up to 9 hours before your scheduled booking.",
    },
  },
  {
    image: assets.images.promisesAndCommitments.freeReschedule,
    firstLine: "Reschedule for",
    secondLine: "Free",
    overlayContent: {
      title: "Reschedule for Free",
      content:
        "Enjoy the flexibility of rescheduling without any additional fees! Life can be unpredictable, and we understand that plans might change. With our hassle-free policy, you can modify your booking dates at no extra cost.",
    },
  },
  {
    image: assets.images.promisesAndCommitments.zerosecuritydepositcard,
    firstLine: "Trust Over Deposits",
    secondLine: "Deposit",
    overlayContent: {
      title: "Trust Over Deposits",
      content:
        "Rent with ease, drive with peace of mind, and cherish every moment on the road with our no-security-deposit policy.",
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
      const isMobileDevice = window.innerWidth <= 767;  // ✅ पहले 500px था, अब 767px कर दिया
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
            <h1>Why BidrYde</h1>
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
