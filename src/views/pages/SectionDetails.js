import { Button, Col, Container, Row } from "reactstrap";
import { WhassapButton } from "../../assets/Buttons/WhassapButton";



function SectionDetails() {

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
                    />
                    <Row>
                        <Col className="ml-auto mr-auto" md="8">
                            <h2 className="title-center" style={{ fontWeight: "400" }}>Transporte terrestre seguro</h2>
                            <h5 className="description" style={{ marginTop: "1rem" }}>
                                Amplia experiencia en el transporte de turistas nacionales e internacionales a los principales destinos turísticos de Colombia,
                                incluyendo la región del Eje Cafetero, el Caribe Colombiano, y la Amazonía. Conocimiento detallado de las rutas turísticas y
                                capacidad para ofrecer recomendaciones personalizadas a los pasajeros.
                            </h5>
                            <br />
                            <Button
                                className="btn-round"
                                color="info"
                                href="/profile-page"
                            >
                                Perfil del conductor
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
                                    <h4 className="info-title">Servicio y Atención al Cliente Garantizado</h4>
                                    <p className="description" style={{ marginTop: "1rem" }}>
                                        Fuerte enfoque en la satisfacción del cliente, brindando un trato amable y profesional a todos los pasajeros.
                                        Habilidad para comunicarse efectivamente tanto en español como en inglés básico, facilitando la interacción con turistas internacionales..
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
                                    <h4 className="info-title">Convenios con Hoteles y Aeropuertos</h4>
                                    <p className="description" style={{ marginTop: "1rem", }}>
                                        Colaboración a largo plazo con hoteles de renombre en Bogotá, ofreciendo servicios de transporte desde y hacia el Aeropuerto Internacional El Dorado.
                                        Habilidad para coordinar traslados puntuales y eficaces, manteniendo altos estándares de calidad en el servicio
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
                                    <h4 className="info-title">Conocimiento de la Legislación Vial</h4>
                                    <p className="description" style={{ marginTop: "1rem" }}>
                                        Profundo conocimiento de las leyes y normativas de tránsito en Colombia, incluyendo regulaciones específicas para el transporte de pasajeros.
                                        Cumplimiento riguroso de todas las normativas de seguridad y documentación requerida para operar legalmente.
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