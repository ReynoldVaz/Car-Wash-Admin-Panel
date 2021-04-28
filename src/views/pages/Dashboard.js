import React, { Component } from 'react';
//import reactFeature from '../../assets/images/react-feature.svg';
//import sassFeature from '../../assets/images/sass-feature.svg';
//import bootstrapFeature from '../../assets/images/bootstrap-feature.svg';
//import responsiveFeature from '../../assets/images/responsive-feature.svg';
import { Card, CardBody, Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    const heroStyles = {
      padding: '50px 0 70px',
    };

    return (
      <div>
        <Row>
          <Col md={6}>
            <div className="home-hero" style={heroStyles}>
              <h1>Welcome to Smart Car Wash.</h1>
              <p className="text-muted">One place destination to ease your management.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                {/*
                <img src={reactFeature} style={{ width: 70, height: 70 }} alt="react.js" aria-hidden={true} />
               */}
                <div className="m-l">
                  <h2 className="h4">Manage Your Center</h2>
                  <p className="text-muted">Center management made easier.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                {/* <img src={bootstrapFeature} style={{ width: 70, height: 70 }} alt="Bootstrap" aria-hidden={true} />
                 */}
                <div className="m-l">
                  <h2 className="h4">Manage Your Time</h2>
                  <p className="text-muted">Update Your Schedule accordingly.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                {/* <img src={sassFeature} style={{ width: 70, height: 70 }} alt="Sass" aria-hidden={true} />
                 */}
                <div className="m-l">
                  <h2 className="h4">Avoid Crowd</h2>
                  <p className="text-muted">Avoid unnecessary crowd at your centre.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <CardBody className="display-flex">
                {/* <img src={responsiveFeature} style={{ width: 70, height: 70 }} alt="Responsive" aria-hidden={true} />
                 */}
                <div className="m-l">
                  <h2 className="h4">Manage Your Customers</h2>
                  <p className="text-muted">Customer management made easier.</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
