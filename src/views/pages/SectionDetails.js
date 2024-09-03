import { Button, Col, Container, Row } from "reactstrap";
import { WhassapButton } from "../../assets/Buttons/WhassapButton";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";



function SectionDetails() {
    const { language, translations } = useContext(LanguageContext);
    return (
        <>
            <div className="section text-center">
                <Container>
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
                    <Row>
                        <Col className="ml-auto mr-auto" md="8" style={{ marginTop: "-3rem" }}>
                            <h2 className="title-center" style={{ fontWeight: "400" }}>{translations[language].home.body.title}</h2>
                            <h5 className="description" style={{ marginTop: "1rem" }}>
                                {translations[language].home.body.details}
                            </h5>
                            <br />
                            <Button
                                className="btn-round"
                                color="info"
                                href="/profile-page"
                            >
                                {translations[language].home.body.buttonProfile}
                            </Button>
                        </Col>
                    </Row>

                    <Row style={{ marginTop: "2rem" }}>
                        <Col md="4">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-single-02" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title"> {translations[language].home.body.srvices.client.title}</h4>
                                    <p className="description" style={{ marginTop: "1rem" }}>
                                        {translations[language].home.body.srvices.client.description}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-bullet-list-67" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">{translations[language].home.body.srvices.hotels.title}</h4>
                                    <p className="description" style={{ marginTop: "1rem", }}>
                                        {translations[language].home.body.srvices.hotels.description}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="info">
                                <div className="icon icon-info">
                                    <i className="nc-icon nc-bus-front-12" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">{translations[language].home.body.srvices.legislation.title}</h4>
                                    <p className="description" style={{ marginTop: "1rem" }}>
                                        {translations[language].home.body.srvices.legislation.description}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );

}

export default SectionDetails;