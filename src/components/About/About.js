import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Lottie from "lottie-react";
import laptopImg from "../../Assets/About.json";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong style={{ color: "#DAA520" }}>I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "80px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Lottie animationData={laptopImg} loop={true} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong style={{ color: "#DAA520" }}>Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong style={{ color: "#DAA520" }}>Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
