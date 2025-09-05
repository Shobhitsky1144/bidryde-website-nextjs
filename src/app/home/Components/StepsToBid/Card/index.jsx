import Image from "next/image";
import React from "react";
import "./Card.scss";

const Card = ({ data, index }) => {
  return (
    <div
    className={`card card-${index + 1} ${
      index % 2 !== 0 ? "leftShadow" : "rightShadow"
    }`}
  >
    {/* 🔹 Wedge pehle add karo */}
 
  
    {/* 🔹 Card content upar rahega */}
    <div className={`cardContainer ${index == 3 ? "fourth" : ""}`}>
      <h1
        className={`cardHeading ${
          index % 2 === 0 ? "translateLeft" : "translateRight"
        }`}
      >
        0{index + 1}
      </h1>
      <Image
        src={data.image}
        alt={`Card Image ${index + 1}`}
        className={`cardImage cardImage-${index + 1}`}
      />
      <h6
        className={`cardText firstLine firstLine-${index + 1} ${
          index == 1 ? "secondImgFirstLine" : ""
        }`}
      >
        {data.firstLine}
      </h6>
      {data.secondLine && (
        <h6
          className={`cardText secondLine ${
            index == 1 ? "secondImgSecondLine" : ""
          }`}
        >
          {data.secondLine}
        </h6>
      )}
      {data?.thirdLine && (
        <h6 className="cardText secondLine">{data?.thirdLine}</h6>
      )}
    </div>
    
  </div>
  
  
  );
};

export default Card;



// import Image from "next/image";
// import React from "react";
// import "./Card.scss";

// const Card = ({ data, index }) => {
//   return (
//     <div
//       className={`card card-${index + 1} ${
//         index % 2 !== 0 ? "leftShadow" : "rightShadow"
//       }`}
//     >
//       {/* 🔹 Blue SVG shape */}
//       <div className="cardShape">
//         <svg
//           width="311"
//           height="356"
//           viewBox="0 0 311 356"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g filter="url(#filter0_d_1_20167)">
//             <path
//               d="M432.09 110.727L212.779 50.1515C200.082 46.6443 186.471 49.6138 176.388 58.0913L65.1946 151.581C40.5442 172.306 49.2437 212.179 80.2868 220.753L378.917 303.237L432.09 110.727Z"
//               fill="#276EBC"
//             />
//           </g>
//           <defs>
//             <filter
//               id="filter0_d_1_20167"
//               x="0.916016"
//               y="0.707275"
//               width="481.174"
//               height="354.53"
//               filterUnits="userSpaceOnUse"
//               colorInterpolationFilters="sRGB"
//             >
//               <feFlood floodOpacity="0" result="BackgroundImageFix" />
//               <feColorMatrix
//                 in="SourceAlpha"
//                 type="matrix"
//                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//                 result="hardAlpha"
//               />
//               <feOffset dy="2" />
//               <feGaussianBlur stdDeviation="25" />
//               <feComposite in2="hardAlpha" operator="out" />
//               <feColorMatrix
//                 type="matrix"
//                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
//               />
//               <feBlend
//                 mode="normal"
//                 in2="BackgroundImageFix"
//                 result="effect1_dropShadow_1_20167"
//               />
//               <feBlend
//                 mode="normal"
//                 in="SourceGraphic"
//                 in2="effect1_dropShadow_1_20167"
//                 result="shape"
//               />
//             </filter>
//           </defs>
//         </svg>
//       </div>

//       {/* 🔹 Card Content */}
//       <div className={`cardContainer ${index == 3 ? "fourth" : ""}`}>
//         <h1
//           className={`cardHeading ${
//             index % 2 === 0 ? "translateLeft" : "translateRight"
//           }`}
//         >
//           0{index + 1}
//         </h1>
//         <Image
//           src={data.image}
//           alt={`Card Image ${index + 1}`}
//           className={`cardImage cardImage-${index + 1}`}
//         />
//         <h6
//           className={`cardText firstLine firstLine-${index + 1} ${
//             index == 1 ? "secondImgFirstLine" : ""
//           }`}
//         >
//           {data.firstLine}
//         </h6>
//         {data.secondLine && (
//           <h6
//             className={`cardText secondLine ${
//               index == 1 ? "secondImgSecondLine" : ""
//             }`}
//           >
//             {data.secondLine}
//           </h6>
//         )}
//         {data?.thirdLine && (
//           <h6 className="cardText secondLine">{data?.thirdLine}</h6>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;
