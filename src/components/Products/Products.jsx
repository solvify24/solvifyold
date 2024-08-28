import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import chatify from "../../Assets/Projects/chatify.jpg";

function Products() {
  return (
    <Container fluid className="product-section section" id="products">
      <Container>
        <h1 className="section-title">
          Our <strong className="color-light">Products </strong>
        </h1>
        <p>
          Here are a few products we are working on recently.
        </p>
        <Row style={{ paddingBottom: "10px" }}>
          <Col md={6}>
            <ProductCard
              imgPath={chatify}
              isBlog={false}
              title="BAASHA"
              description="Baasha is an innovative solution that enhances road safety by providing real-time alerts for hotspot regions using geofencing technology. With automated updates and speed limit notifications, Baasha promotes cautious driving and helps reduce accident rates effectively."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Products;
