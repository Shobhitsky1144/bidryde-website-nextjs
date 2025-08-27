import Image from "next/image";
import React from "react";
import "./Card.scss";

// const CardNumber = ({ value }) => {
//   const numberClass = `digit-${value + 1}`;
//   return (
//     <h1
//       className={`${
//         value % 2 === 0 ? "translateLeft" : "translateRight"
//       } ${numberClass}`}
//     >
//       0{value + 1}
//     </h1>
//   );
// };

const Card = ({ data, index }) => {
  return (
    <div
      className={`card card-${index + 1} ${
        index % 2 !== 0 ? "leftShadow" : "rightShadow"
      }`}
    >
      <div className={`cardContainer ${index==3 ?"fourth":""}`}>
        {/* <CardNumber value={index} /> */}
        <h1 className={`cardHeading ${
    index % 2 === 0 ? "translateLeft" : "translateRight"
  }`}>0{index+1}</h1>
        <Image
          src={data.image}
          alt={`Card Image ${index + 1}`}
          className={`cardImage cardImage-${index + 1}`}
        />
        <h6 className={`cardText firstLine firstLine-${index + 1} ${index==1 ?"secondImgFirstLine":""}`}>
          {data.firstLine}
        </h6>
        {data.secondLine && (
          <h6 className={`cardText secondLine ${index==1 ?"secondImgSecondLine":""}`}>{data.secondLine}</h6>
        )}
         {data?.thirdLine && (
          <h6 className="cardText secondLine">{data?.thirdLine}</h6>
        )}
      </div>
    </div>
  );
};

export default Card;
