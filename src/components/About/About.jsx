import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./about.css";

function About() {
  return (
    <Container fluid className="about-section section" id="about">
      <Container>
        <h1 className="section-title">About us</h1>
        <Row>
          <Col sm={12} className="section-description">
            <p className="about-body">
              Solvify is not just a startup; it's a testament to youthful
              passion and innovative spirit. Pre-incubated at Technology
              Business Incubator of Thiagarajar College of Engineering, Madurai,
              Solvify was founded by five visionary students from the Computer
              Science & Business Systems Department. With a commitment to
              tackling societal challenges through creative, market-centric
              solutions, our journey is one of inspiration and relentless
              pursuit of excellence.
            </p>
            <h2 style={{ fontSize: "1.6em", padding: "1em 0em 0.2em 0em" }}>
              Our story
            </h2>
            <p>
              Our story began in August 2023 with the "Accident Prevention
              System" project at the Madurai Tech Community. This initiative
              laid the foundation for our mission to create impactful
              technology. Over the next six months, we engaged in rigorous
              market research and in-depth customer interactions, refining our
              ideas and understanding the real-world needs of our users. This
              diligent process culminated in the development of a robust
              prototype at PALS IITM in January 2024. By July 2024, our
              relentless hard work and innovative approach bore fruit, and
              Solvify officially launched as a startup
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
