
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";
import { IconFacebook, IconInstagram, IconTikTok } from "../../assets/icons/SocialNetworks";
import { LogoSltFooter } from "../../assets/icons/Logos";

function Footer() {
  return (
    <footer className="footer footer-white" >
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.tiktok.com/@yeyefar?lang=es"
                  target="_blank"
                >
                  <IconTikTok color={"white"} width={20} height={20} />
                  Tik tok
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <IconInstagram color={"white"} width={20} height={20} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/angel8921"
                  target="_blank"
                >
                  <IconFacebook color={"white"} width={23} height={23} />
                  Facebook
                </a>
              </li>
            </ul>
          </nav>

          <div style={{ textAlign: "center", flex: 1 }}>
            <LogoSltFooter width="140px" height="60px" />
          </div>

          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Bogotá Colombia
              <i className="fa fa-heart heart" /> Safe Land Transport
            </span>
          </div>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;
