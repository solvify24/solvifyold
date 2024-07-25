import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  AiFillInstagram,
} from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
  return (
    <Container fluid className="social-section">
      <Row>
        <Col md={12}>
          <h1>REACH US</h1>
          <p>
            Feel free to <span className="color-main">connect </span>with us
          </p>
          <ul className="social-links">
            <li className="social-icons">
              <a
                href="mailto:solvify.founders@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour icon"
              >
                <IoIosMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour icon"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour icon"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialLinks;
