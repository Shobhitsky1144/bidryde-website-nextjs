"use client";
import React, { useState } from "react";
import "./Faq.scss";
import { CollapsiblePanel, CssButtonOutline, Divider } from "@/Components";
import { assets } from "@/assets";
import Image from "next/image";
import { uid } from "react-uid";
import { useRouter } from "next/navigation";

const faqs = [
  {
    name: "General",
    icon: assets.images.faq.faqGeneralCategoryIcon,
    questions: [
      {
        header: "What is BidrYde?",
        content: "BidrYde is a car-sharing platform where you can book any car you want and at the same time, host any car you have. Bookings are made through the mobile app, with the flexibility of self-pickup and doorstep delivery — so you can focus on what truly matters: your ride!",
      },
      {
        header: "Is there a km limit to how much I can drive?",
        content: "We offer UNLIMITED KILOMETERS irrespective of the booking duration. No additional charge will be applicable for the driven KMs.",
      },
      {
        header: "Is BidrYde operational 24/7?",
        content: "Yes, we are available 24/7 throughout the year.",
      },
    ],
  },
  {
    name: "Bid",
    icon: assets.images.faq.faqBidCategoryIcon,
    questions: [
      {
        header: "What is bidryde?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "What types of vehicle does Bidryde provide?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "Do the vehicles have manual or automatic transmission?",
        content: "Best car rentals at affordable price",
      },
    ],
  },
  {
    name: "Trip",
    icon: assets.images.faq.faqTripCategoryIcon,
    questions: [
      {
        header: "What is bidryde?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "What types of vehicle does Bidryde provide?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "Do the vehicles have manual or automatic transmission?",
        content: "Best car rentals at affordable price",
      },
    ],
  },
  {
    name: "Account",
    icon: assets.images.faq.faqAccountCategoryIcon,
    questions: [
      {
        header: "What is bidryde?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "What types of vehicle does Bidryde provide?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "Do the vehicles have manual or automatic transmission?",
        content: "Best car rentals at affordable price",
      },
    ],
  },
  {
    name: "Delivery & Collection",
    icon: assets.images.faq.faqDeliveryCategoryIcon,
    questions: [
      {
        header: "What is bidryde?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "What types of vehicle does Bidryde provide?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "Do the vehicles have manual or automatic transmission?",
        content: "Best car rentals at affordable price",
      },
    ],
  },
  {
    name: "Payment & Charges",
    icon: assets.images.faq.faqPaymentCategoryIcon,
    questions: [
      {
        header: "What is bidryde?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "What types of vehicle does Bidryde provide?",
        content: "Best car rentals at affordable price",
      },
      {
        header: "Do the vehicles have manual or automatic transmission?",
        content: "Best car rentals at affordable price",
      },
    ],
  },
];

const faqsHost= [
  {
    name: "General",
    icon: assets.images.faq.faqGeneralCategoryIcon,
    questions: [
      {
        header: "What is the BidrYde Host Program and how does it work?",
        content:         "BidrYde Host is a car-sharing program that allows car owners (hosts/lessors) to list their vehicles on the BidrYde platform and earn money by renting them out to customers on an hourly basis. This helps you reduce ownership and maintenance costs while generating additional income.\n\nHow it works:\n• Sign Up: Visit the BidrYde website or app and click on “Attach your Car.” Fill out the basic details in the signup form.\n• Onboarding: Our team will book an appointment at your convenience to inspect your vehicle and install a GPS device.\n• Agreement & Start Earning: After signing the agreement, your car will be added to the BidrYde Host app and you will receive confirmation. Log in to the Host app and start earning by renting out your vehicle."

      },
      {
        header: "When will I receive pay-outs from BidrYde?",
        content:         "You will receive your payout of 60% booking revenue share earned from each booking either weekly or monthly, as per your agreement. You can track all your earnings and payouts anytime in the “Earnings” section of the BidrYde Host app.",

      },
      {
        header: "Who will be responsible for the service and maintenance?",
        content:        "For every 10,000Kms Engine Oil, Oil Filter, Air Filter, AC Filter, Coolant, Break and Clutch oil top-up, Distilled water refill, Wheel Alignment and Balancing will be serviced as part of General Maintenance will be borne by BidrYde.",

      },
    ],
  }]

const Faq = ({data,isHome}) => {
  const [questions, setQuestions] = useState(isHome ? faqs[0].questions : faqsHost[0].questions );
  const [activeChip, setActiveChip] = useState("General");
  const router = useRouter();

  const handleFaqChange = (faq) => {
    setActiveChip(faq.name);
    setQuestions(faq.questions);
  };

  const handleViewAllClick = () => {
    if(data=="home" && isHome==true){
      router.push("/faq");
    }else{
      router.push("/faq/attach-your-car");
    }
   
  }

  return (
    <div className={`faq `} id={data}>
      <div className={`faqContainer `} >

        <div className="SectionTitle">
          <h1>FAQ&#8217;s</h1>
          <p id="faqhome">On the road to answers</p>
          <Divider />
        </div>
     
        <div className="faqContainerQuestions">
  {questions?.map((question) => (
    <CollapsiblePanel 
      data={question} 
      key={uid(question)} 
      bgColor="WHITE" 
    />
  ))}
</div>


        

              
          <button onClick={handleViewAllClick} className="btn__FAQ">View All</button>
         
        
      </div>
    </div>
  );
};

export default Faq;
