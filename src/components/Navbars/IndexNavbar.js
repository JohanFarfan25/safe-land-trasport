
import React, { useState } from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
} from "reactstrap";
import { WhassapButton } from "../../assets/Buttons/WhassapButton";
import { LogoSltHeader } from "../../assets/icons/Logos";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
            title="Coded by Creative Tim"
            style={{ padding: "0" }}
          >
            <LogoSltHeader width="140px" height="60px" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Row>
            <Nav navbar>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="/home"
                  title="Home"
                >
                  <i className="fa fa-home"></i> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/profile-page"
                >
                  <i className="fa fa-user" /> Perfil del condutor
                </NavLink>
              </NavItem>
              <NavItem className="button-whassap">
                <WhassapButton
                  className={"whatsapp-button-mobile"}
                  styles={{
                    backgroundColor: "#25D366",
                    borderColor: "#25D366",
                    color: "white",
                    animation: "pulse 1.5s infinite",
                    transition: "background-color 0.3s ease",
                  }}
                  styleI={{ color: "white" }}
                />
              </NavItem>
            </Nav>
          </Row>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
