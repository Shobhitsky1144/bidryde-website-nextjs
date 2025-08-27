"use client";

import React from "react";
import { assets } from "@/assets";
import "./HeroSection.scss";

import { useRouter } from "next/navigation";
import Image from "next/image";
import LocationDateTimePickerHome from "@/Components/LocationDateTimeHome";
import { setCookie } from "cookies-next";

const HeroSection = () => {
  const router = useRouter();

  const handleGetYourCar = (searchObj) => {
    setCookie("carSearchParams", JSON.stringify(searchObj));
    router.push("/SearchPage");
  };

  return (
    <section className="heroSection" role="banner" aria-label="Hero Section">
      <div className="heroSectionContainer">
        <div className="heroSectionContainer__left">
          <h1>BID YOUR RYDE</h1>
          <p>Best self-drive car rentals at affordable prices</p>
          <div className="heroSectionContainer__right">
            <Image
              src={assets.images.heroBgWeb}
              alt="Hero section illustration"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="heroSectionContainer__left-middle">
            <p>App available on</p>
            <div className="heroSectionContainer__left-middleLogos">
              <a
                href="https://play.google.com/store/apps/details?id=com.bidryde.customer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Play Store"
              >
                <Image
                  src={assets.images.GoogleButton}
                  alt="Download from Google Play"
                  width={150}
                  height={50}
                />
              </a>
              <a
                href="https://apps.apple.com/us/app/bid-ryde-self-drive-cars/id6448796800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apple App Store"
              >
                <Image
                  src={assets.images.AppleButton}
                  alt="Download from App Store"
                  width={150}
                  height={50}
                />
              </a>
            </div>
          </div>
          <div className="heroSectionContainer__left-bottom">
            <p>Reserve your drive now</p>
            <LocationDateTimePickerHome actionHandler={handleGetYourCar} data="homeSearchBtn" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
