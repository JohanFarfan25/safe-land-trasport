
import React, { useContext } from "react";

//Hoks


// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import ProfilePageHeader from "../../components/Headers/ProfilePageHeader";
import Footer from "../../components/Footers/Footer";
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import { WhassapButton } from "../../assets/Buttons/WhassapButton";
import { LanguageContext } from "../../context/LanguageContext";


// core components

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const { language, translations} = useContext(LanguageContext);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner" style={{ marginTop: "4rem" }}>
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("../../assets/img/faces/avatar-profile.png")}
              />
            </div>
            <div className="name">
              <h4 className="info-title" style={{ fontWeight: "400" }}>
                {translations[language].profile.title}<br />
              </h4>
              <h6 className="info-title">{translations[language].profile.subtitle}</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6" >
              <p className="description" style={{ fontSize: "16px" }}>
                {translations[language].profile.description}
              </p>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation" style={{ marginTop: "2rem" }}>
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => toggle("1")}
                  >
                    {translations[language].profile.skills.one.title}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => toggle("2")}
                  >
                    {translations[language].profile.skills.two.title}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => toggle("3")}
                  >
                    {translations[language].profile.skills.tree.title}
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab} style={{ marginTop: "2rem" }}>
            <TabPane className="text-center" tabId="1" id="option1">
              <h3 className="text-muted ">{translations[language].profile.skills.one.description}</h3>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="option2">
              <h3 className="text-muted">{translations[language].profile.skills.two.description}</h3>
            </TabPane>
            <TabPane className="text-center" tabId="3" id="option3">
              <h3 className="text-muted">{translations[language].profile.skills.tree.description}</h3>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <WhassapButton
        className={"btn-round whatsapp-button"}
        styles={{
          backgroundColor: "#25D366",
          borderColor: "#25D366",
          color: "white",
          animation: "pulse 1.5s infinite",
          transition: "background-color 0.3s ease",
        }}
        styleI={{ color: "white" }}
        value={translations[language].navBar.whatsAppButton}
      />
      <Footer />
    </>
  );
}

export default ProfilePage;
