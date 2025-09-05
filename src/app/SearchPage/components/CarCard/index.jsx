import React from "react";
import "./CarCard.scss";
import { CssButtonSolid } from "../../../../Components/CssButton";

import { assets } from '@/assets'
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const SearchPageAssets = {
  FuelIcon: assets.images.searchPage.fuelIcon,
  GearIcon: assets.images.searchPage.manualTransmission,
  SeaterIcon: assets.images.searchPage.seaterIcon,
  CarIcon: assets.images.searchPage.hatchback,


  graySeaterIcon: assets.images.searchPage.graySeaterIcon,
  grayFuelIcon: assets.images.searchPage.grayFuelIcon,
  grayGearIcon: assets.images.searchPage.grayGearIcon,

  democar:assets.images.democar
}

function CarCard({ image, carName, rating, bidrydePrice, price, fuel, gear, seat, originalPrice, onBookNow}) {

  const handleBookNowClick = () => {
    onBookNow()
  }

  return (
    <div className="carCardContainer">
      <div className="imgContainer">
        {/* <Image src={SearchPageAssets.democar} alt={carName}   width="100%"
              height="100%"  className="imgContainer_img" /> */}

              <img src={image} alt={carName}  className="imgContainer_img" />
      </div>
      <div className="textContainer">
        <div className="miniContainer1">
          <p className="textStyling">{carName}</p>
          <span className="starparent">
  <FaStar className="star" /> 
  <span className="rating-number">4.3</span>
</span>


        </div>
        <div className="miniContainer1">
          <div className="iconText">
            <Image src={SearchPageAssets.graySeaterIcon} alt="seater"  unoptimized
  style={{ filter: "grayscale(100%)" }}/>
            <p>{seat}</p>
          </div>
          <div className="iconText">
            <Image src={SearchPageAssets.grayFuelIcon} alt="fuel" />
            <p>{fuel}</p>
          </div>
          <div className="iconText">
            <Image src={SearchPageAssets.grayGearIcon} alt="gear" />
            <p>{gear}</p>
          </div>



        </div>
        <div className="priceActionContainer">

          <div className="prices"><p className="priceStyle">
            &#8377;{bidrydePrice} 
            {/* /hr  */}
            {/* 4,000 */}
            </p>
            {/* <p className="originalPrice">&#8377;{price} /hr </p> */}
          </div>

          <CssButtonSolid
            title="Book Now"
            backgroundColor="#276EBC"
            textColor="#fff"
            // margin="0 1rem 0 1rem"
            fontSize="18px"
            width="100%"
            height="45px"
            border="1px solid #276EBC"
            onClick={handleBookNowClick}
          />
        </div>
      </div>
    </div>
  );
}

export default CarCard;
