"use client";
import { CollapsiblePanel, Divider, Footer, Navbar } from "@/Components";
import React, { useEffect, useState } from "react";
import "./FaqOption.scss";
import { uid } from "react-uid";
import { getFAQ } from "@/utils/faq_handler";
import FloatingButton from "@/Components/FloatingButton";
import Link from "next/link";

const FaqOption = ({ params }) => {
  const [faqData, setfaqData] = useState([]);

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    const option = params.faqOption;
    setfaqData(getFAQ(option));
  }, [params.faqOption]);

  const formatTitle = (text) => {
    if (!text) return "";
  
    // Special case: if it's exactly "host_a_car"
    if (text === "attach_your_car") return "Attach your Car";

    if (text === "paymentCharges") return "Payment & Charges";

    if (text === "deliveryCollection") return "Delivery & Collection";
  
    // Default: Convert to Title Case
    return text
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  

  return (
    <>
    <Navbar />
    <div className="faqOption">
      <div className="faqOptionContainer">
        {/* Heading with breadcrumb and title  ,*/}
        {/* <h1 className="faqHeading">
          <Link href="/faq">
            <span className="breadcrumb">FAQ&apos;s &gt;</span>
          </Link>
          <span className="pageTitle">{formatTitle(params.faqOption)}</span>
        </h1> */}
        <h1 className="faqHeading">
  <Link href="/faq">
    <span className="breadcrumb">FAQ&apos;s &gt;</span>
  </Link>
  <span className="pageTitle">{formatTitle(params.faqOption)}</span>
</h1>

        <div className="faqOptionContainerQuestions">
          {faqData?.map((question) => (
            <div className="colored_Item" key={uid(question)}>
              <CollapsiblePanel data={question} />
            </div>
          ))}
        </div>
        <div className="floatingButton">
          <FloatingButton />
        </div>
      </div>
      <Footer />
    </div>
  </>
  );
};

export default FaqOption;
