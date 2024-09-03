
import React from "react";

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

// core components

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

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
                Jeisson Andres Farfan Sierra <br />
              </h4>
              <h6 className="info-title">Conductor</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6" >
              <p className="description" style={{fontSize:"16px"}}>
                Conductor altamente experimentado con más de 25 años de trayectoria en la conducción de vehículos de transporte de pasajeros,
                especializado en el transporte de turistas por todo el territorio colombiano.
                A lo largo de su carrera, ha demostrado un compromiso excepcional con la seguridad vial, la puntualidad, y la satisfacción del cliente,
                lo que le ha permitido establecer relaciones sólidas con hoteles, agencias de viajes y operadores turísticos, especialmente en la ciudad de Bogotá..
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
                    Adaptabilidad
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => toggle("2")}
                  >
                    Gestión del Tiempo
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => toggle("3")}
                  >
                    Orientación al Detalle
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          <TabContent className="following" activeTab={activeTab} style={{ marginTop: "2rem" }}>
            <TabPane className="text-center" tabId="1" id="option1">
              <h3 className="text-muted ">Capacidad para adaptarse a diferentes condiciones climáticas y de carretera, garantizando siempre la seguridad y el confort de los pasajeros.</h3>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="option2">
              <h3 className="text-muted">Habilidad para gestionar rutas y tiempos de manera eficiente, asegurando el cumplimiento de itinerarios preestablecidos.</h3>
            </TabPane>
            <TabPane className="text-center" tabId="3" id="option3">
              <h3 className="text-muted">Meticuloso en la revisión diaria del vehículo y en la planificación de rutas, minimizando riesgos y optimizando la experiencia del pasajero.</h3>
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
      />
      <Footer />
    </>
  );
}

export default ProfilePage;
