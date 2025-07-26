"use client";
import { CollapsiblePanel, Divider, Footer, Navbar } from "@/Components";
import React, { useEffect, useState } from "react";
import "./FaqOption.scss";
import { uid } from "react-uid";
import { getFAQ, getHostFAQ } from "@/utils/faq_handler";

const FaqOption = ({ params }) => {

  const [faqData,setfaqData] = useState([]);

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    console.log(params);
    const option = params.faqOption;
    setfaqData(getHostFAQ(option));
  }, [])

  return (
    <div className="faqOption">
      <Navbar />
      <div className="faqOptionContainer">
        <h1>{capitalize(params.faqOption)}</h1>
        <div className="faqOptionContainerQuestions">
          {faqData.map((question) => (
            <>
              <div className="colored_Item">
              <CollapsiblePanel
          key={index}
          data={question}
          bgColor="blue" // Alternating colors
        />
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FaqOption;
