import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./approach.css";

function Approach() {
  return (
    <Container id="approach" className="approach-section section">
      <h2 className="section-title">Our Approach</h2>
      <p className="section-description">
        At Solvify, we believe in a customer-centric approach that involves
        deeply understanding the needs of our users and the challenges they
        face. Our unique process ensures that every solution we develop is
        thoroughly researched, meticulously crafted, and rigorously tested. Our
        methodology includes the following steps:
      </p>
      <Row style={{ paddingBottom: "2em" }}>
        <Col lg={4}>
          <Card className="card-border card-transparent">
            <Card.Body>
              <Card.Title className="card-title">Discover & Define</Card.Title>
              <Card.Text>
                We begin by discovering the core issues and defining the scope
                of impact, ensuring we address the most pressing needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="card-border card-transparent">
            <Card.Body>
              <Card.Title className="card-title">
                Innovate & Strategize
              </Card.Title>
              <Card.Text>
                Through comprehensive market research and strategic planning, we
                devise innovative solutions that are both practical and
                impactful.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card className="card-border card-transparent">
            <Card.Body>
              <Card.Title className="card-title">Create & Refine</Card.Title>
              <Card.Text>
                We develop prototypes and refine them through an iterative
                process, incorporating continuous feedback to perfect the final
                product.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p className="section-description">
        Our emphasis on continuous feedback and iteration ensures that our
        solutions are not only effective but also aligned with the evolving
        needs of our customers.
      </p>
    </Container>
  );
}

export default Approach;
