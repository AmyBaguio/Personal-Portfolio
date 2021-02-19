import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";


const styles = {
  project: {
    margin: "20px",
    backgroundColor: "#efebe9",
    padding: "3rem",
    fontFamily: "Arial",
    fontSize: "1.5rem",
    color: "#c97b63"
  },
};

function Project() {
  return (
    <Container fluid style={styles.project} className="ProjectTile">
      <Row>
        <Col xs={6} md={4}>
          <Image src="./image/Activynizer.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/Project2.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/ProgressiveBudget.png" thumbnail />
        </Col>
      </Row>
        <Row>
            <Col xs={6} md={4}>
            <p>Activynizer</p>
            </Col>
            <Col xs={6} md={4}>
            <p>Project 2</p>
            </Col>
            <Col xs={6} md={4}>
            <p>Budget Tracker</p>
            </Col>
        </Row>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./image/FitnessTracker.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/MyTeam.png" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="./image/BurgerApp.png" thumbnail />
        </Col>
      </Row>
      <Row>
            <Col xs={6} md={4}>
            <p>Fitness Tracker</p>
            </Col>
            <Col xs={6} md={4}>
            <p>My Team</p>
            </Col>
            <Col xs={6} md={4}>
            <p>Burger App</p>
            </Col>
        </Row>
    </Container>
  );
}
export default Project;
