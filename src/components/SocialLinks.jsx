import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
  return (
    <Container className="social-section">
      <Row>
        <Col md={12}>
          <h1>REACH US</h1>
          <p>
            Feel free to <span className="color-light">connect </span>with us
          </p>
          <ul className="social-links">
            <li className="social-icons">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour icon"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour icon"
              >
                <AiOutlineTwitter />
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
