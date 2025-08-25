import React from "react";
import "./BookNowCard.scss";
import Image from "next/image";
import { assets } from "@/assets";
import CloseIcon from "@mui/icons-material/Close";
import { Grid, Box, IconButton } from "@mui/material";
// import clouds from "../../assets/images/JoinWithUs/clouds.png";
// import iPhoneImage from '../../../../assets/images/SearchPage/iPhoneImage.png';
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
        <CloseIcon style={{ fontSize: '25px' }} />
      </IconButton>

      <Grid
        container
        alignItems="flex-start"
        sx={{
          px: { xs: "8px", sm: "12px", md: "20px", lg: "22px" },
        }}
        className="BookNowCard_GridContainer"
      >
        {/* LEFT IMAGE - Only show on lg and above */}
        <Grid
          item
          xs={12}
          lg={6}
          xl={6}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }
          }}
          className="imgg"
        >

<Box className="imgParent"
            sx={{
            //   // position: "relative",
              width: "100%",
              height: { lg: 400, xl: 450 },
            }}
          >
            <Image
            className="phnImg"
              src={assets.images.iphoneImage}
              alt="BidrYde Banner"
              width={500}
              height={450}
               style={{ objectFit: "cover" }}
            />
          </Box>
          {/* <Box
            sx={{
            //   // position: "relative",
              width: "100%",
              height: { lg: 400, xl: 450 },
            }}
          >
            <Image
              src={iPhoneImage}
              alt="BidrYde Banner"
             width={500}
             height={450}
              style={{ objectFit: "cover" }}
            />
            {/* <img src="/images/iPhoneImage.png" alt="BidrYde Banner"  /> */}

          {/* </Box>  */}
        </Grid>

        {/* RIGHT TEXT */}
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}  sx={{
  '@media (min-width:1200px) and (max-width:1438px)': {
    flexBasis: '100% !important',
    maxWidth: '100% !important',
  },
  '@media (min-width:1439px)': {
    flexBasis: '50% !important',
    maxWidth: '50% !important',
  },
}}

  className="secondGrid">
          <Box>
            {/* Title */}
            <h2 className="appTitle">Get the BidrYde App</h2>
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
            <Box className="downloadParent">
              <button className="download">Download Now</button>
            </Box>
            {/* Paragraph */}
            {/* <div className="appDescription_parent">
              <p className="appDescription">
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it.
              </p>
            </div> */}

            {/* Offer */}
            <h3 className="offerMain">
              Upto ₹1000 OFF<span className="star">*</span>
            </h3>
            <p className="offerSub">only on Mobile App</p>

            {/* Code box */}
            <Box className="codeContainer">
              <div className="codeLeft">Use Code</div>
              <div className="codeRight">RYDE1000</div>
            </Box>

            <Box className="numberParent">
            <p className="offerSubSecond">connect with us</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div><svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="30" cy="30" r="30" fill="#EEEEEE"/>
<path d="M21.057 28.1748C23.5146 33.0047 27.4741 36.9471 32.304 39.4218L36.0586 35.6671C36.5194 35.2063 37.2021 35.0527 37.7994 35.2575C39.7109 35.889 41.776 36.2303 43.8922 36.2303C44.8309 36.2303 45.5989 36.9983 45.5989 37.937V43.8932C45.5989 44.8319 44.8309 45.5999 43.8922 45.5999C27.8666 45.5999 14.8789 32.6122 14.8789 16.5865C14.8789 15.6479 15.6469 14.8799 16.5856 14.8799H22.5589C23.4976 14.8799 24.2656 15.6479 24.2656 16.5865C24.2656 18.7199 24.6069 20.7679 25.2384 22.6794C25.4261 23.2767 25.2896 23.9423 24.8117 24.4202L21.057 28.1748Z" fill="black"/>
</svg>
</div>
              <h2 style={{color:'#fff',paddingLeft:'10px',fontWeight:'400'}}>80748 14296</h2>
            </div>
            </Box>

            {/* Download text */}
            {/* <p className="downloadLabel">Download app from</p> */}

            {/* Download buttons */}
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookNowCard;