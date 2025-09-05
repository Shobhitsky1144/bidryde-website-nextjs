"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./TrendingOffers.scss";
import { Divider } from "@/Components";
import offer1 from "@/assets/images/TrendingOffers/offer1.png";
import offer2 from "@/assets/images/TrendingOffers/offer2.png";

const TrendingOffers = () => {
  const [trendingOffers, setTrendingOffers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const staticOffers = [
    {
      title: "First Ride",
      content: "30% off on every drive",
      code: "RYD01",
      validity: "valid till 15 November",
      photo_url: offer1,
    },
    {
      title: "Diwali Offer",
      content: "20% off on every drive",
      code: "DIW01",
      validity: "valid till 15 November",
      photo_url: offer2,
    },
    {
      title: "Special Offer",
      content: "25% off on every drive",
      code: "SPC01",
      validity: "valid till 15 November",
      photo_url: offer2,
    },
    {
      title: "Mega Offer",
      content: "40% off on every drive",
      code: "MEG01",
      validity: "valid till 15 November",
      photo_url: offer2,
    },
  ];

  useEffect(() => {
    setTrendingOffers(staticOffers);

    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1);
      else if (window.innerWidth < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(trendingOffers.length / cardsPerSlide);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextSlide();
      } else if (e.key === "ArrowLeft") {
        goToPrevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSlides]);

  return (
    <div className="trendingOffers">
      <div className="trendingOffersContainer">
        <div className="SectionTitle">
          <h1>Trending Offers</h1>
          <p>Shift into saving gears for your next car rental</p>
          <Divider />
        </div>

        <div className="carousel">
          <div
            className="carouselTrack"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {trendingOffers.map((offer, index) => (
              <div
                className="trendingCardContainer"
                key={index}
                style={{
                  flex: `0 0 ${100 / cardsPerSlide}%`,
                  margin: "2px 8px", // horizontal spacing
                }}
              >
                <Image
                  src={offer.photo_url}
                  alt={offer.title}
                  className="offerImage"
                  width={180}
                  height={210}
                />
                <div className="offerContent">
                  <h3>{offer.title}</h3>
                  <p className="offer_desc">{offer.content}</p>
                  <p className="customOfferCode">Code: {offer.code}</p>
                  <p className="customOfferValidity">{offer.validity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingOffers;
