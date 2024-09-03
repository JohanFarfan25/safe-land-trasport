import React from "react";

// reactstrap components

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import IndexHeader from "../components/Headers/IndexHeader.js";
import Footer from "../components/Footers/Footer.js";

// index sections
import SectionDetails from "./pages/SectionDetails.js";


function Home() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionDetails />
        <Footer />
      </div>
    </>
  );
}

export default Home;
