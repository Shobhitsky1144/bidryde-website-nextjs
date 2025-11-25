"use client";


import React from "react";
import Grid from "@mui/material/Grid";
import { assets } from "@/assets";

const footerAssets = {
  carLogo: assets.images.footer.blueLogoTransp2,
  bidrydeLogo: assets.images.footer.blueWordmarkTransp2,
  fbIcon: assets.images.footer.facebook,
  twitter: assets.images.footer.twitter,
  linkedIn: assets.images.footer.linkedinIn,
  youtube: assets.images.footer.youtube,
  instagram: assets.images.footer.instagram,
  mailIcon: assets.images.footer.mailIcon,
  hillview: assets.images.footer.hillview, // Path to the hillview image
};

import "./Footer.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
 
  const handleEmailClick = () => {
    const gmailURL =
      "https://mail.google.com/mail/?view=cm&fs=1&to=support@bidryde.in&su=Support%20Request&body=Hi%20BidRyde%20Team,";
    window.open(gmailURL, "_blank", "noopener,noreferrer");
  };

  // ☎️ Handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:04048957007";
  };
  return (
    <div className="footer">
      <Grid container className="x" style={{paddingBottom:'60px'}}>
        <Grid item style={{width:'100%',paddingTop:'30px'}}> 
          <div className="footerLeft">
            <div className="footerLogo">
              <Image src={footerAssets.carLogo} alt="Car Logo" />
            </div>
            <p className="footerText ">
              A self-drive car rental platform where
             you can book any car you want and at the 
              same time, host any car you have.

            
            </p>


            <div className="socialIcons">
              <Grid container spacing={0}>
                <Grid item >
                  <a
                  
                    href="https://www.facebook.com/bidryde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={footerAssets.fbIcon} alt="facebook" className="socialImg"/>
                  </a>
                </Grid>
                <Grid item >
                  <a
                    href="https://twitter.com/bidryde/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={footerAssets.twitter} alt="X" className="socialImg"/>
                  </a>
                </Grid>
                <Grid item >
                  <a
                    href="https://www.linkedin.com/company/bidryde/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={footerAssets.linkedIn} alt="linkedIn" className="socialImg"/>
                  </a>
                </Grid>
                <Grid item >
                  <a
                    href="https://youtube.com/@bidryde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={footerAssets.youtube} alt="youtube" className="socialImg"/>
                  </a>
                </Grid>
                <Grid item >
                  <a
                    href="https://www.instagram.com/bidryde/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={footerAssets.instagram} alt="instagram" className="socialImg"/>
                  </a>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item className="linkSectionContainer" style={{paddingTop:'30px'}}>
       

          <Grid item>
            <div className="linkSection quicklinks text-center">
              <h4
                style={{
                  color: "#276EBC",
                  marginBottom: "0.7rem",
                  fontSize: "18px",
                }}
              >
                Policies
              </h4>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Link href="/terms-of-service" className="footerLink">
                    Terms of Service
                  </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Link href="/privacy-policy" className="footerLink">
                    Privacy Policy
                  </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Link href="/fee-policy" className="footerLink">
                    Fees Policy
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item>
            <div className="linkSection ">
              <h4
                style={{
                  color: "#276EBC",
                  marginBottom: "0.7rem",
                  fontSize: "18px",
                }}
              >
                Quick links
              </h4>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <Link href="/Host" className="footerLink">
                  Attach your Car
                  </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Link href="/fincorp" className="footerLink">
                  FinCorp                  </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Link href="/faq" className="footerLink">
                    FAQ&apos;s
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid container justifyContent={{ xs: "flex-start", sm: "flex-start", md: "flex-start",lg: "flex-end" }} className="numberemailparent">

        <Grid item  >
        <div className="footerRight">
  <Grid container className="iconGrid">
    <Grid item className="iconGridItem">
      <div className="iconContent"   onClick={handlePhoneClick}
                style={{ cursor: "pointer" }}>
        <svg
          className="milIconImg"
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="125"
          viewBox="0 0 125 125"
          fill="none"
        >
          <circle cx="62.5" cy="62.5" r="62.5" fill="#EEEEEE" />
          <path
            d="M43.8711 58.6978C48.9911 68.76 57.24 76.9733 67.3022 82.1289L75.1244 74.3067C76.0844 73.3467 77.5067 73.0267 78.7511 73.4533C82.7333 74.7689 87.0356 75.48 91.4444 75.48C93.4 75.48 95 77.08 95 79.0356V91.4444C95 93.4 93.4 95 91.4444 95C58.0578 95 31 67.9422 31 34.5556C31 32.6 32.6 31 34.5556 31H47C48.9556 31 50.5556 32.6 50.5556 34.5556C50.5556 39 51.2667 43.2667 52.5822 47.2489C52.9733 48.4933 52.6889 49.88 51.6933 50.8756L43.8711 58.6978Z"
            fill="#276EBC"
          />
        </svg>
        <p className="iconText">0404 895 7007</p>
      </div>
    </Grid>

    <Grid item className="iconGridItem">
      <div className="iconContent"   onClick={handleEmailClick}  style={{ cursor: "pointer" }}>
        <Image
          src={footerAssets.mailIcon}
          alt="mailIcon"
          className="milIconImg"
        />
        <p className="iconText">support@bidryde.in</p>
      </div>
    </Grid>
  </Grid>
</div>

</Grid>
        </Grid>
      </Grid>

      <div className="line"></div>

      <div className="copy_right_text">
        © Bidryde Mobility Technologies Private Limited. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
