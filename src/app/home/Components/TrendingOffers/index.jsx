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
  const [cardsPerSlide, setCardsPerSlide] = useState(3); // 👈 default 3 cards per slide

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
      title: "Holiday Special",
      content: "25% off on every drive",
      code: "HOL01",
      validity: "valid till 15 November",
      photo_url: offer2,
    },
  ];

  useEffect(() => {
    setTrendingOffers(staticOffers);

    // Adjust cards per slide based on screen width
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1);
      else if (window.innerWidth < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3); // 👈 show 3 cards on large screens
    };

    updateCardsPerSlide();
    window.addEventListener("resize", updateCardsPerSlide);

    return () => window.removeEventListener("resize", updateCardsPerSlide);
  }, []);

  const totalSlides = Math.ceil(trendingOffers.length / cardsPerSlide);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 3000);
    return () => clearInterval(interval);
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
          <div className="trendingOffersContainerCards">
            {trendingOffers
              .slice(
                currentSlide * cardsPerSlide,
                currentSlide * cardsPerSlide + cardsPerSlide
              )
              .map((offer, index) => (
                <div className="trendingCardContainer" key={index}>
                  <Image
                    src={offer.photo_url}
                    alt={offer.title}
                    className="offerImage"
                    width={180}
                    height={210}
                  />
                  <div className="offerContent">
                    <h3>{offer.title}</h3>
                    <p>{offer.content}</p>
                    <p className="customOfferCode">Code: {offer.code}</p>
                    <p className="customOfferValidity">{offer.validity}</p>
                  </div>
                </div>
              ))}
          </div>

          <div className="dots">
  {(totalSlides > 1 && !(cardsPerSlide === 3 && trendingOffers.length <= 3)) && (
    Array.from({ length: totalSlides }).map((_, i) => (
      <span
        key={i}
        className={`dot ${i === currentSlide ? "active" : ""}`}
        onClick={() => setCurrentSlide(i)}
      ></span>
    ))
  )}
</div>

        </div>
      </div>
    </div>
  );
};

export default TrendingOffers;
