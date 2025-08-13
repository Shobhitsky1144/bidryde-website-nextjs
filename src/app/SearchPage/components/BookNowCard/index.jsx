import React from "react";
import "./BookNowCard.scss";
import Image from "next/image";
import { assets } from "@/assets";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Box, IconButton } from "@mui/material";
// import iPhoneImage from '../../../../assets/images/SearchPage/iPhoneImage.png';

function BookNowCard({ onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Box
      className="BookNowCardMainContainer"
      sx={{
        position: "relative",
        padding: { xs: 1, sm: 1.5, md: 2 },
      }}
    >
      {/* Close Button absolute to whole card */}
      <IconButton
        className="BookNowCard_CloseButton"
        sx={{
          position: "absolute",
          top: { xs: 8, sm: 12, md: 15 },
          right: { xs: 8, sm: 15, md: 40 },
          zIndex: 10,
          color: '#fff',
        }}
        onClick={handleClose}
      >
        <CloseIcon style={{ fontSize: '20px' }} />
      </IconButton>

      <Grid
        container
        alignItems="flex-start"
        sx={{
          px: { xs: "8px", sm: "12px", md: "20px", lg: "32px" },
        }}
        className="BookNowCard_GridContainer"
      >
        {/* LEFT IMAGE - Only show on lg and above */}
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { lg: 400, xl: 450 },
            }}
          >
            <Image
              src={'/images/iPhoneImage.png'}
              alt="BidrYde Banner"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Grid>

        {/* RIGHT TEXT */}
        <Grid item xs={12} lg={6}>
          <Box>
            {/* Title */}
            <h2 className="appTitle">Get the BidrYde App</h2>

            {/* Paragraph */}
            <div className="appDescription_parent">
              <p className="appDescription">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it.
              </p>
            </div>

            {/* Offer */}
            <h3 className="offerMain">
              Upto ₹1000 OFF<span className="star">*</span>
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