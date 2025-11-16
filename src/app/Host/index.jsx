"use client";
import React from "react";
import Image from "next/image";
import {
  CssButtonOutline,
  Divider,
  Footer,
  Navbar,
  SectionHeader,
} from "@/Components";
import "./Host.scss";
import { Box, Grid } from "@mui/material";
import { assets } from "@/assets";
import { Form, HostSquareCard } from "./components";
import { uid } from "react-uid";
import FloatingButton from "@/Components/FloatingButton";
import Faq from "../home/Components/Faq";
import Link from "next/link";

const hostImages = {
  hostIntroImage: assets.images.host.hostPageHeroBg,
  decorativeCircle: assets.images.joinWithUs.decorativeCircle,
  clarityFormLine: assets.images.host.clarityFormLine,
  convenienceIcon: assets.images.host.convenienceIcon,
  privacyIcon: assets.images.host.privacyIcon,
  hassleFreeIcon: assets.images.host.hassleFreeIcon,
  hosturcarResponsive: assets.images.host.hosturcarResponsive,
  hostArrow: assets.images.host.hostArrow,
  hosturcarResponsiveMob: assets.images.host.hosturcarResponsiveMob,
  paper: assets.images.host.paper,
  carVerified: assets.images.host.carVerified,
  handsshake: assets.images.host.handsshake,
  verifiedBadge: assets.images.host.verifiedBadge,
};

const features = [
  {
    img: hostImages.convenienceIcon,
    feature: "Transparent Earnings",
    description:
"Earn monthly payouts from bookings through the Host App, with complete transparency on customer payments."
  },
  {
    img: hostImages.hassleFreeIcon,
    feature: "Damages and General Servicing",
    description:
"We take responsibility for all damages and provide free general maintenance every 10,000 kms."  },
  {
    img: hostImages.hosturcarResponsive,
    feature: "Dedicated Support Manager",
    description:
"A dedicated Support Manager will handle all your hosting needs — from onboarding to payouts — ensuring a seamless hosting experience."  },
];

function Host() {
  return (
    <>
      <Navbar />
      <div className="hostLayout">
    
        <div className="left_right_margin"></div>
       

        <div className="hostIntro">
          <div className="hostIntroLeft">
            <div className="hostIntroHeader">
              <p className="p2">Earn ₹20K – ₹60K <br/> Monthly on Your Idle Car</p>
              <p className="p1">Turn your car into a money-making machine — let it <br/> pay its own EMIs and generate extra income for you!</p>
           
            </div>

            <Image src={hostImages.decorativeCircle} alt="avatar" className="hostCircle"/>
            {/* <div className="hostIntroIcon"> */}
          
              {/* <Image src={hostImages.decorativeCircle} alt="decorativeCircle" /> */}
              {/* <Link href="#InterestForm">
                <CssButtonOutline
                  title="Get Started"
                  backgroundColor="#FFFFFF"
                  textColor="#276EBC"
                  margin="0 0.8rem 0 0.8rem"
                  fontSize="1rem"
                  width="130px"
                  height="38px"
                  border="1px solid #276EBC"
                />
              </Link> */}
            {/* </div> */}
          </div>
          
          <div className="hostIntroRight">
            <Image src={hostImages.hostIntroImage} alt="hostIntroImage" />
          </div>
         
        </div>

        <div className="route">
          <div className="hostSectionHeader">
            <h1>Host Your Car</h1>
            <div style={{ display: 'inline-block' }}>

            <p className="p__header__host">Attach your idle car in just 3 simple steps</p>
       
              <Divider />
            </div>
          </div>

          <div className="stepsSection">
            <div className="steps">
              <div className="step__">
                <div className="icon__img">
                  <Image
                    alt="paper"
                    className="paper__img"
                    src={hostImages.paper}
                  />
                </div>
                <div className="matter__host">
                Join us by filling out the form, and our onboarding team will reach out to you.          </div>
              </div>

              <div className="step__ step__2">
                <div className="icon__img car__ver">
                  <Image
                    alt="badge"
                    className="verifiedBadge"
                    src={hostImages.verifiedBadge}
                  />
                  <Image
                    alt="paper"
                    className="paper__img"
                    src={hostImages.carVerified}
                  />
                </div>
                <div className="matter__host">
                Our team will book an appointment at your convenience to inspect and install a GPS device in your car.                </div>
              </div>

              <div className="step__ step__3">
                <div className="icon__img">
                  <Image
                    alt="handsshake"
                    className="paper__img"
                    src={hostImages.handsshake}
                  />
                </div>
                <div className="matter__host">
                Upon signing the agreement, your car will be onboarded to the Host App and ready to earn.
                </div>
              </div>
            </div>

            <Image
              className="decCircle"
              src={hostImages.decorativeCircle}
              alt="decorative circle"
              
            />
          </div>
        </div>

        <div className="hformSection">
          <div className="hformSectionLeft">
            <div className="hostIntroIcon">
            {/* <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { lg: 400, xl: 450 },
            }}
          >
            <Image
              src="/images/circles.png"
              alt="BidrYde Banner"
              fill
               className="decImg"
              // style={{ objectFit: "cover" }}
            />
          </Box> */}
              <Image
                className="decImg"
                
                src={hostImages.decorativeCircle}
                alt="decorativeCircle"
              
              />
            </div>
            <div className="formSectionHeader">
              <p className="p1">Your Car&#8217;s New Role</p>
              <p className="p2">Generating income as an asset</p>
            </div>
          </div>
          <div className="form" id="InterestForm">
            <Form />
          </div>
        </div>
        <div className="hostSection2">
          <div className="hostSectionH hostseader__ hostsecond">
            <h1 className="h1_headr__2">Why Host with Us?</h1>
            <div style={{ display: 'inline-block' }}>

            <p className="p__header__host">Trust and Transparency at the core</p>
            <Divider />
            </div>
          </div>
        </div>
        <div className="hostCardSection">
          <Grid container spacing={5} textAlign="center" direction="row">
            {features.map((item, index) => (
              <Grid key={uid(item)} item xs={12} sm={12} md={4} lg={4}>
                <HostSquareCard
                  img={item.img}
                  feature={item.feature}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <Faq  isHost={true}/> */}
        <div style={{paddingBottom:'1rem'}} className="home">
        <Faq data="home"/>
        </div>
        <Footer />
        <div className="floatingButton">
          <FloatingButton />
        </div>
      </div>
    </>
  );
}

export default Host;
