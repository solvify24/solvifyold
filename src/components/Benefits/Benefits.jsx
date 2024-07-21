import React from "react";
import { Container, Card } from "react-bootstrap";

import "./benefits.css";

function Benefits() {
  return (
    <Container fluid id="benefits" className="benefits-section section">
      <Container>
        <h2 className="section-title">Benefits</h2>
        <ul className="benefits-list">
          <li>
            <Card className="card-transparent card-shadow">
              <Card.Body>
                <Card.Title>Customer-Centric Solutions</Card.Title>
                <Card.Text>
                  We prioritize our customers' needs and ensure our solutions
                  are tailored to meet their specific requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card className="card-transparent card-shadow">
              <Card.Body>
                <Card.Title>Cutting-Edge Technology</Card.Title>
                <Card.Text>
                  We leverage the latest advancements in technology to deliver
                  innovative and effective solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card className="card-transparent card-shadow">
              <Card.Body>
                <Card.Title>Unmatched Expertise</Card.Title>
                <Card.Text>
                  Our team comprises skilled professionals with a deep
                  understanding of the industry and the challenges we aim to
                  address. We benefit from industry expertise and guidance that
                  enhances our capabilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li>
            <Card className="card-transparent card-shadow">
              <Card.Body>
                <Card.Title>Proactive Support</Card.Title>
                <Card.Text>
                  We provide exceptional support to our customers, ensuring
                  their needs are met proactively and efficiently.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </Container>
    </Container>
  );
}

export default Benefits;
