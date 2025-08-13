

import React from "react";
import "./BookNowCard.scss";
import Image from "next/image";
import { assets } from "@/assets";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Box, IconButton } from "@mui/material";

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
       className="BookNowCard_CloseButton"

        sx={{
          position: "absolute",
          top: 15,
          right: 40,
          zIndex: 10,
          color:'#fff',
        
          // backgroundColor: "rgba(255,255,255,0.8)",
          // "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
        }}
        onClick={handleClose}
      >
        <CloseIcon style={{  fontSize:'20px'}}/>
      </IconButton>

      <Grid
  container
  alignItems="flex-start"
  sx={{
    px: "32px", // left & right padding = 30px
    // py: { xs: 2, md: 4 }, // optional top & bottom padding
  }}
  className="BookNowCard_GridContainer"

>
  {/* LEFT IMAGE */}
  <Grid
  item
  xs={12}
  md={12}
  lg={6}
  sx={{
    display: { xs: 'none', sm: 'none', md: 'none' ,lg:'block'} // hide on <768px
  }}
>
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: { xs: 250, md: 400 },
    }}
    
  >
    <Image
      src="/images/iPhoneImage.png" 
      // alt="BidrYde Banner"
      // fill
      alt="My Image"
      width={400}
      height={300}
      style={{ objectFit: "cover"}}
    />
  </Box>
</Grid>



        {/* RIGHT TEXT */}
        <Grid item xs={12} md={12} lg={6} >
  {/* Title */}
  <Box
     
    >
  <h2 className="appTitle">Get the BidrYde App</h2>

  {/* Paragraph */}
  <div className="appDescription_parent">
  <p className="appDescription">
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it.
  </p>
  </div>

  {/* Offer */}
  <h3 className="offerMain">Upto ₹1000 OFF<span className="star">*</span>
  </h3>
  <p className="offerSub">on your first rYde</p>

  {/* Code box */}
  <Box className="codeContainer">
    <div className="codeLeft">Use Code</div>
    <div className="codeRight">RYDE1000</div>
  </Box>

  {/* Download text */}
  <p className="downloadLabel">Download app from</p>

  {/* Download buttons */}
  <Box className="BookNowCardMainContainer_Buttons" sx={{ mt: 1 }}>
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
  </Box>
</Grid>


      </Grid>
    </Box>
  );
}

export default BookNowCard;



