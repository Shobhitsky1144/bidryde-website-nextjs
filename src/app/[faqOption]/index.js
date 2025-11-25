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
    const raw = params.faqOption.replace("faq-", "");
        setfaqData(getFAQ(raw));
  }, [params.faqOption]);

  const formatTitle = (text) => {
    if (!text) return "";
  
    // 1. Remove "faq-" from the start
    let cleaned = text.replace(/^faq-/, "");
  
    // 2. Convert special cases
    if (cleaned === "attach_your_car") return "Attach your Car";
    if (cleaned === "paymentCharges") return "Payment & Charges";
    if (cleaned === "deliveryCollection") return "Delivery & Collection";
  
    // 3. Replace underscores with spaces
    cleaned = cleaned.replace(/_/g, " ");
  
    // 4. Convert to Title Case
    return cleaned
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
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
