import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
function ProductCard(props) {
  return (
    <Card className="product-card card-shadow card-transparent">
      <Card.Body>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ProductCard;

