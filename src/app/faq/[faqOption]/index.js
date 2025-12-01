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
    let raw = params.faqOption.replace("faq/", "");
  
    // Convert dash-case to snake_case
    raw = raw.replace(/-/g, "_");
  
    setfaqData(getFAQ(raw));
  }, [params.faqOption]);
  

  const formatTitle = (text) => {
    if (!text) return "";
  
    // Remove prefix like "faq/" , "faq-"
    let cleaned = text.replace(/^faq[\/-]?/, "");
  
    // Special cases mapping
    const specialMap = {
      attach_your_car: "Attach your Car",
      paymentCharges: "Payment & Charges",
      deliveryCollection: "Delivery & Collection",
    };
  
    if (specialMap[cleaned]) return specialMap[cleaned];
  
    // Convert '-' to space
    cleaned = cleaned.replace(/-/g, " ");
  
    // Convert '_' to space
    cleaned = cleaned.replace(/_/g, " ");
  
    // Convert to Title Case
    return cleaned
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  
  
  
  
  

  return (
    <>
    {console.log("PARAMS:", params)}
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
    <span className="breadcrumb">FAQ&#8217;s &gt;</span>
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
