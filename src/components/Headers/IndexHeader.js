
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/header-profile.webp") + ")",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Safe Land Transport</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              ¡Fiabilidad sobre ruedas, donde quiera que te lleve el camino!
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
