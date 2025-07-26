import { CssButtonOutline, Footer, Navbar } from "@/Components";
import { assets } from "@/assets";
import Image from "next/image";

export default function Custom404() {
  // Base styles
  const pageStyle = {
    height: "100%",
    backgroundColor: "#D4E9FF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "1rem",
    overflow: "hidden",
    minHeight: "calc(100vh - 64px)",
  };

  const contentStyle = {
    zIndex: "10",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "archivo",
    textAlign: "center",
    padding: "2rem",
    maxWidth: "100%",
  };

  const headingStyle = {
    margin: "2%",
    fontSize: "clamp(2rem, 8vw, 3rem)",
    lineHeight: "1.2",
  };

  const subHeadingStyle = {
    margin: "5%",
    fontSize: "clamp(1rem, 4vw, 1.5rem)",
    lineHeight: "1.3",
  };

  const vectorStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  };

  const imageStyle = {
    width: "clamp(60px, 15vw, 100px)",
    height: "auto",
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#D4E9FF",
      }}
    >
      <Navbar />
      <main style={pageStyle}>
        <div style={contentStyle}>
          <div style={{ marginBottom: "1rem" }}>
            <Image
              src={assets.images.operatingZones.locationPin}
              alt="Location Pin"
              width={100}
              height={100}
              style={imageStyle}
            />
          </div>
          <h1 style={headingStyle}>Oops</h1>
          <h5 style={subHeadingStyle}>Page not found</h5>
          <CssButtonOutline
            title="Find rental cars"
            backgroundColor="#FFFFFF"
            textColor="#276EBC"
            margin="0 0.5rem"
            border="1px solid #276EBC"
            width="150px"
            height="50px"
          />
        </div>
        <div style={vectorStyle}>
          <svg
            viewBox="0 0 1920 980"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M-106.522 -313.987C-180.882 -165.872 -111.226 35.6302 -0.202153 203.844C99.5527 354.983 293.021 368.913 473.159 350.348C597.968 337.486 725.178 363.174 830.306 485.506"
              stroke="#276EBC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="36 36"
            />
            <path
              d="M2059.5 188.499C2067.37 354.045 1921.95 509.957 1752.23 618.66C1599.74 716.329 1417.25 650.568 1260.14 560.515C1151.28 498.121 1024.59 469.99 878.873 539.148"
              stroke="#276EBC"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="36 36"
            />
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
}
