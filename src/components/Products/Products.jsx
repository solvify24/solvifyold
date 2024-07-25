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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
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
