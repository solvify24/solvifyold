import React from "react";
import { Container, Carousel, CarouselCaption } from "react-bootstrap";


function Benefits() {
  return (
    <Container fluid id="benefits" className="benefits-section section">
      <Container>
        <h2 className="section-title">Benefits</h2>
        <Carousel data-bs-theme="dark">
          <Carousel.Item interval={1000}>
            <img src="" alt="" />
            <Container>
              <h5>Customer-Centric Solutions</h5>
              <p>We prioritize our customers' needs and ensure our solutions
                are tailored to meet their specific requirements.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Container>
              <h5>Cutting-Edge Technology</h5>
              <p>We leverage the latest advancements in technology to deliver
                innovative and effective solutions.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Container>
              <h5>Unmatched Expertise</h5>
              <p>Our team comprises skilled professionals with a deep
                understanding of the industry and the challenges we aim to
                address. We benefit from industry expertise and guidance that
                enhances our capabilities.</p>
            </Container>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <Container>
              <h5>Proactive Support</h5>
              <p>We provide exceptional support to our customers, ensuring
                their needs are met proactively and efficiently.</p>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container >
  );
}

export default Benefits;
