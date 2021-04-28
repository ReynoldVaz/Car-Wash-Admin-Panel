import React, { Component } from 'react';
import {
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
} from 'reactstrap';
import laptopImage from '../../assets/images/laptop.jpeg';

class CardsPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col md={4}>
          <Card>
            <CardHeader>
              <b>Foam Wash</b>
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin
              egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu
            </CardBody>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <CardHeader>
              <b>Simple car Wash</b>
            </CardHeader>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id neque quam. Aliquam-a-0 m-b-smitudin
              egestas dui nec, fermentum diam. Vivamus vel tincidunt libero, vitae elementu
            </CardBody>
          </Card>
        </Col>
        <Col md={4}>
          <Button color="primary">Add Services</Button>
        </Col>
      </Row>
    );
  }
}

export default CardsPage;
