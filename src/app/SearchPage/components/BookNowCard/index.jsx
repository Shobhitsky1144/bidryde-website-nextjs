

import React from "react";
import "./BookNowCard.scss";
import Image from "next/image";
import { assets } from "@/assets";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Box, IconButton } from "@mui/material";
import iPhoneImage from '../../../../assets/images/SearchPage/iPhoneImage.png';

function BookNowCard({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Box
      className="BookNowCardMainContainer"
      sx={{
        position: "relative",
        padding: 2,
      }}
    >
      {/* Close Button absolute to whole card */}
      <IconButton
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 10,
          color:'#fff',
          // backgroundColor: "rgba(255,255,255,0.8)",
          // "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>

      <Grid container spacing={0} alignItems="center">
        {/* LEFT IMAGE */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 250, md: 400 },
            }}
          >
            <Image
              // src={assets.images.searchPage.iPhoneImage} // your image here
              src={iPhoneImage}
              alt="BidrYde Banner"
              fill
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </Box>
        </Grid>

        {/* RIGHT TEXT */}
        <Grid item xs={12} md={6} lg={6}>
          <h5 className="titleStyling" style={{ fontFamily: "Krona One" }}>
            Get the BidrYde App
          </h5>
          {/* <h1 className="titleStyling">Available on</h1> */}

    

          {/* <h3 className="OfferTextStyling" style={{ marginTop: 16 }}>
            Use &quot; RYDE10&quot;, Get 10% OFF
          </h3> */}

          <Box className="BookNowCardMainContainer_Buttons" sx={{ mt: 2 }}>
            <a
              href="https://play.google.com/store/apps/details?id=com.bidryde.customer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.images.GoogleButton}
                alt="google download button"
              />
            </a>

            <a
              href="https://apps.apple.com/us/app/bid-ryde-self-drive-cars/id6448796800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={assets.images.AppleButton}
                alt="apple download button"
              />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookNowCard;




// import React from "react";


// import "./BookNowCard.scss";
// import Image from "next/image";
// import { assets } from "@/assets";
// import CloseIcon from "@mui/icons-material/Close";

// function BookNowCard({onClose}) {

//     const handleClose  = () => {
//         onClose()
//     }

//   return (
//     <div className="BookNowCardMainContainer">
//       <div className="BookNowCardMainContainer_closeButton">
//         <CloseIcon onClick= {handleClose} />
//       </div>
//       <h1 className="titleStyling" style={{fontFamily:"Krona One"}}>BidrYde</h1>
//       <h1 className="titleStyling">Available ond</h1>
//       <div className="BookNowCardMainContainer_Buttons">
//         <a
//           href="https://play.google.com/store/apps/details?id=com.bidryde.customer"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             src={assets.images.GoogleButton}
//             alt="google download button"
//           />
//         </a>

//         <a
//           href="https://apps.apple.com/us/app/bid-ryde-self-drive-cars/id6448796800"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {" "}
//           <Image
//             src={assets.images.AppleButton}
//             alt="apple download button"
//           />{" "}
//         </a>
//       </div>
//       <h3 className="OfferTextStyling">Use &quot; RYDE10&quot;, Get 10% OFF</h3>
//     </div>
//   );
// }

// export default BookNowCard;
