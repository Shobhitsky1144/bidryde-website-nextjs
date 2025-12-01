import React from "react";
import Searchbar from "./Components/Searchbar";
import { Divider, Footer, Navbar } from "@/Components";
import "./faq.scss";
import { assets } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import FloatingButton from "@/Components/FloatingButton"; // Ensure the import is correct

const faqOptions = [
  {
    title: "General",
    icon: assets.images.faqPage.generalCar,
    link: "general",
  },
  {
    title: "Bid Help",
    icon: assets.images.faqPage.BidHelp,
    link: "bid-help",
  },
  {
    title: "Trip Help",
    icon: assets.images.faqPage.TripIcon,
    link: "trip-help",
  },
  {
    title: "Delivery & Collection",
    icon: assets.images.faqPage.DeliveryCollection,
    link: "delivery-collection",
  },
  {
    title: "Account Help",
    icon: assets.images.faqPage.accountHelp,
    link: "account-help",
  },
  {
    title: "Payment & Charges",
    icon: assets.images.faqPage.PaymentCharges,
    link: "payment-charges",
  },
  {
    title: "Attach your Car",
    icon: assets.images.faqPage.HostCar,
    link: "attach-your-car",
  },
];

const Faq = () => {
  return (
    <>
      <Navbar />
      <div className="faqPage">
        <div className="faqPageContainer">
          <div className="faqHeader">
            <div className="titleContainer">
              <div className="title">FAQ&#8217;s</div>
              <div className="subtitle">On the road to answers</div>
              <Divider />
            </div>
            <div className="searchField">
              <Searchbar suggestions={faqOptions} />
            </div>
          </div>

          <div className="faqOptions">
            {faqOptions.map((faq, index) => (
              <Link href={"faq/" + faq.link} key={index}>
                <div className="faqOptionCard">
                  <p className="faq-title">{faq.title}</p>
                  <Image src={faq.icon} alt="faq Option" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <div className="floatingButton">
        {/* FloatingButton component */}
        <FloatingButton />
      </div>
    </>
  );
};

export default Faq;
