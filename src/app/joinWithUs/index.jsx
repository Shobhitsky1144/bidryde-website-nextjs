import React from "react";
import "./JoinWithUs.scss";
import Image from "next/image";

import { RectangularCard, Form } from "./components";

import { assets } from "@/assets";
import { Divider, Footer, Navbar, SectionHeader } from "@/Components";
import { uid } from "react-uid";
import FloatingButton from "@/Components/FloatingButton";
import clouds from "../../assets/images/JoinWithUs/clouds.png";
import YouTubeEmbed from "./components/YoutubeEmbed";


const JoinWithUsAssets = {
  INTRO_IMAGE: assets.images.joinWithUs.aboutusHero,
  BookingShareIllus: assets.images.joinWithUs.bookingShareIllus,
  DecorativeCircle: assets.images.joinWithUs.decorativeCircle,
  OrganicReach: assets.images.joinWithUs.illus02,
  MinimalBussiness: assets.images.joinWithUs.illus03,
  Branding: assets.images.joinWithUs.illus04,
  Dashboard: assets.images.joinWithUs.illus05,
 
};

const cardData = [
  {
    title: "No CIBIL Score Required",
    text: "BNo credit score? No problem. Take a loan against your car without worrying – BidrYde FinCorp approves loans based on your car, not your credit history.",
    illustration: JoinWithUsAssets.OrganicReach,

  },
  {
    title: "Instant Loan Disbursal",
    text: "Get your car loan instantly – complete the simple documentation, and your car loan is disbursed instantly within 10 minutes.",
    illustration: JoinWithUsAssets.BookingShareIllus,

  },
  {
    title: "Car Pays Its Own Loan",
    text: "Your car’s earnings through rentals contribute to repaying your loan – up to ₹5 per kilometer automatically reduces your loan principal amount.",
    illustration: JoinWithUsAssets.MinimalBussiness,
  },
  {
    title: "Zero EMIs – Pay Monthly Interest Only",
    text: "Why struggle with heavy EMIs that eat up your monthly savings? Pay only monthly interest – your car’s earnings will take care of loan principal amount.",
    illustration: JoinWithUsAssets.Branding,
  },
  {
    title: "No Foreclosure charges & Lock-In Period",
    text: "Take back your car anytime – no foreclosure fees, no lock-in periods and no extra costs for early loan closure, with complete control remain in your hands.",
    illustration: JoinWithUsAssets.Dashboard,
  },
];

function JoinWithUs() {
  return (
    <>     <Navbar />
    <div className="joinWithUsLayout">
    
      <div className="left_right_margin">
      <div className="intro">
     
        <div className="clouds clouds_mobile">
        {/* <Image 
    src={clouds} 
    width={500} 
    height={500} 
    alt="Intro Image" 
  /> */}

        </div>
        <div className="intro_content">
          <div className="intro_text">
            {/* <p>
              <span>BidRyde</span> is a car-sharing marketplace where you can
              book any car you have,host any car you have. The doorstep delivery and collection of
              cars is our standard way of serving our customers, and it&apos;s
              available throughout Bidryde&apos;s service areas.
            </p> */}
            <h1 style={{color:'#fff'}}>
            India’s First Smart Car Loan

that pays itself !
            </h1>
            <h3 style={{color:'#FFC727F2',paddingTop:'1rem',paddingBottom:'2rem',fontSize:'19px',fontWeight:'300'}}>
            Get Instant cash by keeping your car — and let it repay loan itself for every kilometer it runs.
            </h3>

            <button className="common_btn">Apply for Loan</button>
          </div>

          {/* <div> */}
          {/* <div className="cloudsz">
        <Image 
    src={clouds} 
    width={500} 
    height={50} 
    alt="Intro Image" 
  />
     </div> */}
     
     <div className="intro_image">
     <div className="clouds cloud_web">
        

        </div>
        
     
           <Image src={JoinWithUsAssets.INTRO_IMAGE} alt="Intro Image" />
         </div>
          {/* </div> */}
        
        
        </div>
      </div>
      {/* <div className="sectionHeader">
        <SectionHeader
          title="Join with us"
          tagLine="Empowering self-drive car rentals"
          center
        />
      </div> */}

          <div className="joinSectionHeader__top">
            <h1 align="center">Why BidrYde FinCorp?</h1>
            <p className="p__header__join__top" align="center">Empowering You to Borrow Car Loan Smarter</p>
            <Divider data="about"/>
          </div>
      <div className="cards">
        {/* <p>BidRyde Pioneers</p>
        <p className="p">Self-Drive Rental Business Aggregation</p> */}
        {cardData.map((data, index) => (
          <RectangularCard
            key={uid(data)}
            switchDirection={index % 2 != 0}
            title={data.title}
            text={data.text}
            illustration={data.illustration}
          />
        ))}
      </div>


<div className=" work_parent">
<h1 align="center">How it works?</h1>
            <p className="p__header__join__top" align="center">Watch how BidrYde FinCorp works in a video<br/> 
            
            <Divider data="about"/> 
            </p>
           
<div className="btn_grp">
  <div className="english_section">
  <button className="common_btn englishBtn" >English</button>

  <div style={{paddingTop:'3rem'}}>
  <YouTubeEmbed videoId="dQw4w9WgXcQ" />
    </div>

  </div>
  <div className="telugu_section">
  <button className="common_btn teluguBtn" >Telugu</button>
  <div style={{paddingTop:'3rem'}}>
  <YouTubeEmbed videoId="dQw4w9WgXcQ" />
    </div>
  </div>
</div>
          
          

</div>

      <div className="formSection">
        <div className="heading">
          {/* <SectionHeader
            title="Ready to partner for sucess?"
            tagLine=""
          /> */}
          <div className="joinSectionHeader__bottom">
            <h1>Experience Smart Financing!</h1>
            <div className="joinSectionHeader__bottom_parent" style={{width:'fit-content'}}> 

            <p className="p__header__join__bottom">Reach out to know more about BidrYde FinCorp</p>
          
            <Divider data="about"/>
              </div>
            {/* </div> */}
           
          </div>
          <Image src={JoinWithUsAssets.DecorativeCircle} alt="avatar" className="formImg" />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>

      </div>
      <Footer />
      <div className="floatingButton">
        <FloatingButton />
      </div>
    </div>
  
    </>
    );
}

export default JoinWithUs;
