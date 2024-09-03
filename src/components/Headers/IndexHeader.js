
import React, { useContext } from "react";

// reactstrap components
import { Container } from "reactstrap";
import { LanguageContext } from "../../context/LanguageContext";

// core components

function IndexHeader() {

  const { language, translations} = useContext(LanguageContext);
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
              <h1 className="presentation-title">{translations[language].home.header.title}</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              {translations[language].home.header.subtitle}
            </h2>
          </Container>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
